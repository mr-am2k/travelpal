package com.example.tpalbackend.payload.request.post;
import com.example.tpalbackend.utils.UserGender;
import lombok.Data;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Data
public class PostCreateRequest {
    @NotNull
    private String title;
    @NotNull
    private String description;
    @NotNull
    private String placeOfDeparture;
    @NotNull
    private String destination;
    @NotNull
    private LocalDate departureDate;
    @NotNull
    private LocalDate returnDate;
    @NotNull
    private Integer minAge;
    @NotNull
    private Integer maxAge;
    @NotNull
    private List<String> languages;
    @NotNull
    private List<UserGender> genders;
}
