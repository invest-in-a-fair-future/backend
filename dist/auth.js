"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Auth = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

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
    key: "configure",
    value: function configure(app) {
      var dotenv = require('dotenv');

      dotenv.config();
      this.configureExpress(app);
      this.configurePassport(app);
    }
  }, {
    key: "configurePassport",
    value: function configurePassport(app) {
      var localStrategy = new _passportLocal.default(function (username, password, done) {
        //check username & password
        done(null, user);
      });

      _passport.default.use(localStrategy);
    }
  }, {
    key: "configureExpress",
    value: function configureExpress(app) {
      var session = require('express-session'); // config express-session


      var sess = {
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
  }]);

  return Auth;
}();

exports.Auth = Auth;
//# sourceMappingURL=auth.js.map