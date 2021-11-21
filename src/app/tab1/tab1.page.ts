import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateCallback } from '@firebase/util';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  agendamentoForm: FormGroup;
  horariosDisponiveis = [];
  dict = {
    20 : "Corte - 20 min",
    30 : "Corte Navalhado - 30 min", 
    50 : "Corte Pigmentado - 50 min",
    60 : "Corte + Alisamento - 1 hora ",
    61 : "Corte + Luzes - 1,01 hora",
    31 : "Corte + Barba - 31 min",
    62 : "Alisamento - 1,02 hora",
    63 : "Luzes - 1,03 hora",
    21 : "Desenho - 21 min",
    11 : "Barba -11 min",
    64 : "Barba Pigmentada - 1,04 hora",
    7 : "Sombrancelhas - 7 min",
    12 : "Barba - 12 min"
  }

  constructor(
    private afa: AngularFireAuth,
    public formbilder: FormBuilder,
    private router: Router,
    private crudService: CrudService
  ) {
    this.agendamentoForm = this.formbilder.group(
      {
        service: [null, [Validators.required]],
        day: [new Date(), [Validators.required]],
        hour: [null]
      }
    );
    this.changeDate();
  
    


  }

  serieList(data, minutos) {
    const dataatual = new Date(data);
    const hour = [];
    const dia = dataatual.getDate();
    while (dataatual.getDate() === dia) {
      hour.push(dataatual.toLocaleString('pt-BR'));
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
      this.crudService.create(this.agendamentoForm.value)
        .then(() => {
          this.agendamentoForm.reset();
          this.router.navigate(['/tabs/tab2']);
        }).catch((err) => {
          console.log(err)
        });
    }
  }

}
