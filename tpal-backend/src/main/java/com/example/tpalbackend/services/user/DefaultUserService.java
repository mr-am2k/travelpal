package com.example.tpalbackend.services.user;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.EmailNotValidException;
import com.example.tpalbackend.middleware.exceptions.PasswordNotValidException;
import com.example.tpalbackend.middleware.exceptions.UserAlreadyExistsException;
import com.example.tpalbackend.payload.models.AuthResponse;
import com.example.tpalbackend.payload.request.UserLoginRequest;
import com.example.tpalbackend.payload.request.UserRegisterRequest;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import com.example.tpalbackend.utils.RegexUtils;
import com.example.tpalbackend.utils.UserRole;
import com.example.tpalbackend.utils.secuirty.jwt.JwtUtils;
import com.example.tpalbackend.utils.secuirty.services.DefaultUserDetails;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DefaultUserService implements UserService{
    private AuthenticationManager authenticationManager;

    private PasswordEncoder encoder;

    private JwtUtils jwtUtils;

    private final UserJpaRepository userJpaRepository;

    public DefaultUserService(AuthenticationManager authenticationManager, PasswordEncoder encoder, JwtUtils jwtUtils, UserJpaRepository userJpaRepository) {
        this.authenticationManager = authenticationManager;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public AuthResponse login(UserLoginRequest userLoginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userLoginRequest.getUsername(), userLoginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        DefaultUserDetails userDetails = (DefaultUserDetails) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return new AuthResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles);
    }

    @Override
    public UserEntity register(UserRegisterRequest userRegisterRequest) {
        if (userJpaRepository.existsByUsername(userRegisterRequest.getUsername())) {
            throw new UserAlreadyExistsException(userRegisterRequest.getUsername());
        }

        if (!RegexUtils.match(RegexUtils.VALID_EMAIL_ADDRESS_REGEX, userRegisterRequest.getEmail())) {
            throw new EmailNotValidException();
        }

        if (!RegexUtils.match(RegexUtils.VALID_PASSWORD_REGEX, userRegisterRequest.getPassword())) {
            throw new PasswordNotValidException();
        }

        final UserEntity user = new UserEntity();

        user.setFirstName(userRegisterRequest.getFirstName());
        user.setLastName(userRegisterRequest.getLastName());
        user.setEmail(userRegisterRequest.getEmail());
        user.setUsername(userRegisterRequest.getUsername());
        user.setPasswordHash(encoder.encode(userRegisterRequest.getPassword()));

        if (userRegisterRequest.getRole().equalsIgnoreCase(UserRole.ROLE_ADMIN.getValue())) {
            user.setRole(UserRole.ROLE_ADMIN);
        }

        return userJpaRepository.save(user);
    }
}
