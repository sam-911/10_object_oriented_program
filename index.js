#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome to the Student Portal!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "whom would you like to interact with?",
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("you approach the staff room. Please feel free to as any question.");
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's Name you wish to engage with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name} Nice to meet you!`);
                console.log("New Student added");
                console.log("Current Student List");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name} Nice to see you again!`);
                console.log("Existing Student List:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Exiting The Student Portal...!");
            process.exit();
        }
    } while (true);
};
programStart(persons);
