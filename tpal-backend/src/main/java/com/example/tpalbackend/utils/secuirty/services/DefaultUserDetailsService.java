package com.example.tpalbackend.utils.secuirty.services;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByUsernameException;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class DefaultUserDetailsService implements UserDetailsService {
    private final UserJpaRepository userJpaRepository;

    public DefaultUserDetailsService(UserJpaRepository userJpaRepository) {
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final UserEntity user = userJpaRepository.findByUsername(username);

        if (user == null) {
            throw new UserNotFoundByUsernameException(username);
        }

        return DefaultUserDetails.build(user);
    }
}
