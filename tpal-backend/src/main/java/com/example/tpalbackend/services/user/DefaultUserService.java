package com.example.tpalbackend.services.user;

import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.EmailNotValidException;
import com.example.tpalbackend.middleware.exceptions.PasswordNotValidException;
import com.example.tpalbackend.middleware.exceptions.UserAlreadyExistsException;
import com.example.tpalbackend.payload.models.AuthResponse;
import com.example.tpalbackend.payload.models.LoginResponse;
import com.example.tpalbackend.payload.request.user.UserLoginRequest;
import com.example.tpalbackend.payload.request.user.UserRegisterRequest;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import com.example.tpalbackend.utils.RegexUtils;
import com.example.tpalbackend.utils.UserGender;
import com.example.tpalbackend.utils.UserRole;
import com.example.tpalbackend.utils.secuirty.jwt.JwtUtils;
import com.example.tpalbackend.utils.secuirty.services.DefaultUserDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DefaultUserService implements UserService {
    private AuthenticationManager authenticationManager;

    private PasswordEncoder encoder;

    private JwtUtils jwtUtils;

    private final UserJpaRepository userJpaRepository;

    @Value("${app.jwt_refresh_expiration_ms}")
    private int jwtRefreshExpirationMs;

    private static final Logger LOGGER = LoggerFactory.getLogger(DefaultUserService.class);


    public DefaultUserService(AuthenticationManager authenticationManager, PasswordEncoder encoder, JwtUtils jwtUtils, UserJpaRepository userJpaRepository) {
        this.authenticationManager = authenticationManager;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public LoginResponse login(UserLoginRequest userLoginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userLoginRequest.getUsername(), userLoginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String accessToken = jwtUtils.generateJwtToken(authentication);
        String refreshToken = jwtUtils.generateJwtRefreshToken(authentication);

        DefaultUserDetails userDetails = (DefaultUserDetails) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return new LoginResponse(accessToken,refreshToken);
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
        Cookie[] cookies = request.getCookies();

        if(cookies[0].getName().equalsIgnoreCase("refreshToken")){
            String username = jwtUtils.getUserNameFromJwtToken(cookies[0].getValue());
            UserEntity user = userJpaRepository.findByUsername(username);

            String token = jwtUtils.generateJwtTokenWithUsername(user.getUsername());

            return new AuthResponse(token);
        }

        return null;
    }
}
