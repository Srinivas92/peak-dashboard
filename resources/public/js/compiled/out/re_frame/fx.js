// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__30980){
var vec__30981 = p__30980;
var k = cljs.core.nth.call(null,vec__30981,(0),null);
var value = cljs.core.nth.call(null,vec__30981,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__30984 = cljs.core.seq.call(null,value);
var chunk__30985 = null;
var count__30986 = (0);
var i__30987 = (0);
while(true){
if((i__30987 < count__30986)){
var map__30988 = cljs.core._nth.call(null,chunk__30985,i__30987);
var map__30988__$1 = ((((!((map__30988 == null)))?((((map__30988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30988):map__30988);
var effect = map__30988__$1;
var ms = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30988__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30984,chunk__30985,count__30986,i__30987,map__30988,map__30988__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30984,chunk__30985,count__30986,i__30987,map__30988,map__30988__$1,effect,ms,dispatch))
,ms);
}

var G__30992 = seq__30984;
var G__30993 = chunk__30985;
var G__30994 = count__30986;
var G__30995 = (i__30987 + (1));
seq__30984 = G__30992;
chunk__30985 = G__30993;
count__30986 = G__30994;
i__30987 = G__30995;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30984);
if(temp__4657__auto__){
var seq__30984__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30984__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__30984__$1);
var G__30996 = cljs.core.chunk_rest.call(null,seq__30984__$1);
var G__30997 = c__28211__auto__;
var G__30998 = cljs.core.count.call(null,c__28211__auto__);
var G__30999 = (0);
seq__30984 = G__30996;
chunk__30985 = G__30997;
count__30986 = G__30998;
i__30987 = G__30999;
continue;
} else {
var map__30990 = cljs.core.first.call(null,seq__30984__$1);
var map__30990__$1 = ((((!((map__30990 == null)))?((((map__30990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30990):map__30990);
var effect = map__30990__$1;
var ms = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30984,chunk__30985,count__30986,i__30987,map__30990,map__30990__$1,effect,ms,dispatch,seq__30984__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30984,chunk__30985,count__30986,i__30987,map__30990,map__30990__$1,effect,ms,dispatch,seq__30984__$1,temp__4657__auto__))
,ms);
}

var G__31000 = cljs.core.next.call(null,seq__30984__$1);
var G__31001 = null;
var G__31002 = (0);
var G__31003 = (0);
seq__30984 = G__31000;
chunk__30985 = G__31001;
count__30986 = G__31002;
i__30987 = G__31003;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__31004 = cljs.core.seq.call(null,value);
var chunk__31005 = null;
var count__31006 = (0);
var i__31007 = (0);
while(true){
if((i__31007 < count__31006)){
var event = cljs.core._nth.call(null,chunk__31005,i__31007);
re_frame.router.dispatch.call(null,event);

var G__31008 = seq__31004;
var G__31009 = chunk__31005;
var G__31010 = count__31006;
var G__31011 = (i__31007 + (1));
seq__31004 = G__31008;
chunk__31005 = G__31009;
count__31006 = G__31010;
i__31007 = G__31011;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31004);
if(temp__4657__auto__){
var seq__31004__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31004__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__31004__$1);
var G__31012 = cljs.core.chunk_rest.call(null,seq__31004__$1);
var G__31013 = c__28211__auto__;
var G__31014 = cljs.core.count.call(null,c__28211__auto__);
var G__31015 = (0);
seq__31004 = G__31012;
chunk__31005 = G__31013;
count__31006 = G__31014;
i__31007 = G__31015;
continue;
} else {
var event = cljs.core.first.call(null,seq__31004__$1);
re_frame.router.dispatch.call(null,event);

var G__31016 = cljs.core.next.call(null,seq__31004__$1);
var G__31017 = null;
var G__31018 = (0);
var G__31019 = (0);
seq__31004 = G__31016;
chunk__31005 = G__31017;
count__31006 = G__31018;
i__31007 = G__31019;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1479706413371