package com.vnev.idk.Services;

import com.vnev.idk.DAO.Category.CategoryDAO;
import com.vnev.idk.Entities.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private CategoryDAO categoryDAO;

    @Autowired
    public CategoryServiceImpl(CategoryDAO categoryDAO) {
        this.categoryDAO = categoryDAO;
    }

    @Override
    public List<Category> findAll() {
        return categoryDAO.findAll();
    }

    @Override
    public Category save(Category category) {
        return categoryDAO.save(category);
    }

    @Override
    public Category getCategory(int categoryId) {
        return categoryDAO.getCategory(categoryId);
    }

    @Override
    public Category updateCategory(Category category) {
        return categoryDAO.updateCategory(category);
    }

    @Override
    public void deleteCategory(Category category) {
        categoryDAO.deleteCategory(category);
    }

    @Override
    public void deleteCategory(int id) {
        categoryDAO.deleteCategory(id);
    }
}
