import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AnnotationBoxComponent } from './components/annotation-box/annotation-box.component';


@NgModule({
  declarations: [
    AppComponent,
    AnnotationBoxComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    NoopAnimationsModule
  ],
  providers: [],
  entryComponents: [ AnnotationBoxComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
