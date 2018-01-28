package com.websystique.springboot.controller;

import com.websystique.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

	@Autowired
    UserService userService;

	@RequestMapping("/")
	String home(ModelMap modal) {
		modal.addAttribute("title","CRUD Example");
		return "index";
	}
	@RequestMapping("/login")
	String login (ModelMap modal) {
		modal.addAttribute("title","Login");
		return "login";
	}

	@RequestMapping("/userpage")
	String admin (ModelMap modal) {
		modal.addAttribute("title","UserPage");
		return "user";
	}
	@RequestMapping("/partials/{page}")
	String partialHandler(@PathVariable("page") final String page) {
		return page;
	}

	@RequestMapping("/administrator/{page}")
	String adminHandler(@PathVariable("page") final String page) {
		return page;
	}

}
