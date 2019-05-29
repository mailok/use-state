import { Observable } from 'rxjs';
export declare type updateState<S> = (state: Readonly<S>) => Partial<S> | Partial<S>;
export declare const isFunction: (value: any) => value is () => void;
export declare const isObject: (value: any) => value is () => void;
export declare const fromState: (obs$: Observable<any>) => (target: any, propName: string) => any;
