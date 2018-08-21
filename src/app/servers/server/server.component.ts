import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  allowEdit: any;

  constructor(private serversService: ServersService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params)=>{
        this.server = this.serversService.getServer(parseInt(params['id']));
      }
    );
  }

  onEdit(){
    const activatedServerId = this.activatedRoute.snapshot.params['id'];
    this.router.navigate(['edit'] , {
      relativeTo: this.activatedRoute, 
      queryParamsHandling: 'preserve',
      // queryParamsHandling: 'merge',
      // queryParams: {
      //   abc: true  
      // } 
      // to merge the added abc:true params with the old params coming from servers component allowEdit=1 or 0
    })
  }

}
