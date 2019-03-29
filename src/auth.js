/* jshint esversion: 6 */
import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcyrpt from 'bcrypt';
import log4js from 'log4js';
import jwt from 'jsonwebtoken';
import config from './config/config';

export class Auth {

  static getLogger() {
    if(!Auth.logger) {
      Auth.logger = log4js.getLogger();
      Auth.logger.addContext('source', 'Auth');
    }

    return Auth.logger;
  }

  static configure(app) {
    const dotenv = require('dotenv');
    dotenv.config();

    // this.configureExpress(app);
    this.configurePassport(app);
  }

  static configurePassport(app) {
    const localStrategy = new LocalStrategy((username, password, done) => {
      DB.getCollection('users')
        .then((users) => {
          return users.findOne({ email: username});
        })
        .then(user => {
          if(!user) {
            throw new Error('User not found');
          }
          const result = bcyrpt.compareSync(password, user.password);
          if(result){
            return user;
          } else {
            throw new Error('Invalid password');
          }
        })
        .then(user => {
          done(null, user);
        })
        .catch(e => {
          this.getLogger().error(e);
          done(null, false, { message :'Unable to authenticate.' });
        });

      done(null, user);
    });
    passport.use(localStrategy);
  }

  static generateToken(user) {
    delete user.password;
    this.getLogger().info(user);
    const credentials = {
      token: jwt.sign(user, config.users.secret, {
        expiresIn: '30d'
      }),
      validUntil: new Date()
    };
    credentials.validUntil.setDate(credentials.validUntil.getDate() + 30);
    return credentials;
  }
  //
  // static configureExpress(app) {
  //   const session = require('express-session');
  //
  //   // config express-session
  //   const sess = {
  //     secret: process.env.SESSION_SECRET,
  //     cookie: {},
  //     resave: false,
  //     saveUninitialized: true
  //   };
  //
  //   if (app.get('env') === 'production') {
  //     sess.cookie.secure = true; // serve secure cookies, requires https
  //   }
  //
  //   app.use(session(sess));
  // }
}