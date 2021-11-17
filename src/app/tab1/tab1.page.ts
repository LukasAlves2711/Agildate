import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCallback } from '@firebase/util';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  agendamentoForm : FormGroup;
  horariosDisponiveis = [];

  constructor(
    private afa: AngularFireAuth,
    public formbilder: FormBuilder
  ) {
    this.agendamentoForm = this.formbilder.group(
      {
        services:[null, [Validators.required]],
        days: [null, [Validators.required]],
        hours: [null, [Validators.required]]
      }
    );
    this.changeDate();
  }
  
  serieList(data,minutos)
  {
    const dataatual = new Date(data);
    const hour=[];
    const dia = dataatual.getDate();
    while (dataatual.getDate() === dia )
    {
      hour.push(dataatual.toLocaleString('pt-BR'));
      dataatual.setMinutes(dataatual.getMinutes() + minutos);
    }
    return hour;
  }

  changeDate()
  {
    const servico = parseInt(this.agendamentoForm.get('services').value); 
    const data = this.agendamentoForm.get('days').value;
    this.horariosDisponiveis = this.serieList(data,servico);
  }

  Agendamento(){
    console.log(this.agendamentoForm.value);
  }


  logout(){
    this.afa.signOut();
  }
}
