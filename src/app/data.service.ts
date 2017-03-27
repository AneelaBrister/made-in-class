import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BinderData } from './binder-data';

@Injectable()
export class DataService {

  static staticObject: BinderData = {
	  simpleString: 'String1',
	  simpleNumber: 1,
	  bindingName: 'data1'
  };

  static layout1: BinderData[] = [
	{
		simpleString: 'z',
		simpleNumber: 0,
		bindingName: 'Data0'
	},
	{
		simpleString: 'A',
		simpleNumber: 1,
		bindingName: 'Data1'
	},
	{
		simpleString: 'B',
		simpleNumber: 2,
		bindingName: 'Data2'
	},
	{
		simpleString: 'C',
		simpleNumber: 3,
		bindingName: 'Data3'
	},
	{
		simpleString: 'D',
		simpleNumber: 4,
		bindingName: 'Data4'
	}
  ];

  static layout2: BinderData[] = [
	{
		simpleString: 'z',
		simpleNumber: 0,
		bindingName: 'Data0'
	},
	{
		simpleString: 'A',
		simpleNumber: 1,
		bindingName: 'Data1'
	},
	{
		simpleString: 'B',
		simpleNumber: 2,
		bindingName: 'Data2'
	},
	{
		simpleString: 'C',
		simpleNumber: 3,
		bindingName: 'Data3'
	},
	{
		simpleString: 'D',
		simpleNumber: 4,
		bindingName: 'Data4'
	}
  ];

  constructor() { }

  getSimpleStringObs(count: number): Observable<string> {
	  let s: string;
	  s = 'String' + count.toString();
	  return Observable.of(s).delay(2000);
  }

  getObjectVarObs(count: number): Observable<BinderData> {
	let s: string;
	s = 'String' + count.toString();
	const o: BinderData = { simpleString: s, simpleNumber: count, bindingName: 'data' + count };
	return Observable.of(o).delay(2000);
  }

  getPageLayout1(): Observable<BinderData[]> {
	return Observable.of(DataService.layout1).delay(2000);
  }

  getPageLayout2(): Observable<BinderData[]> {
	return Observable.of(DataService.layout2).delay(2000);
  }

  getBoundData(): Observable<any> {
	  return Observable.of({
		Data0: '0',
		Data1: '1',
		Data2: '2',
		Data3: '3',
		Data4: '4',
		Data00: '00',
		Data11: '11',
		Data22: '22',
		Data33: '33',
		Data44: '44',
		Data000: '000',
		Data111: '111',
		Data222: '222',
		Data333: '333',
		Data444: '444',
		Data0000: '000',
		Data1111: '111',
		Data2222: '222',
		Data3333: '333',
		Data4444: '444',
	  }).delay(2000);
  }
}
