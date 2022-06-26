package com.sampleProject.bookManager.book;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class BookConfig {

    @Bean
    public CommandLineRunner commandLineRunner(
            BookRepository bookRepository) {
        return (args) -> {
            Book b1 = new Book("Hunger Games");
            Book b2 = new Book("Life of Pi");
            Book b3 = new Book("Nineteen Eighty-Four");

            bookRepository.saveAll(List.of(b1, b2, b3));
        };
    }
}
