package com.documania.workflow;

import java.io.File;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardWatchEventKinds;
import java.nio.file.WatchEvent;
import java.nio.file.WatchKey;
import java.nio.file.WatchService;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import org.camunda.bpm.engine.ProcessEngine;
import org.camunda.bpm.engine.ProcessEngines;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ResourceProperties.Strategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@SpringBootApplication
public class Application implements CommandLineRunner {


	
  public static void main(String... args) {
    SpringApplication.run(Application.class, args);
  }

@Override
public void run(String... args) throws Exception {
	
	
	  ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
	  RuntimeService runtimeService=processEngine.getRuntimeService();
	 
	 WatchService watchService
     = FileSystems.getDefault().newWatchService();

   Path path = Paths.get("R:\\WatchFolder");

   path.register(
     watchService, 
       StandardWatchEventKinds.ENTRY_CREATE, 
         StandardWatchEventKinds.ENTRY_DELETE, 
           StandardWatchEventKinds.ENTRY_MODIFY);

   WatchKey key;
   while ((key = watchService.take()) != null) {
       for (WatchEvent<?> event : key.pollEvents()) {

    	   if(event.kind().equals(StandardWatchEventKinds.ENTRY_CREATE))
    	   {       
    		  // Map<String, Object> variables = new HashMap<String, Object>();
    		   
//    		       try {
					File f = path.resolve(""+event.context()).toFile();
					
					
				
					
					
					
					
    		   		//Scanner r = new Scanner(f);
    		   		//while (r.hasNextLine()) {
    		        //String data = r.nextLine();
    		        //String[] kv = data.split(":");
    		        //variables.put(kv[0], kv[1]);
    		        
    		        //System.out.println(data);
    		   		//}
//    		      r.close();
//				} catch (Exception e) {
//					// TODO: handle exception
//					e.printStackTrace();
//				}
//    		    
    		       
    		       
    		       
    		   		
    		     //  ProcessInstance instance = runtimeService.startProcessInstanceByKey("Process_Credit", null, variables);
    		       
    	   }
    	   
    	   //           System.out.println(
//             "Event kind:" + event.kind() 
//               + ". File affected: " + event.context() + ".");
       }
       key.reset();
   }
	
}
  
//  @Bean
//  public WebMvcConfigurer corsConfigurer() {
//      return new WebMvcConfigurer() {
//          @Override
//          public void addCorsMappings(CorsRegistry registry) {
//              registry.addMapping("/engine-rest/*").allowedOrigins("*");
//          }
//      };
//  }



public void postnewModel(File file)
{
	

}

}