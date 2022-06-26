package com.sampleProject.bookManager.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    public void addBook(Book book) {
        isValidTitle(book.getTitle());

        Optional<Book> optionalBook = bookRepository.findByTitleIgnoreCase(book.getTitle());
        if (optionalBook.isPresent()) {
            throw new IllegalStateException("Book Already Exists");
        }

        bookRepository.save(book);
    }

    private void isValidTitle(String title) {
        if (title == null || title.length() == 0) {
            throw new IllegalStateException("Invalid Title");
        }
    }

    public void deleteBook(Long bookId) {
        boolean exists = bookRepository.existsById(bookId);

        if(!exists) {
            throw new IllegalStateException("Book does not exist");
        }

        bookRepository.deleteById(bookId);
    }
}
