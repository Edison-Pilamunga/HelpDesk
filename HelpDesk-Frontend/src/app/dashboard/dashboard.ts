import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  totalTickets = 0;
  abiertos = 0;
  enProceso = 0;
  cerrados = 0;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.cargarDashboard();
  }

  cargarDashboard(): void {

    this.ticketService.obtenerTickets().subscribe({

      next: (tickets: Ticket[]) => {

        this.totalTickets = tickets.length;

        this.abiertos = tickets.filter(
          t => t.estado === 'Abierto'
        ).length;

        this.enProceso = tickets.filter(
          t => t.estado === 'En Progreso'
        ).length;

        this.cerrados = tickets.filter(
          t => t.estado === 'Cerrado'
        ).length;

      },

      error: (error) => {

        console.error('Error al cargar dashboard', error);

      }

    });

  }

}