// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args38171 = [];
var len__28475__auto___38174 = arguments.length;
var i__28476__auto___38175 = (0);
while(true){
if((i__28476__auto___38175 < len__28475__auto___38174)){
args38171.push((arguments[i__28476__auto___38175]));

var G__38176 = (i__28476__auto___38175 + (1));
i__28476__auto___38175 = G__38176;
continue;
} else {
}
break;
}

var G__38173 = args38171.length;
switch (G__38173) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38171.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28482__auto__ = [];
var len__28475__auto___38179 = arguments.length;
var i__28476__auto___38180 = (0);
while(true){
if((i__28476__auto___38180 < len__28475__auto___38179)){
args__28482__auto__.push((arguments[i__28476__auto___38180]));

var G__38181 = (i__28476__auto___38180 + (1));
i__28476__auto___38180 = G__38181;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38178){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38178));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28482__auto__ = [];
var len__28475__auto___38183 = arguments.length;
var i__28476__auto___38184 = (0);
while(true){
if((i__28476__auto___38184 < len__28475__auto___38183)){
args__28482__auto__.push((arguments[i__28476__auto___38184]));

var G__38185 = (i__28476__auto___38184 + (1));
i__28476__auto___38184 = G__38185;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38182){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38182));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38186 = cljs.core._EQ_;
var expr__38187 = (function (){var or__27400__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38190){if((e38190 instanceof Error)){
var e = e38190;
return false;
} else {
throw e38190;

}
}})();
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38186.call(null,"true",expr__38187))){
return true;
} else {
if(cljs.core.truth_(pred__38186.call(null,"false",expr__38187))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38187)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e38192){if((e38192 instanceof Error)){
var e = e38192;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e38192;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38193){
var map__38196 = p__38193;
var map__38196__$1 = ((((!((map__38196 == null)))?((((map__38196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38196):map__38196);
var message = cljs.core.get.call(null,map__38196__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38196__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27400__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27388__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27388__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27388__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32228__auto___38358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___38358,ch){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___38358,ch){
return (function (state_38327){
var state_val_38328 = (state_38327[(1)]);
if((state_val_38328 === (7))){
var inst_38323 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38329_38359 = state_38327__$1;
(statearr_38329_38359[(2)] = inst_38323);

(statearr_38329_38359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (1))){
var state_38327__$1 = state_38327;
var statearr_38330_38360 = state_38327__$1;
(statearr_38330_38360[(2)] = null);

(statearr_38330_38360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (4))){
var inst_38280 = (state_38327[(7)]);
var inst_38280__$1 = (state_38327[(2)]);
var state_38327__$1 = (function (){var statearr_38331 = state_38327;
(statearr_38331[(7)] = inst_38280__$1);

return statearr_38331;
})();
if(cljs.core.truth_(inst_38280__$1)){
var statearr_38332_38361 = state_38327__$1;
(statearr_38332_38361[(1)] = (5));

} else {
var statearr_38333_38362 = state_38327__$1;
(statearr_38333_38362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (15))){
var inst_38287 = (state_38327[(8)]);
var inst_38302 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38287);
var inst_38303 = cljs.core.first.call(null,inst_38302);
var inst_38304 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38303);
var inst_38305 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38304)].join('');
var inst_38306 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38305);
var state_38327__$1 = state_38327;
var statearr_38334_38363 = state_38327__$1;
(statearr_38334_38363[(2)] = inst_38306);

(statearr_38334_38363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (13))){
var inst_38311 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38335_38364 = state_38327__$1;
(statearr_38335_38364[(2)] = inst_38311);

(statearr_38335_38364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (6))){
var state_38327__$1 = state_38327;
var statearr_38336_38365 = state_38327__$1;
(statearr_38336_38365[(2)] = null);

(statearr_38336_38365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (17))){
var inst_38309 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38337_38366 = state_38327__$1;
(statearr_38337_38366[(2)] = inst_38309);

(statearr_38337_38366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (3))){
var inst_38325 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38327__$1,inst_38325);
} else {
if((state_val_38328 === (12))){
var inst_38286 = (state_38327[(9)]);
var inst_38300 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38286,opts);
var state_38327__$1 = state_38327;
if(cljs.core.truth_(inst_38300)){
var statearr_38338_38367 = state_38327__$1;
(statearr_38338_38367[(1)] = (15));

} else {
var statearr_38339_38368 = state_38327__$1;
(statearr_38339_38368[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (2))){
var state_38327__$1 = state_38327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38327__$1,(4),ch);
} else {
if((state_val_38328 === (11))){
var inst_38287 = (state_38327[(8)]);
var inst_38292 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38293 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38287);
var inst_38294 = cljs.core.async.timeout.call(null,(1000));
var inst_38295 = [inst_38293,inst_38294];
var inst_38296 = (new cljs.core.PersistentVector(null,2,(5),inst_38292,inst_38295,null));
var state_38327__$1 = state_38327;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38327__$1,(14),inst_38296);
} else {
if((state_val_38328 === (9))){
var inst_38287 = (state_38327[(8)]);
var inst_38313 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38314 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38287);
var inst_38315 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38314);
var inst_38316 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38315)].join('');
var inst_38317 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38316);
var state_38327__$1 = (function (){var statearr_38340 = state_38327;
(statearr_38340[(10)] = inst_38313);

return statearr_38340;
})();
var statearr_38341_38369 = state_38327__$1;
(statearr_38341_38369[(2)] = inst_38317);

(statearr_38341_38369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (5))){
var inst_38280 = (state_38327[(7)]);
var inst_38282 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38283 = (new cljs.core.PersistentArrayMap(null,2,inst_38282,null));
var inst_38284 = (new cljs.core.PersistentHashSet(null,inst_38283,null));
var inst_38285 = figwheel.client.focus_msgs.call(null,inst_38284,inst_38280);
var inst_38286 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38285);
var inst_38287 = cljs.core.first.call(null,inst_38285);
var inst_38288 = figwheel.client.autoload_QMARK_.call(null);
var state_38327__$1 = (function (){var statearr_38342 = state_38327;
(statearr_38342[(8)] = inst_38287);

(statearr_38342[(9)] = inst_38286);

return statearr_38342;
})();
if(cljs.core.truth_(inst_38288)){
var statearr_38343_38370 = state_38327__$1;
(statearr_38343_38370[(1)] = (8));

} else {
var statearr_38344_38371 = state_38327__$1;
(statearr_38344_38371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (14))){
var inst_38298 = (state_38327[(2)]);
var state_38327__$1 = state_38327;
var statearr_38345_38372 = state_38327__$1;
(statearr_38345_38372[(2)] = inst_38298);

(statearr_38345_38372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (16))){
var state_38327__$1 = state_38327;
var statearr_38346_38373 = state_38327__$1;
(statearr_38346_38373[(2)] = null);

(statearr_38346_38373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (10))){
var inst_38319 = (state_38327[(2)]);
var state_38327__$1 = (function (){var statearr_38347 = state_38327;
(statearr_38347[(11)] = inst_38319);

return statearr_38347;
})();
var statearr_38348_38374 = state_38327__$1;
(statearr_38348_38374[(2)] = null);

(statearr_38348_38374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38328 === (8))){
var inst_38286 = (state_38327[(9)]);
var inst_38290 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38286,opts);
var state_38327__$1 = state_38327;
if(cljs.core.truth_(inst_38290)){
var statearr_38349_38375 = state_38327__$1;
(statearr_38349_38375[(1)] = (11));

} else {
var statearr_38350_38376 = state_38327__$1;
(statearr_38350_38376[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32228__auto___38358,ch))
;
return ((function (switch__32116__auto__,c__32228__auto___38358,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32117__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32117__auto____0 = (function (){
var statearr_38354 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38354[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32117__auto__);

(statearr_38354[(1)] = (1));

return statearr_38354;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32117__auto____1 = (function (state_38327){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_38327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e38355){if((e38355 instanceof Object)){
var ex__32120__auto__ = e38355;
var statearr_38356_38377 = state_38327;
(statearr_38356_38377[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38378 = state_38327;
state_38327 = G__38378;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32117__auto__ = function(state_38327){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32117__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32117__auto____1.call(this,state_38327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32117__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32117__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___38358,ch))
})();
var state__32230__auto__ = (function (){var statearr_38357 = f__32229__auto__.call(null);
(statearr_38357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___38358);

return statearr_38357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___38358,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38379_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38379_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38382 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38382){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38381){if((e38381 instanceof Error)){
var e = e38381;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38382], null));
} else {
var e = e38381;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38382))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38383){
var map__38392 = p__38383;
var map__38392__$1 = ((((!((map__38392 == null)))?((((map__38392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38392):map__38392);
var opts = map__38392__$1;
var build_id = cljs.core.get.call(null,map__38392__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38392,map__38392__$1,opts,build_id){
return (function (p__38394){
var vec__38395 = p__38394;
var seq__38396 = cljs.core.seq.call(null,vec__38395);
var first__38397 = cljs.core.first.call(null,seq__38396);
var seq__38396__$1 = cljs.core.next.call(null,seq__38396);
var map__38398 = first__38397;
var map__38398__$1 = ((((!((map__38398 == null)))?((((map__38398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38398):map__38398);
var msg = map__38398__$1;
var msg_name = cljs.core.get.call(null,map__38398__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38396__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38395,seq__38396,first__38397,seq__38396__$1,map__38398,map__38398__$1,msg,msg_name,_,map__38392,map__38392__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38395,seq__38396,first__38397,seq__38396__$1,map__38398,map__38398__$1,msg,msg_name,_,map__38392,map__38392__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38392,map__38392__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38406){
var vec__38407 = p__38406;
var seq__38408 = cljs.core.seq.call(null,vec__38407);
var first__38409 = cljs.core.first.call(null,seq__38408);
var seq__38408__$1 = cljs.core.next.call(null,seq__38408);
var map__38410 = first__38409;
var map__38410__$1 = ((((!((map__38410 == null)))?((((map__38410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38410):map__38410);
var msg = map__38410__$1;
var msg_name = cljs.core.get.call(null,map__38410__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38408__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38412){
var map__38424 = p__38412;
var map__38424__$1 = ((((!((map__38424 == null)))?((((map__38424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38424):map__38424);
var on_compile_warning = cljs.core.get.call(null,map__38424__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38424__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38424,map__38424__$1,on_compile_warning,on_compile_fail){
return (function (p__38426){
var vec__38427 = p__38426;
var seq__38428 = cljs.core.seq.call(null,vec__38427);
var first__38429 = cljs.core.first.call(null,seq__38428);
var seq__38428__$1 = cljs.core.next.call(null,seq__38428);
var map__38430 = first__38429;
var map__38430__$1 = ((((!((map__38430 == null)))?((((map__38430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38430):map__38430);
var msg = map__38430__$1;
var msg_name = cljs.core.get.call(null,map__38430__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38428__$1;
var pred__38432 = cljs.core._EQ_;
var expr__38433 = msg_name;
if(cljs.core.truth_(pred__38432.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38433))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38432.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38433))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38424,map__38424__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto__,msg_hist,msg_names,msg){
return (function (state_38661){
var state_val_38662 = (state_38661[(1)]);
if((state_val_38662 === (7))){
var inst_38581 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38581)){
var statearr_38663_38713 = state_38661__$1;
(statearr_38663_38713[(1)] = (8));

} else {
var statearr_38664_38714 = state_38661__$1;
(statearr_38664_38714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (20))){
var inst_38655 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38665_38715 = state_38661__$1;
(statearr_38665_38715[(2)] = inst_38655);

(statearr_38665_38715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (27))){
var inst_38651 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38666_38716 = state_38661__$1;
(statearr_38666_38716[(2)] = inst_38651);

(statearr_38666_38716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (1))){
var inst_38574 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38574)){
var statearr_38667_38717 = state_38661__$1;
(statearr_38667_38717[(1)] = (2));

} else {
var statearr_38668_38718 = state_38661__$1;
(statearr_38668_38718[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (24))){
var inst_38653 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38669_38719 = state_38661__$1;
(statearr_38669_38719[(2)] = inst_38653);

(statearr_38669_38719[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (4))){
var inst_38659 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38661__$1,inst_38659);
} else {
if((state_val_38662 === (15))){
var inst_38657 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38670_38720 = state_38661__$1;
(statearr_38670_38720[(2)] = inst_38657);

(statearr_38670_38720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (21))){
var inst_38610 = (state_38661[(2)]);
var inst_38611 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38612 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38611);
var state_38661__$1 = (function (){var statearr_38671 = state_38661;
(statearr_38671[(7)] = inst_38610);

return statearr_38671;
})();
var statearr_38672_38721 = state_38661__$1;
(statearr_38672_38721[(2)] = inst_38612);

(statearr_38672_38721[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (31))){
var inst_38640 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38640)){
var statearr_38673_38722 = state_38661__$1;
(statearr_38673_38722[(1)] = (34));

} else {
var statearr_38674_38723 = state_38661__$1;
(statearr_38674_38723[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (32))){
var inst_38649 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38675_38724 = state_38661__$1;
(statearr_38675_38724[(2)] = inst_38649);

(statearr_38675_38724[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (33))){
var inst_38636 = (state_38661[(2)]);
var inst_38637 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38638 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38637);
var state_38661__$1 = (function (){var statearr_38676 = state_38661;
(statearr_38676[(8)] = inst_38636);

return statearr_38676;
})();
var statearr_38677_38725 = state_38661__$1;
(statearr_38677_38725[(2)] = inst_38638);

(statearr_38677_38725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (13))){
var inst_38595 = figwheel.client.heads_up.clear.call(null);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(16),inst_38595);
} else {
if((state_val_38662 === (22))){
var inst_38616 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38617 = figwheel.client.heads_up.append_warning_message.call(null,inst_38616);
var state_38661__$1 = state_38661;
var statearr_38678_38726 = state_38661__$1;
(statearr_38678_38726[(2)] = inst_38617);

(statearr_38678_38726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (36))){
var inst_38647 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38679_38727 = state_38661__$1;
(statearr_38679_38727[(2)] = inst_38647);

(statearr_38679_38727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (29))){
var inst_38627 = (state_38661[(2)]);
var inst_38628 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38629 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38628);
var state_38661__$1 = (function (){var statearr_38680 = state_38661;
(statearr_38680[(9)] = inst_38627);

return statearr_38680;
})();
var statearr_38681_38728 = state_38661__$1;
(statearr_38681_38728[(2)] = inst_38629);

(statearr_38681_38728[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (6))){
var inst_38576 = (state_38661[(10)]);
var state_38661__$1 = state_38661;
var statearr_38682_38729 = state_38661__$1;
(statearr_38682_38729[(2)] = inst_38576);

(statearr_38682_38729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (28))){
var inst_38623 = (state_38661[(2)]);
var inst_38624 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38625 = figwheel.client.heads_up.display_warning.call(null,inst_38624);
var state_38661__$1 = (function (){var statearr_38683 = state_38661;
(statearr_38683[(11)] = inst_38623);

return statearr_38683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(29),inst_38625);
} else {
if((state_val_38662 === (25))){
var inst_38621 = figwheel.client.heads_up.clear.call(null);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(28),inst_38621);
} else {
if((state_val_38662 === (34))){
var inst_38642 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(37),inst_38642);
} else {
if((state_val_38662 === (17))){
var inst_38601 = (state_38661[(2)]);
var inst_38602 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38603 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38602);
var state_38661__$1 = (function (){var statearr_38684 = state_38661;
(statearr_38684[(12)] = inst_38601);

return statearr_38684;
})();
var statearr_38685_38730 = state_38661__$1;
(statearr_38685_38730[(2)] = inst_38603);

(statearr_38685_38730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (3))){
var inst_38593 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38593)){
var statearr_38686_38731 = state_38661__$1;
(statearr_38686_38731[(1)] = (13));

} else {
var statearr_38687_38732 = state_38661__$1;
(statearr_38687_38732[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (12))){
var inst_38589 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38688_38733 = state_38661__$1;
(statearr_38688_38733[(2)] = inst_38589);

(statearr_38688_38733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (2))){
var inst_38576 = (state_38661[(10)]);
var inst_38576__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38661__$1 = (function (){var statearr_38689 = state_38661;
(statearr_38689[(10)] = inst_38576__$1);

return statearr_38689;
})();
if(cljs.core.truth_(inst_38576__$1)){
var statearr_38690_38734 = state_38661__$1;
(statearr_38690_38734[(1)] = (5));

} else {
var statearr_38691_38735 = state_38661__$1;
(statearr_38691_38735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (23))){
var inst_38619 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38619)){
var statearr_38692_38736 = state_38661__$1;
(statearr_38692_38736[(1)] = (25));

} else {
var statearr_38693_38737 = state_38661__$1;
(statearr_38693_38737[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (35))){
var state_38661__$1 = state_38661;
var statearr_38694_38738 = state_38661__$1;
(statearr_38694_38738[(2)] = null);

(statearr_38694_38738[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (19))){
var inst_38614 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38614)){
var statearr_38695_38739 = state_38661__$1;
(statearr_38695_38739[(1)] = (22));

} else {
var statearr_38696_38740 = state_38661__$1;
(statearr_38696_38740[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (11))){
var inst_38585 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38697_38741 = state_38661__$1;
(statearr_38697_38741[(2)] = inst_38585);

(statearr_38697_38741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (9))){
var inst_38587 = figwheel.client.heads_up.clear.call(null);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(12),inst_38587);
} else {
if((state_val_38662 === (5))){
var inst_38578 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38661__$1 = state_38661;
var statearr_38698_38742 = state_38661__$1;
(statearr_38698_38742[(2)] = inst_38578);

(statearr_38698_38742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (14))){
var inst_38605 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38605)){
var statearr_38699_38743 = state_38661__$1;
(statearr_38699_38743[(1)] = (18));

} else {
var statearr_38700_38744 = state_38661__$1;
(statearr_38700_38744[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (26))){
var inst_38631 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38661__$1 = state_38661;
if(cljs.core.truth_(inst_38631)){
var statearr_38701_38745 = state_38661__$1;
(statearr_38701_38745[(1)] = (30));

} else {
var statearr_38702_38746 = state_38661__$1;
(statearr_38702_38746[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (16))){
var inst_38597 = (state_38661[(2)]);
var inst_38598 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38599 = figwheel.client.heads_up.display_exception.call(null,inst_38598);
var state_38661__$1 = (function (){var statearr_38703 = state_38661;
(statearr_38703[(13)] = inst_38597);

return statearr_38703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(17),inst_38599);
} else {
if((state_val_38662 === (30))){
var inst_38633 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38634 = figwheel.client.heads_up.display_warning.call(null,inst_38633);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(33),inst_38634);
} else {
if((state_val_38662 === (10))){
var inst_38591 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38704_38747 = state_38661__$1;
(statearr_38704_38747[(2)] = inst_38591);

(statearr_38704_38747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (18))){
var inst_38607 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38608 = figwheel.client.heads_up.display_exception.call(null,inst_38607);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(21),inst_38608);
} else {
if((state_val_38662 === (37))){
var inst_38644 = (state_38661[(2)]);
var state_38661__$1 = state_38661;
var statearr_38705_38748 = state_38661__$1;
(statearr_38705_38748[(2)] = inst_38644);

(statearr_38705_38748[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38662 === (8))){
var inst_38583 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38661__$1 = state_38661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38661__$1,(11),inst_38583);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32228__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32116__auto__,c__32228__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto____0 = (function (){
var statearr_38709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38709[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto__);

(statearr_38709[(1)] = (1));

return statearr_38709;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto____1 = (function (state_38661){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_38661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e38710){if((e38710 instanceof Object)){
var ex__32120__auto__ = e38710;
var statearr_38711_38749 = state_38661;
(statearr_38711_38749[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38750 = state_38661;
state_38661 = G__38750;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto__ = function(state_38661){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto____1.call(this,state_38661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto__,msg_hist,msg_names,msg))
})();
var state__32230__auto__ = (function (){var statearr_38712 = f__32229__auto__.call(null);
(statearr_38712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto__);

return statearr_38712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto__,msg_hist,msg_names,msg))
);

return c__32228__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32228__auto___38813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___38813,ch){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___38813,ch){
return (function (state_38796){
var state_val_38797 = (state_38796[(1)]);
if((state_val_38797 === (1))){
var state_38796__$1 = state_38796;
var statearr_38798_38814 = state_38796__$1;
(statearr_38798_38814[(2)] = null);

(statearr_38798_38814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (2))){
var state_38796__$1 = state_38796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38796__$1,(4),ch);
} else {
if((state_val_38797 === (3))){
var inst_38794 = (state_38796[(2)]);
var state_38796__$1 = state_38796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38796__$1,inst_38794);
} else {
if((state_val_38797 === (4))){
var inst_38784 = (state_38796[(7)]);
var inst_38784__$1 = (state_38796[(2)]);
var state_38796__$1 = (function (){var statearr_38799 = state_38796;
(statearr_38799[(7)] = inst_38784__$1);

return statearr_38799;
})();
if(cljs.core.truth_(inst_38784__$1)){
var statearr_38800_38815 = state_38796__$1;
(statearr_38800_38815[(1)] = (5));

} else {
var statearr_38801_38816 = state_38796__$1;
(statearr_38801_38816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (5))){
var inst_38784 = (state_38796[(7)]);
var inst_38786 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38784);
var state_38796__$1 = state_38796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38796__$1,(8),inst_38786);
} else {
if((state_val_38797 === (6))){
var state_38796__$1 = state_38796;
var statearr_38802_38817 = state_38796__$1;
(statearr_38802_38817[(2)] = null);

(statearr_38802_38817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (7))){
var inst_38792 = (state_38796[(2)]);
var state_38796__$1 = state_38796;
var statearr_38803_38818 = state_38796__$1;
(statearr_38803_38818[(2)] = inst_38792);

(statearr_38803_38818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (8))){
var inst_38788 = (state_38796[(2)]);
var state_38796__$1 = (function (){var statearr_38804 = state_38796;
(statearr_38804[(8)] = inst_38788);

return statearr_38804;
})();
var statearr_38805_38819 = state_38796__$1;
(statearr_38805_38819[(2)] = null);

(statearr_38805_38819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32228__auto___38813,ch))
;
return ((function (switch__32116__auto__,c__32228__auto___38813,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32117__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32117__auto____0 = (function (){
var statearr_38809 = [null,null,null,null,null,null,null,null,null];
(statearr_38809[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32117__auto__);

(statearr_38809[(1)] = (1));

return statearr_38809;
});
var figwheel$client$heads_up_plugin_$_state_machine__32117__auto____1 = (function (state_38796){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_38796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e38810){if((e38810 instanceof Object)){
var ex__32120__auto__ = e38810;
var statearr_38811_38820 = state_38796;
(statearr_38811_38820[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38821 = state_38796;
state_38796 = G__38821;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32117__auto__ = function(state_38796){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32117__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32117__auto____1.call(this,state_38796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32117__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32117__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___38813,ch))
})();
var state__32230__auto__ = (function (){var statearr_38812 = f__32229__auto__.call(null);
(statearr_38812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___38813);

return statearr_38812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___38813,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto__){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto__){
return (function (state_38842){
var state_val_38843 = (state_38842[(1)]);
if((state_val_38843 === (1))){
var inst_38837 = cljs.core.async.timeout.call(null,(3000));
var state_38842__$1 = state_38842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38842__$1,(2),inst_38837);
} else {
if((state_val_38843 === (2))){
var inst_38839 = (state_38842[(2)]);
var inst_38840 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38842__$1 = (function (){var statearr_38844 = state_38842;
(statearr_38844[(7)] = inst_38839);

return statearr_38844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38842__$1,inst_38840);
} else {
return null;
}
}
});})(c__32228__auto__))
;
return ((function (switch__32116__auto__,c__32228__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32117__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32117__auto____0 = (function (){
var statearr_38848 = [null,null,null,null,null,null,null,null];
(statearr_38848[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32117__auto__);

(statearr_38848[(1)] = (1));

return statearr_38848;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32117__auto____1 = (function (state_38842){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_38842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e38849){if((e38849 instanceof Object)){
var ex__32120__auto__ = e38849;
var statearr_38850_38852 = state_38842;
(statearr_38850_38852[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38853 = state_38842;
state_38842 = G__38853;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32117__auto__ = function(state_38842){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32117__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32117__auto____1.call(this,state_38842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32117__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32117__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto__))
})();
var state__32230__auto__ = (function (){var statearr_38851 = f__32229__auto__.call(null);
(statearr_38851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto__);

return statearr_38851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto__))
);

return c__32228__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38876){
var state_val_38877 = (state_38876[(1)]);
if((state_val_38877 === (1))){
var inst_38870 = cljs.core.async.timeout.call(null,(2000));
var state_38876__$1 = state_38876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38876__$1,(2),inst_38870);
} else {
if((state_val_38877 === (2))){
var inst_38872 = (state_38876[(2)]);
var inst_38873 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38874 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38873);
var state_38876__$1 = (function (){var statearr_38878 = state_38876;
(statearr_38878[(7)] = inst_38872);

return statearr_38878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38876__$1,inst_38874);
} else {
return null;
}
}
});})(c__32228__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32116__auto__,c__32228__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto____0 = (function (){
var statearr_38882 = [null,null,null,null,null,null,null,null];
(statearr_38882[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto__);

(statearr_38882[(1)] = (1));

return statearr_38882;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto____1 = (function (state_38876){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_38876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e38883){if((e38883 instanceof Object)){
var ex__32120__auto__ = e38883;
var statearr_38884_38886 = state_38876;
(statearr_38884_38886[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38887 = state_38876;
state_38876 = G__38887;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto__ = function(state_38876){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto____1.call(this,state_38876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32230__auto__ = (function (){var statearr_38885 = f__32229__auto__.call(null);
(statearr_38885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto__);

return statearr_38885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto__,figwheel_version,temp__4657__auto__))
);

return c__32228__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38888){
var map__38892 = p__38888;
var map__38892__$1 = ((((!((map__38892 == null)))?((((map__38892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38892):map__38892);
var file = cljs.core.get.call(null,map__38892__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38892__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38892__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38894 = "";
var G__38894__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38894),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38894);
var G__38894__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38894__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38894__$1);
if(cljs.core.truth_((function (){var and__27388__auto__ = line;
if(cljs.core.truth_(and__27388__auto__)){
return column;
} else {
return and__27388__auto__;
}
})())){
return [cljs.core.str(G__38894__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38894__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38895){
var map__38902 = p__38895;
var map__38902__$1 = ((((!((map__38902 == null)))?((((map__38902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38902):map__38902);
var ed = map__38902__$1;
var formatted_exception = cljs.core.get.call(null,map__38902__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38902__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38902__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38904_38908 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38905_38909 = null;
var count__38906_38910 = (0);
var i__38907_38911 = (0);
while(true){
if((i__38907_38911 < count__38906_38910)){
var msg_38912 = cljs.core._nth.call(null,chunk__38905_38909,i__38907_38911);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38912);

var G__38913 = seq__38904_38908;
var G__38914 = chunk__38905_38909;
var G__38915 = count__38906_38910;
var G__38916 = (i__38907_38911 + (1));
seq__38904_38908 = G__38913;
chunk__38905_38909 = G__38914;
count__38906_38910 = G__38915;
i__38907_38911 = G__38916;
continue;
} else {
var temp__4657__auto___38917 = cljs.core.seq.call(null,seq__38904_38908);
if(temp__4657__auto___38917){
var seq__38904_38918__$1 = temp__4657__auto___38917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38904_38918__$1)){
var c__28211__auto___38919 = cljs.core.chunk_first.call(null,seq__38904_38918__$1);
var G__38920 = cljs.core.chunk_rest.call(null,seq__38904_38918__$1);
var G__38921 = c__28211__auto___38919;
var G__38922 = cljs.core.count.call(null,c__28211__auto___38919);
var G__38923 = (0);
seq__38904_38908 = G__38920;
chunk__38905_38909 = G__38921;
count__38906_38910 = G__38922;
i__38907_38911 = G__38923;
continue;
} else {
var msg_38924 = cljs.core.first.call(null,seq__38904_38918__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38924);

var G__38925 = cljs.core.next.call(null,seq__38904_38918__$1);
var G__38926 = null;
var G__38927 = (0);
var G__38928 = (0);
seq__38904_38908 = G__38925;
chunk__38905_38909 = G__38926;
count__38906_38910 = G__38927;
i__38907_38911 = G__38928;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38929){
var map__38932 = p__38929;
var map__38932__$1 = ((((!((map__38932 == null)))?((((map__38932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38932):map__38932);
var w = map__38932__$1;
var message = cljs.core.get.call(null,map__38932__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27388__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27388__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27388__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38944 = cljs.core.seq.call(null,plugins);
var chunk__38945 = null;
var count__38946 = (0);
var i__38947 = (0);
while(true){
if((i__38947 < count__38946)){
var vec__38948 = cljs.core._nth.call(null,chunk__38945,i__38947);
var k = cljs.core.nth.call(null,vec__38948,(0),null);
var plugin = cljs.core.nth.call(null,vec__38948,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38954 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38944,chunk__38945,count__38946,i__38947,pl_38954,vec__38948,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38954.call(null,msg_hist);
});})(seq__38944,chunk__38945,count__38946,i__38947,pl_38954,vec__38948,k,plugin))
);
} else {
}

var G__38955 = seq__38944;
var G__38956 = chunk__38945;
var G__38957 = count__38946;
var G__38958 = (i__38947 + (1));
seq__38944 = G__38955;
chunk__38945 = G__38956;
count__38946 = G__38957;
i__38947 = G__38958;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38944);
if(temp__4657__auto__){
var seq__38944__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38944__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__38944__$1);
var G__38959 = cljs.core.chunk_rest.call(null,seq__38944__$1);
var G__38960 = c__28211__auto__;
var G__38961 = cljs.core.count.call(null,c__28211__auto__);
var G__38962 = (0);
seq__38944 = G__38959;
chunk__38945 = G__38960;
count__38946 = G__38961;
i__38947 = G__38962;
continue;
} else {
var vec__38951 = cljs.core.first.call(null,seq__38944__$1);
var k = cljs.core.nth.call(null,vec__38951,(0),null);
var plugin = cljs.core.nth.call(null,vec__38951,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38963 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38944,chunk__38945,count__38946,i__38947,pl_38963,vec__38951,k,plugin,seq__38944__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38963.call(null,msg_hist);
});})(seq__38944,chunk__38945,count__38946,i__38947,pl_38963,vec__38951,k,plugin,seq__38944__$1,temp__4657__auto__))
);
} else {
}

var G__38964 = cljs.core.next.call(null,seq__38944__$1);
var G__38965 = null;
var G__38966 = (0);
var G__38967 = (0);
seq__38944 = G__38964;
chunk__38945 = G__38965;
count__38946 = G__38966;
i__38947 = G__38967;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38968 = [];
var len__28475__auto___38975 = arguments.length;
var i__28476__auto___38976 = (0);
while(true){
if((i__28476__auto___38976 < len__28475__auto___38975)){
args38968.push((arguments[i__28476__auto___38976]));

var G__38977 = (i__28476__auto___38976 + (1));
i__28476__auto___38976 = G__38977;
continue;
} else {
}
break;
}

var G__38970 = args38968.length;
switch (G__38970) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38968.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38971_38979 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38972_38980 = null;
var count__38973_38981 = (0);
var i__38974_38982 = (0);
while(true){
if((i__38974_38982 < count__38973_38981)){
var msg_38983 = cljs.core._nth.call(null,chunk__38972_38980,i__38974_38982);
figwheel.client.socket.handle_incoming_message.call(null,msg_38983);

var G__38984 = seq__38971_38979;
var G__38985 = chunk__38972_38980;
var G__38986 = count__38973_38981;
var G__38987 = (i__38974_38982 + (1));
seq__38971_38979 = G__38984;
chunk__38972_38980 = G__38985;
count__38973_38981 = G__38986;
i__38974_38982 = G__38987;
continue;
} else {
var temp__4657__auto___38988 = cljs.core.seq.call(null,seq__38971_38979);
if(temp__4657__auto___38988){
var seq__38971_38989__$1 = temp__4657__auto___38988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38971_38989__$1)){
var c__28211__auto___38990 = cljs.core.chunk_first.call(null,seq__38971_38989__$1);
var G__38991 = cljs.core.chunk_rest.call(null,seq__38971_38989__$1);
var G__38992 = c__28211__auto___38990;
var G__38993 = cljs.core.count.call(null,c__28211__auto___38990);
var G__38994 = (0);
seq__38971_38979 = G__38991;
chunk__38972_38980 = G__38992;
count__38973_38981 = G__38993;
i__38974_38982 = G__38994;
continue;
} else {
var msg_38995 = cljs.core.first.call(null,seq__38971_38989__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38995);

var G__38996 = cljs.core.next.call(null,seq__38971_38989__$1);
var G__38997 = null;
var G__38998 = (0);
var G__38999 = (0);
seq__38971_38979 = G__38996;
chunk__38972_38980 = G__38997;
count__38973_38981 = G__38998;
i__38974_38982 = G__38999;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39004 = arguments.length;
var i__28476__auto___39005 = (0);
while(true){
if((i__28476__auto___39005 < len__28475__auto___39004)){
args__28482__auto__.push((arguments[i__28476__auto___39005]));

var G__39006 = (i__28476__auto___39005 + (1));
i__28476__auto___39005 = G__39006;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39001){
var map__39002 = p__39001;
var map__39002__$1 = ((((!((map__39002 == null)))?((((map__39002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39002):map__39002);
var opts = map__39002__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39000){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39000));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39008){if((e39008 instanceof Error)){
var e = e39008;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39008;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39012){
var map__39013 = p__39012;
var map__39013__$1 = ((((!((map__39013 == null)))?((((map__39013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39013):map__39013);
var msg_name = cljs.core.get.call(null,map__39013__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1479706424113