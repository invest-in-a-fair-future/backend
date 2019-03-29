"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompaniesRoute = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CompaniesRoute =
/*#__PURE__*/
function () {
  function CompaniesRoute() {
    _classCallCheck(this, CompaniesRoute);
  }

  _createClass(CompaniesRoute, null, [{
    key: "configure",
    value: function configure(router) {
      router.post('/companies', function (req, resp) {
        resp.json({
          "country": "NL",
          "phoneNumber": "+31600000000",
          "address": "Tractieweg 41, 3534 AP Utrecht",
          "taxId": "12345678901",
          "name": "Invest in a Fair Future B.V.",
          "id": "40dc9d2b-7b38-47f4-9d23-581ca427d9bc",
          "email": "info@investinafairfuture.org"
        });
      });
      router.get('/companies', function (req, resp) {
        resp.json({
          "companies": [{
            "country": "NL",
            "phoneNumber": "+31600000000",
            "address": "Tractieweg 41, 3534 AP Utrecht",
            "taxId": "12345678901",
            "name": "Invest in a Fair Future B.V.",
            "id": "40dc9d2b-7b38-47f4-9d23-581ca427d9bc",
            "email": "info@investinafairfuture.org"
          }, {
            "country": "NL",
            "phoneNumber": "+31600000000",
            "address": "Tractieweg 41, 3534 AP Utrecht",
            "taxId": "12345678901",
            "name": "Invest in a Fair Future B.V.",
            "id": "40dc9d2b-7b38-47f4-9d23-581ca427d9bc",
            "email": "info@investinafairfuture.org"
          }]
        });
      });
      router.put('/companies/{companyId}', function (req, resp) {
        resp.json({
          "country": "NL",
          "phoneNumber": "+31600000000",
          "address": "Tractieweg 41, 3534 AP Utrecht",
          "taxId": "12345678901",
          "name": "Invest in a Fair Future B.V.",
          "id": "40dc9d2b-7b38-47f4-9d23-581ca427d9bc",
          "email": "info@investinafairfuture.org"
        });
      });
    }
  }]);

  return CompaniesRoute;
}();

exports.CompaniesRoute = CompaniesRoute;
//# sourceMappingURL=companies-route.js.map