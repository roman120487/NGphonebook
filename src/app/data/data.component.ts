import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  persons: Array<any>;
  id: number;
  FName: string;
  LName: string;
  phone: any;
  search: string;
  index: number;
  // arrow: boolean;
  sortFNameValue: boolean = true;
  sortLNameValue: boolean = true;
  sortPhoneValue: boolean = true;

  constructor() {
    this.persons = [
      {
        id: 1,
        FName: 'Roman',
        LName: 'Kostiv',
        phone: '0979455318'
      },
      {
        id: 2,
        FName: 'Vasya',
        LName: 'Lipkovskiy',
        phone: '0995553336'
      },
      {
        id: 3,
        FName: 'Sveta',
        LName: 'Kukurudza',
        phone: '0975456736'
      },
      {
        id: 4,
        FName: 'Petro',
        LName: 'Pisun',
        phone: '09123456789'
      }
    ];
  }

  ngOnInit() {
  }

  addPhone(): void {
    const newPerson: IPerson = new Person(3, this.FName, this.LName, this.phone);
    newPerson.id = this.persons.slice(-1)[0].id + 1;
    this.persons.push(newPerson)
    console.log(this.persons);
    this.FName = '';
    this.LName = '';
    this.phone = '';
  }

  editePhone(person, i): void {
    this.FName = person.FName;
    this.LName = person.LName;
    this.phone = person.phone;
    this.index = i;
  }

  savePhone(): void {
    this.persons[this.index].FName = this.FName;
    this.persons[this.index].LName = this.LName;
    this.persons[this.index].phone = this.phone;
  }
  deletePhone(i): void {
    this.persons.splice(i, 1);
  }
  sortFName(): void {
    // this.persons.sort();
    if (this.sortFNameValue == true) {
      this.sortFNameValue = false;
    } else { this.sortFNameValue = true; }

  }

  sortLName(): void {
    // this.persons.sort();
    if (this.sortLNameValue == true) {
      this.sortLNameValue = false;
    } else { this.sortLNameValue = true; }
  }

  sortPhone(): void {
    // this.persons.sort();
    if (this.sortPhoneValue == true) {
      this.sortPhoneValue = false;
    } else { this.sortPhoneValue = true; }
  }

}

interface IPerson {
  id: number;
  FName: string;
  LName: string;
  phone: number;
}

class Person implements IPerson {
  constructor(
    public id: number,
    public FName: string,
    public LName: string,
    public phone: number
  ) { }
}

