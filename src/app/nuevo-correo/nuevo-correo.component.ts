import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisosService } from 'src/app/avisos.service';

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.scss']
})
export class NuevoCorreoComponent implements OnInit {

  nuevoCorreo: any;
  submitted = false;
  //la variable correo proviene de fuera de esta clase, de ahi el @input
  @Input() correo: any;
  //se declara el evento accionRealizada
  @Output() accionRealizada: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private servicioAvisos: AvisosService) { }

  //metodo que contiene los requisitos de  validacion del formulario
  ngOnInit() {
    this.nuevoCorreo = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
      destinatario: ['', [Validators.required, Validators.email]],
    });
    
    if(this.correo != undefined){
      console.log("A",this.correo);
      this.nuevoCorreo.patchValue({
        titulo: 'Re: '+ this.correo.titulo, 
        destinatario: this.correo.emisor
      });
    }
  }

  get formulario() { return this.nuevoCorreo.controls; }
//metodo al que se accede cuando se da al boton de submit
  onSubmit() {
    this.submitted = true;

    if (this.nuevoCorreo.invalid) {
      return;
    }

    let correo = this.nuevoCorreo.value;
    correo.leido = false;
    correo.emisor = 'correoEmisor1@openWebinar.inv';

    this.onReset();//metodo para borrar los campos
    this.servicioAvisos.showMenssage(`Correo enviado a ${correo.emisor}`);
  }

  onReset() {
    this.submitted = false;
    this.nuevoCorreo.reset();
    this.accionRealizada.emit();//el evento se produce cuando se llama a onReset
  }
  //metodo al que se accede cuando se presiona el boton cancelar
  cancel(){
    this.onReset();
    //se llama al servicioAvisos para mostrar un mensaje
    this.servicioAvisos.showMenssage("Envio Cancelado");
  }

}