import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AgendamentoCrudService } from '../service/agendamento-crud.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  agendamentoForm: FormGroup;
  horariosDisponiveis = [];


  constructor(
    private afa: AngularFireAuth,
    public formbilder: FormBuilder,
    private router: Router,
    private agendamentoCrudService: AgendamentoCrudService
  ) {
    this.agendamentoForm = this.formbilder.group(
      {
        service: [null, [Validators.required]],
        day: [new Date(), [Validators.required]],
        hour: [null, [Validators.required]]
      }
    );
    this.changeDate();




  }

  serieList(data, minutos) {
    const dataatual = new Date(data);
    const hour = [];
    const dia = dataatual.getDate();

    while (dataatual.getDate() === dia) {
      hour.push(dataatual.toLocaleTimeString('pt-BR'));

      dataatual.setMinutes(dataatual.getMinutes() + minutos);
    }
    return hour;
  }


  changeDate() {
    const servico = parseInt(this.agendamentoForm.get('service').value);
    const data = this.agendamentoForm.get('day').value;

    this.horariosDisponiveis = this.serieList(data, servico);
  }

  Agendamento() {
    console.log(this.agendamentoForm.value);
    if (!this.agendamentoForm.valid) {
      return false;
    } else {
      this.agendamentoCrudService.create(this.agendamentoForm.value)
        .then(() => {
          this.agendamentoForm.reset();
          this.router.navigate(['/tabs/tab2']);
        }).catch((err) => {
          console.log(err)
        });
    }
  }

}
