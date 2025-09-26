export interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any; // index signature for additional properties
}

const teacher1: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher1);

// should print
// Object
// contract: false bgt nmjyt789     qa` 1\
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

interface Directors extends Teacher{
    numberOfReports: number
}


// Example usage:
const director1: Directors = {
  firstName: "Alice",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "Cape Town",
  numberOfReports: 5,
  contract: false, // additional property
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher:printTeacherFunction = (firstName, lastName) =>{
    return firstName[0]+ '.' + lastName;
};

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

// Interface for the class instance
interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements IStudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}