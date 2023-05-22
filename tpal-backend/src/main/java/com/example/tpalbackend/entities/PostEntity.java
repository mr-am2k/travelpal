package com.example.tpalbackend.entities;

import com.example.tpalbackend.payload.models.User;
import com.example.tpalbackend.utils.UserGender;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name="posts")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PostEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank(message="Title must not be blank.")
    private String title;

    private String description;

    @Column(name="place_of_departure")
    private String placeOfDeparture;

    private String destination;

    @Column(name="departure_date")
    private LocalDate departureDate;

    @Column(name="return_date")
    private LocalDate returnDate;

    @Column(name="min_age")
    private Integer minAge;

    @Column(name="max_age")
    private Integer maxAge;

    @Column(name="languages")
    @ElementCollection
    private List<String> languages;

    @Column(name="gender")
    @ElementCollection
    private List<UserGender> genders;

    @ManyToOne
    private UserEntity user;

    public PostEntity(
            String title,
            String description,
            String placeOfDeparture,
            String destination,
            LocalDate departureDate,
            LocalDate returnDate,
            Integer minAge,
            Integer maxAge,
            List<String> languages,
            List<UserGender> genders,
            UserEntity user
    ){
        this.title=title;
        this.description=description;
        this.placeOfDeparture=placeOfDeparture;
        this.destination=destination;
        this.departureDate=departureDate;
        this.returnDate=returnDate;
        this.minAge=minAge;
        this.maxAge=maxAge;
        this.languages=languages;
        this.genders=genders;
        this.user=user;
    }
}
