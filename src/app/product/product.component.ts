import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipro } from './models/product';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
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
    private _matdialog: MatDialog,
    private _matsnackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  tracbyid(index: number, s: Ipro) {
    return s.id;
  }

  moviesarr: Array<Ipro> = [
    {
      id: 201,
      title: 'Midnight Chase',
      rating: 8.1,
      duration: '134 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4',
    },
    {
      id: 202,
      title: 'Silent Horizon',
      rating: 7.9,
      duration: '121 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
    },
    {
      id: 203,
      title: 'Last Signal',
      rating: 8.4,
      duration: '146 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66',
    },
    {
      id: 204,
      title: 'Red Planet',
      rating: 7.6,
      duration: '129 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    },
    {
      id: 205,
      title: 'Shadow Protocol',
      rating: 8.0,
      duration: '138 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b',
    },
    {
      id: 206,
      title: 'Neon Streets',
      rating: 7.8,
      duration: '118 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
    },

    {
      id: 209,
      title: 'Frozen Night',
      rating: 8.2,
      duration: '141 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae',
    },
    {
      id: 302,
      title: 'City of Shadows',
      rating: 7.6,
      duration: '124 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78',
    },
    {
      id: 303,
      title: 'Final Countdown',
      rating: 8.3,
      duration: '158 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66',
    },
    {
      id: 304,
      title: 'Lost in Space',
      rating: 7.9,
      duration: '133 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    },
    {
      id: 305,
      title: 'Nightfall',
      rating: 7.5,
      duration: '116 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
    },
    {
      id: 308,
      title: 'Crimson Sky',
      rating: 8.1,
      duration: '149 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae',
    },
    {
      id: 401,
      title: 'Edge of Reality',
      rating: 8.1,
      duration: '142 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
    },
    {
      id: 402,
      title: 'Silent Storm',
      rating: 7.7,
      duration: '128 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
    },
    {
      id: 403,
      title: 'Dark Matter',
      rating: 8.4,
      duration: '155 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    },
    {
      id: 404,
      title: 'Neon Future',
      rating: 7.9,
      duration: '134 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66',
    },
    {
      id: 405,
      title: 'Lost Frequency',
      rating: 8.0,
      duration: '121 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f',
    },
    {
      id: 408,
      title: 'Parallel Lines',
      rating: 8.3,
      duration: '160 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae',
    },
    {
      id: 409,
      title: 'Cold Horizon',
      rating: 7.8,
      duration: '126 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1512070679279-8988d32161be',
    },
    {
      id: 410,
      title: 'Beyond the Sky',
      rating: 8.5,
      duration: '172 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4',
    },
    {
      id: 309,
      title: 'Hidden Truth',
      rating: 8.2,
      duration: '137 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1512070679279-8988d32161be',
    },
    {
      id: 310,
      title: 'The Last Horizon',
      rating: 8.5,
      duration: '170 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4',
    },
    {
      id: 210,
      title: 'Golden Empire',
      rating: 8.3,
      duration: '165 min',
      language: 'English',
      poster: 'https://images.unsplash.com/photo-1512070679279-8988d32161be',
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
    let MatDialogRef = this._matdialog.open(GetConfirm1Component);

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
