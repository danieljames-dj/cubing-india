import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutes } from './app-routes';

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
    {
      path: "",
      redirectTo: AppRoutes[0].path,
      pathMatch: "full"
    }, ...AppRoutes], {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }