package com.example.tpalbackend.utils;

import java.util.regex.Pattern;

public class RegexUtils {
    public static final Pattern VALID_EMAIL_ADDRESS_REGEX =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    public static final Pattern VALID_PASSWORD_REGEX =
            Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");

    public static boolean match(Pattern pattern, String toValidate) {
        if(toValidate == null){
            return false;
        }

        return pattern.matcher(toValidate).find();
    }
}
