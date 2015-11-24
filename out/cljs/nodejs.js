// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78__i = 0, G__78__a = new Array(arguments.length -  0);
while (G__78__i < G__78__a.length) {G__78__a[G__78__i] = arguments[G__78__i + 0]; ++G__78__i;}
  args = new cljs.core.IndexedSeq(G__78__a,0);
} 
return G__77__delegate.call(this,args);};
G__77.cljs$lang$maxFixedArity = 0;
G__77.cljs$lang$applyTo = (function (arglist__79){
var args = cljs.core.seq(arglist__79);
return G__77__delegate(args);
});
G__77.cljs$core$IFn$_invoke$arity$variadic = G__77__delegate;
return G__77;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__80__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__80 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81__i = 0, G__81__a = new Array(arguments.length -  0);
while (G__81__i < G__81__a.length) {G__81__a[G__81__i] = arguments[G__81__i + 0]; ++G__81__i;}
  args = new cljs.core.IndexedSeq(G__81__a,0);
} 
return G__80__delegate.call(this,args);};
G__80.cljs$lang$maxFixedArity = 0;
G__80.cljs$lang$applyTo = (function (arglist__82){
var args = cljs.core.seq(arglist__82);
return G__80__delegate(args);
});
G__80.cljs$core$IFn$_invoke$arity$variadic = G__80__delegate;
return G__80;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map