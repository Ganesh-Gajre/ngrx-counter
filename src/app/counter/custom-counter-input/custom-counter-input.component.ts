import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { changeName, customIncrement } from '../state/counter.action';
import { getName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  name$!: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.name$ = this.store.select(getName);
  }

  onAdd(): void {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

  onChange(): void {
    this.store.dispatch(changeName());
  }

}
