import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor(private window: Window) { }

  public getItem(name: string): string {
    return this.window.localStorage.getItem(name);
  }

  public setItem(name: string, data: string): void {
    this.window.localStorage.setItem(name, data);
  }

  public removeItem(name: string): void {
    this.window.localStorage.removeItem(name);
  }

}
