goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('peak_dashboard.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__45768__delegate = function (x){
if(cljs.core.truth_(peak_dashboard.core.mount_root)){
return cljs.core.apply.call(null,peak_dashboard.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'peak-dashboard.core/mount-root' is missing");
}
};
var G__45768 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__45769__i = 0, G__45769__a = new Array(arguments.length -  0);
while (G__45769__i < G__45769__a.length) {G__45769__a[G__45769__i] = arguments[G__45769__i + 0]; ++G__45769__i;}
  x = new cljs.core.IndexedSeq(G__45769__a,0);
} 
return G__45768__delegate.call(this,x);};
G__45768.cljs$lang$maxFixedArity = 0;
G__45768.cljs$lang$applyTo = (function (arglist__45770){
var x = cljs.core.seq(arglist__45770);
return G__45768__delegate(x);
});
G__45768.cljs$core$IFn$_invoke$arity$variadic = G__45768__delegate;
return G__45768;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
