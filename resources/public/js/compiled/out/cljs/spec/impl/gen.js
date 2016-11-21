// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28580 = arguments.length;
var i__28476__auto___28581 = (0);
while(true){
if((i__28476__auto___28581 < len__28475__auto___28580)){
args__28482__auto__.push((arguments[i__28476__auto___28581]));

var G__28582 = (i__28476__auto___28581 + (1));
i__28476__auto___28581 = G__28582;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq28579){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28579));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28584 = arguments.length;
var i__28476__auto___28585 = (0);
while(true){
if((i__28476__auto___28585 < len__28475__auto___28584)){
args__28482__auto__.push((arguments[i__28476__auto___28585]));

var G__28586 = (i__28476__auto___28585 + (1));
i__28476__auto___28585 = G__28586;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq28583){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28583));
});

var g_QMARK__28587 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_28588 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__28587){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__28587))
,null));
var mkg_28589 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__28587,g_28588){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__28587,g_28588))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__28587,g_28588,mkg_28589){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__28587).call(null,x);
});})(g_QMARK__28587,g_28588,mkg_28589))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__28587,g_28588,mkg_28589){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_28589).call(null,gfn);
});})(g_QMARK__28587,g_28588,mkg_28589))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__28587,g_28588,mkg_28589){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_28588).call(null,generator);
});})(g_QMARK__28587,g_28588,mkg_28589))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28551__auto___28608 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__28551__auto___28608){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28609 = arguments.length;
var i__28476__auto___28610 = (0);
while(true){
if((i__28476__auto___28610 < len__28475__auto___28609)){
args__28482__auto__.push((arguments[i__28476__auto___28610]));

var G__28611 = (i__28476__auto___28610 + (1));
i__28476__auto___28610 = G__28611;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28608))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28608){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28608),args);
});})(g__28551__auto___28608))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__28551__auto___28608){
return (function (seq28590){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28590));
});})(g__28551__auto___28608))
;


var g__28551__auto___28612 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__28551__auto___28612){
return (function cljs$spec$impl$gen$list(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28613 = arguments.length;
var i__28476__auto___28614 = (0);
while(true){
if((i__28476__auto___28614 < len__28475__auto___28613)){
args__28482__auto__.push((arguments[i__28476__auto___28614]));

var G__28615 = (i__28476__auto___28614 + (1));
i__28476__auto___28614 = G__28615;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28612))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28612){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28612),args);
});})(g__28551__auto___28612))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__28551__auto___28612){
return (function (seq28591){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28591));
});})(g__28551__auto___28612))
;


var g__28551__auto___28616 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__28551__auto___28616){
return (function cljs$spec$impl$gen$map(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28617 = arguments.length;
var i__28476__auto___28618 = (0);
while(true){
if((i__28476__auto___28618 < len__28475__auto___28617)){
args__28482__auto__.push((arguments[i__28476__auto___28618]));

var G__28619 = (i__28476__auto___28618 + (1));
i__28476__auto___28618 = G__28619;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28616))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28616){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28616),args);
});})(g__28551__auto___28616))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__28551__auto___28616){
return (function (seq28592){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28592));
});})(g__28551__auto___28616))
;


var g__28551__auto___28620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__28551__auto___28620){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28621 = arguments.length;
var i__28476__auto___28622 = (0);
while(true){
if((i__28476__auto___28622 < len__28475__auto___28621)){
args__28482__auto__.push((arguments[i__28476__auto___28622]));

var G__28623 = (i__28476__auto___28622 + (1));
i__28476__auto___28622 = G__28623;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28620))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28620){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28620),args);
});})(g__28551__auto___28620))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__28551__auto___28620){
return (function (seq28593){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28593));
});})(g__28551__auto___28620))
;


var g__28551__auto___28624 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__28551__auto___28624){
return (function cljs$spec$impl$gen$set(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28625 = arguments.length;
var i__28476__auto___28626 = (0);
while(true){
if((i__28476__auto___28626 < len__28475__auto___28625)){
args__28482__auto__.push((arguments[i__28476__auto___28626]));

var G__28627 = (i__28476__auto___28626 + (1));
i__28476__auto___28626 = G__28627;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28624))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28624){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28624),args);
});})(g__28551__auto___28624))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__28551__auto___28624){
return (function (seq28594){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28594));
});})(g__28551__auto___28624))
;


var g__28551__auto___28628 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__28551__auto___28628){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28629 = arguments.length;
var i__28476__auto___28630 = (0);
while(true){
if((i__28476__auto___28630 < len__28475__auto___28629)){
args__28482__auto__.push((arguments[i__28476__auto___28630]));

var G__28631 = (i__28476__auto___28630 + (1));
i__28476__auto___28630 = G__28631;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28628))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28628){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28628),args);
});})(g__28551__auto___28628))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__28551__auto___28628){
return (function (seq28595){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28595));
});})(g__28551__auto___28628))
;


var g__28551__auto___28632 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__28551__auto___28632){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28633 = arguments.length;
var i__28476__auto___28634 = (0);
while(true){
if((i__28476__auto___28634 < len__28475__auto___28633)){
args__28482__auto__.push((arguments[i__28476__auto___28634]));

var G__28635 = (i__28476__auto___28634 + (1));
i__28476__auto___28634 = G__28635;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28632))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28632){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28632),args);
});})(g__28551__auto___28632))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__28551__auto___28632){
return (function (seq28596){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28596));
});})(g__28551__auto___28632))
;


var g__28551__auto___28636 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__28551__auto___28636){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28637 = arguments.length;
var i__28476__auto___28638 = (0);
while(true){
if((i__28476__auto___28638 < len__28475__auto___28637)){
args__28482__auto__.push((arguments[i__28476__auto___28638]));

var G__28639 = (i__28476__auto___28638 + (1));
i__28476__auto___28638 = G__28639;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28636))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28636){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28636),args);
});})(g__28551__auto___28636))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__28551__auto___28636){
return (function (seq28597){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28597));
});})(g__28551__auto___28636))
;


var g__28551__auto___28640 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__28551__auto___28640){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28641 = arguments.length;
var i__28476__auto___28642 = (0);
while(true){
if((i__28476__auto___28642 < len__28475__auto___28641)){
args__28482__auto__.push((arguments[i__28476__auto___28642]));

var G__28643 = (i__28476__auto___28642 + (1));
i__28476__auto___28642 = G__28643;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28640))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28640){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28640),args);
});})(g__28551__auto___28640))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__28551__auto___28640){
return (function (seq28598){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28598));
});})(g__28551__auto___28640))
;


var g__28551__auto___28644 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__28551__auto___28644){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28645 = arguments.length;
var i__28476__auto___28646 = (0);
while(true){
if((i__28476__auto___28646 < len__28475__auto___28645)){
args__28482__auto__.push((arguments[i__28476__auto___28646]));

var G__28647 = (i__28476__auto___28646 + (1));
i__28476__auto___28646 = G__28647;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28644))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28644){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28644),args);
});})(g__28551__auto___28644))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__28551__auto___28644){
return (function (seq28599){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28599));
});})(g__28551__auto___28644))
;


var g__28551__auto___28648 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__28551__auto___28648){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28649 = arguments.length;
var i__28476__auto___28650 = (0);
while(true){
if((i__28476__auto___28650 < len__28475__auto___28649)){
args__28482__auto__.push((arguments[i__28476__auto___28650]));

var G__28651 = (i__28476__auto___28650 + (1));
i__28476__auto___28650 = G__28651;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28648))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28648){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28648),args);
});})(g__28551__auto___28648))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__28551__auto___28648){
return (function (seq28600){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28600));
});})(g__28551__auto___28648))
;


var g__28551__auto___28652 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__28551__auto___28652){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28653 = arguments.length;
var i__28476__auto___28654 = (0);
while(true){
if((i__28476__auto___28654 < len__28475__auto___28653)){
args__28482__auto__.push((arguments[i__28476__auto___28654]));

var G__28655 = (i__28476__auto___28654 + (1));
i__28476__auto___28654 = G__28655;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28652))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28652){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28652),args);
});})(g__28551__auto___28652))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__28551__auto___28652){
return (function (seq28601){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28601));
});})(g__28551__auto___28652))
;


var g__28551__auto___28656 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__28551__auto___28656){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28657 = arguments.length;
var i__28476__auto___28658 = (0);
while(true){
if((i__28476__auto___28658 < len__28475__auto___28657)){
args__28482__auto__.push((arguments[i__28476__auto___28658]));

var G__28659 = (i__28476__auto___28658 + (1));
i__28476__auto___28658 = G__28659;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28656))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28656){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28656),args);
});})(g__28551__auto___28656))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__28551__auto___28656){
return (function (seq28602){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28602));
});})(g__28551__auto___28656))
;


var g__28551__auto___28660 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__28551__auto___28660){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28661 = arguments.length;
var i__28476__auto___28662 = (0);
while(true){
if((i__28476__auto___28662 < len__28475__auto___28661)){
args__28482__auto__.push((arguments[i__28476__auto___28662]));

var G__28663 = (i__28476__auto___28662 + (1));
i__28476__auto___28662 = G__28663;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28660))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28660){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28660),args);
});})(g__28551__auto___28660))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__28551__auto___28660){
return (function (seq28603){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28603));
});})(g__28551__auto___28660))
;


var g__28551__auto___28664 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__28551__auto___28664){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28665 = arguments.length;
var i__28476__auto___28666 = (0);
while(true){
if((i__28476__auto___28666 < len__28475__auto___28665)){
args__28482__auto__.push((arguments[i__28476__auto___28666]));

var G__28667 = (i__28476__auto___28666 + (1));
i__28476__auto___28666 = G__28667;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28664))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28664){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28664),args);
});})(g__28551__auto___28664))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__28551__auto___28664){
return (function (seq28604){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28604));
});})(g__28551__auto___28664))
;


var g__28551__auto___28668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__28551__auto___28668){
return (function cljs$spec$impl$gen$return(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28669 = arguments.length;
var i__28476__auto___28670 = (0);
while(true){
if((i__28476__auto___28670 < len__28475__auto___28669)){
args__28482__auto__.push((arguments[i__28476__auto___28670]));

var G__28671 = (i__28476__auto___28670 + (1));
i__28476__auto___28670 = G__28671;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28668))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28668),args);
});})(g__28551__auto___28668))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__28551__auto___28668){
return (function (seq28605){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28605));
});})(g__28551__auto___28668))
;


var g__28551__auto___28672 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__28551__auto___28672){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28673 = arguments.length;
var i__28476__auto___28674 = (0);
while(true){
if((i__28476__auto___28674 < len__28475__auto___28673)){
args__28482__auto__.push((arguments[i__28476__auto___28674]));

var G__28675 = (i__28476__auto___28674 + (1));
i__28476__auto___28674 = G__28675;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28672))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28672){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28672),args);
});})(g__28551__auto___28672))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28551__auto___28672){
return (function (seq28606){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28606));
});})(g__28551__auto___28672))
;


var g__28551__auto___28676 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__28551__auto___28676){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28677 = arguments.length;
var i__28476__auto___28678 = (0);
while(true){
if((i__28476__auto___28678 < len__28475__auto___28677)){
args__28482__auto__.push((arguments[i__28476__auto___28678]));

var G__28679 = (i__28476__auto___28678 + (1));
i__28476__auto___28678 = G__28679;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28551__auto___28676))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28551__auto___28676){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28551__auto___28676),args);
});})(g__28551__auto___28676))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__28551__auto___28676){
return (function (seq28607){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28607));
});})(g__28551__auto___28676))
;

var g__28564__auto___28701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28564__auto___28701){
return (function cljs$spec$impl$gen$any(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28702 = arguments.length;
var i__28476__auto___28703 = (0);
while(true){
if((i__28476__auto___28703 < len__28475__auto___28702)){
args__28482__auto__.push((arguments[i__28476__auto___28703]));

var G__28704 = (i__28476__auto___28703 + (1));
i__28476__auto___28703 = G__28704;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28701))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28701){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28701);
});})(g__28564__auto___28701))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28564__auto___28701){
return (function (seq28680){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28680));
});})(g__28564__auto___28701))
;


var g__28564__auto___28705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28564__auto___28705){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28706 = arguments.length;
var i__28476__auto___28707 = (0);
while(true){
if((i__28476__auto___28707 < len__28475__auto___28706)){
args__28482__auto__.push((arguments[i__28476__auto___28707]));

var G__28708 = (i__28476__auto___28707 + (1));
i__28476__auto___28707 = G__28708;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28705))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28705){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28705);
});})(g__28564__auto___28705))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28564__auto___28705){
return (function (seq28681){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28681));
});})(g__28564__auto___28705))
;


var g__28564__auto___28709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28564__auto___28709){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28710 = arguments.length;
var i__28476__auto___28711 = (0);
while(true){
if((i__28476__auto___28711 < len__28475__auto___28710)){
args__28482__auto__.push((arguments[i__28476__auto___28711]));

var G__28712 = (i__28476__auto___28711 + (1));
i__28476__auto___28711 = G__28712;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28709))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28709){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28709);
});})(g__28564__auto___28709))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28564__auto___28709){
return (function (seq28682){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28682));
});})(g__28564__auto___28709))
;


var g__28564__auto___28713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28564__auto___28713){
return (function cljs$spec$impl$gen$char(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28714 = arguments.length;
var i__28476__auto___28715 = (0);
while(true){
if((i__28476__auto___28715 < len__28475__auto___28714)){
args__28482__auto__.push((arguments[i__28476__auto___28715]));

var G__28716 = (i__28476__auto___28715 + (1));
i__28476__auto___28715 = G__28716;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28713))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28713){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28713);
});})(g__28564__auto___28713))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28564__auto___28713){
return (function (seq28683){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28683));
});})(g__28564__auto___28713))
;


var g__28564__auto___28717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28564__auto___28717){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28718 = arguments.length;
var i__28476__auto___28719 = (0);
while(true){
if((i__28476__auto___28719 < len__28475__auto___28718)){
args__28482__auto__.push((arguments[i__28476__auto___28719]));

var G__28720 = (i__28476__auto___28719 + (1));
i__28476__auto___28719 = G__28720;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28717))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28717){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28717);
});})(g__28564__auto___28717))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28564__auto___28717){
return (function (seq28684){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28684));
});})(g__28564__auto___28717))
;


var g__28564__auto___28721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28564__auto___28721){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28722 = arguments.length;
var i__28476__auto___28723 = (0);
while(true){
if((i__28476__auto___28723 < len__28475__auto___28722)){
args__28482__auto__.push((arguments[i__28476__auto___28723]));

var G__28724 = (i__28476__auto___28723 + (1));
i__28476__auto___28723 = G__28724;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28721))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28721){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28721);
});})(g__28564__auto___28721))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28564__auto___28721){
return (function (seq28685){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28685));
});})(g__28564__auto___28721))
;


var g__28564__auto___28725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28564__auto___28725){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28726 = arguments.length;
var i__28476__auto___28727 = (0);
while(true){
if((i__28476__auto___28727 < len__28475__auto___28726)){
args__28482__auto__.push((arguments[i__28476__auto___28727]));

var G__28728 = (i__28476__auto___28727 + (1));
i__28476__auto___28727 = G__28728;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28725))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28725){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28725);
});})(g__28564__auto___28725))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28564__auto___28725){
return (function (seq28686){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28686));
});})(g__28564__auto___28725))
;


var g__28564__auto___28729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28564__auto___28729){
return (function cljs$spec$impl$gen$double(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28730 = arguments.length;
var i__28476__auto___28731 = (0);
while(true){
if((i__28476__auto___28731 < len__28475__auto___28730)){
args__28482__auto__.push((arguments[i__28476__auto___28731]));

var G__28732 = (i__28476__auto___28731 + (1));
i__28476__auto___28731 = G__28732;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28729))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28729){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28729);
});})(g__28564__auto___28729))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28564__auto___28729){
return (function (seq28687){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28687));
});})(g__28564__auto___28729))
;


var g__28564__auto___28733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28564__auto___28733){
return (function cljs$spec$impl$gen$int(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28734 = arguments.length;
var i__28476__auto___28735 = (0);
while(true){
if((i__28476__auto___28735 < len__28475__auto___28734)){
args__28482__auto__.push((arguments[i__28476__auto___28735]));

var G__28736 = (i__28476__auto___28735 + (1));
i__28476__auto___28735 = G__28736;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28733))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28733){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28733);
});})(g__28564__auto___28733))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28564__auto___28733){
return (function (seq28688){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28688));
});})(g__28564__auto___28733))
;


var g__28564__auto___28737 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28564__auto___28737){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28738 = arguments.length;
var i__28476__auto___28739 = (0);
while(true){
if((i__28476__auto___28739 < len__28475__auto___28738)){
args__28482__auto__.push((arguments[i__28476__auto___28739]));

var G__28740 = (i__28476__auto___28739 + (1));
i__28476__auto___28739 = G__28740;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28737))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28737){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28737);
});})(g__28564__auto___28737))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28564__auto___28737){
return (function (seq28689){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28689));
});})(g__28564__auto___28737))
;


var g__28564__auto___28741 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28564__auto___28741){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28742 = arguments.length;
var i__28476__auto___28743 = (0);
while(true){
if((i__28476__auto___28743 < len__28475__auto___28742)){
args__28482__auto__.push((arguments[i__28476__auto___28743]));

var G__28744 = (i__28476__auto___28743 + (1));
i__28476__auto___28743 = G__28744;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28741))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28741){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28741);
});})(g__28564__auto___28741))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28564__auto___28741){
return (function (seq28690){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28690));
});})(g__28564__auto___28741))
;


var g__28564__auto___28745 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28564__auto___28745){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28746 = arguments.length;
var i__28476__auto___28747 = (0);
while(true){
if((i__28476__auto___28747 < len__28475__auto___28746)){
args__28482__auto__.push((arguments[i__28476__auto___28747]));

var G__28748 = (i__28476__auto___28747 + (1));
i__28476__auto___28747 = G__28748;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28745))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28745){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28745);
});})(g__28564__auto___28745))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28564__auto___28745){
return (function (seq28691){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28691));
});})(g__28564__auto___28745))
;


var g__28564__auto___28749 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28564__auto___28749){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28750 = arguments.length;
var i__28476__auto___28751 = (0);
while(true){
if((i__28476__auto___28751 < len__28475__auto___28750)){
args__28482__auto__.push((arguments[i__28476__auto___28751]));

var G__28752 = (i__28476__auto___28751 + (1));
i__28476__auto___28751 = G__28752;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28749))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28749){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28749);
});})(g__28564__auto___28749))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28564__auto___28749){
return (function (seq28692){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28692));
});})(g__28564__auto___28749))
;


var g__28564__auto___28753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28564__auto___28753){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28754 = arguments.length;
var i__28476__auto___28755 = (0);
while(true){
if((i__28476__auto___28755 < len__28475__auto___28754)){
args__28482__auto__.push((arguments[i__28476__auto___28755]));

var G__28756 = (i__28476__auto___28755 + (1));
i__28476__auto___28755 = G__28756;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28753))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28753){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28753);
});})(g__28564__auto___28753))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28564__auto___28753){
return (function (seq28693){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28693));
});})(g__28564__auto___28753))
;


var g__28564__auto___28757 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28564__auto___28757){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28758 = arguments.length;
var i__28476__auto___28759 = (0);
while(true){
if((i__28476__auto___28759 < len__28475__auto___28758)){
args__28482__auto__.push((arguments[i__28476__auto___28759]));

var G__28760 = (i__28476__auto___28759 + (1));
i__28476__auto___28759 = G__28760;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28757))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28757){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28757);
});})(g__28564__auto___28757))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28564__auto___28757){
return (function (seq28694){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28694));
});})(g__28564__auto___28757))
;


var g__28564__auto___28761 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28564__auto___28761){
return (function cljs$spec$impl$gen$string(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28762 = arguments.length;
var i__28476__auto___28763 = (0);
while(true){
if((i__28476__auto___28763 < len__28475__auto___28762)){
args__28482__auto__.push((arguments[i__28476__auto___28763]));

var G__28764 = (i__28476__auto___28763 + (1));
i__28476__auto___28763 = G__28764;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28761))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28761){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28761);
});})(g__28564__auto___28761))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28564__auto___28761){
return (function (seq28695){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28695));
});})(g__28564__auto___28761))
;


var g__28564__auto___28765 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28564__auto___28765){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28766 = arguments.length;
var i__28476__auto___28767 = (0);
while(true){
if((i__28476__auto___28767 < len__28475__auto___28766)){
args__28482__auto__.push((arguments[i__28476__auto___28767]));

var G__28768 = (i__28476__auto___28767 + (1));
i__28476__auto___28767 = G__28768;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28765))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28765){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28765);
});})(g__28564__auto___28765))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28564__auto___28765){
return (function (seq28696){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28696));
});})(g__28564__auto___28765))
;


var g__28564__auto___28769 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28564__auto___28769){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28770 = arguments.length;
var i__28476__auto___28771 = (0);
while(true){
if((i__28476__auto___28771 < len__28475__auto___28770)){
args__28482__auto__.push((arguments[i__28476__auto___28771]));

var G__28772 = (i__28476__auto___28771 + (1));
i__28476__auto___28771 = G__28772;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28769))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28769){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28769);
});})(g__28564__auto___28769))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28564__auto___28769){
return (function (seq28697){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28697));
});})(g__28564__auto___28769))
;


var g__28564__auto___28773 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28564__auto___28773){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28774 = arguments.length;
var i__28476__auto___28775 = (0);
while(true){
if((i__28476__auto___28775 < len__28475__auto___28774)){
args__28482__auto__.push((arguments[i__28476__auto___28775]));

var G__28776 = (i__28476__auto___28775 + (1));
i__28476__auto___28775 = G__28776;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28773))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28773){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28773);
});})(g__28564__auto___28773))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28564__auto___28773){
return (function (seq28698){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28698));
});})(g__28564__auto___28773))
;


var g__28564__auto___28777 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28564__auto___28777){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28778 = arguments.length;
var i__28476__auto___28779 = (0);
while(true){
if((i__28476__auto___28779 < len__28475__auto___28778)){
args__28482__auto__.push((arguments[i__28476__auto___28779]));

var G__28780 = (i__28476__auto___28779 + (1));
i__28476__auto___28779 = G__28780;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28777))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28777){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28777);
});})(g__28564__auto___28777))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28564__auto___28777){
return (function (seq28699){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28699));
});})(g__28564__auto___28777))
;


var g__28564__auto___28781 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28564__auto___28781){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28782 = arguments.length;
var i__28476__auto___28783 = (0);
while(true){
if((i__28476__auto___28783 < len__28475__auto___28782)){
args__28482__auto__.push((arguments[i__28476__auto___28783]));

var G__28784 = (i__28476__auto___28783 + (1));
i__28476__auto___28783 = G__28784;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});})(g__28564__auto___28781))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28564__auto___28781){
return (function (args){
return cljs.core.deref.call(null,g__28564__auto___28781);
});})(g__28564__auto___28781))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28564__auto___28781){
return (function (seq28700){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28700));
});})(g__28564__auto___28781))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28482__auto__ = [];
var len__28475__auto___28787 = arguments.length;
var i__28476__auto___28788 = (0);
while(true){
if((i__28476__auto___28788 < len__28475__auto___28787)){
args__28482__auto__.push((arguments[i__28476__auto___28788]));

var G__28789 = (i__28476__auto___28788 + (1));
i__28476__auto___28788 = G__28789;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__28785_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__28785_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq28786){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28786));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__28790_SHARP_){
return (new Date(p1__28790_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1479706406346