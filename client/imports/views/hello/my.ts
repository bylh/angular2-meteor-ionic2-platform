import RX  from 'rxjs/Rx';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map'

console.log('hello');
// var observable = Rx.Observable.create(function subscribe(observer) {
//     var id = setInterval(() => {
//         observer.next('hi')
//     }, 1000);
// });
// observable.subscribe(x => console.log(x));