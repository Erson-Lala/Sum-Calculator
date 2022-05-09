import { Injectable } from "@angular/core";


@Injectable() 

export class AddService {
  // here we will find the sum of two numbers
  addSum(n1: number, n2: number) {
    return (n1+n2)
  }
}