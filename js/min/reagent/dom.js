// Compiled by ClojureScript 1.9.229 {:elide-asserts true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6409__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12218 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_12218){
return (function (){
var _STAR_always_update_STAR_12219 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12219;
}});})(_STAR_always_update_STAR_12218))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12218;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12220 = [];
var len__7480__auto___12223 = arguments.length;
var i__7481__auto___12224 = (0);
while(true){
if((i__7481__auto___12224 < len__7480__auto___12223)){
args12220.push((arguments[i__7481__auto___12224]));

var G__12225 = (i__7481__auto___12224 + (1));
i__7481__auto___12224 = G__12225;
continue;
} else {
}
break;
}

var G__12222 = args12220.length;
switch (G__12222) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12220.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__12231_12235 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__12232_12236 = null;
var count__12233_12237 = (0);
var i__12234_12238 = (0);
while(true){
if((i__12234_12238 < count__12233_12237)){
var v_12239 = cljs.core._nth.call(null,chunk__12232_12236,i__12234_12238);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12239);

var G__12240 = seq__12231_12235;
var G__12241 = chunk__12232_12236;
var G__12242 = count__12233_12237;
var G__12243 = (i__12234_12238 + (1));
seq__12231_12235 = G__12240;
chunk__12232_12236 = G__12241;
count__12233_12237 = G__12242;
i__12234_12238 = G__12243;
continue;
} else {
var temp__4657__auto___12244 = cljs.core.seq.call(null,seq__12231_12235);
if(temp__4657__auto___12244){
var seq__12231_12245__$1 = temp__4657__auto___12244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12231_12245__$1)){
var c__7220__auto___12246 = cljs.core.chunk_first.call(null,seq__12231_12245__$1);
var G__12247 = cljs.core.chunk_rest.call(null,seq__12231_12245__$1);
var G__12248 = c__7220__auto___12246;
var G__12249 = cljs.core.count.call(null,c__7220__auto___12246);
var G__12250 = (0);
seq__12231_12235 = G__12247;
chunk__12232_12236 = G__12248;
count__12233_12237 = G__12249;
i__12234_12238 = G__12250;
continue;
} else {
var v_12251 = cljs.core.first.call(null,seq__12231_12245__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_12251);

var G__12252 = cljs.core.next.call(null,seq__12231_12245__$1);
var G__12253 = null;
var G__12254 = (0);
var G__12255 = (0);
seq__12231_12235 = G__12252;
chunk__12232_12236 = G__12253;
count__12233_12237 = G__12254;
i__12234_12238 = G__12255;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
