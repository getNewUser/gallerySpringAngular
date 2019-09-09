package com.vnev.idk.Entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "image")
//@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class)
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;


    @Column(name = "height")
    private int height;

    @Column(name = "width")
    private int width;

    @Column(name = "date")
    private Date date;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", height=" + height +
                ", width=" + width +
                ", tags=" + tags +
                ", categories=" + categories +
                ", 0=" + Arrays.toString(thumbnail) +
                '}';
    }


    public FullPicture getFullPicture() {
        return fullPicture;
    }

    @ManyToMany(cascade = {
            CascadeType.MERGE
    })
    @JoinTable(
            name="image_tag",
            joinColumns = @JoinColumn(name="image_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags = new HashSet<>();



    @ManyToMany
    @JoinTable(
            name="image_category",
            joinColumns = @JoinColumn(name="image_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private Set<Category> categories = new HashSet<>();


    @Column(name = "picture")
    @Lob
    private byte[] thumbnail;



    @OneToOne(mappedBy = "image", cascade = CascadeType.ALL)
    @JsonBackReference
    private FullPicture fullPicture;

    public byte[] getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(byte[] thumbnail) {
        this.thumbnail = thumbnail;
    }





    public void setFullPicture(FullPicture fullPicture) {
        this.fullPicture = fullPicture;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }





    public Image(String description) {
        this.description = description;
    }


    public Image() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Tag> getTags() {
            return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }
}
