import { ParagraphService } from './paragraph.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HotkeyModule} from 'angular2-hotkeys';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ParagraphListComponent } from './paragraph-list/paragraph-list.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatStepperModule } from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ParagraphListComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule,
    BrowserAnimationsModule,
    HotkeyModule.forRoot()
  ],
  providers: [ParagraphService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent],
  entryComponents: [ParagraphComponent]
})
export class AppModule { }
