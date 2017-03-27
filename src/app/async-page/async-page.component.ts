import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DataService } from '../data.service';
import { BinderData } from '../binder-data';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-async-page',
  templateUrl: './async-page.component.html',
  styleUrls: ['./async-page.component.css']
})
export class AsyncPageComponent implements OnInit {
	@ViewChildren(WidgetComponent) private _widgets: QueryList<WidgetComponent>;

	private _layout: Observable<BinderData[]>;
	private _refreshCount$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
	private _refreshCount: number = 1;

	constructor(private _data: DataService) {}

	ngOnInit() {
		this._layout = this._data.getPageLayout1()
			.combineLatest(this._refreshCount$, (data: BinderData[], count: number) => {
				data.forEach((d: BinderData) => this._updateRow(d, count));
				return data;
			})
			.do((data) => console.log('combineLatest fired', data));
	}

	private _onChangeDataLayout(): void {
		this._refreshCount++;
		this._refreshCount$.next(this._refreshCount);
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
