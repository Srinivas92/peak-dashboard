// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27400__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27400__auto__){
return or__27400__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27400__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35083_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35083_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35088 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35089 = null;
var count__35090 = (0);
var i__35091 = (0);
while(true){
if((i__35091 < count__35090)){
var n = cljs.core._nth.call(null,chunk__35089,i__35091);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35092 = seq__35088;
var G__35093 = chunk__35089;
var G__35094 = count__35090;
var G__35095 = (i__35091 + (1));
seq__35088 = G__35092;
chunk__35089 = G__35093;
count__35090 = G__35094;
i__35091 = G__35095;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35088);
if(temp__4657__auto__){
var seq__35088__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35088__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__35088__$1);
var G__35096 = cljs.core.chunk_rest.call(null,seq__35088__$1);
var G__35097 = c__28211__auto__;
var G__35098 = cljs.core.count.call(null,c__28211__auto__);
var G__35099 = (0);
seq__35088 = G__35096;
chunk__35089 = G__35097;
count__35090 = G__35098;
i__35091 = G__35099;
continue;
} else {
var n = cljs.core.first.call(null,seq__35088__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35100 = cljs.core.next.call(null,seq__35088__$1);
var G__35101 = null;
var G__35102 = (0);
var G__35103 = (0);
seq__35088 = G__35100;
chunk__35089 = G__35101;
count__35090 = G__35102;
i__35091 = G__35103;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35154_35165 = cljs.core.seq.call(null,deps);
var chunk__35155_35166 = null;
var count__35156_35167 = (0);
var i__35157_35168 = (0);
while(true){
if((i__35157_35168 < count__35156_35167)){
var dep_35169 = cljs.core._nth.call(null,chunk__35155_35166,i__35157_35168);
topo_sort_helper_STAR_.call(null,dep_35169,(depth + (1)),state);

var G__35170 = seq__35154_35165;
var G__35171 = chunk__35155_35166;
var G__35172 = count__35156_35167;
var G__35173 = (i__35157_35168 + (1));
seq__35154_35165 = G__35170;
chunk__35155_35166 = G__35171;
count__35156_35167 = G__35172;
i__35157_35168 = G__35173;
continue;
} else {
var temp__4657__auto___35174 = cljs.core.seq.call(null,seq__35154_35165);
if(temp__4657__auto___35174){
var seq__35154_35175__$1 = temp__4657__auto___35174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35154_35175__$1)){
var c__28211__auto___35176 = cljs.core.chunk_first.call(null,seq__35154_35175__$1);
var G__35177 = cljs.core.chunk_rest.call(null,seq__35154_35175__$1);
var G__35178 = c__28211__auto___35176;
var G__35179 = cljs.core.count.call(null,c__28211__auto___35176);
var G__35180 = (0);
seq__35154_35165 = G__35177;
chunk__35155_35166 = G__35178;
count__35156_35167 = G__35179;
i__35157_35168 = G__35180;
continue;
} else {
var dep_35181 = cljs.core.first.call(null,seq__35154_35175__$1);
topo_sort_helper_STAR_.call(null,dep_35181,(depth + (1)),state);

var G__35182 = cljs.core.next.call(null,seq__35154_35175__$1);
var G__35183 = null;
var G__35184 = (0);
var G__35185 = (0);
seq__35154_35165 = G__35182;
chunk__35155_35166 = G__35183;
count__35156_35167 = G__35184;
i__35157_35168 = G__35185;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35158){
var vec__35162 = p__35158;
var seq__35163 = cljs.core.seq.call(null,vec__35162);
var first__35164 = cljs.core.first.call(null,seq__35163);
var seq__35163__$1 = cljs.core.next.call(null,seq__35163);
var x = first__35164;
var xs = seq__35163__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35162,seq__35163,first__35164,seq__35163__$1,x,xs,get_deps__$1){
return (function (p1__35104_SHARP_){
return clojure.set.difference.call(null,p1__35104_SHARP_,x);
});})(vec__35162,seq__35163,first__35164,seq__35163__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35198 = cljs.core.seq.call(null,provides);
var chunk__35199 = null;
var count__35200 = (0);
var i__35201 = (0);
while(true){
if((i__35201 < count__35200)){
var prov = cljs.core._nth.call(null,chunk__35199,i__35201);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35202_35210 = cljs.core.seq.call(null,requires);
var chunk__35203_35211 = null;
var count__35204_35212 = (0);
var i__35205_35213 = (0);
while(true){
if((i__35205_35213 < count__35204_35212)){
var req_35214 = cljs.core._nth.call(null,chunk__35203_35211,i__35205_35213);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35214,prov);

var G__35215 = seq__35202_35210;
var G__35216 = chunk__35203_35211;
var G__35217 = count__35204_35212;
var G__35218 = (i__35205_35213 + (1));
seq__35202_35210 = G__35215;
chunk__35203_35211 = G__35216;
count__35204_35212 = G__35217;
i__35205_35213 = G__35218;
continue;
} else {
var temp__4657__auto___35219 = cljs.core.seq.call(null,seq__35202_35210);
if(temp__4657__auto___35219){
var seq__35202_35220__$1 = temp__4657__auto___35219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35202_35220__$1)){
var c__28211__auto___35221 = cljs.core.chunk_first.call(null,seq__35202_35220__$1);
var G__35222 = cljs.core.chunk_rest.call(null,seq__35202_35220__$1);
var G__35223 = c__28211__auto___35221;
var G__35224 = cljs.core.count.call(null,c__28211__auto___35221);
var G__35225 = (0);
seq__35202_35210 = G__35222;
chunk__35203_35211 = G__35223;
count__35204_35212 = G__35224;
i__35205_35213 = G__35225;
continue;
} else {
var req_35226 = cljs.core.first.call(null,seq__35202_35220__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35226,prov);

var G__35227 = cljs.core.next.call(null,seq__35202_35220__$1);
var G__35228 = null;
var G__35229 = (0);
var G__35230 = (0);
seq__35202_35210 = G__35227;
chunk__35203_35211 = G__35228;
count__35204_35212 = G__35229;
i__35205_35213 = G__35230;
continue;
}
} else {
}
}
break;
}

var G__35231 = seq__35198;
var G__35232 = chunk__35199;
var G__35233 = count__35200;
var G__35234 = (i__35201 + (1));
seq__35198 = G__35231;
chunk__35199 = G__35232;
count__35200 = G__35233;
i__35201 = G__35234;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35198);
if(temp__4657__auto__){
var seq__35198__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35198__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__35198__$1);
var G__35235 = cljs.core.chunk_rest.call(null,seq__35198__$1);
var G__35236 = c__28211__auto__;
var G__35237 = cljs.core.count.call(null,c__28211__auto__);
var G__35238 = (0);
seq__35198 = G__35235;
chunk__35199 = G__35236;
count__35200 = G__35237;
i__35201 = G__35238;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35198__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35206_35239 = cljs.core.seq.call(null,requires);
var chunk__35207_35240 = null;
var count__35208_35241 = (0);
var i__35209_35242 = (0);
while(true){
if((i__35209_35242 < count__35208_35241)){
var req_35243 = cljs.core._nth.call(null,chunk__35207_35240,i__35209_35242);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35243,prov);

var G__35244 = seq__35206_35239;
var G__35245 = chunk__35207_35240;
var G__35246 = count__35208_35241;
var G__35247 = (i__35209_35242 + (1));
seq__35206_35239 = G__35244;
chunk__35207_35240 = G__35245;
count__35208_35241 = G__35246;
i__35209_35242 = G__35247;
continue;
} else {
var temp__4657__auto___35248__$1 = cljs.core.seq.call(null,seq__35206_35239);
if(temp__4657__auto___35248__$1){
var seq__35206_35249__$1 = temp__4657__auto___35248__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35206_35249__$1)){
var c__28211__auto___35250 = cljs.core.chunk_first.call(null,seq__35206_35249__$1);
var G__35251 = cljs.core.chunk_rest.call(null,seq__35206_35249__$1);
var G__35252 = c__28211__auto___35250;
var G__35253 = cljs.core.count.call(null,c__28211__auto___35250);
var G__35254 = (0);
seq__35206_35239 = G__35251;
chunk__35207_35240 = G__35252;
count__35208_35241 = G__35253;
i__35209_35242 = G__35254;
continue;
} else {
var req_35255 = cljs.core.first.call(null,seq__35206_35249__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35255,prov);

var G__35256 = cljs.core.next.call(null,seq__35206_35249__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__35206_35239 = G__35256;
chunk__35207_35240 = G__35257;
count__35208_35241 = G__35258;
i__35209_35242 = G__35259;
continue;
}
} else {
}
}
break;
}

var G__35260 = cljs.core.next.call(null,seq__35198__$1);
var G__35261 = null;
var G__35262 = (0);
var G__35263 = (0);
seq__35198 = G__35260;
chunk__35199 = G__35261;
count__35200 = G__35262;
i__35201 = G__35263;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35268_35272 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35269_35273 = null;
var count__35270_35274 = (0);
var i__35271_35275 = (0);
while(true){
if((i__35271_35275 < count__35270_35274)){
var ns_35276 = cljs.core._nth.call(null,chunk__35269_35273,i__35271_35275);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35276);

var G__35277 = seq__35268_35272;
var G__35278 = chunk__35269_35273;
var G__35279 = count__35270_35274;
var G__35280 = (i__35271_35275 + (1));
seq__35268_35272 = G__35277;
chunk__35269_35273 = G__35278;
count__35270_35274 = G__35279;
i__35271_35275 = G__35280;
continue;
} else {
var temp__4657__auto___35281 = cljs.core.seq.call(null,seq__35268_35272);
if(temp__4657__auto___35281){
var seq__35268_35282__$1 = temp__4657__auto___35281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35268_35282__$1)){
var c__28211__auto___35283 = cljs.core.chunk_first.call(null,seq__35268_35282__$1);
var G__35284 = cljs.core.chunk_rest.call(null,seq__35268_35282__$1);
var G__35285 = c__28211__auto___35283;
var G__35286 = cljs.core.count.call(null,c__28211__auto___35283);
var G__35287 = (0);
seq__35268_35272 = G__35284;
chunk__35269_35273 = G__35285;
count__35270_35274 = G__35286;
i__35271_35275 = G__35287;
continue;
} else {
var ns_35288 = cljs.core.first.call(null,seq__35268_35282__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35288);

var G__35289 = cljs.core.next.call(null,seq__35268_35282__$1);
var G__35290 = null;
var G__35291 = (0);
var G__35292 = (0);
seq__35268_35272 = G__35289;
chunk__35269_35273 = G__35290;
count__35270_35274 = G__35291;
i__35271_35275 = G__35292;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27400__auto__ = goog.require__;
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35293__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35294__i = 0, G__35294__a = new Array(arguments.length -  0);
while (G__35294__i < G__35294__a.length) {G__35294__a[G__35294__i] = arguments[G__35294__i + 0]; ++G__35294__i;}
  args = new cljs.core.IndexedSeq(G__35294__a,0);
} 
return G__35293__delegate.call(this,args);};
G__35293.cljs$lang$maxFixedArity = 0;
G__35293.cljs$lang$applyTo = (function (arglist__35295){
var args = cljs.core.seq(arglist__35295);
return G__35293__delegate(args);
});
G__35293.cljs$core$IFn$_invoke$arity$variadic = G__35293__delegate;
return G__35293;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35297 = cljs.core._EQ_;
var expr__35298 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35297.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35298))){
var path_parts = ((function (pred__35297,expr__35298){
return (function (p1__35296_SHARP_){
return clojure.string.split.call(null,p1__35296_SHARP_,/[\/\\]/);
});})(pred__35297,expr__35298))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35297,expr__35298){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35300){if((e35300 instanceof Error)){
var e = e35300;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35300;

}
}})());
});
;})(path_parts,sep,root,pred__35297,expr__35298))
} else {
if(cljs.core.truth_(pred__35297.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35298))){
return ((function (pred__35297,expr__35298){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35297,expr__35298){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35297,expr__35298))
);

return deferred.addErrback(((function (deferred,pred__35297,expr__35298){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35297,expr__35298))
);
});
;})(pred__35297,expr__35298))
} else {
return ((function (pred__35297,expr__35298){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35297,expr__35298))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35301,callback){
var map__35304 = p__35301;
var map__35304__$1 = ((((!((map__35304 == null)))?((((map__35304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35304):map__35304);
var file_msg = map__35304__$1;
var request_url = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35304,map__35304__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35304,map__35304__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto__){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto__){
return (function (state_35328){
var state_val_35329 = (state_35328[(1)]);
if((state_val_35329 === (7))){
var inst_35324 = (state_35328[(2)]);
var state_35328__$1 = state_35328;
var statearr_35330_35350 = state_35328__$1;
(statearr_35330_35350[(2)] = inst_35324);

(statearr_35330_35350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (1))){
var state_35328__$1 = state_35328;
var statearr_35331_35351 = state_35328__$1;
(statearr_35331_35351[(2)] = null);

(statearr_35331_35351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (4))){
var inst_35308 = (state_35328[(7)]);
var inst_35308__$1 = (state_35328[(2)]);
var state_35328__$1 = (function (){var statearr_35332 = state_35328;
(statearr_35332[(7)] = inst_35308__$1);

return statearr_35332;
})();
if(cljs.core.truth_(inst_35308__$1)){
var statearr_35333_35352 = state_35328__$1;
(statearr_35333_35352[(1)] = (5));

} else {
var statearr_35334_35353 = state_35328__$1;
(statearr_35334_35353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (6))){
var state_35328__$1 = state_35328;
var statearr_35335_35354 = state_35328__$1;
(statearr_35335_35354[(2)] = null);

(statearr_35335_35354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (3))){
var inst_35326 = (state_35328[(2)]);
var state_35328__$1 = state_35328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35328__$1,inst_35326);
} else {
if((state_val_35329 === (2))){
var state_35328__$1 = state_35328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35328__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35329 === (11))){
var inst_35320 = (state_35328[(2)]);
var state_35328__$1 = (function (){var statearr_35336 = state_35328;
(statearr_35336[(8)] = inst_35320);

return statearr_35336;
})();
var statearr_35337_35355 = state_35328__$1;
(statearr_35337_35355[(2)] = null);

(statearr_35337_35355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (9))){
var inst_35312 = (state_35328[(9)]);
var inst_35314 = (state_35328[(10)]);
var inst_35316 = inst_35314.call(null,inst_35312);
var state_35328__$1 = state_35328;
var statearr_35338_35356 = state_35328__$1;
(statearr_35338_35356[(2)] = inst_35316);

(statearr_35338_35356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (5))){
var inst_35308 = (state_35328[(7)]);
var inst_35310 = figwheel.client.file_reloading.blocking_load.call(null,inst_35308);
var state_35328__$1 = state_35328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35328__$1,(8),inst_35310);
} else {
if((state_val_35329 === (10))){
var inst_35312 = (state_35328[(9)]);
var inst_35318 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35312);
var state_35328__$1 = state_35328;
var statearr_35339_35357 = state_35328__$1;
(statearr_35339_35357[(2)] = inst_35318);

(statearr_35339_35357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35329 === (8))){
var inst_35308 = (state_35328[(7)]);
var inst_35314 = (state_35328[(10)]);
var inst_35312 = (state_35328[(2)]);
var inst_35313 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35314__$1 = cljs.core.get.call(null,inst_35313,inst_35308);
var state_35328__$1 = (function (){var statearr_35340 = state_35328;
(statearr_35340[(9)] = inst_35312);

(statearr_35340[(10)] = inst_35314__$1);

return statearr_35340;
})();
if(cljs.core.truth_(inst_35314__$1)){
var statearr_35341_35358 = state_35328__$1;
(statearr_35341_35358[(1)] = (9));

} else {
var statearr_35342_35359 = state_35328__$1;
(statearr_35342_35359[(1)] = (10));

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
});})(c__32228__auto__))
;
return ((function (switch__32116__auto__,c__32228__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32117__auto__ = null;
var figwheel$client$file_reloading$state_machine__32117__auto____0 = (function (){
var statearr_35346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35346[(0)] = figwheel$client$file_reloading$state_machine__32117__auto__);

(statearr_35346[(1)] = (1));

return statearr_35346;
});
var figwheel$client$file_reloading$state_machine__32117__auto____1 = (function (state_35328){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_35328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e35347){if((e35347 instanceof Object)){
var ex__32120__auto__ = e35347;
var statearr_35348_35360 = state_35328;
(statearr_35348_35360[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35361 = state_35328;
state_35328 = G__35361;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32117__auto__ = function(state_35328){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32117__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32117__auto____1.call(this,state_35328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32117__auto____0;
figwheel$client$file_reloading$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32117__auto____1;
return figwheel$client$file_reloading$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto__))
})();
var state__32230__auto__ = (function (){var statearr_35349 = f__32229__auto__.call(null);
(statearr_35349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto__);

return statearr_35349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto__))
);

return c__32228__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35362,callback){
var map__35365 = p__35362;
var map__35365__$1 = ((((!((map__35365 == null)))?((((map__35365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35365):map__35365);
var file_msg = map__35365__$1;
var namespace = cljs.core.get.call(null,map__35365__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35365,map__35365__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35365,map__35365__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35367){
var map__35370 = p__35367;
var map__35370__$1 = ((((!((map__35370 == null)))?((((map__35370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35370):map__35370);
var file_msg = map__35370__$1;
var namespace = cljs.core.get.call(null,map__35370__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27388__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__27388__auto__){
var or__27400__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
var or__27400__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27400__auto____$1)){
return or__27400__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27388__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35372,callback){
var map__35375 = p__35372;
var map__35375__$1 = ((((!((map__35375 == null)))?((((map__35375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35375):map__35375);
var file_msg = map__35375__$1;
var request_url = cljs.core.get.call(null,map__35375__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32228__auto___35479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___35479,out){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___35479,out){
return (function (state_35461){
var state_val_35462 = (state_35461[(1)]);
if((state_val_35462 === (1))){
var inst_35435 = cljs.core.seq.call(null,files);
var inst_35436 = cljs.core.first.call(null,inst_35435);
var inst_35437 = cljs.core.next.call(null,inst_35435);
var inst_35438 = files;
var state_35461__$1 = (function (){var statearr_35463 = state_35461;
(statearr_35463[(7)] = inst_35436);

(statearr_35463[(8)] = inst_35437);

(statearr_35463[(9)] = inst_35438);

return statearr_35463;
})();
var statearr_35464_35480 = state_35461__$1;
(statearr_35464_35480[(2)] = null);

(statearr_35464_35480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (2))){
var inst_35444 = (state_35461[(10)]);
var inst_35438 = (state_35461[(9)]);
var inst_35443 = cljs.core.seq.call(null,inst_35438);
var inst_35444__$1 = cljs.core.first.call(null,inst_35443);
var inst_35445 = cljs.core.next.call(null,inst_35443);
var inst_35446 = (inst_35444__$1 == null);
var inst_35447 = cljs.core.not.call(null,inst_35446);
var state_35461__$1 = (function (){var statearr_35465 = state_35461;
(statearr_35465[(11)] = inst_35445);

(statearr_35465[(10)] = inst_35444__$1);

return statearr_35465;
})();
if(inst_35447){
var statearr_35466_35481 = state_35461__$1;
(statearr_35466_35481[(1)] = (4));

} else {
var statearr_35467_35482 = state_35461__$1;
(statearr_35467_35482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (3))){
var inst_35459 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35461__$1,inst_35459);
} else {
if((state_val_35462 === (4))){
var inst_35444 = (state_35461[(10)]);
var inst_35449 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35444);
var state_35461__$1 = state_35461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35461__$1,(7),inst_35449);
} else {
if((state_val_35462 === (5))){
var inst_35455 = cljs.core.async.close_BANG_.call(null,out);
var state_35461__$1 = state_35461;
var statearr_35468_35483 = state_35461__$1;
(statearr_35468_35483[(2)] = inst_35455);

(statearr_35468_35483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (6))){
var inst_35457 = (state_35461[(2)]);
var state_35461__$1 = state_35461;
var statearr_35469_35484 = state_35461__$1;
(statearr_35469_35484[(2)] = inst_35457);

(statearr_35469_35484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35462 === (7))){
var inst_35445 = (state_35461[(11)]);
var inst_35451 = (state_35461[(2)]);
var inst_35452 = cljs.core.async.put_BANG_.call(null,out,inst_35451);
var inst_35438 = inst_35445;
var state_35461__$1 = (function (){var statearr_35470 = state_35461;
(statearr_35470[(12)] = inst_35452);

(statearr_35470[(9)] = inst_35438);

return statearr_35470;
})();
var statearr_35471_35485 = state_35461__$1;
(statearr_35471_35485[(2)] = null);

(statearr_35471_35485[(1)] = (2));


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
});})(c__32228__auto___35479,out))
;
return ((function (switch__32116__auto__,c__32228__auto___35479,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto____0 = (function (){
var statearr_35475 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35475[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto__);

(statearr_35475[(1)] = (1));

return statearr_35475;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto____1 = (function (state_35461){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_35461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e35476){if((e35476 instanceof Object)){
var ex__32120__auto__ = e35476;
var statearr_35477_35486 = state_35461;
(statearr_35477_35486[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35487 = state_35461;
state_35461 = G__35487;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto__ = function(state_35461){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto____1.call(this,state_35461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___35479,out))
})();
var state__32230__auto__ = (function (){var statearr_35478 = f__32229__auto__.call(null);
(statearr_35478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___35479);

return statearr_35478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___35479,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35488,opts){
var map__35492 = p__35488;
var map__35492__$1 = ((((!((map__35492 == null)))?((((map__35492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35492):map__35492);
var eval_body__$1 = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27388__auto__ = eval_body__$1;
if(cljs.core.truth_(and__27388__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__27388__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35494){var e = e35494;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35495_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35495_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35504){
var vec__35505 = p__35504;
var k = cljs.core.nth.call(null,vec__35505,(0),null);
var v = cljs.core.nth.call(null,vec__35505,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35508){
var vec__35509 = p__35508;
var k = cljs.core.nth.call(null,vec__35509,(0),null);
var v = cljs.core.nth.call(null,vec__35509,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35515,p__35516){
var map__35763 = p__35515;
var map__35763__$1 = ((((!((map__35763 == null)))?((((map__35763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35763):map__35763);
var opts = map__35763__$1;
var before_jsload = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35763__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35764 = p__35516;
var map__35764__$1 = ((((!((map__35764 == null)))?((((map__35764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35764):map__35764);
var msg = map__35764__$1;
var files = cljs.core.get.call(null,map__35764__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35764__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35764__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35917){
var state_val_35918 = (state_35917[(1)]);
if((state_val_35918 === (7))){
var inst_35781 = (state_35917[(7)]);
var inst_35778 = (state_35917[(8)]);
var inst_35779 = (state_35917[(9)]);
var inst_35780 = (state_35917[(10)]);
var inst_35786 = cljs.core._nth.call(null,inst_35779,inst_35781);
var inst_35787 = figwheel.client.file_reloading.eval_body.call(null,inst_35786,opts);
var inst_35788 = (inst_35781 + (1));
var tmp35919 = inst_35778;
var tmp35920 = inst_35779;
var tmp35921 = inst_35780;
var inst_35778__$1 = tmp35919;
var inst_35779__$1 = tmp35920;
var inst_35780__$1 = tmp35921;
var inst_35781__$1 = inst_35788;
var state_35917__$1 = (function (){var statearr_35922 = state_35917;
(statearr_35922[(7)] = inst_35781__$1);

(statearr_35922[(8)] = inst_35778__$1);

(statearr_35922[(9)] = inst_35779__$1);

(statearr_35922[(11)] = inst_35787);

(statearr_35922[(10)] = inst_35780__$1);

return statearr_35922;
})();
var statearr_35923_36009 = state_35917__$1;
(statearr_35923_36009[(2)] = null);

(statearr_35923_36009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (20))){
var inst_35821 = (state_35917[(12)]);
var inst_35829 = figwheel.client.file_reloading.sort_files.call(null,inst_35821);
var state_35917__$1 = state_35917;
var statearr_35924_36010 = state_35917__$1;
(statearr_35924_36010[(2)] = inst_35829);

(statearr_35924_36010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (27))){
var state_35917__$1 = state_35917;
var statearr_35925_36011 = state_35917__$1;
(statearr_35925_36011[(2)] = null);

(statearr_35925_36011[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (1))){
var inst_35770 = (state_35917[(13)]);
var inst_35767 = before_jsload.call(null,files);
var inst_35768 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35769 = (function (){return ((function (inst_35770,inst_35767,inst_35768,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35512_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35512_SHARP_);
});
;})(inst_35770,inst_35767,inst_35768,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35770__$1 = cljs.core.filter.call(null,inst_35769,files);
var inst_35771 = cljs.core.not_empty.call(null,inst_35770__$1);
var state_35917__$1 = (function (){var statearr_35926 = state_35917;
(statearr_35926[(14)] = inst_35767);

(statearr_35926[(15)] = inst_35768);

(statearr_35926[(13)] = inst_35770__$1);

return statearr_35926;
})();
if(cljs.core.truth_(inst_35771)){
var statearr_35927_36012 = state_35917__$1;
(statearr_35927_36012[(1)] = (2));

} else {
var statearr_35928_36013 = state_35917__$1;
(statearr_35928_36013[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (24))){
var state_35917__$1 = state_35917;
var statearr_35929_36014 = state_35917__$1;
(statearr_35929_36014[(2)] = null);

(statearr_35929_36014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (39))){
var inst_35871 = (state_35917[(16)]);
var state_35917__$1 = state_35917;
var statearr_35930_36015 = state_35917__$1;
(statearr_35930_36015[(2)] = inst_35871);

(statearr_35930_36015[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (46))){
var inst_35912 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35931_36016 = state_35917__$1;
(statearr_35931_36016[(2)] = inst_35912);

(statearr_35931_36016[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (4))){
var inst_35815 = (state_35917[(2)]);
var inst_35816 = cljs.core.List.EMPTY;
var inst_35817 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35816);
var inst_35818 = (function (){return ((function (inst_35815,inst_35816,inst_35817,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35513_SHARP_){
var and__27388__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35513_SHARP_);
if(cljs.core.truth_(and__27388__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35513_SHARP_));
} else {
return and__27388__auto__;
}
});
;})(inst_35815,inst_35816,inst_35817,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35819 = cljs.core.filter.call(null,inst_35818,files);
var inst_35820 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35821 = cljs.core.concat.call(null,inst_35819,inst_35820);
var state_35917__$1 = (function (){var statearr_35932 = state_35917;
(statearr_35932[(17)] = inst_35817);

(statearr_35932[(12)] = inst_35821);

(statearr_35932[(18)] = inst_35815);

return statearr_35932;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35933_36017 = state_35917__$1;
(statearr_35933_36017[(1)] = (16));

} else {
var statearr_35934_36018 = state_35917__$1;
(statearr_35934_36018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (15))){
var inst_35805 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35935_36019 = state_35917__$1;
(statearr_35935_36019[(2)] = inst_35805);

(statearr_35935_36019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (21))){
var inst_35831 = (state_35917[(19)]);
var inst_35831__$1 = (state_35917[(2)]);
var inst_35832 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35831__$1);
var state_35917__$1 = (function (){var statearr_35936 = state_35917;
(statearr_35936[(19)] = inst_35831__$1);

return statearr_35936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35917__$1,(22),inst_35832);
} else {
if((state_val_35918 === (31))){
var inst_35915 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35917__$1,inst_35915);
} else {
if((state_val_35918 === (32))){
var inst_35871 = (state_35917[(16)]);
var inst_35876 = inst_35871.cljs$lang$protocol_mask$partition0$;
var inst_35877 = (inst_35876 & (64));
var inst_35878 = inst_35871.cljs$core$ISeq$;
var inst_35879 = (inst_35877) || (inst_35878);
var state_35917__$1 = state_35917;
if(cljs.core.truth_(inst_35879)){
var statearr_35937_36020 = state_35917__$1;
(statearr_35937_36020[(1)] = (35));

} else {
var statearr_35938_36021 = state_35917__$1;
(statearr_35938_36021[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (40))){
var inst_35892 = (state_35917[(20)]);
var inst_35891 = (state_35917[(2)]);
var inst_35892__$1 = cljs.core.get.call(null,inst_35891,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35893 = cljs.core.get.call(null,inst_35891,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35894 = cljs.core.not_empty.call(null,inst_35892__$1);
var state_35917__$1 = (function (){var statearr_35939 = state_35917;
(statearr_35939[(20)] = inst_35892__$1);

(statearr_35939[(21)] = inst_35893);

return statearr_35939;
})();
if(cljs.core.truth_(inst_35894)){
var statearr_35940_36022 = state_35917__$1;
(statearr_35940_36022[(1)] = (41));

} else {
var statearr_35941_36023 = state_35917__$1;
(statearr_35941_36023[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (33))){
var state_35917__$1 = state_35917;
var statearr_35942_36024 = state_35917__$1;
(statearr_35942_36024[(2)] = false);

(statearr_35942_36024[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (13))){
var inst_35791 = (state_35917[(22)]);
var inst_35795 = cljs.core.chunk_first.call(null,inst_35791);
var inst_35796 = cljs.core.chunk_rest.call(null,inst_35791);
var inst_35797 = cljs.core.count.call(null,inst_35795);
var inst_35778 = inst_35796;
var inst_35779 = inst_35795;
var inst_35780 = inst_35797;
var inst_35781 = (0);
var state_35917__$1 = (function (){var statearr_35943 = state_35917;
(statearr_35943[(7)] = inst_35781);

(statearr_35943[(8)] = inst_35778);

(statearr_35943[(9)] = inst_35779);

(statearr_35943[(10)] = inst_35780);

return statearr_35943;
})();
var statearr_35944_36025 = state_35917__$1;
(statearr_35944_36025[(2)] = null);

(statearr_35944_36025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (22))){
var inst_35831 = (state_35917[(19)]);
var inst_35835 = (state_35917[(23)]);
var inst_35834 = (state_35917[(24)]);
var inst_35839 = (state_35917[(25)]);
var inst_35834__$1 = (state_35917[(2)]);
var inst_35835__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35834__$1);
var inst_35836 = (function (){var all_files = inst_35831;
var res_SINGLEQUOTE_ = inst_35834__$1;
var res = inst_35835__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35831,inst_35835,inst_35834,inst_35839,inst_35834__$1,inst_35835__$1,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35514_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35514_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35831,inst_35835,inst_35834,inst_35839,inst_35834__$1,inst_35835__$1,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35837 = cljs.core.filter.call(null,inst_35836,inst_35834__$1);
var inst_35838 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35839__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35838);
var inst_35840 = cljs.core.not_empty.call(null,inst_35839__$1);
var state_35917__$1 = (function (){var statearr_35945 = state_35917;
(statearr_35945[(23)] = inst_35835__$1);

(statearr_35945[(24)] = inst_35834__$1);

(statearr_35945[(26)] = inst_35837);

(statearr_35945[(25)] = inst_35839__$1);

return statearr_35945;
})();
if(cljs.core.truth_(inst_35840)){
var statearr_35946_36026 = state_35917__$1;
(statearr_35946_36026[(1)] = (23));

} else {
var statearr_35947_36027 = state_35917__$1;
(statearr_35947_36027[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (36))){
var state_35917__$1 = state_35917;
var statearr_35948_36028 = state_35917__$1;
(statearr_35948_36028[(2)] = false);

(statearr_35948_36028[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (41))){
var inst_35892 = (state_35917[(20)]);
var inst_35896 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35897 = cljs.core.map.call(null,inst_35896,inst_35892);
var inst_35898 = cljs.core.pr_str.call(null,inst_35897);
var inst_35899 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35898)].join('');
var inst_35900 = figwheel.client.utils.log.call(null,inst_35899);
var state_35917__$1 = state_35917;
var statearr_35949_36029 = state_35917__$1;
(statearr_35949_36029[(2)] = inst_35900);

(statearr_35949_36029[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (43))){
var inst_35893 = (state_35917[(21)]);
var inst_35903 = (state_35917[(2)]);
var inst_35904 = cljs.core.not_empty.call(null,inst_35893);
var state_35917__$1 = (function (){var statearr_35950 = state_35917;
(statearr_35950[(27)] = inst_35903);

return statearr_35950;
})();
if(cljs.core.truth_(inst_35904)){
var statearr_35951_36030 = state_35917__$1;
(statearr_35951_36030[(1)] = (44));

} else {
var statearr_35952_36031 = state_35917__$1;
(statearr_35952_36031[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (29))){
var inst_35831 = (state_35917[(19)]);
var inst_35835 = (state_35917[(23)]);
var inst_35834 = (state_35917[(24)]);
var inst_35837 = (state_35917[(26)]);
var inst_35839 = (state_35917[(25)]);
var inst_35871 = (state_35917[(16)]);
var inst_35867 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35870 = (function (){var all_files = inst_35831;
var res_SINGLEQUOTE_ = inst_35834;
var res = inst_35835;
var files_not_loaded = inst_35837;
var dependencies_that_loaded = inst_35839;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35831,inst_35835,inst_35834,inst_35837,inst_35839,inst_35871,inst_35867,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35869){
var map__35953 = p__35869;
var map__35953__$1 = ((((!((map__35953 == null)))?((((map__35953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35953):map__35953);
var namespace = cljs.core.get.call(null,map__35953__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35831,inst_35835,inst_35834,inst_35837,inst_35839,inst_35871,inst_35867,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35871__$1 = cljs.core.group_by.call(null,inst_35870,inst_35837);
var inst_35873 = (inst_35871__$1 == null);
var inst_35874 = cljs.core.not.call(null,inst_35873);
var state_35917__$1 = (function (){var statearr_35955 = state_35917;
(statearr_35955[(28)] = inst_35867);

(statearr_35955[(16)] = inst_35871__$1);

return statearr_35955;
})();
if(inst_35874){
var statearr_35956_36032 = state_35917__$1;
(statearr_35956_36032[(1)] = (32));

} else {
var statearr_35957_36033 = state_35917__$1;
(statearr_35957_36033[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (44))){
var inst_35893 = (state_35917[(21)]);
var inst_35906 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35893);
var inst_35907 = cljs.core.pr_str.call(null,inst_35906);
var inst_35908 = [cljs.core.str("not required: "),cljs.core.str(inst_35907)].join('');
var inst_35909 = figwheel.client.utils.log.call(null,inst_35908);
var state_35917__$1 = state_35917;
var statearr_35958_36034 = state_35917__$1;
(statearr_35958_36034[(2)] = inst_35909);

(statearr_35958_36034[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (6))){
var inst_35812 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35959_36035 = state_35917__$1;
(statearr_35959_36035[(2)] = inst_35812);

(statearr_35959_36035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (28))){
var inst_35837 = (state_35917[(26)]);
var inst_35864 = (state_35917[(2)]);
var inst_35865 = cljs.core.not_empty.call(null,inst_35837);
var state_35917__$1 = (function (){var statearr_35960 = state_35917;
(statearr_35960[(29)] = inst_35864);

return statearr_35960;
})();
if(cljs.core.truth_(inst_35865)){
var statearr_35961_36036 = state_35917__$1;
(statearr_35961_36036[(1)] = (29));

} else {
var statearr_35962_36037 = state_35917__$1;
(statearr_35962_36037[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (25))){
var inst_35835 = (state_35917[(23)]);
var inst_35851 = (state_35917[(2)]);
var inst_35852 = cljs.core.not_empty.call(null,inst_35835);
var state_35917__$1 = (function (){var statearr_35963 = state_35917;
(statearr_35963[(30)] = inst_35851);

return statearr_35963;
})();
if(cljs.core.truth_(inst_35852)){
var statearr_35964_36038 = state_35917__$1;
(statearr_35964_36038[(1)] = (26));

} else {
var statearr_35965_36039 = state_35917__$1;
(statearr_35965_36039[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (34))){
var inst_35886 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
if(cljs.core.truth_(inst_35886)){
var statearr_35966_36040 = state_35917__$1;
(statearr_35966_36040[(1)] = (38));

} else {
var statearr_35967_36041 = state_35917__$1;
(statearr_35967_36041[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (17))){
var state_35917__$1 = state_35917;
var statearr_35968_36042 = state_35917__$1;
(statearr_35968_36042[(2)] = recompile_dependents);

(statearr_35968_36042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (3))){
var state_35917__$1 = state_35917;
var statearr_35969_36043 = state_35917__$1;
(statearr_35969_36043[(2)] = null);

(statearr_35969_36043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (12))){
var inst_35808 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35970_36044 = state_35917__$1;
(statearr_35970_36044[(2)] = inst_35808);

(statearr_35970_36044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (2))){
var inst_35770 = (state_35917[(13)]);
var inst_35777 = cljs.core.seq.call(null,inst_35770);
var inst_35778 = inst_35777;
var inst_35779 = null;
var inst_35780 = (0);
var inst_35781 = (0);
var state_35917__$1 = (function (){var statearr_35971 = state_35917;
(statearr_35971[(7)] = inst_35781);

(statearr_35971[(8)] = inst_35778);

(statearr_35971[(9)] = inst_35779);

(statearr_35971[(10)] = inst_35780);

return statearr_35971;
})();
var statearr_35972_36045 = state_35917__$1;
(statearr_35972_36045[(2)] = null);

(statearr_35972_36045[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (23))){
var inst_35831 = (state_35917[(19)]);
var inst_35835 = (state_35917[(23)]);
var inst_35834 = (state_35917[(24)]);
var inst_35837 = (state_35917[(26)]);
var inst_35839 = (state_35917[(25)]);
var inst_35842 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35844 = (function (){var all_files = inst_35831;
var res_SINGLEQUOTE_ = inst_35834;
var res = inst_35835;
var files_not_loaded = inst_35837;
var dependencies_that_loaded = inst_35839;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35831,inst_35835,inst_35834,inst_35837,inst_35839,inst_35842,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35843){
var map__35973 = p__35843;
var map__35973__$1 = ((((!((map__35973 == null)))?((((map__35973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35973):map__35973);
var request_url = cljs.core.get.call(null,map__35973__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35831,inst_35835,inst_35834,inst_35837,inst_35839,inst_35842,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35845 = cljs.core.reverse.call(null,inst_35839);
var inst_35846 = cljs.core.map.call(null,inst_35844,inst_35845);
var inst_35847 = cljs.core.pr_str.call(null,inst_35846);
var inst_35848 = figwheel.client.utils.log.call(null,inst_35847);
var state_35917__$1 = (function (){var statearr_35975 = state_35917;
(statearr_35975[(31)] = inst_35842);

return statearr_35975;
})();
var statearr_35976_36046 = state_35917__$1;
(statearr_35976_36046[(2)] = inst_35848);

(statearr_35976_36046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (35))){
var state_35917__$1 = state_35917;
var statearr_35977_36047 = state_35917__$1;
(statearr_35977_36047[(2)] = true);

(statearr_35977_36047[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (19))){
var inst_35821 = (state_35917[(12)]);
var inst_35827 = figwheel.client.file_reloading.expand_files.call(null,inst_35821);
var state_35917__$1 = state_35917;
var statearr_35978_36048 = state_35917__$1;
(statearr_35978_36048[(2)] = inst_35827);

(statearr_35978_36048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (11))){
var state_35917__$1 = state_35917;
var statearr_35979_36049 = state_35917__$1;
(statearr_35979_36049[(2)] = null);

(statearr_35979_36049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (9))){
var inst_35810 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35980_36050 = state_35917__$1;
(statearr_35980_36050[(2)] = inst_35810);

(statearr_35980_36050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (5))){
var inst_35781 = (state_35917[(7)]);
var inst_35780 = (state_35917[(10)]);
var inst_35783 = (inst_35781 < inst_35780);
var inst_35784 = inst_35783;
var state_35917__$1 = state_35917;
if(cljs.core.truth_(inst_35784)){
var statearr_35981_36051 = state_35917__$1;
(statearr_35981_36051[(1)] = (7));

} else {
var statearr_35982_36052 = state_35917__$1;
(statearr_35982_36052[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (14))){
var inst_35791 = (state_35917[(22)]);
var inst_35800 = cljs.core.first.call(null,inst_35791);
var inst_35801 = figwheel.client.file_reloading.eval_body.call(null,inst_35800,opts);
var inst_35802 = cljs.core.next.call(null,inst_35791);
var inst_35778 = inst_35802;
var inst_35779 = null;
var inst_35780 = (0);
var inst_35781 = (0);
var state_35917__$1 = (function (){var statearr_35983 = state_35917;
(statearr_35983[(7)] = inst_35781);

(statearr_35983[(8)] = inst_35778);

(statearr_35983[(32)] = inst_35801);

(statearr_35983[(9)] = inst_35779);

(statearr_35983[(10)] = inst_35780);

return statearr_35983;
})();
var statearr_35984_36053 = state_35917__$1;
(statearr_35984_36053[(2)] = null);

(statearr_35984_36053[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (45))){
var state_35917__$1 = state_35917;
var statearr_35985_36054 = state_35917__$1;
(statearr_35985_36054[(2)] = null);

(statearr_35985_36054[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (26))){
var inst_35831 = (state_35917[(19)]);
var inst_35835 = (state_35917[(23)]);
var inst_35834 = (state_35917[(24)]);
var inst_35837 = (state_35917[(26)]);
var inst_35839 = (state_35917[(25)]);
var inst_35854 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35856 = (function (){var all_files = inst_35831;
var res_SINGLEQUOTE_ = inst_35834;
var res = inst_35835;
var files_not_loaded = inst_35837;
var dependencies_that_loaded = inst_35839;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35831,inst_35835,inst_35834,inst_35837,inst_35839,inst_35854,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35855){
var map__35986 = p__35855;
var map__35986__$1 = ((((!((map__35986 == null)))?((((map__35986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35986):map__35986);
var namespace = cljs.core.get.call(null,map__35986__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35986__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35831,inst_35835,inst_35834,inst_35837,inst_35839,inst_35854,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35857 = cljs.core.map.call(null,inst_35856,inst_35835);
var inst_35858 = cljs.core.pr_str.call(null,inst_35857);
var inst_35859 = figwheel.client.utils.log.call(null,inst_35858);
var inst_35860 = (function (){var all_files = inst_35831;
var res_SINGLEQUOTE_ = inst_35834;
var res = inst_35835;
var files_not_loaded = inst_35837;
var dependencies_that_loaded = inst_35839;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35831,inst_35835,inst_35834,inst_35837,inst_35839,inst_35854,inst_35856,inst_35857,inst_35858,inst_35859,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35831,inst_35835,inst_35834,inst_35837,inst_35839,inst_35854,inst_35856,inst_35857,inst_35858,inst_35859,state_val_35918,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35861 = setTimeout(inst_35860,(10));
var state_35917__$1 = (function (){var statearr_35988 = state_35917;
(statearr_35988[(33)] = inst_35859);

(statearr_35988[(34)] = inst_35854);

return statearr_35988;
})();
var statearr_35989_36055 = state_35917__$1;
(statearr_35989_36055[(2)] = inst_35861);

(statearr_35989_36055[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (16))){
var state_35917__$1 = state_35917;
var statearr_35990_36056 = state_35917__$1;
(statearr_35990_36056[(2)] = reload_dependents);

(statearr_35990_36056[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (38))){
var inst_35871 = (state_35917[(16)]);
var inst_35888 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35871);
var state_35917__$1 = state_35917;
var statearr_35991_36057 = state_35917__$1;
(statearr_35991_36057[(2)] = inst_35888);

(statearr_35991_36057[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (30))){
var state_35917__$1 = state_35917;
var statearr_35992_36058 = state_35917__$1;
(statearr_35992_36058[(2)] = null);

(statearr_35992_36058[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (10))){
var inst_35791 = (state_35917[(22)]);
var inst_35793 = cljs.core.chunked_seq_QMARK_.call(null,inst_35791);
var state_35917__$1 = state_35917;
if(inst_35793){
var statearr_35993_36059 = state_35917__$1;
(statearr_35993_36059[(1)] = (13));

} else {
var statearr_35994_36060 = state_35917__$1;
(statearr_35994_36060[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (18))){
var inst_35825 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
if(cljs.core.truth_(inst_35825)){
var statearr_35995_36061 = state_35917__$1;
(statearr_35995_36061[(1)] = (19));

} else {
var statearr_35996_36062 = state_35917__$1;
(statearr_35996_36062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (42))){
var state_35917__$1 = state_35917;
var statearr_35997_36063 = state_35917__$1;
(statearr_35997_36063[(2)] = null);

(statearr_35997_36063[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (37))){
var inst_35883 = (state_35917[(2)]);
var state_35917__$1 = state_35917;
var statearr_35998_36064 = state_35917__$1;
(statearr_35998_36064[(2)] = inst_35883);

(statearr_35998_36064[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35918 === (8))){
var inst_35791 = (state_35917[(22)]);
var inst_35778 = (state_35917[(8)]);
var inst_35791__$1 = cljs.core.seq.call(null,inst_35778);
var state_35917__$1 = (function (){var statearr_35999 = state_35917;
(statearr_35999[(22)] = inst_35791__$1);

return statearr_35999;
})();
if(inst_35791__$1){
var statearr_36000_36065 = state_35917__$1;
(statearr_36000_36065[(1)] = (10));

} else {
var statearr_36001_36066 = state_35917__$1;
(statearr_36001_36066[(1)] = (11));

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
});})(c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32116__auto__,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto____0 = (function (){
var statearr_36005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36005[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto__);

(statearr_36005[(1)] = (1));

return statearr_36005;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto____1 = (function (state_35917){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_35917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e36006){if((e36006 instanceof Object)){
var ex__32120__auto__ = e36006;
var statearr_36007_36067 = state_35917;
(statearr_36007_36067[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36068 = state_35917;
state_35917 = G__36068;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto__ = function(state_35917){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto____1.call(this,state_35917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32230__auto__ = (function (){var statearr_36008 = f__32229__auto__.call(null);
(statearr_36008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto__);

return statearr_36008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto__,map__35763,map__35763__$1,opts,before_jsload,on_jsload,reload_dependents,map__35764,map__35764__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32228__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36071,link){
var map__36074 = p__36071;
var map__36074__$1 = ((((!((map__36074 == null)))?((((map__36074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36074):map__36074);
var file = cljs.core.get.call(null,map__36074__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36074,map__36074__$1,file){
return (function (p1__36069_SHARP_,p2__36070_SHARP_){
if(cljs.core._EQ_.call(null,p1__36069_SHARP_,p2__36070_SHARP_)){
return p1__36069_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36074,map__36074__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36080){
var map__36081 = p__36080;
var map__36081__$1 = ((((!((map__36081 == null)))?((((map__36081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36081):map__36081);
var match_length = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36076_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36076_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args36083 = [];
var len__28475__auto___36086 = arguments.length;
var i__28476__auto___36087 = (0);
while(true){
if((i__28476__auto___36087 < len__28475__auto___36086)){
args36083.push((arguments[i__28476__auto___36087]));

var G__36088 = (i__28476__auto___36087 + (1));
i__28476__auto___36087 = G__36088;
continue;
} else {
}
break;
}

var G__36085 = args36083.length;
switch (G__36085) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36083.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36090_SHARP_,p2__36091_SHARP_){
return cljs.core.assoc.call(null,p1__36090_SHARP_,cljs.core.get.call(null,p2__36091_SHARP_,key),p2__36091_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36092){
var map__36095 = p__36092;
var map__36095__$1 = ((((!((map__36095 == null)))?((((map__36095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36095):map__36095);
var f_data = map__36095__$1;
var file = cljs.core.get.call(null,map__36095__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36097,p__36098){
var map__36107 = p__36097;
var map__36107__$1 = ((((!((map__36107 == null)))?((((map__36107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36107):map__36107);
var opts = map__36107__$1;
var on_cssload = cljs.core.get.call(null,map__36107__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36108 = p__36098;
var map__36108__$1 = ((((!((map__36108 == null)))?((((map__36108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36108):map__36108);
var files_msg = map__36108__$1;
var files = cljs.core.get.call(null,map__36108__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36111_36115 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__36112_36116 = null;
var count__36113_36117 = (0);
var i__36114_36118 = (0);
while(true){
if((i__36114_36118 < count__36113_36117)){
var f_36119 = cljs.core._nth.call(null,chunk__36112_36116,i__36114_36118);
figwheel.client.file_reloading.reload_css_file.call(null,f_36119);

var G__36120 = seq__36111_36115;
var G__36121 = chunk__36112_36116;
var G__36122 = count__36113_36117;
var G__36123 = (i__36114_36118 + (1));
seq__36111_36115 = G__36120;
chunk__36112_36116 = G__36121;
count__36113_36117 = G__36122;
i__36114_36118 = G__36123;
continue;
} else {
var temp__4657__auto___36124 = cljs.core.seq.call(null,seq__36111_36115);
if(temp__4657__auto___36124){
var seq__36111_36125__$1 = temp__4657__auto___36124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36111_36125__$1)){
var c__28211__auto___36126 = cljs.core.chunk_first.call(null,seq__36111_36125__$1);
var G__36127 = cljs.core.chunk_rest.call(null,seq__36111_36125__$1);
var G__36128 = c__28211__auto___36126;
var G__36129 = cljs.core.count.call(null,c__28211__auto___36126);
var G__36130 = (0);
seq__36111_36115 = G__36127;
chunk__36112_36116 = G__36128;
count__36113_36117 = G__36129;
i__36114_36118 = G__36130;
continue;
} else {
var f_36131 = cljs.core.first.call(null,seq__36111_36125__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36131);

var G__36132 = cljs.core.next.call(null,seq__36111_36125__$1);
var G__36133 = null;
var G__36134 = (0);
var G__36135 = (0);
seq__36111_36115 = G__36132;
chunk__36112_36116 = G__36133;
count__36113_36117 = G__36134;
i__36114_36118 = G__36135;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36107,map__36107__$1,opts,on_cssload,map__36108,map__36108__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__36107,map__36107__$1,opts,on_cssload,map__36108,map__36108__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1479706419283