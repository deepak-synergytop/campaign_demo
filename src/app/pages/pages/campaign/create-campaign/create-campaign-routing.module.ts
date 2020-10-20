import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateCampaignComponent } from './create-campaign.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: CreateCampaignComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCampaignRoutingModule {
}
