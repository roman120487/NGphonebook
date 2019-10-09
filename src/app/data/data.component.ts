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

