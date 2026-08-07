import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { TicketList } from './components/ticket-list/ticket-list';
import { TicketForm } from './components/ticket-form/ticket-form';


export const routes: Routes = [

  {
    path: '',
    component: Dashboard
  },

  {
    path: 'tickets',
    component: TicketList
  },

  {
    path: 'registrar',
    component: TicketForm
  }

];
