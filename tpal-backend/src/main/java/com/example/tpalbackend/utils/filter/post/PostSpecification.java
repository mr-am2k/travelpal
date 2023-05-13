package com.example.tpalbackend.utils.filter.post;

import com.example.tpalbackend.entities.PostEntity;
import com.example.tpalbackend.utils.UserGender;
import lombok.Data;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Predicate;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Data
public class PostSpecification {
    private PostFilter postFilter;

    public PostSpecification(PostFilter postFilter) {
        this.postFilter = postFilter;
    }

    public Specification<PostEntity> toFilterSpecification() {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (postFilter.getDestination() != null) {
                predicates.add(cb.like(cb.lower(root.get("destination")), "%" + postFilter.getDestination().toLowerCase() + "%"));
            }

            if (postFilter.getStartDate() != null) {
                LocalDate departureDate = LocalDate.parse(postFilter.getStartDate());
                predicates.add(cb.greaterThanOrEqualTo(root.get("departureDate"), departureDate));
            }

            if (postFilter.getEndDate() != null) {
                LocalDate returnDate = LocalDate.parse(postFilter.getEndDate());
                predicates.add(cb.greaterThanOrEqualTo(root.get("returnDate"), returnDate));
            }

            if (postFilter.getLanguages() != null && !postFilter.getLanguages().isEmpty()) {
                List<Predicate> languagePredicates = new ArrayList<>();
                for (String language : postFilter.getLanguages()) {
                    languagePredicates.add(cb.isMember(language, root.get("languages")));
                }
                predicates.add(cb.or(languagePredicates.toArray(new Predicate[0])));
            }

            if (postFilter.getMaxAge() != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("maxAge"), postFilter.getMaxAge()));
            }

            if (postFilter.getMinAge() != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("minAge"), postFilter.getMinAge()));
            }

            if (postFilter.getGenders() != null && !postFilter.getGenders().isEmpty()) {
                List<Predicate> genderPredicates = new ArrayList<>();
                for (UserGender gender : postFilter.getGenders()) {
                    genderPredicates.add(cb.isMember(gender, root.get("genders")));
                }
                predicates.add(cb.or(genderPredicates.toArray(new Predicate[0])));
            }

            return cb.and(predicates.toArray(new Predicate[predicates.size()]));
        };
    }

    /*public Specification<ProductEntity> toFilterSpecification() {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (productFilter.getProductName() != null) {
                predicates.add(cb.like(cb.lower(root.get("name")), "%" + productFilter.getProductName().toLowerCase() + "%"));
            }

            if (productFilter.getCategoryId() != null) {
                predicates.add(root.get("category").get("id").in(productFilter.getCategoryId()));
            }

            if (productFilter.getSubcategoryIds() != null && !productFilter.getSubcategoryIds().isEmpty()) {
                predicates.add(root.get("subcategory").get("id").in(productFilter.getSubcategoryIds()));
            }

            if (productFilter.getMinPrice() != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("startPrice"), productFilter.getMinPrice()));
            }

            if (productFilter.getMaxPrice() != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("startPrice"), productFilter.getMaxPrice()));
            }

            ZonedDateTime currentTime = ZonedDateTime.now();

            predicates.add(cb.greaterThanOrEqualTo(root.get("expirationDateTime"), currentTime));

            predicates.add(cb.lessThanOrEqualTo(root.get("creationDateTime"), currentTime));


            if (productFilter.getProductSort() == null) {
                query.orderBy(cb.asc(root.get("name")));
            } else {
                switch (productFilter.getProductSort()) {
                    case CREATED_DESC -> query.orderBy(cb.desc(root.get("creationDateTime")));
                    case EXPIRATION_ASC -> query.orderBy(cb.asc(root.get("expirationDateTime")));
                    case PRICE_ASC -> query.orderBy(cb.asc(root.get("startPrice")));
                    case PRICE_DESC -> query.orderBy(cb.desc(root.get("startPrice")));
                }
            }

            return cb.and(predicates.toArray(new Predicate[predicates.size()]));
        };
    }
    */
}
