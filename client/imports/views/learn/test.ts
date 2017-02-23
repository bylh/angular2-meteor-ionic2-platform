let myPromise = new Promise(function ( resolve ) {
    resolve(42);
});
myPromise.then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
});