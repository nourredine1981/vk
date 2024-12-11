
package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Bonjour depuis le code Java POO !";
    }
}

public class MyJavaClass {
    public static void main(String[] args) {
        System.out.println("Bonjour depuis le code Java POO !");
    }
}
