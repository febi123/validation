package com.febiharyono;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Created by febi on 11/14/2017.
 */
@SpringBootApplication
public class ValidationApplication {
    public static void main(String[] args) {
        SpringApplication.run(ValidationApplication.class, args);
    }

//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder(13);
//    }
//
//    @Bean
//    public SpringDataDialect springDataDialect() {
//        return new SpringDataDialect();
//    }
}
