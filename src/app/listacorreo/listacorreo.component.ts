import { Component, OnInit } from '@angular/core';
import { GmailService } from 'src/app/gmail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listacorreo',
  templateUrl: './listacorreo.component.html',
  styleUrls: ['./listacorreo.component.scss']
})
export class ListacorreoComponent implements OnInit {

  correos: any[];

  constructor(private gmail: GmailService, private router: Router) {
    this.correos = [];
    }
  


  ngOnInit() {
    this.getRecibidos();
  }  

  //este metodo cambia el valor de responder de true a false y de false a true
  //de esta variable depende que se muestre el componente nuevocorreo
  clickResponder(correo: any) {
    console.log(correo);
    correo.responder = !correo.responder;
  }

//metodo que se ejecuta cuando se produce el evneto AccionRealizada 
  accionRespuestaRapida(correo: any) {
    correo.responder = false;
    //pone responder a false para que se oculte
  }
  
  getRecibidos() {
    this.gmail.getRecibidos().subscribe(
      (response :any) => {
        const mensajes = response.messages;
        
        mensajes.forEach((element: { id: string; }) => {
          this.getMensaje(element.id);
        });
      },
      (error: any) => this.error(error)
    );
  }
  getMensaje(id: string){
    this.gmail.getMessage(id).subscribe(
      (response : any) => {
        const emisor = response.payload.headers.find((e: { name: string; }) => e.name === "From");
        const subject = response.payload.headers.find((e: { name: string; }) => e.name === "Subject");

        const mensage = {
          id: response.id,
          cuerpo: response.snippet,
          emisor: emisor? emisor.value : undefined,
          titulo: subject? subject.value : undefined,
        };
        this.correos.push(mensage);
      },
      (error : any) => this.error(error)
    );
  }

  error(error: any){
    console.warn("ERROR");
  }

  verDetalle(correo: any){
    this.router.navigate(['/mail', {correo: JSON.stringify(correo)}]);
  }

}