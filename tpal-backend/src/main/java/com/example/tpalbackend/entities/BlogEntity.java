package com.example.tpalbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name="blogs")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BlogEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String title;
    private String description;
    @OneToMany(
            mappedBy = "blog",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER,
            orphanRemoval = true
    )
    private List<CommentEntity> comments;

    @ManyToOne
    @JsonIgnore
    private UserEntity user;

    public BlogEntity(String title,String description,UserEntity user){
        this.title=title;
        this.description=description;
    }
}
