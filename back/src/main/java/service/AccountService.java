package service;

import rest.model.User;
import rest.model.UserRequest;

public class AccountService {
    public void displayUserInfo(UserRequest request) {
        User userTest = new User(1,request.getUsername(), request.getPassword());
        System.out.print(userTest);
    }
}
