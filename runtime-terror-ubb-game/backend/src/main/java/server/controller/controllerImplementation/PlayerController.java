package server.controller.controllerImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import server.service.serviceImplementation.PlayerService;

@RestController
public class PlayerController {
    @Autowired
    private PlayerService playerService;


}
