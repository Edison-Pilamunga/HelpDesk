package ec.edu.utm.HelpDesk_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ec.edu.utm.HelpDesk_api.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

}