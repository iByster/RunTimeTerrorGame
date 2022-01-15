package server.controller.controllerImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import server.entities.Player;
import server.service.serviceImplementation.PlayerService;

@RestController
public class PlayerController {
    @Autowired
    private PlayerService playerService;

    @PostMapping("/updateScore")
    public Player updatePlayerScore(@RequestBody String username, Long score) {
        return playerService.updatePlayerScore(username, score);
    }

    @PostMapping("/playerScores")
    public Player getPlayersScore() {
        return playerService.findAllPlayersByScore();
    }
}
