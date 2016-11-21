// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('peak_dashboard.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
peak_dashboard.routes.hook_browser_navigation_BANG_ = (function peak_dashboard$routes$hook_browser_navigation_BANG_(){
var G__13573 = (new goog.History());
var G__13574_13577 = G__13573;
var G__13575_13578 = goog.history.EventType.NAVIGATE;
var G__13576_13579 = ((function (G__13574_13577,G__13575_13578,G__13573){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__13574_13577,G__13575_13578,G__13573))
;
goog.events.listen(G__13574_13577,G__13575_13578,G__13576_13579);

G__13573.setEnabled(true);

return G__13573;
});
peak_dashboard.routes.app_routes = (function peak_dashboard$routes$app_routes(){
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__13375__auto___13608 = (function (params__13376__auto__){
if(cljs.core.map_QMARK_(params__13376__auto__)){
var map__13594 = params__13376__auto__;
var map__13594__$1 = ((((!((map__13594 == null)))?((((map__13594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13594):map__13594);
var G__13596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$home_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13596) : re_frame.core.dispatch.call(null,G__13596));
} else {
if(cljs.core.vector_QMARK_(params__13376__auto__)){
var vec__13597 = params__13376__auto__;
var G__13600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$home_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13600) : re_frame.core.dispatch.call(null,G__13600));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__13375__auto___13608);


var action__13375__auto___13609 = (function (params__13376__auto__){
if(cljs.core.map_QMARK_(params__13376__auto__)){
var map__13601 = params__13376__auto__;
var map__13601__$1 = ((((!((map__13601 == null)))?((((map__13601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13601):map__13601);
var G__13603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$about_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13603) : re_frame.core.dispatch.call(null,G__13603));
} else {
if(cljs.core.vector_QMARK_(params__13376__auto__)){
var vec__13604 = params__13376__auto__;
var G__13607 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_panel,cljs.core.cst$kw$about_DASH_panel], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13607) : re_frame.core.dispatch.call(null,G__13607));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__13375__auto___13609);


return peak_dashboard.routes.hook_browser_navigation_BANG_();
});
