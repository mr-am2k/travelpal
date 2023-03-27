package com.example.tpalbackend.utils;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import org.mockito.Mockito;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

public class HelperMock {

    public static void mockAuthentication(UserJpaRepository userRepository){
        Authentication authentication = Mockito.mock(Authentication.class);
        SecurityContext securityContext = Mockito.mock(SecurityContext.class);
        UserEntity entity = Mockito.mock(UserEntity.class);
        Mockito.when(securityContext.getAuthentication()).thenReturn(authentication);
        Mockito.when(securityContext.getAuthentication().getName()).thenReturn("mahir");
        Mockito.when(userRepository.findByUsername("mahir")).thenReturn(entity);
        SecurityContextHolder.setContext(securityContext);
    }
}
