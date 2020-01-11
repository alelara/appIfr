import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';
import { OficinaRegistral } from 'src/app/model/Oficina.model';
import { Respuesta } from 'src/app/model/Respuesta.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-desbloqueararea',
  templateUrl: './desbloqueararea.page.html',
  styleUrls: ['./desbloqueararea.page.scss'],
})
export class DesbloquearareaPage implements OnInit {

  oficinas: OficinaRegistral;
  respuesta: Respuesta;

  constructor(public consultaService: ConsultaService,  public alertController: AlertController) { 
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
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Cuentas Desbloquedas Correctamente!',
      message: 'cuentas-->',
      buttons: ['OK']
    });

    await alert.present();
  }

  desbloquarArea(oficina: OficinaRegistral) {
    console.log(oficina);
  }
}
