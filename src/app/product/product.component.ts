import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipro } from './models/product';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';
import { GetConfirm1Component } from '../get-confirm1/get-confirm1.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  isineditmode: boolean = false;
  editid!: number;

  @ViewChild('title') title!: ElementRef;
  @ViewChild('language') language!: ElementRef;
  @ViewChild('poster') poster!: ElementRef;
  @ViewChild('rating') rating!: ElementRef;
  @ViewChild('duration') duration!: ElementRef;

  constructor(
    private _matdialog : MatDialog,
    private _matsnackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  tracbyid(index: number, s: Ipro) {
    return s.id;
  }

  moviesarr: Array<Ipro> = [
    {
      id: 1,
      title: 'Inception',
      rating: 8.8,
      duration: '148 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/51s+u5yZ2RL._AC_.jpg',
    },
    {
      id: 2,
      title: 'Interstellar',
      rating: 8.7,
      duration: '169 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/71n58xDHz9L._AC_SL1111_.jpg',
    },
    {
      id: 3,
      title: 'The Dark Knight',
      rating: 9.0,
      duration: '152 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/51EbJjlY4rL._AC_.jpg',
    },
    {
      id: 4,
      title: 'Avatar',
      rating: 7.8,
      duration: '162 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg',
    },
    {
      id: 5,
      title: 'Titanic',
      rating: 7.9,
      duration: '195 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/71Z3yJwzvUL._AC_SL1024_.jpg',
    },
    {
      id: 6,
      title: 'Avengers: Endgame',
      rating: 8.4,
      duration: '181 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg',
    },
    {
      id: 7,
      title: 'Joker',

      rating: 8.4,
      duration: '122 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/71yJLh9fHXL._AC_SL1178_.jpg',
    },
    {
      id: 8,
      title: 'Forrest Gump',

      rating: 8.8,
      duration: '142 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/61+9y1pP2VL._AC_SL1000_.jpg',
    },
    {
      id: 9,
      title: 'The Matrix',
      rating: 8.7,
      duration: '136 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg',
    },
    {
      id: 10,
      title: 'Gladiator',

      rating: 8.5,
      duration: '155 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/51A9W5o+Y6L._AC_.jpg',
    },
    {
      id: 12,
      title: 'Parasite',

      rating: 8.6,
      duration: '132 min',
      language: 'Korean',
      poster: 'https://m.media-amazon.com/images/I/91Q5dCjc2KL._AC_SL1500_.jpg',
    },
    {
      id: 13,
      title: 'Spider-Man: No Way Home',

      rating: 8.2,
      duration: '148 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/81Qn0F7l9TL._AC_SL1500_.jpg',
    },
    {
      id: 14,
      title: 'Dune',
      rating: 8.0,
      duration: '155 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/81ym3QUd3KL._AC_SL1500_.jpg',
    },
    {
      id: 15,
      title: 'Oppenheimer',

      rating: 8.6,
      duration: '180 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/71lqDylcvGL._AC_SL1024_.jpg',
    },
    {
      id: 16,
      title: 'The Godfather',

      rating: 9.2,
      duration: '175 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg',
    },
    {
      id: 17,
      title: 'Fight Club',
      rating: 8.8,
      duration: '139 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
    },
    {
      id: 18,
      title: 'The Lord of the Rings: The Return of the King',
      rating: 9.0,
      duration: '201 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg',
    },
    {
      id: 19,
      title: 'Jurassic Park',
      rating: 8.2,
      duration: '127 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/81+g8T8d4AL._AC_SL1500_.jpg',
    },
    {
      id: 20,
      title: 'The Lion King',
      rating: 8.5,
      duration: '88 min',
      language: 'English',
      poster: 'https://m.media-amazon.com/images/I/51NpxXH9QWL._AC_.jpg',
    },
  ];

  onmovieadd() {
    let movies_obj = {
      title: this.title.nativeElement.value,
      language: this.language.nativeElement.value,
      poster: this.poster.nativeElement.value,
      rating: this.rating.nativeElement.value,
      duration: this.duration.nativeElement.value,
      id: Date.now(),
    };
    (this.title.nativeElement.value = ''),
      (this.language.nativeElement.value = ''),
      (this.poster.nativeElement.value = ''),
      (this.rating.nativeElement.value = ''),
      (this.duration.nativeElement.value = ''),
      this.moviesarr.unshift(movies_obj);
  }

  onmovieremove(id: number) {
    let matconfig = new MatDialogConfig();
    matconfig.disableClose = true;
    matconfig.width = '500px';
    let MatDialogRef = this. _matdialog.open(GetConfirm1Component);

    MatDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        let getindex = this.moviesarr.findIndex((s) => s.id === id);
        this.moviesarr.splice(getindex, 1);

        this._matsnackbar.open(`this ${id} removed succesfully`, 'close', {
          verticalPosition: 'top',
          horizontalPosition: 'left',
          duration: 3000,
        });
      }
    });
  }
  onmovieedit(s: Ipro) {
    this.editid = s.id;
    this.title.nativeElement.value = s.title;
    this.language.nativeElement.value = s.language;
    this.poster.nativeElement.value = s.poster;
    this.duration.nativeElement.value = s.duration;
    this.rating.nativeElement.value = s.rating;
    this.isineditmode = true;
  }
  onmovieupdate() {
    let updated_movie: Ipro = {
      title: this.title.nativeElement.value,
      language: this.language.nativeElement.value,
      poster: this.poster.nativeElement.value,
      rating: this.rating.nativeElement.value,
      duration: this.duration.nativeElement.value,
      id: this.editid,
    };
    let getindex = this.moviesarr.findIndex((s) => s.id === updated_movie.id);
    this.moviesarr[getindex] = updated_movie;
    this.isineditmode = false;
    this._matsnackbar.open(`this s updated ${updated_movie.id}`, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    });

    (this.title.nativeElement.value = ''),
      (this.language.nativeElement.value = ''),
      (this.poster.nativeElement.value = ''),
      (this.rating.nativeElement.value = ''),
      (this.duration.nativeElement.value = '');
  }
}
