package server.controller.controllerImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import server.entities.Player;
import server.service.serviceImplementation.PlayerService;
import server.entities.Token;

import java.util.List;
@CrossOrigin
@RestController
public class PlayerController {
    @Autowired
    private PlayerService playerService;

    @PostMapping("/createPlayer")
    public ResponseEntity<?> createPlayer(@RequestBody Player player) {
        Player fromRepository = playerService.add(player);
        if (fromRepository == null)
            return new ResponseEntity<String>("User not found", HttpStatus.BAD_REQUEST);
        else
            return new ResponseEntity<String>("Nicee", HttpStatus.OK);

    }

    @PutMapping("/updateScore")
    public Player updatePlayerScore(@RequestParam String username, @RequestParam Long score) {
        return playerService.updatePlayerScore(username, score);
    }

    @GetMapping("/playerScores")
    public List<Player> getPlayersScore() {
        return playerService.findAllPlayersByScore();
    }
}
