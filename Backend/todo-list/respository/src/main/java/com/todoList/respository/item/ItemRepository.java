package com.todoList.respository.item;

import com.todoList.models.item.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository  extends CrudRepository<Item,Integer> {
}
