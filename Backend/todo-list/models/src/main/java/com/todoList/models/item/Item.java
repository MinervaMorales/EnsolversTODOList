package com.todoList.models.item;

import javax.persistence.*;

@Entity
@Table(name ="item")
public class Item {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private int completed;

    @Column
    private int folder;


    public int getId(){ return id;  }

    public void setId(int id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getCompleted(){ return completed; }

    public void setCompleted(int completed){
        this.completed = completed;
    }

    public int getFolder(){ return folder; }

    public void setFolder(int folder){
        this.folder = folder;
    }

}
