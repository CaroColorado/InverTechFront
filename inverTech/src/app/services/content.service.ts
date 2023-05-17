import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
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


}
