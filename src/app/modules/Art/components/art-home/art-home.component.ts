import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-art-home',
  templateUrl: './art-home.component.html',
  styleUrls: ['./art-home.component.scss']
})
export class ArtHomeComponent implements OnInit {

  currentType: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentType = this.route.snapshot.params['type'];
  }

}
