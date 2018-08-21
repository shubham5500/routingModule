import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.activatedRoute.snapshot.data['errorMessage'];
  }

// The main difference between resolvers and onInit is the synchronicity.

// ===> Resolver is synchronous.
// - You should use it when you need the data before the component is loaded.
// - You block the component loading.
// - You don't inject the service into the component (you can't use other methods there)


// ===> OnInit is asynchronous (in your code).
// - You should use it when there is no need for the data being available before loading the component.
// - You don't block the component loading.
// - You inject the service into the component, therefore you can use other methods from this service

}
