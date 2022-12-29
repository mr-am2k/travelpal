package com.example.tpalbackend.entities;

import com.example.tpalbackend.payload.models.User;
import com.example.tpalbackend.utils.UserGender;
import com.example.tpalbackend.utils.UserRole;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "email", nullable = false, unique = true)
    private String email;


    @Column(name = "password_hash", nullable = false)
    @JsonIgnore
    private String passwordHash;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;

    @Column(name = "gender", nullable = false)
    private UserGender gender;

    @Column(name = "rating", nullable = false)
    private Float rating;

    @Column(name = "image_url", nullable = false)
    private String imageUrl;

    @Column(name = "role", nullable = false)
    private UserRole role = UserRole.ROLE_USER;
    @OneToMany(
            mappedBy = "user",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER,
            orphanRemoval = true
    )
    private List<BlogEntity> blogs;
    public User toDomainModel() {
        User user = new User();

        user.setId(this.id);
        user.setFirstName(this.firstName);
        user.setLastName(this.lastName);
        user.setEmail(this.email);
        user.setCountry(this.country);
        user.setDateOfBirth(this.dateOfBirth);
        user.setGender(this.gender.getValue());
        user.setRating(this.rating);
        user.setImageUrl(this.imageUrl);
        user.setRole(this.role.getValue());

        return user;
    }
}