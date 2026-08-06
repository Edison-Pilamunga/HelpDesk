import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})
export class TicketList implements OnInit {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
  console.log('***** TicketList cargado *****');
  this.cargarTickets();
}

  cargarTickets(): void {
  console.log('Entró a cargarTickets');
  this.ticketService.obtenerTickets().subscribe({
    next: (data: Ticket[]) => {
      console.log('Datos recibidos:', data);
      this.tickets = data;
    },

    error: (error: any) => {
      console.error('Error HTTP:', error);

    }

  });

}

}