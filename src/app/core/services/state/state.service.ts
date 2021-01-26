import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  private _isSortingPanelOpen: boolean = false;
  private _filteringRequest: string = '';

  public set isSortingPanelOpen(isSortingPanelOpen: boolean) {
    this._isSortingPanelOpen = isSortingPanelOpen;
  }
  public get isSortingPanelOpen(): boolean {
    return this._isSortingPanelOpen;
  }

  public set filteringRequest(filteringRequest: string) {
    this._filteringRequest = filteringRequest;
  }
  public get filteringRequest(): string {
    return this._filteringRequest;
  }

  constructor() { }
}
