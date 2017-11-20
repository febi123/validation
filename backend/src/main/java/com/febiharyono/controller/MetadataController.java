package com.febiharyono.controller;

import com.febiharyono.model.Metadata;
import com.febiharyono.repository.MetadataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by febi on 11/19/2017.
 */
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class MetadataController {

    @Autowired
    MetadataRepository metadataRepository;

    @RequestMapping(value = "/metadata", method = RequestMethod.GET)
    public Page<Metadata> getMetadata(@PageableDefault(size = 10) Pageable pageable) {
        return metadataRepository.findAll(pageable);
    }

//    @GetMapping("/metadata")
//    public List<Metadata> getAllMetadata() {
//        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");
//        return metadataRepository.findAll(sortByCreatedAtDesc);
//    }

    @PostMapping("/metadata")
    public Metadata createMetadata(@Valid @RequestBody Metadata metadata) {
        metadata.setCompleted(false);
        return metadataRepository.save(metadata);
    }

    @GetMapping(value="/metadata/{id}")
    public ResponseEntity<Metadata> getMetadataById(@PathVariable("id") String id) {
        Metadata metadata = metadataRepository.findOne(id);
        if(metadata == null) {
            return new ResponseEntity<Metadata>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Metadata>(metadata, HttpStatus.OK);
        }
    }

    @PutMapping(value="/metadata/{id}")
    public ResponseEntity<Metadata> updateMetadata(@PathVariable("id") String id,
                                           @Valid @RequestBody Metadata metadata) {
        Metadata metadataData = metadataRepository.findOne(id);
        if(metadataData == null) {
            return new ResponseEntity<Metadata>(HttpStatus.NOT_FOUND);
        }
        metadataData.setField(metadata.getField());
        metadataData.setDescription(metadata.getDescription());
        metadataData.setDataType(metadata.getDataType());
        metadataData.setType(metadata.getType());

        metadataData.setMaxLength(metadata.getMaxLength());
        metadataData.setMaxLengthKues(metadata.getMaxLengthKues());
        metadataData.setAllowedChar(metadata.getAllowedChar());

        metadataData.setBlankNotBlank(metadata.getBlankNotBlank());
        metadataData.setRange(metadata.getRange());
        metadataData.setKeyDown(metadata.getKeyDown());
        metadataData.setPage(metadata.getPage());

        metadataData.setLevel(metadata.getLevel());
        metadataData.setFormat(metadata.getFormat());
        metadataData.setSurvei(metadata.getSurvei());
        metadataData.setTahun(metadata.getTahun());
        metadataData.setSesi(metadata.getSesi());

        metadataData.setCompleted(metadata.getCompleted());
        Metadata updatedMetadata = metadataRepository.save(metadataData);
        return new ResponseEntity<Metadata>(updatedMetadata, HttpStatus.OK);
    }

    @DeleteMapping(value="/metadata/{id}")
    public void deleteMetadata(@PathVariable("id") String id) {
        metadataRepository.delete(id);
    }
}
