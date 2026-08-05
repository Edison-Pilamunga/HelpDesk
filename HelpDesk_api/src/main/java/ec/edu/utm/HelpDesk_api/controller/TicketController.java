package ec.edu.utm.HelpDesk_api.controller;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import ec.edu.utm.HelpDesk_api.model.Ticket;
import ec.edu.utm.HelpDesk_api.repository.TicketRepository;



@RestController
@RequestMapping("/tickets")
@CrossOrigin(origins = "http://localhost:4200")
public class TicketController {



    @Autowired
    private TicketRepository repository;



    // Obtener todos los tickets

    @GetMapping
    public List<Ticket> listarTickets(){

        return repository.findAll();

    }



    // Obtener ticket por ID

    @GetMapping("/{id}")
    public Optional<Ticket> buscarTicket(@PathVariable Long id){

        return repository.findById(id);

    }



    // Crear ticket

    @PostMapping
    public Ticket crearTicket(@RequestBody Ticket ticket){

        return repository.save(ticket);

    }



    // Actualizar ticket

    @PutMapping("/{id}")
    public Ticket actualizarTicket(
            @PathVariable Long id,
            @RequestBody Ticket ticket){


        ticket.setId(id);

        return repository.save(ticket);

    }



    // Eliminar ticket

    @DeleteMapping("/{id}")
    public void eliminarTicket(@PathVariable Long id){

        repository.deleteById(id);

    }

}