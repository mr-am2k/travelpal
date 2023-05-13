package com.example.tpalbackend.utils.filter.post;

import com.example.tpalbackend.utils.UserGender;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class PostFilter {
    private String destination;
    private String startDate;
    private String endDate;
    private List<String> languages;
    private Integer minAge;
    private Integer maxAge;
    private List<UserGender> genders;
}
