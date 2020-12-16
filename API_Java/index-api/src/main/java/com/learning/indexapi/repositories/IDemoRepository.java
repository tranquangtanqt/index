package com.learning.indexapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learning.indexapi.entities.Demo;

public interface IDemoRepository extends JpaRepository<Demo, Long>{

}
