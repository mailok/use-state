useState
=======

Minimalist store Rxjs to represent the state of a component with a reactive approach.


```
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { fromState, useState } from '@mailok/use-state';
import { Observable } from 'rxjs';

const [count$, updateCount] = useState<number>(0);
const [loading$, setLoading] = useState<boolean>(false);
const [error$, setError] = useState<any>(null);

@Component({
  selector: 'lite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @fromState(count$) count$: Observable<number>;
  @fromState(loading$) loading$: Observable<boolean>;
  @fromState(error$) error$: Observable<any>;

  constructor() {}

  increment(): void {
    updateCount(state => state + 1);
  }

  decrement(): void {
    updateCount(state => state - 1);
  }

  toggleLoading() {
    setLoading(state => !state);
  }

  toggleError() {
    setError(state => (!state ? { code: '503', message: 'Service Unavailable' } : null));
  }
}

```


```
<mat-card>

  <mat-card-header>
    <mat-card-subtitle>Counter: {{count$ | async}}</mat-card-subtitle>
  </mat-card-header>

  <mat-card-content>
    <pre>{{error$ | async | json}}</pre>
  </mat-card-content>

  <mat-card-actions>
    <button mat-raised-button (click)="increment()">
      <mat-icon>plus_one</mat-icon>
    </button>
    <button mat-raised-button color="warn" (click)="decrement()">
      <mat-icon>exposure_neg_1</mat-icon>
    </button>
    <button mat-stroked-button color="primary" (click)="toggleLoading()">
      <mat-icon *ngIf="!(loading$ | async)">refresh</mat-icon>
      <mat-spinner *ngIf="(loading$ | async)" color="primary" [diameter]="35"></mat-spinner>
    </button>
    <button mat-stroked-button color="warn" (click)="toggleError()">
      <mat-icon>bug_report</mat-icon>
    </button>
  </mat-card-actions>
</mat-card>
```
