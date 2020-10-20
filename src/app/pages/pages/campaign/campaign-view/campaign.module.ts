import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [CampaignComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    IconModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class CampaignModule {
}

