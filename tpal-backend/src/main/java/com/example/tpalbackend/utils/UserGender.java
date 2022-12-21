package com.example.tpalbackend.utils;

public enum UserGender {
    MALE("MALE"),
    FEMALE("FEMALE");

    private String value;

    UserGender(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
