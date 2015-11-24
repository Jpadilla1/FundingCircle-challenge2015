goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__97__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__97 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__98__i = 0, G__98__a = new Array(arguments.length -  0);
while (G__98__i < G__98__a.length) {G__98__a[G__98__i] = arguments[G__98__i + 0]; ++G__98__i;}
  args = new cljs.core.IndexedSeq(G__98__a,0);
} 
return G__97__delegate.call(this,args);};
G__97.cljs$lang$maxFixedArity = 0;
G__97.cljs$lang$applyTo = (function (arglist__99){
var args = cljs.core.seq(arglist__99);
return G__97__delegate(args);
});
G__97.cljs$core$IFn$_invoke$arity$variadic = G__97__delegate;
return G__97;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__100__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__101__i = 0, G__101__a = new Array(arguments.length -  0);
while (G__101__i < G__101__a.length) {G__101__a[G__101__i] = arguments[G__101__i + 0]; ++G__101__i;}
  args = new cljs.core.IndexedSeq(G__101__a,0);
} 
return G__100__delegate.call(this,args);};
G__100.cljs$lang$maxFixedArity = 0;
G__100.cljs$lang$applyTo = (function (arglist__102){
var args = cljs.core.seq(arglist__102);
return G__100__delegate(args);
});
G__100.cljs$core$IFn$_invoke$arity$variadic = G__100__delegate;
return G__100;
})()
;

return null;
});
