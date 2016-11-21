// Compiled by ClojureScript 1.9.229 {}
goog.provide('peak_dashboard.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
peak_dashboard.routes.hook_browser_navigation_BANG_ = (function peak_dashboard$routes$hook_browser_navigation_BANG_(){
var G__31197 = (new goog.History());
goog.events.listen(G__31197,goog.history.EventType.NAVIGATE,((function (G__31197){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__31197))
);

G__31197.setEnabled(true);

return G__31197;
});
peak_dashboard.routes.app_routes = (function peak_dashboard$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__30703__auto___31218 = (function (params__30704__auto__){
if(cljs.core.map_QMARK_.call(null,params__30704__auto__)){
var map__31208 = params__30704__auto__;
var map__31208__$1 = ((((!((map__31208 == null)))?((((map__31208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31208):map__31208);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30704__auto__)){
var vec__31210 = params__30704__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__30703__auto___31218);


var action__30703__auto___31219 = (function (params__30704__auto__){
if(cljs.core.map_QMARK_.call(null,params__30704__auto__)){
var map__31213 = params__30704__auto__;
var map__31213__$1 = ((((!((map__31213 == null)))?((((map__31213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31213):map__31213);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30704__auto__)){
var vec__31215 = params__30704__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__30703__auto___31219);


return peak_dashboard.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1479706413904