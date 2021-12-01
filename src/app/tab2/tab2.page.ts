import { Component } from '@angular/core';
import { Agendamento } from '../service/agendamento-crud.service';
import { AgendamentoCrudService } from '../service/agendamento-crud.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  agendamentos: Agendamento[] = []
  subscription
  constructor(
    private agendamentoCrudService: AgendamentoCrudService
  ) {
    this.agendamentoCrudService.getAgendamentos().subscribe((res) => {
      this.agendamentos = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Agendamento
        };
      })
    });
  }

  agendamento_delete(id){
    console.log('excluir id =>',id);
    if(window.confirm("Tem certeza que deseja excluir?")){
      this.agendamentoCrudService.delete(id);
    }
  }
  

}
