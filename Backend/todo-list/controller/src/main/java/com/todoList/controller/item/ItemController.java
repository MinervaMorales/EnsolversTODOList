package com.todoList.controller.item;


import com.todoList.models.folders.Folders;
import com.todoList.models.item.Item;
import com.todoList.service.folders.FoldersService;
import com.todoList.service.item.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ItemController {

    private final ItemService service;

    public ItemController(ItemService service) {
        this.service = service;
    }

    @GetMapping("/items/all")
    @CrossOrigin(origins = "http://localhost:4200")
    public Iterable<Item> findAll()
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

    @GetMapping("/items/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Optional<Item> findById(@PathVariable("id") int id)
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

    @PostMapping("/items/add")
    @CrossOrigin(origins = "http://localhost:4200")
    public void add(@RequestBody Item item)
    {
        try
        {
            service.add(item);
        }
        catch (Exception e)
        {
            throw e;
        }
    }

    @PutMapping("/item/update")
    @CrossOrigin(origins = "http://localhost:4200")
    public void update(@RequestBody Item item)
    {
        try
        {
            service.update(item);
        }
        catch(Exception e)
        {
            throw e;
        }
    }

    @GetMapping("/item/delete/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void delete(@PathVariable("id") int id)
    {
        try
        {
            Item item = service.findById(id)
                    .orElseThrow(() -> new IllegalArgumentException("Invalid folder Id:" + id));
            service.delete(item);
        }
        catch(Exception e)
        {
            throw e;
        }

    }
}
