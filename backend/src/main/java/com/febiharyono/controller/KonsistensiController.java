package com.febiharyono.controller;

import com.febiharyono.model.Konsistensi;
import com.febiharyono.repository.KonsistensiRepository;
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
public class KonsistensiController {

    @Autowired
    KonsistensiRepository konsistensiRepository;

    @GetMapping("/konsistensi")
    public Page<Konsistensi> getKonsistensi(@PageableDefault(size = 10) Pageable pageable) {
        return konsistensiRepository.findAll(pageable);
    }

//    @GetMapping("/konsistensi")
//    public List<Konsistensi> getAllKonsistensi() {
//        Sort sortByCreatedAtDesc = new Sort(Sort.Direction.DESC, "createdAt");
//        return konsistensiRepository.findAll(sortByCreatedAtDesc);
//    }

    @PostMapping("/konsistensi")
    public Konsistensi createKonsistensi(@Valid @RequestBody Konsistensi konsistensi) {
        konsistensi.setCompleted(false);
        return konsistensiRepository.save(konsistensi);
    }

    @GetMapping(value="/konsistensi/{id}")
    public ResponseEntity<Konsistensi> getKonsistensiById(@PathVariable("id") String id) {
        Konsistensi konsistensi = konsistensiRepository.findOne(id);
        if(konsistensi == null) {
            return new ResponseEntity<Konsistensi>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Konsistensi>(konsistensi, HttpStatus.OK);
        }
    }

    @PutMapping(value="/konsistensi/{id}")
    public ResponseEntity<Konsistensi> updateKonsistensi(@PathVariable("id") String id,
                                                   @Valid @RequestBody Konsistensi konsistensi) {
        Konsistensi konsistensiData = konsistensiRepository.findOne(id);
        if(konsistensiData == null) {
            return new ResponseEntity<Konsistensi>(HttpStatus.NOT_FOUND);
        }
        konsistensiData.setField(konsistensi.getField());
        konsistensiData.setOrder(konsistensi.getOrder());
        konsistensiData.setPage(konsistensi.getPage());
        konsistensiData.setRelFields(konsistensi.getRelFields());

        konsistensiData.setRule(konsistensi.getRule());
        konsistensiData.setMessage(konsistensi.getMessage());
        konsistensiData.setPerlakuan(konsistensi.getPerlakuan());
        konsistensiData.setExecutionPage(konsistensi.getExecutionPage());

        konsistensiData.setLevel(konsistensi.getLevel());
        konsistensiData.setFatal(konsistensi.getFatal());
        konsistensiData.setSurvei(konsistensi.getSurvei());
        konsistensiData.setTahun(konsistensi.getTahun());
        konsistensiData.setSesi(konsistensi.getSesi());

        konsistensiData.setCompleted(konsistensi.getCompleted());
        Konsistensi updatedKonsistensi = konsistensiRepository.save(konsistensiData);
        return new ResponseEntity<Konsistensi>(updatedKonsistensi, HttpStatus.OK);
    }

    @DeleteMapping(value="/konsistensi/{id}")
    public void deleteKonsistensi(@PathVariable("id") String id) {
        konsistensiRepository.delete(id);
    }
}
