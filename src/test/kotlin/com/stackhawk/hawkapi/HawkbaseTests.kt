package com.stackhawk.hawkapi

import com.fasterxml.jackson.databind.ObjectMapper
import com.stackhawk.hawkapi.entities.GenderEnum
import com.stackhawk.hawkapi.entities.Hawk
import com.stackhawk.hawkapi.entities.SizeEnum
import org.junit.jupiter.api.Test


class HawkbaseTests {

    @Test
    fun generateJson() {

        /*
        * Male
Length: 17.7-22.1 in (45-56 cm)
Weight: 24.3-45.9 oz (690-1300 g)
Wingspan: 44.9-52.4 in (114-133 cm)
Female
Length: 19.7-25.6 in (50-65 cm)
Weight: 31.8-51.5 oz (900-1460 g)
Wingspan: 44.9-52.4 in (114-133 cm)
        * */

        val redTail = Hawk(name = "Red Tail",
                size = SizeEnum.LARGE,
                gender = GenderEnum.MALE,
                lengthBegin = 45,
                lengthEnd = 56,
                weightBegin = 690,
                weightEnd = 1300,
                wingspanBegin = 114,
                wingspanEnd = 133)

        val jsonStr = ObjectMapper().writeValueAsString(redTail)

        println(jsonStr)
    }

}