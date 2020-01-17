package com.stackhawk.hawkapi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.builders.PathSelectors
import springfox.documentation.builders.RequestHandlerSelectors
import springfox.documentation.service.ApiInfo
import springfox.documentation.service.Contact
import springfox.documentation.spi.DocumentationType
import springfox.documentation.spring.web.plugins.Docket
import springfox.documentation.swagger2.annotations.EnableSwagger2

@SpringBootApplication
class HawkbaseApplication

fun main(args: Array<String>) {
    runApplication<HawkbaseApplication>(*args)
}

@Configuration
@EnableSwagger2
class HawkbaseConfig {

    private val title = "Hawk Reference Api"
    private val description = "A hawk species reference api"
    private val version = "0.0.1"
    private val license = "unknown"
    // should match the basePackage of the SpringBoot application controllers
    private val basePackage = "com.stackhawk.hawkapi"

    private fun getApiInfo(): ApiInfo {
        val contact = Contact("Hawk API Info", "https://localhost:8000", "info@stackhawk.com")
        return ApiInfoBuilder()
                .title(title)
                .description(description)
                .version(version)
                .license(license)
                .contact(contact)
                .build()
    }

    @Bean
    fun api(): Docket {
        return Docket(DocumentationType.SWAGGER_2)
                .apiInfo(getApiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage(basePackage))
                .paths(PathSelectors.any())
                .build()
                .protocols(mutableSetOf("http"))
                .produces(mutableSetOf("application/json"))
    }

}