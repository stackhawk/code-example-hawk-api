package com.stackhawk.hawkapi.controllers

import com.stackhawk.hawkapi.entities.Hawk
import com.stackhawk.hawkapi.repositories.HawkRepository
import io.swagger.annotations.ApiOperation
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000"], maxAge = 3600)
@RestController
@RequestMapping("api/hawk")
class HawkController {

    @Autowired
    lateinit var hawkRepository: HawkRepository

    @RequestMapping("list",
            method = [RequestMethod.GET],
            produces = [MediaType.APPLICATION_JSON_VALUE])
    @ApiOperation(value = "get hawks matching filter", response = HawkListResult::class)
    fun listHawks(@RequestParam("filter", required = false, defaultValue = "") filter: String,
                  @RequestParam("pageSize", required = false, defaultValue = "10") pageSize: Number,
                  @RequestParam("pageToken", required = false, defaultValue = "") pageToken: String,
                  @RequestParam("sortField", required = false, defaultValue = "name") sortField: String,
                  @RequestParam("sortDir", required = false, defaultValue = "asc") sortDir: String): ResponseEntity<HawkListResult> {
        val page = if (pageToken.isEmpty()) 0 else pageToken.toInt()
        val sort = when (sortDir) {
            "asc" -> Sort.by(Sort.Order.asc(sortField))
            "desc" -> Sort.by(Sort.Order.desc(sortField))
            else -> Sort.by(Sort.DEFAULT_DIRECTION, sortField)
        }
        val pageable = PageRequest.of(page, pageSize.toInt(), sort)
        val sqlFilter = "%$filter%"
        val hawks = hawkRepository.findAllByNameLikeIgnoreCaseOrColorDescriptionLikeIgnoreCaseOrBehaviorDescriptionLikeIgnoreCaseOrHabitatDescriptionLikeIgnoreCase(
                sqlFilter,
                sqlFilter,
                sqlFilter,
                sqlFilter,
                pageable = pageable)
        return ResponseEntity.ok(HawkListResult(hawks, pageToken = (page + 1).toString()))
    }

    @RequestMapping(
            method = [RequestMethod.POST],
            produces = [MediaType.APPLICATION_JSON_VALUE])
    @ApiOperation(value = "add new hawk", response = Hawk::class)
    fun createHawk(@RequestBody hawk: Hawk): ResponseEntity<Hawk> {
        val newHawk = hawkRepository.save(hawk.copy(id = null))
        return ResponseEntity.ok(newHawk)
    }

    @RequestMapping("{id}",
            method = [RequestMethod.GET],
            produces = [MediaType.APPLICATION_JSON_VALUE])
    @ApiOperation(value = "get hawk by id", response = Hawk::class)
    fun getHawk(@PathVariable("id") id: Long): ResponseEntity<Hawk> {
        val hawkOpt = hawkRepository.findById(id)
        return if (hawkOpt.isPresent) ResponseEntity.ok(hawkOpt.get()) else ResponseEntity.notFound().build()
    }

    @RequestMapping("{id}",
            method = [RequestMethod.PUT])
    @ApiOperation(value = "update hawk by id", response = Hawk::class)
    fun updateHawk(@PathVariable("id") id: Long, @RequestBody hawk: Hawk): ResponseEntity<Hawk> {
        val updatedHawk = hawkRepository.save(hawk.copy(id = id))
        return ResponseEntity.ok(updatedHawk)
    }


    @RequestMapping("{id}",
            method = [RequestMethod.DELETE])
    @ApiOperation(value = "remove hawk by id", response = Void::class)
    fun deleteHawk(@PathVariable("id") id: Long): ResponseEntity<Void> {
        hawkRepository.deleteById(id)
        return ResponseEntity.noContent().build()
    }

}

data class HawkListResult(val hawks: List<Hawk>, val pageToken: String = "")
