package com.todoList.service.item;

import com.todoList.models.folders.Folders;
import com.todoList.models.item.Item;
import com.todoList.respository.folders.FoldersRepository;
import com.todoList.respository.item.ItemRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemService {

    public final ItemRepository repository;

    public ItemService(ItemRepository repository) {
        this.repository = repository;
    }

    public Iterable<Item> findAll(){
        return repository.findAll();
    }

    public Optional<Item> findById(int id){
        return repository.findById(id);
    }

    public void add(Item item){
        repository.save(item);
    }

    public void update(Item item){
        repository.save(item);
    }

    public void delete(Item item){
        repository.delete(item);
    }

}
