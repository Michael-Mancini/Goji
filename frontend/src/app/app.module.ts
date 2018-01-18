import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import { UIRouterModule } from '@uirouter/angular';
// Material
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
// PrimeNG
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { SpinnerModule } from 'primeng/spinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
// Custom
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsComponent } from './components/forms/forms.component';
import { AboutComponent } from './components/about/about.component';
import { DisplayComponent, DialogOverview } from './components/display/display.component';
import { PrimengComponent } from './components/primeng/primeng.component';
import { InitialPathComponent } from './components/initial-path/initial-path.component';
import { MenubarComponent } from './components/primeng/menubar/menubar.component';
import { ChartComponent } from './components/primeng/chart/chart.component';
import { FormComponent } from './components/primeng/form/form.component';
import { InfoComponent } from './components/primeng/info/info.component';
import { PicklistComponent } from './components/primeng/picklist/picklist.component';
import { TableComponent } from './components/primeng/table/table.component';

const appRoutes: Routes = [
  {path:'', component:InitialPathComponent},
  {path:'material', component:NavbarComponent},
  {path:'primeng', component:PrimengComponent, children: [
    {path: '', component:InfoComponent},
    {path: 'info', component:InfoComponent},
    {path: 'chart', component:ChartComponent},
    {path: 'form', component:FormComponent},
    {path: 'picklist', component:PicklistComponent},
    {path: 'table', component:TableComponent}
  ]}
];

// UI Router states
let formState = { name: 'form', url: '/form', component: FormComponent};
let chartState = { name: 'chart', url: '/chart', component: ChartComponent};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormsComponent,
    AboutComponent,
    DisplayComponent,
    DialogOverview,
    PrimengComponent,
    InitialPathComponent,
    MenubarComponent,
    ChartComponent,
    FormComponent,
    InfoComponent,
    PicklistComponent,
    TableComponent
  ],
  entryComponents: [DialogOverview],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    //UIRouterModule.forRoot({states: [formState, chartState], useHash: true}),
    //PrimeNG
    MenuModule,
    MenubarModule,
    DropdownModule,
    ButtonModule,
    ChartModule,
    SpinnerModule,
    InputTextareaModule,
    CalendarModule,
    FileUploadModule,
    DialogModule,
    PickListModule,
    TableModule,
    //Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule  
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }