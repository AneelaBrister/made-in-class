import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BinderData } from '../binder-data';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit, OnChanges {
	@Input() set options(value: BinderData) {
		this._options = value;
		this._options.widget = this;
	}
	get options(): BinderData {
		return this._options;
	}

	private _options: BinderData;

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('widget onchanges', changes);
	}

}
