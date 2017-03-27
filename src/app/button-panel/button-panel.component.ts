import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BinderData } from '../binder-data';
import { Subject, BehaviorSubject } from 'rxjs/Rx';

@Component({
  selector: 'app-button-panel',
  templateUrl: './button-panel.component.html',
  styleUrls: ['./button-panel.component.css']
})
export class ButtonPanelComponent implements OnInit {
	private _count: number = 0;
	private _simpleStringVar: string;
	private _objectVar: BinderData;
	private _slowObjectVar: any;
	private _slowObjectVarAsync: Subject<any> = new Subject<any>();
	private _bindingContext: any = {};
	private _bindingContextSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
	private _staticObj: BinderData;
	constructor(private _data: DataService) { }

  ngOnInit() {
	  this._staticObj = DataService.staticObject;
	  this._bindingContext = {
		data1: 'a',
		data2: 'b',
		data3: 'c',
		data4: 'd',
		data5: 'e',
		data6: 'f',
		data7: 'g',
		data8: 'h',
		data9: 'i',
		data10: 'j',
		data11: 'k'
	  };
	  this._bindingContextSubject.next(this._bindingContext);
	  console.log('sent out new _bindingContextSubject');
	  this._getValues();
  }

  private _getValues(): void {
	  this._count++;
	  this._data.getSimpleStringObs(this._count).subscribe((s: string) => this._simpleStringVar = s);
	  this._data.getObjectVarObs(this._count).subscribe((o: any) => {
		this._objectVar = o;
		setTimeout(() => {
			this._slowObjectVar = o;
			this._slowObjectVarAsync.next(o);
		}, 2000);
	  });
	  setTimeout(() => {
		this._staticObj.simpleString = 'String' + this._count.toString();
		this._staticObj.simpleNumber = this._count;
		this._staticObj.bindingName = 'data' + this._count.toString();
	  }, 2000);
  }

  private _onRefresh(): void {
	  this._getValues();
  }

  private _onBindingContextChange(): void {
	  setTimeout(() => {
		this._bindingContext.data1 += 'a';
		this._bindingContext.data2 += 'b';
		this._bindingContext.data3 += 'c';
		this._bindingContext.data4 += 'd';
		this._bindingContext.data5 += 'e';
		this._bindingContext.data6 += 'f';
		this._bindingContext.data7 += 'g';
		this._bindingContext.data8 += 'h';
		this._bindingContext.data9 += 'i';
		this._bindingContext.data10 += 'j';
		this._bindingContext.data11 += 'k';
		this._bindingContextSubject.next(this._bindingContext);
	  }, 2000);
  }
}
