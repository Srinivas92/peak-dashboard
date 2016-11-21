goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('peak_dashboard.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44528__delegate = function (x){
if(cljs.core.truth_(peak_dashboard.core.mount_root)){
return cljs.core.apply.call(null,peak_dashboard.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'peak-dashboard.core/mount-root' is missing");
}
};
var G__44528 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__44529__i = 0, G__44529__a = new Array(arguments.length -  0);
while (G__44529__i < G__44529__a.length) {G__44529__a[G__44529__i] = arguments[G__44529__i + 0]; ++G__44529__i;}
  x = new cljs.core.IndexedSeq(G__44529__a,0);
} 
return G__44528__delegate.call(this,x);};
G__44528.cljs$lang$maxFixedArity = 0;
G__44528.cljs$lang$applyTo = (function (arglist__44530){
var x = cljs.core.seq(arglist__44530);
return G__44528__delegate(x);
});
G__44528.cljs$core$IFn$_invoke$arity$variadic = G__44528__delegate;
return G__44528;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
