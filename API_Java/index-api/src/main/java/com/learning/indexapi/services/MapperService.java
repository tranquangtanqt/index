package com.learning.indexapi.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learning.indexapi.dto.*;
import com.learning.indexapi.entities.*;

@Service
public class MapperService {
	
	@Autowired
	private ModelMapper mapper;

	public DemoDto mapDemoToDto(Demo demoEntity) {
		return mapper.map(demoEntity, DemoDto.class);
	}
}
