package com.stackhawk.hawkapi.entities

import javax.persistence.*

enum class GenderEnum {
    MALE,
    FEMALE
}

enum class SizeEnum{
    SMALL,
    MEDIUM,
    LARGE
}

@Entity
data class Hawk(
        @Id
        @SequenceGenerator(name = "hawk", sequenceName = "seq_hawk_id", allocationSize = 1)
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "hawk")
        var id: Long? = null,
        val name: String,
        val gender: GenderEnum,
        val size: SizeEnum,
        val wingspanBegin: Long,
        val wingspanEnd: Long,
        val weightBegin: Long,
        val weightEnd: Long,
        val lengthBegin: Long,
        val lengthEnd: Long,
        val colorDescription: String = "",
        val behaviorDescription: String = "",
        val habitatDescription: String = "",
        val pictureUrl: String = ""
)
