// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('challenge.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.nodejs.enable_util_print_BANG_.call(null);
challenge.core.N = (10);
challenge.core.prime_QMARK_ = (function challenge$core$prime_QMARK_(n){
if(cljs.core.even_QMARK_.call(null,n)){
return false;
} else {
var root = (Math.sqrt(n) | (0));
var i = (3);
while(true){
if((i > root)){
return true;
} else {
if((cljs.core.mod.call(null,n,i) === (0))){
return false;
} else {
var G__85 = (i + (2));
i = G__85;
continue;
}
}
break;
}
}
});
challenge.core.n_primes = (function challenge$core$n_primes(n){
var num = (2);
var p = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null);
while(true){
if((cljs.core.count.call(null,p) >= n)){
return p;
} else {
var G__86 = (num + (1));
var G__87 = (cljs.core.truth_(challenge.core.prime_QMARK_.call(null,num))?cljs.core.concat.call(null,p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [num], null)):p);
num = G__86;
p = G__87;
continue;
}
break;
}
});
challenge.core._main = (function challenge$core$_main(var_args){
var args__3343__auto__ = [];
var len__3340__auto___90 = arguments.length;
var i__3341__auto___91 = (0);
while(true){
if((i__3341__auto___91 < len__3340__auto___90)){
args__3343__auto__.push((arguments[i__3341__auto___91]));

var G__92 = (i__3341__auto___91 + (1));
i__3341__auto___91 = G__92;
continue;
} else {
}
break;
}

var argseq__3344__auto__ = ((((0) < args__3343__auto__.length))?(new cljs.core.IndexedSeq(args__3343__auto__.slice((0)),(0))):null);
return challenge.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__3344__auto__);
});

challenge.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
challenge.core.primes = challenge.core.n_primes.call(null,challenge.core.N);

cljs.core.println.call(null,goog.string.format("%s,","x"),clojure.string.join.call(null,", ",challenge.core.primes));

var x = (0);
while(true){
if((x < (cljs.core.count.call(null,challenge.core.primes) - (1)))){
var i = (0);
while(true){
if((i < (cljs.core.count.call(null,challenge.core.primes) - (1)))){
cljs.core.println.call(null,goog.string.format("%d,",cljs.core.nth.call(null,challenge.core.primes,i)),clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (i,x){
return (function (p1__88_SHARP_){
return (p1__88_SHARP_ * cljs.core.nth.call(null,challenge.core.primes,i));
});})(i,x))
,challenge.core.primes)));

var G__93 = (i + (1));
i = G__93;
continue;
} else {
return null;
}
break;
}
} else {
var G__94 = (x + (1));
x = G__94;
continue;
}
break;
}
});

challenge.core._main.cljs$lang$maxFixedArity = (0);

challenge.core._main.cljs$lang$applyTo = (function (seq89){
return challenge.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89));
});
cljs.core._STAR_main_cli_fn_STAR_ = challenge.core._main;

//# sourceMappingURL=core.js.map