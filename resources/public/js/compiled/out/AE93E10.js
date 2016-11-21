goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('peak_dashboard.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__50122__delegate = function (x){
if(cljs.core.truth_(peak_dashboard.core.mount_root)){
return cljs.core.apply.call(null,peak_dashboard.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'peak-dashboard.core/mount-root' is missing");
}
};
var G__50122 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__50123__i = 0, G__50123__a = new Array(arguments.length -  0);
while (G__50123__i < G__50123__a.length) {G__50123__a[G__50123__i] = arguments[G__50123__i + 0]; ++G__50123__i;}
  x = new cljs.core.IndexedSeq(G__50123__a,0);
} 
return G__50122__delegate.call(this,x);};
G__50122.cljs$lang$maxFixedArity = 0;
G__50122.cljs$lang$applyTo = (function (arglist__50124){
var x = cljs.core.seq(arglist__50124);
return G__50122__delegate(x);
});
G__50122.cljs$core$IFn$_invoke$arity$variadic = G__50122__delegate;
return G__50122;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
