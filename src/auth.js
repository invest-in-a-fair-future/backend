/* jshint esversion: 6 */
import passport from 'passport';
import LocalStrategy from 'passport-local';

export class Auth {

  static configure(app) {
    const dotenv = require('dotenv');
    dotenv.config();

    this.configureExpress(app);
    this.configurePassport(app);
  }

  static configurePassport(app) {
    const localStrategy = LocalStrategy((username, password, done => {
      //check username & password
      done(null, user);
    }));
    passport.use(localStrategy);
  }

  static configureExpress(app) {
    const session = require('express-session');

    // config express-session
    const sess = {
      secret: process.env.SESSION_SECRET,
      cookie: {},
      resave: false,
      saveUninitialized: true
    };

    if (app.get('env') === 'production') {
      sess.cookie.secure = true; // serve secure cookies, requires https
    }

    app.use(session(sess));
  }
}