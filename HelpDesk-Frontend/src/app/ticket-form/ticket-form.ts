import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css'
})
export class TicketForm {
@Output() ticketCreado = new EventEmitter<void>();

  ticket: Ticket = {
    titulo: '',
    descripcion: '',
    categoria: '',
    prioridad: '',
    estado: 'Abierto'
  };

  constructor(private ticketService: TicketService) {}

  guardarTicket(): void {

    this.ticketService.crearTicket(this.ticket).subscribe({

      next: () => {

        alert('Ticket registrado correctamente.');

        this.ticket = {
          titulo: '',
          descripcion: '',
          categoria: '',
          prioridad: '',
          estado: 'Abierto'
        };

      },

      error: (error) => {

        console.error(error);
        alert('Error al registrar el ticket.');

      }

    });

  }

}