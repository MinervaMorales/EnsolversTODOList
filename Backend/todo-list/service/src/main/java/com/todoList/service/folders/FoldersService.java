package com.todoList.service.folders;


import com.todoList.models.folders.Folders;
import com.todoList.respository.folders.FoldersRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FoldersService {

    public final FoldersRepository repository;

    public FoldersService(FoldersRepository repository) {
        this.repository = repository;
    }

    public Iterable<Folders> findAll(){
        return repository.findAll();
    }

    public Optional<Folders> findById(int id){
        return repository.findById(id);
    }

    public void add(Folders folder){
        repository.save(folder);
    }

    public void update(Folders folder){
        repository.save(folder);
    }

    public void delete(Folders folder){
        repository.delete(folder);
    }




}
