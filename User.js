"use strict";

class User {
  #id;
  constructor(surname, firstname, email, password, id, phone_no) {
    if(this.constructor === User){
        throw new Error("User cannot be called or instantiated");
    }
    this._email = email;
    this._password = password;
    this._surname = surname;
    this._firstname = firstname;
    this._phone_no = phone_no;
    this.#id = id;
  }

  showId() {
    return this.#id;
  }
  _changeEmail(email) {
    this._email = email;
  }
  _changePassword(oldPassword, newPassword) {
    if (this._password === oldPassword) {
      this._password = newPassword;
    }
  }
  verifyLogin(email, password) {
    if (email === this._email && password === this._password) {
      return true;
    } else {
      console.log("Wrong Password or Email");
    }
  }
  _editPhone(phone) {
    this._phone_no = phone;
  }
}

class Tutor extends User {
  rating;
  _specialization;
  courses;
  constructor(surname, firstname, email, password, id, phone_no) {
    super(surname, firstname, email, password, id, phone_no);
  }

  _setSpecialization(field) {
    this._specialization = field;
  }

  setRating(val) {
    this.rating = rating;
  }

  createCourse(title, pricing, courseId) {
    const course = new Course(title, pricing, courseId);
    this.courses.push(course);
  }
}

class Learner extends User {
  courses;
  constructor(surname, firstname, email, password, id, phone_no) {
    super(surname, firstname, email, password, id, phone_no);
  }
  //
}

class Admin extends User {
  #isAdmin;
  constructor(surname, firstname, email, password, id, phone_no) {
    super(surname, firstname, email, password, id, phone_no);
  }

  #setStatus() {
    this.#isAdmin = this.#isAdmin ? false : true;
  }

  showStatus() {
    return this.#isAdmin;
  }
}

// // console.log(Tutor);
// const kiln = new Tutor(
//   "joe",
//   "johnson",
//   "doelio@gmail.com",
//   "1234",
//   12,
//   9078232323
// );
// console.log(kiln);
