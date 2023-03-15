import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-new-hero',
  templateUrl: './edit-new-hero.component.html',
  styleUrls: ['./edit-new-hero.component.css'],
})
export class EditNewHeroComponent {
  heroForm: FormGroup;
  id: string = '';
  isEdit: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.heroForm = this._formBuilder.group({
      name: ['', Validators.required],
      alter_ego: ['', Validators.required],
      publisher: ['', Validators.required],
      first_appearance: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      console.log(params);

      if (params['id'] !== 'null') {
        this.id = params['id'];
        this.isEdit = true;
        this._heroesService.getHero(this.id).subscribe(
          (response) => {
            let hero = response[0];
            this.heroForm.patchValue({
              name: hero.name,
              alter_ego: hero.alter_ego,
              publisher: hero.publisher,
              first_appearance: hero.first_appearance,
            });
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  onSubmit() {
    if (this.isEdit) {
      this._heroesService.updateHero(this.id, this.heroForm.value).subscribe(
        (response) => {
          this.openSnackBar('Hero updated successfully', 'Ok');
          this._router.navigate(['/home']);
        },
        (error) => {
          this.openSnackBar('Error updating hero', 'Ok');
          console.log(error);
        }
      );
    } else {
      this._heroesService.createHero(this.heroForm.value).subscribe(
        (response) => {
          this.openSnackBar('Hero created successfully', 'Ok');
          this._router.navigate(['/home']);
        },
        (error) => {
          this.openSnackBar('Error creating hero', 'Ok');
          console.log(error);
        }
      );
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
