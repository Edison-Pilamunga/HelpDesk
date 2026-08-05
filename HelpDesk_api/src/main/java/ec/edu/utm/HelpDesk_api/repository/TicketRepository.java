package ec.edu.utm.HelpDesk_api.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ec.edu.utm.HelpDesk_api.model.Ticket;


@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {


}