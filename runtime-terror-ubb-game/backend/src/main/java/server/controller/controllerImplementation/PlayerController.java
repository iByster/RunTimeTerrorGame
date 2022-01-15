package server.controller.controllerImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.entities.Player;
import server.service.serviceImplementation.PlayerService;

import java.util.List;
@CrossOrigin
@RestController
public class PlayerController {
    @Autowired
    private PlayerService playerService;

    @PutMapping("/updateScore")
    public Player updatePlayerScore(@RequestBody String username, Long score) {
        return playerService.updatePlayerScore(username, score);
    }

    @GetMapping("/playerScores")
    public List<Player> getPlayersScore() {
        return playerService.findAllPlayersByScore();
    }
}
