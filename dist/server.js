"use strict";

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config/config"));

var log4js = _interopRequireWildcard(require("log4js"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _auth = require("./auth");

var _companiesRoute = require("./api/companies-route");

var _usersRoute = require("./api/users-route");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint esversion: 6 */
var app = (0, _express.default)(),
    port = 8001 || process.env.PORT;
var logger = log4js.getLogger();
log4js.configure(_config.default.log4js);
logger.addContext('source', 'app');

var router = _express.default.Router();

var corsConfig = _config.default.cors || {
  'origin': '*',
  'headers': '*',
  'methods': '*'
};
var whitelist = corsConfig.origin;
var corsOptions = {
  origin: function origin(_origin, callback) {
    var isWildcard = whitelist.indexOf('*') !== -1;
    var originIsWhitelisted = whitelist.indexOf(_origin) !== -1;
    var isAllowed = isWildcard || originIsWhitelisted;
    callback(null, isAllowed);
  }
};
app.use((0, _cors.default)(corsOptions));
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());

_auth.Auth.configure(app);

_companiesRoute.CompaniesRoute.configure(router);

_usersRoute.UsersRoute.configure(router);

app.use('/api', router);
app.listen(port, function () {
  logger.info("App started at ".concat(port));
});
require('events').EventEmitter.defaultMaxListeners = 0;
//# sourceMappingURL=server.js.map