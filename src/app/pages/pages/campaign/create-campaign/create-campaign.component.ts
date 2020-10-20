import { Component, OnInit } from '@angular/core';
import icSearch from '@iconify/icons-ic/twotone-search';
import icPhoneInTalk from '@iconify/icons-ic/twotone-phone-in-talk';
import icMail from '@iconify/icons-ic/twotone-mail';
import { stagger60ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';

@Component({
  selector: 'vex-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class CreateCampaignComponent implements OnInit {

  icSearch = icSearch;
  icPhoneInTalk = icPhoneInTalk;
  icMail = icMail;

  constructor() { }

  ngOnInit() {
  }

}
