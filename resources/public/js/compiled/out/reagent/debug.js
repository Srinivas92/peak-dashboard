// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30114__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30115__i = 0, G__30115__a = new Array(arguments.length -  0);
while (G__30115__i < G__30115__a.length) {G__30115__a[G__30115__i] = arguments[G__30115__i + 0]; ++G__30115__i;}
  args = new cljs.core.IndexedSeq(G__30115__a,0);
} 
return G__30114__delegate.call(this,args);};
G__30114.cljs$lang$maxFixedArity = 0;
G__30114.cljs$lang$applyTo = (function (arglist__30116){
var args = cljs.core.seq(arglist__30116);
return G__30114__delegate(args);
});
G__30114.cljs$core$IFn$_invoke$arity$variadic = G__30114__delegate;
return G__30114;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30117__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30118__i = 0, G__30118__a = new Array(arguments.length -  0);
while (G__30118__i < G__30118__a.length) {G__30118__a[G__30118__i] = arguments[G__30118__i + 0]; ++G__30118__i;}
  args = new cljs.core.IndexedSeq(G__30118__a,0);
} 
return G__30117__delegate.call(this,args);};
G__30117.cljs$lang$maxFixedArity = 0;
G__30117.cljs$lang$applyTo = (function (arglist__30119){
var args = cljs.core.seq(arglist__30119);
return G__30117__delegate(args);
});
G__30117.cljs$core$IFn$_invoke$arity$variadic = G__30117__delegate;
return G__30117;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1479706410070