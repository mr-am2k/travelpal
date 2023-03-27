package com.example.tpalbackend.utils;

import javax.servlet.http.HttpServletRequest;

public class RequestUtils {
    public static final String AUTHORIZATION_HEADER = "Authorization";
    public static final String BEARER = "Bearer";

    public static final String AUTHORIZATION_HEADER_REFRESH = "AuthorizationRefresh";
    public static final String REFRESH = "Refresh";

    public static String getToken(HttpServletRequest request, String header, String tokenType) {
        final String requestTokenHeader = request.getHeader(header);

        String token = null;

        if (requestTokenHeader != null && requestTokenHeader.startsWith(tokenType)) {
            token = requestTokenHeader.substring(tokenType.length());
        }

        return token;
    }
}
