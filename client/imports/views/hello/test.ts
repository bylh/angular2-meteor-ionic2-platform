const Rx = require('rxjs');

let x = document.getElementById("btn1");
console.log(x);
let clickStream$ = Rx.Observable.create(function(observer){
    x.addEventListener('click', function(event){
        observer.next(event)
    }, false);
});
clickStream$.subscribe((ev: any) => console.log(ev));

// var observable1 = Rx.Observable.interval(1000);
// var observable2 = Rx.Observable.interval(500);
// var merged = Rx.Observable.merge(observable1, observable2);
// merged.subscribe(x => console.log(x));
// console.log('hello');


