package server.service.serviceImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.entities.Player;
import server.repository.PlayerIRepository;

import javax.persistence.EntityNotFoundException;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class PlayerService {
    @Autowired
    private PlayerIRepository playerRepository;

    public Player findPlayerByUsername(String username) {
        try {
            Player player = playerRepository.getOne(username);
            return player;
        } catch (EntityNotFoundException exception) {
            return null;
        }
    }

    public List<Player> findAllPlayersByScore(){
        try{
            List<Player> players = playerRepository.findAll();
            players.sort(Comparator.comparing(Player::getScore));
            return players;
        } catch (EntityNotFoundException exception) {
            return null;
        }
    }

    public Player updatePlayerScore(String username, Long score) {
        try {
            Player p = playerRepository.getOne(username);
            p.setScore(score);
            return playerRepository.save(p);
        } catch (EntityNotFoundException exception) {
            return null;
        }
    }
}
