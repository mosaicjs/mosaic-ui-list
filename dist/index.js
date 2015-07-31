(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("promise"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "promise"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("promise")) : factory(root["react"], root["promise"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libListItemView = __webpack_require__(1);

	var _libListItemView2 = _interopRequireDefault(_libListItemView);

	var _libListView = __webpack_require__(9);

	var _libListView2 = _interopRequireDefault(_libListView);

	var _libListPaginationView = __webpack_require__(10);

	var _libListPaginationView2 = _interopRequireDefault(_libListPaginationView);

	exports['default'] = {
	    ListItemView: _libListItemView2['default'],
	    ListView: _libListView2['default'],
	    ListPaginationView: _libListPaginationView2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _promise = __webpack_require__(3);

	var _promise2 = _interopRequireDefault(_promise);

	var _mosaicUi = __webpack_require__(4);

	var ListItemView = (function (_View) {
	    _inherits(ListItemView, _View);

	    function ListItemView() {
	        _classCallCheck(this, ListItemView);

	        _get(Object.getPrototypeOf(ListItemView.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ListItemView, [{
	        key: '_renderTitle',
	        value: function _renderTitle() {
	            var r = this.object;
	            return r.get('properties.name');
	        }
	    }, {
	        key: '_renderContent',
	        value: function _renderContent() {
	            var r = this.object;
	            return r.get('properties.description');
	        }
	    }, {
	        key: 'setOpen',
	        value: function setOpen(open) {
	            var openItems = this.openItems;
	            if (!openItems) return _promise2['default'].resolve();
	            var resource = this.object;
	            if (open) {
	                return openItems.add(resource);
	            } else {
	                var pos = openItems.pos(resource);
	                return openItems.remove(pos);
	            }
	        }
	    }, {
	        key: 'renderView',
	        value: function renderView() {
	            return _react2['default'].createElement(ListItemLayout, { key: this.object.id, view: this });
	        }
	    }, {
	        key: 'openItems',
	        get: function get() {
	            return this.options.openItems;
	        }
	    }, {
	        key: 'isOpen',
	        get: function get() {
	            var dataSet = this.openItems;
	            if (!dataSet) return false;
	            return dataSet.has(this.object);
	        }
	    }]);

	    return ListItemView;
	})(_mosaicUi.View);

	exports['default'] = ListItemView;

	var ListItemLayout = (function (_React$Component) {
	    _inherits(ListItemLayout, _React$Component);

	    function ListItemLayout() {
	        _classCallCheck(this, ListItemLayout);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(ListItemLayout.prototype), 'constructor', this).apply(this, params);
	        this._onClick = this._onClick.bind(this);
	        this.state = this._newState();
	    }

	    _createClass(ListItemLayout, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.setState(this._newState({ open: this.props.view.isOpen }));
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            this.setState(this._newState({ open: props.view.isOpen }));
	        }
	    }, {
	        key: '_newState',
	        value: function _newState(state) {
	            return _mosaicUi.View.extend({}, this.state, state);
	        }
	    }, {
	        key: '_onClick',
	        value: function _onClick(ev) {
	            var view = this.props.view;
	            view.setOpen(!this.state.open);
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var view = this.props.view;
	            var content = undefined;
	            if (this.state.open) {
	                content = view._renderContent();
	            }
	            return _react2['default'].createElement(
	                'div',
	                { key: this.props.id, className: view.className, style: view.style },
	                _react2['default'].createElement(
	                    'h3',
	                    null,
	                    _react2['default'].createElement(
	                        'a',
	                        { href: "#", onClick: this._onClick },
	                        view._renderTitle()
	                    )
	                ),
	                content
	            );
	        }
	    }]);

	    return ListItemLayout;
	})(_react2['default'].Component);

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libDataSetLayout = __webpack_require__(5);

	var _libDataSetLayout2 = _interopRequireDefault(_libDataSetLayout);

	var _libUtils = __webpack_require__(7);

	var _libUtils2 = _interopRequireDefault(_libUtils);

	var _libView = __webpack_require__(8);

	var _libView2 = _interopRequireDefault(_libView);

	var _libViewLayout = __webpack_require__(6);

	var _libViewLayout2 = _interopRequireDefault(_libViewLayout);

	exports['default'] = {
	    DataSetLayout: _libDataSetLayout2['default'],
	    Utils: _libUtils2['default'],
	    View: _libView2['default'],
	    ViewLayout: _libViewLayout2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _ViewLayout2 = __webpack_require__(6);

	var _ViewLayout3 = _interopRequireDefault(_ViewLayout2);

	var _Utils = __webpack_require__(7);

	var _Utils2 = _interopRequireDefault(_Utils);

	var DataSetLayout = (function (_ViewLayout) {
	    _inherits(DataSetLayout, _ViewLayout);

	    function DataSetLayout() {
	        _classCallCheck(this, DataSetLayout);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(DataSetLayout.prototype), 'constructor', this).apply(this, params);
	        this._reload = _Utils2['default'].debounce(this._reload.bind(this), 100);
	        this._onSetUpdates = this._onSetUpdates.bind(this);
	    }

	    _createClass(DataSetLayout, [{
	        key: '_triggerListeners',
	        value: function _triggerListeners(method) {
	            var dependencies = this.props.dependencies || [];
	            dependencies.forEach(function (set) {
	                if (set) {
	                    set[method]('update', this._onSetUpdates);
	                }
	            }, this);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this._triggerListeners('addListener');
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this._triggerListeners('removeListener');
	        }
	    }, {
	        key: '_onSetUpdates',
	        value: function _onSetUpdates(intent) {
	            intent.then((function () {
	                this._reload();
	            }).bind(this));
	        }
	    }, {
	        key: '_reload',
	        value: function _reload() {
	            this._updateState();
	        }
	    }]);

	    return DataSetLayout;
	})(_ViewLayout3['default']);

	exports['default'] = DataSetLayout;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Utils = __webpack_require__(7);

	var _Utils2 = _interopRequireDefault(_Utils);

	var ViewLayout = (function (_React$Component) {
	    _inherits(ViewLayout, _React$Component);

	    function ViewLayout() {
	        _classCallCheck(this, ViewLayout);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(ViewLayout.prototype), 'constructor', this).apply(this, params);
	        this.state = this._newState();
	    }

	    _createClass(ViewLayout, [{
	        key: '_newState',
	        value: function _newState() {
	            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	            }

	            return _Utils2['default'].extend.apply(_Utils2['default'], [{}, this.state].concat(args));
	        }
	    }, {
	        key: '_updateState',
	        value: function _updateState() {
	            this.setState(this._newState.apply(this, arguments));
	        }
	    }]);

	    return ViewLayout;
	})(_react2['default'].Component);

	exports['default'] = ViewLayout;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Utils = (function () {
	    function Utils() {
	        _classCallCheck(this, Utils);
	    }

	    _createClass(Utils, null, [{
	        key: "extend",
	        value: function extend() {
	            var result = {};

	            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	                params[_key] = arguments[_key];
	            }

	            params.forEach(function (param) {
	                if (!param) return;
	                for (var key in param) {
	                    if (param.hasOwnProperty(key)) {
	                        result[key] = param[key];
	                    }
	                }
	            });
	            return result;
	        }
	    }, {
	        key: "debounce",
	        value: function debounce(method, timeout) {
	            var timerId = undefined;
	            function clear() {
	                if (!timerId) return;
	                clearTimeout(timerId);
	                timerId = undefined;
	            }
	            return function () {
	                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    args[_key2] = arguments[_key2];
	                }

	                var that = this;
	                clear();
	                timerId = setTimeout(function () {
	                    clear();
	                    method.apply(that, args);
	                }, timeout);
	            };
	        }
	    }]);

	    return Utils;
	})();

	exports["default"] = Utils;
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var View = (function () {
	    function View() {
	        _classCallCheck(this, View);
	    }

	    _createClass(View, [{
	        key: 'renderView',
	        value: function renderView() {
	            throw new Error('Not implemented');
	        }
	    }]);

	    return View;
	})();

	exports['default'] = View;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mosaicUi = __webpack_require__(4);

	var _ListItemView = __webpack_require__(1);

	var _ListItemView2 = _interopRequireDefault(_ListItemView);

	var ListView = (function (_View) {
	    _inherits(ListView, _View);

	    function ListView() {
	        _classCallCheck(this, ListView);

	        _get(Object.getPrototypeOf(ListView.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ListView, [{
	        key: '_renderEmptyList',
	        value: function _renderEmptyList() {
	            if (typeof this.options.emptyList === 'function') {
	                return this.options.emptyList();
	            }
	        }
	    }, {
	        key: 'renderView',
	        value: function renderView() {
	            var itemViewType = this.options.itemViewType || _ListItemView2['default'];
	            return _react2['default'].createElement(ListLayout, {
	                view: this,
	                dataSet: this.options.dataSet,
	                dependencies: this.options.dependencies || [],
	                itemViewType: itemViewType,
	                itemOptions: this.options });
	        }
	    }, {
	        key: 'ListItemView',

	        /** Returns the type of list items. */
	        get: function get() {
	            return _ListItemView2['default'];
	        }
	    }]);

	    return ListView;
	})(_mosaicUi.View);

	exports['default'] = ListView;

	var ListLayout = (function (_DataSetLayout) {
	    _inherits(ListLayout, _DataSetLayout);

	    function ListLayout() {
	        _classCallCheck(this, ListLayout);

	        _get(Object.getPrototypeOf(ListLayout.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ListLayout, [{
	        key: 'render',
	        value: function render() {
	            var dataSet = this.props.dataSet;
	            var ListItemView = this.props.itemViewType;
	            var list = dataSet.map((function (r) {
	                var itemView = r.newAdapter(ListItemView, this.props.itemOptions);
	                var result = itemView.renderView();
	                return result;
	            }).bind(this));
	            var listView = list;
	            if (!list.length) {
	                listView = this.props.view._renderEmptyList();
	            }
	            return _react2['default'].createElement(
	                'div',
	                { className: this.className, style: this.style },
	                listView
	            );
	        }
	    }]);

	    return ListLayout;
	})(_mosaicUi.DataSetLayout);

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _mosaicUi = __webpack_require__(4);

	var ListPaginationView = (function (_View) {
	    _inherits(ListPaginationView, _View);

	    function ListPaginationView() {
	        _classCallCheck(this, ListPaginationView);

	        _get(Object.getPrototypeOf(ListPaginationView.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ListPaginationView, [{
	        key: 'renderView',
	        value: function renderView() {
	            var dataSet = this.options.dataSet || this.object;
	            return _react2['default'].createElement(ListPaginationLayout, _extends({}, this.options, { dataSet: dataSet }));
	        }
	    }]);

	    return ListPaginationView;
	})(_mosaicUi.View);

	exports['default'] = ListPaginationView;

	var ListPaginationLayout = (function (_DataSetLayout) {
	    _inherits(ListPaginationLayout, _DataSetLayout);

	    function ListPaginationLayout() {
	        _classCallCheck(this, ListPaginationLayout);

	        _get(Object.getPrototypeOf(ListPaginationLayout.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ListPaginationLayout, [{
	        key: '_getLabels',
	        value: function _getLabels() {
	            if (!this._labels) {
	                this._labels = this.props.labels || {
	                    first: _react2['default'].createElement(
	                        'span',
	                        null,
	                        ' ',
	                        _react2['default'].createElement('i', { className: "glyphicon glyphicon-step-backward" })
	                    ),
	                    prev: _react2['default'].createElement(
	                        'span',
	                        null,
	                        _react2['default'].createElement('i', { className: "glyphicon glyphicon-chevron-left" }),
	                        '…'
	                    ),
	                    next: _react2['default'].createElement(
	                        'span',
	                        null,
	                        '…',
	                        _react2['default'].createElement('i', { className: "glyphicon glyphicon-chevron-right" })
	                    ),
	                    last: _react2['default'].createElement(
	                        'span',
	                        null,
	                        _react2['default'].createElement('i', { className: "glyphicon glyphicon-step-forward" }),
	                        ' '
	                    )
	                };
	            }
	            return this._labels;
	        }
	    }, {
	        key: '_setPage',
	        value: function _setPage(pageId, ev) {
	            this.props.dataSet.pageIdx = pageId;
	            ev.stopPropagation();
	            ev.preventDefault();
	        }
	    }, {
	        key: '_renderButton',
	        value: function _renderButton(index, label, key, activeClass) {
	            var className;
	            var pageIndex = this.props.dataSet.pageIdx;
	            if (pageIndex === index) {
	                className = activeClass;
	            }
	            return _react2['default'].createElement(
	                'li',
	                { key: key, className: className },
	                _react2['default'].createElement(
	                    'a',
	                    { href: "#", onClick: this._setPage.bind(this, index) },
	                    label
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var dataSet = this.props.dataSet;
	            var pageSize = dataSet.pageSize;
	            var pageIndex = dataSet.pageIdx;
	            var pageCount = dataSet.pageNumber;
	            var className = this.props.className || 'pagination';
	            if (pageCount <= 1) {
	                return _react2['default'].createElement('div', { className: className });
	            }
	            var buttons = [];
	            var buttonsNumber = this.buttonsNumber;
	            var labels = this._getLabels();
	            buttons.push(this._renderButton(0, labels.first || '«', 'prev', 'disabled'));
	            var from = Math.max(0, pageIndex - Math.floor(buttonsNumber / 2));
	            if (from + buttonsNumber >= pageCount) {
	                from = Math.max(0, pageCount - buttonsNumber);
	            }
	            var to = Math.min(pageCount, from + buttonsNumber);

	            var index;
	            var button;
	            if (from > 0) {
	                index = Math.max(0, pageIndex - buttonsNumber);
	                button = this._renderButton(index, labels.prev || '…', 'space-' + index);
	                buttons.push(button);
	            }
	            for (var i = from; i < to; i++) {
	                buttons.push(this._renderButton(i, i + 1 + '', 'item-' + i, 'active'));
	            }
	            if (to < pageCount) {
	                index = Math.min(pageCount - 1, pageIndex + buttonsNumber);
	                button = this._renderButton(index, labels.next || '…', 'space-' + index);
	                buttons.push(button);
	            }
	            buttons.push(this._renderButton(Math.max(0, pageCount - 1), labels.last || '»', 'next', 'disabled'));
	            return _react2['default'].createElement(
	                'ul',
	                { key: this.props.key, className: className },
	                buttons
	            );
	        }
	    }, {
	        key: 'buttonsNumber',
	        get: function get() {
	            return this.props.buttonsNumber || 5;
	        }
	    }]);

	    return ListPaginationLayout;
	})(_mosaicUi.DataSetLayout);

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;