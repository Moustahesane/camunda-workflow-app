package com.documania.workflow.beans;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class SeccurityFilter {

	@Bean
	public FilterRegistrationBean filterRegistrationBean() {
		FilterRegistrationBean registrationBean = new FilterRegistrationBean();

		registrationBean.setName("camunda-auth");
		registrationBean.setFilter(new org.camunda.bpm.engine.rest.security.auth.ProcessEngineAuthenticationFilter());
		registrationBean.setAsyncSupported(true);
		registrationBean.addInitParameter("authentication-provider",
				"org.camunda.bpm.engine.rest.security.auth.impl.HttpBasicAuthenticationProvider");
		registrationBean.addUrlPatterns("/*");
		

		return registrationBean;
	}
}
