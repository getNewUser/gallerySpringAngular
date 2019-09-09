package com.vnev.idk.Services;

import com.vnev.idk.Entities.Tag;

import java.util.List;

public interface TagService {
    List<Tag> findAll();
    Tag save(Tag tag);
    void removeTag(Tag tag);
    void removeTagById(int id);
    Tag updateTag(Tag tag);
}
