package com.vnev.idk.Controllers;

import com.vnev.idk.Entities.Category;
import com.vnev.idk.Entities.FullPicture;
import com.vnev.idk.Entities.Image;
import com.vnev.idk.Entities.Tag;
import com.vnev.idk.Services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/images")
public class ImageController {


    private ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }


    @GetMapping("/search")
    @ResponseBody
    public List<Image> search(@RequestParam List<Integer> categories, @RequestParam List<Integer> tags, @RequestParam String search){
        return imageService.search(categories,tags,search);
    }

    @GetMapping("/fullpicture")
    public FullPicture getFullImage(@RequestParam int imageId){
        return imageService.getFullImage(imageId);
    }

    @GetMapping()
    public List<Image> images(){

        return imageService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping()
    public Image image(@RequestBody Image image) throws IOException {
        return imageService.save(image);
    }

    @GetMapping("/{id}")
    public Image getPicture(@PathVariable int id){
        return imageService.getImage(id);
    }




//    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public void deleteImage(@PathVariable("id") int id){
        imageService.deleteImageById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/update")
    public Image updateImage(@RequestBody Image image){
        return imageService.updateImage(image);
    }


}









