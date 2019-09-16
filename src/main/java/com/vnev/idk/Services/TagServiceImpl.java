package com.vnev.idk.Services;

import com.vnev.idk.DAO.Tag.TagDAO;
import com.vnev.idk.Entities.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagServiceImpl implements  TagService {

    private TagDAO tagDAO;

    @Autowired
    public TagServiceImpl(TagDAO tagDAO) {
        this.tagDAO = tagDAO;
    }


    @Override
    public List<Tag> findAll() {
        return tagDAO.findAll();
    }

    @Override
    public Tag save(Tag tag) {
        return tagDAO.save(tag);
    }

    @Override
    public void removeTag(Tag tag) {
        tagDAO.removeTag(tag);
    }

    @Override
    public void removeTagById(int id) {
        tagDAO.removeTagById(id);
    }

    @Override
    public Tag updateTag(Tag tag) {
       return tagDAO.updateTag(tag);
    }

    @Override
    public List<Tag> findTagsWithParent() {
        return tagDAO.findTagsWithParent();
    }
}
