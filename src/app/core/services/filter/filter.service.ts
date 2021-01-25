import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
  private _filteringRequest: string = '';

  public set filteringRequest(filteringRequest: string) {
    this._filteringRequest = filteringRequest;
  }

  public get filteringRequest(): string {
    return this._filteringRequest;
  }

  constructor() { }
}
