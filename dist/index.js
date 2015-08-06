(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("promise"), require("mosaic-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "promise", "mosaic-ui"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("promise"), require("mosaic-ui")) : factory(root["react"], root["promise"], root["mosaic-ui"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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

	var _libListView = __webpack_require__(5);

	var _libListView2 = _interopRequireDefault(_libListView);

	var _libListPaginationView = __webpack_require__(6);

	var _libListPaginationView2 = _interopRequireDefault(_libListPaginationView);

	var _libListSizeView = __webpack_require__(7);

	var _libListSizeView2 = _interopRequireDefault(_libListSizeView);

	exports['default'] = {
	    ListItemView: _libListItemView2['default'],
	    ListView: _libListView2['default'],
	    ListPaginationView: _libListPaginationView2['default'],
	    ListSizeView: _libListSizeView2['default']
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

	        // --------------------------------------------
	    }, {
	        key: 'setOpen',
	        value: function setOpen(open) {
	            return this._setIn(this.openItems, open);
	        }
	    }, {
	        key: 'setSelected',
	        value: function setSelected(selected) {
	            return this._setIn(this.selectedItems, selected);
	        }

	        // --------------------------------------------
	    }, {
	        key: 'renderView',
	        value: function renderView() {
	            var key = this.object.id;
	            var Layout = this.Layout;
	            return _react2['default'].createElement(Layout, { key: this.object.id, view: this });
	        }

	        // --------------------------------------------
	    }, {
	        key: '_setIn',
	        value: function _setIn(set, add) {
	            if (!set) return _promise2['default'].resolve();
	            var resource = this.object;
	            if (add) {
	                return set.add(resource);
	            } else {
	                var pos = set.pos(resource);
	                return set.remove(pos);
	            }
	        }
	    }, {
	        key: '_isIn',
	        value: function _isIn(dataSet) {
	            if (!dataSet) return false;
	            return dataSet.has(this.object);
	        }
	    }, {
	        key: 'Layout',
	        get: function get() {
	            return this.constructor.Layout;
	        }
	    }, {
	        key: 'openItems',
	        get: function get() {
	            return this.options.openItems;
	        }
	    }, {
	        key: 'isOpen',
	        get: function get() {
	            return this._isIn(this.openItems);
	        }

	        // --------------------------------------------
	    }, {
	        key: 'selectedItems',
	        get: function get() {
	            return this.options.selectedItems;
	        }
	    }, {
	        key: 'isSelectable',
	        get: function get() {
	            var dataSet = this.selectedItems;
	            return !!dataSet;
	        }
	    }, {
	        key: 'isSelected',
	        get: function get() {
	            return this._isIn(this.selectedItems);
	        }
	    }]);

	    return ListItemView;
	})(_mosaicUi.View);

	exports['default'] = ListItemView;

	var ListItemLayout = (function (_ViewLayout) {
	    _inherits(ListItemLayout, _ViewLayout);

	    function ListItemLayout() {
	        _classCallCheck(this, ListItemLayout);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(ListItemLayout.prototype), 'constructor', this).apply(this, params);
	        this._toggleOpen = this._toggleOpen.bind(this);
	        this._toggleSelection = this._toggleSelection.bind(this);
	        this.state = this._newState({
	            open: this.props.view.isOpen,
	            selected: this.props.view.isSelected
	        });
	    }

	    _createClass(ListItemLayout, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            this._updateState({
	                open: props.view.isOpen,
	                selected: props.view.isSelected
	            });
	        }
	    }, {
	        key: '_toggleOpen',
	        value: function _toggleOpen(ev) {
	            this.props.view.setOpen(!this.state.open);
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    }, {
	        key: '_toggleSelection',
	        value: function _toggleSelection(ev) {
	            this.props.view.setSelected(!this.state.selected);
	            ev.preventDefault();
	            ev.stopPropagation();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var view = this.props.view;
	            var className = view.className || 'panel panel-default';
	            var content = undefined;
	            if (this.state.open) {
	                className += ' selected';
	                content = view._renderContent();
	            }
	            if (content) {
	                content = _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    content
	                );
	            }
	            return _react2['default'].createElement(
	                'div',
	                { key: this.props.id, className: className },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-heading', onClick: this._toggleOpen },
	                    this._renderCheckbox(),
	                    this._renderTitle()
	                ),
	                this._renderContent()
	            );
	        }
	    }, {
	        key: '_renderTitle',
	        value: function _renderTitle() {
	            var view = this.props.view;
	            return _react2['default'].createElement(
	                'a',
	                { href: '#', onClick: this._toggleOpen },
	                view._renderTitle()
	            );
	        }
	    }, {
	        key: '_renderCheckbox',
	        value: function _renderCheckbox() {
	            var view = this.props.view;
	            var checkbox = undefined;
	            if (view.isSelectable) {
	                var checkboxClassName = view.isSelected ? "glyphicon glyphicon-check" : "glyphicon glyphicon-unchecked";
	                checkbox = _react2['default'].createElement(
	                    'a',
	                    { href: '#', className: 'btn', onClick: this._toggleSelection },
	                    _react2['default'].createElement('i', { className: checkboxClassName })
	                );
	            }
	            return checkbox;
	        }
	    }, {
	        key: '_renderContent',
	        value: function _renderContent() {
	            var view = this.props.view;
	            var content = undefined;
	            if (this.state.open) {
	                content = view._renderContent();
	            }
	            if (content) {
	                content = _react2['default'].createElement(
	                    'div',
	                    { className: 'panel-body' },
	                    content
	                );
	            }
	            return content;
	        }
	    }]);

	    return ListItemLayout;
	})(_mosaicUi.ViewLayout);

	ListItemView.Layout = ListItemLayout;
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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

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
	            var view = this.props.view;
	            if (!list.length) {
	                listView = view._renderEmptyList();
	            }
	            var className = view.className || 'panels';
	            return _react2['default'].createElement(
	                'div',
	                { className: className, style: this.style },
	                listView
	            );
	        }
	    }]);

	    return ListLayout;
	})(_mosaicUi.DataSetLayout);

	module.exports = exports['default'];

/***/ },
/* 6 */
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
	                        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-step-backward' })
	                    ),
	                    prev: _react2['default'].createElement(
	                        'span',
	                        null,
	                        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-chevron-left' }),
	                        '…'
	                    ),
	                    next: _react2['default'].createElement(
	                        'span',
	                        null,
	                        '…',
	                        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-chevron-right' })
	                    ),
	                    last: _react2['default'].createElement(
	                        'span',
	                        null,
	                        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-step-forward' }),
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
	                    { href: '#', onClick: this._setPage.bind(this, index) },
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

/***/ },
/* 7 */
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

	var ListSizeView = (function (_View) {
	    _inherits(ListSizeView, _View);

	    function ListSizeView() {
	        _classCallCheck(this, ListSizeView);

	        _get(Object.getPrototypeOf(ListSizeView.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ListSizeView, [{
	        key: 'renderView',
	        value: function renderView(options) {
	            options = options || {};
	            return _react2['default'].createElement(ListSizeLayout, _extends({
	                view: this,
	                dataSet: this.options.dataSet,
	                dependencies: this.options.dependencies || []
	            }, options));
	        }
	    }]);

	    return ListSizeView;
	})(_mosaicUi.View);

	exports['default'] = ListSizeView;

	var ListSizeLayout = (function (_DataSetLayout) {
	    _inherits(ListSizeLayout, _DataSetLayout);

	    function ListSizeLayout() {
	        _classCallCheck(this, ListSizeLayout);

	        _get(Object.getPrototypeOf(ListSizeLayout.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ListSizeLayout, [{
	        key: 'render',
	        value: function render() {
	            var dataSet = this.props.dataSet;
	            var className = this.props.className || "badge";
	            return _react2['default'].createElement(
	                'span',
	                { className: className },
	                dataSet.size()
	            );
	        }
	    }]);

	    return ListSizeLayout;
	})(_mosaicUi.DataSetLayout);

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;