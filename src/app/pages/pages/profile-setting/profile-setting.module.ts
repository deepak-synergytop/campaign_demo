import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsOverviewDialogsModule } from './components-overview-dialogs/components-overview-dialogs.module';
import { ProfileSettingRoutingModule } from './profile-setting-routing.module';
import { ProfileSettingComponent } from './profile-setting.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [ProfileSettingComponent],
  imports: [
    CommonModule,
    ProfileSettingRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    ComponentsOverviewDialogsModule,
    IconModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class ProfileSettingModule {
}

