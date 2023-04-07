package com.example.tpalbackend.services.comment;

import com.example.tpalbackend.entities.CommentEntity;
import com.example.tpalbackend.entities.UserEntity;
import com.example.tpalbackend.middleware.exceptions.ApiException;
import com.example.tpalbackend.middleware.exceptions.UserNotFoundByIdException;
import com.example.tpalbackend.payload.request.comment.CommentCreateRequest;
import com.example.tpalbackend.payload.request.comment.CommentUpdateRequest;
import com.example.tpalbackend.payload.response.CommentResponse;
import com.example.tpalbackend.repositories.blog.BlogJpaRepository;
import com.example.tpalbackend.repositories.comment.CommentJpaRepository;
import com.example.tpalbackend.repositories.user.UserJpaRepository;
import com.example.tpalbackend.services.user.UserService;
import com.example.tpalbackend.utils.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
@Service
@RequiredArgsConstructor
public class DefaultCommentService implements CommentService{
    private final CommentJpaRepository commentRepository;
    private final BlogJpaRepository blogRepository;
    private final UserService userService;
    @Override
    public CommentResponse create(CommentCreateRequest request) {
        String auth = SecurityContextHolder.getContext().getAuthentication().getName();
        var appUser = this.userService.getUserEntity(auth);
        var blogToAttachComment = this.blogRepository.findById(request.getBlogId());
        var commentEntity = new CommentEntity(request.getComment(),blogToAttachComment.get(),appUser);
        this.commentRepository.save(commentEntity);
        var response = new CommentResponse(request.getComment(),blogToAttachComment.get().getTitle(),appUser.getUsername());
        return response;
    }

    @Override
    public List<CommentEntity> getCommentsForBlog(UUID blogID)  {
        var blog = this.blogRepository.findById(blogID);
        return blog.get().getComments();
    }

    @Override
    public List<CommentEntity> getCommentsOfUser(String username) throws Exception {
        var user = this.userService.getUserEntity(username);
        String auth = SecurityContextHolder.getContext().getAuthentication().getName();
        var appUser = this.userService.getUserEntity(auth);
        if(appUser.getRole() == UserRole.ROLE_ADMIN){
        return commentRepository.findCommentsByUser(user);
        }
        throw new Exception("You cant access comments for user without ADMIN role!");
    }

    @Override
    public CommentEntity delete(UUID commentId) {
        var foundComment = this.commentRepository.findById(commentId).get();
        var findBlog= this.blogRepository.findById(foundComment.getBlog().getId()).get();
        findBlog.getComments().remove(foundComment);
        this.commentRepository.deleteById(commentId);
        return foundComment;
    }

    @Override
    public CommentEntity update(UUID commentId, CommentUpdateRequest commentUpdateRequest) {
        var commentToUpdate = this.commentRepository.findById(commentId).get();
        commentToUpdate.setComment(commentUpdateRequest.getComment());
        var updatedComment = this.commentRepository.save(commentToUpdate);
        return updatedComment;
    }
}
