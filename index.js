// Abstraction: Employee is an abstract class that defines the basic properties and methods of an employee
class Employee {
    constructor(name, age, position) {
      this.name = name;
      this.age = age;
      this.position = position;
    }
    // Abstract method that needs to be implemented by all subclasses
    getSalary() {
      throw new Error('Abstract method, must be implemented by subclass');
    }
  }
  
  // Encapsulation: FullTime and PartTime are two concrete classes that encapsulate the properties and methods of an employee
  class FullTime extends Employee {   // Inheritance: FullTime(SubClass) | Employee(SuperClass)

    constructor(name, age, position, experience, salary) {   // Input variable data Employee (constructor)
    // value by SuperClass (Employee)
        super(name, age, position);                            
    // value by SubClass (FullTime)
      this.salary = salary;                                  
      this.experience = experience;
    }
    // Method show Detail Info-Employee 
    Detail(){                                                    
        return "Name: "+this.name+"\nAge: "+this.age+"\nStatus/Position: FullTime"+"/"+this.position+"\nExperience: "
        +this.experience;
    }
    // Method Calculate Salary/Bonus/StockGrant
    AverageTotalCompensation(){
        this.Bonus = this.salary*0.07;
        this.StockGrant = this.salary*0.25;
        let AverageSalary = this.salary+this.Bonus+this.StockGrant/12;
        return "Average Total Compensation: ฿"+AverageSalary.toFixed(2);
    }
    // Method Polymorphism (use) || Show overall Detail Salary  
    getSalary() {
      return "\n------------------\n"
      +"Salary/month: ฿"+this.salary+"\nBonus/month: ฿"+this.Bonus.toFixed(2)+"\nStockGrant/year: ฿"+this.StockGrant.toFixed(2);
    }
  }
  // Encapsulation: FullTime and PartTime are two concrete classes that encapsulate the properties and methods of an employee
  class PartTime extends Employee {  // Inheritance: PartTime(SubClass) | Employee(SuperClass)
    constructor(name, age, position, hoursWorked, hourlyRate) {    // Input variable data Employee (constructor)
      // value by SuperClass (Employee)
      super(name, age, position);
      // value by SubClass (PartTime)
      this.hoursWorked = hoursWorked;
      this.hourlyRate = hourlyRate;
    }
    // Method show Detail Info-Employee 
    Detail(){
        return "Name: "+this.name+"\nAge: "+this.age+"\nStatus/Position: PartTime"+"/"+this.position;
    }
    // Method Polymorphism (use) || Show overall Detail Salary 
    getSalary() {
      return "------------------\n"
      +"Salary/month: ฿"+this.hoursWorked * this.hourlyRate;
    }
  }
  // Create Object 

  const EM1 = new FullTime('VEERAPAT', 30, "Software Engineer",5,25000);
  console.log(`Infomation Employee: \n${EM1.Detail()} \n${EM1.AverageTotalCompensation()} ${EM1.getSalary()} \n`);

  const EM2 = new PartTime('PONGPAK', 34, "Automation(PLC)", 750,10);
  console.log(`Infomation Employee: \n${EM2.Detail()} \n${EM2.getSalary()} \n`);
   

  
