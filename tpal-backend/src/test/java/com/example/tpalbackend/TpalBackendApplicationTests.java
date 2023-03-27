package com.example.tpalbackend;

import com.example.tpalbackend.services.post.DefaultPostService;
import org.junit.jupiter.api.*;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TpalBackendApplicationTests {
	@Autowired

	static DefaultPostService defaultPostService;
	@BeforeAll
	static void beforeMethod(){
		defaultPostService = Mockito.mock(DefaultPostService.class);
	}

	@BeforeAll
	static void setup() {
		System.out.println("@BeforeAll - executes once before all test methods in this class");
	}
	@DisplayName("Test Spring @Autowired Integration")
	@Test
	void testGet() {
		var uuid = UUID.randomUUID();
		var single = this.defaultPostService.getSingle(uuid);
		Mockito.when(this.defaultPostService.getSingle(uuid)).thenReturn(null);
		assertEquals(single, null);
	}
}
