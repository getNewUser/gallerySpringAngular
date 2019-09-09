package com.vnev.idk.DAO.Image;


import com.vnev.idk.Entities.Category;
import com.vnev.idk.Entities.FullPicture;
import com.vnev.idk.Entities.Image;
import com.vnev.idk.Entities.Tag;

import java.io.IOException;
import java.util.List;

public interface ImageDAO {

    List<Image> findAll();
    Image save(Image image);
    Image addTag(int imageId, Tag tag);
    Image getImage(int imageId);
    void setImage(int imageId, byte[] arr) throws IOException;
    Image update(Image image);
    void deleteImage(Image image);
    void deleteImageById(int id);
    Image addCategory(int imageId, Category category);
    List<Image> findForSearch(List<Integer> categoriesIds, List<Integer> tagsIds, String search);
    FullPicture getFullImage(int imageId);
}
