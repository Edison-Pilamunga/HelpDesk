import { Component, signal } from '@angular/core';

import { Navbar } from './navbar/navbar';
import { Dashboard } from './dashboard/dashboard';
import { TicketForm } from './ticket-form/ticket-form';
import { TicketList } from './ticket-list/ticket-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Dashboard,
    TicketForm,
    TicketList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('HelpDesk-Frontend');

}