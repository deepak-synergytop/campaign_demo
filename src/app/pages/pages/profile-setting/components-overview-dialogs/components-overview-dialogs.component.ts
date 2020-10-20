import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import icCreditCard from '@iconify/icons-ic/baseline-credit-card';
import icBank from '@iconify/icons-ic/baseline-account-balance';

@Component({
  selector: 'vex-components-overview-dialogs',
  templateUrl: './components-overview-dialogs.component.html',
  styleUrls: ['./components-overview-dialogs.component.scss']
})
export class ComponentsOverviewDialogsComponent {
  icCreditCard = icCreditCard;
  icBank = icBank;
  result: string;

  dialogHTML =
    `<button mat-raised-button type="button" (click)="openDialog()" color="primary">Open Dialog</button>
<p *ngIf="result">You chose: {{ result }}</p>
`;

  constructor(private dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(DemoDialogComponent, {
      disableClose: false,
      width: '400px'
    }).afterClosed().subscribe(result => {
      this.result = result;
    });
  }
}

@Component({
  selector: 'vex-components-overview-demo-dialog',
  template: `
      <div mat-dialog-title fxLayout="row" fxLayoutAlign="space-between center">
          <h3>Add a credit or debit card</h3>
          <button type="button" mat-icon-button (click)="close('No answer')" tabindex="-1">
              <mat-icon [icIcon]="icClose"></mat-icon>
          </button>
      </div>

      <mat-dialog-content>
         <div class="cart_popupinner profile_popup">
            <p><label>Card number</label><input type="text" placeholder="000-000-000"></p>
            <p><label>Name on card</label><input type="text" placeholder=""></p>
            <p class="card_exp input"><label>Expiration date</label><input type="text" placeholder="MM"><input type="text" placeholder="YYYY"></p>
            <p><label>CVC number</label><input type="text" placeholder=""></p>
         </div>
      </mat-dialog-content>


      <mat-dialog-actions align="end">
          <button mat-button (click)="close('No')">Cancel</button>
          <button mat-button color="primary" (click)="close('Yes')">Add your card</button>
      </mat-dialog-actions>
  `
})
export class DemoDialogComponent {

  icClose = icClose;
  constructor(private dialogRef: MatDialogRef<DemoDialogComponent>) {

  }

  close(answer: string) {
    this.dialogRef.close(answer);
  }
}
