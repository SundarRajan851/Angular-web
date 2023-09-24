import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit{
  notes:any=[];
  
  constructor(private service:SharedService){}
  
  ngOnInit(): void {
    this.refreshNotes();
  }

  refreshNotes(){
    this.service.getNotes().subscribe((res) =>{
      this.notes = res;
      console.log();
    })
  }

  addNotes(newNotes:string){
    this.service.addNote(newNotes).then((res) =>{
      console.log(res);
      this.refreshNotes();
    })
  }

  deleteNotes(id:string){
    this.service.deleteNote(id).then((res) =>{
      console.log(res);
      this.refreshNotes();
    })
  }
}
