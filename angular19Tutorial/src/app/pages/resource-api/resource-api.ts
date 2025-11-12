import { JsonPipe } from '@angular/common';
import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  standalone: true,
  imports: [],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css',
})
export class ResourceApi {

  userList = resource({
    loader:() => {
      return fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json() as Promise<any[]>)
    }
  });

  ReloadResource(){
    this.userList.reload();
  }

}
