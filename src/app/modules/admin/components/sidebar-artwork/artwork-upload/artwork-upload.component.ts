import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Render} from '../../../../shared/models/render';

@Component({
  selector: 'app-artwork-upload',
  templateUrl: './artwork-upload.component.html',
  styleUrls: ['./artwork-upload.component.scss']
})
export class ArtworkUploadComponent implements OnInit {

  @Input() dialogRef: MatBottomSheetRef;
  @Input() uploadType: string;
  @Output() render = new EventEmitter<Render>();

  uploadRenderForm: FormGroup;
  isUploading: boolean;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.uploadRenderForm = this.formBuilder.group(new Render());
  }

  attachFile(inputElement: HTMLInputElement) {
    inputElement.click();
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }

  prepareFile(fileInput: HTMLInputElement) {
    this.isUploading = true;
    this.uploadRenderForm.patchValue({renderName: fileInput.files[0].name});
    console.log(this.uploadRenderForm.value);
    this.isUploading = false;
  }

  uploadRender(render: Render) {
    this.render.emit(render);
  }
}
