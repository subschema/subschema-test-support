"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expected = exports.focus = exports.blur = exports.check = exports.change = exports.click = exports.select = exports.byComponents = exports.byComponent = exports.byClass = exports.filterProp = exports.notByType = exports.byTypes = exports.byType = exports.byTag = exports.byTags = exports.byName = exports.byId = exports.expect = exports.findNode = exports.prettyLog = exports.intoWithContext = exports.context = exports.into = exports.intoWithState = exports.Simulate = exports.TestUtils = exports.ReactDOM = exports.React = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Subschema = require('Subschema');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Simulate = _reactAddonsTestUtils2.default.Simulate;

function prettyLog(result) {
    console.log(JSON.stringify(result, null, '\t'));
}
function into(node, debug) {
    if (debug === true) {
        debug = document.createElement('div');
        document.body.appendChild(debug);
        return _reactDom2.default.render(node, debug);
    }
    return _reactAddonsTestUtils2.default.renderIntoDocument(node);
}

function notByType(node, type, description) {
    var ret = byTypes(node, type);
    (0, _expect2.default)(ret[0]).toNotExist(description);
}
function expected(nodes, length) {
    if (length === void 0) {
        return nodes;
    }
    if (nodes.length !== length) {
        throw new Error('Found ' + node.length + ' nodes expected ' + length);
    }
    return nodes;
}
function byTypes(node, type, length) {
    return expected(_reactAddonsTestUtils2.default.scryRenderedComponentsWithType(node, type), length);
}
function byType(node, type) {
    return _reactAddonsTestUtils2.default.findRenderedComponentWithType(node, type);
}

function byTag(node, tag) {
    return _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag(node, tag);
}

function byTags(node, tag, length) {
    return expected(_reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithTag(node, tag), length);
}
function onlyOne(node) {
    if (node.length != 1) {
        throw new Error('Found ' + node.length + ' nodes expected 1');
    }
    return node[0];
}
function byName(root, name) {
    return onlyOne(_reactAddonsTestUtils2.default.findAllInRenderedTree(root, function (inst) {
        if (!_reactAddonsTestUtils2.default.isDOMComponent(inst)) {
            return false;
        }
        var inode = findNode(inst);
        return inode.name === name;
    }));
}

function filterProp(node, property, value) {
    node = Array.isArray(node) ? node : [node];
    return node.filter(function (n) {
        var props = n instanceof Element ? n.attributes : n.props;
        if (property in props) {
            if (value === null) return true;

            return props[property] === value;
        }
        return false;
    });
}
function byId(node, id) {
    var all = _reactAddonsTestUtils2.default.findAllInRenderedTree(node, function (inst) {
        if (!_reactAddonsTestUtils2.default.isDOMComponent(inst)) {
            return false;
        }
        var inode = findNode(inst);
        return inode.id === id;
    });
    return onlyOne(all);
}

function click(node) {
    Simulate.click(findNode(node));
    return node;
}

function change(node, value) {
    Simulate.change(findNode(node), { target: { value: value } });
    return node;
}
function check(node, checked, value) {
    Simulate.change(findNode(node), { target: { checked: checked, value: value } });
    return node;
}
function blur(node) {
    Simulate.blur(findNode(node));
    return node;
}

function focus(node) {
    Simulate.focus(findNode(node));
    return node;
}

function byComponent(node, comp) {
    return onlyOne(_reactAddonsTestUtils2.default.scryRenderedComponentsWithType(asNode(node), comp));
}

function byComponents(node, comp, length) {
    return expected(_reactAddonsTestUtils2.default.scryRenderedComponentsWithType(asNode(node), comp), length);
}
function byClass(node, className) {
    return _reactAddonsTestUtils2.default.scryRenderedDOMComponentsWithClass(asNode(node), className);
}
function asNode(node) {
    if (Array.isArray(node)) {
        return onlyOne(node);
    }
    return node;
}
function findNode(n) {
    return _reactDom2.default.findDOMNode(asNode(n));
}
function defChildContext() {
    return {
        valueManager: (0, _Subschema.ValueManager)(),
        loader: _Subschema.loader,
        injector: _Subschema.injector
    };
}
function context() {
    var _class, _temp2;

    var childContext = arguments.length <= 0 || arguments[0] === undefined ? defChildContext : arguments[0];
    var childContextTypes = arguments.length <= 1 || arguments[1] === undefined ? {
        valueManager: _Subschema.PropTypes.valueManager,
        loader: _Subschema.PropTypes.loader,
        injector: _Subschema.PropTypes.injector
    } : arguments[1];

    var getChildContext = typeof childContext === 'function' ? childContext : function () {
        return childContext;
    };

    var Context = (_temp2 = _class = function (_Component) {
        _inherits(Context, _Component);

        function Context() {
            var _Object$getPrototypeO;

            var _temp, _this, _ret;

            _classCallCheck(this, Context);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Context)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.getChildContext = getChildContext, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(Context, [{
            key: 'render',
            value: function render() {
                return this.props.children;
            }
        }]);

        return Context;
    }(_react.Component), _class.childContextTypes = childContextTypes, _temp2);

    return Context;
}
function intoWithContext(child, ctx, debug, contextTypes) {
    var Context = context(ctx, contextTypes);
    return byType(into(_react2.default.createElement(
        Context,
        null,
        child
    ), debug), child.type);
}

function select(composit, index) {
    var node = findNode(composit);
    var multiple = node.multiple;

    var options = byTags(composit, 'option');
    (0, _expect2.default)(options[index]).toExist(index + ' should exist');
    if (!multiple) {
        options.forEach(function (option, idx) {
            option.selected = idx === index;
        });
    } else {
        options[index].selected = !options[index].selected;
    }

    Simulate.change(node, {
        target: {
            options: options,
            value: multiple ? options.map(function (o) {
                return o.value;
            }) : options[index].value
        }
    });
    return node;
}

var StateWrapper = function (_Component2) {
    _inherits(StateWrapper, _Component2);

    function StateWrapper() {
        _classCallCheck(this, StateWrapper);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(StateWrapper).apply(this, arguments));
    }

    _createClass(StateWrapper, [{
        key: 'render',
        value: function render() {
            return _react2.default.cloneElement(this.props.children, this.state);
        }
    }]);

    return StateWrapper;
}(_react.Component);

function intoWithState(child, state, debug) {
    var s = into(_react2.default.createElement(
        StateWrapper,
        null,
        child
    ), debug);
    if (state != null) s.setState(state);
    var schild = byType(s, child.type);
    return {
        state: s,
        child: schild
    };
}

exports.React = _react2.default;
exports.ReactDOM = _reactDom2.default;
exports.TestUtils = _reactAddonsTestUtils2.default;
exports.Simulate = Simulate;
exports.intoWithState = intoWithState;
exports.into = into;
exports.context = context;
exports.intoWithContext = intoWithContext;
exports.prettyLog = prettyLog;
exports.findNode = findNode;
exports.expect = _expect2.default;
exports.byId = byId;
exports.byName = byName;
exports.byTags = byTags;
exports.byTag = byTag;
exports.byType = byType;
exports.byTypes = byTypes;
exports.notByType = notByType;
exports.filterProp = filterProp;
exports.byClass = byClass;
exports.byComponent = byComponent;
exports.byComponents = byComponents;
exports.
//trigger events
select = select;
exports.click = click;
exports.change = change;
exports.check = check;
exports.blur = blur;
exports.focus = focus;
exports.expected = expected;
//# sourceMappingURL=index.js.map