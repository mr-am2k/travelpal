package com.example.tpalbackend.services.post;

import com.example.tpalbackend.entities.BlogEntity;
import com.example.tpalbackend.entities.PostEntity;
import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByIdException;
import com.example.tpalbackend.payload.request.post.PostCreateRequest;
import com.example.tpalbackend.repositories.post.PostJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DefaultPostService implements PostService{
    private final PostJpaRepository _postRepository;
    private final UserJpaRepository _userRepository;
    @Override
    public PostEntity createPost(PostCreateRequest post) {
        String auth = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity appUser = this._userRepository.findByUsername(auth);
        if(appUser == null) throw new UserNotFoundByIdException("User not found.");
        var createdPost = new PostEntity(post.getTitle(),post.getDescription(),post.getPlaceOfDeparture(),post.getDestination(),post.getDepartureDate(),post.getReturnDate(),appUser);
        return this._postRepository.save(createdPost);

    }
    @Override
    public List<PostEntity> getAll() {
        return this._postRepository.findAll();
    }
}
