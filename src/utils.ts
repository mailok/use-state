import { Observable } from 'rxjs';

export type updateState<S> = (state: Readonly<S>) => Partial<S> | Partial<S>;

export const isFunction = (value: any): value is () => void => {
  return typeof value === 'function';
};

export const isObject = (value: any): value is () => void => {
  return typeof value === 'object';
};

export const fromState = (obs$: Observable<any>) => (target: any, propName: string): any => {
  const newDescriptor: PropertyDescriptor = {
    value: obs$
  };
  return newDescriptor;
};
