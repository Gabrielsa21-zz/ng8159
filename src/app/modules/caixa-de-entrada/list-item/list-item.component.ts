import { Component, OnInit, Input } from '@angular/core';
import { Email } from "../../../models/email";

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() email: Email;

  constructor() { }

  ngOnInit() {
  }

}
