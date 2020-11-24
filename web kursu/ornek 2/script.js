function Person(name){
    this.name = name;
}

Person.prototype.Introduce = function(){
    console.log("hello my name is "+this.name);
}


function Teacher(name,branch){
    Person.call(this,name);
    this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.Teach = function(){
    console.log("ı teach "+this.branch);
}


function Student(name,number){
    Person.call(this,name);
    this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Teacher.prototype.study = function(){
    console.log("ı study hard "+this.number);
}


function HeadMaster(name,branch){
    Teacher.call(this,name,branch);
}

HeadMaster.prototype = Object.create(Teacher.prototype);
HeadMaster.prototype.constructor = HeadMaster;

