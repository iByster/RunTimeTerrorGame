package server.service.serviceImplementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.entities.User;
import server.repository.UserIRepository;

import javax.persistence.EntityNotFoundException;

@Service
public class UserService {
    @Autowired
    private UserIRepository userRepository;

    public User find(String username, String password) {
        try {
            User user = userRepository.getOne(username);
            if (password.equals(user.getPassword()))
                return user;
        } catch (EntityNotFoundException exception) {
            return null;
        }
        return null;
    }

    public User add(User user) {
        try {
            User u = userRepository.save(user);
            return u;
        } catch (EntityNotFoundException exception) {
            return null;
        }
    }
}
