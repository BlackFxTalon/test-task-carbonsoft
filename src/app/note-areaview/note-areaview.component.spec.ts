import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAreaviewComponent } from './note-areaview.component';

describe('NoteAreaviewComponent', () => {
  let component: NoteAreaviewComponent;
  let fixture: ComponentFixture<NoteAreaviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteAreaviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteAreaviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
