import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCampaignRoutingModule } from './edit-campaign-routing.module';
import { EditCampaignComponent } from './edit-campaign.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [EditCampaignComponent],
  imports: [
    CommonModule,
    EditCampaignRoutingModule,
    FlexLayoutModule,
  ]
})
export class EditCampaignModule {
}

