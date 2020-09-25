import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BugListComponent} from './bug-list/bug-list.component';
import {BugResolver} from './bug.resolver';

const routes: Routes = [
  {
    path: 'bug',
    loadChildren: () => import('./create-bug/create-bug.module').then(m => m.CreateBugModule)
  }, {
    path: 'bug/:id',
    loadChildren: () => import('./create-bug/create-bug.module').then(m => m.CreateBugModule),
    resolve: {
      bug: BugResolver
    }
  }, {
    path: '', component: BugListComponent
  },
  {
    path: '**', component: BugListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
