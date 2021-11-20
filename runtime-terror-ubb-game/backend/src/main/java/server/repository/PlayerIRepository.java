package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.entities.Player;

@Repository
public interface PlayerIRepository extends JpaRepository<Player, String> {

}
