import { ModalContent } from './../../models/modal-content';
import { ModalHostDirective } from './../../directives/modal-host.directive';
import { Component, OnInit, Inject, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild(ModalHostDirective) host: ModalHostDirective;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    let component = this.host.viewContainerRef.createComponent(componentFactory);
    (<ModalContent>component.instance).data = this.data.payload;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
