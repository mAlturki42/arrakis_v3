package com.db.grad.javaapi.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "security")
public class Security {
    @Id
    private int id;
    private String isin;
    private String cusip;
    private String issuer_name;
    private Date maturity_date;
    private double coupon;
    private String type;
    private double face_value;
    private String currency;
    private String status;

    @Id
    @Column(name= "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name= "isin", nullable = false)
    public String getIsin() {
        return isin;
    }

    public void setIsin(String isin) {
        this.isin = isin;
    }

    @Column(name= "cusip", nullable = false)
    public String getCusip() {
        return cusip;
    }

    public void setCusip(String cusip) {
        this.cusip = cusip;
    }

    @Column(name= "issuer_name", nullable = false)
    public String getIssuer_name() {
        return issuer_name;
    }

    public void setIssuer_name(String issuer_name) {
        this.issuer_name = issuer_name;
    }

    @Column(name= "maturity_date", nullable = false)
    public Date getMaturity_date() {
        return maturity_date;
    }

    public void setMaturity_date(Date maturity_date) {
        this.maturity_date = maturity_date;
    }

    @Column(name = "coupon", nullable = false)
    public double getCoupon() {
        return coupon;
    }

    public void setCoupon(double coupon) {
        this.coupon = coupon;
    }

    @Column(name= "type", nullable = false)
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
    @Column(name= "face_value", nullable = false)
    public double getFace_value() {
        return face_value;
    }

    public void setFace_value(double face_value) {
        this.face_value = face_value;
    }
    @Column(name= "currency", nullable = false)
    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
    @Column(name= "status", nullable = false)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}


