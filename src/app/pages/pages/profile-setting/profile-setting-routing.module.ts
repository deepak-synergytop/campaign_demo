import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileSettingComponent } from './profile-setting.component';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: ProfileSettingComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileSettingRoutingModule {
}
