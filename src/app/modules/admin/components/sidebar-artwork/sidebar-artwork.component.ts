import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {ArtworkUploadComponent} from './artwork-upload/artwork-upload.component';
import {ArtworkService} from '../../services/artwork.service';
import {Subscription} from 'rxjs';
import {Render} from '../../../shared/models/render';

@Component({
  selector: 'app-sidebar-artwork',
  templateUrl: './sidebar-artwork.component.html',
  styleUrls: ['./sidebar-artwork.component.scss']
})
export class SidebarArtworkComponent implements OnInit {

  @ViewChild('upload', {static: true}) upload: TemplateRef<ArtworkUploadComponent>;

  dialogRef: MatBottomSheetRef;

  constructor(private bottomSheet: MatBottomSheet,
              private artService: ArtworkService) {
  }

  ngOnInit() {
  }

  openBottomSheet() {
    this.dialogRef = this.bottomSheet.open<ArtworkUploadComponent>(this.upload);
  }

  uploadRender(render: Render) {
    this.artService.uploadRender(render).subscribe(res => {
      console.log(res);
    })
  }

}
