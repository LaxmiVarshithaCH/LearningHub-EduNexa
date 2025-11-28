package klu.controller;

import klu.dto.AuthRequest;
import klu.dto.AuthResponse;
import klu.model.User;
import klu.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

private final AuthService authService;

public AuthController(AuthService authService) {
this.authService = authService;
}

@PostMapping("/login")
public AuthResponse login(@RequestBody AuthRequest request){
return authService.login(request);
}

@PostMapping("/signup")
public User signup(@RequestBody User user){
return authService.signup(user);
}
}