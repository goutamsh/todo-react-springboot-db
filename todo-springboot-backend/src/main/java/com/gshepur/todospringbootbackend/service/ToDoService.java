package com.gshepur.todospringbootbackend.service;

import com.gshepur.todospringbootbackend.dao.ToDoDao;
import com.gshepur.todospringbootbackend.domain.ToDo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ToDoService {

    @Autowired
    private ToDoDao toDoDao;

    public Iterable<ToDo> getAllToDos() {
        return toDoDao.findAll();

    }

    public void saveToDo(ToDo toDo) {
        toDoDao.save(toDo);
    }

    public void deleteToDo(Long toDoId) {
        toDoDao.delete(new ToDo(toDoId));
    }

    public void updateToDo(ToDo toDo) {
        toDoDao.save(toDo);
    }
}
