'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdentityVerification = exports.UserData = exports.Snippet = exports.User = exports.Client = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _snippet = require('./snippet');

var _snippet2 = _interopRequireDefault(_snippet);

var _userData = require('./user-data');

var _userData2 = _interopRequireDefault(_userData);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

exports.Client = _client2.default;
exports.User = _user2.default;
exports.Snippet = _snippet2.default;
exports.UserData = _userData2.default;

var IdentityVerification = exports.IdentityVerification = function () {
  function IdentityVerification() {
    _classCallCheck(this, IdentityVerification);
  }

  _createClass(IdentityVerification, null, [{
    key: 'userHash',
    value: function userHash(params) {
      var secretKey = params.secretKey;
      var identifier = params.identifier;
      if (!secretKey) {
        throw new Error('secretKey must be provided');
      }
      if (!identifier) {
        throw new Error('identifier must be provided');
      }
      return _crypto2.default.createHmac('sha256', secretKey).update(identifier).digest('hex');
    }
  }]);

  return IdentityVerification;
}();