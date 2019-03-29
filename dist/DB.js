"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DB = void 0;

var _mongodb = require("mongodb");

var _config = _interopRequireDefault(require("config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DB =
/*#__PURE__*/
function () {
  function DB() {
    _classCallCheck(this, DB);
  }

  _createClass(DB, null, [{
    key: "getClient",
    value: function getClient() {
      return new Promise(function (resolve, reject) {
        if (!DB.client) {
          _mongodb.MongoClient.connect(_config.default.db.url, function (e, client) {
            if (err) {
              return reject(e);
            }

            DB.client = client;
            resolve(DB.client);
          });
        } else {
          resolve(DB.client);
        }
      });
    }
  }, {
    key: "getCollection",
    value: function getCollection(name) {
      return new Promise(function (resolve, reject) {
        DB.getClient().then(function (client) {
          var collection = client.collection(name);
          resolve(collection);
        }).catch(reject);
      });
    }
  }]);

  return DB;
}();

exports.DB = DB;
//# sourceMappingURL=DB.js.map