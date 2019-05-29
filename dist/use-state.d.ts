import { Observable } from 'rxjs';
import { updateState } from './utils';
export declare const useState: <S>(initialState: S) => [Observable<S>, (fn: S | updateState<S>) => void];
