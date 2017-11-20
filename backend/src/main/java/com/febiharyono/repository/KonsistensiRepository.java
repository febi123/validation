package com.febiharyono.repository;

import com.febiharyono.model.Konsistensi;
import com.febiharyono.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by febi on 11/19/2017.
 */
public interface KonsistensiRepository  extends MongoRepository<Konsistensi, String> {
}
