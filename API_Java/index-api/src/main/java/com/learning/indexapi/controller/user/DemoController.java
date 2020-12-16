package com.learning.indexapi.controller.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learning.indexapi.constant.UrlDefine;
import com.learning.indexapi.dto.ApiResponse;
import com.learning.indexapi.dto.DemoDto;
import com.learning.indexapi.services.DemoService;

@RestController
public class DemoController {

	@Autowired
	private DemoService demoService;
	
	@GetMapping(UrlDefine.DEMO)
	public ApiResponse<List<DemoDto>> getAll() {
		List<DemoDto> list = null;
		try {
			list = demoService.getAll();
		} catch (Exception e) {
			return new ApiResponse<List<DemoDto>>(list, HttpStatus.EXPECTATION_FAILED);
		}
		
		return new ApiResponse<List<DemoDto>>(list, HttpStatus.OK);
    }
}
