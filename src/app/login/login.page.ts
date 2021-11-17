import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/interface/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: Auth = {};
  private loading: any;
  constructor(
    private router: Router,
    //implementado
    private loadingCtrl: LoadingController,
    private tostCtrl: ToastController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  // inicio login
  async login() {
    await this.presentLoading();
    //try
    try {
      await this.authService.login(this.userLogin);
      this.router.navigate(['/tabs']);
    } catch (error) {
      console.error(error);
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
    }
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por Favor aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.tostCtrl.create({ message, duration: 5000 });
    toast.present();
  }
  // fim login

  cadastrar() {
    this.router.navigate(['register']);
  }
}
