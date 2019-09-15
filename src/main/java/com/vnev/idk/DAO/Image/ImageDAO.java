package com.vnev.idk.DAO.Image;


import com.vnev.idk.Entities.FullPicture;
import com.vnev.idk.Entities.Image;

import java.util.List;

public interface ImageDAO {

    List<Image> findAll();
    Image save(Image image, FullPicture fullPicture);
    Image getImage(int imageId);
    Image update(Image image);
    void deleteImageById(int id);
    List<Image> findForSearch(List<Integer> categoriesIds, List<Integer> tagsIds, String search);
    FullPicture getFullImage(int imageId);
}
