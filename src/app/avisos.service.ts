import { Injectable } from '@angular/core';
//SERVICIO QUE CONTIENE LA LOGICA PARA MOSTRAR AVISOS
@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  mensaje: string;
  visible: boolean;

  constructor() {
    this.mensaje = '';
    this.visible = false;
  }
//METODO QUE MUESTRA UN MENSAJE Y LLAMA AL METODO WAIT_TO_HIDE
  showMenssage(mensaje: string){
    this.mensaje = mensaje;
    this.visible = true;
    this.waitToHide();
  }
//METODO QUE INVISIBILIZA EL MENSAJE
  hideMenssage(){
    this.visible = false;
    this.mensaje = '';
  }

  //FUNCION QUE, TRAS 2 SEGUNDOS, LLAMA A HIDE MESSAGE
  waitToHide(){
    setTimeout(() => {
      this.hideMenssage();
    }, 2000);
  }
}
