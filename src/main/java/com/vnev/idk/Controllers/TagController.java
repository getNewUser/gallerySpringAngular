package com.vnev.idk.Controllers;


import com.vnev.idk.Entities.Tag;
import com.vnev.idk.Services.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tags")
public class TagController {

    private TagService tagService;

    @Autowired
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping()
    public List<Tag> tags(){
        return tagService.findAll();
    }

    @PostMapping()
    public Tag tag(@RequestBody Tag tag){
        return tagService.save(tag);
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete")
    public void removeTag(@RequestBody Tag tag){
        tagService.removeTag(tag);
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public void removeTagById(@PathVariable("id") int id){
        tagService.removeTagById(id);
    }

    @PutMapping("/update")
    public Tag updateTag(@RequestBody Tag tag){
        return tagService.updateTag(tag);
    }
}
