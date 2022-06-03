import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePath } from './shared/enum/route-path';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: RoutePath.Root,
    pathMatch: 'full',
    redirectTo: RoutePath.Notifier,
  },
  {
    path: RoutePath.Root,
    component: LayoutComponent,
    children: [
      {
        path: RoutePath.Notifier,
        loadChildren: () => import('./notifier/notifier.module').then(({ NotifierModule }) => NotifierModule),
      },
    ],
  },
  {
    path: RoutePath.Wildcard,
    redirectTo: RoutePath.Notifier,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
