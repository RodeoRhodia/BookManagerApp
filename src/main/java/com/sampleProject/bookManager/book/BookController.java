package com.sampleProject.bookManager.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("books")
    public ModelAndView getBooks() {
        ModelAndView modelAndView = new ModelAndView("index.html");
        modelAndView.addObject("books", bookService.getBooks());
        return modelAndView;
    }

    @GetMapping("bookstest")
    public List<Book> getBooksTest() {
        return bookService.getBooks();
    }

    @PostMapping("books")
    public void addBook(@RequestBody Book book) {
        bookService.addBook(book);
    }

    @GetMapping("books/{bookId}")
    public void deleteBook(@PathVariable("bookId") Long bookId) {
        bookService.deleteBook(bookId);
        getBooks();
    }
}