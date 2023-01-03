package com.example.tpalbackend.utils.secuirty.jwt;

import com.example.tpalbackend.utils.secuirty.services.DefaultUserDetails;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtils {
    private static final Logger LOGGER = LoggerFactory.getLogger(JwtUtils.class);

    @Value("${app.jwt_secret}")
    private String accessTokenSecret;

    @Value("${app.jwt_expiration_ms}")
    private Integer accessTokenExpiration;

    @Value("${app.jwt_refresh_secret}")
    private String refreshTokenSecret;

    @Value("${app.jwt_refresh_expiration_ms}")
    private Integer refreshTokenExpiration;


    public String generateJwtAccessToken(String username) {
        return generateJwtTokenFromUsername(username, accessTokenExpiration, accessTokenSecret);
    }

    public String generateJwtRefreshToken(String username) {
        return generateJwtTokenFromUsername(username, refreshTokenExpiration, refreshTokenSecret);
    }

    public String generateJwtTokenFromUsername(String username, Integer expiration, String secret) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + expiration))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public String getUserNameFromJwtToken(String token, boolean accessToken) {
        if(accessToken){
            return Jwts.parser().setSigningKey(accessTokenSecret).parseClaimsJws(token).getBody().getSubject();
        }

        return Jwts.parser().setSigningKey(refreshTokenSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(accessTokenSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            LOGGER.error("Invalid JWT signature: {}", e.getMessage());
        } catch (MalformedJwtException e) {
            LOGGER.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            LOGGER.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            LOGGER.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            LOGGER.error("JWT claims string is empty: {}", e.getMessage());
        }

        return false;
    }
}
