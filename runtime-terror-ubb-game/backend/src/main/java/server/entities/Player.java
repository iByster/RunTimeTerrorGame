package server.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@Entity
public class Player implements Serializable {
    @Id
    private String username;

    private Long score;
    private String gender;
    private LocalDateTime score_timestamp;


}
