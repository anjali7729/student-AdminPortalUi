import { CUSTOM_ELEMENTS_SCHEMA , NgModule} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatCheckboxModule} from '@angular/material/checkbox';

import { MatDatepickerModule} from '@angular/material/datepicker';

import { MatFormFieldModule} from '@angular/material/form-field';

import { MatInputModule} from '@angular/material/input';

import { MatRadioModule} from '@angular/material/radio';

import { MatNativeDateModule } from '@angular/material/core';

import { MatSelectModule} from '@angular/material/select';

import { MatSliderModule} from '@angular/material/slider';

import { MatSlideToggleModule} from '@angular/material/slide-toggle';

import {  MatMenuModule} from '@angular/material/menu';

import {  MatSidenavModule} from '@angular/material/sidenav';

import { MatCardModule } from '@angular/material/card';

import { MatDividerModule} from '@angular/material/divider';

import { MatExpansionModule } from '@angular/material/expansion';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatBadgeModule } from '@angular/material/badge';

import { MatChipsModule } from '@angular/material/chips';

import { MatIconModule } from '@angular/material/icon';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatRippleModule } from '@angular/material/core';

// Material Popups & Modals

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MatDialogModule } from '@angular/material/dialog';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTooltipModule } from '@angular/material/tooltip';

// Material Data tables

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSortModule } from '@angular/material/sort';

import { MatTableModule } from '@angular/material/table';

import { TopNavComponent } from './layout/top-nav/top-nav.component';



import { StudentsComponent } from './students/students.component';

import { FormsModule } from '@angular/forms';

import { ViewStudentComponent } from './students/view-student-old/view-student.component';





//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';





//import {  MatToolbarModule} from '@angular/material/core/datetime';



@NgModule({

  declarations: [

    AppComponent,

    TopNavComponent,

    StudentsComponent,

    ViewStudentComponent

  ],

  imports: [

    FormsModule,

    BrowserModule,

    AppRoutingModule,

    BrowserAnimationsModule,

    MatAutocompleteModule,

    MatCheckboxModule,

    MatDatepickerModule,

   MatNativeDateModule,

    MatFormFieldModule,

    MatInputModule,

    MatRadioModule,

    MatSelectModule,

    MatSliderModule,

    MatSlideToggleModule,

    MatMenuModule,

    MatSidenavModule,

    MatToolbarModule,

    MatCardModule,

    MatDividerModule,

    MatExpansionModule,

    MatGridListModule,

    MatButtonModule,

    MatButtonToggleModule,

    MatBadgeModule,

    MatChipsModule,

    MatIconModule,

    MatProgressSpinnerModule,

    MatProgressBarModule,

    MatRippleModule,

    MatBottomSheetModule,

    MatDialogModule,

    MatSnackBarModule,

    MatTooltipModule,

    MatPaginatorModule,

    MatSortModule,

    MatTableModule,

    HttpClientModule

  ],

  schemas : [

    CUSTOM_ELEMENTS_SCHEMA

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }