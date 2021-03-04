package rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import rest.model.UserRequest;
import service.AccountService;

@RestController
public class AccountController {

    private AccountService accountService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/register")
    public void register(@RequestBody(required = true) UserRequest request){
      System.out.print("YOUPI");
        //  this.accountService.displayUserInfo(request);
    }

    @PostMapping("user/login")
    public void login(){

    }
}