import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from '../data.service';
import { BinderData } from '../binder-data';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-subscribe-page',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.css']
})
export class SubscribePageComponent implements OnInit {
	@ViewChildren(WidgetComponent) private _widgets: QueryList<WidgetComponent>;

	private _layoutWithSubscribe: BinderData[];
	private _refreshCount: number = 1;

	constructor(private _data: DataService) {}

	ngOnInit() {
		this._data.getPageLayout2().subscribe((bd: BinderData[]) => {
			this._layoutWithSubscribe = bd;
		});
	}

	private _onChangeDataLayout(): void {
		this._refreshCount++;
		this._layoutWithSubscribe.forEach((d: BinderData) => this._updateRow(d, this._refreshCount));
	}

	private _onChangeDataWidget(): void {
		this._refreshCount++;
		this._widgets.forEach((w: WidgetComponent) => {
			this._updateRow(w.options, this._refreshCount);
		});
	}

	private _updateRow(d: BinderData, count: number): void {
		d.simpleString = d.simpleString.substr(0, 1).repeat(count);
		d.simpleNumber = Number.parseInt(d.simpleNumber.toString().substr(0, 1)) * Math.pow(10, count - 1);
		d.bindingName = 'data' + d.simpleNumber.toString();
	}
}
