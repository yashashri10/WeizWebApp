//New admin plugins
import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatCardModule, MatSliderModule, MatTabsModule, MatCheckboxModule, MatDialogModule,
  MatDatepickerModule, MatButtonToggleModule, MatNativeDateModule, MatSelectModule, MatRadioModule, MatGridListModule, MatInputModule, MatChipsModule, MatFormFieldModule,
  MatProgressSpinnerModule, MatAutocompleteModule, MatPaginatorModule, MatExpansionModule, MatTableModule, MatMenuModule, MatIconModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [MatSidenavModule, MatToolbarModule, MatListModule, MatButtonModule, MatCardModule, MatSliderModule, MatTabsModule, MatDialogModule,
    MatCheckboxModule, MatGridListModule, MatDatepickerModule, MatButtonToggleModule, MatNativeDateModule, MatSelectModule, MatRadioModule,
    MatInputModule, MatChipsModule, MatProgressSpinnerModule, MatAutocompleteModule, MatPaginatorModule, MatFormFieldModule, MatExpansionModule, MatTableModule, MatMenuModule, MatIconModule],
  exports: [MatSidenavModule, MatGridListModule, MatDialogModule, MatToolbarModule, MatListModule, MatButtonModule, MatCardModule,
    MatSliderModule, MatTabsModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatButtonToggleModule, MatNativeDateModule, MatSelectModule,
    MatRadioModule, MatChipsModule, MatProgressSpinnerModule, MatAutocompleteModule, MatPaginatorModule, MatFormFieldModule, MatExpansionModule, MatTableModule, MatMenuModule, MatIconModule],
  providers: []
})
export class MaterialModule { }