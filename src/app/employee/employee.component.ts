import {Component,OnInit} from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {NgForm} from '@angular/forms';
@Component({
	selector:'app-user',
	templateUrl:'./employee.component.html',
	styleUrls:['./employee.component.css']
})
export class EmployeeComponent{
	employees:Employee[];
	showForm:boolean;
	employee:Employee;
	empIndex:number;
	constructor(private employeeService:EmployeeService){
		this.showForm=false;
	}
	getEmployees(){
		this.employees=this.employeeService.getEmployees();
	}
	ngOnInit(){
		this.getEmployees();
	}
	toogleForm(){
		if(this.showForm===false){
			this.showForm=true;
		}
		else{
			this.showForm=false;
		}
	}
	getEmployee(empl,index){
		this.employee=empl;
		this.empIndex=index;
		this.toogleForm();
	}
	cancelForm(){
		this.toogleForm();
	}
	subForm(value){
		this.showForm=false;
		for(let v in value){
			if(value[v]!==''){
				if(v!=='empIndex'){
					this.employees[value.empIndex][v]=value[v];
				}
				else{
					continue;
				}
			}
		}
	}
}