import {Component, Input, OnInit} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import {ArtworkService} from '../../../services/artwork.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RenderModel} from '../../../../shared/models/render.model';

@Component({
  selector: 'app-artwork-upload',
  templateUrl: './artwork-upload.component.html',
  styleUrls: ['./artwork-upload.component.scss']
})
export class ArtworkUploadComponent implements OnInit {

  @Input() dialogRef: MatBottomSheetRef;

  uploadRenderForm: FormGroup;

  constructor(private artService: ArtworkService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.uploadRenderForm = this.formBuilder.group(new RenderModel());
  }

  closeContainer() {
    this.dialogRef.dismiss();
  }

  uploadArtwork(render: File) {
    console.log(render);
    this.artService.uploadRender(render).subscribe(uploaded => {
      console.log(uploaded);
    });
  }

}
