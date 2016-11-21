// Compiled by ClojureScript 1.9.229 {}
goog.provide('peak_dashboard.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('peak_dashboard.views');
goog.require('peak_dashboard.routes');
goog.require('peak_dashboard.config');
goog.require('peak_dashboard.subs');
goog.require('peak_dashboard.events');
goog.require('re_frame.core');
peak_dashboard.core.dev_setup = (function peak_dashboard$core$dev_setup(){
if(cljs.core.truth_(peak_dashboard.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
peak_dashboard.core.mount_root = (function peak_dashboard$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [peak_dashboard.views.main_panel], null),document.getElementById("app"));
});
peak_dashboard.core.init = (function peak_dashboard$core$init(){
peak_dashboard.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

peak_dashboard.core.dev_setup.call(null);

return peak_dashboard.core.mount_root.call(null);
});
goog.exportSymbol('peak_dashboard.core.init', peak_dashboard.core.init);

//# sourceMappingURL=core.js.map?rel=1479706414034