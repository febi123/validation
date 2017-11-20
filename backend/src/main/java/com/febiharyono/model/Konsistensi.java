package com.febiharyono.model;

/**
 * Created by febi on 11/19/2017.
 */
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Size;
import java.util.Date;

@Document(collection="konsistensi")
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Konsistensi {
    @Id
    private String id;

    @NotBlank
    @Size(max=100)
    @Indexed(unique=true)
    private String KodeError;

    private String Field;
    private Integer Order;
    private Integer Page;
    private String RelFields;
    private String Rule;
    private String Message;
    private String Perlakuan;
    private Integer ExecutionPage;
    private String Level;
    private Integer IsFatal;
    private String Survei;
    private Integer Tahun;
    private Integer Sesi;

    private Date createdAt;
    private Boolean completed;

    public Konsistensi() {
        super();
    }

    public Konsistensi(String field) {
        this.Field = field;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getField() {
        return Field;
    }

    public void setField(String field) {
        this.Field = field;
    }

    public Integer getOrder() {
        return Order;
    }

    public void setOrder(Integer order) {
        this.Order = order;
    }

    public Integer getPage() {
        return Page;
    }

    public void setPage(Integer page) {
        this.Page = page;
    }

    public String getRelFields() {
        return RelFields;
    }

    public void setRelFields(String relFields) {
        this.RelFields = relFields;
    }

    public String getRule() {
        return Rule;
    }

    public void setRule(String rule) {
        this.Rule = rule;
    }

    public String getMessage() {
        return Message;
    }

    public void setMessage(String message) {
        this.Message = message;
    }

    public String getPerlakuan() {
        return Perlakuan;
    }

    public void setPerlakuan(String perlakuan) {
        this.Perlakuan = perlakuan;
    }

    public Integer getExecutionPage() {
        return ExecutionPage;
    }

    public void setExecutionPage(Integer executionPage) {
        this.ExecutionPage = executionPage;
    }

    public String getLevel() {
        return Level;
    }

    public void setLevel(String level) {
        this.Level = level;
    }

    public Integer getFatal() {
        return IsFatal;
    }

    public void setFatal(Integer fatal) {
        IsFatal = fatal;
    }

    public String getSurvei() {
        return Survei;
    }

    public void setSurvei(String survei) {
        this.Survei = survei;
    }

    public Integer getTahun() {
        return Tahun;
    }

    public void setTahun(Integer tahun) {
        this.Tahun = tahun;
    }

    public Integer getSesi() {
        return Sesi;
    }

    public void setSesi(Integer sesi) {
        this.Sesi = sesi;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    @Override
    public String toString() {
        return "Konsistensi{" +
                "Field='" + Field + '\'' +
                ", Page=" + Page +
                ", Rule='" + Rule + '\'' +
                ", Message='" + Message + '\'' +
                '}';
    }
}
