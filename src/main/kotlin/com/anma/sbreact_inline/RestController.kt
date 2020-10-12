package com.anma.sbreact_inline

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class RestController {

    @GetMapping("/rest/api/v1/test")
    fun getTestRestData(): List<Profile> {
        val profile1 = Profile(1, "Petro")
        val profiles = listOf(profile1, Profile(2, "Vasyl"))
        return profiles
    }
}

data class Profile (val id: Int, val name: String)