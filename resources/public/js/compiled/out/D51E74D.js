goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('peak_dashboard.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__50222__delegate = function (x){
if(cljs.core.truth_(peak_dashboard.core.mount_root)){
return cljs.core.apply.call(null,peak_dashboard.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'peak-dashboard.core/mount-root' is missing");
}
};
var G__50222 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__50223__i = 0, G__50223__a = new Array(arguments.length -  0);
while (G__50223__i < G__50223__a.length) {G__50223__a[G__50223__i] = arguments[G__50223__i + 0]; ++G__50223__i;}
  x = new cljs.core.IndexedSeq(G__50223__a,0);
} 
return G__50222__delegate.call(this,x);};
G__50222.cljs$lang$maxFixedArity = 0;
G__50222.cljs$lang$applyTo = (function (arglist__50224){
var x = cljs.core.seq(arglist__50224);
return G__50222__delegate(x);
});
G__50222.cljs$core$IFn$_invoke$arity$variadic = G__50222__delegate;
return G__50222;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
