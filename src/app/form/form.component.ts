import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { User } from "../user";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newUser = new User("");//declared a property and attributed it to the blueprint class User//
  @Output() addUser = new EventEmitter<User>();

  submitUser() {
    this.addUser.emit(this.newUser); //call the emit method on this event to be captured by the parent///
  }
  constructor() { }

  ngOnInit(): void {
  }

}
