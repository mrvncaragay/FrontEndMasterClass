// Object Oriented Programming
  // Easy to add features and functionality
  // Performant (efficient interms of memory)
  // Easy for us and other developers to eason about (a clear structure)

// Encapsulation - binding togethere the data and functions that manipulate the data.


// Object.create
  // gives you a special bond to the a defined function

  // constructor function
function createUser(name) {
  let newUser = Object.create(null) // .create() parameters is proto which enable for creating a function for newUser
  newUser.name = name;

  return newUser;
}

function Name(name) {
  this.name = name
}

Name.prototype.sayName = function() {
  console.log(this.name)
}

const name = new Name('marv');
const name1 = new Name();
//console.log(name.__proto__) // function => object
//console.log(name.__proto__ === Name.prototype) // name is an object Name is a function, but also an object that has property of prototype
// for(let prop in name) { 
//   console.log(prop)
// }
// name
// sayName

// Technical Communication and Problem Solving
class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    sayName() {
      console.log(this.name)
    }

    sayAge() {
      console.log(this.age)
    }
}

// const user1 = new User('Marv', 31);
// user1.sayAge()
// user1.sayName()

// Constructor function
function User1 (name, age) {
  this.name = name;
  this.age = age;
}

User1.prototype.sayName = function() {
  console.log(this.name);
}

User1.prototype.sayAge= function() {
  console.log(this.age);
}

const user1 = new User1('Marv', 31);
user1.sayAge();


// Delegation Oriented Design

const AuthController = {
  authenticate() {
    server.authenticate(
      [ this.username, this.password ], 
      this.handleResponse.bind(this)
      );
  },

  handleResponse(resp) {
    if(!resp.ok) this.displayError(res.msg);
  }
};

const LoginFormController = {
  // Object.assign(Object.create(AuthController), {
  //   onSubmit() {
  //     this.username = this.$username.val();
  //     this.password = this.$password.val();
  //     this.authenticate();
  //   },

  //   display(msg) {
  //     alert(msg)
  //   }
  // })
}