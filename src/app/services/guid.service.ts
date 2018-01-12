import { Injectable } from '@angular/core';

@Injectable()
export class GuidService {

  public generateId(): string {
    return this._p8() + this._p8(true) + this._p8(true) + this._p8();
  }

  private _p8(s?: boolean): string {
    const p = (Math.random().toString(16) + '000000000').substr(2, 8);
    return s ? `-${p.substr(0, 4)}-${p.substr(4, 4)}` : p;
  }

}
