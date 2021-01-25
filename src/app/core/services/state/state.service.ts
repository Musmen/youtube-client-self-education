import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  private _isSortingPanelOpen: boolean = false;

  public set isSortingPanelOpen(isSortingPanelOpen: boolean) {
    this._isSortingPanelOpen = isSortingPanelOpen;
  }

  public get isSortingPanelOpen(): boolean {
    return this._isSortingPanelOpen;
  }

  constructor() { }
}
