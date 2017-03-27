import { Component, OnInit, Input } from '@angular/core';
import { BinderData } from '../binder-data';

@Component({
  selector: 'app-binder',
  templateUrl: './binder.component.html',
  styleUrls: ['./binder.component.css']
})
export class BinderComponent implements OnInit {
	@Input() simpleStringVar: string;
	@Input() objectVar: BinderData;
	@Input() set objectSet(value: BinderData) {
		this._objectSet = value;
	}
	@Input() set objectSetWithAny(value: any) {
		this._objectSetAny = value;
	}
	@Input() set slowObjectSetWithAny(value: any) {
		this._slowObjectSetAny = value;
	}
	@Input() set slowObjectSetWithAnyAsync(value: any) {
		this._slowObjectSetAnyAsync = value;
	}
	@Input() set staticObjectSetWithAny(value: any) {
		this._staticObjectSetAny = value;
	}
	@Input() bindingContext: any;
	@Input() bindingContextSubject: any;

	private _objectSet: BinderData;
	private _objectSetAny: any;
	private _slowObjectSetAny: any;
	private _slowObjectSetAnyAsync: any;
	private _staticObjectSetAny: any;


  constructor() { }

  ngOnInit() {
	  console.log(`binding context`, this.bindingContext);
	  console.log(`bindingContextSubject`, this.bindingContextSubject);
  }

}
