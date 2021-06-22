import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";

import { SharedModule } from 'src/common/shared/shared.module';
import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule,
  ]
})
export class GalleryModule { }
