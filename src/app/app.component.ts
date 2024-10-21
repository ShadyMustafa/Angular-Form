import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FormsModule , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project1';
  submit= true
  nm = '';
  em = '';
  ph= '';
  ad= '';
  qualafications = [{school: '' , degree:'' , year:''}]
  emailValid= false

  emailValidation(em:any){
    if(this.em.includes('@')&&this.em.includes('.com')){
      this.emailValid=true
    }else{
      this.emailValid=false
    }
    
  }

  addQualifation(){
    this.qualafications.push({school: '' , degree:'' , year:''})
  }

  submitt(){
    this.submit=false
  }
  edit(){
    this.submit=true
  }

}
