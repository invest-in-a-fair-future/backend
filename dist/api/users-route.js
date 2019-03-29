"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRoute = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _config = _interopRequireDefault(require("../config/config"));

var _auth = require("../auth");

var _log4js = _interopRequireDefault(require("log4js"));

var _DB = require("../DB");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UsersRoute =
/*#__PURE__*/
function () {
  function UsersRoute() {
    _classCallCheck(this, UsersRoute);
  }

  _createClass(UsersRoute, null, [{
    key: "getLogger",
    value: function getLogger() {
      if (!UsersRoute.logger) {
        UsersRoute.logger = _log4js.default.getLogger();
        UsersRoute.logger.addContext('source', 'UsersRoute');
      }

      return UsersRoute.logger;
    }
  }, {
    key: "configure",
    value: function configure(router) {
      var _this = this;

      router.post('/users', function (req, resp) {
        var user = req.body;

        if (!user) {
          return resp.status(400).json({
            'code': 'INVCRUSR01',
            'message': 'No user information sent.'
          });
        }

        if (!user.email || !user.name || !user.type || !user.password || !user.country) {
          return resp.status(400).json({
            'code': 'INVCRUSR02',
            'message': 'Invalid or missing information.'
          });
        } else if (user.type !== 'company' && !user.type !== 'partner' && !user.type !== 'comminityRepresentative') {
          return resp.status(400).json({
            'code': 'INVCRUSR02',
            'message': 'Invalid or missing information.'
          });
        }

        user.password = _bcrypt.default.hashSync(user.password, _config.default.users.salt);

        _DB.DB.getCollection('users').then(function (users) {
          return users.findOne({
            email: user.email
          }).then(function (dbUser) {
            if (!dbUser) {
              return users.insertOne(user);
            } else {
              var e = new Error('User already exists');
              e.passMessage = true;
              throw e;
            }
          });
        }).then(function (result) {
          if (result.result.ok < 1) {
            throw new Error('Unable to add user');
          }

          var createdUser = result.ops[0];
          delete createdUser.password;
          createdUser.id = createdUser._id;
          delete createdUser._id;

          var credentials = _auth.Auth.generateToken(createdUser);

          return resp.status(201).json({
            user: createdUser,
            credentials: credentials
          });
        }).catch(function (e) {
          _this.getLogger().error(e);

          if (e.passMessage) {
            return resp.status(500).json({
              code: 'INVCRUSR501',
              message: e.message
            });
          } else {
            return resp.status(500).json({
              code: 'INVCRUSR500',
              message: 'Unable to create user.'
            });
          }
        });
      });
      router.get('/users', function (req, resp) {
        resp.json({
          "country": "NL",
          "phoneNumber": "+31600000000",
          "name": "Invest in a Fair Future",
          "id": "c447d376-6a46-4e98-89da-f86a81255503",
          "type": "company",
          "email": "john@investinafairfuture.org"
        });
      });
      router.put('/users', function (req, resp) {
        resp.json({
          "country": "NL",
          "phoneNumber": "+31600000000",
          "name": "Invest in a Fair Future",
          "id": "c447d376-6a46-4e98-89da-f86a81255503",
          "type": "company",
          "email": "john@investinafairfuture.org"
        });
      });
    }
  }]);

  return UsersRoute;
}();

exports.UsersRoute = UsersRoute;
//# sourceMappingURL=users-route.js.map