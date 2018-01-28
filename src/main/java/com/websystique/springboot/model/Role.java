package com.websystique.springboot.model;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
@Entity
@Table(name = "APP_ROLE")
@EntityListeners(AuditingEntityListener.class)
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)

    @Column(name = "ROLE_ID")
    private Long role_Id;

    @Column(name = "NAME")
    private String name;
    public Long getRoleId() {
        return role_Id;
    }

    public void setRoleId(Long roleId) {
        this.role_Id = roleId;
    }

    public String getRoleTitle() { return name; }

    public void setRoleTitle(String roleTitle) {
        this.name = roleTitle;
    }
}
