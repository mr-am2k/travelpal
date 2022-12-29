package com.example.tpalbackend.payload.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Optional;

@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class GlobalResponse {
    private boolean success=true;
    private Optional<String> message;
    private Optional<List<?>> data;
    private Optional<?> item;
    private Optional<Integer> page;
    private Optional<Integer> count;
}
