package com.gshepur.todospringbootbackend.controller;

import com.gshepur.todospringbootbackend.domain.ToDo;
import com.gshepur.todospringbootbackend.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")
public class ToDoController {

    @Autowired
    private ToDoService toDoService;

    @GetMapping("todos")
    public Iterable<ToDo> getToDos() {
        return toDoService.getAllToDos();
    }

    @PostMapping("todos")
    public void addtoDo(@RequestBody ToDo toDo){
        toDoService.saveToDo(toDo);
    }

    @PutMapping("todos/{toDoID}")
    public void editToDo(@RequestBody ToDo toDo, @PathVariable String toDoID){

        toDoService.updateToDo(toDo);
    }

    @DeleteMapping("todos/{toDoID}")
    public void deleteToDo(@PathVariable String toDoID){
        toDoService.deleteToDo(Long.parseLong(toDoID));
    }


}
