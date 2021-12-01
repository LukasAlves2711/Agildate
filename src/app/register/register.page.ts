
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/interface/auth';
import { AuthService } from 'src/app/service/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { UserCrudService } from '../service/user-crud.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public userRegister: Auth = {};
  private loading: any;

  //new 
  DadosForm: FormGroup;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private tostCtrl: ToastController,
    private authService: AuthService,
    public formbilder: FormBuilder,
    private userCrudService: UserCrudService

  ) {
    this.DadosForm = this.formbilder.group(
      {
        userUid: [],
        name: [null, [Validators.required]],
        tel: [null, [Validators.required]]
      }
    );
  }
  ngOnInit() {

  }
  // inicio registro - cadastro
  async register() {
    await this.presentLoading();
    // try
    try {
      this.authService.register(this.userRegister).then(data => {
        const uid = data.user.uid;
        this.DadosForm.patchValue({
          userUid: uid,
          name: this.DadosForm.get('name').value,
          tel: this.DadosForm.get('tel').value
        })
        this.UserRegister()
        console.log("🚀 ~ file: register.page.ts ~ line 51 ~ RegisterPage ~ this.authService.register ~ uid", uid)
        // this.router.navigate(['/tabs']);
      });
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

  UserRegister() {
    console.log("🚀 ~ file: register.page.ts ~ line 80 ~ RegisterPage ~ UserRegister ~ this.DadosForm.value", this.DadosForm.value)
    if (!this.DadosForm.valid) {
      return false;
    } else {
      this.userCrudService.create(this.DadosForm.value)
        .then(() => {
          this.DadosForm.reset();
          this.router.navigate(['/tabs']);
        }).catch((err) => {
          console.log(err)
        });
    }
  }

  pageInitial() {
    this.router.navigate(['login']);
  }




}
