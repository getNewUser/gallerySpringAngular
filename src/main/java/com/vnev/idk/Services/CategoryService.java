package com.vnev.idk.Services;

import com.vnev.idk.Entities.Category;

import java.util.List;

public interface CategoryService {

    List<Category> findAll();
    Category save(Category category);
    Category getCategory(int categoryId);
    Category updateCategory(Category category);
    void deleteCategory(Category category);
    void deleteCategory(int id);
}
