import { c as createCommonjsModule } from './common/_commonjsHelpers-eb5a497e.js';
import { r as react } from './common/index-d0e3fe20.js';
import { r as reactDom } from './common/index-d471eedc.js';
import { p as propTypes } from './common/index-9b41d826.js';

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var constants = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  STYLES: ['large', 'small', 'floating', 'flat'],
  WAVES: ['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal'],
  SIZES: ['s', 'm', 'l', 'xl'],
  PLACEMENTS: ['left', 'center', 'right'],
  SCALES: ['big', 'small'],
  ICON_SIZES: ['tiny', 'small', 'medium', 'large']
};
exports.default = _default;
});

var idgen_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetID = resetID;
exports.default = idgen;
var id = 0;

function resetID() {
  id = 0;
}

function idgen() {
  var oldId = id;
  id += 1;
  return oldId;
}
});

var Autocomplete_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.autocompleteOptions = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _constants = _interopRequireDefault(constants);

var _idgen = _interopRequireDefault(idgen_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Autocomplete = function Autocomplete(_ref) {
  var className = _ref.className,
      title = _ref.title,
      icon = _ref.icon,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      id = _ref.id,
      options = _ref.options,
      rest = _objectWithoutProperties(_ref, ["className", "title", "icon", "s", "m", "l", "xl", "id", "options"]);

  var autocompleteRef = (0, _react.useRef)(null);
  var sizes = {
    s: s,
    m: m,
    l: l,
    xl: xl
  };
  var classes = {
    col: true
  };

  _constants.default.SIZES.forEach(function (size) {
    classes[size + sizes[size]] = sizes[size];
  });

  (0, _react.useEffect)(function () {
    var instance = M.Autocomplete.init(autocompleteRef.current, options);
    return function () {
      instance && instance.destroy();
    };
  }, [options]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('input-field', className, classes)
  }, icon && (0, _react.cloneElement)(icon, {
    className: 'prefix'
  }), /*#__PURE__*/_react.default.createElement("input", _extends({
    className: "autocomplete",
    type: "text",
    ref: autocompleteRef,
    id: id
  }, rest)), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, title));
};

var autocompleteOptions = _propTypes.default.shape({
  /**
   * Data object defining autocomplete options with optional icon strings.
   */
  data: _propTypes.default.objectOf(_propTypes.default.string),

  /**
   * Limit of results the autocomplete shows.
   */
  limit: _propTypes.default.number,

  /**
   * Callback for when autocompleted.
   */
  onAutocomplete: _propTypes.default.func,

  /**
   * 	Minimum number of characters before autocomplete starts.
   */
  minLength: _propTypes.default.number,

  /**
   * Sort function that defines the order of the list of autocomplete options.
   */
  sortFunction: _propTypes.default.func
});

exports.autocompleteOptions = autocompleteOptions;
Autocomplete.propTypes = {
  /**
   * Uniquely identifies <input> generated by this component
   * Used by corresponding <label> for attribute
   * @default idgen()
   */
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /**
   * The title of the autocomplete component.
   */
  title: _propTypes.default.string,

  /**
   * Optional materialize icon to add to the autocomplete bar
   */
  icon: _propTypes.default.node,
  s: _propTypes.default.number,
  m: _propTypes.default.number,
  l: _propTypes.default.number,
  xl: _propTypes.default.number,

  /**
   * Placeholder for input element
   * */
  placeholder: _propTypes.default.string,

  /**
   * Called when the value of the input gets changed - by user typing or clicking on an auto-complete item.
   * Function signature: (event, value) => ()
   */
  onChange: _propTypes.default.func,

  /**
   * The value of the input
   */
  value: _propTypes.default.string,

  /**
   * Options for the autocomplete
   * <a target="_blank" rel="external" href="https://materializecss.com/autocomplete.html#options</a>
   */
  options: autocompleteOptions
};
Autocomplete.defaultProps = {
  id: "Autocomplete-".concat((0, _idgen.default)()),
  options: {
    data: {},
    limit: Infinity,
    onAutocomplete: null,
    minLength: 1,
    sortFunction: null
  }
};
var _default = Autocomplete;
exports.default = _default;
});

var Badge_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Badge = function Badge(_ref) {
  var className = _ref.className,
      newIcon = _ref.newIcon,
      caption = _ref.caption,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "newIcon", "caption", "children"]);

  var classes = {
    badge: true,
    new: newIcon
  };
  return /*#__PURE__*/_react.default.createElement("span", _extends({}, props, {
    "data-badge-caption": caption,
    className: (0, _classnames.default)(classes, className)
  }), children);
};

Badge.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Add the <b>new</b> class name
   */
  newIcon: _propTypes.default.bool,

  /**
   * One can explicitly set the caption in a badge using the caption prop
   */
  caption: _propTypes.default.string
};
var _default = Badge;
exports.default = _default;
});

var Col_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _constants = _interopRequireDefault(constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Col = function Col(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$node = _ref.node,
      C = _ref$node === void 0 ? 'div' : _ref$node,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      offset = _ref.offset,
      push = _ref.push,
      pull = _ref.pull,
      other = _objectWithoutProperties(_ref, ["children", "className", "node", "s", "m", "l", "xl", "offset", "push", "pull"]);

  var sizes = {
    s: s,
    m: m,
    l: l,
    xl: xl
  };
  var classes = {
    col: true
  };

  _constants.default.SIZES.forEach(function (size) {
    return classes[size + sizes[size]] = sizes[size];
  });

  if (offset) {
    offset.split(' ').forEach(function (offset) {
      return classes['offset-' + offset] = true;
    });
  }

  if (push) {
    push.split(' ').forEach(function (push) {
      return classes['push-' + push] = true;
    });
  }

  if (pull) {
    pull.split(' ').forEach(function (pull) {
      return classes['pull-' + pull] = true;
    });
  }

  return /*#__PURE__*/_react.default.createElement(C, _extends({}, other, {
    className: (0, _classnames.default)(classes, className)
  }), children);
};

Col.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Columns for extra large size screens (Large Desktop Devices > 1200px)
   */
  xl: _propTypes.default.number,

  /**
   * Columns for large size screens (Desktop Devices > 992px)
   */
  l: _propTypes.default.number,

  /**
   * Columns for middle size screens (Tablet Devices > 600px)
   */
  m: _propTypes.default.number,

  /**
   * Columns for small size screens (Mobile Devices <= 600px)
   */
  s: _propTypes.default.number,

  /**
   * The node to be used for the column
   * @default div
   */
  node: _propTypes.default.node,

  /**
   * To offset/push/pull, simply add s2 to the class where s signifies the screen
   * class-prefix (s = mobile devices, m = tablet devices, l = desktop devices, xl= large desktop devices) and the number after
   * is the number of columns you want to offset/push/pull by.
   */
  offset: _propTypes.default.string,
  push: _propTypes.default.string,
  pull: _propTypes.default.string
};
var _default = Col;
exports.default = _default;
});

var Breadcrumb_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _Col = _interopRequireDefault(Col_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = function Breadcrumb(_ref) {
  var cols = _ref.cols,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: (0, _classnames.default)('row', className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    s: cols
  }, _react.default.Children.map(children, function (item) {
    return _react.default.cloneElement(item, {
      className: 'breadcrumb'
    });
  }))));
};

Breadcrumb.propTypes = {
  children: _propTypes.default.node,

  /**
   * responsive col value
   * @default 12
   */
  cols: _propTypes.default.number,
  className: _propTypes.default.string
};
Breadcrumb.defaultProps = {
  cols: 12
};
var _default = Breadcrumb;
exports.default = _default;
});

var Icon_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _constants = _interopRequireDefault(constants);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  var classes = {
    'material-icons': true
  };

  _constants.default.PLACEMENTS.forEach(function (p) {
    classes[p] = props[p];
  });

  _constants.default.ICON_SIZES.forEach(function (s) {
    classes[s] = props[s];
  });

  return /*#__PURE__*/_react.default.createElement("i", {
    className: (0, _classnames.default)(classes, props.className)
  }, props.children);
};

Icon.propTypes = {
  /**
   * Classname passed to i tag
   */
  className: _propTypes.default.string,

  /**
   * Icon type: <a href='https://material.io/icons/'>https://material.io/icons/</a>
   */
  children: _propTypes.default.string.isRequired,

  /**
   * Placement for icon if used beside a text ↓
   */
  left: _propTypes.default.bool,
  center: _propTypes.default.bool,
  right: _propTypes.default.bool,

  /**
   * Sizes for icons ↓
   */
  tiny: _propTypes.default.bool,
  small: _propTypes.default.bool,
  medium: _propTypes.default.bool,
  large: _propTypes.default.bool
};
var _default = Icon;
exports.default = _default;
});

var Button_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _Icon = _interopRequireDefault(Icon_1);

var _propTypes = _interopRequireDefault(propTypes);

var _constants = _interopRequireDefault(constants);

var _classnames = _interopRequireDefault(classnames);

var _idgen = _interopRequireDefault(idgen_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      node = _ref.node,
      fab = _ref.fab,
      modal = _ref.modal,
      flat = _ref.flat,
      floating = _ref.floating,
      large = _ref.large,
      small = _ref.small,
      disabled = _ref.disabled,
      waves = _ref.waves,
      tooltip = _ref.tooltip,
      _ref$tooltipOptions = _ref.tooltipOptions,
      tooltipOptions = _ref$tooltipOptions === void 0 ? {} : _ref$tooltipOptions,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["children", "className", "node", "fab", "modal", "flat", "floating", "large", "small", "disabled", "waves", "tooltip", "tooltipOptions", "icon"]);

  var _btn = (0, _react.useRef)(null);

  var _fab = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    if (tooltip) {
      var instance = M.Tooltip.init(_btn.current, tooltipOptions);
      return function () {
        instance && instance.destroy();
      };
    }
  }, [tooltip, tooltipOptions, children]);
  (0, _react.useEffect)(function () {
    if (fab) {
      var instance = M.FloatingActionButton.init(_fab.current, fab);
      return function () {
        instance && instance.destroy();
      };
    }
  }, [fab]);

  var renderFab = function renderFab(classes) {
    return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
      ref: _fab.current,
      className: (0, _classnames.default)('fixed-action-btn', {
        toolbar: fab.toolbarEnabled
      })
    }), /*#__PURE__*/_react.default.createElement("a", {
      className: classes
    }, icon || /*#__PURE__*/_react.default.createElement(_Icon.default, null, "edit")), /*#__PURE__*/_react.default.createElement("ul", null, _react.Children.map(children, function (child) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: (0, _idgen.default)()
      }, child);
    })));
  };

  var C = node;
  var classes = {
    btn: true,
    disabled: disabled,
    'waves-effect': waves
  };

  if (_constants.default.WAVES.indexOf(waves) > -1) {
    classes['waves-' + waves] = true;
  }

  var styles = {
    flat: flat,
    floating: floating,
    large: large,
    small: small
  };

  _constants.default.STYLES.forEach(function (style) {
    if (styles[style]) {
      classes.btn = false;
      classes['btn-' + style] = true;
    }
  });

  if (modal) {
    classes['modal-' + modal] = true;
  }

  if (fab) {
    return renderFab((0, _classnames.default)(classes, className));
  } else {
    return /*#__PURE__*/_react.default.createElement(C, _extends({}, props, {
      disabled: disabled,
      className: (0, _classnames.default)(classes, className),
      ref: _btn,
      "data-tooltip": tooltip
    }), icon, children);
  }
};

Button.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,

  /**
   * Enable other styles
   */
  flat: _propTypes.default.bool,
  large: _propTypes.default.bool,
  small: _propTypes.default.bool,
  floating: _propTypes.default.bool,

  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
   *  FAB Options are here: https://materializecss.com/floating-action-button.html#options
   * @default false
   * @default options {
   *  direction: 'top',
   *  hoverEnabled: true,
   *  toolbarEnabled: false,
   * }
   */
  fab: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    direction: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
    hoverEnabled: _propTypes.default.bool,
    toolbarEnabled: _propTypes.default.bool
  })]),

  /**
   * The icon to display, if specified it will create a button with the material icon.
   */
  icon: _propTypes.default.node,
  modal: _propTypes.default.oneOf(['close', 'confirm']),
  node: _propTypes.default.node,

  /**
   * Will be disabled when fab is set.
   */
  onClick: _propTypes.default.func,

  /**
   * Tooltip to show when mouse hovered
   */
  tooltip: _propTypes.default.string,

  /**
   * Tooltips options as here
   * https://materializecss.com/tooltips.html#options
   */
  tooltipOptions: _propTypes.default.shape({
    exitDelay: _propTypes.default.number,
    enterDelay: _propTypes.default.number,
    html: _propTypes.default.string,
    margin: _propTypes.default.number,
    inDuration: _propTypes.default.number,
    outDuration: _propTypes.default.number,
    transitionMovement: _propTypes.default.number,
    delay: _propTypes.default.number,
    position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left'])
  }),
  waves: _propTypes.default.oneOf(['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal'])
};
Button.defaultProps = {
  node: 'button'
};
var _default = Button;
exports.default = _default;
});

var Caption_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _classnames = _interopRequireDefault(classnames);

var _propTypes = _interopRequireDefault(propTypes);

var _constants = _interopRequireDefault(constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Caption = function Caption(_ref) {
  var className = _ref.className,
      placement = _ref.placement,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "placement", "children"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)('caption', "".concat(placement, "-align"), className)
  }, props), children);
};

Caption.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Placement of the caption
   * @default 'center'
   */
  placement: _propTypes.default.oneOf(_constants.default.PLACEMENTS)
};
Caption.defaultProps = {
  placement: 'center'
};
var _default = Caption;
exports.default = _default;
});

var Card_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _Icon = _interopRequireDefault(Icon_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line react/prop-types
var Wrapper = function Wrapper(_ref) {
  var condition = _ref.condition,
      children = _ref.children;
  return condition ? /*#__PURE__*/_react.default.createElement("div", {
    className: "card-stacked"
  }, children) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, children);
};

var Card = function Card(_ref2) {
  var title = _ref2.title,
      header = _ref2.header,
      className = _ref2.className,
      textClassName = _ref2.textClassName,
      actions = _ref2.actions,
      reveal = _ref2.reveal,
      children = _ref2.children,
      horizontal = _ref2.horizontal,
      closeIcon = _ref2.closeIcon,
      revealIcon = _ref2.revealIcon,
      other = _objectWithoutProperties(_ref2, ["title", "header", "className", "textClassName", "actions", "reveal", "children", "horizontal", "closeIcon", "revealIcon"]);

  var classes = {
    card: true,
    horizontal: horizontal
  };
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, other, {
    className: (0, _classnames.default)(className, classes)
  }), header, /*#__PURE__*/_react.default.createElement(Wrapper, {
    condition: horizontal
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('card-content', textClassName)
  }, title && /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('card-title', {
      activator: reveal
    })
  }, title, reveal && (0, _react.cloneElement)(revealIcon, {
    right: true
  })), /*#__PURE__*/_react.default.createElement("div", null, children)), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-reveal"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "card-title"
  }, title, (0, _react.cloneElement)(closeIcon, {
    right: true
  })), reveal), actions && /*#__PURE__*/_react.default.createElement("div", {
    className: "card-action"
  }, actions)));
};

Card.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  textClassName: _propTypes.default.string,
  reveal: _propTypes.default.element,
  header: _propTypes.default.element,
  // The buttons to be displayed at the action area
  actions: _propTypes.default.arrayOf(_propTypes.default.element),
  horizontal: _propTypes.default.bool,

  /**
   * @default <Icon>close</Icon>
   */
  closeIcon: _propTypes.default.node,

  /**
   * @default <Icon>more_vert</Icon>
   */
  revealIcon: _propTypes.default.node
};
Card.defaultProps = {
  closeIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "close"),
  revealIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "more_vert")
};
var _default = Card;
exports.default = _default;
});

var CardPanel_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardPanel = function CardPanel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = {
    'card-panel': true
  };
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)(classes, className)
  }, props), children);
};

CardPanel.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = CardPanel;
exports.default = _default;
});

var CardTitle_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _constants = _interopRequireDefault(constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardTitle = function CardTitle(_ref) {
  var image = _ref.image,
      reveal = _ref.reveal,
      waves = _ref.waves,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["image", "reveal", "waves", "children"]);

  var classes = (0, _classnames.default)(_defineProperty({
    'card-image': true,
    'waves-effect': waves,
    'waves-block': waves
  }, "waves-".concat(waves), waves));
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)(classes)
  }, props), /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _classnames.default)({
      activator: reveal
    }),
    src: image
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)('card-title')
  }, children));
};

CardTitle.propTypes = {
  children: _propTypes.default.node,
  // Whether the image serves as activator for the reveal
  reveal: _propTypes.default.bool,
  // the waves effect
  waves: _propTypes.default.oneOf(_constants.default.WAVES),
  // The path to the image
  image: _propTypes.default.string.isRequired
};
var _default = CardTitle;
exports.default = _default;
});

var Carousel_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _classnames = _interopRequireDefault(classnames);

var _propTypes = _interopRequireDefault(propTypes);

var _idgen = _interopRequireDefault(idgen_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Carousel = function Carousel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      carouselId = _ref.carouselId,
      fixedItem = _ref.fixedItem,
      images = _ref.images,
      centerImages = _ref.centerImages,
      options = _ref.options;
  var carouselRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var instance = M.Carousel.init(carouselRef.current, options);
    return function () {
      return instance.destroy();
    };
  }, [options, children, images]);
  var elemsToRender = children || images || [];
  var classes = (0, _classnames.default)('carousel', {
    'carousel-slider': options.fullWidth
  }, className);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: carouselId,
    ref: carouselRef,
    className: classes
  }, Boolean(fixedItem) && /*#__PURE__*/_react.default.createElement("div", {
    className: "carousel-fixed-item center"
  }, fixedItem), _react.default.Children.map(elemsToRender, function (child) {
    var classes = (0, _classnames.default)('carousel-item', {
      'valign-wrapper': centerImages
    });

    if (typeof child === 'string') {
      return /*#__PURE__*/_react.default.createElement("a", {
        className: classes
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: child,
        alt: child
      }));
    }

    return _react.default.cloneElement(child, {
      className: (0, _classnames.default)(classes, child.props.className)
    });
  }));
};

Carousel.propTypes = {
  /**
   * Children to render as carousel elements
   */
  children: _propTypes.default.any,

  /**
   * Array of image url's
   */
  images: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Makes the images centered inside the carousel using '.valign-wrapper' CSS helper
   */
  centerImages: _propTypes.default.bool,

  /**
   * Fixed element on slider
   */
  fixedItem: _propTypes.default.node,

  /**
   * Additional classNames for carousel wrapper
   */
  className: _propTypes.default.string,

  /**
   * Carousel ID for jQuery manipulating
   */
  carouselId: _propTypes.default.string,

  /**
   * Carousel initialization options
   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
   */
  options: _propTypes.default.shape({
    /**
     * Transition duration in milliseconds. (Default: 200)
     */
    duration: _propTypes.default.number,

    /**
     * Perspective zoom. If 0, all items are the same size. (Default: -100)
     */
    dist: _propTypes.default.number,

    /**
     * Set the spacing of the center item. (Default: 0)
     */
    shift: _propTypes.default.number,

    /**
     * Set the padding between non center items. (Default: 0)
     */
    padding: _propTypes.default.number,

    /**
     * Set the number of visible items. (Default: 5)
     */
    numVisible: _propTypes.default.number,

    /**
     * Make the carousel a full width slider. (Default: false)
     */
    fullWidth: _propTypes.default.bool,

    /**
     * Set to true to show indicators. (Default: false)
     */
    indicators: _propTypes.default.bool,

    /**
     * Don't wrap around and cycle through items. (Default: false)
     */
    noWrap: _propTypes.default.bool,

    /**
     * Callback for when a new slide is cycled to. (Default: null)
     */
    onCycleTo: _propTypes.default.func
  })
};
Carousel.defaultProps = {
  carouselId: "Carousel-".concat((0, _idgen.default)()),
  options: {
    duration: 200,
    dist: -100,
    shift: 0,
    padding: 0,
    numVisible: 5,
    fullWidth: false,
    indicators: false,
    noWrap: false,
    onCycleTo: null
  }
};
var _default = Carousel;
exports.default = _default;
});

var Checkbox_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _idgen = _interopRequireDefault(idgen_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      className = _ref.className,
      indeterminate = _ref.indeterminate,
      filledIn = _ref.filledIn,
      label = _ref.label,
      _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["id", "className", "indeterminate", "filledIn", "label", "onChange"]);

  var _useState = (0, _react.useState)(props.checked),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _input = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    if (_input.current) {
      _input.current.indeterminate = indeterminate;
      _input.current.checked = false;
      setChecked(false);
    }
  }, [indeterminate]);
  (0, _react.useEffect)(function () {
    setChecked(props.checked);
    _input.current.checked = props.checked;
  }, [props.checked]);
  return /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
    id: id,
    className: (0, _classnames.default)({
      'filled-in': filledIn
    }, className),
    type: "checkbox",
    ref: _input,
    checked: checked,
    onChange: function onChange(e) {
      setChecked(function (prevChecked) {
        return !prevChecked;
      });
      _onChange && _onChange(e);
    }
  })), /*#__PURE__*/_react.default.createElement("span", null, label));
};

Checkbox.propTypes = {
  className: _propTypes.default.string,

  /**
   * checkbox value
   */
  value: _propTypes.default.string.isRequired,

  /**
   * filled-in styled checkbox
   */
  filledIn: _propTypes.default.bool,

  /**
   * label next to checkbox
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Indeterminate Style
   */
  indeterminate: _propTypes.default.bool,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * A Boolean attribute indicating whether or not this checkbox is checked
   */
  checked: _propTypes.default.bool
};
Checkbox.defaultProps = {
  id: "Checkbox_".concat((0, _idgen.default)())
};
var _default = Checkbox;
exports.default = _default;
});

var Chip_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _Icon = _interopRequireDefault(Icon_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Chip = function Chip(_ref) {
  var children = _ref.children,
      close = _ref.close,
      closeIcon = _ref.closeIcon,
      className = _ref.className,
      options = _ref.options,
      other = _objectWithoutProperties(_ref, ["children", "close", "closeIcon", "className", "options"]);

  var instance = (0, _react.useRef)(null);
  var chipRef = (0, _react.useRef)(null);
  var classes = (0, _classnames.default)(className, {
    chip: !options,
    chips: options
  });
  var chipContent = options ? null : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, children, Boolean(close) && closeIcon);
  (0, _react.useEffect)(function () {
    if (options) {
      instance.current = M.Chips.init(chipRef.current, options);
    }

    return function () {
      if (instance.current) {
        instance.current.destroy();
      }
    };
  }, [options, children]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, other, {
    ref: chipRef
  }), chipContent);
};

Chip.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Shows a close icon
   */
  close: _propTypes.default.bool,
  closeIcon: _propTypes.default.node,

  /**
   * Options object for the Chip Javascript Plugin
   */
  options: _propTypes.default.shape({
    /**
     * Set the chip data
     */
    data: _propTypes.default.arrayOf(_propTypes.default.objectOf(_propTypes.default.string)),

    /**
     * Set first placeholder when there are no tags.
     */
    placeholder: _propTypes.default.string,

    /**
     * Set second placeholder when adding additional tags.
     */
    secondaryPlaceholder: _propTypes.default.string,

    /**
     * Set chips limit.
     */
    limit: _propTypes.default.number,

    /**
     * Callback for chip add.
     */
    onChipAdd: _propTypes.default.func,

    /**
     * Callback for chip select.
     */
    onChipSelect: _propTypes.default.func,

    /**
     * Callback for chip delete.
     */
    onChipDelete: _propTypes.default.func,

    /**
     * Set autocomplete options.
     * Note: onAutocomplete does not work in Chip
     */
    autocompleteOptions: Autocomplete_1.autocompleteOptions
  })
};
Chip.defaultProps = {
  close: false,
  closeIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: "close"
  }, "close"),
  options: null
};
var _default = Chip;
exports.default = _default;
});

var Collapsible_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Collapsible = function Collapsible(_ref) {
  var children = _ref.children,
      className = _ref.className,
      accordion = _ref.accordion,
      options = _ref.options,
      defaultActiveKey = _ref.defaultActiveKey,
      popout = _ref.popout,
      onSelect = _ref.onSelect,
      props = _objectWithoutProperties(_ref, ["children", "className", "accordion", "options", "defaultActiveKey", "popout", "onSelect"]);

  var _collapsible = (0, _react.useRef)(null);

  var collapsible = accordion ? 'accordion' : 'expandable';

  var _useState = (0, _react.useState)(defaultActiveKey),
      _useState2 = _slicedToArray(_useState, 2),
      activeKey = _useState2[0],
      setActiveKey = _useState2[1];

  var renderItem = function renderItem(child, key) {
    if (!child) return null; // Extend with props if child is a react component

    if (typeof child.type === 'function') {
      Object.assign(props, {
        expanded: activeKey === key || child.props.expanded,
        eventKey: key
      });
    }

    return _react.default.cloneElement(child, {
      onSelect: function onSelect() {
        return handleSelect(key);
      }
    });
  };

  var handleSelect = function handleSelect(key) {
    if (onSelect) {
      onSelect(key);
    }

    if (activeKey === key) {
      setActiveKey(null);
    }

    if (accordion) {
      setActiveKey(key);
    }
  };

  (0, _react.useEffect)(function () {
    if (typeof M !== 'undefined') {
      var instance = M.Collapsible.init(_collapsible.current, _objectSpread({
        accordion: accordion
      }, options));
      return function () {
        instance && instance.destroy();
      };
    }
  }, [_collapsible, accordion, options, children]);
  return /*#__PURE__*/_react.default.createElement("ul", _extends({
    ref: _collapsible,
    className: (0, _classnames.default)(className, {
      collapsible: collapsible,
      expandable: accordion !== true,
      popout: popout
    }),
    "data-collapsible": collapsible
  }, props), _react.Children.map(children, renderItem));
};

Collapsible.propTypes = {
  /**
   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
   * or it can only allow one section to stay open at a time, which is called an accordion.
   * @default true
   */
  accordion: _propTypes.default.bool,
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Enable popout style
   */
  popout: _propTypes.default.bool,

  /**
   * The default CollapsibleItem that should be expanded. This value should match the specified
   * item's eventKey value. Ignored if accordion is false.
   */
  defaultActiveKey: _propTypes.default.any,
  onSelect: _propTypes.default.func,

  /**
   * Options passed to initializer
   */
  options: _propTypes.default.any
};
Collapsible.defaultProps = {
  accordion: true
};
var _default = Collapsible;
exports.default = _default;
});

var CollapsibleItem_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CollapsibleItem = function CollapsibleItem(_ref) {
  var className = _ref.className,
      eventKey = _ref.eventKey,
      expanded = _ref.expanded,
      header = _ref.header,
      children = _ref.children,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      Node = _ref.node,
      onSelect = _ref.onSelect,
      props = _objectWithoutProperties(_ref, ["className", "eventKey", "expanded", "header", "children", "icon", "iconClassName", "node", "onSelect"]);

  return /*#__PURE__*/_react.default.createElement("li", _extends({
    className: (0, _classnames.default)(className, {
      active: expanded
    })
  }, props), /*#__PURE__*/_react.default.createElement(Node, {
    className: (0, _classnames.default)('collapsible-header', {
      active: expanded
    }),
    onClick: function onClick() {
      return onSelect(eventKey);
    }
  }, icon, header), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapsible-body"
  }, children));
};

CollapsibleItem.propTypes = {
  header: _propTypes.default.any.isRequired,
  icon: _propTypes.default.node,
  iconClassName: _propTypes.default.string,
  children: _propTypes.default.node,
  onSelect: _propTypes.default.func,

  /**
   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
   * @default false
   */
  expanded: _propTypes.default.bool,

  /**
   * The value to pass to the onSelect callback.
   */
  eventKey: _propTypes.default.any,
  className: _propTypes.default.string,

  /**
   * The node type of the header
   * @default a
   */
  node: _propTypes.default.node
};
CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div'
};
var _default = CollapsibleItem;
exports.default = _default;
});

var Collection_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Collection = function Collection(_ref) {
  var children = _ref.children,
      header = _ref.header,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["children", "header", "className"]);

  var getNodeType = (0, _react.useMemo)(function () {
    return _react.default.Children.toArray(children).some(function (child) {
      return child.props.href;
    }) ? 'div' : 'ul';
  }, [children]);
  var renderHeader = (0, _react.useMemo)(function () {
    var _header;

    if (_react.default.isValidElement(header)) {
      _header = header;
    } else {
      _header = /*#__PURE__*/_react.default.createElement("h4", null, header);
    }

    return /*#__PURE__*/_react.default.createElement("li", {
      className: "collection-header"
    }, _header);
  }, [header]);
  var C = getNodeType;
  return /*#__PURE__*/_react.default.createElement(C, _extends({}, other, {
    className: (0, _classnames.default)('collection', {
      'with-header': !!header
    }, className)
  }), header ? renderHeader : null, children);
};

Collection.propTypes = {
  children: _propTypes.default.node,
  header: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = Collection;
exports.default = _default;
});

var CollectionItem_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CollectionItem = function CollectionItem(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["active", "children", "className", "href"]);

  var item = /*#__PURE__*/_react.default.createElement("li", _extends({}, other, {
    className: (0, _classnames.default)('collection-item', className)
  }), children);

  if (href) {
    item = /*#__PURE__*/_react.default.createElement("a", _extends({}, other, {
      href: href,
      className: (0, _classnames.default)('collection-item', {
        active: active
      }, className)
    }), children);
  }

  return item;
};

CollectionItem.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Default: false
   * For more information refer to : https://materializecss.com/collections.html#links
   */
  href: _propTypes.default.string
};
var _default = CollectionItem;
exports.default = _default;
});

var Container_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _classnames = _interopRequireDefault(classnames);

var _propTypes = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = function Container(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)('container', className)
  }, props));
};

Container.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = Container;
exports.default = _default;
});

var TextInput_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _idgen = _interopRequireDefault(idgen_1);

var _constants = _interopRequireDefault(constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextInput = _react.default.forwardRef(function (props, ref) {
  // eslint-disable-next-line react/prop-types
  var dataLength = props['data-length'];
  var inputRef = ref || (0, _react.createRef)(null);
  (0, _react.useEffect)(function () {
    if (inputRef && dataLength) {
      M.CharacterCounter.init(inputRef.current);
    }
  }, [dataLength, inputRef]);
  (0, _react.useEffect)(function () {
    M.updateTextFields();
  }, [props.children]);

  var children = props.children,
      s = props.s,
      m = props.m,
      l = props.l,
      xl = props.xl,
      disabled = props.disabled,
      noLayout = props.noLayout,
      placeholder = props.placeholder,
      icon = props.icon,
      label = props.label,
      inputClassName = props.inputClassName,
      success = props.success,
      error = props.error,
      password = props.password,
      email = props.email,
      validate = props.validate,
      defaultValue = props.defaultValue,
      value = props.value,
      type = props.type,
      other = _objectWithoutProperties(props, ["children", "s", "m", "l", "xl", "disabled", "noLayout", "placeholder", "icon", "label", "inputClassName", "success", "error", "password", "email", "validate", "defaultValue", "value", "type"]);

  var sizes = {
    s: s,
    m: m,
    l: l,
    xl: xl
  };
  var responsiveClasses;

  if (!noLayout) {
    responsiveClasses = {
      col: true
    };

    _constants.default.SIZES.forEach(function (size) {
      responsiveClasses[size + sizes[size]] = sizes[size];
    });
  }

  var wrapperClasses = (0, _classnames.default)('input-field', responsiveClasses);
  var computedType;

  if (type) {
    computedType = type;
  } else if (password) {
    computedType = 'password';
  } else if (email) {
    computedType = 'email';
  } else {
    computedType = 'text';
  }

  var inputProps = _objectSpread({
    placeholder: placeholder,
    type: computedType,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled
  }, other);

  var renderLabel = function renderLabel() {
    return label && /*#__PURE__*/_react.default.createElement("label", {
      className: (0, _classnames.default)({
        active: value || placeholder,
        'label-icon': typeof label !== 'string'
      }),
      "data-success": success,
      "data-error": error,
      htmlFor: inputProps.id
    }, label);
  };

  var renderHelper = function renderHelper() {
    return (error || success) && /*#__PURE__*/_react.default.createElement("span", {
      className: "helper-text",
      "data-error": error,
      "data-success": success
    });
  };

  var renderIcon = function renderIcon() {
    if (!icon) return;

    if (typeof icon === 'string') {
      return /*#__PURE__*/_react.default.createElement("i", {
        className: "material-icons prefix"
      }, icon);
    }

    return _react.default.cloneElement(icon, {
      className: 'prefix'
    });
  };

  if (type === 'file') {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(wrapperClasses, " file-field")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "btn"
    }, /*#__PURE__*/_react.default.createElement("span", null, label), /*#__PURE__*/_react.default.createElement("input", _extends({
      type: "file",
      className: (0, _classnames.default)({
        validate: validate
      }, inputClassName)
    }, inputProps))), /*#__PURE__*/_react.default.createElement("div", {
      className: "file-path-wrapper"
    }, /*#__PURE__*/_react.default.createElement("input", {
      className: "file-path validate",
      type: "text"
    })), renderHelper(), children);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: wrapperClasses
  }, renderIcon(), /*#__PURE__*/_react.default.createElement("input", _extends({
    ref: inputRef,
    className: (0, _classnames.default)({
      validate: validate
    }, inputClassName)
  }, inputProps)), renderLabel(), renderHelper(), children);
});

TextInput.displayName = 'TextInput';
TextInput.propTypes = {
  /**
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /**
   * Responsive size for Mobile Devices
   */
  s: _propTypes.default.number,

  /**
   * Responsive size for Tablet Devices
   */
  m: _propTypes.default.number,

  /**
   *  Responsive size for Desktop Devices
   */
  l: _propTypes.default.number,

  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: _propTypes.default.number,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * Placeholder string
   */
  placeholder: _propTypes.default.string,

  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * prefix icon, name of the icon or a node
   */
  icon: _propTypes.default.node,

  /**
   * label text
   */
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /**
   * Input initial value
   */
  defaultValue: _propTypes.default.string,

  /**
   * Input value
   */
  value: _propTypes.default.string,

  /**
   * Add validate class to input
   */
  validate: _propTypes.default.bool,

  /**
   * Custom success message
   */
  success: _propTypes.default.string,

  /**
   * Custom error message
   */
  error: _propTypes.default.string,

  /**
   * Additional classes for input
   */
  inputClassName: _propTypes.default.string,

  /**
   * override type="text"
   */
  type: _propTypes.default.string,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * password type
   */
  password: _propTypes.default.bool,

  /**
   * email type
   */
  email: _propTypes.default.bool,

  /**
   * children
   */
  children: _propTypes.default.node
};
TextInput.defaultProps = {
  id: "TextInput-".concat((0, _idgen.default)())
};
var _default = TextInput;
exports.default = _default;
});

var DatePicker_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _TextInput = _interopRequireDefault(TextInput_1);

var _idgen = _interopRequireDefault(idgen_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DatePicker = function DatePicker(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      rest = _objectWithoutProperties(_ref, ["options", "onChange"]);

  var dateEl = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _options = onChange ? _objectSpread({}, options, {
      onSelect: onChange
    }) : options;

    var instance = M.Datepicker.init(dateEl.current, _options);
    return function () {
      instance && instance.destroy();
    };
  }, [options, onChange]);
  return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
    ref: dateEl,
    inputClassName: "datepicker"
  }, rest));
};

DatePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: _propTypes.default.func,

  /**
   * id passed to datepicker, also used for init method
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * options passed to init method
   * more info: https://materializecss.com/pickers.html#date-picker
   */
  options: _propTypes.default.shape({
    /**
     * Automatically close picker when date is selected.
     */
    autoClose: _propTypes.default.bool,

    /**
     * The date output format for the input field value.
     * @default 'mmm dd, yyyy'
     */
    format: _propTypes.default.string,

    /**
     * Used to create date object from current input string.
     * @default null
     */
    parse: _propTypes.default.func,

    /**
     * The initial date to view when first opened.
     * @default null
     */
    defaultDate: _propTypes.default.any,

    /**
     * Make the defaultDate the initial selected value.
     * @default false
     */
    setDefaultDate: _propTypes.default.bool,

    /**
     * Prevent selection of any date on the weekend.
     * @default false
     */
    disableWeekends: _propTypes.default.bool,

    /**
     * Custom function to disable certain days.
     * @default null
     */
    disableDayFn: _propTypes.default.func,

    /**
     * First day of week (0: Sunday, 1: Monday etc).
     * @default 0
     */
    firstDay: _propTypes.default.number,

    /**
     * The earliest date that can be selected.
     * @default null
     */
    minDate: _propTypes.default.any,

    /**
     * The latest date that can be selected.
     * @default null
     */
    maxDate: _propTypes.default.any,

    /**
     * Number of years either side, or array of upper/lower range.
     * @default 10
     */
    yearRange: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.array]),

    /**
     * Changes Datepicker to RTL.
     * @default false
     */
    isRTL: _propTypes.default.bool,

    /**
     * Show month after year in Datepicker title.
     * @default false
     */
    showMonthAfterYear: _propTypes.default.bool,

    /**
     * Render days of the calendar grid that fall in the next or previous month.
     * @default false
     */
    showDaysInNextAndPreviousMonths: _propTypes.default.bool,

    /**
     * Specify a DOM element to render the calendar in, by default it will be placed before the input.
     * @default null
     */
    container: _propTypes.default.any,

    /**
     * Show the clear button in the datepicker.
     * @default false
     */
    showClearBtn: _propTypes.default.bool,

    /**
     * Internationalization options.
     * @default See i18n documentation.
     */
    i18n: _propTypes.default.shape({
      cancel: _propTypes.default.string,
      clear: _propTypes.default.string,
      done: _propTypes.default.string,
      previousMonth: _propTypes.default.string,
      nextMonth: _propTypes.default.string,
      months: _propTypes.default.arrayOf(_propTypes.default.string),
      monthsShort: _propTypes.default.arrayOf(_propTypes.default.string),
      weekdays: _propTypes.default.arrayOf(_propTypes.default.string),
      weekdaysShort: _propTypes.default.arrayOf(_propTypes.default.string),
      weekdaysAbbrev: _propTypes.default.arrayOf(_propTypes.default.string)
    }),

    /**
     * An array of string returned by `Date.toDateString()`, indicating there are events in the specified days.
     * @default []
     */
    events: _propTypes.default.arrayOf(_propTypes.default.string),

    /**
     * Callback function when date is selected, first parameter is the newly selected date.
     * @default null
     */
    onSelect: _propTypes.default.func,

    /**
     * Callback function when Datepicker is opened.
     * @default null
     */
    onOpen: _propTypes.default.func,

    /**
     * Callback function when Datepicker is closed.
     * @default null
     */
    onClose: _propTypes.default.func,

    /**
     * Callback function when Datepicker HTML is refreshed.
     * @default null
     */
    onDraw: _propTypes.default.func
  })
};
DatePicker.defaultProps = {
  id: "DatePicker-".concat((0, _idgen.default)()),
  options: {
    autoClose: false,
    format: 'mmm dd, yyyy',
    parse: null,
    defaultDate: null,
    setDefaultDate: false,
    disableWeekends: false,
    disableDayFn: null,
    firstDay: 0,
    minDate: null,
    maxDate: null,
    yearRange: 10,
    isRTL: false,
    showMonthAfterYear: false,
    showDaysInNextAndPreviousMonths: false,
    container: null,
    showClearBtn: false,
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      previousMonth: '‹',
      nextMonth: '›',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },
    events: [],
    onSelect: null,
    onOpen: null,
    onClose: null,
    onDraw: null
  }
};
var _default = DatePicker;
exports.default = _default;
});

var Divider_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "divider"
  });
};

var _default = Divider;
exports.default = _default;
});

var Dropdown_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dropdownOptions = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _idgen = _interopRequireDefault(idgen_1);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      className = _ref.className,
      trigger = _ref.trigger,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, ["children", "className", "trigger", "options"]);

  var _dropdownContent = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var instance = M.Dropdown.init(document.querySelector("[data-target=\"".concat(props.id, "\"]")), options);
    return function () {
      instance && instance.destroy();
    };
  }, [options, props.id, children]);

  var renderTrigger = function renderTrigger() {
    return (0, _react.cloneElement)(trigger, {
      'data-target': props.id,
      className: (0, _classnames.default)(trigger.props.className, 'dropdown-trigger')
    });
  };

  var renderItems = function renderItems() {
    return _react.Children.map(children, function (element) {
      if (element.type.name === 'Divider') {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: (0, _idgen.default)(),
          className: "divider",
          tabIndex: "-1"
        });
      } else {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: (0, _idgen.default)()
        }, element);
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, renderTrigger(), /*#__PURE__*/_react.default.createElement("ul", _extends({}, props, {
    className: (0, _classnames.default)('dropdown-content', className),
    ref: _dropdownContent
  }), renderItems()));
};

var dropdownOptions = _propTypes.default.shape({
  alignment: _propTypes.default.oneOf(['left', 'right']),
  autoTrigger: _propTypes.default.bool,
  constrainWidth: _propTypes.default.bool,
  container: _propTypes.default.node,
  coverTrigger: _propTypes.default.bool,
  closeOnClick: _propTypes.default.bool,
  hover: _propTypes.default.bool,
  inDuration: _propTypes.default.number,
  outDuration: _propTypes.default.number,
  onOpenStart: _propTypes.default.func,
  onOpenEnd: _propTypes.default.func,
  onCloseStart: _propTypes.default.func,
  onCloseEnd: _propTypes.default.func
});

exports.dropdownOptions = dropdownOptions;
Dropdown.propTypes = {
  id: _propTypes.default.string,

  /**
   * The node to trigger the dropdown
   */
  trigger: _propTypes.default.node.isRequired,
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Options hash for the dropdown
   * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
   */
  options: dropdownOptions
};
Dropdown.defaultProps = {
  id: "Dropdown_".concat((0, _idgen.default)()),
  options: {
    alignment: 'left',
    autoTrigger: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};
var _default = Dropdown;
exports.default = _default;
});

var Row_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$node = _ref.node,
      Node = _ref$node === void 0 ? 'div' : _ref$node,
      props = _objectWithoutProperties(_ref, ["children", "className", "node"]);

  return /*#__PURE__*/_react.default.createElement(Node, _extends({
    className: (0, _classnames.default)('row', className)
  }, props), children);
};

Row.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  node: _propTypes.default.node
};
var _default = Row;
exports.default = _default;
});

var Footer_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _Row = _interopRequireDefault(Row_1);

var _Col = _interopRequireDefault(Col_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Footer = function Footer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      copyrights = _ref.copyrights,
      links = _ref.links,
      moreLinks = _ref.moreLinks,
      props = _objectWithoutProperties(_ref, ["children", "className", "copyrights", "links", "moreLinks"]);

  var classes = {
    'page-footer': true
  };
  return /*#__PURE__*/_react.default.createElement("footer", _extends({
    className: (0, _classnames.default)(classes, className)
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_Row.default, null, /*#__PURE__*/_react.default.createElement(_Col.default, {
    l: 6,
    s: 12
  }, children), /*#__PURE__*/_react.default.createElement(_Col.default, {
    l: 4,
    s: 12,
    offset: "l2"
  }, links))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-copyright"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, copyrights, moreLinks)));
};

Footer.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  copyrights: _propTypes.default.string,
  links: _propTypes.default.node,
  moreLinks: _propTypes.default.node
};
var _default = Footer;
exports.default = _default;
});

var MediaBox_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _idgen = _interopRequireDefault(idgen_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MediaBox = function MediaBox(_ref) {
  var id = _ref.id,
      options = _ref.options,
      children = _ref.children,
      className = _ref.className,
      caption = _ref.caption,
      props = _objectWithoutProperties(_ref, ["id", "options", "children", "className", "caption"]);

  var mediaBoxRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var instance = M.Materialbox.init(mediaBoxRef.current, options);
    return function () {
      if (instance) {
        instance.destroy();
      }
    };
  }, [id, options, children]);
  return _react.default.cloneElement(children, _objectSpread({
    id: id,
    ref: mediaBoxRef,
    className: (0, _classnames.default)('materialboxed', className),
    'data-caption': caption
  }, props));
};

MediaBox.propTypes = {
  children: _propTypes.default.node.isRequired,

  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /**
   * The caption shown below the image when opened
   */
  caption: _propTypes.default.string,
  options: _propTypes.default.shape({
    /**
     * Transition in duration in milliseconds.
     */
    inDuration: _propTypes.default.number,

    /**
     * Transition out duration in milliseconds.
     */
    outDuration: _propTypes.default.number,

    /**
     * Callback function called before materialbox is opened.
     */
    onOpenStart: _propTypes.default.func,

    /**
     * Callback function called after materialbox is opened.
     */
    onOpenEnd: _propTypes.default.func,

    /**
     * Callback function called before materialbox is closed.
     */
    onCloseStart: _propTypes.default.func,

    /**
     * Callback function called after materialbox is closed.
     */
    onCloseEnd: _propTypes.default.func
  })
};
MediaBox.defaultProps = {
  id: "MediaBox_".concat((0, _idgen.default)()),
  options: {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};
var _default = MediaBox;
exports.default = _default;
});

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeJSONStringify = void 0;

var safeJSONStringify = function safeJSONStringify(s) {
  try {
    return JSON.stringify(s);
  } catch (err) {
    console.error(err);
    return NaN;
  }
};

exports.safeJSONStringify = safeJSONStringify;
});

var Modal_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);



var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _idgen = _interopRequireDefault(idgen_1);

var _Button = _interopRequireDefault(Button_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Modal = function Modal(_ref) {
  var actions = _ref.actions,
      bottomSheet = _ref.bottomSheet,
      children = _ref.children,
      fixedFooter = _ref.fixedFooter,
      header = _ref.header,
      className = _ref.className,
      trigger = _ref.trigger,
      options = _ref.options,
      open = _ref.open,
      root = _ref.root,
      props = _objectWithoutProperties(_ref, ["actions", "bottomSheet", "children", "fixedFooter", "header", "className", "trigger", "options", "open", "root"]);

  var _modalRoot = (0, _react.useRef)(null);

  var _modalInstance = (0, _react.useRef)(null);

  var _modalRef = (0, _react.useRef)(null);

  if (root === null) {
    console.warn('React Materialize: root should be a valid node element to render a Modal');
  }

  (0, _react.useEffect)(function () {
    var modalRoot = _modalRoot.current;

    if (!_modalInstance.current) {
      _modalInstance.current = M.Modal.init(_modalRef.current, options);
    }

    return function () {
      if (root.contains(modalRoot)) {
        root.removeChild(modalRoot);
      }

      _modalInstance.current.destroy();
    }; // deep comparing options object
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(0, utils.safeJSONStringify)(options), root]);
  (0, _react.useEffect)(function () {
    if (open) {
      showModal();
    } else {
      hideModal();
    }
  }, [open]);

  var showModal = function showModal(e) {
    e && e.preventDefault();
    _modalInstance.current && _modalInstance.current.open();
  };

  var hideModal = function hideModal(e) {
    e && e.preventDefault();
    _modalInstance.current && _modalInstance.current.close();
  };

  var classes = (0, _classnames.default)('modal', {
    'modal-fixed-footer': fixedFooter,
    'bottom-sheet': bottomSheet
  }, className);

  var renderModalPortal = function renderModalPortal() {
    if (!_modalRoot.current) {
      _modalRoot.current = document.createElement('div');
      root.appendChild(_modalRoot.current);
    }

    return (0, reactDom.createPortal)( /*#__PURE__*/_react.default.createElement("div", _extends({
      className: classes,
      ref: _modalRef
    }, props), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/_react.default.createElement("h4", null, header), children), /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-footer"
    }, _react.Children.toArray(actions))), _modalRoot.current);
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, trigger && (0, _react.cloneElement)(trigger, {
    onClick: showModal
  }), renderModalPortal());
};

Modal.propTypes = {
  /**
   * Options
   * Object with options for modal
   */
  options: _propTypes.default.shape({
    /**
     * Opacity of the modal overlay.
     */
    opacity: _propTypes.default.number,

    /**
     * Transition in duration in milliseconds.
     */
    inDuration: _propTypes.default.number,

    /**
     * Transition out duration in milliseconds.
     */
    outDuration: _propTypes.default.number,

    /**
     * Callback function called before modal is opened.
     */
    onOpenStart: _propTypes.default.func,

    /**
     * Callback function called after modal is opened.
     */
    onOpenEnd: _propTypes.default.func,

    /**
     * Callback function called before modal is closed.
     */
    onCloseStart: _propTypes.default.func,

    /**
     * Callback function called after modal is closed.
     */
    onCloseEnd: _propTypes.default.func,

    /**
     * Prevent page from scrolling while modal is open.
     */
    preventScrolling: _propTypes.default.bool,

    /**
     * Allow modal to be dismissed by keyboard or overlay click.
     */
    dismissible: _propTypes.default.bool,

    /**
     * Starting top offset
     */
    startingTop: _propTypes.default.string,

    /**
     * Ending top offset
     */
    endingTop: _propTypes.default.string
  }),

  /**
   * Extra class to added to the Modal
   */
  className: _propTypes.default.string,

  /**
   * Modal is opened on mount
   * @default false
   */
  open: _propTypes.default.bool,

  /**
   * BottomSheet styled modal
   * @default false
   */
  bottomSheet: _propTypes.default.bool,

  /**
   * Component children
   */
  children: _propTypes.default.node,

  /**
   * FixedFooter styled modal
   * @default false
   */
  fixedFooter: _propTypes.default.bool,

  /**
   * Text to shown in the header of the modal
   */
  header: _propTypes.default.string,

  /**
   * The button to trigger the display of the modal
   */
  trigger: _propTypes.default.node,

  /**
   * The buttons to show in the footer of the modal
   * @default <Button>Close</Button>
   */
  actions: _propTypes.default.node,

  /**
   * The ID to trigger the modal opening/closing
   */
  id: _propTypes.default.string,

  /**
   * Root node where modal should be injected
   * @default document.body
   */
  root: _propTypes.default.any
};
Modal.defaultProps = {
  id: "Modal-".concat((0, _idgen.default)()),
  root: typeof window !== 'undefined' ? document.body : null,
  open: false,
  options: {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  },
  fixedFooter: false,
  bottomSheet: false,
  actions: [/*#__PURE__*/_react.default.createElement(_Button.default, {
    waves: "green",
    modal: "close",
    flat: true
  }, "Close")]
};
var _default = Modal;
exports.default = _default;
});

var NavItem_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NavItem = function NavItem(_ref) {
  var divider = _ref.divider,
      props = _objectWithoutProperties(_ref, ["divider"]);

  if (divider) return /*#__PURE__*/_react.default.createElement("li", {
    className: "divider"
  });
  return /*#__PURE__*/_react.default.createElement("a", props);
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  divider: _propTypes.default.bool,
  href: _propTypes.default.string,

  /**
   * NavItem can have onClick. If it does have, href
   * will not be rendered
   */
  onClick: _propTypes.default.func
};
var _default = NavItem;
exports.default = _default;
});

var SearchForm_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _Icon = _interopRequireDefault(Icon_1);

var _TextInput = _interopRequireDefault(TextInput_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchForm = function SearchForm(_ref) {
  var searchIcon = _ref.searchIcon,
      closeIcon = _ref.closeIcon;
  return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    label: searchIcon,
    type: "search"
  }, closeIcon));
};

SearchForm.propTypes = {
  searchIcon: _propTypes.default.node.isRequired,
  closeIcon: _propTypes.default.node.isRequired
};
SearchForm.defaultProps = {
  searchIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "search"),
  closeIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "close")
};
var _default = SearchForm;
exports.default = _default;
});

var Navbar_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _Icon = _interopRequireDefault(Icon_1);

var _SearchForm = _interopRequireDefault(SearchForm_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Navbar = function Navbar(_ref) {
  var id = _ref.id,
      children = _ref.children,
      brand = _ref.brand,
      className = _ref.className,
      extendWith = _ref.extendWith,
      fixed = _ref.fixed,
      alignLinks = _ref.alignLinks,
      centerLogo = _ref.centerLogo,
      search = _ref.search,
      menuIcon = _ref.menuIcon,
      sidenav = _ref.sidenav,
      options = _ref.options,
      centerChildren = _ref.centerChildren,
      props = _objectWithoutProperties(_ref, ["id", "children", "brand", "className", "extendWith", "fixed", "alignLinks", "centerLogo", "search", "menuIcon", "sidenav", "options", "centerChildren"]);

  var _sidenav = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var instance = M.Sidenav.init(_sidenav.current, options);
    return function () {
      instance && instance.destroy();
    };
  }, [options, children]);
  var brandClasses = (0, _classnames.default)({
    'brand-logo': true,
    right: alignLinks === 'left',
    center: centerLogo
  });
  var navCSS = (0, _classnames.default)({
    'nav-extended': extendWith
  }, className);
  var navMobileCSS = (0, _classnames.default)('hide-on-med-and-down', [alignLinks]);

  var links = _react.Children.map(children, function (link, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, link);
  });

  var sidenavLinks = sidenav ? sidenav : _react.Children.map(children, function (link, index) {
    var clonedLink = link && link.props && link.props.id ? (0, _react.cloneElement)(link, _objectSpread({}, link.props, {
      id: "sidenav-".concat(link.props.id)
    })) : link;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, clonedLink);
  });

  var navbar = /*#__PURE__*/_react.default.createElement("nav", _extends({
    className: navCSS
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)({
      container: centerChildren
    }, 'nav-wrapper')
  }, search ? /*#__PURE__*/_react.default.createElement(_SearchForm.default, null) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, brand && (0, _react.cloneElement)(brand, {
    className: (0, _classnames.default)(brand.props.className, brandClasses)
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: "#!",
    "data-target": id,
    className: "sidenav-trigger"
  }, menuIcon), /*#__PURE__*/_react.default.createElement("ul", {
    className: navMobileCSS
  }, links))), extendWith && /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-content"
  }, extendWith));

  if (fixed) {
    navbar = /*#__PURE__*/_react.default.createElement("div", {
      className: "navbar-fixed"
    }, navbar);
  }

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, navbar, /*#__PURE__*/_react.default.createElement("ul", {
    id: id,
    className: (0, _classnames.default)('sidenav', [alignLinks]),
    ref: _sidenav
  }, sidenavLinks));
};

Navbar.propTypes = {
  /**
   * override id
   * @default 'mobile-nav'
   */
  id: _propTypes.default.string,
  brand: _propTypes.default.node,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  extendWith: _propTypes.default.node,
  search: _propTypes.default.bool,

  /**
   * Allows for custom sidenav node, used for mobile view
   */
  sidenav: _propTypes.default.node,

  /**
   * left makes the navbar links left aligned, right makes them right aligned
   */
  alignLinks: _propTypes.default.oneOf(['left', 'right']),

  /**
   * The logo will center itself on medium and down screens.
   * Specifying centerLogo as a prop the logo will always be centered
   */
  centerLogo: _propTypes.default.bool,

  /**
   * The Navbar children will be constrained in a container rather than spread out to the far edges
   */
  centerChildren: _propTypes.default.bool,

  /**
   * Makes the navbar fixed
   */
  fixed: _propTypes.default.bool,

  /**
   * Options hash for the sidenav.
   * More info: https://materializecss.com/sidenav.html#options
   */
  options: _propTypes.default.shape({
    // Side of screen on which Sidenav appears.
    edge: _propTypes.default.oneOf(['left', 'right']),
    // Allow swipe gestures to open / close Sidenav.
    draggable: _propTypes.default.bool,
    // Length in ms of enter transition.
    inDuration: _propTypes.default.number,
    // Length in ms of exit transition.
    outDuration: _propTypes.default.number,
    // Function called when sidenav starts entering.
    onOpenStart: _propTypes.default.func,
    // Function called when sidenav finishes entering.
    onOpenEnd: _propTypes.default.func,
    // Function called when sidenav starts exiting.
    onCloseStart: _propTypes.default.func,
    // Function called when sidenav finishes exiting.
    onCloseEnd: _propTypes.default.func,
    // Prevent page from scrolling while sidenav is open.
    preventScrolling: _propTypes.default.bool
  }),
  menuIcon: _propTypes.default.node.isRequired
};
Navbar.defaultProps = {
  id: 'mobile-nav',
  options: {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  },
  menuIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "menu")
};
var _default = Navbar;
exports.default = _default;
});

var PaginationButton_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationButton = function PaginationButton(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      children = _ref.children,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      href = _ref.href,
      onSelect = _ref.onSelect;
  var classes = {
    'waves-effect': !disabled,
    disabled: disabled,
    active: active
  };
  var linkProps = href ? {
    href: href
  } : null;
  return /*#__PURE__*/_react.default.createElement("li", {
    className: (0, _classnames.default)(classes, className),
    onClick: onSelect
  }, /*#__PURE__*/_react.default.createElement("a", linkProps, children));
};

PaginationButton.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  href: _propTypes.default.string,
  onSelect: _propTypes.default.func
};
var _default = PaginationButton;
exports.default = _default;
});

var Pagination_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _Icon = _interopRequireDefault(Icon_1);

var _PaginationButton = _interopRequireDefault(PaginationButton_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Pagination = function Pagination(_ref) {
  var items = _ref.items,
      className = _ref.className,
      children = _ref.children,
      _ref$maxButtons = _ref.maxButtons,
      maxButtons = _ref$maxButtons === void 0 ? items : _ref$maxButtons,
      leftBtn = _ref.leftBtn,
      rightBtn = _ref.rightBtn,
      onSelect = _ref.onSelect,
      activePageProp = _ref.activePage;

  var _useState = (0, _react.useState)(activePageProp > 0 && activePageProp <= items ? activePageProp : 1),
      _useState2 = _slicedToArray(_useState, 2),
      activePage = _useState2[0],
      setActivePage = _useState2[1];

  (0, _react.useEffect)(function () {
    setActivePage(activePageProp);
  }, [activePageProp]);
  var onClick = (0, _react.useCallback)(function (pageIdx) {
    if (pageIdx > 0 && pageIdx <= items) {
      if (onSelect) onSelect(pageIdx);
      setActivePage(pageIdx);
    }
  }, [onSelect, items]);
  var renderButtons = (0, _react.useMemo)(function () {
    if (children) return children;
    var buttonsCount = Math.min(maxButtons, items);
    var maxPos = items - buttonsCount;
    var halfButtons = parseInt(buttonsCount / 2, 10);
    var hiddenPagesBefore = activePage - halfButtons;

    if (hiddenPagesBefore > maxPos) {
      hiddenPagesBefore = maxPos + 1;
    }

    var from = Math.max(hiddenPagesBefore, 1);
    var to = Math.min(items, from + maxButtons - 1);
    var buttons = [/*#__PURE__*/_react.default.createElement(_PaginationButton.default, {
      disabled: activePage === 1,
      key: 'pagination-0',
      onSelect: function onSelect() {
        return onClick(activePage - 1);
      }
    }, leftBtn)];

    var _loop = function _loop(i) {
      buttons.push( /*#__PURE__*/_react.default.createElement(_PaginationButton.default, {
        active: i === activePage,
        key: "pagination-".concat(i),
        onSelect: function onSelect() {
          return onClick(i);
        }
      }, i));
    };

    for (var i = from; i <= to; i++) {
      _loop(i);
    }

    buttons.push( /*#__PURE__*/_react.default.createElement(_PaginationButton.default, {
      key: "pagination-".concat(items + 1),
      disabled: activePage === items,
      onSelect: function onSelect() {
        return onClick(activePage + 1);
      }
    }, rightBtn));
    return buttons;
  }, [children, maxButtons, items, activePage, onClick, leftBtn, rightBtn]);
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _classnames.default)('pagination', className)
  }, renderButtons);
};

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: _propTypes.default.number.isRequired,

  /**
   * The initial activePage
   */
  activePage: _propTypes.default.number,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  maxButtons: _propTypes.default.number,
  onSelect: _propTypes.default.func,
  leftBtn: _propTypes.default.node,
  rightBtn: _propTypes.default.node
};
Pagination.defaultProps = {
  activePage: 1,
  items: 10,
  leftBtn: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "chevron_left"),
  rightBtn: /*#__PURE__*/_react.default.createElement(_Icon.default, null, "chevron_right")
};
var _default = Pagination;
exports.default = _default;
});

var Parallax_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Parallax = function Parallax(_ref) {
  var children = _ref.children,
      className = _ref.className,
      image = _ref.image,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, ["children", "className", "image", "options"]);

  var _parallax = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var instance = M.Parallax.init(_parallax.current, options);
    return function () {
      instance && instance.destroy();
    };
  }, [_parallax, options, children, image]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: (0, _classnames.default)('parallax-container', className)
  }, props), children, /*#__PURE__*/_react.default.createElement("div", {
    className: "parallax",
    ref: _parallax
  }, image));
};

Parallax.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * The image which will be used for the background of the parallax
   */
  image: _propTypes.default.node.isRequired,
  options: _propTypes.default.shape({
    /**
     * The minimum width of the screen, in pixels, where the parallax functionality starts working.
     */
    responsiveThreshold: _propTypes.default.number
  })
};
Parallax.defaultProps = {
  options: {
    responsiveThreshold: 0
  }
};
var _default = Parallax;
exports.default = _default;
});

var Spinner_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spinner = function Spinner(_ref) {
  var _cx;

  var color = _ref.color,
      only = _ref.only,
      className = _ref.className;
  var spinnerClasses = (0, _classnames.default)('spinner-layer', (_cx = {}, _defineProperty(_cx, "spinner-".concat(color, "-only"), only), _defineProperty(_cx, "spinner-".concat(color), !only), _cx));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(spinnerClasses, className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "circle-clipper left"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "circle"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "gap-patch"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "circle"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "circle-clipper right"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "circle"
  })));
};

Spinner.defaultProps = {
  only: true
};
Spinner.propTypes = {
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  only: _propTypes.default.bool
};
var _default = Spinner;
exports.default = _default;
});

var Preloader_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _Spinner = _interopRequireDefault(Spinner_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = ['blue', 'red', 'yellow', 'green'];

var Preloader = function Preloader(_ref) {
  var active = _ref.active,
      size = _ref.size,
      color = _ref.color,
      flashing = _ref.flashing,
      className = _ref.className;
  var classes = (0, _classnames.default)('preloader-wrapper', {
    active: active
  }, size);
  var spinners;

  if (flashing) {
    spinners = colors.map(function (color) {
      return /*#__PURE__*/_react.default.createElement(_Spinner.default, {
        color: color,
        only: false,
        key: color
      });
    });
  } else {
    spinners = /*#__PURE__*/_react.default.createElement(_Spinner.default, {
      color: color
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, classes)
  }, spinners);
};

Preloader.propTypes = {
  className: _propTypes.default.string,

  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: _propTypes.default.oneOf(['big', 'small', 'medium']),

  /**
   * Whether to spin
   * @default true
   */
  active: _propTypes.default.bool,

  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: _propTypes.default.oneOf(['blue', 'red', 'yellow', 'green']),

  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: _propTypes.default.bool
};
Preloader.defaultProps = {
  active: true,
  flashing: false,
  color: 'blue'
};
var _default = Preloader;
exports.default = _default;
});

var ProgressBar_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      className = _ref.className;
  var style;
  var classes = {
    indeterminate: progress === undefined,
    determinate: !!progress
  };

  if (progress) {
    style = {
      width: progress + '%'
    };
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('progress lighten-5', className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes, className),
    style: style
  }));
};

ProgressBar.propTypes = {
  className: _propTypes.default.string,

  /**
   * A number between 0..100 that indicates the current progress,
   * when provided, a determinate bar with the progress is displayed,
   * otherwise a indeterminate bar is shown
   */
  progress: _propTypes.default.number
};
var _default = ProgressBar;
exports.default = _default;
});

var RadioGroup_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RadioGroup = function RadioGroup(_ref) {
  var onChange = _ref.onChange,
      withGap = _ref.withGap,
      disabled = _ref.disabled,
      name = _ref.name,
      radioClassNames = _ref.radioClassNames,
      value = _ref.value,
      options = _ref.options;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, options.map(function (radioItem, idx) {
    return /*#__PURE__*/_react.default.createElement("label", {
      className: radioClassNames,
      htmlFor: "radio".concat(idx),
      key: "radio".concat(idx)
    }, /*#__PURE__*/_react.default.createElement("input", {
      id: "radio".concat(idx),
      value: radioItem.value,
      type: "radio",
      checked: radioItem.value === value,
      name: name,
      onChange: onChange,
      disabled: disabled,
      className: (0, _classnames.default)({
        'with-gap': withGap
      })
    }), /*#__PURE__*/_react.default.createElement("span", null, radioItem.label));
  }));
};

RadioGroup.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  })).isRequired,

  /**
   * predefined checked value
   */
  value: _propTypes.default.string,

  /**
   * radio group name
   */
  name: _propTypes.default.string,

  /**
   * with-gap styled checkbox
   */
  withGap: _propTypes.default.bool,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * classnames passed to label wrapper
   */
  radioClassNames: _propTypes.default.string
};
var _default = RadioGroup;
exports.default = _default;
});

var Range_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Range = function Range(_ref) {
  var min = _ref.min,
      max = _ref.max,
      step = _ref.step;
  var rangeRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var instance = M.Range.init(rangeRef.current);
    return function () {
      instance && instance.destroy();
    };
  }, [min, max]);
  return /*#__PURE__*/_react.default.createElement("p", {
    className: "range-field"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    ref: rangeRef,
    min: min,
    max: max,
    step: step
  }));
};

Range.propTypes = {
  min: _propTypes.default.string.isRequired,
  max: _propTypes.default.string.isRequired,
  step: _propTypes.default.string
};
var _default = Range;
exports.default = _default;
});

var Section_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Section = function Section(_ref) {
  var _ref$node = _ref.node,
      node = _ref$node === void 0 ? 'div' : _ref$node,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["node", "className"]);

  var Component = node;
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    className: (0, _classnames.default)('section', className)
  }, rest));
};

Section.propTypes = {
  children: _propTypes.default.node,
  node: _propTypes.default.node,
  id: _propTypes.default.string,
  className: _propTypes.default.string
};
var _default = Section;
exports.default = _default;
});

var Select_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _idgen = _interopRequireDefault(idgen_1);

var _constants = _interopRequireDefault(constants);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(_ref) {
  var id = _ref.id,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      noLayout = _ref.noLayout,
      browserDefault = _ref.browserDefault,
      icon = _ref.icon,
      label = _ref.label,
      className = _ref.className,
      success = _ref.success,
      error = _ref.error,
      validate = _ref.validate,
      children = _ref.children,
      multiple = _ref.multiple,
      options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["id", "s", "m", "l", "xl", "noLayout", "browserDefault", "icon", "label", "className", "success", "error", "validate", "children", "multiple", "options", "value", "onChange"]);

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      selectedValue = _useState2[0],
      setSelectedValue = _useState2[1];

  var _selectRef = (0, _react.useRef)(null);

  var _formSelectInstance = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    _formSelectInstance.current = M.FormSelect.init(_selectRef.current, options);
    return function () {
      _formSelectInstance.current && _formSelectInstance.current.destroy();
    };
  }, [options, children]);
  (0, _react.useEffect)(function () {
    setSelectedValue(value);
  }, [value]);
  var sizes = {
    s: s,
    m: m,
    l: l,
    xl: xl
  };
  var responsiveClasses = {};

  if (!noLayout) {
    responsiveClasses = {
      col: true
    };

    _constants.default.SIZES.forEach(function (size) {
      responsiveClasses[size + sizes[size]] = sizes[size];
    });
  }

  var renderOption = function renderOption(child) {
    return (0, _react.cloneElement)(child, {
      key: child.props.value
    });
  };

  var handleChange = function handleChange(e) {
    var value = e.target.value;

    if (multiple) {
      value = _formSelectInstance.current.getSelectedValues();
    }

    onChange && onChange(e);
    setSelectedValue(value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('input-field', responsiveClasses)
  }, Boolean(icon) && (0, _react.cloneElement)(icon, {
    className: 'prefix'
  }), /*#__PURE__*/_react.default.createElement("select", _extends({}, props, {
    type: "select",
    id: id,
    value: selectedValue,
    ref: _selectRef,
    onChange: handleChange,
    className: (0, _classnames.default)(className, _defineProperty({
      validate: validate,
      multiple: multiple
    }, 'browser-default', browserDefault)),
    multiple: multiple
  }), _react.Children.map(children, renderOption)), Boolean(label) && /*#__PURE__*/_react.default.createElement("label", {
    "data-success": success,
    "data-error": error,
    htmlFor: id
  }, label));
};

Select.propTypes = {
  /**
   * Use browser default styles
   */
  browserDefault: _propTypes.default.bool,

  /**
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /**
   * Responsive size for small size screens (Mobile Devices <= 600px)
   */
  s: _propTypes.default.number,

  /**
   * Responsive size for middle size screens (Tablet Devices > 600px)
   */
  m: _propTypes.default.number,

  /**
   * Responsive size for large size screens (Desktop Devices > 992px)
   */
  l: _propTypes.default.number,

  /**
   * Responsive size for extra large screens (Large Desktop Devices > 1200px)
   */
  xl: _propTypes.default.number,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * prefix icon
   */
  icon: _propTypes.default.node,

  /**
   * label text
   */
  label: _propTypes.default.string,

  /**
   * Input initial value
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),

  /**
   * Add validate class to input
   */
  validate: _propTypes.default.bool,

  /**
   * Custom success message
   */
  success: _propTypes.default.string,

  /**
   * Custom error message
   */
  error: _propTypes.default.string,

  /**
   * Additional classes for input
   */
  className: _propTypes.default.string,

  /**
   * override type="text"
   */
  type: _propTypes.default.string,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * Render a multiple dropdown,
   * use instance.getSelectedValues()
   * to get array of selected values
   */
  multiple: _propTypes.default.bool,
  children: _propTypes.default.any,

  /**
   * Options for the select
   * <a target="_blank" href="https://materializecss.com/select.html#options">https://materializecss.com/select.html</a>
   */
  options: _propTypes.default.shape({
    classes: _propTypes.default.string,

    /**
     * Options for the dropdown
     * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
     */
    dropdownOptions: Dropdown_1.dropdownOptions
  })
};
Select.defaultProps = {
  id: "Select-".concat((0, _idgen.default)()),
  multiple: false,
  options: {
    classes: '',
    dropdownOptions: {
      alignment: 'left',
      autoTrigger: true,
      constrainWidth: true,
      coverTrigger: true,
      closeOnClick: true,
      hover: false,
      inDuration: 150,
      outDuration: 250,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null
    }
  }
};
var _default = Select;
exports.default = _default;
});

var SideNav_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _classnames = _interopRequireDefault(classnames);

var _propTypes = _interopRequireDefault(propTypes);

var _idgen = _interopRequireDefault(idgen_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SideNav = function SideNav(_ref) {
  var options = _ref.options,
      id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      trigger = _ref.trigger,
      fixed = _ref.fixed,
      props = _objectWithoutProperties(_ref, ["options", "id", "className", "children", "trigger", "fixed"]);

  var sidenavRef = (0, _react.useRef)(null);
  var triggerRef = (0, _react.useRef)(null);
  var classNames = (0, _classnames.default)('sidenav', {
    'sidenav-fixed': fixed || !trigger
  }, className);
  (0, _react.useEffect)(function () {
    var instance = M.Sidenav.init(sidenavRef.current, options);
    return function () {
      return instance.destroy();
    };
  }, [options, children]);
  var renderTrigger = (0, _react.useMemo)(function () {
    if (!trigger) return;
    var triggerView = fixed ? 'hide-on-large-only' : 'show-on-large';
    var classNames = (0, _classnames.default)(trigger.props.className, triggerView, 'sidenav-trigger');
    return _react.default.cloneElement(trigger, {
      ref: triggerRef,
      'data-target': id,
      className: classNames
    });
  }, [id, fixed, trigger]);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, renderTrigger, /*#__PURE__*/_react.default.createElement("ul", _extends({
    ref: function ref(el) {
      return sidenavRef.current = el;
    },
    id: id,
    className: classNames
  }, props), children));
};

SideNav.propTypes = {
  /**
   * Adds sidenav-fixed class to sidenav
   */
  fixed: _propTypes.default.bool,

  /**
   * sidenav id. If none is passed, an id will be generated.
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * Component that is rendered to trigger the sidenav
   */
  trigger: _propTypes.default.node,

  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: _propTypes.default.shape({
    edge: _propTypes.default.oneOf(['left', 'right']),
    draggable: _propTypes.default.bool,
    inDuration: _propTypes.default.number,
    outDuration: _propTypes.default.number,
    onOpenStart: _propTypes.default.func,
    onOpenEnd: _propTypes.default.func,
    onCloseStart: _propTypes.default.func,
    onCloseEnd: _propTypes.default.func,
    preventScrolling: _propTypes.default.bool
  }),

  /**
   * Additional classes added to 'sidenav'
   */
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
SideNav.defaultProps = {
  id: "SideNav-".concat((0, _idgen.default)())
};
var _default = SideNav;
exports.default = _default;
});

var UserView_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UserShape = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserShape = {
  background: _propTypes.default.string,
  image: _propTypes.default.string,
  name: _propTypes.default.string,
  email: _propTypes.default.string
};
exports.UserShape = UserShape;

var UserView = function UserView(_ref) {
  var background = _ref.background,
      image = _ref.image,
      name = _ref.name,
      email = _ref.email;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "user-view"
  }, background && /*#__PURE__*/_react.default.createElement("div", {
    className: "background"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: background
  })), image && /*#__PURE__*/_react.default.createElement("a", {
    href: "#!user"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "circle",
    src: image
  })), name && /*#__PURE__*/_react.default.createElement("a", {
    href: "#!name"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "white-text name"
  }, name)), email && /*#__PURE__*/_react.default.createElement("a", {
    href: "#!email"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "white-text email"
  }, email)));
};

UserView.propTypes = UserShape;
var _default = UserView;
exports.default = _default;
});

var SideNavItem_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _UserView = _interopRequireWildcard(UserView_1);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SideNavItem = function SideNavItem(_ref) {
  var divider = _ref.divider,
      subheader = _ref.subheader,
      userView = _ref.userView,
      icon = _ref.icon,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '#!' : _ref$href,
      waves = _ref.waves,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["divider", "subheader", "userView", "icon", "href", "waves", "user", "children"]);

  var itemClasses = {
    divider: divider
  };
  var linkClasses = {
    subheader: subheader,
    'waves-effect': waves
  };
  return /*#__PURE__*/_react.default.createElement("li", _extends({
    className: (0, _classnames.default)(itemClasses)
  }, props), userView && user && /*#__PURE__*/_react.default.createElement(_UserView.default, user), !userView && /*#__PURE__*/_react.default.createElement("a", {
    className: (0, _classnames.default)(linkClasses),
    href: href
  }, icon && _react.default.cloneElement(icon, {
    className: 'prefix'
  }), children));
};

SideNavItem.propTypes = {
  children: _propTypes.default.node,
  divider: _propTypes.default.bool,
  subheader: _propTypes.default.bool,
  userView: _propTypes.default.bool,
  waves: _propTypes.default.bool,
  href: _propTypes.default.string,
  icon: _propTypes.default.node,
  user: _propTypes.default.shape(_UserView.UserShape)
};
var _default = SideNavItem;
exports.default = _default;
});

var Slide_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(_ref) {
  var image = _ref.image,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("li", null, image, children);
};

Slide.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * The image that will be used in the Slide
   */
  image: _propTypes.default.node.isRequired
};
var _default = Slide;
exports.default = _default;
});

var Slider_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Slider = function Slider(_ref) {
  var children = _ref.children,
      className = _ref.className,
      options = _ref.options,
      fullscreen = _ref.fullscreen,
      props = _objectWithoutProperties(_ref, ["children", "className", "options", "fullscreen"]);

  var sliderInstance = (0, _react.useRef)(null);

  var _slider = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  (0, _react.useEffect)(function () {
    sliderInstance.current = M.Slider.init(_slider.current, options);
    return function () {
      if (sliderInstance.current) {
        setActiveIndex(sliderInstance.current.activeIndex);
        sliderInstance.current.destroy();
      }
    };
  }, [_slider, options, fullscreen, children]);
  (0, _react.useEffect)(function () {
    if (activeIndex) {
      if (typeof indicators === 'undefined' || options.indicators) {
        sliderInstance.current['$indicators'][activeIndex].className = 'indicator-item active';
      }
    }
  }, [activeIndex, options.indicators, fullscreen]);
  /**
   * If the slider was not in fullscreen, the height is set as a style attribute
   * on the Slider element. When `.destroy()` is called, this attribute is not
   * removed, resulting in a fullscreen displayed incorrectly.
   */

  (0, _react.useEffect)(function () {
    if (fullscreen) {
      _slider.current.removeAttribute('style');

      _slider.current.childNodes[0].removeAttribute('style');
    }
  }, [fullscreen]);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: _slider,
    className: (0, _classnames.default)('slider', className, {
      fullscreen: fullscreen
    })
  }, props), /*#__PURE__*/_react.default.createElement("ul", {
    className: "slides"
  }, children));
};

Slider.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Whether or not the Slider should be fullscreen
   * @default false
   */
  fullscreen: _propTypes.default.bool,
  options: _propTypes.default.shape({
    /**
     * Set to false to hide slide indicators
     * @default true
     */
    indicators: _propTypes.default.bool,

    /**
     * The interval between transitions in ms
     * @default 6000
     */
    interval: _propTypes.default.number,

    /**
     * The duration of the transation animation in ms
     * @default 500
     */
    duration: _propTypes.default.number,

    /**
     * The height of the Slider window
     * @default 400
     */
    height: _propTypes.default.number
  })
};
Slider.defaultProps = {
  fullscreen: false,
  options: {
    indicators: true,
    interval: 6000,
    duration: 500,
    height: 400
  }
};
var _default = Slider;
exports.default = _default;
});

var Switch_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _idgen = _interopRequireDefault(idgen_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = function Switch(_ref) {
  var id = _ref.id,
      offLabel = _ref.offLabel,
      onLabel = _ref.onLabel,
      props = _objectWithoutProperties(_ref, ["id", "offLabel", "onLabel"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "switch"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  }, offLabel, /*#__PURE__*/_react.default.createElement("input", _extends({
    id: id,
    type: "checkbox"
  }, props)), /*#__PURE__*/_react.default.createElement("span", {
    className: "lever"
  }), onLabel));
};

Switch.propTypes = {
  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /**
   * label for off
   */
  offLabel: _propTypes.default.string.isRequired,

  /**
   * label for on
   */
  onLabel: _propTypes.default.string.isRequired,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * initialise checkbox checked
   */
  checked: _propTypes.default.bool
};
Switch.defaultProps = {
  id: "Switch-".concat((0, _idgen.default)()),
  onChange: function onChange() {}
};
var _default = Switch;
exports.default = _default;
});

var Tab_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _Col = _interopRequireDefault(Col_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is just a holder for the props and children for tab, thus
// there is no logic here.
var Tab = function Tab(_ref) {
  var children = _ref.children,
      idx = _ref.idx,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement(_Col.default, {
    id: "tab_".concat(idx),
    s: 12,
    className: className
  }, children);
};

Tab.propTypes = {
  title: _propTypes.default.string.isRequired,
  idx: _propTypes.default.string,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  active: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  tabWidth: _propTypes.default.number
};
var _default = Tab;
exports.default = _default;
});

var Table_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Table = function Table(_ref) {
  var centered = _ref.centered,
      children = _ref.children,
      className = _ref.className,
      hoverable = _ref.hoverable,
      responsive = _ref.responsive,
      striped = _ref.striped,
      props = _objectWithoutProperties(_ref, ["centered", "children", "className", "hoverable", "responsive", "striped"]);

  var classes = {
    centered: centered,
    highlight: hoverable,
    'responsive-table': responsive,
    striped: striped
  };
  return /*#__PURE__*/_react.default.createElement("table", _extends({
    className: (0, _classnames.default)(classes, className)
  }, props), children);
};

Table.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Center align all the text in the table
   * @default false
   */
  centered: _propTypes.default.bool,

  /**
   * Highlight the row that's hovered
   * @default false
   */
  hoverable: _propTypes.default.bool,

  /**
   * Enable response to make the table horizontally scrollable on smaller screens
   * @default false
   */
  responsive: _propTypes.default.bool,

  /**
   * striped style
   * @default false
   */
  striped: _propTypes.default.bool
};
var _default = Table;
exports.default = _default;
});

var Tabs_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _idgen = _interopRequireDefault(idgen_1);

var _classnames = _interopRequireDefault(classnames);

var _Row = _interopRequireDefault(Row_1);

var _Tab = _interopRequireDefault(Tab_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var scope = "tabs-".concat((0, _idgen.default)());

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      defaultValue = _ref.defaultValue,
      options = _ref.options,
      onChange = _ref.onChange;

  var _tabsRef = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var instance = M.Tabs.init(_tabsRef.current, options);
    return function () {
      return instance.destroy();
    };
  }, [options, children]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _classnames.default)('tabs', className),
    ref: _tabsRef
  }, _react.default.Children.map(children, function (child, id) {
    var _classes;

    var idx = "".concat(scope).concat(id);
    var _child$props = child.props,
        active = _child$props.active,
        disabled = _child$props.disabled,
        tabWidth = _child$props.tabWidth,
        title = _child$props.title;
    var classes = (_classes = {}, _defineProperty(_classes, "s".concat(tabWidth), tabWidth), _defineProperty(_classes, "tab", true), _defineProperty(_classes, "disabled", disabled), _defineProperty(_classes, "col", true), _classes);
    return /*#__PURE__*/_react.default.createElement("li", {
      className: (0, _classnames.default)(classes),
      key: idx
    }, /*#__PURE__*/_react.default.createElement("a", _extends({
      href: "#tab_".concat(idx),
      className: active || defaultValue === idx ? 'active' : ''
    }, disabled ? {} : {
      onClick: onChange
    }), title));
  })), /*#__PURE__*/_react.default.createElement(_Row.default, null, _react.default.Children.map(children, function (child, id) {
    var idx = "".concat(scope).concat(id);
    return (0, _react.cloneElement)(child, {
      idx: idx
    });
  })));
};

Tabs.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  onChange: _propTypes.default.func,

  /**
   * More info
   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
   */
  options: _propTypes.default.shape({
    /**
     * Transition duration in milliseconds.
     * @default 300
     */
    duration: _propTypes.default.number,

    /**
     * Callback for when a new tab content is showns.
     * @default null
     */
    onShow: _propTypes.default.func,

    /**
     * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option.
     * @default false
     */
    swipeable: _propTypes.default.bool,

    /**
     * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
     * @default Infinity
     */
    responsiveThreshold: _propTypes.default.number
  })
};
_Tab.default.defaultProps = {
  options: {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity
  }
};
var _default = Tabs;
exports.default = _default;
});

var Textarea_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _idgen = _interopRequireDefault(idgen_1);

var _constants = _interopRequireDefault(constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Textarea = function Textarea(_ref) {
  var children = _ref.children,
      className = _ref.className,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      noLayout = _ref.noLayout,
      placeholder = _ref.placeholder,
      icon = _ref.icon,
      label = _ref.label,
      success = _ref.success,
      error = _ref.error,
      iconClassName = _ref.iconClassName,
      onChange = _ref.onChange,
      validate = _ref.validate,
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["children", "className", "s", "m", "l", "xl", "noLayout", "placeholder", "icon", "label", "success", "error", "iconClassName", "onChange", "validate", "defaultValue", "value", "id"]);

  var textareaRef = (0, _react.useRef)(null);
  var dataLength = rest['data-length'];
  (0, _react.useEffect)(function () {
    if (dataLength) {
      M.CharacterCounter.init(textareaRef.current);
    }
  }, [dataLength, children]);
  (0, _react.useEffect)(function () {
    M.textareaAutoResize(textareaRef.current);
  }, [children]);
  var sizes = {
    s: s,
    m: m,
    l: l,
    xl: xl
  };
  var responsiveClasses;

  if (!noLayout) {
    responsiveClasses = {
      col: true
    };

    _constants.default.SIZES.forEach(function (size) {
      responsiveClasses[size + sizes[size]] = sizes[size];
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('input-field', responsiveClasses)
  }, Boolean(icon) && _react.default.cloneElement(icon, {
    className: 'prefix'
  }), /*#__PURE__*/_react.default.createElement("textarea", _extends({
    placeholder: placeholder,
    id: id,
    value: value,
    defaultValue: defaultValue,
    ref: textareaRef,
    onChange: onChange
  }, rest, {
    className: (0, _classnames.default)('materialize-textarea', {
      validate: validate
    }, className)
  })), Boolean(label) && /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classnames.default)({
      active: value || placeholder,
      'label-icon': typeof label !== 'string'
    }),
    "data-success": success,
    "data-error": error,
    htmlFor: id
  }, label), [error || success] && /*#__PURE__*/_react.default.createElement("span", {
    className: "helper-text",
    "data-error": error,
    "data-success": success
  }), children);
};

Textarea.propTypes = {
  children: _propTypes.default.node,

  /**
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /**
   * Responsive size for Mobile Devices
   */
  s: _propTypes.default.number,

  /**
   * Responsive size for Tablet Devices
   */
  m: _propTypes.default.number,

  /**
   * Responsive size for Desktop Devices
   */
  l: _propTypes.default.number,

  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: _propTypes.default.number,

  /**
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /**
   * Placeholder string
   */
  placeholder: _propTypes.default.string,

  /**
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * render icon next to input
   */
  icon: _propTypes.default.node,

  /**
   * icon classname
   */
  iconClassName: _propTypes.default.string,

  /**
   * textarea label
   */
  label: _propTypes.default.string,

  /**
   * Input initial value
   */
  defaultValue: _propTypes.default.string,

  /**
   * predefined value
   */
  value: _propTypes.default.string,

  /**
   * Add validate class to input
   */
  validate: _propTypes.default.bool,

  /**
   * Custom success message
   */
  success: _propTypes.default.string,

  /**
   * Custom error message
   */
  error: _propTypes.default.string,

  /**
   * textarea classname
   */
  className: _propTypes.default.string,

  /**
   * onChange callback
   */
  onChange: _propTypes.default.func
};
Textarea.defaultProps = {
  id: "Textarea-".concat((0, _idgen.default)())
};
var _default = Textarea;
exports.default = _default;
});

var TimePicker_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(react);

var _propTypes = _interopRequireDefault(propTypes);

var _TextInput = _interopRequireDefault(TextInput_1);

var _idgen = _interopRequireDefault(idgen_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TimePicker = function TimePicker(_ref) {
  var onChange = _ref.onChange,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, ["onChange", "options"]);

  var timeEl = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _options = onChange ? _objectSpread({}, options, {
      onSelect: onChange
    }) : options;

    var instance = M.Timepicker.init(timeEl.current, _options);
    return function () {
      instance && instance.destroy();
    };
  }, [options, onChange]);
  return /*#__PURE__*/_react.default.createElement(_TextInput.default, _extends({
    ref: timeEl,
    inputClassName: "timepicker"
  }, props));
};

TimePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: _propTypes.default.func,

  /**
   * id passed to Timepicker, also used for init method
   * @default idgen()
   */
  id: _propTypes.default.string,

  /**
   * options passed to init method
   * more info: https://materializecss.com/pickers.html#time-picker
   */
  options: _propTypes.default.shape({
    /**
     * Duration of the transition from/to the hours/minutes view.
     * @default 350
     */
    duration: _propTypes.default.number,

    /**
     * Specify a selector for a DOM element to render the calendar in, by default it will be placed before the input.
     * @default null
     */
    container: _propTypes.default.string,

    /**
     * Show the clear button in the Timepicker.
     * @default false
     */
    showClearBtn: _propTypes.default.bool,

    /**
     * Default time to set on the timepicker 'now' or '13:14'
     * @default 'now'
     */
    defaultTime: _propTypes.default.string,

    /**
     * Millisecond offset from the defaultTime.
     * @default 0
     */
    fromNow: _propTypes.default.number,

    /**
     * Internationalization options.
     * @default See i18n documentation.
     */
    i18n: _propTypes.default.shape({
      cancel: _propTypes.default.string,
      clear: _propTypes.default.string,
      done: _propTypes.default.string
    }),

    /**
     * Automatically close picker when minute is selected.
     * @default false
     */
    autoClose: _propTypes.default.bool,

    /**
     * Use 12 hour AM/PM clock instead of 24 hour clock.
     * @default true
     */
    twelveHour: _propTypes.default.bool,

    /**
     * Vibrate device when dragging clock hand.
     * @default true
     */
    vibrate: _propTypes.default.bool,

    /**
     * Callback function called before modal is opened.
     * @default null
     */
    onOpenStart: _propTypes.default.func,

    /**
     * Callback function called after modal is opened.
     * @default null
     */
    onOpenEnd: _propTypes.default.func,

    /**
     * Callback function called before modal is closed.
     * @default null
     */
    onCloseStart: _propTypes.default.func,

    /**
     * Callback function called after modal is closed.
     * @default null
     */
    onCloseEnd: _propTypes.default.func,

    /**
     * Callback function when a time is selected, first parameter is the hour and the second is the minute.
     * @default null
     */
    onSelect: _propTypes.default.func
  })
};
TimePicker.defaultProps = {
  id: "TimePicker-".concat((0, _idgen.default)()),
  options: {
    duration: 350,
    container: null,
    showClearBtn: false,
    defaultTime: 'now',
    fromNow: 0,
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok'
    },
    autoClose: false,
    twelveHour: true,
    vibrate: true,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onSelect: null
  }
};
var _default = TimePicker;
exports.default = _default;
});

var Toast_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(react);

var _propTypes = _interopRequireDefault(propTypes);

var _classnames = _interopRequireDefault(classnames);

var _Button = _interopRequireDefault(Button_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toast = function Toast(props) {
  var children = props.children,
      className = props.className,
      _props$options = props.options,
      options = _props$options === void 0 ? {} : _props$options;

  var showToast = function showToast() {
    return typeof M !== 'undefined' ? M.toast(options) : null;
  };

  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: showToast,
    className: (0, _classnames.default)('toast', className)
  }, children);
};

Toast.propTypes = {
  className: _propTypes.default.string,

  /**
   * Toast trigger content
   */
  children: _propTypes.default.node,

  /**
   * Options to pass to Toast method
   * <a href="https://materializecss.com/toasts.html">More</a>
   */
  options: _propTypes.default.shape({
    /**
     * The HTML content of the Toast.
     * @default ''
     */
    html: _propTypes.default.string,

    /**
     * Length in ms the Toast stays before dismissal.
     * @default 4000
     */
    displayLength: _propTypes.default.number,

    /**
     * Transition in duration in milliseconds.
     * @default 300
     */
    inDuration: _propTypes.default.number,

    /**
     * Transition out duration in milliseconds.
     * @default 375
     */
    outDuration: _propTypes.default.number,

    /**
     * Classes to be added to the toast element.
     * @default ''
     */
    classes: _propTypes.default.string,

    /**
     * Callback function called when toast is dismissed.
     * @default null
     */
    completeCallback: _propTypes.default.func,

    /**
     * The percentage of the toast's width it takes for a drag to dismiss a Toast.
     * @default 0.8
     */
    activationPercent: _propTypes.default.number
  })
};
var _default = Toast;
exports.default = _default;
});

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Autocomplete", {
  enumerable: true,
  get: function get() {
    return _Autocomplete.default;
  }
});
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: function get() {
    return _Badge.default;
  }
});
Object.defineProperty(exports, "Breadcrumb", {
  enumerable: true,
  get: function get() {
    return _Breadcrumb.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Caption", {
  enumerable: true,
  get: function get() {
    return _Caption.default;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _Card.default;
  }
});
Object.defineProperty(exports, "CardPanel", {
  enumerable: true,
  get: function get() {
    return _CardPanel.default;
  }
});
Object.defineProperty(exports, "CardTitle", {
  enumerable: true,
  get: function get() {
    return _CardTitle.default;
  }
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function get() {
    return _Carousel.default;
  }
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function get() {
    return _Checkbox.default;
  }
});
Object.defineProperty(exports, "Chip", {
  enumerable: true,
  get: function get() {
    return _Chip.default;
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _Col.default;
  }
});
Object.defineProperty(exports, "Collapsible", {
  enumerable: true,
  get: function get() {
    return _Collapsible.default;
  }
});
Object.defineProperty(exports, "CollapsibleItem", {
  enumerable: true,
  get: function get() {
    return _CollapsibleItem.default;
  }
});
Object.defineProperty(exports, "Collection", {
  enumerable: true,
  get: function get() {
    return _Collection.default;
  }
});
Object.defineProperty(exports, "CollectionItem", {
  enumerable: true,
  get: function get() {
    return _CollectionItem.default;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
});
Object.defineProperty(exports, "DatePicker", {
  enumerable: true,
  get: function get() {
    return _DatePicker.default;
  }
});
Object.defineProperty(exports, "Divider", {
  enumerable: true,
  get: function get() {
    return _Divider.default;
  }
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function get() {
    return _Dropdown.default;
  }
});
Object.defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _Icon.default;
  }
});
Object.defineProperty(exports, "MediaBox", {
  enumerable: true,
  get: function get() {
    return _MediaBox.default;
  }
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _Modal.default;
  }
});
Object.defineProperty(exports, "NavItem", {
  enumerable: true,
  get: function get() {
    return _NavItem.default;
  }
});
Object.defineProperty(exports, "Navbar", {
  enumerable: true,
  get: function get() {
    return _Navbar.default;
  }
});
Object.defineProperty(exports, "Pagination", {
  enumerable: true,
  get: function get() {
    return _Pagination.default;
  }
});
Object.defineProperty(exports, "PaginationButton", {
  enumerable: true,
  get: function get() {
    return _PaginationButton.default;
  }
});
Object.defineProperty(exports, "Parallax", {
  enumerable: true,
  get: function get() {
    return _Parallax.default;
  }
});
Object.defineProperty(exports, "Preloader", {
  enumerable: true,
  get: function get() {
    return _Preloader.default;
  }
});
Object.defineProperty(exports, "ProgressBar", {
  enumerable: true,
  get: function get() {
    return _ProgressBar.default;
  }
});
Object.defineProperty(exports, "RadioGroup", {
  enumerable: true,
  get: function get() {
    return _RadioGroup.default;
  }
});
Object.defineProperty(exports, "Range", {
  enumerable: true,
  get: function get() {
    return _Range.default;
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _Row.default;
  }
});
Object.defineProperty(exports, "SearchForm", {
  enumerable: true,
  get: function get() {
    return _SearchForm.default;
  }
});
Object.defineProperty(exports, "Section", {
  enumerable: true,
  get: function get() {
    return _Section.default;
  }
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function get() {
    return _Select.default;
  }
});
Object.defineProperty(exports, "SideNav", {
  enumerable: true,
  get: function get() {
    return _SideNav.default;
  }
});
Object.defineProperty(exports, "SideNavItem", {
  enumerable: true,
  get: function get() {
    return _SideNavItem.default;
  }
});
Object.defineProperty(exports, "Slide", {
  enumerable: true,
  get: function get() {
    return _Slide.default;
  }
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function get() {
    return _Slider.default;
  }
});
Object.defineProperty(exports, "Spinner", {
  enumerable: true,
  get: function get() {
    return _Spinner.default;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _Switch.default;
  }
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _Tab.default;
  }
});
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function get() {
    return _Table.default;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _Tabs.default;
  }
});
Object.defineProperty(exports, "TextInput", {
  enumerable: true,
  get: function get() {
    return _TextInput.default;
  }
});
Object.defineProperty(exports, "Textarea", {
  enumerable: true,
  get: function get() {
    return _Textarea.default;
  }
});
Object.defineProperty(exports, "TimePicker", {
  enumerable: true,
  get: function get() {
    return _TimePicker.default;
  }
});
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function get() {
    return _Toast.default;
  }
});
Object.defineProperty(exports, "resetID", {
  enumerable: true,
  get: function get() {
    return idgen_1.resetID;
  }
});

var _Autocomplete = _interopRequireDefault(Autocomplete_1);

var _Badge = _interopRequireDefault(Badge_1);

var _Breadcrumb = _interopRequireDefault(Breadcrumb_1);

var _Button = _interopRequireDefault(Button_1);

var _Caption = _interopRequireDefault(Caption_1);

var _Card = _interopRequireDefault(Card_1);

var _CardPanel = _interopRequireDefault(CardPanel_1);

var _CardTitle = _interopRequireDefault(CardTitle_1);

var _Carousel = _interopRequireDefault(Carousel_1);

var _Checkbox = _interopRequireDefault(Checkbox_1);

var _Chip = _interopRequireDefault(Chip_1);

var _Col = _interopRequireDefault(Col_1);

var _Collapsible = _interopRequireDefault(Collapsible_1);

var _CollapsibleItem = _interopRequireDefault(CollapsibleItem_1);

var _Collection = _interopRequireDefault(Collection_1);

var _CollectionItem = _interopRequireDefault(CollectionItem_1);

var _Container = _interopRequireDefault(Container_1);

var _DatePicker = _interopRequireDefault(DatePicker_1);

var _Divider = _interopRequireDefault(Divider_1);

var _Dropdown = _interopRequireDefault(Dropdown_1);

var _Footer = _interopRequireDefault(Footer_1);

var _Icon = _interopRequireDefault(Icon_1);

var _MediaBox = _interopRequireDefault(MediaBox_1);

var _Modal = _interopRequireDefault(Modal_1);

var _NavItem = _interopRequireDefault(NavItem_1);

var _Navbar = _interopRequireDefault(Navbar_1);

var _Pagination = _interopRequireDefault(Pagination_1);

var _PaginationButton = _interopRequireDefault(PaginationButton_1);

var _Parallax = _interopRequireDefault(Parallax_1);

var _Preloader = _interopRequireDefault(Preloader_1);

var _ProgressBar = _interopRequireDefault(ProgressBar_1);

var _RadioGroup = _interopRequireDefault(RadioGroup_1);

var _Range = _interopRequireDefault(Range_1);

var _Row = _interopRequireDefault(Row_1);

var _SearchForm = _interopRequireDefault(SearchForm_1);

var _Section = _interopRequireDefault(Section_1);

var _Select = _interopRequireDefault(Select_1);

var _SideNav = _interopRequireDefault(SideNav_1);

var _SideNavItem = _interopRequireDefault(SideNavItem_1);

var _Slide = _interopRequireDefault(Slide_1);

var _Slider = _interopRequireDefault(Slider_1);

var _Spinner = _interopRequireDefault(Spinner_1);

var _Switch = _interopRequireDefault(Switch_1);

var _Tab = _interopRequireDefault(Tab_1);

var _Table = _interopRequireDefault(Table_1);

var _Tabs = _interopRequireDefault(Tabs_1);

var _TextInput = _interopRequireDefault(TextInput_1);

var _Textarea = _interopRequireDefault(Textarea_1);

var _TimePicker = _interopRequireDefault(TimePicker_1);

var _Toast = _interopRequireDefault(Toast_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});

var Button = lib.Button;
var Chip = lib.Chip;
var Col = lib.Col;
var Container = lib.Container;
var Footer = lib.Footer;
var Icon = lib.Icon;
var NavItem = lib.NavItem;
var Navbar = lib.Navbar;
var ProgressBar = lib.ProgressBar;
var Row = lib.Row;
var Select = lib.Select;
var Table = lib.Table;
export { Button, Chip, Col, Container, Footer, Icon, NavItem, Navbar, ProgressBar, Row, Select, Table };
