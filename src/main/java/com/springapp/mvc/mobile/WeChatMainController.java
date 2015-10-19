package com.springapp.mvc.mobile;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/wechat")
public class WeChatMainController {
	@RequestMapping(method = RequestMethod.GET)
	public String printWelcome() {
		return "mobile/wechat";
	}
}