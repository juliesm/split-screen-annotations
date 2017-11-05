import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnnotationBoxComponent } from './components/annotation-box/annotation-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnotationBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
