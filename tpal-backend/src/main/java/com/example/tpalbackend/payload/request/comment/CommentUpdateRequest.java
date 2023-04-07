package com.example.tpalbackend.payload.request.comment;
import lombok.Data;
import javax.validation.constraints.NotNull;

@Data
public class CommentUpdateRequest {
    @NotNull
    String comment;
}
