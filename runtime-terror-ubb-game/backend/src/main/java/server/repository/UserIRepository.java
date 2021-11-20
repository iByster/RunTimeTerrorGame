package server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.entities.User;

@Repository
public interface UserIRepository extends JpaRepository<User, String> {

}
