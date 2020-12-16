package com.learning.indexapi.services;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.indexapi.dto.DemoDto;
import com.learning.indexapi.entities.Demo;
import com.learning.indexapi.repositories.IDemoRepository;

@Service
public class DemoService {
	
	private static final Logger log = LoggerFactory.getLogger(DemoService.class);
	
	@Autowired
	private IDemoRepository demoRepository;
	
	@Autowired
	private MapperService mapperService;
	
	public List<DemoDto> getAll(){
		List<Demo> demos = demoRepository.findAll();
		List<DemoDto> demoDtos = new ArrayList<DemoDto>();
		
		for(Demo demo: demos) {
			demoDtos.add(mapperService.mapDemoToDto(demo));
			log.info("sàdfsdf");
		}
		
		return demoDtos;
	}

}
