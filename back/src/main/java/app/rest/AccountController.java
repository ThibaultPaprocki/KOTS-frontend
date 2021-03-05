package app.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import app.rest.model.UserRequest;
import app.service.AccountService;

@CrossOrigin
@RestController
public class AccountController {

    private AccountService accountService;

    public AccountController(){
        this.accountService = new AccountService();
    }

    @PostMapping("register")
    public void register(@RequestBody(required = true) UserRequest request){
     this.accountService.displayUserInfo(request);
    }

    @PostMapping("user/login")
    public void login(){
     System.out.print("Hello World");
    }
}