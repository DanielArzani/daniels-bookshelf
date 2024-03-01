"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Callback function will be invoked on keydown press
 * @param key - The `KeyboardEvent.code` value of the key to listen for.
 * @param callback - The function to execute when the specified key is pressed.
 */
function useKeydown(key, callback) {
  _react["default"].useEffect(function () {
    function handleKeyDown(event) {
      if (event.code === key) {
        callback(event);
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup to remove the event listener on component unmount
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
}
var _default = exports["default"] = useKeydown;