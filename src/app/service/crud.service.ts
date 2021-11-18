import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";

export class Agendamento {
  $key?: string;
  service: string;
  day: string;
  hour: string;
}

@Injectable({
  providedIn: 'root'
})


export class CrudService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  create(param: Agendamento) {
    return this.ngFirestore.collection('agendamento').add(param);
  }

  getAgendamentos() {
    return this.ngFirestore.collection('agendamento').snapshotChanges();
  }

  getAgendamento(id) {
    return this.ngFirestore.collection('agendamento').doc(id).valueChanges();
  }

  update(id, param: Agendamento) {
    this.ngFirestore.collection('agendamento').doc(id).update(param)
      .then(() => {
        this.router.navigate(['/tabs/tab2']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('agendamento/' + id).delete();
  }


}


