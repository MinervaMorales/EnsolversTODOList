package com.todoList.respository.folders;

import com.todoList.models.folders.Folders;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoldersRepository extends CrudRepository<Folders,Integer> {}
