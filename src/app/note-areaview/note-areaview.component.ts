import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-note-areaview',
  templateUrl: './note-areaview.component.html',
  styleUrls: ['./note-areaview.component.css']
})
export class NoteAreaviewComponent implements OnInit {

  notes!:Note[];
  isVisible!: boolean;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }
}
