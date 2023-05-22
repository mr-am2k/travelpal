package com.example.tpalbackend.services.user;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.middleware.exceptions.EmailNotValidException;
import com.example.tpalbackend.middleware.exceptions.PasswordNotValidException;
import com.example.tpalbackend.middleware.exceptions.UserAlreadyExistsException;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByIdException;
import com.example.tpalbackend.payload.models.AuthResponse;
import com.example.tpalbackend.payload.models.LoginResponse;
import com.example.tpalbackend.payload.models.User;
import com.example.tpalbackend.payload.request.user.UserLoginRequest;
import com.example.tpalbackend.payload.request.user.UserRegisterRequest;
import com.example.tpalbackend.payload.request.user.UserUpdateRequest;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import com.example.tpalbackend.utils.RegexUtils;
import com.example.tpalbackend.utils.UserGender;
import com.example.tpalbackend.utils.UserRole;
import com.example.tpalbackend.utils.secuirty.jwt.JwtUtils;
import com.example.tpalbackend.utils.secuirty.services.DefaultUserDetails;

@Service
public class DefaultUserService implements UserService {
    private AuthenticationManager authenticationManager;

    private PasswordEncoder encoder;

    private JwtUtils jwtUtils;

    private final UserJpaRepository userJpaRepository;

    private final String AUTHORIZATION_HEADER_REFRESH = "AuthorizationRefresh";
    private final String REFRESH = "Refresh";

    private static final Logger LOGGER = LoggerFactory.getLogger(DefaultUserService.class);

    public DefaultUserService(AuthenticationManager authenticationManager, PasswordEncoder encoder, JwtUtils jwtUtils,
            UserJpaRepository userJpaRepository) {
        this.authenticationManager = authenticationManager;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public LoginResponse login(UserLoginRequest userLoginRequest) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(userLoginRequest.getUsername(), userLoginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        final DefaultUserDetails userPrincipal = (DefaultUserDetails) authentication.getPrincipal();

        String accessToken = jwtUtils.generateJwtAccessToken(userPrincipal.getUsername());
        String refreshToken = jwtUtils.generateJwtRefreshToken(userPrincipal.getUsername());

        DefaultUserDetails userDetails = (DefaultUserDetails) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());

        return new LoginResponse(accessToken, refreshToken);
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
        user.setCountry(userRegisterRequest.getCountry());
        user.setDateOfBirth(userRegisterRequest.getDateOfBirth());

        if (userRegisterRequest.getGender() == 0) {
            user.setGender(UserGender.MALE);
            user.setImageUrl("http://lakelandqueen.com/wp-content/uploads/2021/06/default-user-icon-7.png");
        } else {
            user.setGender(UserGender.FEMALE);
            user.setImageUrl("https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231712/thesomeday123171200008.jpg");
        }

        user.setPasswordHash(encoder.encode(userRegisterRequest.getPassword()));
        user.setRole(UserRole.ROLE_USER);

        return userJpaRepository.save(user);
    }

    @Override
    public AuthResponse refresh(HttpServletRequest request) {
        final String requestTokenHeader = request.getHeader(AUTHORIZATION_HEADER_REFRESH);
        String token = null;

        if (requestTokenHeader != null && requestTokenHeader.startsWith(REFRESH)) {
            token = requestTokenHeader.substring(REFRESH.length());
        }
        String username = jwtUtils.getUserNameFromJwtToken(token, false);
        UserEntity user = userJpaRepository.findByUsername(username);

        String jwt = jwtUtils.generateJwtAccessToken(user.getUsername());

        return new AuthResponse(jwt);
    }

    @Override
    public User getUser(String username) {
        UserEntity user = userJpaRepository.findByUsername(username);

        return user.toDomainModel();
    }

    @Override
    public UserEntity getUserEntity(String username) throws UserNotFoundByIdException {
        var userEntity = this.userJpaRepository.findByUsername(username);
        if (userEntity == null) {
            throw new UserNotFoundByIdException("User not found.");
        }
        return userEntity;
    }

    @Override
    public UserEntity updateUser(UserUpdateRequest req) throws ApiException {
        var userToUpdate = this.userJpaRepository.findById(req.getId());
        if (!userToUpdate.isEmpty()) {
            userToUpdate.get().setFirstName(req.getFirstName());
            userToUpdate.get().setLastName(req.getLastName());
            userToUpdate.get().setEmail(req.getEmail());
            userToUpdate.get().setGender(UserGender.valueOf(req.getGender()));
            userToUpdate.get().setCountry(req.getCountry());
            userToUpdate.get().setDateOfBirth(req.getDateOfBirth());
            userToUpdate.get().setImageUrl(req.getImageUrl());
            return this.userJpaRepository.save(userToUpdate.get());
        }
        throw new ApiException("Post not found!", HttpStatus.BAD_REQUEST, ZonedDateTime.now());
    }
}
