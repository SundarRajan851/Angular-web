import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }

  getNotes(){
    let notescollection = collection(this.fs, 'notes');
    return collectionData(notescollection, {idField:'id'});
  }

  addNote(desc:string){
    let data = {description:desc};
    let notescollection = collection(this.fs, 'notes');
    return addDoc(notescollection, data);
  }

  deleteNote(id:string){
    let docRef = doc(this.fs, 'notes/'+id);
    return deleteDoc(docRef);
  }
}
