import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatSidenavModule, MatGridListModule, MatFormFieldModule, MatRadioModule, MatSelectModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatRippleModule, MatOptionModule, MatSlideToggleModule, MatListModule, MatPaginator, MatSort, MatTableDataSource, MatPaginatorModule, MatSortModule, MatExpansionModule, MatSnackBarModule,
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule, 
    MatDialogModule, 
    MatTableModule, 
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule ,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
   MatRippleModule,
   MatOptionModule,  
   MatSlideToggleModule ,
   MatListModule,
   MatTableModule ,
   MatPaginatorModule,
   MatSortModule,
   MatExpansionModule,
   MatSnackBarModule
     ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatSidenavModule,
   MatGridListModule,
   MatFormFieldModule ,
   MatRadioModule,
   MatSelectModule,
   MatCheckboxModule,
   MatDatepickerModule,
   MatNativeDateModule,
  MatRippleModule,
  MatOptionModule,  
  MatSlideToggleModule ,
  MatListModule,
  MatTableModule ,
  MatPaginatorModule,
  MatSortModule ,
  MatExpansionModule,
  MatSnackBarModule
   ],
})
export class CustomMaterialModule { }