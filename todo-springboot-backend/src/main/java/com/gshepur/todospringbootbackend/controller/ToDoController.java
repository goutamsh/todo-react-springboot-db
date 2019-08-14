package com.gshepur.todospringbootbackend.controller;

import com.gshepur.todospringbootbackend.domain.ToDo;
import com.gshepur.todospringbootbackend.service.ToDoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")
public class ToDoController {

    private static Logger LOGGER = LoggerFactory.getLogger(ToDoController.class);
    @Autowired
    private ToDoService toDoService;

    @GetMapping("todos")
    public Iterable<ToDo> getToDos() {
        LOGGER.info("Fetch list of todo");
        return toDoService.getAllToDos();
    }

    @PostMapping("todos")
    public void addtoDo(@RequestBody ToDo toDo){
        LOGGER.info("Add todo");
        toDoService.saveToDo(toDo);
    }

    @PutMapping("todos/{toDoID}")
    public void editToDo(@RequestBody ToDo toDo, @PathVariable String toDoID){
        LOGGER.info("Update todo");
        toDoService.updateToDo(toDo);
    }

    @DeleteMapping("todos/{toDoID}")
    public void deleteToDo(@PathVariable String toDoID){
        LOGGER.info("Delete todo");
        toDoService.deleteToDo(Long.parseLong(toDoID));
    }


}
