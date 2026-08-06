import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url='http://localhost:8080/tickets';

  constructor(private http:HttpClient){}

  obtenerTickets():Observable<Ticket[]>{

      return this.http.get<Ticket[]>(this.url);

  }

  crearTicket(ticket:Ticket){

      return this.http.post(this.url,ticket);

  }

  actualizarTicket(id:number,ticket:Ticket){

      return this.http.put(this.url+'/'+id,ticket);

  }

  eliminarTicket(id:number){

      return this.http.delete(this.url+'/'+id);

  }

}