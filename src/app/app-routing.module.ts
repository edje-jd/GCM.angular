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
import { UpdateAntecedentComponent } from './components/Antecedent/update-antecedent/update-antecedent.component';
import { UpdateMedicamentComponent } from './components/Medicament/update-medicament/update-medicament.component';
import { UpdateMedecinComponent } from './components/Medecin/update-medecin/update-medecin.component';
import { MedecinDetailsComponent } from './components/Medecin/medecin-details/medecin-details.component';
import { OrdonanceDetailsComponent } from './components/Ordonance/ordonance-details/ordonance-details.component';
import { UpdateOrdonanceComponent } from './components/Ordonance/update-ordonance/update-ordonance.component';
import { UpdateHospitalisationComponent } from './components/Hospitalisation/update-hospitalisation/update-hospitalisation.component';
import { DetailsHospitalisationComponent } from './components/Hospitalisation/details-hospitalisation/details-hospitalisation.component';
import { UpdateAnnalyseComponent } from './components/Annalyse/update-annalyse/update-annalyse.component';
import { UpdateVisiteComponent } from './components/Visite/update-visite/update-visite.component';
import { DossierPatientComponent } from './components/DosdierPatient/dossier-patient/dossier-patient.component';
import { DosierDetailComponent } from './components/DosdierPatient/dosier-detail/dosier-detail.component';
import { AnnalyseDetailComponent } from './components/Annalyse/annalyse-detail/annalyse-detail.component';
import { PatientalComponent } from './components/Patient/patiental/patiental.component';
import { ExempleComponent } from './components/Visite/exemple/exemple.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
 {path:'DossierPatient',component: DossierPatientComponent},
 {path:'Dosier-Detail',component:DosierDetailComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  
  { path: 'admin', component: BoardAdminComponent },
  {path:'listPatient',component:ListPatientComponent },
  
  {path:'addPatient', component:AddPatientComponent},
  {path:'updatePatient',component:UpdatePatientComponent},
  {path:'patient-details',component:PatientDetailsComponent},
  {path:'patiental' , component:PatientalComponent},
  
  {path:'addAntecedent' , component:AddAntecedentComponent},
  {path:'listAntecedent', component:ListAntecedentComponent},
  {path:'update-antecedent',component:UpdateAntecedentComponent},
  {path:'listLocalisation', component:ListLocalisationComponent},
  {path:'addLocalisation', component:AddLocalisationComponent},
  {path:'listPhoraire', component:ListPhoraireComponent},
  {path:'addPhoraire', component:AddPhoraireComponent},
  {path:'listMedecin', component:ListMedecinComponent},
  {path:'addMedecin', component:AddMedecinComponent},
  {path:'update-medecin',component:UpdateMedecinComponent},
  {path:'medecin-details',component:MedecinDetailsComponent},
  {path:'listMedicament', component:ListMedicamentComponent},
  {path:'addMedicament' , component:AddMedicamentComponent},
  {path:'update-medicament',component:UpdateMedicamentComponent},
  {path:'listVisite' , component:ListVisiteComponent},
  {path:'addVisite',component:AddVisiteComponent},
  {path:'update-visite' , component:UpdateVisiteComponent},
  {path:'visiteDetails',component:VisiteDetailsComponent},
  {path:'exemple', component:ExempleComponent},
 
  {path:'listSecretaire' , component:ListSecretaireComponent},
  {path:'addSecretaire', component:AddSecretaireComponent},
  {path:'listOrdonance',component:ListOrdonanceComponent},
  {path:'addOrdonance',component:AddOrdonanceComponent},
  {path:'ordonance-details',component:OrdonanceDetailsComponent},
  {path:'update-ordonance',component:UpdateOrdonanceComponent},
  {path:'listHospitalisation',component:ListHospitalisationComponent},
  {path:'addHospitalisation',component:AddHospitalisationComponent},
  {path:'update-hospitalisation',component:UpdateHospitalisationComponent},
  {path:'details-hospitalisation',component:DetailsHospitalisationComponent},
  {path:'listAnnalyse',component:ListAnnalyseComponent},
  {path:'addAnnalyse',component:AddAnnalyseComponent},
  {path:'update-annalyse',component:UpdateAnnalyseComponent},
  {path:'annalyse-detail',component:AnnalyseDetailComponent},
  {path:'board-user',component:BoardUserComponent},
  
 
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
