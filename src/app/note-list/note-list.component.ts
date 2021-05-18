import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Note } from '../models/Note';


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input()note!: Note;

  notes!:Note[];
  clicked: any;
  isVisible: any;
  
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }
  isActive(note: any) {
    return this.clicked === note; 
  }

  toggle(note: any) {
    this.clicked = note; 
  }
}
