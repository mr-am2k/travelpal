package com.example.tpalbackend.utils.secuirty.services;

import com.example.tpalbackend.entities.UserEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DefaultUserDetails implements UserDetails {
    private UUID id;

    private String firstName;

    private String lastName;

    private String username;

    private String email;

    private String country;

    private LocalDate dateOfBirth;

    private String gender;

    private Float rating;

    private String imageUrl;

    @JsonIgnore
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public static DefaultUserDetails build(UserEntity user) {
        final List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getValue()));

        return new DefaultUserDetails(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getUsername(),
                user.getEmail(),
                user.getCountry(),
                user.getDateOfBirth(),
                user.getGender().getValue(),
                user.getRating(),
                user.getImageUrl(),
                user.getPasswordHash(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public UUID getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        DefaultUserDetails user = (DefaultUserDetails) o;
        return Objects.equals(id, user.id);
    }
}
