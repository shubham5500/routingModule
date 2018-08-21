import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanComponentDeactivateGuard } from "./servers/edit-server/can-deactivate.service";
import { ErrorPageComponent } from "./error-page/error-page.component";


const appRoutes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'users',
      component: UsersComponent,
      canActivateChild: [AuthGuard],
      children: [
        {
          path: ':id/:name',
          component: UserComponent
        }
      ]
    },
    {
      path: 'servers',
      component: ServersComponent,
      children: [
        { path: ':id', component: ServerComponent },
        { path: ':id/edit',component: EditServerComponent, canDeactivate: [CanComponentDeactivateGuard] }
      ]
    },
    {
      path: 'not-found',
      component: ErrorPageComponent,
      data: {
        errorMessage : 'Page is not found dude'
      }
    },
    {
      path: '**',
      redirectTo: '/not-found'
    }
  ]
  

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRouteModule {

}