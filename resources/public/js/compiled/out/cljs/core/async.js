// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args32273 = [];
var len__28475__auto___32279 = arguments.length;
var i__28476__auto___32280 = (0);
while(true){
if((i__28476__auto___32280 < len__28475__auto___32279)){
args32273.push((arguments[i__28476__auto___32280]));

var G__32281 = (i__28476__auto___32280 + (1));
i__28476__auto___32280 = G__32281;
continue;
} else {
}
break;
}

var G__32275 = args32273.length;
switch (G__32275) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32273.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32276 = (function (f,blockable,meta32277){
this.f = f;
this.blockable = blockable;
this.meta32277 = meta32277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32278,meta32277__$1){
var self__ = this;
var _32278__$1 = this;
return (new cljs.core.async.t_cljs$core$async32276(self__.f,self__.blockable,meta32277__$1));
});

cljs.core.async.t_cljs$core$async32276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32278){
var self__ = this;
var _32278__$1 = this;
return self__.meta32277;
});

cljs.core.async.t_cljs$core$async32276.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32276.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32277","meta32277",2034016159,null)], null);
});

cljs.core.async.t_cljs$core$async32276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32276";

cljs.core.async.t_cljs$core$async32276.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async32276");
});

cljs.core.async.__GT_t_cljs$core$async32276 = (function cljs$core$async$__GT_t_cljs$core$async32276(f__$1,blockable__$1,meta32277){
return (new cljs.core.async.t_cljs$core$async32276(f__$1,blockable__$1,meta32277));
});

}

return (new cljs.core.async.t_cljs$core$async32276(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args32285 = [];
var len__28475__auto___32288 = arguments.length;
var i__28476__auto___32289 = (0);
while(true){
if((i__28476__auto___32289 < len__28475__auto___32288)){
args32285.push((arguments[i__28476__auto___32289]));

var G__32290 = (i__28476__auto___32289 + (1));
i__28476__auto___32289 = G__32290;
continue;
} else {
}
break;
}

var G__32287 = args32285.length;
switch (G__32287) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32285.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args32292 = [];
var len__28475__auto___32295 = arguments.length;
var i__28476__auto___32296 = (0);
while(true){
if((i__28476__auto___32296 < len__28475__auto___32295)){
args32292.push((arguments[i__28476__auto___32296]));

var G__32297 = (i__28476__auto___32296 + (1));
i__28476__auto___32296 = G__32297;
continue;
} else {
}
break;
}

var G__32294 = args32292.length;
switch (G__32294) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32292.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args32299 = [];
var len__28475__auto___32302 = arguments.length;
var i__28476__auto___32303 = (0);
while(true){
if((i__28476__auto___32303 < len__28475__auto___32302)){
args32299.push((arguments[i__28476__auto___32303]));

var G__32304 = (i__28476__auto___32303 + (1));
i__28476__auto___32303 = G__32304;
continue;
} else {
}
break;
}

var G__32301 = args32299.length;
switch (G__32301) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32299.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32306 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32306);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32306,ret){
return (function (){
return fn1.call(null,val_32306);
});})(val_32306,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args32307 = [];
var len__28475__auto___32310 = arguments.length;
var i__28476__auto___32311 = (0);
while(true){
if((i__28476__auto___32311 < len__28475__auto___32310)){
args32307.push((arguments[i__28476__auto___32311]));

var G__32312 = (i__28476__auto___32311 + (1));
i__28476__auto___32311 = G__32312;
continue;
} else {
}
break;
}

var G__32309 = args32307.length;
switch (G__32309) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32307.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28315__auto___32314 = n;
var x_32315 = (0);
while(true){
if((x_32315 < n__28315__auto___32314)){
(a[x_32315] = (0));

var G__32316 = (x_32315 + (1));
x_32315 = G__32316;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32317 = (i + (1));
i = G__32317;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32321 = (function (alt_flag,flag,meta32322){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32322 = meta32322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32323,meta32322__$1){
var self__ = this;
var _32323__$1 = this;
return (new cljs.core.async.t_cljs$core$async32321(self__.alt_flag,self__.flag,meta32322__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32323){
var self__ = this;
var _32323__$1 = this;
return self__.meta32322;
});})(flag))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32321.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32321.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32322","meta32322",874013488,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32321";

cljs.core.async.t_cljs$core$async32321.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async32321");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32321 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32321(alt_flag__$1,flag__$1,meta32322){
return (new cljs.core.async.t_cljs$core$async32321(alt_flag__$1,flag__$1,meta32322));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32321(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32327 = (function (alt_handler,flag,cb,meta32328){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32328 = meta32328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32329,meta32328__$1){
var self__ = this;
var _32329__$1 = this;
return (new cljs.core.async.t_cljs$core$async32327(self__.alt_handler,self__.flag,self__.cb,meta32328__$1));
});

cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32329){
var self__ = this;
var _32329__$1 = this;
return self__.meta32328;
});

cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32328","meta32328",-53698599,null)], null);
});

cljs.core.async.t_cljs$core$async32327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32327";

cljs.core.async.t_cljs$core$async32327.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async32327");
});

cljs.core.async.__GT_t_cljs$core$async32327 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32327(alt_handler__$1,flag__$1,cb__$1,meta32328){
return (new cljs.core.async.t_cljs$core$async32327(alt_handler__$1,flag__$1,cb__$1,meta32328));
});

}

return (new cljs.core.async.t_cljs$core$async32327(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32330_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32330_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32331_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32331_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27400__auto__ = wport;
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32332 = (i + (1));
i = G__32332;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27400__auto__ = ret;
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27388__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27388__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27388__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___32338 = arguments.length;
var i__28476__auto___32339 = (0);
while(true){
if((i__28476__auto___32339 < len__28475__auto___32338)){
args__28482__auto__.push((arguments[i__28476__auto___32339]));

var G__32340 = (i__28476__auto___32339 + (1));
i__28476__auto___32339 = G__32340;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32335){
var map__32336 = p__32335;
var map__32336__$1 = ((((!((map__32336 == null)))?((((map__32336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32336):map__32336);
var opts = map__32336__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32333){
var G__32334 = cljs.core.first.call(null,seq32333);
var seq32333__$1 = cljs.core.next.call(null,seq32333);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32334,seq32333__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32341 = [];
var len__28475__auto___32391 = arguments.length;
var i__28476__auto___32392 = (0);
while(true){
if((i__28476__auto___32392 < len__28475__auto___32391)){
args32341.push((arguments[i__28476__auto___32392]));

var G__32393 = (i__28476__auto___32392 + (1));
i__28476__auto___32392 = G__32393;
continue;
} else {
}
break;
}

var G__32343 = args32341.length;
switch (G__32343) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32341.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32228__auto___32395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___32395){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___32395){
return (function (state_32367){
var state_val_32368 = (state_32367[(1)]);
if((state_val_32368 === (7))){
var inst_32363 = (state_32367[(2)]);
var state_32367__$1 = state_32367;
var statearr_32369_32396 = state_32367__$1;
(statearr_32369_32396[(2)] = inst_32363);

(statearr_32369_32396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (1))){
var state_32367__$1 = state_32367;
var statearr_32370_32397 = state_32367__$1;
(statearr_32370_32397[(2)] = null);

(statearr_32370_32397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (4))){
var inst_32346 = (state_32367[(7)]);
var inst_32346__$1 = (state_32367[(2)]);
var inst_32347 = (inst_32346__$1 == null);
var state_32367__$1 = (function (){var statearr_32371 = state_32367;
(statearr_32371[(7)] = inst_32346__$1);

return statearr_32371;
})();
if(cljs.core.truth_(inst_32347)){
var statearr_32372_32398 = state_32367__$1;
(statearr_32372_32398[(1)] = (5));

} else {
var statearr_32373_32399 = state_32367__$1;
(statearr_32373_32399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (13))){
var state_32367__$1 = state_32367;
var statearr_32374_32400 = state_32367__$1;
(statearr_32374_32400[(2)] = null);

(statearr_32374_32400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (6))){
var inst_32346 = (state_32367[(7)]);
var state_32367__$1 = state_32367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32367__$1,(11),to,inst_32346);
} else {
if((state_val_32368 === (3))){
var inst_32365 = (state_32367[(2)]);
var state_32367__$1 = state_32367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32367__$1,inst_32365);
} else {
if((state_val_32368 === (12))){
var state_32367__$1 = state_32367;
var statearr_32375_32401 = state_32367__$1;
(statearr_32375_32401[(2)] = null);

(statearr_32375_32401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (2))){
var state_32367__$1 = state_32367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32367__$1,(4),from);
} else {
if((state_val_32368 === (11))){
var inst_32356 = (state_32367[(2)]);
var state_32367__$1 = state_32367;
if(cljs.core.truth_(inst_32356)){
var statearr_32376_32402 = state_32367__$1;
(statearr_32376_32402[(1)] = (12));

} else {
var statearr_32377_32403 = state_32367__$1;
(statearr_32377_32403[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (9))){
var state_32367__$1 = state_32367;
var statearr_32378_32404 = state_32367__$1;
(statearr_32378_32404[(2)] = null);

(statearr_32378_32404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (5))){
var state_32367__$1 = state_32367;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32379_32405 = state_32367__$1;
(statearr_32379_32405[(1)] = (8));

} else {
var statearr_32380_32406 = state_32367__$1;
(statearr_32380_32406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (14))){
var inst_32361 = (state_32367[(2)]);
var state_32367__$1 = state_32367;
var statearr_32381_32407 = state_32367__$1;
(statearr_32381_32407[(2)] = inst_32361);

(statearr_32381_32407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (10))){
var inst_32353 = (state_32367[(2)]);
var state_32367__$1 = state_32367;
var statearr_32382_32408 = state_32367__$1;
(statearr_32382_32408[(2)] = inst_32353);

(statearr_32382_32408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32368 === (8))){
var inst_32350 = cljs.core.async.close_BANG_.call(null,to);
var state_32367__$1 = state_32367;
var statearr_32383_32409 = state_32367__$1;
(statearr_32383_32409[(2)] = inst_32350);

(statearr_32383_32409[(1)] = (10));


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
});})(c__32228__auto___32395))
;
return ((function (switch__32116__auto__,c__32228__auto___32395){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_32387 = [null,null,null,null,null,null,null,null];
(statearr_32387[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_32387[(1)] = (1));

return statearr_32387;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_32367){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_32367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e32388){if((e32388 instanceof Object)){
var ex__32120__auto__ = e32388;
var statearr_32389_32410 = state_32367;
(statearr_32389_32410[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32411 = state_32367;
state_32367 = G__32411;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_32367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_32367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___32395))
})();
var state__32230__auto__ = (function (){var statearr_32390 = f__32229__auto__.call(null);
(statearr_32390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___32395);

return statearr_32390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___32395))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32599){
var vec__32600 = p__32599;
var v = cljs.core.nth.call(null,vec__32600,(0),null);
var p = cljs.core.nth.call(null,vec__32600,(1),null);
var job = vec__32600;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32228__auto___32786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___32786,res,vec__32600,v,p,job,jobs,results){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___32786,res,vec__32600,v,p,job,jobs,results){
return (function (state_32607){
var state_val_32608 = (state_32607[(1)]);
if((state_val_32608 === (1))){
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32607__$1,(2),res,v);
} else {
if((state_val_32608 === (2))){
var inst_32604 = (state_32607[(2)]);
var inst_32605 = cljs.core.async.close_BANG_.call(null,res);
var state_32607__$1 = (function (){var statearr_32609 = state_32607;
(statearr_32609[(7)] = inst_32604);

return statearr_32609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32607__$1,inst_32605);
} else {
return null;
}
}
});})(c__32228__auto___32786,res,vec__32600,v,p,job,jobs,results))
;
return ((function (switch__32116__auto__,c__32228__auto___32786,res,vec__32600,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0 = (function (){
var statearr_32613 = [null,null,null,null,null,null,null,null];
(statearr_32613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__);

(statearr_32613[(1)] = (1));

return statearr_32613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1 = (function (state_32607){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_32607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e32614){if((e32614 instanceof Object)){
var ex__32120__auto__ = e32614;
var statearr_32615_32787 = state_32607;
(statearr_32615_32787[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32788 = state_32607;
state_32607 = G__32788;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = function(state_32607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1.call(this,state_32607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___32786,res,vec__32600,v,p,job,jobs,results))
})();
var state__32230__auto__ = (function (){var statearr_32616 = f__32229__auto__.call(null);
(statearr_32616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___32786);

return statearr_32616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___32786,res,vec__32600,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32617){
var vec__32618 = p__32617;
var v = cljs.core.nth.call(null,vec__32618,(0),null);
var p = cljs.core.nth.call(null,vec__32618,(1),null);
var job = vec__32618;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28315__auto___32789 = n;
var __32790 = (0);
while(true){
if((__32790 < n__28315__auto___32789)){
var G__32621_32791 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32621_32791) {
case "compute":
var c__32228__auto___32793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32790,c__32228__auto___32793,G__32621_32791,n__28315__auto___32789,jobs,results,process,async){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (__32790,c__32228__auto___32793,G__32621_32791,n__28315__auto___32789,jobs,results,process,async){
return (function (state_32634){
var state_val_32635 = (state_32634[(1)]);
if((state_val_32635 === (1))){
var state_32634__$1 = state_32634;
var statearr_32636_32794 = state_32634__$1;
(statearr_32636_32794[(2)] = null);

(statearr_32636_32794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (2))){
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32634__$1,(4),jobs);
} else {
if((state_val_32635 === (3))){
var inst_32632 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32634__$1,inst_32632);
} else {
if((state_val_32635 === (4))){
var inst_32624 = (state_32634[(2)]);
var inst_32625 = process.call(null,inst_32624);
var state_32634__$1 = state_32634;
if(cljs.core.truth_(inst_32625)){
var statearr_32637_32795 = state_32634__$1;
(statearr_32637_32795[(1)] = (5));

} else {
var statearr_32638_32796 = state_32634__$1;
(statearr_32638_32796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (5))){
var state_32634__$1 = state_32634;
var statearr_32639_32797 = state_32634__$1;
(statearr_32639_32797[(2)] = null);

(statearr_32639_32797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (6))){
var state_32634__$1 = state_32634;
var statearr_32640_32798 = state_32634__$1;
(statearr_32640_32798[(2)] = null);

(statearr_32640_32798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (7))){
var inst_32630 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32641_32799 = state_32634__$1;
(statearr_32641_32799[(2)] = inst_32630);

(statearr_32641_32799[(1)] = (3));


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
});})(__32790,c__32228__auto___32793,G__32621_32791,n__28315__auto___32789,jobs,results,process,async))
;
return ((function (__32790,switch__32116__auto__,c__32228__auto___32793,G__32621_32791,n__28315__auto___32789,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0 = (function (){
var statearr_32645 = [null,null,null,null,null,null,null];
(statearr_32645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__);

(statearr_32645[(1)] = (1));

return statearr_32645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1 = (function (state_32634){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_32634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e32646){if((e32646 instanceof Object)){
var ex__32120__auto__ = e32646;
var statearr_32647_32800 = state_32634;
(statearr_32647_32800[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32801 = state_32634;
state_32634 = G__32801;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = function(state_32634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1.call(this,state_32634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__;
})()
;})(__32790,switch__32116__auto__,c__32228__auto___32793,G__32621_32791,n__28315__auto___32789,jobs,results,process,async))
})();
var state__32230__auto__ = (function (){var statearr_32648 = f__32229__auto__.call(null);
(statearr_32648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___32793);

return statearr_32648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(__32790,c__32228__auto___32793,G__32621_32791,n__28315__auto___32789,jobs,results,process,async))
);


break;
case "async":
var c__32228__auto___32802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32790,c__32228__auto___32802,G__32621_32791,n__28315__auto___32789,jobs,results,process,async){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (__32790,c__32228__auto___32802,G__32621_32791,n__28315__auto___32789,jobs,results,process,async){
return (function (state_32661){
var state_val_32662 = (state_32661[(1)]);
if((state_val_32662 === (1))){
var state_32661__$1 = state_32661;
var statearr_32663_32803 = state_32661__$1;
(statearr_32663_32803[(2)] = null);

(statearr_32663_32803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (2))){
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32661__$1,(4),jobs);
} else {
if((state_val_32662 === (3))){
var inst_32659 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32661__$1,inst_32659);
} else {
if((state_val_32662 === (4))){
var inst_32651 = (state_32661[(2)]);
var inst_32652 = async.call(null,inst_32651);
var state_32661__$1 = state_32661;
if(cljs.core.truth_(inst_32652)){
var statearr_32664_32804 = state_32661__$1;
(statearr_32664_32804[(1)] = (5));

} else {
var statearr_32665_32805 = state_32661__$1;
(statearr_32665_32805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (5))){
var state_32661__$1 = state_32661;
var statearr_32666_32806 = state_32661__$1;
(statearr_32666_32806[(2)] = null);

(statearr_32666_32806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (6))){
var state_32661__$1 = state_32661;
var statearr_32667_32807 = state_32661__$1;
(statearr_32667_32807[(2)] = null);

(statearr_32667_32807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (7))){
var inst_32657 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32668_32808 = state_32661__$1;
(statearr_32668_32808[(2)] = inst_32657);

(statearr_32668_32808[(1)] = (3));


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
});})(__32790,c__32228__auto___32802,G__32621_32791,n__28315__auto___32789,jobs,results,process,async))
;
return ((function (__32790,switch__32116__auto__,c__32228__auto___32802,G__32621_32791,n__28315__auto___32789,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0 = (function (){
var statearr_32672 = [null,null,null,null,null,null,null];
(statearr_32672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__);

(statearr_32672[(1)] = (1));

return statearr_32672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1 = (function (state_32661){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_32661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e32673){if((e32673 instanceof Object)){
var ex__32120__auto__ = e32673;
var statearr_32674_32809 = state_32661;
(statearr_32674_32809[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32810 = state_32661;
state_32661 = G__32810;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = function(state_32661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1.call(this,state_32661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__;
})()
;})(__32790,switch__32116__auto__,c__32228__auto___32802,G__32621_32791,n__28315__auto___32789,jobs,results,process,async))
})();
var state__32230__auto__ = (function (){var statearr_32675 = f__32229__auto__.call(null);
(statearr_32675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___32802);

return statearr_32675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(__32790,c__32228__auto___32802,G__32621_32791,n__28315__auto___32789,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32811 = (__32790 + (1));
__32790 = G__32811;
continue;
} else {
}
break;
}

var c__32228__auto___32812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___32812,jobs,results,process,async){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___32812,jobs,results,process,async){
return (function (state_32697){
var state_val_32698 = (state_32697[(1)]);
if((state_val_32698 === (1))){
var state_32697__$1 = state_32697;
var statearr_32699_32813 = state_32697__$1;
(statearr_32699_32813[(2)] = null);

(statearr_32699_32813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (2))){
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32697__$1,(4),from);
} else {
if((state_val_32698 === (3))){
var inst_32695 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32697__$1,inst_32695);
} else {
if((state_val_32698 === (4))){
var inst_32678 = (state_32697[(7)]);
var inst_32678__$1 = (state_32697[(2)]);
var inst_32679 = (inst_32678__$1 == null);
var state_32697__$1 = (function (){var statearr_32700 = state_32697;
(statearr_32700[(7)] = inst_32678__$1);

return statearr_32700;
})();
if(cljs.core.truth_(inst_32679)){
var statearr_32701_32814 = state_32697__$1;
(statearr_32701_32814[(1)] = (5));

} else {
var statearr_32702_32815 = state_32697__$1;
(statearr_32702_32815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (5))){
var inst_32681 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32697__$1 = state_32697;
var statearr_32703_32816 = state_32697__$1;
(statearr_32703_32816[(2)] = inst_32681);

(statearr_32703_32816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (6))){
var inst_32683 = (state_32697[(8)]);
var inst_32678 = (state_32697[(7)]);
var inst_32683__$1 = cljs.core.async.chan.call(null,(1));
var inst_32684 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32685 = [inst_32678,inst_32683__$1];
var inst_32686 = (new cljs.core.PersistentVector(null,2,(5),inst_32684,inst_32685,null));
var state_32697__$1 = (function (){var statearr_32704 = state_32697;
(statearr_32704[(8)] = inst_32683__$1);

return statearr_32704;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32697__$1,(8),jobs,inst_32686);
} else {
if((state_val_32698 === (7))){
var inst_32693 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32705_32817 = state_32697__$1;
(statearr_32705_32817[(2)] = inst_32693);

(statearr_32705_32817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (8))){
var inst_32683 = (state_32697[(8)]);
var inst_32688 = (state_32697[(2)]);
var state_32697__$1 = (function (){var statearr_32706 = state_32697;
(statearr_32706[(9)] = inst_32688);

return statearr_32706;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32697__$1,(9),results,inst_32683);
} else {
if((state_val_32698 === (9))){
var inst_32690 = (state_32697[(2)]);
var state_32697__$1 = (function (){var statearr_32707 = state_32697;
(statearr_32707[(10)] = inst_32690);

return statearr_32707;
})();
var statearr_32708_32818 = state_32697__$1;
(statearr_32708_32818[(2)] = null);

(statearr_32708_32818[(1)] = (2));


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
});})(c__32228__auto___32812,jobs,results,process,async))
;
return ((function (switch__32116__auto__,c__32228__auto___32812,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0 = (function (){
var statearr_32712 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__);

(statearr_32712[(1)] = (1));

return statearr_32712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1 = (function (state_32697){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_32697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e32713){if((e32713 instanceof Object)){
var ex__32120__auto__ = e32713;
var statearr_32714_32819 = state_32697;
(statearr_32714_32819[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32820 = state_32697;
state_32697 = G__32820;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = function(state_32697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1.call(this,state_32697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___32812,jobs,results,process,async))
})();
var state__32230__auto__ = (function (){var statearr_32715 = f__32229__auto__.call(null);
(statearr_32715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___32812);

return statearr_32715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___32812,jobs,results,process,async))
);


var c__32228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto__,jobs,results,process,async){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto__,jobs,results,process,async){
return (function (state_32753){
var state_val_32754 = (state_32753[(1)]);
if((state_val_32754 === (7))){
var inst_32749 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32755_32821 = state_32753__$1;
(statearr_32755_32821[(2)] = inst_32749);

(statearr_32755_32821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (20))){
var state_32753__$1 = state_32753;
var statearr_32756_32822 = state_32753__$1;
(statearr_32756_32822[(2)] = null);

(statearr_32756_32822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (1))){
var state_32753__$1 = state_32753;
var statearr_32757_32823 = state_32753__$1;
(statearr_32757_32823[(2)] = null);

(statearr_32757_32823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (4))){
var inst_32718 = (state_32753[(7)]);
var inst_32718__$1 = (state_32753[(2)]);
var inst_32719 = (inst_32718__$1 == null);
var state_32753__$1 = (function (){var statearr_32758 = state_32753;
(statearr_32758[(7)] = inst_32718__$1);

return statearr_32758;
})();
if(cljs.core.truth_(inst_32719)){
var statearr_32759_32824 = state_32753__$1;
(statearr_32759_32824[(1)] = (5));

} else {
var statearr_32760_32825 = state_32753__$1;
(statearr_32760_32825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (15))){
var inst_32731 = (state_32753[(8)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32753__$1,(18),to,inst_32731);
} else {
if((state_val_32754 === (21))){
var inst_32744 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32761_32826 = state_32753__$1;
(statearr_32761_32826[(2)] = inst_32744);

(statearr_32761_32826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (13))){
var inst_32746 = (state_32753[(2)]);
var state_32753__$1 = (function (){var statearr_32762 = state_32753;
(statearr_32762[(9)] = inst_32746);

return statearr_32762;
})();
var statearr_32763_32827 = state_32753__$1;
(statearr_32763_32827[(2)] = null);

(statearr_32763_32827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (6))){
var inst_32718 = (state_32753[(7)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32753__$1,(11),inst_32718);
} else {
if((state_val_32754 === (17))){
var inst_32739 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
if(cljs.core.truth_(inst_32739)){
var statearr_32764_32828 = state_32753__$1;
(statearr_32764_32828[(1)] = (19));

} else {
var statearr_32765_32829 = state_32753__$1;
(statearr_32765_32829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (3))){
var inst_32751 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32753__$1,inst_32751);
} else {
if((state_val_32754 === (12))){
var inst_32728 = (state_32753[(10)]);
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32753__$1,(14),inst_32728);
} else {
if((state_val_32754 === (2))){
var state_32753__$1 = state_32753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32753__$1,(4),results);
} else {
if((state_val_32754 === (19))){
var state_32753__$1 = state_32753;
var statearr_32766_32830 = state_32753__$1;
(statearr_32766_32830[(2)] = null);

(statearr_32766_32830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (11))){
var inst_32728 = (state_32753[(2)]);
var state_32753__$1 = (function (){var statearr_32767 = state_32753;
(statearr_32767[(10)] = inst_32728);

return statearr_32767;
})();
var statearr_32768_32831 = state_32753__$1;
(statearr_32768_32831[(2)] = null);

(statearr_32768_32831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (9))){
var state_32753__$1 = state_32753;
var statearr_32769_32832 = state_32753__$1;
(statearr_32769_32832[(2)] = null);

(statearr_32769_32832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (5))){
var state_32753__$1 = state_32753;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32770_32833 = state_32753__$1;
(statearr_32770_32833[(1)] = (8));

} else {
var statearr_32771_32834 = state_32753__$1;
(statearr_32771_32834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (14))){
var inst_32731 = (state_32753[(8)]);
var inst_32733 = (state_32753[(11)]);
var inst_32731__$1 = (state_32753[(2)]);
var inst_32732 = (inst_32731__$1 == null);
var inst_32733__$1 = cljs.core.not.call(null,inst_32732);
var state_32753__$1 = (function (){var statearr_32772 = state_32753;
(statearr_32772[(8)] = inst_32731__$1);

(statearr_32772[(11)] = inst_32733__$1);

return statearr_32772;
})();
if(inst_32733__$1){
var statearr_32773_32835 = state_32753__$1;
(statearr_32773_32835[(1)] = (15));

} else {
var statearr_32774_32836 = state_32753__$1;
(statearr_32774_32836[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (16))){
var inst_32733 = (state_32753[(11)]);
var state_32753__$1 = state_32753;
var statearr_32775_32837 = state_32753__$1;
(statearr_32775_32837[(2)] = inst_32733);

(statearr_32775_32837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (10))){
var inst_32725 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32776_32838 = state_32753__$1;
(statearr_32776_32838[(2)] = inst_32725);

(statearr_32776_32838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (18))){
var inst_32736 = (state_32753[(2)]);
var state_32753__$1 = state_32753;
var statearr_32777_32839 = state_32753__$1;
(statearr_32777_32839[(2)] = inst_32736);

(statearr_32777_32839[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32754 === (8))){
var inst_32722 = cljs.core.async.close_BANG_.call(null,to);
var state_32753__$1 = state_32753;
var statearr_32778_32840 = state_32753__$1;
(statearr_32778_32840[(2)] = inst_32722);

(statearr_32778_32840[(1)] = (10));


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
});})(c__32228__auto__,jobs,results,process,async))
;
return ((function (switch__32116__auto__,c__32228__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1 = (function (state_32753){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_32753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e32783){if((e32783 instanceof Object)){
var ex__32120__auto__ = e32783;
var statearr_32784_32841 = state_32753;
(statearr_32784_32841[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32842 = state_32753;
state_32753 = G__32842;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__ = function(state_32753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1.call(this,state_32753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32117__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto__,jobs,results,process,async))
})();
var state__32230__auto__ = (function (){var statearr_32785 = f__32229__auto__.call(null);
(statearr_32785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto__);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto__,jobs,results,process,async))
);

return c__32228__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args32843 = [];
var len__28475__auto___32846 = arguments.length;
var i__28476__auto___32847 = (0);
while(true){
if((i__28476__auto___32847 < len__28475__auto___32846)){
args32843.push((arguments[i__28476__auto___32847]));

var G__32848 = (i__28476__auto___32847 + (1));
i__28476__auto___32847 = G__32848;
continue;
} else {
}
break;
}

var G__32845 = args32843.length;
switch (G__32845) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32843.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args32850 = [];
var len__28475__auto___32853 = arguments.length;
var i__28476__auto___32854 = (0);
while(true){
if((i__28476__auto___32854 < len__28475__auto___32853)){
args32850.push((arguments[i__28476__auto___32854]));

var G__32855 = (i__28476__auto___32854 + (1));
i__28476__auto___32854 = G__32855;
continue;
} else {
}
break;
}

var G__32852 = args32850.length;
switch (G__32852) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32850.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args32857 = [];
var len__28475__auto___32910 = arguments.length;
var i__28476__auto___32911 = (0);
while(true){
if((i__28476__auto___32911 < len__28475__auto___32910)){
args32857.push((arguments[i__28476__auto___32911]));

var G__32912 = (i__28476__auto___32911 + (1));
i__28476__auto___32911 = G__32912;
continue;
} else {
}
break;
}

var G__32859 = args32857.length;
switch (G__32859) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32857.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32228__auto___32914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___32914,tc,fc){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___32914,tc,fc){
return (function (state_32885){
var state_val_32886 = (state_32885[(1)]);
if((state_val_32886 === (7))){
var inst_32881 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
var statearr_32887_32915 = state_32885__$1;
(statearr_32887_32915[(2)] = inst_32881);

(statearr_32887_32915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (1))){
var state_32885__$1 = state_32885;
var statearr_32888_32916 = state_32885__$1;
(statearr_32888_32916[(2)] = null);

(statearr_32888_32916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (4))){
var inst_32862 = (state_32885[(7)]);
var inst_32862__$1 = (state_32885[(2)]);
var inst_32863 = (inst_32862__$1 == null);
var state_32885__$1 = (function (){var statearr_32889 = state_32885;
(statearr_32889[(7)] = inst_32862__$1);

return statearr_32889;
})();
if(cljs.core.truth_(inst_32863)){
var statearr_32890_32917 = state_32885__$1;
(statearr_32890_32917[(1)] = (5));

} else {
var statearr_32891_32918 = state_32885__$1;
(statearr_32891_32918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (13))){
var state_32885__$1 = state_32885;
var statearr_32892_32919 = state_32885__$1;
(statearr_32892_32919[(2)] = null);

(statearr_32892_32919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (6))){
var inst_32862 = (state_32885[(7)]);
var inst_32868 = p.call(null,inst_32862);
var state_32885__$1 = state_32885;
if(cljs.core.truth_(inst_32868)){
var statearr_32893_32920 = state_32885__$1;
(statearr_32893_32920[(1)] = (9));

} else {
var statearr_32894_32921 = state_32885__$1;
(statearr_32894_32921[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (3))){
var inst_32883 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32885__$1,inst_32883);
} else {
if((state_val_32886 === (12))){
var state_32885__$1 = state_32885;
var statearr_32895_32922 = state_32885__$1;
(statearr_32895_32922[(2)] = null);

(statearr_32895_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (2))){
var state_32885__$1 = state_32885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32885__$1,(4),ch);
} else {
if((state_val_32886 === (11))){
var inst_32862 = (state_32885[(7)]);
var inst_32872 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32885__$1,(8),inst_32872,inst_32862);
} else {
if((state_val_32886 === (9))){
var state_32885__$1 = state_32885;
var statearr_32896_32923 = state_32885__$1;
(statearr_32896_32923[(2)] = tc);

(statearr_32896_32923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (5))){
var inst_32865 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32866 = cljs.core.async.close_BANG_.call(null,fc);
var state_32885__$1 = (function (){var statearr_32897 = state_32885;
(statearr_32897[(8)] = inst_32865);

return statearr_32897;
})();
var statearr_32898_32924 = state_32885__$1;
(statearr_32898_32924[(2)] = inst_32866);

(statearr_32898_32924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (14))){
var inst_32879 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
var statearr_32899_32925 = state_32885__$1;
(statearr_32899_32925[(2)] = inst_32879);

(statearr_32899_32925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (10))){
var state_32885__$1 = state_32885;
var statearr_32900_32926 = state_32885__$1;
(statearr_32900_32926[(2)] = fc);

(statearr_32900_32926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (8))){
var inst_32874 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
if(cljs.core.truth_(inst_32874)){
var statearr_32901_32927 = state_32885__$1;
(statearr_32901_32927[(1)] = (12));

} else {
var statearr_32902_32928 = state_32885__$1;
(statearr_32902_32928[(1)] = (13));

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
});})(c__32228__auto___32914,tc,fc))
;
return ((function (switch__32116__auto__,c__32228__auto___32914,tc,fc){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_32906 = [null,null,null,null,null,null,null,null,null];
(statearr_32906[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_32906[(1)] = (1));

return statearr_32906;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_32885){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_32885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e32907){if((e32907 instanceof Object)){
var ex__32120__auto__ = e32907;
var statearr_32908_32929 = state_32885;
(statearr_32908_32929[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32930 = state_32885;
state_32885 = G__32930;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_32885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_32885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___32914,tc,fc))
})();
var state__32230__auto__ = (function (){var statearr_32909 = f__32229__auto__.call(null);
(statearr_32909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___32914);

return statearr_32909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___32914,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto__){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto__){
return (function (state_32994){
var state_val_32995 = (state_32994[(1)]);
if((state_val_32995 === (7))){
var inst_32990 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_32996_33017 = state_32994__$1;
(statearr_32996_33017[(2)] = inst_32990);

(statearr_32996_33017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (1))){
var inst_32974 = init;
var state_32994__$1 = (function (){var statearr_32997 = state_32994;
(statearr_32997[(7)] = inst_32974);

return statearr_32997;
})();
var statearr_32998_33018 = state_32994__$1;
(statearr_32998_33018[(2)] = null);

(statearr_32998_33018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (4))){
var inst_32977 = (state_32994[(8)]);
var inst_32977__$1 = (state_32994[(2)]);
var inst_32978 = (inst_32977__$1 == null);
var state_32994__$1 = (function (){var statearr_32999 = state_32994;
(statearr_32999[(8)] = inst_32977__$1);

return statearr_32999;
})();
if(cljs.core.truth_(inst_32978)){
var statearr_33000_33019 = state_32994__$1;
(statearr_33000_33019[(1)] = (5));

} else {
var statearr_33001_33020 = state_32994__$1;
(statearr_33001_33020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (6))){
var inst_32977 = (state_32994[(8)]);
var inst_32981 = (state_32994[(9)]);
var inst_32974 = (state_32994[(7)]);
var inst_32981__$1 = f.call(null,inst_32974,inst_32977);
var inst_32982 = cljs.core.reduced_QMARK_.call(null,inst_32981__$1);
var state_32994__$1 = (function (){var statearr_33002 = state_32994;
(statearr_33002[(9)] = inst_32981__$1);

return statearr_33002;
})();
if(inst_32982){
var statearr_33003_33021 = state_32994__$1;
(statearr_33003_33021[(1)] = (8));

} else {
var statearr_33004_33022 = state_32994__$1;
(statearr_33004_33022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (3))){
var inst_32992 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32994__$1,inst_32992);
} else {
if((state_val_32995 === (2))){
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32994__$1,(4),ch);
} else {
if((state_val_32995 === (9))){
var inst_32981 = (state_32994[(9)]);
var inst_32974 = inst_32981;
var state_32994__$1 = (function (){var statearr_33005 = state_32994;
(statearr_33005[(7)] = inst_32974);

return statearr_33005;
})();
var statearr_33006_33023 = state_32994__$1;
(statearr_33006_33023[(2)] = null);

(statearr_33006_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (5))){
var inst_32974 = (state_32994[(7)]);
var state_32994__$1 = state_32994;
var statearr_33007_33024 = state_32994__$1;
(statearr_33007_33024[(2)] = inst_32974);

(statearr_33007_33024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (10))){
var inst_32988 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_33008_33025 = state_32994__$1;
(statearr_33008_33025[(2)] = inst_32988);

(statearr_33008_33025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (8))){
var inst_32981 = (state_32994[(9)]);
var inst_32984 = cljs.core.deref.call(null,inst_32981);
var state_32994__$1 = state_32994;
var statearr_33009_33026 = state_32994__$1;
(statearr_33009_33026[(2)] = inst_32984);

(statearr_33009_33026[(1)] = (10));


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
});})(c__32228__auto__))
;
return ((function (switch__32116__auto__,c__32228__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32117__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32117__auto____0 = (function (){
var statearr_33013 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33013[(0)] = cljs$core$async$reduce_$_state_machine__32117__auto__);

(statearr_33013[(1)] = (1));

return statearr_33013;
});
var cljs$core$async$reduce_$_state_machine__32117__auto____1 = (function (state_32994){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_32994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e33014){if((e33014 instanceof Object)){
var ex__32120__auto__ = e33014;
var statearr_33015_33027 = state_32994;
(statearr_33015_33027[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33028 = state_32994;
state_32994 = G__33028;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32117__auto__ = function(state_32994){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32117__auto____1.call(this,state_32994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32117__auto____0;
cljs$core$async$reduce_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32117__auto____1;
return cljs$core$async$reduce_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto__))
})();
var state__32230__auto__ = (function (){var statearr_33016 = f__32229__auto__.call(null);
(statearr_33016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto__);

return statearr_33016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto__))
);

return c__32228__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args33029 = [];
var len__28475__auto___33081 = arguments.length;
var i__28476__auto___33082 = (0);
while(true){
if((i__28476__auto___33082 < len__28475__auto___33081)){
args33029.push((arguments[i__28476__auto___33082]));

var G__33083 = (i__28476__auto___33082 + (1));
i__28476__auto___33082 = G__33083;
continue;
} else {
}
break;
}

var G__33031 = args33029.length;
switch (G__33031) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33029.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto__){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto__){
return (function (state_33056){
var state_val_33057 = (state_33056[(1)]);
if((state_val_33057 === (7))){
var inst_33038 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
var statearr_33058_33085 = state_33056__$1;
(statearr_33058_33085[(2)] = inst_33038);

(statearr_33058_33085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (1))){
var inst_33032 = cljs.core.seq.call(null,coll);
var inst_33033 = inst_33032;
var state_33056__$1 = (function (){var statearr_33059 = state_33056;
(statearr_33059[(7)] = inst_33033);

return statearr_33059;
})();
var statearr_33060_33086 = state_33056__$1;
(statearr_33060_33086[(2)] = null);

(statearr_33060_33086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (4))){
var inst_33033 = (state_33056[(7)]);
var inst_33036 = cljs.core.first.call(null,inst_33033);
var state_33056__$1 = state_33056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33056__$1,(7),ch,inst_33036);
} else {
if((state_val_33057 === (13))){
var inst_33050 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
var statearr_33061_33087 = state_33056__$1;
(statearr_33061_33087[(2)] = inst_33050);

(statearr_33061_33087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (6))){
var inst_33041 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
if(cljs.core.truth_(inst_33041)){
var statearr_33062_33088 = state_33056__$1;
(statearr_33062_33088[(1)] = (8));

} else {
var statearr_33063_33089 = state_33056__$1;
(statearr_33063_33089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (3))){
var inst_33054 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33056__$1,inst_33054);
} else {
if((state_val_33057 === (12))){
var state_33056__$1 = state_33056;
var statearr_33064_33090 = state_33056__$1;
(statearr_33064_33090[(2)] = null);

(statearr_33064_33090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (2))){
var inst_33033 = (state_33056[(7)]);
var state_33056__$1 = state_33056;
if(cljs.core.truth_(inst_33033)){
var statearr_33065_33091 = state_33056__$1;
(statearr_33065_33091[(1)] = (4));

} else {
var statearr_33066_33092 = state_33056__$1;
(statearr_33066_33092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (11))){
var inst_33047 = cljs.core.async.close_BANG_.call(null,ch);
var state_33056__$1 = state_33056;
var statearr_33067_33093 = state_33056__$1;
(statearr_33067_33093[(2)] = inst_33047);

(statearr_33067_33093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (9))){
var state_33056__$1 = state_33056;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33068_33094 = state_33056__$1;
(statearr_33068_33094[(1)] = (11));

} else {
var statearr_33069_33095 = state_33056__$1;
(statearr_33069_33095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (5))){
var inst_33033 = (state_33056[(7)]);
var state_33056__$1 = state_33056;
var statearr_33070_33096 = state_33056__$1;
(statearr_33070_33096[(2)] = inst_33033);

(statearr_33070_33096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (10))){
var inst_33052 = (state_33056[(2)]);
var state_33056__$1 = state_33056;
var statearr_33071_33097 = state_33056__$1;
(statearr_33071_33097[(2)] = inst_33052);

(statearr_33071_33097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33057 === (8))){
var inst_33033 = (state_33056[(7)]);
var inst_33043 = cljs.core.next.call(null,inst_33033);
var inst_33033__$1 = inst_33043;
var state_33056__$1 = (function (){var statearr_33072 = state_33056;
(statearr_33072[(7)] = inst_33033__$1);

return statearr_33072;
})();
var statearr_33073_33098 = state_33056__$1;
(statearr_33073_33098[(2)] = null);

(statearr_33073_33098[(1)] = (2));


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
});})(c__32228__auto__))
;
return ((function (switch__32116__auto__,c__32228__auto__){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_33077 = [null,null,null,null,null,null,null,null];
(statearr_33077[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_33077[(1)] = (1));

return statearr_33077;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_33056){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_33056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e33078){if((e33078 instanceof Object)){
var ex__32120__auto__ = e33078;
var statearr_33079_33099 = state_33056;
(statearr_33079_33099[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33100 = state_33056;
state_33056 = G__33100;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_33056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_33056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto__))
})();
var state__32230__auto__ = (function (){var statearr_33080 = f__32229__auto__.call(null);
(statearr_33080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto__);

return statearr_33080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto__))
);

return c__32228__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28063__auto__ = (((_ == null))?null:_);
var m__28064__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,_);
} else {
var m__28064__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28064__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,ch);
} else {
var m__28064__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m);
} else {
var m__28064__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33326 = (function (mult,ch,cs,meta33327){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33327 = meta33327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33328,meta33327__$1){
var self__ = this;
var _33328__$1 = this;
return (new cljs.core.async.t_cljs$core$async33326(self__.mult,self__.ch,self__.cs,meta33327__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33328){
var self__ = this;
var _33328__$1 = this;
return self__.meta33327;
});})(cs))
;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33326.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33326.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33327","meta33327",-86876308,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33326";

cljs.core.async.t_cljs$core$async33326.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async33326");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33326 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33326(mult__$1,ch__$1,cs__$1,meta33327){
return (new cljs.core.async.t_cljs$core$async33326(mult__$1,ch__$1,cs__$1,meta33327));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33326(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32228__auto___33551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___33551,cs,m,dchan,dctr,done){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___33551,cs,m,dchan,dctr,done){
return (function (state_33463){
var state_val_33464 = (state_33463[(1)]);
if((state_val_33464 === (7))){
var inst_33459 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33465_33552 = state_33463__$1;
(statearr_33465_33552[(2)] = inst_33459);

(statearr_33465_33552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (20))){
var inst_33362 = (state_33463[(7)]);
var inst_33374 = cljs.core.first.call(null,inst_33362);
var inst_33375 = cljs.core.nth.call(null,inst_33374,(0),null);
var inst_33376 = cljs.core.nth.call(null,inst_33374,(1),null);
var state_33463__$1 = (function (){var statearr_33466 = state_33463;
(statearr_33466[(8)] = inst_33375);

return statearr_33466;
})();
if(cljs.core.truth_(inst_33376)){
var statearr_33467_33553 = state_33463__$1;
(statearr_33467_33553[(1)] = (22));

} else {
var statearr_33468_33554 = state_33463__$1;
(statearr_33468_33554[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (27))){
var inst_33404 = (state_33463[(9)]);
var inst_33411 = (state_33463[(10)]);
var inst_33406 = (state_33463[(11)]);
var inst_33331 = (state_33463[(12)]);
var inst_33411__$1 = cljs.core._nth.call(null,inst_33404,inst_33406);
var inst_33412 = cljs.core.async.put_BANG_.call(null,inst_33411__$1,inst_33331,done);
var state_33463__$1 = (function (){var statearr_33469 = state_33463;
(statearr_33469[(10)] = inst_33411__$1);

return statearr_33469;
})();
if(cljs.core.truth_(inst_33412)){
var statearr_33470_33555 = state_33463__$1;
(statearr_33470_33555[(1)] = (30));

} else {
var statearr_33471_33556 = state_33463__$1;
(statearr_33471_33556[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (1))){
var state_33463__$1 = state_33463;
var statearr_33472_33557 = state_33463__$1;
(statearr_33472_33557[(2)] = null);

(statearr_33472_33557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (24))){
var inst_33362 = (state_33463[(7)]);
var inst_33381 = (state_33463[(2)]);
var inst_33382 = cljs.core.next.call(null,inst_33362);
var inst_33340 = inst_33382;
var inst_33341 = null;
var inst_33342 = (0);
var inst_33343 = (0);
var state_33463__$1 = (function (){var statearr_33473 = state_33463;
(statearr_33473[(13)] = inst_33342);

(statearr_33473[(14)] = inst_33341);

(statearr_33473[(15)] = inst_33340);

(statearr_33473[(16)] = inst_33343);

(statearr_33473[(17)] = inst_33381);

return statearr_33473;
})();
var statearr_33474_33558 = state_33463__$1;
(statearr_33474_33558[(2)] = null);

(statearr_33474_33558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (39))){
var state_33463__$1 = state_33463;
var statearr_33478_33559 = state_33463__$1;
(statearr_33478_33559[(2)] = null);

(statearr_33478_33559[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (4))){
var inst_33331 = (state_33463[(12)]);
var inst_33331__$1 = (state_33463[(2)]);
var inst_33332 = (inst_33331__$1 == null);
var state_33463__$1 = (function (){var statearr_33479 = state_33463;
(statearr_33479[(12)] = inst_33331__$1);

return statearr_33479;
})();
if(cljs.core.truth_(inst_33332)){
var statearr_33480_33560 = state_33463__$1;
(statearr_33480_33560[(1)] = (5));

} else {
var statearr_33481_33561 = state_33463__$1;
(statearr_33481_33561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (15))){
var inst_33342 = (state_33463[(13)]);
var inst_33341 = (state_33463[(14)]);
var inst_33340 = (state_33463[(15)]);
var inst_33343 = (state_33463[(16)]);
var inst_33358 = (state_33463[(2)]);
var inst_33359 = (inst_33343 + (1));
var tmp33475 = inst_33342;
var tmp33476 = inst_33341;
var tmp33477 = inst_33340;
var inst_33340__$1 = tmp33477;
var inst_33341__$1 = tmp33476;
var inst_33342__$1 = tmp33475;
var inst_33343__$1 = inst_33359;
var state_33463__$1 = (function (){var statearr_33482 = state_33463;
(statearr_33482[(13)] = inst_33342__$1);

(statearr_33482[(14)] = inst_33341__$1);

(statearr_33482[(18)] = inst_33358);

(statearr_33482[(15)] = inst_33340__$1);

(statearr_33482[(16)] = inst_33343__$1);

return statearr_33482;
})();
var statearr_33483_33562 = state_33463__$1;
(statearr_33483_33562[(2)] = null);

(statearr_33483_33562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (21))){
var inst_33385 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33487_33563 = state_33463__$1;
(statearr_33487_33563[(2)] = inst_33385);

(statearr_33487_33563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (31))){
var inst_33411 = (state_33463[(10)]);
var inst_33415 = done.call(null,null);
var inst_33416 = cljs.core.async.untap_STAR_.call(null,m,inst_33411);
var state_33463__$1 = (function (){var statearr_33488 = state_33463;
(statearr_33488[(19)] = inst_33415);

return statearr_33488;
})();
var statearr_33489_33564 = state_33463__$1;
(statearr_33489_33564[(2)] = inst_33416);

(statearr_33489_33564[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (32))){
var inst_33404 = (state_33463[(9)]);
var inst_33406 = (state_33463[(11)]);
var inst_33403 = (state_33463[(20)]);
var inst_33405 = (state_33463[(21)]);
var inst_33418 = (state_33463[(2)]);
var inst_33419 = (inst_33406 + (1));
var tmp33484 = inst_33404;
var tmp33485 = inst_33403;
var tmp33486 = inst_33405;
var inst_33403__$1 = tmp33485;
var inst_33404__$1 = tmp33484;
var inst_33405__$1 = tmp33486;
var inst_33406__$1 = inst_33419;
var state_33463__$1 = (function (){var statearr_33490 = state_33463;
(statearr_33490[(9)] = inst_33404__$1);

(statearr_33490[(11)] = inst_33406__$1);

(statearr_33490[(20)] = inst_33403__$1);

(statearr_33490[(22)] = inst_33418);

(statearr_33490[(21)] = inst_33405__$1);

return statearr_33490;
})();
var statearr_33491_33565 = state_33463__$1;
(statearr_33491_33565[(2)] = null);

(statearr_33491_33565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (40))){
var inst_33431 = (state_33463[(23)]);
var inst_33435 = done.call(null,null);
var inst_33436 = cljs.core.async.untap_STAR_.call(null,m,inst_33431);
var state_33463__$1 = (function (){var statearr_33492 = state_33463;
(statearr_33492[(24)] = inst_33435);

return statearr_33492;
})();
var statearr_33493_33566 = state_33463__$1;
(statearr_33493_33566[(2)] = inst_33436);

(statearr_33493_33566[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (33))){
var inst_33422 = (state_33463[(25)]);
var inst_33424 = cljs.core.chunked_seq_QMARK_.call(null,inst_33422);
var state_33463__$1 = state_33463;
if(inst_33424){
var statearr_33494_33567 = state_33463__$1;
(statearr_33494_33567[(1)] = (36));

} else {
var statearr_33495_33568 = state_33463__$1;
(statearr_33495_33568[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (13))){
var inst_33352 = (state_33463[(26)]);
var inst_33355 = cljs.core.async.close_BANG_.call(null,inst_33352);
var state_33463__$1 = state_33463;
var statearr_33496_33569 = state_33463__$1;
(statearr_33496_33569[(2)] = inst_33355);

(statearr_33496_33569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (22))){
var inst_33375 = (state_33463[(8)]);
var inst_33378 = cljs.core.async.close_BANG_.call(null,inst_33375);
var state_33463__$1 = state_33463;
var statearr_33497_33570 = state_33463__$1;
(statearr_33497_33570[(2)] = inst_33378);

(statearr_33497_33570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (36))){
var inst_33422 = (state_33463[(25)]);
var inst_33426 = cljs.core.chunk_first.call(null,inst_33422);
var inst_33427 = cljs.core.chunk_rest.call(null,inst_33422);
var inst_33428 = cljs.core.count.call(null,inst_33426);
var inst_33403 = inst_33427;
var inst_33404 = inst_33426;
var inst_33405 = inst_33428;
var inst_33406 = (0);
var state_33463__$1 = (function (){var statearr_33498 = state_33463;
(statearr_33498[(9)] = inst_33404);

(statearr_33498[(11)] = inst_33406);

(statearr_33498[(20)] = inst_33403);

(statearr_33498[(21)] = inst_33405);

return statearr_33498;
})();
var statearr_33499_33571 = state_33463__$1;
(statearr_33499_33571[(2)] = null);

(statearr_33499_33571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (41))){
var inst_33422 = (state_33463[(25)]);
var inst_33438 = (state_33463[(2)]);
var inst_33439 = cljs.core.next.call(null,inst_33422);
var inst_33403 = inst_33439;
var inst_33404 = null;
var inst_33405 = (0);
var inst_33406 = (0);
var state_33463__$1 = (function (){var statearr_33500 = state_33463;
(statearr_33500[(9)] = inst_33404);

(statearr_33500[(11)] = inst_33406);

(statearr_33500[(20)] = inst_33403);

(statearr_33500[(27)] = inst_33438);

(statearr_33500[(21)] = inst_33405);

return statearr_33500;
})();
var statearr_33501_33572 = state_33463__$1;
(statearr_33501_33572[(2)] = null);

(statearr_33501_33572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (43))){
var state_33463__$1 = state_33463;
var statearr_33502_33573 = state_33463__$1;
(statearr_33502_33573[(2)] = null);

(statearr_33502_33573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (29))){
var inst_33447 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33503_33574 = state_33463__$1;
(statearr_33503_33574[(2)] = inst_33447);

(statearr_33503_33574[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (44))){
var inst_33456 = (state_33463[(2)]);
var state_33463__$1 = (function (){var statearr_33504 = state_33463;
(statearr_33504[(28)] = inst_33456);

return statearr_33504;
})();
var statearr_33505_33575 = state_33463__$1;
(statearr_33505_33575[(2)] = null);

(statearr_33505_33575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (6))){
var inst_33395 = (state_33463[(29)]);
var inst_33394 = cljs.core.deref.call(null,cs);
var inst_33395__$1 = cljs.core.keys.call(null,inst_33394);
var inst_33396 = cljs.core.count.call(null,inst_33395__$1);
var inst_33397 = cljs.core.reset_BANG_.call(null,dctr,inst_33396);
var inst_33402 = cljs.core.seq.call(null,inst_33395__$1);
var inst_33403 = inst_33402;
var inst_33404 = null;
var inst_33405 = (0);
var inst_33406 = (0);
var state_33463__$1 = (function (){var statearr_33506 = state_33463;
(statearr_33506[(9)] = inst_33404);

(statearr_33506[(11)] = inst_33406);

(statearr_33506[(29)] = inst_33395__$1);

(statearr_33506[(20)] = inst_33403);

(statearr_33506[(30)] = inst_33397);

(statearr_33506[(21)] = inst_33405);

return statearr_33506;
})();
var statearr_33507_33576 = state_33463__$1;
(statearr_33507_33576[(2)] = null);

(statearr_33507_33576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (28))){
var inst_33422 = (state_33463[(25)]);
var inst_33403 = (state_33463[(20)]);
var inst_33422__$1 = cljs.core.seq.call(null,inst_33403);
var state_33463__$1 = (function (){var statearr_33508 = state_33463;
(statearr_33508[(25)] = inst_33422__$1);

return statearr_33508;
})();
if(inst_33422__$1){
var statearr_33509_33577 = state_33463__$1;
(statearr_33509_33577[(1)] = (33));

} else {
var statearr_33510_33578 = state_33463__$1;
(statearr_33510_33578[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (25))){
var inst_33406 = (state_33463[(11)]);
var inst_33405 = (state_33463[(21)]);
var inst_33408 = (inst_33406 < inst_33405);
var inst_33409 = inst_33408;
var state_33463__$1 = state_33463;
if(cljs.core.truth_(inst_33409)){
var statearr_33511_33579 = state_33463__$1;
(statearr_33511_33579[(1)] = (27));

} else {
var statearr_33512_33580 = state_33463__$1;
(statearr_33512_33580[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (34))){
var state_33463__$1 = state_33463;
var statearr_33513_33581 = state_33463__$1;
(statearr_33513_33581[(2)] = null);

(statearr_33513_33581[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (17))){
var state_33463__$1 = state_33463;
var statearr_33514_33582 = state_33463__$1;
(statearr_33514_33582[(2)] = null);

(statearr_33514_33582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (3))){
var inst_33461 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33463__$1,inst_33461);
} else {
if((state_val_33464 === (12))){
var inst_33390 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33515_33583 = state_33463__$1;
(statearr_33515_33583[(2)] = inst_33390);

(statearr_33515_33583[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (2))){
var state_33463__$1 = state_33463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33463__$1,(4),ch);
} else {
if((state_val_33464 === (23))){
var state_33463__$1 = state_33463;
var statearr_33516_33584 = state_33463__$1;
(statearr_33516_33584[(2)] = null);

(statearr_33516_33584[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (35))){
var inst_33445 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33517_33585 = state_33463__$1;
(statearr_33517_33585[(2)] = inst_33445);

(statearr_33517_33585[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (19))){
var inst_33362 = (state_33463[(7)]);
var inst_33366 = cljs.core.chunk_first.call(null,inst_33362);
var inst_33367 = cljs.core.chunk_rest.call(null,inst_33362);
var inst_33368 = cljs.core.count.call(null,inst_33366);
var inst_33340 = inst_33367;
var inst_33341 = inst_33366;
var inst_33342 = inst_33368;
var inst_33343 = (0);
var state_33463__$1 = (function (){var statearr_33518 = state_33463;
(statearr_33518[(13)] = inst_33342);

(statearr_33518[(14)] = inst_33341);

(statearr_33518[(15)] = inst_33340);

(statearr_33518[(16)] = inst_33343);

return statearr_33518;
})();
var statearr_33519_33586 = state_33463__$1;
(statearr_33519_33586[(2)] = null);

(statearr_33519_33586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (11))){
var inst_33362 = (state_33463[(7)]);
var inst_33340 = (state_33463[(15)]);
var inst_33362__$1 = cljs.core.seq.call(null,inst_33340);
var state_33463__$1 = (function (){var statearr_33520 = state_33463;
(statearr_33520[(7)] = inst_33362__$1);

return statearr_33520;
})();
if(inst_33362__$1){
var statearr_33521_33587 = state_33463__$1;
(statearr_33521_33587[(1)] = (16));

} else {
var statearr_33522_33588 = state_33463__$1;
(statearr_33522_33588[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (9))){
var inst_33392 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33523_33589 = state_33463__$1;
(statearr_33523_33589[(2)] = inst_33392);

(statearr_33523_33589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (5))){
var inst_33338 = cljs.core.deref.call(null,cs);
var inst_33339 = cljs.core.seq.call(null,inst_33338);
var inst_33340 = inst_33339;
var inst_33341 = null;
var inst_33342 = (0);
var inst_33343 = (0);
var state_33463__$1 = (function (){var statearr_33524 = state_33463;
(statearr_33524[(13)] = inst_33342);

(statearr_33524[(14)] = inst_33341);

(statearr_33524[(15)] = inst_33340);

(statearr_33524[(16)] = inst_33343);

return statearr_33524;
})();
var statearr_33525_33590 = state_33463__$1;
(statearr_33525_33590[(2)] = null);

(statearr_33525_33590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (14))){
var state_33463__$1 = state_33463;
var statearr_33526_33591 = state_33463__$1;
(statearr_33526_33591[(2)] = null);

(statearr_33526_33591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (45))){
var inst_33453 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33527_33592 = state_33463__$1;
(statearr_33527_33592[(2)] = inst_33453);

(statearr_33527_33592[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (26))){
var inst_33395 = (state_33463[(29)]);
var inst_33449 = (state_33463[(2)]);
var inst_33450 = cljs.core.seq.call(null,inst_33395);
var state_33463__$1 = (function (){var statearr_33528 = state_33463;
(statearr_33528[(31)] = inst_33449);

return statearr_33528;
})();
if(inst_33450){
var statearr_33529_33593 = state_33463__$1;
(statearr_33529_33593[(1)] = (42));

} else {
var statearr_33530_33594 = state_33463__$1;
(statearr_33530_33594[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (16))){
var inst_33362 = (state_33463[(7)]);
var inst_33364 = cljs.core.chunked_seq_QMARK_.call(null,inst_33362);
var state_33463__$1 = state_33463;
if(inst_33364){
var statearr_33531_33595 = state_33463__$1;
(statearr_33531_33595[(1)] = (19));

} else {
var statearr_33532_33596 = state_33463__$1;
(statearr_33532_33596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (38))){
var inst_33442 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33533_33597 = state_33463__$1;
(statearr_33533_33597[(2)] = inst_33442);

(statearr_33533_33597[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (30))){
var state_33463__$1 = state_33463;
var statearr_33534_33598 = state_33463__$1;
(statearr_33534_33598[(2)] = null);

(statearr_33534_33598[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (10))){
var inst_33341 = (state_33463[(14)]);
var inst_33343 = (state_33463[(16)]);
var inst_33351 = cljs.core._nth.call(null,inst_33341,inst_33343);
var inst_33352 = cljs.core.nth.call(null,inst_33351,(0),null);
var inst_33353 = cljs.core.nth.call(null,inst_33351,(1),null);
var state_33463__$1 = (function (){var statearr_33535 = state_33463;
(statearr_33535[(26)] = inst_33352);

return statearr_33535;
})();
if(cljs.core.truth_(inst_33353)){
var statearr_33536_33599 = state_33463__$1;
(statearr_33536_33599[(1)] = (13));

} else {
var statearr_33537_33600 = state_33463__$1;
(statearr_33537_33600[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (18))){
var inst_33388 = (state_33463[(2)]);
var state_33463__$1 = state_33463;
var statearr_33538_33601 = state_33463__$1;
(statearr_33538_33601[(2)] = inst_33388);

(statearr_33538_33601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (42))){
var state_33463__$1 = state_33463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33463__$1,(45),dchan);
} else {
if((state_val_33464 === (37))){
var inst_33422 = (state_33463[(25)]);
var inst_33331 = (state_33463[(12)]);
var inst_33431 = (state_33463[(23)]);
var inst_33431__$1 = cljs.core.first.call(null,inst_33422);
var inst_33432 = cljs.core.async.put_BANG_.call(null,inst_33431__$1,inst_33331,done);
var state_33463__$1 = (function (){var statearr_33539 = state_33463;
(statearr_33539[(23)] = inst_33431__$1);

return statearr_33539;
})();
if(cljs.core.truth_(inst_33432)){
var statearr_33540_33602 = state_33463__$1;
(statearr_33540_33602[(1)] = (39));

} else {
var statearr_33541_33603 = state_33463__$1;
(statearr_33541_33603[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33464 === (8))){
var inst_33342 = (state_33463[(13)]);
var inst_33343 = (state_33463[(16)]);
var inst_33345 = (inst_33343 < inst_33342);
var inst_33346 = inst_33345;
var state_33463__$1 = state_33463;
if(cljs.core.truth_(inst_33346)){
var statearr_33542_33604 = state_33463__$1;
(statearr_33542_33604[(1)] = (10));

} else {
var statearr_33543_33605 = state_33463__$1;
(statearr_33543_33605[(1)] = (11));

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
});})(c__32228__auto___33551,cs,m,dchan,dctr,done))
;
return ((function (switch__32116__auto__,c__32228__auto___33551,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32117__auto__ = null;
var cljs$core$async$mult_$_state_machine__32117__auto____0 = (function (){
var statearr_33547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33547[(0)] = cljs$core$async$mult_$_state_machine__32117__auto__);

(statearr_33547[(1)] = (1));

return statearr_33547;
});
var cljs$core$async$mult_$_state_machine__32117__auto____1 = (function (state_33463){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_33463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e33548){if((e33548 instanceof Object)){
var ex__32120__auto__ = e33548;
var statearr_33549_33606 = state_33463;
(statearr_33549_33606[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33607 = state_33463;
state_33463 = G__33607;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32117__auto__ = function(state_33463){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32117__auto____1.call(this,state_33463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32117__auto____0;
cljs$core$async$mult_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32117__auto____1;
return cljs$core$async$mult_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___33551,cs,m,dchan,dctr,done))
})();
var state__32230__auto__ = (function (){var statearr_33550 = f__32229__auto__.call(null);
(statearr_33550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___33551);

return statearr_33550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___33551,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args33608 = [];
var len__28475__auto___33611 = arguments.length;
var i__28476__auto___33612 = (0);
while(true){
if((i__28476__auto___33612 < len__28475__auto___33611)){
args33608.push((arguments[i__28476__auto___33612]));

var G__33613 = (i__28476__auto___33612 + (1));
i__28476__auto___33612 = G__33613;
continue;
} else {
}
break;
}

var G__33610 = args33608.length;
switch (G__33610) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33608.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,ch);
} else {
var m__28064__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,ch);
} else {
var m__28064__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m);
} else {
var m__28064__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,state_map);
} else {
var m__28064__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,mode);
} else {
var m__28064__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___33625 = arguments.length;
var i__28476__auto___33626 = (0);
while(true){
if((i__28476__auto___33626 < len__28475__auto___33625)){
args__28482__auto__.push((arguments[i__28476__auto___33626]));

var G__33627 = (i__28476__auto___33626 + (1));
i__28476__auto___33626 = G__33627;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((3) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28483__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33619){
var map__33620 = p__33619;
var map__33620__$1 = ((((!((map__33620 == null)))?((((map__33620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33620):map__33620);
var opts = map__33620__$1;
var statearr_33622_33628 = state;
(statearr_33622_33628[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33620,map__33620__$1,opts){
return (function (val){
var statearr_33623_33629 = state;
(statearr_33623_33629[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33620,map__33620__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33624_33630 = state;
(statearr_33624_33630[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33615){
var G__33616 = cljs.core.first.call(null,seq33615);
var seq33615__$1 = cljs.core.next.call(null,seq33615);
var G__33617 = cljs.core.first.call(null,seq33615__$1);
var seq33615__$2 = cljs.core.next.call(null,seq33615__$1);
var G__33618 = cljs.core.first.call(null,seq33615__$2);
var seq33615__$3 = cljs.core.next.call(null,seq33615__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33616,G__33617,G__33618,seq33615__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33796 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33797){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33797 = meta33797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33798,meta33797__$1){
var self__ = this;
var _33798__$1 = this;
return (new cljs.core.async.t_cljs$core$async33796(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33797__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33798){
var self__ = this;
var _33798__$1 = this;
return self__.meta33797;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33796.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33796.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33797","meta33797",-1404267306,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33796";

cljs.core.async.t_cljs$core$async33796.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async33796");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33796 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33796(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33797){
return (new cljs.core.async.t_cljs$core$async33796(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33797));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33796(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32228__auto___33961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___33961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___33961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33898){
var state_val_33899 = (state_33898[(1)]);
if((state_val_33899 === (7))){
var inst_33814 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
var statearr_33900_33962 = state_33898__$1;
(statearr_33900_33962[(2)] = inst_33814);

(statearr_33900_33962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (20))){
var inst_33826 = (state_33898[(7)]);
var state_33898__$1 = state_33898;
var statearr_33901_33963 = state_33898__$1;
(statearr_33901_33963[(2)] = inst_33826);

(statearr_33901_33963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (27))){
var state_33898__$1 = state_33898;
var statearr_33902_33964 = state_33898__$1;
(statearr_33902_33964[(2)] = null);

(statearr_33902_33964[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (1))){
var inst_33802 = (state_33898[(8)]);
var inst_33802__$1 = calc_state.call(null);
var inst_33804 = (inst_33802__$1 == null);
var inst_33805 = cljs.core.not.call(null,inst_33804);
var state_33898__$1 = (function (){var statearr_33903 = state_33898;
(statearr_33903[(8)] = inst_33802__$1);

return statearr_33903;
})();
if(inst_33805){
var statearr_33904_33965 = state_33898__$1;
(statearr_33904_33965[(1)] = (2));

} else {
var statearr_33905_33966 = state_33898__$1;
(statearr_33905_33966[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (24))){
var inst_33872 = (state_33898[(9)]);
var inst_33858 = (state_33898[(10)]);
var inst_33849 = (state_33898[(11)]);
var inst_33872__$1 = inst_33849.call(null,inst_33858);
var state_33898__$1 = (function (){var statearr_33906 = state_33898;
(statearr_33906[(9)] = inst_33872__$1);

return statearr_33906;
})();
if(cljs.core.truth_(inst_33872__$1)){
var statearr_33907_33967 = state_33898__$1;
(statearr_33907_33967[(1)] = (29));

} else {
var statearr_33908_33968 = state_33898__$1;
(statearr_33908_33968[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (4))){
var inst_33817 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
if(cljs.core.truth_(inst_33817)){
var statearr_33909_33969 = state_33898__$1;
(statearr_33909_33969[(1)] = (8));

} else {
var statearr_33910_33970 = state_33898__$1;
(statearr_33910_33970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (15))){
var inst_33843 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
if(cljs.core.truth_(inst_33843)){
var statearr_33911_33971 = state_33898__$1;
(statearr_33911_33971[(1)] = (19));

} else {
var statearr_33912_33972 = state_33898__$1;
(statearr_33912_33972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (21))){
var inst_33848 = (state_33898[(12)]);
var inst_33848__$1 = (state_33898[(2)]);
var inst_33849 = cljs.core.get.call(null,inst_33848__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33850 = cljs.core.get.call(null,inst_33848__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33851 = cljs.core.get.call(null,inst_33848__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33898__$1 = (function (){var statearr_33913 = state_33898;
(statearr_33913[(13)] = inst_33850);

(statearr_33913[(11)] = inst_33849);

(statearr_33913[(12)] = inst_33848__$1);

return statearr_33913;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33898__$1,(22),inst_33851);
} else {
if((state_val_33899 === (31))){
var inst_33880 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
if(cljs.core.truth_(inst_33880)){
var statearr_33914_33973 = state_33898__$1;
(statearr_33914_33973[(1)] = (32));

} else {
var statearr_33915_33974 = state_33898__$1;
(statearr_33915_33974[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (32))){
var inst_33857 = (state_33898[(14)]);
var state_33898__$1 = state_33898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33898__$1,(35),out,inst_33857);
} else {
if((state_val_33899 === (33))){
var inst_33848 = (state_33898[(12)]);
var inst_33826 = inst_33848;
var state_33898__$1 = (function (){var statearr_33916 = state_33898;
(statearr_33916[(7)] = inst_33826);

return statearr_33916;
})();
var statearr_33917_33975 = state_33898__$1;
(statearr_33917_33975[(2)] = null);

(statearr_33917_33975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (13))){
var inst_33826 = (state_33898[(7)]);
var inst_33833 = inst_33826.cljs$lang$protocol_mask$partition0$;
var inst_33834 = (inst_33833 & (64));
var inst_33835 = inst_33826.cljs$core$ISeq$;
var inst_33836 = (inst_33834) || (inst_33835);
var state_33898__$1 = state_33898;
if(cljs.core.truth_(inst_33836)){
var statearr_33918_33976 = state_33898__$1;
(statearr_33918_33976[(1)] = (16));

} else {
var statearr_33919_33977 = state_33898__$1;
(statearr_33919_33977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (22))){
var inst_33857 = (state_33898[(14)]);
var inst_33858 = (state_33898[(10)]);
var inst_33856 = (state_33898[(2)]);
var inst_33857__$1 = cljs.core.nth.call(null,inst_33856,(0),null);
var inst_33858__$1 = cljs.core.nth.call(null,inst_33856,(1),null);
var inst_33859 = (inst_33857__$1 == null);
var inst_33860 = cljs.core._EQ_.call(null,inst_33858__$1,change);
var inst_33861 = (inst_33859) || (inst_33860);
var state_33898__$1 = (function (){var statearr_33920 = state_33898;
(statearr_33920[(14)] = inst_33857__$1);

(statearr_33920[(10)] = inst_33858__$1);

return statearr_33920;
})();
if(cljs.core.truth_(inst_33861)){
var statearr_33921_33978 = state_33898__$1;
(statearr_33921_33978[(1)] = (23));

} else {
var statearr_33922_33979 = state_33898__$1;
(statearr_33922_33979[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (36))){
var inst_33848 = (state_33898[(12)]);
var inst_33826 = inst_33848;
var state_33898__$1 = (function (){var statearr_33923 = state_33898;
(statearr_33923[(7)] = inst_33826);

return statearr_33923;
})();
var statearr_33924_33980 = state_33898__$1;
(statearr_33924_33980[(2)] = null);

(statearr_33924_33980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (29))){
var inst_33872 = (state_33898[(9)]);
var state_33898__$1 = state_33898;
var statearr_33925_33981 = state_33898__$1;
(statearr_33925_33981[(2)] = inst_33872);

(statearr_33925_33981[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (6))){
var state_33898__$1 = state_33898;
var statearr_33926_33982 = state_33898__$1;
(statearr_33926_33982[(2)] = false);

(statearr_33926_33982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (28))){
var inst_33868 = (state_33898[(2)]);
var inst_33869 = calc_state.call(null);
var inst_33826 = inst_33869;
var state_33898__$1 = (function (){var statearr_33927 = state_33898;
(statearr_33927[(7)] = inst_33826);

(statearr_33927[(15)] = inst_33868);

return statearr_33927;
})();
var statearr_33928_33983 = state_33898__$1;
(statearr_33928_33983[(2)] = null);

(statearr_33928_33983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (25))){
var inst_33894 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
var statearr_33929_33984 = state_33898__$1;
(statearr_33929_33984[(2)] = inst_33894);

(statearr_33929_33984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (34))){
var inst_33892 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
var statearr_33930_33985 = state_33898__$1;
(statearr_33930_33985[(2)] = inst_33892);

(statearr_33930_33985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (17))){
var state_33898__$1 = state_33898;
var statearr_33931_33986 = state_33898__$1;
(statearr_33931_33986[(2)] = false);

(statearr_33931_33986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (3))){
var state_33898__$1 = state_33898;
var statearr_33932_33987 = state_33898__$1;
(statearr_33932_33987[(2)] = false);

(statearr_33932_33987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (12))){
var inst_33896 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33898__$1,inst_33896);
} else {
if((state_val_33899 === (2))){
var inst_33802 = (state_33898[(8)]);
var inst_33807 = inst_33802.cljs$lang$protocol_mask$partition0$;
var inst_33808 = (inst_33807 & (64));
var inst_33809 = inst_33802.cljs$core$ISeq$;
var inst_33810 = (inst_33808) || (inst_33809);
var state_33898__$1 = state_33898;
if(cljs.core.truth_(inst_33810)){
var statearr_33933_33988 = state_33898__$1;
(statearr_33933_33988[(1)] = (5));

} else {
var statearr_33934_33989 = state_33898__$1;
(statearr_33934_33989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (23))){
var inst_33857 = (state_33898[(14)]);
var inst_33863 = (inst_33857 == null);
var state_33898__$1 = state_33898;
if(cljs.core.truth_(inst_33863)){
var statearr_33935_33990 = state_33898__$1;
(statearr_33935_33990[(1)] = (26));

} else {
var statearr_33936_33991 = state_33898__$1;
(statearr_33936_33991[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (35))){
var inst_33883 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
if(cljs.core.truth_(inst_33883)){
var statearr_33937_33992 = state_33898__$1;
(statearr_33937_33992[(1)] = (36));

} else {
var statearr_33938_33993 = state_33898__$1;
(statearr_33938_33993[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (19))){
var inst_33826 = (state_33898[(7)]);
var inst_33845 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33826);
var state_33898__$1 = state_33898;
var statearr_33939_33994 = state_33898__$1;
(statearr_33939_33994[(2)] = inst_33845);

(statearr_33939_33994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (11))){
var inst_33826 = (state_33898[(7)]);
var inst_33830 = (inst_33826 == null);
var inst_33831 = cljs.core.not.call(null,inst_33830);
var state_33898__$1 = state_33898;
if(inst_33831){
var statearr_33940_33995 = state_33898__$1;
(statearr_33940_33995[(1)] = (13));

} else {
var statearr_33941_33996 = state_33898__$1;
(statearr_33941_33996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (9))){
var inst_33802 = (state_33898[(8)]);
var state_33898__$1 = state_33898;
var statearr_33942_33997 = state_33898__$1;
(statearr_33942_33997[(2)] = inst_33802);

(statearr_33942_33997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (5))){
var state_33898__$1 = state_33898;
var statearr_33943_33998 = state_33898__$1;
(statearr_33943_33998[(2)] = true);

(statearr_33943_33998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (14))){
var state_33898__$1 = state_33898;
var statearr_33944_33999 = state_33898__$1;
(statearr_33944_33999[(2)] = false);

(statearr_33944_33999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (26))){
var inst_33858 = (state_33898[(10)]);
var inst_33865 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33858);
var state_33898__$1 = state_33898;
var statearr_33945_34000 = state_33898__$1;
(statearr_33945_34000[(2)] = inst_33865);

(statearr_33945_34000[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (16))){
var state_33898__$1 = state_33898;
var statearr_33946_34001 = state_33898__$1;
(statearr_33946_34001[(2)] = true);

(statearr_33946_34001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (38))){
var inst_33888 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
var statearr_33947_34002 = state_33898__$1;
(statearr_33947_34002[(2)] = inst_33888);

(statearr_33947_34002[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (30))){
var inst_33858 = (state_33898[(10)]);
var inst_33850 = (state_33898[(13)]);
var inst_33849 = (state_33898[(11)]);
var inst_33875 = cljs.core.empty_QMARK_.call(null,inst_33849);
var inst_33876 = inst_33850.call(null,inst_33858);
var inst_33877 = cljs.core.not.call(null,inst_33876);
var inst_33878 = (inst_33875) && (inst_33877);
var state_33898__$1 = state_33898;
var statearr_33948_34003 = state_33898__$1;
(statearr_33948_34003[(2)] = inst_33878);

(statearr_33948_34003[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (10))){
var inst_33802 = (state_33898[(8)]);
var inst_33822 = (state_33898[(2)]);
var inst_33823 = cljs.core.get.call(null,inst_33822,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33824 = cljs.core.get.call(null,inst_33822,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33825 = cljs.core.get.call(null,inst_33822,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33826 = inst_33802;
var state_33898__$1 = (function (){var statearr_33949 = state_33898;
(statearr_33949[(16)] = inst_33824);

(statearr_33949[(7)] = inst_33826);

(statearr_33949[(17)] = inst_33823);

(statearr_33949[(18)] = inst_33825);

return statearr_33949;
})();
var statearr_33950_34004 = state_33898__$1;
(statearr_33950_34004[(2)] = null);

(statearr_33950_34004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (18))){
var inst_33840 = (state_33898[(2)]);
var state_33898__$1 = state_33898;
var statearr_33951_34005 = state_33898__$1;
(statearr_33951_34005[(2)] = inst_33840);

(statearr_33951_34005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (37))){
var state_33898__$1 = state_33898;
var statearr_33952_34006 = state_33898__$1;
(statearr_33952_34006[(2)] = null);

(statearr_33952_34006[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33899 === (8))){
var inst_33802 = (state_33898[(8)]);
var inst_33819 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33802);
var state_33898__$1 = state_33898;
var statearr_33953_34007 = state_33898__$1;
(statearr_33953_34007[(2)] = inst_33819);

(statearr_33953_34007[(1)] = (10));


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
});})(c__32228__auto___33961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32116__auto__,c__32228__auto___33961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32117__auto__ = null;
var cljs$core$async$mix_$_state_machine__32117__auto____0 = (function (){
var statearr_33957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33957[(0)] = cljs$core$async$mix_$_state_machine__32117__auto__);

(statearr_33957[(1)] = (1));

return statearr_33957;
});
var cljs$core$async$mix_$_state_machine__32117__auto____1 = (function (state_33898){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_33898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e33958){if((e33958 instanceof Object)){
var ex__32120__auto__ = e33958;
var statearr_33959_34008 = state_33898;
(statearr_33959_34008[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34009 = state_33898;
state_33898 = G__34009;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32117__auto__ = function(state_33898){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32117__auto____1.call(this,state_33898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32117__auto____0;
cljs$core$async$mix_$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32117__auto____1;
return cljs$core$async$mix_$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___33961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32230__auto__ = (function (){var statearr_33960 = f__32229__auto__.call(null);
(statearr_33960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___33961);

return statearr_33960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___33961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28063__auto__ = (((p == null))?null:p);
var m__28064__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28064__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28063__auto__ = (((p == null))?null:p);
var m__28064__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,p,v,ch);
} else {
var m__28064__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34010 = [];
var len__28475__auto___34013 = arguments.length;
var i__28476__auto___34014 = (0);
while(true){
if((i__28476__auto___34014 < len__28475__auto___34013)){
args34010.push((arguments[i__28476__auto___34014]));

var G__34015 = (i__28476__auto___34014 + (1));
i__28476__auto___34014 = G__34015;
continue;
} else {
}
break;
}

var G__34012 = args34010.length;
switch (G__34012) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34010.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28063__auto__ = (((p == null))?null:p);
var m__28064__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,p);
} else {
var m__28064__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28063__auto__ = (((p == null))?null:p);
var m__28064__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,p,v);
} else {
var m__28064__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args34018 = [];
var len__28475__auto___34143 = arguments.length;
var i__28476__auto___34144 = (0);
while(true){
if((i__28476__auto___34144 < len__28475__auto___34143)){
args34018.push((arguments[i__28476__auto___34144]));

var G__34145 = (i__28476__auto___34144 + (1));
i__28476__auto___34144 = G__34145;
continue;
} else {
}
break;
}

var G__34020 = args34018.length;
switch (G__34020) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34018.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27400__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27400__auto__,mults){
return (function (p1__34017_SHARP_){
if(cljs.core.truth_(p1__34017_SHARP_.call(null,topic))){
return p1__34017_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34017_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27400__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34021 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34022){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34022 = meta34022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34023,meta34022__$1){
var self__ = this;
var _34023__$1 = this;
return (new cljs.core.async.t_cljs$core$async34021(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34022__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34023){
var self__ = this;
var _34023__$1 = this;
return self__.meta34022;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34021.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34021.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34021.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34021.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34021.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34021.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34021.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34022","meta34022",-1316386353,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34021";

cljs.core.async.t_cljs$core$async34021.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async34021");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34021 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34021(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34022){
return (new cljs.core.async.t_cljs$core$async34021(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34022));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34021(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32228__auto___34147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___34147,mults,ensure_mult,p){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___34147,mults,ensure_mult,p){
return (function (state_34095){
var state_val_34096 = (state_34095[(1)]);
if((state_val_34096 === (7))){
var inst_34091 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
var statearr_34097_34148 = state_34095__$1;
(statearr_34097_34148[(2)] = inst_34091);

(statearr_34097_34148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (20))){
var state_34095__$1 = state_34095;
var statearr_34098_34149 = state_34095__$1;
(statearr_34098_34149[(2)] = null);

(statearr_34098_34149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (1))){
var state_34095__$1 = state_34095;
var statearr_34099_34150 = state_34095__$1;
(statearr_34099_34150[(2)] = null);

(statearr_34099_34150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (24))){
var inst_34074 = (state_34095[(7)]);
var inst_34083 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34074);
var state_34095__$1 = state_34095;
var statearr_34100_34151 = state_34095__$1;
(statearr_34100_34151[(2)] = inst_34083);

(statearr_34100_34151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (4))){
var inst_34026 = (state_34095[(8)]);
var inst_34026__$1 = (state_34095[(2)]);
var inst_34027 = (inst_34026__$1 == null);
var state_34095__$1 = (function (){var statearr_34101 = state_34095;
(statearr_34101[(8)] = inst_34026__$1);

return statearr_34101;
})();
if(cljs.core.truth_(inst_34027)){
var statearr_34102_34152 = state_34095__$1;
(statearr_34102_34152[(1)] = (5));

} else {
var statearr_34103_34153 = state_34095__$1;
(statearr_34103_34153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (15))){
var inst_34068 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
var statearr_34104_34154 = state_34095__$1;
(statearr_34104_34154[(2)] = inst_34068);

(statearr_34104_34154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (21))){
var inst_34088 = (state_34095[(2)]);
var state_34095__$1 = (function (){var statearr_34105 = state_34095;
(statearr_34105[(9)] = inst_34088);

return statearr_34105;
})();
var statearr_34106_34155 = state_34095__$1;
(statearr_34106_34155[(2)] = null);

(statearr_34106_34155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (13))){
var inst_34050 = (state_34095[(10)]);
var inst_34052 = cljs.core.chunked_seq_QMARK_.call(null,inst_34050);
var state_34095__$1 = state_34095;
if(inst_34052){
var statearr_34107_34156 = state_34095__$1;
(statearr_34107_34156[(1)] = (16));

} else {
var statearr_34108_34157 = state_34095__$1;
(statearr_34108_34157[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (22))){
var inst_34080 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
if(cljs.core.truth_(inst_34080)){
var statearr_34109_34158 = state_34095__$1;
(statearr_34109_34158[(1)] = (23));

} else {
var statearr_34110_34159 = state_34095__$1;
(statearr_34110_34159[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (6))){
var inst_34076 = (state_34095[(11)]);
var inst_34074 = (state_34095[(7)]);
var inst_34026 = (state_34095[(8)]);
var inst_34074__$1 = topic_fn.call(null,inst_34026);
var inst_34075 = cljs.core.deref.call(null,mults);
var inst_34076__$1 = cljs.core.get.call(null,inst_34075,inst_34074__$1);
var state_34095__$1 = (function (){var statearr_34111 = state_34095;
(statearr_34111[(11)] = inst_34076__$1);

(statearr_34111[(7)] = inst_34074__$1);

return statearr_34111;
})();
if(cljs.core.truth_(inst_34076__$1)){
var statearr_34112_34160 = state_34095__$1;
(statearr_34112_34160[(1)] = (19));

} else {
var statearr_34113_34161 = state_34095__$1;
(statearr_34113_34161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (25))){
var inst_34085 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
var statearr_34114_34162 = state_34095__$1;
(statearr_34114_34162[(2)] = inst_34085);

(statearr_34114_34162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (17))){
var inst_34050 = (state_34095[(10)]);
var inst_34059 = cljs.core.first.call(null,inst_34050);
var inst_34060 = cljs.core.async.muxch_STAR_.call(null,inst_34059);
var inst_34061 = cljs.core.async.close_BANG_.call(null,inst_34060);
var inst_34062 = cljs.core.next.call(null,inst_34050);
var inst_34036 = inst_34062;
var inst_34037 = null;
var inst_34038 = (0);
var inst_34039 = (0);
var state_34095__$1 = (function (){var statearr_34115 = state_34095;
(statearr_34115[(12)] = inst_34039);

(statearr_34115[(13)] = inst_34061);

(statearr_34115[(14)] = inst_34036);

(statearr_34115[(15)] = inst_34037);

(statearr_34115[(16)] = inst_34038);

return statearr_34115;
})();
var statearr_34116_34163 = state_34095__$1;
(statearr_34116_34163[(2)] = null);

(statearr_34116_34163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (3))){
var inst_34093 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34095__$1,inst_34093);
} else {
if((state_val_34096 === (12))){
var inst_34070 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
var statearr_34117_34164 = state_34095__$1;
(statearr_34117_34164[(2)] = inst_34070);

(statearr_34117_34164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (2))){
var state_34095__$1 = state_34095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34095__$1,(4),ch);
} else {
if((state_val_34096 === (23))){
var state_34095__$1 = state_34095;
var statearr_34118_34165 = state_34095__$1;
(statearr_34118_34165[(2)] = null);

(statearr_34118_34165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (19))){
var inst_34076 = (state_34095[(11)]);
var inst_34026 = (state_34095[(8)]);
var inst_34078 = cljs.core.async.muxch_STAR_.call(null,inst_34076);
var state_34095__$1 = state_34095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34095__$1,(22),inst_34078,inst_34026);
} else {
if((state_val_34096 === (11))){
var inst_34036 = (state_34095[(14)]);
var inst_34050 = (state_34095[(10)]);
var inst_34050__$1 = cljs.core.seq.call(null,inst_34036);
var state_34095__$1 = (function (){var statearr_34119 = state_34095;
(statearr_34119[(10)] = inst_34050__$1);

return statearr_34119;
})();
if(inst_34050__$1){
var statearr_34120_34166 = state_34095__$1;
(statearr_34120_34166[(1)] = (13));

} else {
var statearr_34121_34167 = state_34095__$1;
(statearr_34121_34167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (9))){
var inst_34072 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
var statearr_34122_34168 = state_34095__$1;
(statearr_34122_34168[(2)] = inst_34072);

(statearr_34122_34168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (5))){
var inst_34033 = cljs.core.deref.call(null,mults);
var inst_34034 = cljs.core.vals.call(null,inst_34033);
var inst_34035 = cljs.core.seq.call(null,inst_34034);
var inst_34036 = inst_34035;
var inst_34037 = null;
var inst_34038 = (0);
var inst_34039 = (0);
var state_34095__$1 = (function (){var statearr_34123 = state_34095;
(statearr_34123[(12)] = inst_34039);

(statearr_34123[(14)] = inst_34036);

(statearr_34123[(15)] = inst_34037);

(statearr_34123[(16)] = inst_34038);

return statearr_34123;
})();
var statearr_34124_34169 = state_34095__$1;
(statearr_34124_34169[(2)] = null);

(statearr_34124_34169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (14))){
var state_34095__$1 = state_34095;
var statearr_34128_34170 = state_34095__$1;
(statearr_34128_34170[(2)] = null);

(statearr_34128_34170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (16))){
var inst_34050 = (state_34095[(10)]);
var inst_34054 = cljs.core.chunk_first.call(null,inst_34050);
var inst_34055 = cljs.core.chunk_rest.call(null,inst_34050);
var inst_34056 = cljs.core.count.call(null,inst_34054);
var inst_34036 = inst_34055;
var inst_34037 = inst_34054;
var inst_34038 = inst_34056;
var inst_34039 = (0);
var state_34095__$1 = (function (){var statearr_34129 = state_34095;
(statearr_34129[(12)] = inst_34039);

(statearr_34129[(14)] = inst_34036);

(statearr_34129[(15)] = inst_34037);

(statearr_34129[(16)] = inst_34038);

return statearr_34129;
})();
var statearr_34130_34171 = state_34095__$1;
(statearr_34130_34171[(2)] = null);

(statearr_34130_34171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (10))){
var inst_34039 = (state_34095[(12)]);
var inst_34036 = (state_34095[(14)]);
var inst_34037 = (state_34095[(15)]);
var inst_34038 = (state_34095[(16)]);
var inst_34044 = cljs.core._nth.call(null,inst_34037,inst_34039);
var inst_34045 = cljs.core.async.muxch_STAR_.call(null,inst_34044);
var inst_34046 = cljs.core.async.close_BANG_.call(null,inst_34045);
var inst_34047 = (inst_34039 + (1));
var tmp34125 = inst_34036;
var tmp34126 = inst_34037;
var tmp34127 = inst_34038;
var inst_34036__$1 = tmp34125;
var inst_34037__$1 = tmp34126;
var inst_34038__$1 = tmp34127;
var inst_34039__$1 = inst_34047;
var state_34095__$1 = (function (){var statearr_34131 = state_34095;
(statearr_34131[(12)] = inst_34039__$1);

(statearr_34131[(14)] = inst_34036__$1);

(statearr_34131[(15)] = inst_34037__$1);

(statearr_34131[(17)] = inst_34046);

(statearr_34131[(16)] = inst_34038__$1);

return statearr_34131;
})();
var statearr_34132_34172 = state_34095__$1;
(statearr_34132_34172[(2)] = null);

(statearr_34132_34172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (18))){
var inst_34065 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
var statearr_34133_34173 = state_34095__$1;
(statearr_34133_34173[(2)] = inst_34065);

(statearr_34133_34173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (8))){
var inst_34039 = (state_34095[(12)]);
var inst_34038 = (state_34095[(16)]);
var inst_34041 = (inst_34039 < inst_34038);
var inst_34042 = inst_34041;
var state_34095__$1 = state_34095;
if(cljs.core.truth_(inst_34042)){
var statearr_34134_34174 = state_34095__$1;
(statearr_34134_34174[(1)] = (10));

} else {
var statearr_34135_34175 = state_34095__$1;
(statearr_34135_34175[(1)] = (11));

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
});})(c__32228__auto___34147,mults,ensure_mult,p))
;
return ((function (switch__32116__auto__,c__32228__auto___34147,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_34139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34139[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_34139[(1)] = (1));

return statearr_34139;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_34095){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_34095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e34140){if((e34140 instanceof Object)){
var ex__32120__auto__ = e34140;
var statearr_34141_34176 = state_34095;
(statearr_34141_34176[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34177 = state_34095;
state_34095 = G__34177;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_34095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_34095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___34147,mults,ensure_mult,p))
})();
var state__32230__auto__ = (function (){var statearr_34142 = f__32229__auto__.call(null);
(statearr_34142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___34147);

return statearr_34142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___34147,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args34178 = [];
var len__28475__auto___34181 = arguments.length;
var i__28476__auto___34182 = (0);
while(true){
if((i__28476__auto___34182 < len__28475__auto___34181)){
args34178.push((arguments[i__28476__auto___34182]));

var G__34183 = (i__28476__auto___34182 + (1));
i__28476__auto___34182 = G__34183;
continue;
} else {
}
break;
}

var G__34180 = args34178.length;
switch (G__34180) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34178.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args34185 = [];
var len__28475__auto___34188 = arguments.length;
var i__28476__auto___34189 = (0);
while(true){
if((i__28476__auto___34189 < len__28475__auto___34188)){
args34185.push((arguments[i__28476__auto___34189]));

var G__34190 = (i__28476__auto___34189 + (1));
i__28476__auto___34189 = G__34190;
continue;
} else {
}
break;
}

var G__34187 = args34185.length;
switch (G__34187) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34185.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args34192 = [];
var len__28475__auto___34263 = arguments.length;
var i__28476__auto___34264 = (0);
while(true){
if((i__28476__auto___34264 < len__28475__auto___34263)){
args34192.push((arguments[i__28476__auto___34264]));

var G__34265 = (i__28476__auto___34264 + (1));
i__28476__auto___34264 = G__34265;
continue;
} else {
}
break;
}

var G__34194 = args34192.length;
switch (G__34194) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34192.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32228__auto___34267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___34267,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___34267,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34233){
var state_val_34234 = (state_34233[(1)]);
if((state_val_34234 === (7))){
var state_34233__$1 = state_34233;
var statearr_34235_34268 = state_34233__$1;
(statearr_34235_34268[(2)] = null);

(statearr_34235_34268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (1))){
var state_34233__$1 = state_34233;
var statearr_34236_34269 = state_34233__$1;
(statearr_34236_34269[(2)] = null);

(statearr_34236_34269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (4))){
var inst_34197 = (state_34233[(7)]);
var inst_34199 = (inst_34197 < cnt);
var state_34233__$1 = state_34233;
if(cljs.core.truth_(inst_34199)){
var statearr_34237_34270 = state_34233__$1;
(statearr_34237_34270[(1)] = (6));

} else {
var statearr_34238_34271 = state_34233__$1;
(statearr_34238_34271[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (15))){
var inst_34229 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
var statearr_34239_34272 = state_34233__$1;
(statearr_34239_34272[(2)] = inst_34229);

(statearr_34239_34272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (13))){
var inst_34222 = cljs.core.async.close_BANG_.call(null,out);
var state_34233__$1 = state_34233;
var statearr_34240_34273 = state_34233__$1;
(statearr_34240_34273[(2)] = inst_34222);

(statearr_34240_34273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (6))){
var state_34233__$1 = state_34233;
var statearr_34241_34274 = state_34233__$1;
(statearr_34241_34274[(2)] = null);

(statearr_34241_34274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (3))){
var inst_34231 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34233__$1,inst_34231);
} else {
if((state_val_34234 === (12))){
var inst_34219 = (state_34233[(8)]);
var inst_34219__$1 = (state_34233[(2)]);
var inst_34220 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34219__$1);
var state_34233__$1 = (function (){var statearr_34242 = state_34233;
(statearr_34242[(8)] = inst_34219__$1);

return statearr_34242;
})();
if(cljs.core.truth_(inst_34220)){
var statearr_34243_34275 = state_34233__$1;
(statearr_34243_34275[(1)] = (13));

} else {
var statearr_34244_34276 = state_34233__$1;
(statearr_34244_34276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (2))){
var inst_34196 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34197 = (0);
var state_34233__$1 = (function (){var statearr_34245 = state_34233;
(statearr_34245[(9)] = inst_34196);

(statearr_34245[(7)] = inst_34197);

return statearr_34245;
})();
var statearr_34246_34277 = state_34233__$1;
(statearr_34246_34277[(2)] = null);

(statearr_34246_34277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (11))){
var inst_34197 = (state_34233[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34233,(10),Object,null,(9));
var inst_34206 = chs__$1.call(null,inst_34197);
var inst_34207 = done.call(null,inst_34197);
var inst_34208 = cljs.core.async.take_BANG_.call(null,inst_34206,inst_34207);
var state_34233__$1 = state_34233;
var statearr_34247_34278 = state_34233__$1;
(statearr_34247_34278[(2)] = inst_34208);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (9))){
var inst_34197 = (state_34233[(7)]);
var inst_34210 = (state_34233[(2)]);
var inst_34211 = (inst_34197 + (1));
var inst_34197__$1 = inst_34211;
var state_34233__$1 = (function (){var statearr_34248 = state_34233;
(statearr_34248[(10)] = inst_34210);

(statearr_34248[(7)] = inst_34197__$1);

return statearr_34248;
})();
var statearr_34249_34279 = state_34233__$1;
(statearr_34249_34279[(2)] = null);

(statearr_34249_34279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (5))){
var inst_34217 = (state_34233[(2)]);
var state_34233__$1 = (function (){var statearr_34250 = state_34233;
(statearr_34250[(11)] = inst_34217);

return statearr_34250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34233__$1,(12),dchan);
} else {
if((state_val_34234 === (14))){
var inst_34219 = (state_34233[(8)]);
var inst_34224 = cljs.core.apply.call(null,f,inst_34219);
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34233__$1,(16),out,inst_34224);
} else {
if((state_val_34234 === (16))){
var inst_34226 = (state_34233[(2)]);
var state_34233__$1 = (function (){var statearr_34251 = state_34233;
(statearr_34251[(12)] = inst_34226);

return statearr_34251;
})();
var statearr_34252_34280 = state_34233__$1;
(statearr_34252_34280[(2)] = null);

(statearr_34252_34280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (10))){
var inst_34201 = (state_34233[(2)]);
var inst_34202 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34233__$1 = (function (){var statearr_34253 = state_34233;
(statearr_34253[(13)] = inst_34201);

return statearr_34253;
})();
var statearr_34254_34281 = state_34233__$1;
(statearr_34254_34281[(2)] = inst_34202);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (8))){
var inst_34215 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
var statearr_34255_34282 = state_34233__$1;
(statearr_34255_34282[(2)] = inst_34215);

(statearr_34255_34282[(1)] = (5));


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
});})(c__32228__auto___34267,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32116__auto__,c__32228__auto___34267,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_34259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34259[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_34259[(1)] = (1));

return statearr_34259;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_34233){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_34233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e34260){if((e34260 instanceof Object)){
var ex__32120__auto__ = e34260;
var statearr_34261_34283 = state_34233;
(statearr_34261_34283[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34284 = state_34233;
state_34233 = G__34284;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_34233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_34233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___34267,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32230__auto__ = (function (){var statearr_34262 = f__32229__auto__.call(null);
(statearr_34262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___34267);

return statearr_34262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___34267,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args34286 = [];
var len__28475__auto___34344 = arguments.length;
var i__28476__auto___34345 = (0);
while(true){
if((i__28476__auto___34345 < len__28475__auto___34344)){
args34286.push((arguments[i__28476__auto___34345]));

var G__34346 = (i__28476__auto___34345 + (1));
i__28476__auto___34345 = G__34346;
continue;
} else {
}
break;
}

var G__34288 = args34286.length;
switch (G__34288) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34286.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32228__auto___34348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___34348,out){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___34348,out){
return (function (state_34320){
var state_val_34321 = (state_34320[(1)]);
if((state_val_34321 === (7))){
var inst_34299 = (state_34320[(7)]);
var inst_34300 = (state_34320[(8)]);
var inst_34299__$1 = (state_34320[(2)]);
var inst_34300__$1 = cljs.core.nth.call(null,inst_34299__$1,(0),null);
var inst_34301 = cljs.core.nth.call(null,inst_34299__$1,(1),null);
var inst_34302 = (inst_34300__$1 == null);
var state_34320__$1 = (function (){var statearr_34322 = state_34320;
(statearr_34322[(9)] = inst_34301);

(statearr_34322[(7)] = inst_34299__$1);

(statearr_34322[(8)] = inst_34300__$1);

return statearr_34322;
})();
if(cljs.core.truth_(inst_34302)){
var statearr_34323_34349 = state_34320__$1;
(statearr_34323_34349[(1)] = (8));

} else {
var statearr_34324_34350 = state_34320__$1;
(statearr_34324_34350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (1))){
var inst_34289 = cljs.core.vec.call(null,chs);
var inst_34290 = inst_34289;
var state_34320__$1 = (function (){var statearr_34325 = state_34320;
(statearr_34325[(10)] = inst_34290);

return statearr_34325;
})();
var statearr_34326_34351 = state_34320__$1;
(statearr_34326_34351[(2)] = null);

(statearr_34326_34351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (4))){
var inst_34290 = (state_34320[(10)]);
var state_34320__$1 = state_34320;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34320__$1,(7),inst_34290);
} else {
if((state_val_34321 === (6))){
var inst_34316 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34327_34352 = state_34320__$1;
(statearr_34327_34352[(2)] = inst_34316);

(statearr_34327_34352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (3))){
var inst_34318 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34320__$1,inst_34318);
} else {
if((state_val_34321 === (2))){
var inst_34290 = (state_34320[(10)]);
var inst_34292 = cljs.core.count.call(null,inst_34290);
var inst_34293 = (inst_34292 > (0));
var state_34320__$1 = state_34320;
if(cljs.core.truth_(inst_34293)){
var statearr_34329_34353 = state_34320__$1;
(statearr_34329_34353[(1)] = (4));

} else {
var statearr_34330_34354 = state_34320__$1;
(statearr_34330_34354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (11))){
var inst_34290 = (state_34320[(10)]);
var inst_34309 = (state_34320[(2)]);
var tmp34328 = inst_34290;
var inst_34290__$1 = tmp34328;
var state_34320__$1 = (function (){var statearr_34331 = state_34320;
(statearr_34331[(10)] = inst_34290__$1);

(statearr_34331[(11)] = inst_34309);

return statearr_34331;
})();
var statearr_34332_34355 = state_34320__$1;
(statearr_34332_34355[(2)] = null);

(statearr_34332_34355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (9))){
var inst_34300 = (state_34320[(8)]);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34320__$1,(11),out,inst_34300);
} else {
if((state_val_34321 === (5))){
var inst_34314 = cljs.core.async.close_BANG_.call(null,out);
var state_34320__$1 = state_34320;
var statearr_34333_34356 = state_34320__$1;
(statearr_34333_34356[(2)] = inst_34314);

(statearr_34333_34356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (10))){
var inst_34312 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34334_34357 = state_34320__$1;
(statearr_34334_34357[(2)] = inst_34312);

(statearr_34334_34357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34321 === (8))){
var inst_34301 = (state_34320[(9)]);
var inst_34290 = (state_34320[(10)]);
var inst_34299 = (state_34320[(7)]);
var inst_34300 = (state_34320[(8)]);
var inst_34304 = (function (){var cs = inst_34290;
var vec__34295 = inst_34299;
var v = inst_34300;
var c = inst_34301;
return ((function (cs,vec__34295,v,c,inst_34301,inst_34290,inst_34299,inst_34300,state_val_34321,c__32228__auto___34348,out){
return (function (p1__34285_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34285_SHARP_);
});
;})(cs,vec__34295,v,c,inst_34301,inst_34290,inst_34299,inst_34300,state_val_34321,c__32228__auto___34348,out))
})();
var inst_34305 = cljs.core.filterv.call(null,inst_34304,inst_34290);
var inst_34290__$1 = inst_34305;
var state_34320__$1 = (function (){var statearr_34335 = state_34320;
(statearr_34335[(10)] = inst_34290__$1);

return statearr_34335;
})();
var statearr_34336_34358 = state_34320__$1;
(statearr_34336_34358[(2)] = null);

(statearr_34336_34358[(1)] = (2));


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
});})(c__32228__auto___34348,out))
;
return ((function (switch__32116__auto__,c__32228__auto___34348,out){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_34320){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_34320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e34341){if((e34341 instanceof Object)){
var ex__32120__auto__ = e34341;
var statearr_34342_34359 = state_34320;
(statearr_34342_34359[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34360 = state_34320;
state_34320 = G__34360;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_34320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_34320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___34348,out))
})();
var state__32230__auto__ = (function (){var statearr_34343 = f__32229__auto__.call(null);
(statearr_34343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___34348);

return statearr_34343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___34348,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args34361 = [];
var len__28475__auto___34410 = arguments.length;
var i__28476__auto___34411 = (0);
while(true){
if((i__28476__auto___34411 < len__28475__auto___34410)){
args34361.push((arguments[i__28476__auto___34411]));

var G__34412 = (i__28476__auto___34411 + (1));
i__28476__auto___34411 = G__34412;
continue;
} else {
}
break;
}

var G__34363 = args34361.length;
switch (G__34363) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34361.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32228__auto___34414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___34414,out){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___34414,out){
return (function (state_34387){
var state_val_34388 = (state_34387[(1)]);
if((state_val_34388 === (7))){
var inst_34369 = (state_34387[(7)]);
var inst_34369__$1 = (state_34387[(2)]);
var inst_34370 = (inst_34369__$1 == null);
var inst_34371 = cljs.core.not.call(null,inst_34370);
var state_34387__$1 = (function (){var statearr_34389 = state_34387;
(statearr_34389[(7)] = inst_34369__$1);

return statearr_34389;
})();
if(inst_34371){
var statearr_34390_34415 = state_34387__$1;
(statearr_34390_34415[(1)] = (8));

} else {
var statearr_34391_34416 = state_34387__$1;
(statearr_34391_34416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (1))){
var inst_34364 = (0);
var state_34387__$1 = (function (){var statearr_34392 = state_34387;
(statearr_34392[(8)] = inst_34364);

return statearr_34392;
})();
var statearr_34393_34417 = state_34387__$1;
(statearr_34393_34417[(2)] = null);

(statearr_34393_34417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (4))){
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34387__$1,(7),ch);
} else {
if((state_val_34388 === (6))){
var inst_34382 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34394_34418 = state_34387__$1;
(statearr_34394_34418[(2)] = inst_34382);

(statearr_34394_34418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (3))){
var inst_34384 = (state_34387[(2)]);
var inst_34385 = cljs.core.async.close_BANG_.call(null,out);
var state_34387__$1 = (function (){var statearr_34395 = state_34387;
(statearr_34395[(9)] = inst_34384);

return statearr_34395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34387__$1,inst_34385);
} else {
if((state_val_34388 === (2))){
var inst_34364 = (state_34387[(8)]);
var inst_34366 = (inst_34364 < n);
var state_34387__$1 = state_34387;
if(cljs.core.truth_(inst_34366)){
var statearr_34396_34419 = state_34387__$1;
(statearr_34396_34419[(1)] = (4));

} else {
var statearr_34397_34420 = state_34387__$1;
(statearr_34397_34420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (11))){
var inst_34364 = (state_34387[(8)]);
var inst_34374 = (state_34387[(2)]);
var inst_34375 = (inst_34364 + (1));
var inst_34364__$1 = inst_34375;
var state_34387__$1 = (function (){var statearr_34398 = state_34387;
(statearr_34398[(8)] = inst_34364__$1);

(statearr_34398[(10)] = inst_34374);

return statearr_34398;
})();
var statearr_34399_34421 = state_34387__$1;
(statearr_34399_34421[(2)] = null);

(statearr_34399_34421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (9))){
var state_34387__$1 = state_34387;
var statearr_34400_34422 = state_34387__$1;
(statearr_34400_34422[(2)] = null);

(statearr_34400_34422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (5))){
var state_34387__$1 = state_34387;
var statearr_34401_34423 = state_34387__$1;
(statearr_34401_34423[(2)] = null);

(statearr_34401_34423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (10))){
var inst_34379 = (state_34387[(2)]);
var state_34387__$1 = state_34387;
var statearr_34402_34424 = state_34387__$1;
(statearr_34402_34424[(2)] = inst_34379);

(statearr_34402_34424[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34388 === (8))){
var inst_34369 = (state_34387[(7)]);
var state_34387__$1 = state_34387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34387__$1,(11),out,inst_34369);
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
});})(c__32228__auto___34414,out))
;
return ((function (switch__32116__auto__,c__32228__auto___34414,out){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_34406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34406[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_34406[(1)] = (1));

return statearr_34406;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_34387){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_34387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e34407){if((e34407 instanceof Object)){
var ex__32120__auto__ = e34407;
var statearr_34408_34425 = state_34387;
(statearr_34408_34425[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34426 = state_34387;
state_34387 = G__34426;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_34387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_34387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___34414,out))
})();
var state__32230__auto__ = (function (){var statearr_34409 = f__32229__auto__.call(null);
(statearr_34409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___34414);

return statearr_34409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___34414,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34434 = (function (map_LT_,f,ch,meta34435){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34435 = meta34435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34436,meta34435__$1){
var self__ = this;
var _34436__$1 = this;
return (new cljs.core.async.t_cljs$core$async34434(self__.map_LT_,self__.f,self__.ch,meta34435__$1));
});

cljs.core.async.t_cljs$core$async34434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34436){
var self__ = this;
var _34436__$1 = this;
return self__.meta34435;
});

cljs.core.async.t_cljs$core$async34434.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34434.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34434.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34437 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34437 = (function (map_LT_,f,ch,meta34435,_,fn1,meta34438){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34435 = meta34435;
this._ = _;
this.fn1 = fn1;
this.meta34438 = meta34438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34439,meta34438__$1){
var self__ = this;
var _34439__$1 = this;
return (new cljs.core.async.t_cljs$core$async34437(self__.map_LT_,self__.f,self__.ch,self__.meta34435,self__._,self__.fn1,meta34438__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34439){
var self__ = this;
var _34439__$1 = this;
return self__.meta34438;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34437.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34427_SHARP_){
return f1.call(null,(((p1__34427_SHARP_ == null))?null:self__.f.call(null,p1__34427_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34437.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34435","meta34435",693554155,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34434","cljs.core.async/t_cljs$core$async34434",-1223801012,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34438","meta34438",-1487530993,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34437.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34437";

cljs.core.async.t_cljs$core$async34437.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async34437");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34437 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34437(map_LT___$1,f__$1,ch__$1,meta34435__$1,___$2,fn1__$1,meta34438){
return (new cljs.core.async.t_cljs$core$async34437(map_LT___$1,f__$1,ch__$1,meta34435__$1,___$2,fn1__$1,meta34438));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34437(self__.map_LT_,self__.f,self__.ch,self__.meta34435,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27388__auto__ = ret;
if(cljs.core.truth_(and__27388__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27388__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34434.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34435","meta34435",693554155,null)], null);
});

cljs.core.async.t_cljs$core$async34434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34434";

cljs.core.async.t_cljs$core$async34434.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async34434");
});

cljs.core.async.__GT_t_cljs$core$async34434 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34434(map_LT___$1,f__$1,ch__$1,meta34435){
return (new cljs.core.async.t_cljs$core$async34434(map_LT___$1,f__$1,ch__$1,meta34435));
});

}

return (new cljs.core.async.t_cljs$core$async34434(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34443 = (function (map_GT_,f,ch,meta34444){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34444 = meta34444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34445,meta34444__$1){
var self__ = this;
var _34445__$1 = this;
return (new cljs.core.async.t_cljs$core$async34443(self__.map_GT_,self__.f,self__.ch,meta34444__$1));
});

cljs.core.async.t_cljs$core$async34443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34445){
var self__ = this;
var _34445__$1 = this;
return self__.meta34444;
});

cljs.core.async.t_cljs$core$async34443.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34443.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34443.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34444","meta34444",1931128529,null)], null);
});

cljs.core.async.t_cljs$core$async34443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34443";

cljs.core.async.t_cljs$core$async34443.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async34443");
});

cljs.core.async.__GT_t_cljs$core$async34443 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34443(map_GT___$1,f__$1,ch__$1,meta34444){
return (new cljs.core.async.t_cljs$core$async34443(map_GT___$1,f__$1,ch__$1,meta34444));
});

}

return (new cljs.core.async.t_cljs$core$async34443(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34449 = (function (filter_GT_,p,ch,meta34450){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34450 = meta34450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34451,meta34450__$1){
var self__ = this;
var _34451__$1 = this;
return (new cljs.core.async.t_cljs$core$async34449(self__.filter_GT_,self__.p,self__.ch,meta34450__$1));
});

cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34451){
var self__ = this;
var _34451__$1 = this;
return self__.meta34450;
});

cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34450","meta34450",222943141,null)], null);
});

cljs.core.async.t_cljs$core$async34449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34449";

cljs.core.async.t_cljs$core$async34449.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async34449");
});

cljs.core.async.__GT_t_cljs$core$async34449 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34449(filter_GT___$1,p__$1,ch__$1,meta34450){
return (new cljs.core.async.t_cljs$core$async34449(filter_GT___$1,p__$1,ch__$1,meta34450));
});

}

return (new cljs.core.async.t_cljs$core$async34449(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args34452 = [];
var len__28475__auto___34496 = arguments.length;
var i__28476__auto___34497 = (0);
while(true){
if((i__28476__auto___34497 < len__28475__auto___34496)){
args34452.push((arguments[i__28476__auto___34497]));

var G__34498 = (i__28476__auto___34497 + (1));
i__28476__auto___34497 = G__34498;
continue;
} else {
}
break;
}

var G__34454 = args34452.length;
switch (G__34454) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34452.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32228__auto___34500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___34500,out){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___34500,out){
return (function (state_34475){
var state_val_34476 = (state_34475[(1)]);
if((state_val_34476 === (7))){
var inst_34471 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34477_34501 = state_34475__$1;
(statearr_34477_34501[(2)] = inst_34471);

(statearr_34477_34501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (1))){
var state_34475__$1 = state_34475;
var statearr_34478_34502 = state_34475__$1;
(statearr_34478_34502[(2)] = null);

(statearr_34478_34502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (4))){
var inst_34457 = (state_34475[(7)]);
var inst_34457__$1 = (state_34475[(2)]);
var inst_34458 = (inst_34457__$1 == null);
var state_34475__$1 = (function (){var statearr_34479 = state_34475;
(statearr_34479[(7)] = inst_34457__$1);

return statearr_34479;
})();
if(cljs.core.truth_(inst_34458)){
var statearr_34480_34503 = state_34475__$1;
(statearr_34480_34503[(1)] = (5));

} else {
var statearr_34481_34504 = state_34475__$1;
(statearr_34481_34504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (6))){
var inst_34457 = (state_34475[(7)]);
var inst_34462 = p.call(null,inst_34457);
var state_34475__$1 = state_34475;
if(cljs.core.truth_(inst_34462)){
var statearr_34482_34505 = state_34475__$1;
(statearr_34482_34505[(1)] = (8));

} else {
var statearr_34483_34506 = state_34475__$1;
(statearr_34483_34506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (3))){
var inst_34473 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34475__$1,inst_34473);
} else {
if((state_val_34476 === (2))){
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34475__$1,(4),ch);
} else {
if((state_val_34476 === (11))){
var inst_34465 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34484_34507 = state_34475__$1;
(statearr_34484_34507[(2)] = inst_34465);

(statearr_34484_34507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (9))){
var state_34475__$1 = state_34475;
var statearr_34485_34508 = state_34475__$1;
(statearr_34485_34508[(2)] = null);

(statearr_34485_34508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (5))){
var inst_34460 = cljs.core.async.close_BANG_.call(null,out);
var state_34475__$1 = state_34475;
var statearr_34486_34509 = state_34475__$1;
(statearr_34486_34509[(2)] = inst_34460);

(statearr_34486_34509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (10))){
var inst_34468 = (state_34475[(2)]);
var state_34475__$1 = (function (){var statearr_34487 = state_34475;
(statearr_34487[(8)] = inst_34468);

return statearr_34487;
})();
var statearr_34488_34510 = state_34475__$1;
(statearr_34488_34510[(2)] = null);

(statearr_34488_34510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (8))){
var inst_34457 = (state_34475[(7)]);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34475__$1,(11),out,inst_34457);
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
});})(c__32228__auto___34500,out))
;
return ((function (switch__32116__auto__,c__32228__auto___34500,out){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null,null,null];
(statearr_34492[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_34475){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_34475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object)){
var ex__32120__auto__ = e34493;
var statearr_34494_34511 = state_34475;
(statearr_34494_34511[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34512 = state_34475;
state_34475 = G__34512;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_34475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_34475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___34500,out))
})();
var state__32230__auto__ = (function (){var statearr_34495 = f__32229__auto__.call(null);
(statearr_34495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___34500);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___34500,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34513 = [];
var len__28475__auto___34516 = arguments.length;
var i__28476__auto___34517 = (0);
while(true){
if((i__28476__auto___34517 < len__28475__auto___34516)){
args34513.push((arguments[i__28476__auto___34517]));

var G__34518 = (i__28476__auto___34517 + (1));
i__28476__auto___34517 = G__34518;
continue;
} else {
}
break;
}

var G__34515 = args34513.length;
switch (G__34515) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34513.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32228__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto__){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto__){
return (function (state_34685){
var state_val_34686 = (state_34685[(1)]);
if((state_val_34686 === (7))){
var inst_34681 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
var statearr_34687_34728 = state_34685__$1;
(statearr_34687_34728[(2)] = inst_34681);

(statearr_34687_34728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (20))){
var inst_34651 = (state_34685[(7)]);
var inst_34662 = (state_34685[(2)]);
var inst_34663 = cljs.core.next.call(null,inst_34651);
var inst_34637 = inst_34663;
var inst_34638 = null;
var inst_34639 = (0);
var inst_34640 = (0);
var state_34685__$1 = (function (){var statearr_34688 = state_34685;
(statearr_34688[(8)] = inst_34639);

(statearr_34688[(9)] = inst_34638);

(statearr_34688[(10)] = inst_34640);

(statearr_34688[(11)] = inst_34637);

(statearr_34688[(12)] = inst_34662);

return statearr_34688;
})();
var statearr_34689_34729 = state_34685__$1;
(statearr_34689_34729[(2)] = null);

(statearr_34689_34729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (1))){
var state_34685__$1 = state_34685;
var statearr_34690_34730 = state_34685__$1;
(statearr_34690_34730[(2)] = null);

(statearr_34690_34730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (4))){
var inst_34626 = (state_34685[(13)]);
var inst_34626__$1 = (state_34685[(2)]);
var inst_34627 = (inst_34626__$1 == null);
var state_34685__$1 = (function (){var statearr_34691 = state_34685;
(statearr_34691[(13)] = inst_34626__$1);

return statearr_34691;
})();
if(cljs.core.truth_(inst_34627)){
var statearr_34692_34731 = state_34685__$1;
(statearr_34692_34731[(1)] = (5));

} else {
var statearr_34693_34732 = state_34685__$1;
(statearr_34693_34732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (15))){
var state_34685__$1 = state_34685;
var statearr_34697_34733 = state_34685__$1;
(statearr_34697_34733[(2)] = null);

(statearr_34697_34733[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (21))){
var state_34685__$1 = state_34685;
var statearr_34698_34734 = state_34685__$1;
(statearr_34698_34734[(2)] = null);

(statearr_34698_34734[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (13))){
var inst_34639 = (state_34685[(8)]);
var inst_34638 = (state_34685[(9)]);
var inst_34640 = (state_34685[(10)]);
var inst_34637 = (state_34685[(11)]);
var inst_34647 = (state_34685[(2)]);
var inst_34648 = (inst_34640 + (1));
var tmp34694 = inst_34639;
var tmp34695 = inst_34638;
var tmp34696 = inst_34637;
var inst_34637__$1 = tmp34696;
var inst_34638__$1 = tmp34695;
var inst_34639__$1 = tmp34694;
var inst_34640__$1 = inst_34648;
var state_34685__$1 = (function (){var statearr_34699 = state_34685;
(statearr_34699[(8)] = inst_34639__$1);

(statearr_34699[(14)] = inst_34647);

(statearr_34699[(9)] = inst_34638__$1);

(statearr_34699[(10)] = inst_34640__$1);

(statearr_34699[(11)] = inst_34637__$1);

return statearr_34699;
})();
var statearr_34700_34735 = state_34685__$1;
(statearr_34700_34735[(2)] = null);

(statearr_34700_34735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (22))){
var state_34685__$1 = state_34685;
var statearr_34701_34736 = state_34685__$1;
(statearr_34701_34736[(2)] = null);

(statearr_34701_34736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (6))){
var inst_34626 = (state_34685[(13)]);
var inst_34635 = f.call(null,inst_34626);
var inst_34636 = cljs.core.seq.call(null,inst_34635);
var inst_34637 = inst_34636;
var inst_34638 = null;
var inst_34639 = (0);
var inst_34640 = (0);
var state_34685__$1 = (function (){var statearr_34702 = state_34685;
(statearr_34702[(8)] = inst_34639);

(statearr_34702[(9)] = inst_34638);

(statearr_34702[(10)] = inst_34640);

(statearr_34702[(11)] = inst_34637);

return statearr_34702;
})();
var statearr_34703_34737 = state_34685__$1;
(statearr_34703_34737[(2)] = null);

(statearr_34703_34737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (17))){
var inst_34651 = (state_34685[(7)]);
var inst_34655 = cljs.core.chunk_first.call(null,inst_34651);
var inst_34656 = cljs.core.chunk_rest.call(null,inst_34651);
var inst_34657 = cljs.core.count.call(null,inst_34655);
var inst_34637 = inst_34656;
var inst_34638 = inst_34655;
var inst_34639 = inst_34657;
var inst_34640 = (0);
var state_34685__$1 = (function (){var statearr_34704 = state_34685;
(statearr_34704[(8)] = inst_34639);

(statearr_34704[(9)] = inst_34638);

(statearr_34704[(10)] = inst_34640);

(statearr_34704[(11)] = inst_34637);

return statearr_34704;
})();
var statearr_34705_34738 = state_34685__$1;
(statearr_34705_34738[(2)] = null);

(statearr_34705_34738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (3))){
var inst_34683 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34685__$1,inst_34683);
} else {
if((state_val_34686 === (12))){
var inst_34671 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
var statearr_34706_34739 = state_34685__$1;
(statearr_34706_34739[(2)] = inst_34671);

(statearr_34706_34739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (2))){
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34685__$1,(4),in$);
} else {
if((state_val_34686 === (23))){
var inst_34679 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
var statearr_34707_34740 = state_34685__$1;
(statearr_34707_34740[(2)] = inst_34679);

(statearr_34707_34740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (19))){
var inst_34666 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
var statearr_34708_34741 = state_34685__$1;
(statearr_34708_34741[(2)] = inst_34666);

(statearr_34708_34741[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (11))){
var inst_34651 = (state_34685[(7)]);
var inst_34637 = (state_34685[(11)]);
var inst_34651__$1 = cljs.core.seq.call(null,inst_34637);
var state_34685__$1 = (function (){var statearr_34709 = state_34685;
(statearr_34709[(7)] = inst_34651__$1);

return statearr_34709;
})();
if(inst_34651__$1){
var statearr_34710_34742 = state_34685__$1;
(statearr_34710_34742[(1)] = (14));

} else {
var statearr_34711_34743 = state_34685__$1;
(statearr_34711_34743[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (9))){
var inst_34673 = (state_34685[(2)]);
var inst_34674 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34685__$1 = (function (){var statearr_34712 = state_34685;
(statearr_34712[(15)] = inst_34673);

return statearr_34712;
})();
if(cljs.core.truth_(inst_34674)){
var statearr_34713_34744 = state_34685__$1;
(statearr_34713_34744[(1)] = (21));

} else {
var statearr_34714_34745 = state_34685__$1;
(statearr_34714_34745[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (5))){
var inst_34629 = cljs.core.async.close_BANG_.call(null,out);
var state_34685__$1 = state_34685;
var statearr_34715_34746 = state_34685__$1;
(statearr_34715_34746[(2)] = inst_34629);

(statearr_34715_34746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (14))){
var inst_34651 = (state_34685[(7)]);
var inst_34653 = cljs.core.chunked_seq_QMARK_.call(null,inst_34651);
var state_34685__$1 = state_34685;
if(inst_34653){
var statearr_34716_34747 = state_34685__$1;
(statearr_34716_34747[(1)] = (17));

} else {
var statearr_34717_34748 = state_34685__$1;
(statearr_34717_34748[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (16))){
var inst_34669 = (state_34685[(2)]);
var state_34685__$1 = state_34685;
var statearr_34718_34749 = state_34685__$1;
(statearr_34718_34749[(2)] = inst_34669);

(statearr_34718_34749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34686 === (10))){
var inst_34638 = (state_34685[(9)]);
var inst_34640 = (state_34685[(10)]);
var inst_34645 = cljs.core._nth.call(null,inst_34638,inst_34640);
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34685__$1,(13),out,inst_34645);
} else {
if((state_val_34686 === (18))){
var inst_34651 = (state_34685[(7)]);
var inst_34660 = cljs.core.first.call(null,inst_34651);
var state_34685__$1 = state_34685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34685__$1,(20),out,inst_34660);
} else {
if((state_val_34686 === (8))){
var inst_34639 = (state_34685[(8)]);
var inst_34640 = (state_34685[(10)]);
var inst_34642 = (inst_34640 < inst_34639);
var inst_34643 = inst_34642;
var state_34685__$1 = state_34685;
if(cljs.core.truth_(inst_34643)){
var statearr_34719_34750 = state_34685__$1;
(statearr_34719_34750[(1)] = (10));

} else {
var statearr_34720_34751 = state_34685__$1;
(statearr_34720_34751[(1)] = (11));

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
});})(c__32228__auto__))
;
return ((function (switch__32116__auto__,c__32228__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32117__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32117__auto____0 = (function (){
var statearr_34724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34724[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32117__auto__);

(statearr_34724[(1)] = (1));

return statearr_34724;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32117__auto____1 = (function (state_34685){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_34685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e34725){if((e34725 instanceof Object)){
var ex__32120__auto__ = e34725;
var statearr_34726_34752 = state_34685;
(statearr_34726_34752[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34753 = state_34685;
state_34685 = G__34753;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32117__auto__ = function(state_34685){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32117__auto____1.call(this,state_34685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32117__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32117__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto__))
})();
var state__32230__auto__ = (function (){var statearr_34727 = f__32229__auto__.call(null);
(statearr_34727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto__);

return statearr_34727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto__))
);

return c__32228__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34754 = [];
var len__28475__auto___34757 = arguments.length;
var i__28476__auto___34758 = (0);
while(true){
if((i__28476__auto___34758 < len__28475__auto___34757)){
args34754.push((arguments[i__28476__auto___34758]));

var G__34759 = (i__28476__auto___34758 + (1));
i__28476__auto___34758 = G__34759;
continue;
} else {
}
break;
}

var G__34756 = args34754.length;
switch (G__34756) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34754.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34761 = [];
var len__28475__auto___34764 = arguments.length;
var i__28476__auto___34765 = (0);
while(true){
if((i__28476__auto___34765 < len__28475__auto___34764)){
args34761.push((arguments[i__28476__auto___34765]));

var G__34766 = (i__28476__auto___34765 + (1));
i__28476__auto___34765 = G__34766;
continue;
} else {
}
break;
}

var G__34763 = args34761.length;
switch (G__34763) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34761.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34768 = [];
var len__28475__auto___34819 = arguments.length;
var i__28476__auto___34820 = (0);
while(true){
if((i__28476__auto___34820 < len__28475__auto___34819)){
args34768.push((arguments[i__28476__auto___34820]));

var G__34821 = (i__28476__auto___34820 + (1));
i__28476__auto___34820 = G__34821;
continue;
} else {
}
break;
}

var G__34770 = args34768.length;
switch (G__34770) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34768.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32228__auto___34823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___34823,out){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___34823,out){
return (function (state_34794){
var state_val_34795 = (state_34794[(1)]);
if((state_val_34795 === (7))){
var inst_34789 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
var statearr_34796_34824 = state_34794__$1;
(statearr_34796_34824[(2)] = inst_34789);

(statearr_34796_34824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (1))){
var inst_34771 = null;
var state_34794__$1 = (function (){var statearr_34797 = state_34794;
(statearr_34797[(7)] = inst_34771);

return statearr_34797;
})();
var statearr_34798_34825 = state_34794__$1;
(statearr_34798_34825[(2)] = null);

(statearr_34798_34825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (4))){
var inst_34774 = (state_34794[(8)]);
var inst_34774__$1 = (state_34794[(2)]);
var inst_34775 = (inst_34774__$1 == null);
var inst_34776 = cljs.core.not.call(null,inst_34775);
var state_34794__$1 = (function (){var statearr_34799 = state_34794;
(statearr_34799[(8)] = inst_34774__$1);

return statearr_34799;
})();
if(inst_34776){
var statearr_34800_34826 = state_34794__$1;
(statearr_34800_34826[(1)] = (5));

} else {
var statearr_34801_34827 = state_34794__$1;
(statearr_34801_34827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (6))){
var state_34794__$1 = state_34794;
var statearr_34802_34828 = state_34794__$1;
(statearr_34802_34828[(2)] = null);

(statearr_34802_34828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (3))){
var inst_34791 = (state_34794[(2)]);
var inst_34792 = cljs.core.async.close_BANG_.call(null,out);
var state_34794__$1 = (function (){var statearr_34803 = state_34794;
(statearr_34803[(9)] = inst_34791);

return statearr_34803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34794__$1,inst_34792);
} else {
if((state_val_34795 === (2))){
var state_34794__$1 = state_34794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34794__$1,(4),ch);
} else {
if((state_val_34795 === (11))){
var inst_34774 = (state_34794[(8)]);
var inst_34783 = (state_34794[(2)]);
var inst_34771 = inst_34774;
var state_34794__$1 = (function (){var statearr_34804 = state_34794;
(statearr_34804[(7)] = inst_34771);

(statearr_34804[(10)] = inst_34783);

return statearr_34804;
})();
var statearr_34805_34829 = state_34794__$1;
(statearr_34805_34829[(2)] = null);

(statearr_34805_34829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (9))){
var inst_34774 = (state_34794[(8)]);
var state_34794__$1 = state_34794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34794__$1,(11),out,inst_34774);
} else {
if((state_val_34795 === (5))){
var inst_34771 = (state_34794[(7)]);
var inst_34774 = (state_34794[(8)]);
var inst_34778 = cljs.core._EQ_.call(null,inst_34774,inst_34771);
var state_34794__$1 = state_34794;
if(inst_34778){
var statearr_34807_34830 = state_34794__$1;
(statearr_34807_34830[(1)] = (8));

} else {
var statearr_34808_34831 = state_34794__$1;
(statearr_34808_34831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (10))){
var inst_34786 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
var statearr_34809_34832 = state_34794__$1;
(statearr_34809_34832[(2)] = inst_34786);

(statearr_34809_34832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (8))){
var inst_34771 = (state_34794[(7)]);
var tmp34806 = inst_34771;
var inst_34771__$1 = tmp34806;
var state_34794__$1 = (function (){var statearr_34810 = state_34794;
(statearr_34810[(7)] = inst_34771__$1);

return statearr_34810;
})();
var statearr_34811_34833 = state_34794__$1;
(statearr_34811_34833[(2)] = null);

(statearr_34811_34833[(1)] = (2));


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
});})(c__32228__auto___34823,out))
;
return ((function (switch__32116__auto__,c__32228__auto___34823,out){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_34815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34815[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_34815[(1)] = (1));

return statearr_34815;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_34794){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_34794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e34816){if((e34816 instanceof Object)){
var ex__32120__auto__ = e34816;
var statearr_34817_34834 = state_34794;
(statearr_34817_34834[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34835 = state_34794;
state_34794 = G__34835;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_34794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_34794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___34823,out))
})();
var state__32230__auto__ = (function (){var statearr_34818 = f__32229__auto__.call(null);
(statearr_34818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___34823);

return statearr_34818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___34823,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34836 = [];
var len__28475__auto___34906 = arguments.length;
var i__28476__auto___34907 = (0);
while(true){
if((i__28476__auto___34907 < len__28475__auto___34906)){
args34836.push((arguments[i__28476__auto___34907]));

var G__34908 = (i__28476__auto___34907 + (1));
i__28476__auto___34907 = G__34908;
continue;
} else {
}
break;
}

var G__34838 = args34836.length;
switch (G__34838) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34836.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32228__auto___34910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___34910,out){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___34910,out){
return (function (state_34876){
var state_val_34877 = (state_34876[(1)]);
if((state_val_34877 === (7))){
var inst_34872 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34878_34911 = state_34876__$1;
(statearr_34878_34911[(2)] = inst_34872);

(statearr_34878_34911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (1))){
var inst_34839 = (new Array(n));
var inst_34840 = inst_34839;
var inst_34841 = (0);
var state_34876__$1 = (function (){var statearr_34879 = state_34876;
(statearr_34879[(7)] = inst_34840);

(statearr_34879[(8)] = inst_34841);

return statearr_34879;
})();
var statearr_34880_34912 = state_34876__$1;
(statearr_34880_34912[(2)] = null);

(statearr_34880_34912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (4))){
var inst_34844 = (state_34876[(9)]);
var inst_34844__$1 = (state_34876[(2)]);
var inst_34845 = (inst_34844__$1 == null);
var inst_34846 = cljs.core.not.call(null,inst_34845);
var state_34876__$1 = (function (){var statearr_34881 = state_34876;
(statearr_34881[(9)] = inst_34844__$1);

return statearr_34881;
})();
if(inst_34846){
var statearr_34882_34913 = state_34876__$1;
(statearr_34882_34913[(1)] = (5));

} else {
var statearr_34883_34914 = state_34876__$1;
(statearr_34883_34914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (15))){
var inst_34866 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34884_34915 = state_34876__$1;
(statearr_34884_34915[(2)] = inst_34866);

(statearr_34884_34915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (13))){
var state_34876__$1 = state_34876;
var statearr_34885_34916 = state_34876__$1;
(statearr_34885_34916[(2)] = null);

(statearr_34885_34916[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (6))){
var inst_34841 = (state_34876[(8)]);
var inst_34862 = (inst_34841 > (0));
var state_34876__$1 = state_34876;
if(cljs.core.truth_(inst_34862)){
var statearr_34886_34917 = state_34876__$1;
(statearr_34886_34917[(1)] = (12));

} else {
var statearr_34887_34918 = state_34876__$1;
(statearr_34887_34918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (3))){
var inst_34874 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34876__$1,inst_34874);
} else {
if((state_val_34877 === (12))){
var inst_34840 = (state_34876[(7)]);
var inst_34864 = cljs.core.vec.call(null,inst_34840);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34876__$1,(15),out,inst_34864);
} else {
if((state_val_34877 === (2))){
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34876__$1,(4),ch);
} else {
if((state_val_34877 === (11))){
var inst_34856 = (state_34876[(2)]);
var inst_34857 = (new Array(n));
var inst_34840 = inst_34857;
var inst_34841 = (0);
var state_34876__$1 = (function (){var statearr_34888 = state_34876;
(statearr_34888[(10)] = inst_34856);

(statearr_34888[(7)] = inst_34840);

(statearr_34888[(8)] = inst_34841);

return statearr_34888;
})();
var statearr_34889_34919 = state_34876__$1;
(statearr_34889_34919[(2)] = null);

(statearr_34889_34919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (9))){
var inst_34840 = (state_34876[(7)]);
var inst_34854 = cljs.core.vec.call(null,inst_34840);
var state_34876__$1 = state_34876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34876__$1,(11),out,inst_34854);
} else {
if((state_val_34877 === (5))){
var inst_34844 = (state_34876[(9)]);
var inst_34849 = (state_34876[(11)]);
var inst_34840 = (state_34876[(7)]);
var inst_34841 = (state_34876[(8)]);
var inst_34848 = (inst_34840[inst_34841] = inst_34844);
var inst_34849__$1 = (inst_34841 + (1));
var inst_34850 = (inst_34849__$1 < n);
var state_34876__$1 = (function (){var statearr_34890 = state_34876;
(statearr_34890[(12)] = inst_34848);

(statearr_34890[(11)] = inst_34849__$1);

return statearr_34890;
})();
if(cljs.core.truth_(inst_34850)){
var statearr_34891_34920 = state_34876__$1;
(statearr_34891_34920[(1)] = (8));

} else {
var statearr_34892_34921 = state_34876__$1;
(statearr_34892_34921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (14))){
var inst_34869 = (state_34876[(2)]);
var inst_34870 = cljs.core.async.close_BANG_.call(null,out);
var state_34876__$1 = (function (){var statearr_34894 = state_34876;
(statearr_34894[(13)] = inst_34869);

return statearr_34894;
})();
var statearr_34895_34922 = state_34876__$1;
(statearr_34895_34922[(2)] = inst_34870);

(statearr_34895_34922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (10))){
var inst_34860 = (state_34876[(2)]);
var state_34876__$1 = state_34876;
var statearr_34896_34923 = state_34876__$1;
(statearr_34896_34923[(2)] = inst_34860);

(statearr_34896_34923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34877 === (8))){
var inst_34849 = (state_34876[(11)]);
var inst_34840 = (state_34876[(7)]);
var tmp34893 = inst_34840;
var inst_34840__$1 = tmp34893;
var inst_34841 = inst_34849;
var state_34876__$1 = (function (){var statearr_34897 = state_34876;
(statearr_34897[(7)] = inst_34840__$1);

(statearr_34897[(8)] = inst_34841);

return statearr_34897;
})();
var statearr_34898_34924 = state_34876__$1;
(statearr_34898_34924[(2)] = null);

(statearr_34898_34924[(1)] = (2));


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
});})(c__32228__auto___34910,out))
;
return ((function (switch__32116__auto__,c__32228__auto___34910,out){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_34902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34902[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_34902[(1)] = (1));

return statearr_34902;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_34876){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_34876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e34903){if((e34903 instanceof Object)){
var ex__32120__auto__ = e34903;
var statearr_34904_34925 = state_34876;
(statearr_34904_34925[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34926 = state_34876;
state_34876 = G__34926;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_34876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_34876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___34910,out))
})();
var state__32230__auto__ = (function (){var statearr_34905 = f__32229__auto__.call(null);
(statearr_34905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___34910);

return statearr_34905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___34910,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34927 = [];
var len__28475__auto___35001 = arguments.length;
var i__28476__auto___35002 = (0);
while(true){
if((i__28476__auto___35002 < len__28475__auto___35001)){
args34927.push((arguments[i__28476__auto___35002]));

var G__35003 = (i__28476__auto___35002 + (1));
i__28476__auto___35002 = G__35003;
continue;
} else {
}
break;
}

var G__34929 = args34927.length;
switch (G__34929) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34927.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32228__auto___35005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32228__auto___35005,out){
return (function (){
var f__32229__auto__ = (function (){var switch__32116__auto__ = ((function (c__32228__auto___35005,out){
return (function (state_34971){
var state_val_34972 = (state_34971[(1)]);
if((state_val_34972 === (7))){
var inst_34967 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34973_35006 = state_34971__$1;
(statearr_34973_35006[(2)] = inst_34967);

(statearr_34973_35006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (1))){
var inst_34930 = [];
var inst_34931 = inst_34930;
var inst_34932 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34971__$1 = (function (){var statearr_34974 = state_34971;
(statearr_34974[(7)] = inst_34931);

(statearr_34974[(8)] = inst_34932);

return statearr_34974;
})();
var statearr_34975_35007 = state_34971__$1;
(statearr_34975_35007[(2)] = null);

(statearr_34975_35007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (4))){
var inst_34935 = (state_34971[(9)]);
var inst_34935__$1 = (state_34971[(2)]);
var inst_34936 = (inst_34935__$1 == null);
var inst_34937 = cljs.core.not.call(null,inst_34936);
var state_34971__$1 = (function (){var statearr_34976 = state_34971;
(statearr_34976[(9)] = inst_34935__$1);

return statearr_34976;
})();
if(inst_34937){
var statearr_34977_35008 = state_34971__$1;
(statearr_34977_35008[(1)] = (5));

} else {
var statearr_34978_35009 = state_34971__$1;
(statearr_34978_35009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (15))){
var inst_34961 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34979_35010 = state_34971__$1;
(statearr_34979_35010[(2)] = inst_34961);

(statearr_34979_35010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (13))){
var state_34971__$1 = state_34971;
var statearr_34980_35011 = state_34971__$1;
(statearr_34980_35011[(2)] = null);

(statearr_34980_35011[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (6))){
var inst_34931 = (state_34971[(7)]);
var inst_34956 = inst_34931.length;
var inst_34957 = (inst_34956 > (0));
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34957)){
var statearr_34981_35012 = state_34971__$1;
(statearr_34981_35012[(1)] = (12));

} else {
var statearr_34982_35013 = state_34971__$1;
(statearr_34982_35013[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (3))){
var inst_34969 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34971__$1,inst_34969);
} else {
if((state_val_34972 === (12))){
var inst_34931 = (state_34971[(7)]);
var inst_34959 = cljs.core.vec.call(null,inst_34931);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34971__$1,(15),out,inst_34959);
} else {
if((state_val_34972 === (2))){
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34971__$1,(4),ch);
} else {
if((state_val_34972 === (11))){
var inst_34935 = (state_34971[(9)]);
var inst_34939 = (state_34971[(10)]);
var inst_34949 = (state_34971[(2)]);
var inst_34950 = [];
var inst_34951 = inst_34950.push(inst_34935);
var inst_34931 = inst_34950;
var inst_34932 = inst_34939;
var state_34971__$1 = (function (){var statearr_34983 = state_34971;
(statearr_34983[(11)] = inst_34951);

(statearr_34983[(7)] = inst_34931);

(statearr_34983[(12)] = inst_34949);

(statearr_34983[(8)] = inst_34932);

return statearr_34983;
})();
var statearr_34984_35014 = state_34971__$1;
(statearr_34984_35014[(2)] = null);

(statearr_34984_35014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (9))){
var inst_34931 = (state_34971[(7)]);
var inst_34947 = cljs.core.vec.call(null,inst_34931);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34971__$1,(11),out,inst_34947);
} else {
if((state_val_34972 === (5))){
var inst_34935 = (state_34971[(9)]);
var inst_34932 = (state_34971[(8)]);
var inst_34939 = (state_34971[(10)]);
var inst_34939__$1 = f.call(null,inst_34935);
var inst_34940 = cljs.core._EQ_.call(null,inst_34939__$1,inst_34932);
var inst_34941 = cljs.core.keyword_identical_QMARK_.call(null,inst_34932,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34942 = (inst_34940) || (inst_34941);
var state_34971__$1 = (function (){var statearr_34985 = state_34971;
(statearr_34985[(10)] = inst_34939__$1);

return statearr_34985;
})();
if(cljs.core.truth_(inst_34942)){
var statearr_34986_35015 = state_34971__$1;
(statearr_34986_35015[(1)] = (8));

} else {
var statearr_34987_35016 = state_34971__$1;
(statearr_34987_35016[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (14))){
var inst_34964 = (state_34971[(2)]);
var inst_34965 = cljs.core.async.close_BANG_.call(null,out);
var state_34971__$1 = (function (){var statearr_34989 = state_34971;
(statearr_34989[(13)] = inst_34964);

return statearr_34989;
})();
var statearr_34990_35017 = state_34971__$1;
(statearr_34990_35017[(2)] = inst_34965);

(statearr_34990_35017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (10))){
var inst_34954 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34991_35018 = state_34971__$1;
(statearr_34991_35018[(2)] = inst_34954);

(statearr_34991_35018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (8))){
var inst_34931 = (state_34971[(7)]);
var inst_34935 = (state_34971[(9)]);
var inst_34939 = (state_34971[(10)]);
var inst_34944 = inst_34931.push(inst_34935);
var tmp34988 = inst_34931;
var inst_34931__$1 = tmp34988;
var inst_34932 = inst_34939;
var state_34971__$1 = (function (){var statearr_34992 = state_34971;
(statearr_34992[(14)] = inst_34944);

(statearr_34992[(7)] = inst_34931__$1);

(statearr_34992[(8)] = inst_34932);

return statearr_34992;
})();
var statearr_34993_35019 = state_34971__$1;
(statearr_34993_35019[(2)] = null);

(statearr_34993_35019[(1)] = (2));


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
});})(c__32228__auto___35005,out))
;
return ((function (switch__32116__auto__,c__32228__auto___35005,out){
return (function() {
var cljs$core$async$state_machine__32117__auto__ = null;
var cljs$core$async$state_machine__32117__auto____0 = (function (){
var statearr_34997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34997[(0)] = cljs$core$async$state_machine__32117__auto__);

(statearr_34997[(1)] = (1));

return statearr_34997;
});
var cljs$core$async$state_machine__32117__auto____1 = (function (state_34971){
while(true){
var ret_value__32118__auto__ = (function (){try{while(true){
var result__32119__auto__ = switch__32116__auto__.call(null,state_34971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32119__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32119__auto__;
}
break;
}
}catch (e34998){if((e34998 instanceof Object)){
var ex__32120__auto__ = e34998;
var statearr_34999_35020 = state_34971;
(statearr_34999_35020[(5)] = ex__32120__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35021 = state_34971;
state_34971 = G__35021;
continue;
} else {
return ret_value__32118__auto__;
}
break;
}
});
cljs$core$async$state_machine__32117__auto__ = function(state_34971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32117__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32117__auto____1.call(this,state_34971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32117__auto____0;
cljs$core$async$state_machine__32117__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32117__auto____1;
return cljs$core$async$state_machine__32117__auto__;
})()
;})(switch__32116__auto__,c__32228__auto___35005,out))
})();
var state__32230__auto__ = (function (){var statearr_35000 = f__32229__auto__.call(null);
(statearr_35000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32228__auto___35005);

return statearr_35000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32230__auto__);
});})(c__32228__auto___35005,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1479706417678