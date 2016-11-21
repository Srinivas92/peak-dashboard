// Compiled by ClojureScript 1.9.229 {}
goog.provide('peak_dashboard.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('peak_dashboard.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return peak_dashboard.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__31228){
var vec__31229 = p__31228;
var _ = cljs.core.nth.call(null,vec__31229,(0),null);
var active_panel = cljs.core.nth.call(null,vec__31229,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=events.js.map?rel=1479706414004