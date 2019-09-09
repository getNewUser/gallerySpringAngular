package com.vnev.idk.Services;


import com.vnev.idk.Entities.Category;
import com.vnev.idk.Entities.FullPicture;
import com.vnev.idk.Entities.Image;
import com.vnev.idk.Entities.Tag;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageService {
    List<Image> findAll();
    Image save(Image image) throws IOException;
    Image addTag(int imageId, Tag tag);
    Image getImage(int imageId);
    Image updateImage(Image image);
    void deleteImage(Image image);
    void deleteImageById(int id);
    Image addCategory(int imageId, Category category);
    List<Image> search(List<Integer> cats, List<Integer> tags, String search);
    FullPicture getFullImage(int imageId);
}
