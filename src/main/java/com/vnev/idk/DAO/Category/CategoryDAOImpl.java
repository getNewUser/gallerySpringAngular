package com.vnev.idk.DAO.Category;

import com.vnev.idk.Entities.Category;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
@Transactional
public class CategoryDAOImpl implements CategoryDAO {

    EntityManager entityManager;

    @Autowired
    public CategoryDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<Category> findAll() {

        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Category> query = builder.createQuery(Category.class);
        Root<Category> category = query.from(Category.class);
        query.select(category);



        return entityManager.createQuery(query).getResultList();

    }

    @Override
    public Category save(Category category) {
        Session session = entityManager.unwrap(Session.class);

        session.save(category);

        return category;
    }

    @Override
    public Category getCategory(int categoryId) {
        Session session = entityManager.unwrap(Session.class);
        Category category = session.get(Category.class, categoryId);

        return category;
    }

    @Override
    public Category updateCategory(Category category) {
        Session sesion = entityManager.unwrap(Session.class);

        sesion.update(category);

        return category;
    }

    @Override
    public void deleteCategory(Category category) {
        category = entityManager.find(Category.class, category.getId());

        entityManager.remove(category);
        entityManager.flush();
        entityManager.clear();
    }

    @Override
    public void deleteCategory(int id) {
        Category category = entityManager.find(Category.class, id);

        entityManager.remove(category);
        entityManager.flush();
        entityManager.clear();
    }
}
