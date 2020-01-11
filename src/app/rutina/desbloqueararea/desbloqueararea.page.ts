import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { OficinaRegistral } from 'src/app/model/Oficina.model';
import { Respuesta } from 'src/app/model/Respuesta.model';

@Component({
  selector: 'app-desbloqueararea',
  templateUrl: './desbloqueararea.page.html',
  styleUrls: ['./desbloqueararea.page.scss'],
})
export class DesbloquearareaPage implements OnInit {

  oficinas: OficinaRegistral;
  respuesta: Respuesta;

  constructor(public consultaService: ConsultaService) { 
    this.oficinas = null;
    this.respuesta = null;
  }


  ngOnInit(): void {
    console.log('AQUI');
    this.consultaService.getOficinas().subscribe((res) => {
      console.log(res);
      this.oficinas = res;
    });
    console.log('oficinas: ', this.oficinas);
  }

  bloquarArea(oficina: OficinaRegistral) {
    console.log(oficina);
    this.consultaService.desbloqueaArea(oficina.id).subscribe((res) => {
      console.log(res);
      this.respuesta = res;
    });
    console.log('respuesta: ', this.respuesta);
  }

  desbloquarArea(oficina: OficinaRegistral) {
    console.log(oficina);
  }
}
