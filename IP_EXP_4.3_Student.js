class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

//Student (inherits from Person)
class Student extends Person {
    constructor(name, age, rollNo, course) {
   
        super(name, age);
      
        if (rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }
        this.rollNo = rollNo;
        this.course = course;
    }

    // Overriding the printDetails method from Person
    printDetails() {
        super.printDetails();
        console.log(`Roll No: ${this.rollNo}, Course: ${this.course}`);
    }

    updateRollNo(newRollNo) {
        if (newRollNo <= 0) {
            throw new Error("Invalid roll number. Roll number must be greater than zero.");
        }
        this.rollNo = newRollNo;
    }
}


try {
    const student1 = new Student('Alice', 20, 101, 'Computer Science');
    
    student1.printDetails();  

    student1.updateRollNo(0); 
} catch (error) {
    console.error(error.message);  
}

try {
    const student2 = new Student('Bob', 21, 0, 'Physics');  
} catch (error) {
    console.error(error.message);  
}
