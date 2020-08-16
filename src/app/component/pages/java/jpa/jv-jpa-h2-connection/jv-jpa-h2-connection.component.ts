import { Component, OnInit } from '@angular/core';
import { HighlightService } from "./../../../../../services/highlight/highlight.service";
import { ITableOfContent } from "./../../../../../data/interface";

@Component({
  selector: 'app-jv-jpa-h2-connection',
  templateUrl: './jv-jpa-h2-connection.component.html',
  styleUrls: ['./jv-jpa-h2-connection.component.css']
})
export class JvJpaH2ConnectionComponent implements OnInit {
  private highlighted: boolean = false;
  code: any;
  dataToc: ITableOfContent [];

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  	this.code = CODE;
    this.dataToc = TABLE_OF_CONTENT;
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}

export const TABLE_OF_CONTENT : ITableOfContent [] = [
  {
    id: 1,
    title: "Download H2 Database",
    gotoElement: "goto1"
  },{
    id: 2,
    title: "Tạo dữ liệu trong H2 Database",
    gotoElement: "goto2",
  },{
    id: 3,
    title: "Tạo Project Maven",
    gotoElement: "goto3",
  },{
    id: 4,
    title: "Cấu trúc thư mục của Project",
    gotoElement: "goto4",
  },{
    id: 5,
    title: "Cấu hình file pom.xml",
    gotoElement: "goto5",
  },{
    id: 6,
    title: "Tạo class Book.java (class Entity)",
    gotoElement: "goto6",
  },{
    id: 7,
    title: "Cấu hình file persistence.xml",
    gotoElement: "goto7",
  },{
    id: 8,
    title: "Tạo phương thức testGetData() lấy dữ liệu từ H2 Database",
    gotoElement: "goto8",
  },{
    id: 9,
    title: "Tạo chương trình chính - chạy chương trình",
    gotoElement: "goto9",
  }
];

export const CODE = {
  code_1: `CREATE TABLE TBL_BOOK (
    id int(11) NOT NULL AUTO_INCREMENT,
    title varchar(128) NOT NULL,
    author varchar(45) NOT NULL,
    price int(11) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY book_id_UNIQUE (id),
    UNIQUE KEY title_UNIQUE (title)
);
INSERT INTO TBL_BOOK VALUES (1, 'title_name', 'author_name', 1000);
INSERT INTO TBL_BOOK VALUES (2, 'title_name2', 'author_name2', 2000);
INSERT INTO TBL_BOOK VALUES (3, 'title_name3', 'author_name3', 3000)`,
  code_2: `<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>net.learning.hibernate</groupId>
    <artifactId>HibernateExample</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>Hibernate Example</name>
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    <dependencies>
        <!-- https://mvnrepository.com/artifact/org.hibernate/hibernate-core -->
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-core</artifactId>
            <version>5.4.20.Final</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/com.h2database/h2 -->
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <version>1.4.200</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.eclipse.persistence</groupId>
            <artifactId>eclipselink</artifactId>
            <version>2.6.4</version>
        </dependency>
        <dependency>
            <groupId>org.eclipse.persistence</groupId>
            <artifactId>javax.persistence</artifactId>
            <version>2.1.1</version>
        </dependency>
    </dependencies>
</project>`,
    code_3: `package com.learning.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_BOOK")
public class Book implements Serializable {
    /**
     * 
     */
    private static final long serialVersionUID = 1L;

    private long id;
    private String title;
    private String author;
    private long price;

    public Book() {
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }
}`,
    code_4: `<?xml version="1.0" encoding="UTF-8"?>
<persistence version="2.1"
             xmlns="http://xmlns.jcp.org/xml/ns/persistence"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence http://xmlns.jcp.org/xml/ns/persistence/persistence_2_1.xsd">
 <persistence-unit name="test" transaction-type="RESOURCE_LOCAL">
  <provider>org.eclipse.persistence.jpa.PersistenceProvider</provider>
  <exclude-unlisted-classes>false</exclude-unlisted-classes>
  <properties>
     <property name="javax.persistence.jdbc.driver" value="org.h2.Driver" />
    <property name="javax.persistence.schema-generation.database.action" value="create"/>
       <property name="javax.persistence.jdbc.url" value="jdbc:h2:tcp://localhost/~/test;DB_CLOSE_DELAY=-1"/>
       <property name="javax.persistence.jdbc.user" value="sa" />
       <property name="javax.persistence.jdbc.password" value="" />
       <property name="javax.persistence.hibernate.dialect" value="org.hibernate.dialect.H2Dialect" />
       <property name="javax.persistence.hibernate.hbm2ddl.auto" value="create" />
  </properties>
 </persistence-unit>
</persistence>`,
    code_5: `package com.learning.util;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.learning.entity.Book;

public class Util {
    public static EntityManagerFactory emfactory = Persistence.createEntityManagerFactory("test");
    public static EntityManager em = emfactory.createEntityManager();
    
    @SuppressWarnings("unchecked")
    public static List<Book> testGetData() {
        List<Book> list = new ArrayList<Book>();
        String sql = "SELECT b FROM Book b ";
        Query query = em.createQuery(sql);
        list = query.getResultList();
        
        return list;
    }
}`,
    code_6: `package com.learning.main;

import java.util.List;

import com.learning.entity.Book;
import com.learning.util.Util;

public class Main {
    public static void main(String[] args) {
        List<Book> list = Util.testGetData();
        for (int i = 0; i < list.size(); i++) {
            System.out.println("Book " + i);
            System.out.println("  id:" + list.get(i).getId());
            System.out.println("  title: " + list.get(i).getTitle());
            System.out.println("  author" + list.get(i).getAuthor());
            System.out.println("  price" + list.get(i).getPrice());
        }
    }
}`
}
