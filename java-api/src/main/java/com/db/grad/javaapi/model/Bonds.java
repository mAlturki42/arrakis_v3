package com.db.grad.javaapi.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bonds")
public class Bonds {
    @Id
    private String Bond1;
    private String Bond2;
    private String Bond3;

    @Id
    @Column(name = "book_name", nullable = false)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }


}
