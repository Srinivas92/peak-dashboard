// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('peak_dashboard.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('peak_dashboard.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize_DASH_db,(function (_,___$1){
return peak_dashboard.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_active_DASH_panel,(function (db,p__10115){
var vec__10116 = p__10115;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10116,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10116,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_panel,active_panel);
}));
