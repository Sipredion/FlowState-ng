import {OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export abstract class BaseComponent implements OnInit {

  isLoadingSrc = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSrc.asObservable();

  protected constructor() {
  }

  ngOnInit() {
  }

  isLoading() {
    this.isLoadingSrc.next(true);
  }

  isLoaded() {
    this.isLoadingSrc.next(false);
  }

}
