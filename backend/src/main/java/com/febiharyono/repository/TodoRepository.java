package com.febiharyono.repository;

/**
 * Created by febi on 11/15/2017.
 */
import com.febiharyono.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends MongoRepository<Todo, String> {

}
