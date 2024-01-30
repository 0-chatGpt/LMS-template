"use strict";

class Course {
  learners;
  tutor;

  constructor(title, pricing, courseId) {
    this.title = title;
    this.pricing = pricing;
    this.courseId = courseId;
  }

  setPricing(price) {
    this.pricing = price;
  }

  addLearnerById(id) {
    this.learners.push(id);
  }

  removeLearner(id) {
    this.learners.splice(
      this.learners.findIndex((item) => item === id),
      1
    );
  }

  addTutorById(id) {
    this.tutor.push(id);
  }
}

class Enroll {
  enrolType;
  paymentStatus;
  date;
  constructor() {
    this.date = new Date().toLocaleDateString();
  }
  enroll(course, LearnerId) {
    course.addLearnerById(LearnerId);
  }

  payCourse(course, amount) {
    if (course.pricing === amount && !this.paymentStatus) {
      this.paymentStatus = true;
    } else if (this.paymentStatus) {
      console.log("already paid for");
      return true;
    }
  }
}
