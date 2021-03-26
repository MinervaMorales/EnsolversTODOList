package com.todoList.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import static org.springframework.boot.SpringApplication.*;

@SpringBootApplication
@ComponentScan(basePackages = {"com.todoList.*"} )
@EntityScan(basePackages = {"com.todoList.*"} )
@EnableJpaRepositories(basePackages = {"com.todoList.*"})
public class TodoListApplication{

    public static void main(String[] args) {
        run(TodoListApplication.class, args);
    }

}
