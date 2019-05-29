import { BehaviorSubject, Observable } from 'rxjs';
import { isFunction, isObject, updateState } from './utils';
import { distinctUntilChanged } from 'rxjs/operators';

export const useState = <S>(initialState: S): [Observable<S>, (fn: updateState<S> | S) => void] => {
  const store$: BehaviorSubject<S> = new BehaviorSubject(initialState);
  const state$: Observable<S> = store$.asObservable().pipe(distinctUntilChanged<S>());
  const setState = (newState: updateState<S> | S) => {
    if (isFunction(newState)) {
      store$.next(newState(store$.getValue()) as S);
    } else if (isObject(newState)) {
      store$.next({ ...store$.getValue(), ...newState });
    } else {
      store$.next(newState as S);
    }
  };

  return [state$, setState];
};
