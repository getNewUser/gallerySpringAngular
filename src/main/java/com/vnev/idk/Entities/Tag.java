package com.vnev.idk.Entities;
import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private int id;

    @Column(name ="name", length= 50)
    private String name;

    @Column(name = "createddate", length = 100)
    private Date createdDate;



    public Tag(String name) {
        this.name = name;
    }

    public Tag() {
    }

    @Override
    public String toString() {
        return "Tag{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", createdDate=" + createdDate +
                '}';
    }

    @ManyToMany(mappedBy = "tags")
    private Set<Image> images = new HashSet<>();


    public void addImage(Image image){
        images.add(image);
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

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    private Set<Image> getImages() {
            return images;
    }

    public void setImages(Set<Image> images) {
        this.images = images;
    }
}
