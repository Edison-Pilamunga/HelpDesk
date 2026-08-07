import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {


  tickets: Ticket[] = [];


  totalTickets = 0;
  abiertos = 0;
  enProceso = 0;
  cerrados = 0;



  constructor(
    private ticketService: TicketService
  ) {}



  ngOnInit(): void {


    // Carga inicial
    this.cargarDashboard();



    // Escuchar cuando se cree, modifique o elimine un ticket
    this.ticketService.cambiosTickets
    .subscribe(()=>{


      console.log(
        "Actualizando Dashboard..."
      );


      this.cargarDashboard();


    });


  }




  cargarDashboard(): void {



    this.ticketService.getTickets()
    .subscribe({



      next: (data: Ticket[]) => {



        console.log(
          "Tickets Dashboard:",
          data
        );



        this.tickets = data;



        this.totalTickets = data.length;
        console.log("TOTAL CALCULADO:", this.totalTickets);


        this.abiertos = data.filter(
          ticket => ticket.estado === 'Abierto'
        ).length;



        this.enProceso = data.filter(
          ticket => ticket.estado === 'En Proceso'
        ).length;



        this.cerrados = data.filter(
          ticket => ticket.estado === 'Cerrado'
        ).length;



      },



      error: (error: any) => {



        console.error(
          "Error cargando dashboard:",
          error
        );



      }



    });



  }


}