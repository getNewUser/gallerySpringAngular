package com.vnev.idk.Services;

import com.vnev.idk.DAO.Image.ImageDAO;
import com.vnev.idk.Entities.Category;
import com.vnev.idk.Entities.FullPicture;
import com.vnev.idk.Entities.Image;
import com.vnev.idk.Entities.Tag;
import com.vnev.idk.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Service
public class ImageServiceImpl implements ImageService {

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
    public Image save(Image image) throws IOException {
        FullPicture fullPicture = new FullPicture();// I receive full image size from angular in Thumbnail and assign it to FullPicture object
        fullPicture.setPicture(image.getThumbnail());

        InputStream in = new ByteArrayInputStream(image.getThumbnail());

        BufferedImage buf = ImageIO.read(in);
        int height = buf.getHeight();
        int width = buf.getWidth();

        image.setHeight(height);
        image.setWidth(width);


        image.setThumbnail(ImageUtils.scale(image.getThumbnail(), 300, 300)); // and then resize it for thumbnail
        return imageDao.save(image, fullPicture);
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
        return imageDao.findForSearch(cats, tags, search);
    }

    @Override
    public FullPicture getFullImage(int imageId) {
        return imageDao.getFullImage(imageId);
    }


}
