package com.vnev.idk.DAO.Category;


import com.vnev.idk.Entities.Category;

import java.util.List;

public interface CategoryDAO {
    List<Category> findAll();
    Category save(Category category);
    Category getCategory(int categoryId);
    Category updateCategory(Category category);
    void deleteCategory(Category category);
    void deleteCategory(int id);


}
