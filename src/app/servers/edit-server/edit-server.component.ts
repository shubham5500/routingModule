import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.activatedRoute.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.activatedRoute.queryParams.subscribe(
      (queryParams)=>{
        this.allowEdit = +queryParams['allowEdit'] === 1 ? true: false; 
      }
    )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute,
      // queryParamsHandling: 'preserve'
    })
  }

  canDeactivate(){ 
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name ||  this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you want to discard the changes?');
    }else{
      return true;
    }
  } 
    // this is canDeactivate() method comes from the interface CanComponentDeactivate which we've implemented in         this class..
    // CanComponentDeactivate has the logic of this interface, this interface has a method which canDeactivate() and in that same service there is a class which wraps the CanDeactivate<CanComponentDeactivate>  <-{this is where it wraps our interface to CanDeactivate} interface comes from @angular/core which return the canDeactivated() method which in this particular class we implemnet the logic

}
