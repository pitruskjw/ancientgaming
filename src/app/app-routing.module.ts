import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxDetailsComponent } from './box/components/box-details/box-details.component';
import { BoxGridComponent } from './box/components/box-grid/box-grid.component';
import { AuthenticationGuard } from './guards/authentication/authentication.guard';
import { BoxDetailResolver } from './guards/box-detail/box-detail.resolver';
import { HomeComponent } from './home/home.component';
import { RoutingUrlConst } from './shared/routing-url-const';

const routes: Routes = [
  {
    path: RoutingUrlConst.boxGrid,
    component: BoxGridComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: `${RoutingUrlConst.boxGrid}/:id`,
    component: BoxDetailsComponent,
    canActivate: [AuthenticationGuard],
    resolve: { boxDetails: BoxDetailResolver },
  },
  {
    path: RoutingUrlConst.home,
    component: HomeComponent,
  },
  { path: '', component: BoxGridComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
