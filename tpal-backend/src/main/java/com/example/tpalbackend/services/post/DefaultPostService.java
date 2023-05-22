package com.example.tpalbackend.services.post;

import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.entities.PostEntity;
import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.PostByIdNotFound;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByIdException;
import com.example.tpalbackend.payload.request.post.PostCreateRequest;
import com.example.tpalbackend.payload.request.post.PostSearchRequest;
import com.example.tpalbackend.repositories.post.PostJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import com.example.tpalbackend.utils.filter.post.PostFilter;
import com.example.tpalbackend.utils.filter.post.PostSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class DefaultPostService implements PostService{
    private final PostJpaRepository postRepository;
    private final UserJpaRepository userRepository;
    @Override
    public PostEntity createPost(PostCreateRequest post) {
        String auth = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity appUser = this.userRepository.findByUsername(auth);
        if(appUser == null) throw new UserNotFoundByIdException("User not found.");
        var createdPost = new PostEntity(
                post.getTitle(),
                post.getDescription(),
                post.getPlaceOfDeparture(),
                post.getDestination(),
                post.getDepartureDate(),
                post.getReturnDate(),
                post.getMinAge(),
                post.getMaxAge(),
                post.getLanguages(),
                post.getGenders(),
                appUser);
        return this.postRepository.save(createdPost);
    }
    @Override
    public Page<PostEntity> getPosts(PostSearchRequest postSearchRequest) {
        final Pageable page = PageRequest.of(postSearchRequest.getPageNumber(), 10);

        final PostFilter postFilter = PostFilter.builder()
                .destination(postSearchRequest.getDestination())
                .startDate(postSearchRequest.getStartDate())
                .endDate(postSearchRequest.getEndDate())
                .languages(postSearchRequest.getLanguages())
                .maxAge(postSearchRequest.getMaxAge())
                .minAge(postSearchRequest.getMinAge())
                .genders(postSearchRequest.getGenders())
                .build();

        final PostSpecification postSpecification = new PostSpecification(postFilter);

        return this.postRepository.findAll(postSpecification.toFilterSpecification(), page);
    }

    @Override
    public PostEntity getSingle(UUID id) {
        if(id == null) throw new NullPointerException("ID cannot be null.");
        var post = this.postRepository.findById(id).get();
        if(post == null) throw new PostByIdNotFound("Post not found.");
        return post;
    }
}
