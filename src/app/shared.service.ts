import { Injectable } from '@angular/core';
import {Firestore, collection , collectionData,addDoc,doc,deleteDoc}  from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }
  getContents(){
    let contentsCollection = collection (this.fs,'contents');
    return collectionData(contentsCollection,{idField:'id'});
  }

  addContents(desc:string){
    let data = {name:desc};
    let contentsCollection = collection (this.fs,'contents');
    return addDoc(contentsCollection,data);

  }
  deleteContents(id:string){
    let docRef=doc(this.fs,'contents/'+id)
    return deleteDoc(docRef);
  }

}