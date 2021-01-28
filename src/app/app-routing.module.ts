import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUpdateTaskComponent } from './create-update-task/create-update-task.component';
import { DragDropContainerComponent } from './drag-drop-container/drag-drop-container.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'drag', component: DragDropContainerComponent },
  { path: 'create', component: CreateUpdateTaskComponent },
  { path: 'update/:taskId', component: CreateUpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
