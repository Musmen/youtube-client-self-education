import { Injectable } from '@angular/core';
import { SortingSettings } from '@core/models/sortingSettings.model';

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

  public sortingSettings: SortingSettings = {
    method: null,
    isSortingByIncrease: false,
  };

  constructor() { }

  public setSortingSettings(sortingSettings: SortingSettings): void {
    this.sortingSettings = sortingSettings;
  }
}
