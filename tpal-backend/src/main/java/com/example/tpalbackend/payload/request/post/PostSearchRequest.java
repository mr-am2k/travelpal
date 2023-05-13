package com.example.tpalbackend.payload.request.post;

import com.example.tpalbackend.utils.UserGender;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class PostSearchRequest {
    private Integer pageNumber;
    private String destination;
    private String startDate;
    private String endDate;
    private List<String> languages;
    private Integer minAge;
    private Integer maxAge;
    private List<UserGender> genders;
}
