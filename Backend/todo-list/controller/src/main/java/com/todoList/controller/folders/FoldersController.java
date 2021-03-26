package com.todoList.controller.folders;


import com.todoList.models.folders.Folders;
import com.todoList.service.folders.FoldersService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class FoldersController {

    private final FoldersService service;

    public FoldersController(FoldersService service) {
        this.service = service;
    }

    @GetMapping("/folders/all")
    @CrossOrigin(origins = "http://localhost:4200")
    public Iterable<Folders> findAll()
    {
        try
        {
            return service.findAll();
        }
        catch(Exception e)
        {
            throw e;
        }
    }

    @GetMapping("/folders/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Optional<Folders> findAll(@PathVariable("id") int id)
    {
        try
        {
            return service.findById(id);
        }
        catch(Exception e)
        {
            throw e;
        }
    }

    @PostMapping("/folders/add")
    @CrossOrigin(origins = "http://localhost:4200")
    public void add(@RequestBody Folders folder)
    {
        try
        {
            service.add(folder);
        }
        catch (Exception e)
        {
            throw e;
        }
    }

    @PutMapping("/folders/update")
    @CrossOrigin(origins = "http://localhost:4200")
    public void update(@RequestBody Folders folder)
    {
        try
        {
            service.update(folder);
        }
        catch(Exception e)
        {
            throw e;
        }
    }

    @GetMapping("/folders/delete/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void delete(@PathVariable("id") int id)
    {
        try
        {
            Folders folder = service.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Invalid folder Id:" + id));
            service.delete(folder);
        }
        catch(Exception e)
        {
            throw e;
        }

    }
}
