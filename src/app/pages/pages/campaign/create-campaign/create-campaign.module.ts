import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ComponentsOverviewDialogsModule } from './components-overview-dialogs/components-overview-dialogs.module';
import { CreateCampaignRoutingModule } from './create-campaign-routing.module';
import { CreateCampaignComponent } from './create-campaign.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [CreateCampaignComponent],
  imports: [
    CommonModule,
    CreateCampaignRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    //ComponentsOverviewDialogsModule,
    IconModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class CreateCampaignModule {
}

