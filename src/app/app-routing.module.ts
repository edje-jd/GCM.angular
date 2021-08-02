import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';
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
import { PatientDetailsComponent } from './components/Patient/patient-details/patient-details.component';
import { ListHospitalisationComponent } from './components/Hospitalisation/list-hospitalisation/list-hospitalisation.component';
import { ListAnnalyseComponent } from './components/Annalyse/list-annalyse/list-annalyse.component';
import { AddAnnalyseComponent } from './components/Annalyse/add-annalyse/add-annalyse.component';
import { AddHospitalisationComponent } from './components/Hospitalisation/add-hospitalisation/add-hospitalisation.component';
import { VisiteDetailsComponent } from './components/Visite/visite-details/visite-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
 
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  
  { path: 'admin', component: BoardAdminComponent },
  {path:'listPatient',component:ListPatientComponent },
  
  {path:'addPatient', component:AddPatientComponent},
  {path:'updatePatient',component:UpdatePatientComponent},
  {path:'patient-details',component:PatientDetailsComponent},
  
  {path:'addAntecedent' , component:AddAntecedentComponent},
  {path:'listAntecedent', component:ListAntecedentComponent},
  {path:'listLocalisation', component:ListLocalisationComponent},
  {path:'addLocalisation', component:AddLocalisationComponent},
  {path:'listPhoraire', component:ListPhoraireComponent},
  {path:'addPhoraire', component:AddPhoraireComponent},
  {path:'listMedecin', component:ListMedecinComponent},
  {path:'addMedecin', component:AddMedecinComponent},
  {path:'listMedicament', component:ListMedicamentComponent},
  {path:'addMedicament' , component:AddMedicamentComponent},
  {path:'listVisite' , component:ListVisiteComponent},
  {path:'addVisite',component:AddVisiteComponent},
  {path:'visiteDetails',component:VisiteDetailsComponent},
  {path:'listSecretaire' , component:ListSecretaireComponent},
  {path:'addSecretaire', component:AddSecretaireComponent},
  {path:'listOrdonance',component:ListOrdonanceComponent},
  {path:'addOrdonance',component:AddOrdonanceComponent},
  {path:'listHospitalisation',component:ListHospitalisationComponent},
  {path:'addHospitalisation',component:AddHospitalisationComponent},
  {path:'listAnnalyse',component:ListAnnalyseComponent},
  {path:'addAnnalyse',component:AddAnnalyseComponent},
 
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
