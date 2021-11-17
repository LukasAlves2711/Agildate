
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/interface/auth';
import { AuthService } from 'src/app/service/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public userRegister: Auth = {};
  private loading: any;
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private tostCtrl: ToastController,
    private authService: AuthService

  ) { }

  ngOnInit() {
  }
  // inicio registro - cadastro
  async register() {
    await this.presentLoading();
    // try
    try {
      await this.authService.register(this.userRegister);
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
    const toast = await this.tostCtrl.create({ message, duration: 6000 });
    toast.present();
  }

  pageInitial() {
    this.router.navigate(['login']);
  }
}
