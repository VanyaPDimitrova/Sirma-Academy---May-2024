class DepartmentSalaries {
  #salaries = [];

  addSalary(salary) {
    this.#salaries.push(salary);
  }
  get averageSalary() {
    let sum = this.#salaries.reduce((acc, el) => acc + Number(el), 0);
    let length = this.#salaries.length;

    return (sum/length).toFixed(2);
  } 
}

class Company {
  departments = {};
  #departmentsSalaries = {}

  addEmployee(name, salary, position, department) {
    if (this.#isEmployeeHired(name, salary, position, department)) {
      if (this.departments[department]) {
        this.departments[department].push({ name, salary, position });
        this.#departmentsSalaries[department].addSalary(salary);

      } else {
        this.departments[department] = [{ name, salary, position }];
        this.#departmentsSalaries[department] = new DepartmentSalaries();
        this.#departmentsSalaries[department].addSalary(salary);
      }

      return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
  }

  bestDepartment() {
    let highestAverageSalary = 0;
    let bestDepartment = '';

    for (const department in this.#departmentsSalaries) {
      let averageSalary = this.#departmentsSalaries[department].averageSalary;

      if (averageSalary > highestAverageSalary) {
        highestAverageSalary = averageSalary;
        bestDepartment = department;
      }
    }

    let bestDepartmentPrint = `Best Department is: ${bestDepartment}`;
    let averageSalaryPrint = `Average salary: ${highestAverageSalary}`;
    let employeesPrint = this.#employeesStringified(bestDepartment);

    return `${bestDepartmentPrint}\n${averageSalaryPrint}\n${employeesPrint.join('\n')}`
  }

  #sortDepartmentEmployees(department) {
    let employees = this.departments[department];

    employees.sort((a, b) => {
      return b.salary == a.salary ? a.name.localeCompare(b.name) : b.salary - a.salary;
    });

    return employees;
  }

  #employeesStringified(department) {
    let employees = this.#sortDepartmentEmployees(department);

    return employees.map(el => `${el.name} ${el.salary} ${el.position}`);
  }

  #isEmployeeHired(name, salary, position, department) {
    if (this.#isInvalid(name) 
      || this.#isInvalid(salary) 
      || this.#isInvalid(position) 
      || this.#isInvalid(department)
      || Number(salary) < 0
    ) {
      throw new Error("Invalid input!");
    }
    
    return true;
  }
  
  #isInvalid(param) {
    return ['', null, undefined].includes(param);
  }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Anton", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
