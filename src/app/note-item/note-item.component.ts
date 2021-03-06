import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note!: Note;

  constructor() { }

  ngOnInit(): void {
  }
  setClasses() {
    let classes = {
    note: true,
    'is-visible': this.note.isVisible,
    }
    return classes;
  }
}
