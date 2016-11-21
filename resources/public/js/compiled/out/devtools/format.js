// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28063__auto__ = (((value == null))?null:value);
var m__28064__auto__ = (devtools.format._header[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,value);
} else {
var m__28064__auto____$1 = (devtools.format._header["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28063__auto__ = (((value == null))?null:value);
var m__28064__auto__ = (devtools.format._has_body[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,value);
} else {
var m__28064__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28063__auto__ = (((value == null))?null:value);
var m__28064__auto__ = (devtools.format._body[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,value);
} else {
var m__28064__auto____$1 = (devtools.format._body["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39119__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39119__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39119__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39119__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39118__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39118__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39119__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39119__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39119__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39119__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39118__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39118__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39119__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39119__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39119__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39119__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39118__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39118__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39119__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39119__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39119__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39119__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39118__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39118__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39119__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39119__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39119__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39119__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39118__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39118__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39119__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39119__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39119__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39119__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39118__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39118__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39119__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39119__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39119__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39119__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39118__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39118__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39140 = arguments.length;
var i__28476__auto___39141 = (0);
while(true){
if((i__28476__auto___39141 < len__28475__auto___39140)){
args__28482__auto__.push((arguments[i__28476__auto___39141]));

var G__39142 = (i__28476__auto___39141 + (1));
i__28476__auto___39141 = G__39142;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39139){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39139));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39144 = arguments.length;
var i__28476__auto___39145 = (0);
while(true){
if((i__28476__auto___39145 < len__28475__auto___39144)){
args__28482__auto__.push((arguments[i__28476__auto___39145]));

var G__39146 = (i__28476__auto___39145 + (1));
i__28476__auto___39145 = G__39146;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39143){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39143));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39148 = arguments.length;
var i__28476__auto___39149 = (0);
while(true){
if((i__28476__auto___39149 < len__28475__auto___39148)){
args__28482__auto__.push((arguments[i__28476__auto___39149]));

var G__39150 = (i__28476__auto___39149 + (1));
i__28476__auto___39149 = G__39150;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39147){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39147));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39152 = arguments.length;
var i__28476__auto___39153 = (0);
while(true){
if((i__28476__auto___39153 < len__28475__auto___39152)){
args__28482__auto__.push((arguments[i__28476__auto___39153]));

var G__39154 = (i__28476__auto___39153 + (1));
i__28476__auto___39153 = G__39154;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39151){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39151));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39156 = arguments.length;
var i__28476__auto___39157 = (0);
while(true){
if((i__28476__auto___39157 < len__28475__auto___39156)){
args__28482__auto__.push((arguments[i__28476__auto___39157]));

var G__39158 = (i__28476__auto___39157 + (1));
i__28476__auto___39157 = G__39158;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39155){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39155));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39160 = arguments.length;
var i__28476__auto___39161 = (0);
while(true){
if((i__28476__auto___39161 < len__28475__auto___39160)){
args__28482__auto__.push((arguments[i__28476__auto___39161]));

var G__39162 = (i__28476__auto___39161 + (1));
i__28476__auto___39161 = G__39162;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39159){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39159));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39164 = arguments.length;
var i__28476__auto___39165 = (0);
while(true){
if((i__28476__auto___39165 < len__28475__auto___39164)){
args__28482__auto__.push((arguments[i__28476__auto___39165]));

var G__39166 = (i__28476__auto___39165 + (1));
i__28476__auto___39165 = G__39166;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39163){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39163));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39174 = arguments.length;
var i__28476__auto___39175 = (0);
while(true){
if((i__28476__auto___39175 < len__28475__auto___39174)){
args__28482__auto__.push((arguments[i__28476__auto___39175]));

var G__39176 = (i__28476__auto___39175 + (1));
i__28476__auto___39175 = G__39176;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39170){
var vec__39171 = p__39170;
var state_override = cljs.core.nth.call(null,vec__39171,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39171,state_override){
return (function (p1__39167_SHARP_){
return cljs.core.merge.call(null,p1__39167_SHARP_,state_override);
});})(vec__39171,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39168){
var G__39169 = cljs.core.first.call(null,seq39168);
var seq39168__$1 = cljs.core.next.call(null,seq39168);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39169,seq39168__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39178 = arguments.length;
var i__28476__auto___39179 = (0);
while(true){
if((i__28476__auto___39179 < len__28475__auto___39178)){
args__28482__auto__.push((arguments[i__28476__auto___39179]));

var G__39180 = (i__28476__auto___39179 + (1));
i__28476__auto___39179 = G__39180;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39177){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39177));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39183 = arguments.length;
var i__28476__auto___39184 = (0);
while(true){
if((i__28476__auto___39184 < len__28475__auto___39183)){
args__28482__auto__.push((arguments[i__28476__auto___39184]));

var G__39185 = (i__28476__auto___39184 + (1));
i__28476__auto___39184 = G__39185;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39181){
var G__39182 = cljs.core.first.call(null,seq39181);
var seq39181__$1 = cljs.core.next.call(null,seq39181);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39182,seq39181__$1);
});


//# sourceMappingURL=format.js.map?rel=1479706424685