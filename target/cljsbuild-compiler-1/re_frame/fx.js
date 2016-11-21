// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13075){
var vec__13076 = p__13075;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13076,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13076,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__13079_13089 = cljs.core.cst$kw$dispatch_DASH_later;
var G__13080_13090 = ((function (G__13079_13089){
return (function (value){
var seq__13081 = cljs.core.seq(value);
var chunk__13082 = null;
var count__13083 = (0);
var i__13084 = (0);
while(true){
if((i__13084 < count__13083)){
var map__13085 = chunk__13082.cljs$core$IIndexed$_nth$arity$2(null,i__13084);
var map__13085__$1 = ((((!((map__13085 == null)))?((((map__13085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13085):map__13085);
var effect = map__13085__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13081,chunk__13082,count__13083,i__13084,map__13085,map__13085__$1,effect,ms,dispatch,G__13079_13089){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13081,chunk__13082,count__13083,i__13084,map__13085,map__13085__$1,effect,ms,dispatch,G__13079_13089))
,ms);
}

var G__13091 = seq__13081;
var G__13092 = chunk__13082;
var G__13093 = count__13083;
var G__13094 = (i__13084 + (1));
seq__13081 = G__13091;
chunk__13082 = G__13092;
count__13083 = G__13093;
i__13084 = G__13094;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13081);
if(temp__4657__auto__){
var seq__13081__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13081__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__13081__$1);
var G__13095 = cljs.core.chunk_rest(seq__13081__$1);
var G__13096 = c__7220__auto__;
var G__13097 = cljs.core.count(c__7220__auto__);
var G__13098 = (0);
seq__13081 = G__13095;
chunk__13082 = G__13096;
count__13083 = G__13097;
i__13084 = G__13098;
continue;
} else {
var map__13087 = cljs.core.first(seq__13081__$1);
var map__13087__$1 = ((((!((map__13087 == null)))?((((map__13087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13087):map__13087);
var effect = map__13087__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13087__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13087__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13081,chunk__13082,count__13083,i__13084,map__13087,map__13087__$1,effect,ms,dispatch,seq__13081__$1,temp__4657__auto__,G__13079_13089){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13081,chunk__13082,count__13083,i__13084,map__13087,map__13087__$1,effect,ms,dispatch,seq__13081__$1,temp__4657__auto__,G__13079_13089))
,ms);
}

var G__13099 = cljs.core.next(seq__13081__$1);
var G__13100 = null;
var G__13101 = (0);
var G__13102 = (0);
seq__13081 = G__13099;
chunk__13082 = G__13100;
count__13083 = G__13101;
i__13084 = G__13102;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13079_13089))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13079_13089,G__13080_13090) : re_frame.fx.register.call(null,G__13079_13089,G__13080_13090));
var G__13103_13105 = cljs.core.cst$kw$dispatch;
var G__13104_13106 = ((function (G__13103_13105){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__13103_13105))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13103_13105,G__13104_13106) : re_frame.fx.register.call(null,G__13103_13105,G__13104_13106));
var G__13107_13113 = cljs.core.cst$kw$dispatch_DASH_n;
var G__13108_13114 = ((function (G__13107_13113){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__13109 = cljs.core.seq(value);
var chunk__13110 = null;
var count__13111 = (0);
var i__13112 = (0);
while(true){
if((i__13112 < count__13111)){
var event = chunk__13110.cljs$core$IIndexed$_nth$arity$2(null,i__13112);
re_frame.router.dispatch(event);

var G__13115 = seq__13109;
var G__13116 = chunk__13110;
var G__13117 = count__13111;
var G__13118 = (i__13112 + (1));
seq__13109 = G__13115;
chunk__13110 = G__13116;
count__13111 = G__13117;
i__13112 = G__13118;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13109);
if(temp__4657__auto__){
var seq__13109__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13109__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__13109__$1);
var G__13119 = cljs.core.chunk_rest(seq__13109__$1);
var G__13120 = c__7220__auto__;
var G__13121 = cljs.core.count(c__7220__auto__);
var G__13122 = (0);
seq__13109 = G__13119;
chunk__13110 = G__13120;
count__13111 = G__13121;
i__13112 = G__13122;
continue;
} else {
var event = cljs.core.first(seq__13109__$1);
re_frame.router.dispatch(event);

var G__13123 = cljs.core.next(seq__13109__$1);
var G__13124 = null;
var G__13125 = (0);
var G__13126 = (0);
seq__13109 = G__13123;
chunk__13110 = G__13124;
count__13111 = G__13125;
i__13112 = G__13126;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13107_13113))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13107_13113,G__13108_13114) : re_frame.fx.register.call(null,G__13107_13113,G__13108_13114));
var G__13127_13129 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__13128_13130 = ((function (G__13127_13129){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__13127_13129))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13127_13129,G__13128_13130) : re_frame.fx.register.call(null,G__13127_13129,G__13128_13130));
var G__13131_13133 = cljs.core.cst$kw$db;
var G__13132_13134 = ((function (G__13131_13133){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__13131_13133))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13131_13133,G__13132_13134) : re_frame.fx.register.call(null,G__13131_13133,G__13132_13134));
