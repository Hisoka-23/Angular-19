import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBar } from "../../reuseable/progress-bar/progress-bar";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, ProgressBar],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

}
