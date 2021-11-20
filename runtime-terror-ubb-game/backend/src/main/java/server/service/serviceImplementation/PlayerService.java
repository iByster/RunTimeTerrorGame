package server.service.serviceImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.entities.Player;
import server.repository.PlayerIRepository;

import javax.persistence.EntityNotFoundException;

@Service
public class PlayerService {
    @Autowired
    private PlayerIRepository playerRepository;

    public Player find(String username) {
        try {
            Player player = playerRepository.getOne(username);
            return player;
        } catch (EntityNotFoundException exception) {
            return null;
        }
    }
}
