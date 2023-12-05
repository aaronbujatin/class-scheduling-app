import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 

  constructor(private alertController: AlertController, private router : Router, private authenticationService : AuthenticationService,private loadingController: LoadingController) { }

  ngOnInit() {
  }

  // loginBtn(){
  //   this.router.navigate(['/courses'])
  // }

  username: string
  password: string

  async loginBtn() {
    const loading = await this.loadingController.create({
      message: 'Logging in...',
      spinner: 'crescent', // You can change the spinner type here
      cssClass: 'custom-loading-font',
      
    });
    await loading.present();

    this.authenticationService.login(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(["/courses"])
        const jwt = response.token;
        this.authenticationService.setToken(jwt);
        console.log(response);
        loading.dismiss();
      },
      (error) => {
        console.error('Login failed', error);
        loading.dismiss();
        this.presentAlert()
      }
    );
  }
 

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Invalid username or password',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
