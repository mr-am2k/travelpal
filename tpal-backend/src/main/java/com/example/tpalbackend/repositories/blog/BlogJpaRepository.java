package com.example.tpalbackend.repositories.blog;
import com.example.tpalbackend.entities.BlogEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface BlogJpaRepository extends JpaRepository<BlogEntity, UUID> {

}
