import { Skill } from './../models/Skill.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database'; 


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  skills: Skill[] = [];
  skillsSubject = new Subject<Skill[]>();
  constructor() { }

  emitSkills() {
    this.skillsSubject.next(this.skills);
  }
  saveSkills() {
    firebase.database().ref('/home').set(this.skills);
  }
  getSkills() {
    firebase.database().ref('/home')
      .on('value', (data)=> {
        this.skills = data.val() ? data.val() : [] ;
        this.emitSkills();
      });
  }

  getSingleSkills(id:number) {
    return new Promise(
      (resolve,reject) => {
        firebase.database().ref('/home/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );

  }
  
}
