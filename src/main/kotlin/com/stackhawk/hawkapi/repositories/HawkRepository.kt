package com.stackhawk.hawkapi.repositories

import com.stackhawk.hawkapi.entities.Hawk
import org.springframework.data.domain.Pageable
import org.springframework.data.repository.CrudRepository

interface HawkRepository : CrudRepository<Hawk, Long> {
    fun findByName(name: String): Hawk
    fun findAllByNameLike(name: String, pageable: Pageable? = null): List<Hawk>
    fun findAllByNameLikeIgnoreCaseOrColorDescriptionLikeIgnoreCaseOrBehaviorDescriptionLikeIgnoreCaseOrHabitatDescriptionLikeIgnoreCase(
            name: String?,
            colorDesc: String?,
            behaviorDesc: String?,
            habitatDesc: String?,
            pageable: Pageable? = null): List<Hawk>
}