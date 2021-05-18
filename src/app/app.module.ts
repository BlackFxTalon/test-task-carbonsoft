import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteAreaviewComponent } from './note-areaview/note-areaview.component';
import { NoteItemComponent } from './note-item/note-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    NoteListComponent,
    NoteAreaviewComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
