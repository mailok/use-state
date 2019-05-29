export var isFunction = function (value) {
    return typeof value === 'function';
};
export var isObject = function (value) {
    return typeof value === 'object';
};
export var fromState = function (obs$) { return function (target, propName) {
    var newDescriptor = {
        value: obs$
    };
    return newDescriptor;
}; };
//# sourceMappingURL=utils.js.map