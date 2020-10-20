import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditCampaignComponent } from './edit-campaign.component';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';


const routes: VexRoutes = [
  {
    path: '',
    component: EditCampaignComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCampaignRoutingModule {
}
