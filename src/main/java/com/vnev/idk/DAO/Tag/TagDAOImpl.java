package com.vnev.idk.DAO.Tag;

import com.vnev.idk.Entities.Image;
import com.vnev.idk.Entities.Tag;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.criteria.*;
import java.util.ArrayList;
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
    public List<Tag> findTagsWithParent() {

        Session session = entityManager.unwrap(Session.class);

        // Since I'm not deleting tags when their parents are removed
        // I'm only diplaying tags which currently have parents just to avoid creating tags and reuse already existing ones :)
        Query<Tag> query = session.createQuery("select distinct tag from Tag tag inner join tag.images tags where tags.id > 0", Tag.class);


        List<Tag> tags = query.getResultList();
        return tags;
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
