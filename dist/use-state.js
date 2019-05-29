var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { BehaviorSubject } from 'rxjs';
import { isFunction, isObject } from './utils';
import { distinctUntilChanged } from 'rxjs/operators';
export var useState = function (initialState) {
    var store$ = new BehaviorSubject(initialState);
    var state$ = store$.asObservable().pipe(distinctUntilChanged());
    var setState = function (newState) {
        if (isFunction(newState)) {
            store$.next(newState(store$.getValue()));
        }
        else if (isObject(newState)) {
            store$.next(__assign({}, store$.getValue(), newState));
        }
        else {
            store$.next(newState);
        }
    };
    return [state$, setState];
};
//# sourceMappingURL=use-state.js.map