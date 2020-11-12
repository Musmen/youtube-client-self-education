import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sorting-block',
  templateUrl: './sorting-block.component.html',
  styleUrls: ['./sorting-block.component.scss']
})
export class SortingBlockComponent implements OnInit {

  @Input() isSortingPanelOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
