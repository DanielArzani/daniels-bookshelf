"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Custom hook to interact with the browser's localStorage.
 * It allows storing a value under a specified key and automatically updates
 * this value in the localStorage when it changes.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T | (() => T)} initialValue - The initial value to be stored, or a function that returns it.
 * @returns {[T, typeof setValue]} - Returns the current value and a function to update it.
 */
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  var _useState = (0, _react.useState)(function () {
      // Get from local storage by key
      var jsonValue = localStorage.getItem(key);

      // Parse and return stored json or, if null, return initialValue
      if (jsonValue == null) {
        // Check if initialValue is a function and execute it to get the actual value
        if (typeof initialValue === 'function') {
          return initialValue();
        } else {
          // Otherwise, just return the initialValue directly
          return initialValue;
        }
      } else {
        // If value exists in localStorage, parse it from JSON string back into JS object/value
        return JSON.parse(jsonValue);
      }
    }),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];

  // Use useEffect to update localStorage when value changes
  (0, _react.useEffect)(function () {
    // Set item to localStorage on value change
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]); // Dependencies array: only re-run effect if value or key changes

  // Return the current state and a function to update it
  return [value, setValue];
}
var _default = exports["default"] = useLocalStorage;