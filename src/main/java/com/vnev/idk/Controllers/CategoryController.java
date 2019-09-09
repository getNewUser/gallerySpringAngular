package com.vnev.idk.Controllers;

import com.vnev.idk.Entities.Category;
import com.vnev.idk.Services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {

    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping()
    public List<Category> categoryList(){
        return categoryService.findAll();
    }

    @PostMapping()
    public Category saveCategory(@RequestBody Category category){
        return categoryService.save(category);
    }

    @GetMapping("/{id}")
    public Category getCategory(@PathVariable("id") int id){
        return categoryService.getCategory(id);
    }

    @PutMapping("/update")
    public Category updateCategory(@RequestBody Category category){
        return categoryService.updateCategory(category);
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete")
    public void deleteCategory(@RequestBody Category category){
        categoryService.deleteCategory(category);
    }

//    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public void deleteCategory(@PathVariable("id") int id){
        categoryService.deleteCategory(id);
    }
}
