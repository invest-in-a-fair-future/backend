"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRoute = void 0;

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
    key: "configure",
    value: function configure(router) {
      router.post('/users', function (req, resp) {
        resp.json({
          "country": "NL",
          "phoneNumber": "+31600000000",
          "name": "Invest in a Fair Future",
          "id": "c447d376-6a46-4e98-89da-f86a81255503",
          "type": "company",
          "email": "john@investinafairfuture.org"
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