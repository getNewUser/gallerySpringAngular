package com.vnev.idk.DAO.Image;

import com.vnev.idk.Entities.Category;
import com.vnev.idk.Entities.FullPicture;
import com.vnev.idk.Entities.Image;
import com.vnev.idk.Entities.Tag;
import org.hibernate.Session;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;
import java.util.*;

@Repository
public class ImageDAOImpl implements ImageDAO {

    EntityManager entityManager;

    @Autowired
    public ImageDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Transactional
    @Override
    public void deleteImageById(int id) {
        Image image = entityManager.find(Image.class, id);
        entityManager.remove(image);
        entityManager.flush();
        entityManager.clear();
    }



    @Transactional
    @Override
    public Image update(Image image) {
        Session session = entityManager.unwrap(Session.class);

        session.update(image);

        return image;
    }



    @Transactional
    @Override
    public List<Image> findAll() {

        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Image> query = builder.createQuery(Image.class);
        Root<Image> image = query.from(Image.class);
        query.select(image);

        return entityManager.createQuery(query).getResultList();
    }



    private Predicate getCategoriesPredicate (List<Integer> ids, CriteriaBuilder builder, Predicate initialPredicate, Join<Image, Category> join){
        if(ids.size() > 2){
            System.out.println(">2");
            Predicate predicate = (builder.equal(join.get("id"), ids.get(0)));
            for(int i = 1; i < ids.size(); i++){
                Predicate newPredicate = (builder.equal(join.get("id"), ids.get(i)));
                predicate = (builder.or(predicate, newPredicate));
            }
            initialPredicate = predicate;

        }else if(ids.size() > 1){
            System.out.println(">1");
            Predicate firstId = (builder.equal(join.get("id"), ids.get(0)));
            Predicate secondId = (builder.equal(join.get("id"), ids.get(1)));

            initialPredicate = (builder.or(firstId, secondId));

        }else if(ids.size() > 0){
            System.out.println(">0");
            initialPredicate = (builder.equal(join.get("id"), ids.get(0)));
        }


        return initialPredicate;
    }

    private Predicate getTagsPredicate (List<Integer> ids, CriteriaBuilder builder, Predicate initialPredicate, Join<Image, Tag> join){
        if(ids.size() > 2){
            System.out.println(">2");
            Predicate predicate = (builder.equal(join.get("id"), ids.get(0)));
            for(int i = 1; i < ids.size(); i++){
                Predicate newPredicate = (builder.equal(join.get("id"), ids.get(i)));
                predicate = (builder.or(predicate, newPredicate));
            }
            initialPredicate = predicate;

        }else if(ids.size() > 1){
            System.out.println(">1");
            Predicate firstId = (builder.equal(join.get("id"), ids.get(0)));
            Predicate secondId = (builder.equal(join.get("id"), ids.get(1)));

            initialPredicate = (builder.or(firstId, secondId));

        }else if(ids.size() > 0){
            System.out.println(">0");
            initialPredicate = (builder.equal(join.get("id"), ids.get(0)));
        }

        return initialPredicate;
    }


    @Override
    public FullPicture getFullImage(int imageId) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<FullPicture> query = builder.createQuery(FullPicture.class);
        Root<FullPicture> fullPictureRoot = query.from(FullPicture.class);
        Join<FullPicture,Image> imageJoin = fullPictureRoot.join("image");

        List<Predicate> conditions = new ArrayList<>();
        Predicate predicate = builder.equal(imageJoin.get("id"), imageId);
        conditions.add(predicate);

        TypedQuery<FullPicture> typedQuery = entityManager.createQuery(
                query.select(fullPictureRoot)
                        .where(conditions.toArray(new Predicate[] {}))
        );


        return typedQuery.getSingleResult();
    }

    @Override
    public List<Image> findForSearch(List<Integer> categoriesIds, List<Integer> tagsIds, String search){
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Image> query = builder.createQuery(Image.class);
        Root<Image> fromImages = query.from(Image.class);
        Join<Image, Category> categories = fromImages.join("categories");
        Join<Image, Tag> tags = fromImages.join("tags");

        List<Predicate> conditions = new ArrayList<>();

        Predicate template1 = builder.greaterThan(categories.get("id"), 0);
        Predicate template2 = builder.lessThan(categories.get("id"), 0);

        Predicate predicate = builder.or(template1,template2);


        if(!categoriesIds.isEmpty()){
            Predicate categoriesPredicate = (builder.equal(categories.get("id"), -1)); // just to initialize it to be able to pass it
            categoriesPredicate = getCategoriesPredicate(categoriesIds,builder,categoriesPredicate, categories);

            predicate = builder.and(categoriesPredicate, predicate);
        }
        if(!tagsIds.isEmpty()){

            Predicate tagsPredicate = (builder.equal(tags.get("id"), -1)); // just to initialize it to be able to pass it
            tagsPredicate = getTagsPredicate(tagsIds,builder,tagsPredicate,tags);

            predicate = builder.and(tagsPredicate, predicate);

        }
        Predicate likeName = builder.like(fromImages.get("name"), search + "%");
        Predicate likeDescription = builder.like(fromImages.get("description"),  search + "%");
        Predicate likeNameOrDescription = (builder.or(likeName,likeDescription));

        Predicate likeNameOrDescriptionOrTagsOrCategories = (builder.and(likeNameOrDescription, predicate));
        conditions.add(likeNameOrDescriptionOrTagsOrCategories);

        TypedQuery<Image> typedQuery = entityManager.createQuery(
                query.select(fromImages)
                        .where(conditions.toArray(new Predicate[] {}))
                .distinct(true)
        );


        return typedQuery.getResultList();
    }




    private List<Tag> findAllTags(String name) {
        Session session = entityManager.unwrap(Session.class);

        Query<Tag> query = session.createQuery("from Tag where name=:tagname", Tag.class);
        query.setParameter("tagname", name);

        List<Tag> tags = query.getResultList();



        return tags;
    }

    private Set<Tag> filterNewTags (Set<Tag> tags){
        Set<Tag> filteredList = new HashSet<>();
        for(Tag tag : tags){
            if(findAllTags(tag.getName()).isEmpty()){
                tag.setCreatedDate(new Date());
                filteredList.add(tag);
            }
        }

        return filteredList;
    }

    private Set<Tag> getExistingTags (Set<Tag> tags){
        Set<Tag> filteredList = new HashSet<>();
        for(Tag tag : tags){
            if(!findAllTags(tag.getName()).isEmpty()){
                tag.setCreatedDate(new Date());
                filteredList.add(tag);
            }
        }

        return filteredList;
    }





    @Transactional
    @Override
    public Image save(Image image, FullPicture fullPicture) {
        Session session = entityManager.unwrap(Session.class);

        Set<Tag> filteredNewTags = filterNewTags(image.getTags());
        Set<Tag> filteredExistingTags = getExistingTags(image.getTags());

        image.setDate(new Date());


       image.setTags(filteredNewTags);
       session.persist(image);



        Query query = session.createQuery("from Image order by image_id DESC ");
        query.setMaxResults(1);
        image = (Image) query.uniqueResult();
        fullPicture.setId(image.getId());
        image.setFullPicture(fullPicture);


        for(Tag tag: filteredExistingTags){
            List<Tag> tags = findAllTags(tag.getName());
            if(!tags.isEmpty()) {
                tag = tags.get(0);
                image.getTags().add(tag);
            }
        }

        session.update(image);

        return image;
    }

    @Transactional
    @Override
    public Image getImage(int id) {
        Session session = entityManager.unwrap(Session.class);
        Image image = session.get(Image.class, id);

        return image;
    }
}
