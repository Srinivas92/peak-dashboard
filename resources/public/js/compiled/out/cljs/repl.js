// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29893){
var map__29918 = p__29893;
var map__29918__$1 = ((((!((map__29918 == null)))?((((map__29918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);
var m = map__29918__$1;
var n = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29920_29942 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29921_29943 = null;
var count__29922_29944 = (0);
var i__29923_29945 = (0);
while(true){
if((i__29923_29945 < count__29922_29944)){
var f_29946 = cljs.core._nth.call(null,chunk__29921_29943,i__29923_29945);
cljs.core.println.call(null,"  ",f_29946);

var G__29947 = seq__29920_29942;
var G__29948 = chunk__29921_29943;
var G__29949 = count__29922_29944;
var G__29950 = (i__29923_29945 + (1));
seq__29920_29942 = G__29947;
chunk__29921_29943 = G__29948;
count__29922_29944 = G__29949;
i__29923_29945 = G__29950;
continue;
} else {
var temp__4657__auto___29951 = cljs.core.seq.call(null,seq__29920_29942);
if(temp__4657__auto___29951){
var seq__29920_29952__$1 = temp__4657__auto___29951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29920_29952__$1)){
var c__28211__auto___29953 = cljs.core.chunk_first.call(null,seq__29920_29952__$1);
var G__29954 = cljs.core.chunk_rest.call(null,seq__29920_29952__$1);
var G__29955 = c__28211__auto___29953;
var G__29956 = cljs.core.count.call(null,c__28211__auto___29953);
var G__29957 = (0);
seq__29920_29942 = G__29954;
chunk__29921_29943 = G__29955;
count__29922_29944 = G__29956;
i__29923_29945 = G__29957;
continue;
} else {
var f_29958 = cljs.core.first.call(null,seq__29920_29952__$1);
cljs.core.println.call(null,"  ",f_29958);

var G__29959 = cljs.core.next.call(null,seq__29920_29952__$1);
var G__29960 = null;
var G__29961 = (0);
var G__29962 = (0);
seq__29920_29942 = G__29959;
chunk__29921_29943 = G__29960;
count__29922_29944 = G__29961;
i__29923_29945 = G__29962;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29963 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27400__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29963);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29963)))?cljs.core.second.call(null,arglists_29963):arglists_29963));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29924_29964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29925_29965 = null;
var count__29926_29966 = (0);
var i__29927_29967 = (0);
while(true){
if((i__29927_29967 < count__29926_29966)){
var vec__29928_29968 = cljs.core._nth.call(null,chunk__29925_29965,i__29927_29967);
var name_29969 = cljs.core.nth.call(null,vec__29928_29968,(0),null);
var map__29931_29970 = cljs.core.nth.call(null,vec__29928_29968,(1),null);
var map__29931_29971__$1 = ((((!((map__29931_29970 == null)))?((((map__29931_29970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29931_29970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29931_29970):map__29931_29970);
var doc_29972 = cljs.core.get.call(null,map__29931_29971__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29973 = cljs.core.get.call(null,map__29931_29971__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29969);

cljs.core.println.call(null," ",arglists_29973);

if(cljs.core.truth_(doc_29972)){
cljs.core.println.call(null," ",doc_29972);
} else {
}

var G__29974 = seq__29924_29964;
var G__29975 = chunk__29925_29965;
var G__29976 = count__29926_29966;
var G__29977 = (i__29927_29967 + (1));
seq__29924_29964 = G__29974;
chunk__29925_29965 = G__29975;
count__29926_29966 = G__29976;
i__29927_29967 = G__29977;
continue;
} else {
var temp__4657__auto___29978 = cljs.core.seq.call(null,seq__29924_29964);
if(temp__4657__auto___29978){
var seq__29924_29979__$1 = temp__4657__auto___29978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29924_29979__$1)){
var c__28211__auto___29980 = cljs.core.chunk_first.call(null,seq__29924_29979__$1);
var G__29981 = cljs.core.chunk_rest.call(null,seq__29924_29979__$1);
var G__29982 = c__28211__auto___29980;
var G__29983 = cljs.core.count.call(null,c__28211__auto___29980);
var G__29984 = (0);
seq__29924_29964 = G__29981;
chunk__29925_29965 = G__29982;
count__29926_29966 = G__29983;
i__29927_29967 = G__29984;
continue;
} else {
var vec__29933_29985 = cljs.core.first.call(null,seq__29924_29979__$1);
var name_29986 = cljs.core.nth.call(null,vec__29933_29985,(0),null);
var map__29936_29987 = cljs.core.nth.call(null,vec__29933_29985,(1),null);
var map__29936_29988__$1 = ((((!((map__29936_29987 == null)))?((((map__29936_29987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29936_29987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29936_29987):map__29936_29987);
var doc_29989 = cljs.core.get.call(null,map__29936_29988__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29990 = cljs.core.get.call(null,map__29936_29988__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29986);

cljs.core.println.call(null," ",arglists_29990);

if(cljs.core.truth_(doc_29989)){
cljs.core.println.call(null," ",doc_29989);
} else {
}

var G__29991 = cljs.core.next.call(null,seq__29924_29979__$1);
var G__29992 = null;
var G__29993 = (0);
var G__29994 = (0);
seq__29924_29964 = G__29991;
chunk__29925_29965 = G__29992;
count__29926_29966 = G__29993;
i__29927_29967 = G__29994;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__29938 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29939 = null;
var count__29940 = (0);
var i__29941 = (0);
while(true){
if((i__29941 < count__29940)){
var role = cljs.core._nth.call(null,chunk__29939,i__29941);
var temp__4657__auto___29995__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29995__$1)){
var spec_29996 = temp__4657__auto___29995__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29996));
} else {
}

var G__29997 = seq__29938;
var G__29998 = chunk__29939;
var G__29999 = count__29940;
var G__30000 = (i__29941 + (1));
seq__29938 = G__29997;
chunk__29939 = G__29998;
count__29940 = G__29999;
i__29941 = G__30000;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29938);
if(temp__4657__auto____$1){
var seq__29938__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29938__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__29938__$1);
var G__30001 = cljs.core.chunk_rest.call(null,seq__29938__$1);
var G__30002 = c__28211__auto__;
var G__30003 = cljs.core.count.call(null,c__28211__auto__);
var G__30004 = (0);
seq__29938 = G__30001;
chunk__29939 = G__30002;
count__29940 = G__30003;
i__29941 = G__30004;
continue;
} else {
var role = cljs.core.first.call(null,seq__29938__$1);
var temp__4657__auto___30005__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30005__$2)){
var spec_30006 = temp__4657__auto___30005__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30006));
} else {
}

var G__30007 = cljs.core.next.call(null,seq__29938__$1);
var G__30008 = null;
var G__30009 = (0);
var G__30010 = (0);
seq__29938 = G__30007;
chunk__29939 = G__30008;
count__29940 = G__30009;
i__29941 = G__30010;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1479706409950