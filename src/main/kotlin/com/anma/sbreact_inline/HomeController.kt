package com.anma.sbreact_inline

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HomeController {

    @GetMapping("/")
    fun getHome():String {
        return "home"
    }
}

