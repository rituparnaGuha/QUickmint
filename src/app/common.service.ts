import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private observable = new Subject<any>();

  publishSomeData(data: any) {
      this.observable.next(data);
  }

  getObservable(): Subject<any> {
      return this.observable;
  }
}
