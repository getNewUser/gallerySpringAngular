package com.vnev.idk.DAO.Tag;

import com.vnev.idk.Entities.Tag;
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
public class TagDAOImpl implements TagDAO {

    EntityManager entityManager;

    @Autowired
    public TagDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }




    @Override
    public List<Tag> findAll() {
      CriteriaBuilder builder = entityManager.getCriteriaBuilder();
      CriteriaQuery<Tag> query = builder.createQuery(Tag.class);
      Root<Tag> tag = query.from(Tag.class);
      query.select(tag);

      return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Tag save(Tag tag) {
        Session session = entityManager.unwrap(Session.class);

        session.save(tag);

        return tag;
    }

    @Transactional
    @Override
    public void removeTag(Tag tag) {
        tag = entityManager.find(Tag.class, tag.getId());

        entityManager.remove(tag);
        entityManager.flush();
        entityManager.clear();
    }

    @Transactional
    @Override
    public void removeTagById(int id) {
        Tag tag = entityManager.find(Tag.class, id);

        entityManager.remove(tag);
        entityManager.flush();
        entityManager.clear();
    }

    @Override
    public Tag updateTag(Tag tag) {
         Session sesion = entityManager.unwrap(Session.class);

         sesion.update(tag);

         return tag;
    }


}
