/* jshint -W097 */
"use strict";
// Observables From Events:https://youtu.be/ei7FsoXKPl0?t=782

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const output = document.getElementById('output');
const mouseoutput = document.getElementById('mouseoutput');

console.log('RxJS included?', !!Rx);

const btnStream$ = Rx.Observable.fromEvent(btn, 'click'); // $ empfohlen um Observable/Subscription zu Kennzeichnen
// subscripe 
btnStream$.subscribe(
    function(e){
        console.log('Clicked', e.target.innerHTML);
    },
    function(err){
        console.log(err);
    },
    function(){
        console.log('completed');
    });

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
// subscripe 
inputStream$.subscribe(
    function(e){
        console.log('Typed', e.currentTarget.value);
        output.innerHTML = e.currentTarget.value;
    },
    function(err){
        console.log(err);
    },
    function(){
        console.log('completed');
    });

const mmoveStream$ = Rx.Observable.fromEvent(document, 'mousemove');
// subscripe 
mmoveStream$.subscribe(
    function(e){
        mouseoutput.innerHTML = 'x-pos: ' + e.clientX + ' y-pos: ' + e.clientY;
    },
    function(err){
        console.log(err);
    },
    function(){
        console.log('completed');
    });