// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x41548_41549 = value;
x41548_41549.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x41553_41554 = value;
x41553_41554.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x41558_41559 = value;
x41558_41559.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__27388__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__27388__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__27388__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41567 = arguments.length;
var i__28476__auto___41568 = (0);
while(true){
if((i__28476__auto___41568 < len__28475__auto___41567)){
args__28482__auto__.push((arguments[i__28476__auto___41568]));

var G__41569 = (i__28476__auto___41568 + (1));
i__28476__auto___41568 = G__41569;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__41563_41570 = cljs.core.seq.call(null,items);
var chunk__41564_41571 = null;
var count__41565_41572 = (0);
var i__41566_41573 = (0);
while(true){
if((i__41566_41573 < count__41565_41572)){
var item_41574 = cljs.core._nth.call(null,chunk__41564_41571,i__41566_41573);
if(cljs.core.some_QMARK_.call(null,item_41574)){
if(cljs.core.coll_QMARK_.call(null,item_41574)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41574)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41574));
}
} else {
}

var G__41575 = seq__41563_41570;
var G__41576 = chunk__41564_41571;
var G__41577 = count__41565_41572;
var G__41578 = (i__41566_41573 + (1));
seq__41563_41570 = G__41575;
chunk__41564_41571 = G__41576;
count__41565_41572 = G__41577;
i__41566_41573 = G__41578;
continue;
} else {
var temp__4657__auto___41579 = cljs.core.seq.call(null,seq__41563_41570);
if(temp__4657__auto___41579){
var seq__41563_41580__$1 = temp__4657__auto___41579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41563_41580__$1)){
var c__28211__auto___41581 = cljs.core.chunk_first.call(null,seq__41563_41580__$1);
var G__41582 = cljs.core.chunk_rest.call(null,seq__41563_41580__$1);
var G__41583 = c__28211__auto___41581;
var G__41584 = cljs.core.count.call(null,c__28211__auto___41581);
var G__41585 = (0);
seq__41563_41570 = G__41582;
chunk__41564_41571 = G__41583;
count__41565_41572 = G__41584;
i__41566_41573 = G__41585;
continue;
} else {
var item_41586 = cljs.core.first.call(null,seq__41563_41580__$1);
if(cljs.core.some_QMARK_.call(null,item_41586)){
if(cljs.core.coll_QMARK_.call(null,item_41586)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41586)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41586));
}
} else {
}

var G__41587 = cljs.core.next.call(null,seq__41563_41580__$1);
var G__41588 = null;
var G__41589 = (0);
var G__41590 = (0);
seq__41563_41570 = G__41587;
chunk__41564_41571 = G__41588;
count__41565_41572 = G__41589;
i__41566_41573 = G__41590;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq41562){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41562));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41598 = arguments.length;
var i__28476__auto___41599 = (0);
while(true){
if((i__28476__auto___41599 < len__28475__auto___41598)){
args__28482__auto__.push((arguments[i__28476__auto___41599]));

var G__41600 = (i__28476__auto___41599 + (1));
i__28476__auto___41599 = G__41600;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((2) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28483__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__41594_41601 = cljs.core.seq.call(null,children);
var chunk__41595_41602 = null;
var count__41596_41603 = (0);
var i__41597_41604 = (0);
while(true){
if((i__41597_41604 < count__41596_41603)){
var child_41605 = cljs.core._nth.call(null,chunk__41595_41602,i__41597_41604);
if(cljs.core.some_QMARK_.call(null,child_41605)){
if(cljs.core.coll_QMARK_.call(null,child_41605)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41605))));
} else {
var temp__4655__auto___41606 = devtools.formatters.helpers.pref.call(null,child_41605);
if(cljs.core.truth_(temp__4655__auto___41606)){
var child_value_41607 = temp__4655__auto___41606;
template.push(child_value_41607);
} else {
}
}
} else {
}

var G__41608 = seq__41594_41601;
var G__41609 = chunk__41595_41602;
var G__41610 = count__41596_41603;
var G__41611 = (i__41597_41604 + (1));
seq__41594_41601 = G__41608;
chunk__41595_41602 = G__41609;
count__41596_41603 = G__41610;
i__41597_41604 = G__41611;
continue;
} else {
var temp__4657__auto___41612 = cljs.core.seq.call(null,seq__41594_41601);
if(temp__4657__auto___41612){
var seq__41594_41613__$1 = temp__4657__auto___41612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41594_41613__$1)){
var c__28211__auto___41614 = cljs.core.chunk_first.call(null,seq__41594_41613__$1);
var G__41615 = cljs.core.chunk_rest.call(null,seq__41594_41613__$1);
var G__41616 = c__28211__auto___41614;
var G__41617 = cljs.core.count.call(null,c__28211__auto___41614);
var G__41618 = (0);
seq__41594_41601 = G__41615;
chunk__41595_41602 = G__41616;
count__41596_41603 = G__41617;
i__41597_41604 = G__41618;
continue;
} else {
var child_41619 = cljs.core.first.call(null,seq__41594_41613__$1);
if(cljs.core.some_QMARK_.call(null,child_41619)){
if(cljs.core.coll_QMARK_.call(null,child_41619)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41619))));
} else {
var temp__4655__auto___41620 = devtools.formatters.helpers.pref.call(null,child_41619);
if(cljs.core.truth_(temp__4655__auto___41620)){
var child_value_41621 = temp__4655__auto___41620;
template.push(child_value_41621);
} else {
}
}
} else {
}

var G__41622 = cljs.core.next.call(null,seq__41594_41613__$1);
var G__41623 = null;
var G__41624 = (0);
var G__41625 = (0);
seq__41594_41601 = G__41622;
chunk__41595_41602 = G__41623;
count__41596_41603 = G__41624;
i__41597_41604 = G__41625;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq41591){
var G__41592 = cljs.core.first.call(null,seq41591);
var seq41591__$1 = cljs.core.next.call(null,seq41591);
var G__41593 = cljs.core.first.call(null,seq41591__$1);
var seq41591__$2 = cljs.core.next.call(null,seq41591__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__41592,G__41593,seq41591__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41628 = arguments.length;
var i__28476__auto___41629 = (0);
while(true){
if((i__28476__auto___41629 < len__28475__auto___41628)){
args__28482__auto__.push((arguments[i__28476__auto___41629]));

var G__41630 = (i__28476__auto___41629 + (1));
i__28476__auto___41629 = G__41630;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq41626){
var G__41627 = cljs.core.first.call(null,seq41626);
var seq41626__$1 = cljs.core.next.call(null,seq41626);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41627,seq41626__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41633 = arguments.length;
var i__28476__auto___41634 = (0);
while(true){
if((i__28476__auto___41634 < len__28475__auto___41633)){
args__28482__auto__.push((arguments[i__28476__auto___41634]));

var G__41635 = (i__28476__auto___41634 + (1));
i__28476__auto___41634 = G__41635;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq41631){
var G__41632 = cljs.core.first.call(null,seq41631);
var seq41631__$1 = cljs.core.next.call(null,seq41631);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41632,seq41631__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args41636 = [];
var len__28475__auto___41641 = arguments.length;
var i__28476__auto___41642 = (0);
while(true){
if((i__28476__auto___41642 < len__28475__auto___41641)){
args41636.push((arguments[i__28476__auto___41642]));

var G__41643 = (i__28476__auto___41642 + (1));
i__28476__auto___41642 = G__41643;
continue;
} else {
}
break;
}

var G__41638 = args41636.length;
switch (G__41638) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41636.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj41640 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__27400__auto__ = start_index;
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return (0);
}
})()};
return obj41640;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41651 = arguments.length;
var i__28476__auto___41652 = (0);
while(true){
if((i__28476__auto___41652 < len__28475__auto___41651)){
args__28482__auto__.push((arguments[i__28476__auto___41652]));

var G__41653 = (i__28476__auto___41652 + (1));
i__28476__auto___41652 = G__41653;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41647){
var vec__41648 = p__41647;
var state_override_fn = cljs.core.nth.call(null,vec__41648,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq41645){
var G__41646 = cljs.core.first.call(null,seq41645);
var seq41645__$1 = cljs.core.next.call(null,seq41645);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__41646,seq41645__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__28386__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41657_41660 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41658_41661 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41657_41660,_STAR_print_fn_STAR_41658_41661,sb__28386__auto__){
return (function (x__28387__auto__){
return sb__28386__auto__.append(x__28387__auto__);
});})(_STAR_print_newline_STAR_41657_41660,_STAR_print_fn_STAR_41658_41661,sb__28386__auto__))
;

try{var _STAR_print_level_STAR_41659_41662 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41659_41662;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41658_41661;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41657_41660;
}
return [cljs.core.str(sb__28386__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_41664 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41664;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__41666 = name;
switch (G__41666) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__41671 = tag;
var html_tag = cljs.core.nth.call(null,vec__41671,(0),null);
var style = cljs.core.nth.call(null,vec__41671,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_41675 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41675;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_41678 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_41679 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41679;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_41678;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__41680 = initial_value;
var G__41681 = value.call(null);
initial_value = G__41680;
value = G__41681;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__41682 = initial_value;
var G__41683 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__41682;
value = G__41683;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__41684 = initial_value;
var G__41685 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__41684;
value = G__41685;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1479706428595