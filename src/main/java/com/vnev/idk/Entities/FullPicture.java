package com.vnev.idk.Entities;

import javax.persistence.*;


@Entity
@Table(name = "fullpicture")
public class FullPicture {


    @Id
    @Column(name = "fullpicture_id")
    private int id;


    @Column(name = "picture")
    @Lob
    private byte[] picture;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fullpicture_id", referencedColumnName = "image_id")
    private Image image;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public byte[] getPicture() {
        return picture;
    }

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }
}
