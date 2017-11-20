package com.febiharyono.model;

/**
 * Created by febi on 11/15/2017.
 */
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Size;
import java.util.Date;

@Document(collection="metadata")
@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Metadata {
    @Id
    private String id;

    @NotBlank
    @Size(max=100)
    @Indexed(unique=true)
    private String Field;

    private String Description;
    private String DataType;
    private String Type;
    private Integer MaxLength;
    private Integer MaxLengthKues;
    private String AllowedChar;
    private String BlankNotBlank;
    private String Range;
    private String KeyDown;
    private Integer Page;
    private String Level;
    private String Format;
    private String Survei;
    private Integer Tahun;
    private Integer Sesi;

    private Date createdAt;
    private Boolean completed;

    public Metadata() {
        super();
    }

    public Metadata(String field) {
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

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        this.Description = description;
    }

    public String getDataType() {
        return DataType;
    }

    public void setDataType(String dataType) {
        this.DataType = dataType;
    }

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        this.Type = type;
    }

    public Integer getMaxLength() {
        return MaxLength;
    }

    public void setMaxLength(Integer maxLength) {
        this.MaxLength = maxLength;
    }

    public Integer getMaxLengthKues() {
        return MaxLengthKues;
    }

    public void setMaxLengthKues(Integer maxLengthKues) {
        this.MaxLengthKues = maxLengthKues;
    }

    public String getAllowedChar() {
        return AllowedChar;
    }

    public void setAllowedChar(String allowedChar) {
        this.AllowedChar = allowedChar;
    }

    public String getBlankNotBlank() {
        return BlankNotBlank;
    }

    public void setBlankNotBlank(String blankNotBlank) {
        this.BlankNotBlank = blankNotBlank;
    }

    public String getRange() {
        return Range;
    }

    public void setRange(String range) {
        this.Range = range;
    }

    public String getKeyDown() {
        return KeyDown;
    }

    public void setKeyDown(String keyDown) {
        this.KeyDown = keyDown;
    }

    public Integer getPage() {
        return Page;
    }

    public void setPage(Integer page) {
        this.Page = page;
    }

    public String getLevel() {
        return Level;
    }

    public void setLevel(String level) {
        this.Level = level;
    }

    public String getFormat() {
        return Format;
    }

    public void setFormat(String format) {
        this.Format = format;
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
        return "Todo{" +
                "Field='" + Field + '\'' +
                ", DataType='" + DataType + '\'' +
                ", Type='" + Type + '\'' +
                ", MaxLength=" + MaxLength +
                ", Range='" + Range + '\'' +
                '}';
    }
}