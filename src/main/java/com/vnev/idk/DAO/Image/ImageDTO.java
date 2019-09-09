package com.vnev.idk.DAO.Image;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.vnev.idk.Entities.Category;
import com.vnev.idk.Entities.FullPicture;
import com.vnev.idk.Entities.Tag;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class ImageDTO {

    private int id;
    private String name;

    private String description;

    private int height;

    private int width;

    private Date date;

    private Set<Tag> tags = new HashSet<>();

    private Set<Category> categories = new HashSet<>();

    private byte[] thumbnail;

    private FullPicture fullPicture;

    public ImageDTO(int id, String name, String description, int height, int width, Date date, Set<Tag> tags, Set<Category> categories, byte[] thumbnail, FullPicture fullPicture) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.height = height;
        this.width = width;
        this.date = date;
        this.tags = tags;
        this.categories = categories;
        this.thumbnail = thumbnail;
        this.fullPicture = fullPicture;
    }

    public ImageDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Set<Tag> getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        this.tags = tags;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    public byte[] getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(byte[] thumbnail) {
        this.thumbnail = thumbnail;
    }

    public FullPicture getFullPicture() {
        return fullPicture;
    }

    public void setFullPicture(FullPicture fullPicture) {
        this.fullPicture = fullPicture;
    }
}
