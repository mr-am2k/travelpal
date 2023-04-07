package com.example.tpalbackend.payload.request.comment;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
public class CommentCreateRequest {
    @NotNull
    private String comment;

    @NotNull
    private UUID blogId;

}
