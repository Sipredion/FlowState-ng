import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {ArtworkUploadComponent} from './artwork-upload/artwork-upload.component';
import {ArtworkService} from '../../services/artwork.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidebar-artwork',
  templateUrl: './sidebar-artwork.component.html',
  styleUrls: ['./sidebar-artwork.component.scss']
})
export class SidebarArtworkComponent implements OnInit {

  @ViewChild('upload', {static: true}) upload: TemplateRef<ArtworkUploadComponent>;
  @ViewChild('render', {static: true}) render: ElementRef;

  dialogRef: MatBottomSheetRef;

  renderSubscription: Subscription;

  // render: HttpEvent<Blob>;

  constructor(private bottomSheet: MatBottomSheet,
              private artService: ArtworkService) {
  }

  ngOnInit() {
    this.renderSubscription = this.artService.getRenderImageByFileName('3c8d9595c8537c55d2415eda2d82e125').subscribe(render => {
      this.render.nativeElement.src = window.URL.createObjectURL(render);
    });
    // this.renderSubscription = this.artService.getAllRenders().subscribe(renders => {
    //   console.log(renders);
    // })
  }

  openBottomSheet() {
    this.dialogRef = this.bottomSheet.open<ArtworkUploadComponent>(this.upload);
  }

}
