import { Component } from '@angular/core';
import { Agendamento, CrudService } from '../service/crud.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  agendamentos: Agendamento[] = []
  subscription
  constructor(
    private crudService: CrudService
  ) {
    this.crudService.getAgendamentos().subscribe((res) => {
      this.agendamentos = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Agendamento
        };
      })
    });
  }

  /*agendamento_delete(id){
    this.crudService.delete(this.agendamento_delete(id)).then(() =>{
      console.log()
    })
  }*/
  

}
