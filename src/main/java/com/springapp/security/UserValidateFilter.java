package com.springapp.security;

//import com.springapp.mvc.security.user.service.UserServiceImpl;
import me.riverslob.webChat.util.PropertiesReader;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Properties;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

//import static com.springapp.mvc.MainController.LOGIN_REENTER_FLAG;
import static me.riverslob.webChat.util.StringUtils.checkEmpty;
import static me.riverslob.webChat.util.StringUtils.isEmpty;

public class UserValidateFilter implements Filter {
	private static String loginUrl = "";
	private static String webChatLoginUrl = "/webChat/login";
    private String contextPath;
	private static Set<String> excludeUrls = null;
	private PathMatcher pathMatcher = new AntPathMatcher();

	public static final String LOGIN_REENTER_FLAG = "reLogin";
	
	static{
		excludeUrls=new HashSet<String>();
		try {
			Properties pro = PropertiesReader.getProperties("excludeLoginUrl");
			Iterator<Object> ite = pro.values().iterator();
			while(ite.hasNext()){
				excludeUrls.add(ite.next().toString().trim());
			}
		} catch (Exception e) {
			e.getStackTrace();
		}
	}
	
	public void destroy() {
		
	}

	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {

		boolean result = false;
		HttpServletResponse res = (HttpServletResponse) response;
		HttpServletRequest req = (HttpServletRequest) request;
        String jl_url="webchat";
        String url = checkEmpty(req.getRequestURI(), "");


        if(contextPath.equals(url) || isIgnorableUrl(url) || loginCorrect(req)){
			result = true;
		}

		if(result){
			chain.doFilter(request, response);
		}else{
			res.addHeader("login-ErrorInfo", "forward:" +loginUrl);
			//不是AJAX请求的才重定向
			if(checkEmpty(req.getHeader("X-Requested-With")) == null) {
                Pattern pattern = Pattern.compile("MicroMessenger",Pattern.CASE_INSENSITIVE);
                Matcher matcher = pattern.matcher(req.getHeader("User-Agent"));
//                RequestDispatcher dispatcher;

                if(matcher.find()) {
//                    dispatcher = req.getRequestDispatcher(webChatLoginUrl+"?flag=reLogin");
                    res.sendRedirect(contextPath + webChatLoginUrl+"?flag="+LOGIN_REENTER_FLAG+"&lj_url="+url);
                } else {
//                    dispatcher = req.getRequestDispatcher(webChatLoginUrl+"?flag=reLogin");
                    res.sendRedirect(contextPath + loginUrl+"?flag="+LOGIN_REENTER_FLAG+"&lj_url="+url);
                }
//                dispatcher.forward(req,res);
            }
        }
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
        contextPath = filterConfig.getServletContext().getContextPath()+"/";

        if(isEmpty(contextPath)) {
            contextPath = "/";
        }
    }
	
	/**
	 * 检查请求路径是否忽视登录验证
	 * <br/> Created on 2012-12-10 下午2:46:28
	 * @author  李青原(liqingyuan1986@aliyun.com)
	 * @since 1.0 
	 * @param url
	 * @return
	 */
	private boolean isIgnorableUrl(String url){
		for(String fullPattern : excludeUrls){
			if(pathMatcher.match(fullPattern, url)){
				return true;
			}
		}
		return false;
	}
	
	private boolean loginCorrect(HttpServletRequest request) {
//		boolean result = false;
//
//		Object user = request.getSession().getAttribute("user");
//		if(user != null){
//			result = true;
//
//		}
//		return result;



//        return UserServiceImpl.checkLogin(request);
		return true;
    }
}
