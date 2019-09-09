package com.vnev.idk.Services;

import com.sun.org.apache.bcel.internal.generic.RETURN;
import com.vnev.idk.DAO.Image.ImageDAO;
import com.vnev.idk.Entities.Category;
import com.vnev.idk.Entities.FullPicture;
import com.vnev.idk.Entities.Image;
import com.vnev.idk.Entities.Tag;
import com.vnev.idk.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class ImageServiceImpl implements  ImageService {

    private ImageDAO imageDao;

    @Autowired
    public ImageServiceImpl(ImageDAO imageDao) {
        this.imageDao = imageDao;

    }

    @Override
    public List<Image> findAll() {
       return imageDao.findAll();
    }


    @Override
    public Image addTag(int imageId, Tag tag) {
        return imageDao.addTag(imageId, tag);
    }


    @Override
    public Image save(Image image) {
        if(image.getFullPicture() != null){
            image.setThumbnail(ImageUtils.scale(image.getThumbnail(), 300, 300));
            image.getFullPicture().setId(image.getId());
            return imageDao.save(image);
        }
        return imageDao.save(image);
    }

    @Override
    public Image addImage(MultipartFile file, int imageid) throws IOException {
        byte[] fullImage = file.getBytes();
        FullPicture fullPicture = new FullPicture();
        fullPicture.setPicture(fullImage);
        Image image = imageDao.getImage(imageid);
        fullPicture.setId(image.getId());
        image.setFullPicture(fullPicture);

        byte[] thumbnailImage = ImageUtils.scale(file.getBytes(), 300, 300);
        image.setThumbnail(thumbnailImage);

        return imageDao.update(image);
    }

    @Override
    public Image getImage(int imageId) {
        return imageDao.getImage(imageId);
    }

    @Override
    public Image updateImage(Image image) {
        return imageDao.update(image);
    }



    @Override
    public void deleteImage(Image image) {
        imageDao.deleteImage(image);
    }

    @Override
    public void deleteImageById(int id) {
        imageDao.deleteImageById(id);
    }

    @Override
    public Image addCategory(int imageId, Category category) {
        return imageDao.addCategory(imageId, category);
    }

    @Override
    public List<Image> search(List<Integer> cats, List<Integer> tags, String search) {
        return imageDao.findForSearch(cats,tags,search);
    }

    @Override
    public FullPicture getFullImage(int imageId) {
        return imageDao.getFullImage(imageId);
    }


}
