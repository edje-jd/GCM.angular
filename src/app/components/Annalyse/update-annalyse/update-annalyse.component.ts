import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annalyse } from 'src/app/model/Annalyse';
import { AnnalyseServiceService } from 'src/app/_services/annalyse-service.service';

@Component({
  selector: 'app-update-annalyse',
  templateUrl: './update-annalyse.component.html',
  styleUrls: ['./update-annalyse.component.css']
})
export class UpdateAnnalyseComponent implements OnInit {
  id:any;
  annalyse: Annalyse=new Annalyse();
  
    constructor(private annalyseService :AnnalyseServiceService, private route: ActivatedRoute, private router: Router
      ) { this.annalyse = history.state;}
  
    ngOnInit(): void {
      
      this.id = this.route.snapshot.params['id'];
      this.annalyseService.getAnnalyseById(this.id).subscribe(data => {
        this.annalyse = data;
      }, error => console.log(error));
    }
    onSubmit(){
      this.annalyseService.updateAnnalyse(this.id, this.annalyse).subscribe( data =>{
          this.goToAnnalyseList();
        }
        , error => console.log(error));
    }
  
    goToAnnalyseList(){
      this.router.navigate(['/listAnnalyse']);
    }

}
