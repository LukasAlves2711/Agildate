import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";

export class Usuario {
  $key?: string;
  userId: string;
  name: string;
  tel: string;
}

@Injectable({
  providedIn: 'root'
})


export class UserCrudService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  create(param: Usuario) {
    return this.ngFirestore.collection('dados').add(param);
  }

  getAgendamentos() {
    return this.ngFirestore.collection('dados').snapshotChanges();
  }

  getAgendamento(id) {
    return this.ngFirestore.collection('dados').doc(id).valueChanges();
  }

  update(id, param: Usuario) {
    this.ngFirestore.collection('dados').doc(id).update(param)
      .then(() => {
        this.router.navigate(['/tabs/tab2']);
      }).catch(error => console.log(error));;
  }

  delete(id: string) {
    this.ngFirestore.doc('dados/' + id).delete();
  }


}


