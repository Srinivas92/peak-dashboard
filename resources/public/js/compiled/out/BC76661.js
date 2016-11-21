goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('peak_dashboard.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44502__delegate = function (x){
if(cljs.core.truth_(peak_dashboard.core.mount_root)){
return cljs.core.apply.call(null,peak_dashboard.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'peak-dashboard.core/mount-root' is missing");
}
};
var G__44502 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__44503__i = 0, G__44503__a = new Array(arguments.length -  0);
while (G__44503__i < G__44503__a.length) {G__44503__a[G__44503__i] = arguments[G__44503__i + 0]; ++G__44503__i;}
  x = new cljs.core.IndexedSeq(G__44503__a,0);
} 
return G__44502__delegate.call(this,x);};
G__44502.cljs$lang$maxFixedArity = 0;
G__44502.cljs$lang$applyTo = (function (arglist__44504){
var x = cljs.core.seq(arglist__44504);
return G__44502__delegate(x);
});
G__44502.cljs$core$IFn$_invoke$arity$variadic = G__44502__delegate;
return G__44502;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
