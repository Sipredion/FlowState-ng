import {Component, OnInit} from '@angular/core';
import {mockArtModels} from '../../../shared/mock/mock-featured.model';

@Component({
  selector: 'app-art-renders',
  templateUrl: './art-renders.component.html',
  styleUrls: ['./art-renders.component.scss']
})
export class ArtRendersComponent implements OnInit {

  mockRenders = mockArtModels;

  constructor() {
  }

  ngOnInit() {
  }

}
