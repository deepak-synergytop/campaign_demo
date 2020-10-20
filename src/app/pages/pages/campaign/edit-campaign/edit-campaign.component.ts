import { Component, OnInit } from '@angular/core';
import { stagger60ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class EditCampaignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
