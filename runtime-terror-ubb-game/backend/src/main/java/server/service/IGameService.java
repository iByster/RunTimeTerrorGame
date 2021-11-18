package server.service;

import org.springframework.stereotype.Service;
import server.entities.Player;
import java.util.List;

@Service
public interface IGameService {
    List<Player> findAllPlayers();
    void savePlayerState(Player player);
    void update(Player player);
    void delete(Player player);
}
