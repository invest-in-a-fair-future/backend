"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Auth = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _log4js = _interopRequireDefault(require("log4js"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);
  }

  _createClass(Auth, null, [{
    key: "getLogger",
    value: function getLogger() {
      if (!Auth.logger) {
        Auth.logger = _log4js.default.getLogger();
        Auth.logger.addContext('source', 'Auth');
      }

      return Auth.logger;
    }
  }, {
    key: "configure",
    value: function configure(app) {
      var dotenv = require('dotenv');

      dotenv.config(); // this.configureExpress(app);

      this.configurePassport(app);
    }
  }, {
    key: "configurePassport",
    value: function configurePassport(app) {
      var _this = this;

      var localStrategy = new _passportLocal.default(function (username, password, done) {
        DB.getCollection('users').then(function (users) {
          return users.findOne({
            email: username
          });
        }).then(function (user) {
          if (!user) {
            throw new Error('User not found');
          }

          var result = _bcrypt.default.compareSync(password, user.password);

          if (result) {
            return user;
          } else {
            throw new Error('Invalid password');
          }
        }).then(function (user) {
          done(null, user);
        }).catch(function (e) {
          _this.getLogger().error(e);

          done(null, false, {
            message: 'Unable to authenticate.'
          });
        });
        done(null, user);
      });

      _passport.default.use(localStrategy);
    }
  }, {
    key: "generateToken",
    value: function generateToken(user) {
      delete user.password;
      this.getLogger().info(user);
      var credentials = {
        token: _jsonwebtoken.default.sign(user, _config.default.users.secret, {
          expiresIn: '30d'
        }),
        validUntil: new Date()
      };
      credentials.validUntil.setDate(credentials.validUntil.getDate() + 30);
      return credentials;
    } //
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

  }]);

  return Auth;
}();

exports.Auth = Auth;
//# sourceMappingURL=auth.js.map