import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AddPatientComponent } from './components/Patient/add-patient/add-patient.component';
import { ListPatientComponent } from './components/Patient/list-patient/list-patient.component';
import { AddAntecedentComponent } from './components/Antecedent/add-antecedent/add-antecedent.component';
import { ListAntecedentComponent } from './components/Antecedent/list-antecedent/list-antecedent.component';
import { ListLocalisationComponent } from './components/Localisation/list-localisation/list-localisation.component';
import { AddLocalisationComponent } from './components/Localisation/add-localisation/add-localisation.component';
import { ListPhoraireComponent } from './components/PHoraire/list-phoraire/list-phoraire.component';
import { AddPhoraireComponent } from './components/PHoraire/add-phoraire/add-phoraire.component';
import { ListMedecinComponent } from './components/Medecin/list-medecin/list-medecin.component';
import { AddMedecinComponent } from './components/Medecin/add-medecin/add-medecin.component';
import { ListMedicamentComponent } from './components/Medicament/list-medicament/list-medicament.component';
import { AddMedicamentComponent } from './components/Medicament/add-medicament/add-medicament.component';
import { ListVisiteComponent } from './components/Visite/list-visite/list-visite.component';
import { ListSecretaireComponent } from './components/Secretaire/list-secretaire/list-secretaire.component';
import { AddSecretaireComponent } from './components/Secretaire/add-secretaire/add-secretaire.component';
import { AddVisiteComponent } from './components/Visite/add-visite/add-visite.component';
import { ListOrdonanceComponent } from './components/Ordonance/list-ordonance/list-ordonance.component';
import { AddOrdonanceComponent } from './components/Ordonance/add-ordonance/add-ordonance.component';
import { UpdatePatientComponent } from './components/Patient/update-patient/update-patient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBareComponent } from './components/nav and sideBare/side-bare/side-bare.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider'
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PatientDetailsComponent } from './components/Patient/patient-details/patient-details.component';
import { ListHospitalisationComponent } from './components/Hospitalisation/list-hospitalisation/list-hospitalisation.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ListAnnalyseComponent } from './components/Annalyse/list-annalyse/list-annalyse.component';
import { AddAnnalyseComponent } from './components/Annalyse/add-annalyse/add-annalyse.component';
import { AddHospitalisationComponent } from './components/Hospitalisation/add-hospitalisation/add-hospitalisation.component';
import { VisiteDetailsComponent } from './components/Visite/visite-details/visite-details.component';
import { UpdateAntecedentComponent } from './components/Antecedent/update-antecedent/update-antecedent.component';
import { UpdateMedicamentComponent } from './components/Medicament/update-medicament/update-medicament.component';
import { UpdateMedecinComponent } from './components/Medecin/update-medecin/update-medecin.component';
import { MedecinDetailsComponent } from './components/Medecin/medecin-details/medecin-details.component';
import { UpdateOrdonanceComponent } from './components/Ordonance/update-ordonance/update-ordonance.component';
import { OrdonanceDetailsComponent } from './components/Ordonance/ordonance-details/ordonance-details.component';
import { UpdateHospitalisationComponent } from './components/Hospitalisation/update-hospitalisation/update-hospitalisation.component';
import { DetailsHospitalisationComponent } from './components/Hospitalisation/details-hospitalisation/details-hospitalisation.component';
import { UpdateAnnalyseComponent } from './components/Annalyse/update-annalyse/update-annalyse.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UpdateVisiteComponent } from './components/Visite/update-visite/update-visite.component'; 
import { MatTableModule } from '@angular/material/table' ;
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

import { MatTreeModule } from '@angular/material/tree';
import { ExempleComponent } from './components/Visite/exemple/exemple.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import {MatGridListModule} from '@angular/material/grid-list';
import { DossierPatientComponent } from './components/DosdierPatient/dossier-patient/dossier-patient.component'; 
import { MatNativeDateModule } from '@angular/material/core';
import { DosierDetailComponent } from './components/DosdierPatient/dosier-detail/dosier-detail.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AnnalyseDetailComponent } from './components/Annalyse/annalyse-detail/annalyse-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    
    BoardUserComponent,
    
    AddPatientComponent,
    
    ListPatientComponent,
    
    AddAntecedentComponent,
    
    ListAntecedentComponent,
    
    ListLocalisationComponent,
    
    AddLocalisationComponent,
    
    ListPhoraireComponent,
    
    AddPhoraireComponent,
    
    ListMedecinComponent,
    
    AddMedecinComponent,
    
    ListMedicamentComponent,
    
    AddMedicamentComponent,
    
    ListVisiteComponent,
    
    ListSecretaireComponent,
    
    AddSecretaireComponent,
    
    AddVisiteComponent,
    
    ListOrdonanceComponent,
    
    AddOrdonanceComponent,
    
    UpdatePatientComponent,
    
    SideBareComponent,
    
    PatientDetailsComponent,
    
    ListHospitalisationComponent,
    
    ListAnnalyseComponent,
    
    AddAnnalyseComponent,
    
    AddHospitalisationComponent,
    
    VisiteDetailsComponent,
    
    UpdateAntecedentComponent,
    
    UpdateMedicamentComponent,
    
    UpdateMedecinComponent,
    
    MedecinDetailsComponent,
    
    UpdateOrdonanceComponent,
    
    OrdonanceDetailsComponent,
    
    UpdateHospitalisationComponent,
    
    DetailsHospitalisationComponent,
    
    UpdateAnnalyseComponent,
    
    UpdateVisiteComponent,
    
    ExempleComponent,
    
    DossierPatientComponent,
    
    DosierDetailComponent,
    
    AnnalyseDetailComponent,
    
    
    
    
  ],
  entryComponents:[HomeComponent,AddVisiteComponent,ExempleComponent],
  imports: [
    MatNativeDateModule,
    MatSnackBarModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatPaginatorModule,
    
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
    MatSortModule,
    MatTreeModule,
    MatInputModule,
    MatRadioModule,

  

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
