package com.gshepur.todospringbootbackend.dao;

import com.gshepur.todospringbootbackend.domain.ToDo;
import org.springframework.data.repository.CrudRepository;


public interface ToDoDao extends CrudRepository<ToDo, Long> {
}
