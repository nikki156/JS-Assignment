class User {
    constructor(name, age,email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.LuCoins=0;
    this.courses = [];
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
        }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
        }
    getDetails(){
        console.log(`Name of the user is ${this.name}, email is ${this.email}`);
        return this;
        }

}

class Moderator extends User{  
        constructor(name,age,email){
            super(name,age,email);
            this.Lucoins=0;
            
        }
        addCoins(user){
        user.LuCoins++;
        console.log(`${user.name} has ${user.LuCoins} coins`);
        return this;
    }
        removeCoins(user){
        user.LuCoins--;
        console.log(`${user.name} has ${user.LuCoins} coins`);
        return this;
        }
}  

class Admin extends Moderator{
addCourse(user,course){
    user.courses.push(course);
    console.log(user);
}
deleteCourse(user,course){
    user.courses.pop(course);
    console.log(user);
}
}



let user1 = new User('Tokyo',21,'tokyo@gmail.com')
let user2 = new User('Rio',22,'rio@gmai.com')
let mod = new Moderator('Berlin',26,'berlin@gmail.com');
let admin = new Admin('Professor',24,'prof@gmail.com');

let users = [user1,user2,mod,admin];

user1.login();
user2.login();
user1.logout();
user2.logout();


mod.addCoins(user1);
mod.addCoins(user2);
mod.removeCoins(user1);

admin.addCourse(user1,"Javascript")
admin.addCourse(user1,"Blockchain")
admin.addCourse(user2,"Blockchain")
admin.deleteCourse(user1,"Javascript")
admin.addCourse(user2,"Python")


users.forEach(element => {
     console.log(element);
});
