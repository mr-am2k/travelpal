package com.example.tpalbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name="images")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String imageUrl;
   /* @ManyToOne
    @JsonIgnore
    private BlogEntity blog;*/
    public ImageEntity(String imageUrl){
        this.imageUrl=imageUrl;
    }
}
