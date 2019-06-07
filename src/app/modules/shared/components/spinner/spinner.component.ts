import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() loading: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
  }

}
