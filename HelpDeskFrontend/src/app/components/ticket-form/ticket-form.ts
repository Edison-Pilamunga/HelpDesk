import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';


@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css'
})
export class TicketForm {


  ticket: Ticket = {

    titulo: '',
    descripcion: '',
    categoria: '',
    prioridad: '',
    estado: 'Abierto'

  };



  constructor(
    private ticketService: TicketService
  ) {}



  guardarTicket(): void {


  console.log("BOTÓN GUARDAR PRESIONADO");


  this.ticketService.crearTicket(this.ticket)
  .subscribe({


    next: (respuesta) => {


      console.log(
        "Ticket guardado:",
        respuesta
      );


      this.ticketService.notificarCambio();
      // Limpia formulario

        this.ticket = {

          titulo: '',
          descripcion: '',
          categoria: '',
          prioridad: '',
          estado: 'Abierto'
        };

    },


    error: (error:any) => {


      console.error(
        "Error guardando ticket:",
        error
      );


    }


  });


  }


}