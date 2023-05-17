import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import content from 'src/interfaces/content.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private firestore:Firestore ) { }

  addContent(content : content){
    const contentRef = collection(this.firestore, 'content');
    return addDoc(contentRef, content);
  }

  getContent(): Observable<content[]>{
    const contentRef = collection(this.firestore, 'content');
    return collectionData(contentRef, {idField:'id'}) as Observable<content[]>;
  }

  deleteContent(content : content){
    const contentDocRef = doc(this.firestore,`content/${content.id}`);
    return deleteDoc(contentDocRef);
  }


}
