package com.vnev.idk.Services;


import com.vnev.idk.Entities.FullPicture;
import com.vnev.idk.Entities.Image;

import java.io.IOException;
import java.util.List;

public interface ImageService {
    List<Image> findAll();
    Image save(Image image) throws IOException;
    Image getImage(int imageId);
    Image updateImage(Image image);
    void deleteImageById(int id);
    List<Image> search(List<Integer> cats, List<Integer> tags, String search);
    FullPicture getFullImage(int imageId);
}
