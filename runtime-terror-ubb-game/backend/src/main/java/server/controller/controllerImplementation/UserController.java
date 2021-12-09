package server.controller.controllerImplementation;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import server.entities.Token;
import server.entities.User;
import server.service.serviceImplementation.UserService;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
@CrossOrigin
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        System.out.println("login");
        User fromRepository = userService.find(user.getUsername(), user.getPassword());
        if (fromRepository == null)
            return new ResponseEntity<String>("User not found", HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<Token>(new Token(getJWTToken(user.getUsername())), HttpStatus.OK);
    }

    @PostMapping("/register")
    public Token register(@RequestBody User user) {
        User fromRepository = userService.add(user);
        if (fromRepository == null)
            return new Token("");
        else
            return new Token(getJWTToken(user.getUsername()));
    }

    private String getJWTToken(String username) {
        String secretKey = "mySecretKey";
        List<GrantedAuthority> grantedAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList("ROLE_USER");

        String token = Jwts
                .builder()
                .setId("softtekJWT")
                .setSubject(username)
                .claim(
                        "authorities",
                        grantedAuthorities.stream()
                            .map(GrantedAuthority::getAuthority)
                            .collect(Collectors.toList())
                        )
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000000))
                .signWith(SignatureAlgorithm.HS512, secretKey.getBytes())
                .compact();
        return token;
    }
}
