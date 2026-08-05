package ec.edu.utm.HelpDesk_api.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tickets")
@CrossOrigin(origins = "http://localhost:4200")
public class TicketController {


    @GetMapping
    public String listarTickets(){
        return "API Help Desk funcionando";
    }

}