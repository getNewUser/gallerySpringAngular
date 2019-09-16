package com.vnev.idk.DAO.Tag;


import com.vnev.idk.Entities.Tag;

import java.util.List;

public interface TagDAO{
    List<Tag> findAll();
    Tag save(Tag tag);
    void removeTag(Tag tag);
    void removeTagById(int id);
    Tag updateTag(Tag tag);
    List<Tag> findTagsWithParent();
}
