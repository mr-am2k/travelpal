package com.example.tpalbackend.payload.request.post;
import lombok.Data;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
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
}
