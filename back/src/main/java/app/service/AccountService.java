package app.service;

import org.springframework.stereotype.Service;
import app.rest.model.User;
import app.rest.model.UserRequest;

@Service
public class AccountService {

    public AccountService(){
    }

    public void displayUserInfo(UserRequest request) {
        System.out.println(request.toString());
    }
}
