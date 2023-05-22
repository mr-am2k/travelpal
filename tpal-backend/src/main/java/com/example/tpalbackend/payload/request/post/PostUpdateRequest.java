package com.example.tpalbackend.payload.request.post;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import javax.validation.constraints.NotNull;

import com.example.tpalbackend.utils.UserGender;

import lombok.Data;

@Data
public class PostUpdateRequest {
    @NotNull
    private UUID id;
    @NotNull
    private String title;
    private String description;
    private String placeOfDeparture;
    private String destination;
    private LocalDate departureDate;
    private LocalDate returnDate;
    private Integer minAge;
    private Integer maxAge;
    private List<String> languages;
    private List<UserGender> genders;
}
