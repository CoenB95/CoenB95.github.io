{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.fu(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dt"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.dt(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={de:function de(){},
eJ:function(){return new P.aw("No element")},
eK:function(){return new P.aw("Too few elements")},
bp:function bp(){},
ac:function ac(){},
aS:function aS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.$ti=c},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bu:function bu(a){this.$ti=a},
aO:function aO(){},
al:function(a){var u,t=H.A(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
ff:function(a){return v.types[H.K(a)]},
fR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.x(a).$idf},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ba(a)
if(typeof u!=="string")throw H.h(H.cS(a))
return u},
au:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
av:function(a){return H.eO(a)+H.dq(H.a7(a),0,null)},
eO:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.x(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.y||!!l.$iay){r=C.h(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.k.aT(t,0)===36){if(1>n)H.a3(P.dh(1,m))
if(n>n)H.a3(P.dh(n,m))
t=t.substring(1,n)}return H.al(t)},
cZ:function(a){throw H.h(H.cS(a))},
z:function(a,b){if(a==null)J.b9(a)
throw H.h(H.e6(a,b))},
e6:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a0(!0,b,s,null)
u=H.K(J.b9(a))
if(!(b<0)){if(typeof u!=="number")return H.cZ(u)
t=b>=u}else t=!0
if(t)return P.dN(b,a,s,null,u)
return P.dh(b,s)},
cS:function(a){return new P.a0(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.aY()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ek})
u.name=""}else u.toString=H.ek
return u},
ek:function(){return J.ba(this.dartException)},
a3:function(a){throw H.h(a)},
d6:function(a){throw H.h(P.a8(a))},
Y:function(a){var u,t,s,r,q,p
a=H.fs(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.m([],[P.F])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ce(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
cf:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
dU:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
dR:function(a,b){return new H.bQ(a,b==null?null:b.method)},
dg:function(a,b){var u=b==null,t=u?null:b.method
return new H.bL(a,t,u?null:b.receiver)},
aI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.d7(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.z.b0(t,16)&8191)===10)switch(s){case 438:return f.$1(H.dg(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.dR(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.em()
q=$.en()
p=$.eo()
o=$.ep()
n=$.es()
m=$.et()
l=$.er()
$.eq()
k=$.ev()
j=$.eu()
i=r.C(u)
if(i!=null)return f.$1(H.dg(H.A(u),i))
else{i=q.C(u)
if(i!=null){i.method="call"
return f.$1(H.dg(H.A(u),i))}else{i=p.C(u)
if(i==null){i=o.C(u)
if(i==null){i=n.C(u)
if(i==null){i=m.C(u)
if(i==null){i=l.C(u)
if(i==null){i=o.C(u)
if(i==null){i=k.C(u)
if(i==null){i=j.C(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.dR(H.A(u),i))}}return f.$1(new H.ci(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.b2()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a0(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.b2()
return a},
aH:function(a){var u
if(a==null)return new H.b6(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.b6(a)},
fe:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=a.length
for(u=H.l(b,0),t=H.l(b,1),s=0;s<i;){r=s+1
q=a[s]
s=r+1
p=a[r]
H.n(q,u)
H.n(p,t)
if(typeof q==="string"){o=b.b
if(o==null)o=b.b=b.a3()
n=b.am(o,q)
if(n==null)b.T(o,q,b.R(q,p))
else n.b=p}else if(typeof q==="number"&&(q&0x3ffffff)===q){m=b.c
if(m==null)m=b.c=b.a3()
n=b.am(m,q)
if(n==null)b.T(m,q,b.R(q,p))
else n.b=p}else{l=b.d
if(l==null)l=b.d=b.a3()
k=J.b8(q)&0x3ffffff
j=b.aW(l,k)
if(j==null)b.T(l,k,[b.R(q,p)])
else{r=b.b8(j,q)
if(r>=0)j[r].b=p
else j.push(b.R(q,p))}}}return b},
fk:function(a,b,c,d,e,f){H.e(a,"$ida")
switch(H.K(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.ct("Unsupported number of arguments for wrapped closure"))},
aG:function(a,b){var u
H.K(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.fk)
a.$identity=u
return u},
eF:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.c4().constructor.prototype):Object.create(new H.am(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.U
if(typeof t!=="number")return t.v()
$.U=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.dF(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.ff,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.dE:H.d9
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dF(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
eC:function(a,b,c,d){var u=H.d9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
dF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.eE(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.eC(t,!r,u,b)
if(t===0){r=$.U
if(typeof r!=="number")return r.v()
$.U=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.an
return new Function(r+H.d(q==null?$.an=H.bi("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.U
if(typeof r!=="number")return r.v()
$.U=r+1
o+=r
r="return function("+o+"){return this."
q=$.an
return new Function(r+H.d(q==null?$.an=H.bi("self"):q)+"."+H.d(u)+"("+o+");}")()},
eD:function(a,b,c,d){var u=H.d9,t=H.dE
switch(b?-1:a){case 0:throw H.h(H.eQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
eE:function(a,b){var u,t,s,r,q,p,o,n=$.an
if(n==null)n=$.an=H.bi("self")
u=$.dD
if(u==null)u=$.dD=H.bi("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.eD(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.U
if(typeof u!=="number")return u.v()
$.U=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.U
if(typeof u!=="number")return u.v()
$.U=u+1
return new Function(n+u+"}")()},
dt:function(a,b,c,d,e,f,g){return H.eF(a,b,H.K(c),d,!!e,!!f,g)},
d9:function(a){return a.a},
dE:function(a){return a.c},
bi:function(a){var u,t,s,r=new H.am("self","target","receiver","name"),q=J.dc(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
e5:function(a){if(a==null)H.f7("boolean expression must not be null")
return a},
A:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.R(a,"String"))},
du:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.R(a,"double"))},
fp:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.R(a,"num"))},
fb:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.R(a,"bool"))},
K:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.R(a,"int"))},
eg:function(a,b){throw H.h(H.R(a,H.al(H.A(b).substring(2))))},
fr:function(a,b){throw H.h(H.eB(a,H.al(H.A(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.x(a)[b])return a
H.eg(a,b)},
fj:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.x(a)[b]
else u=!0
if(u)return a
H.fr(a,b)},
d3:function(a){if(a==null)return a
if(!!J.x(a).$ii)return a
throw H.h(H.R(a,"List<dynamic>"))},
fl:function(a,b){var u
if(a==null)return a
u=J.x(a)
if(!!u.$ii)return a
if(u[b])return a
H.eg(a,b)},
e7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.K(u)]
else return a.$S()}return},
b7:function(a,b){var u
if(typeof a=="function")return!0
u=H.e7(J.x(a))
if(u==null)return!1
return H.dX(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.dm)return a
$.dm=!0
try{if(H.b7(a,b))return a
u=H.d5(b)
t=H.R(a,u)
throw H.h(t)}finally{$.dm=!1}},
cV:function(a,b){if(a!=null&&!H.ds(a,b))H.a3(H.R(a,H.d5(b)))
return a},
R:function(a,b){return new H.cg("TypeError: "+P.aN(a)+": type '"+H.e0(a)+"' is not a subtype of type '"+b+"'")},
eB:function(a,b){return new H.bj("CastError: "+P.aN(a)+": type '"+H.e0(a)+"' is not a subtype of type '"+b+"'")},
e0:function(a){var u,t=J.x(a)
if(!!t.$iao){u=H.e7(t)
if(u!=null)return H.d5(u)
return"Closure"}return H.av(a)},
f7:function(a){throw H.h(new H.cl(a))},
fu:function(a){throw H.h(new P.bm(H.A(a)))},
eQ:function(a){return new H.bT(a)},
eb:function(a){return v.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
a7:function(a){if(a==null)return
return a.$ti},
fQ:function(a,b,c){return H.ak(a["$a"+H.d(c)],H.a7(b))},
dw:function(a,b,c,d){var u
H.A(c)
H.K(d)
u=H.ak(a["$a"+H.d(c)],H.a7(b))
return u==null?null:u[d]},
cW:function(a,b,c){var u
H.A(b)
H.K(c)
u=H.ak(a["$a"+H.d(b)],H.a7(a))
return u==null?null:u[c]},
l:function(a,b){var u
H.K(b)
u=H.a7(a)
return u==null?null:u[b]},
d5:function(a){return H.a6(a,null)},
a6:function(a,b){var u,t
H.w(b,"$ii",[P.F],"$ai")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.al(a[0].name)+H.dq(a,1,b)
if(typeof a=="function")return H.al(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.K(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.z(b,t)
return H.d(b[t])}if('func' in a)return H.f0(a,b)
if('futureOr' in a)return"FutureOr<"+H.a6("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
f0:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.F]
H.w(a0,"$ii",b,"$ai")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.m([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.b.t(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.z(a0,n)
p=C.k.v(p,a0[n])
m=u[q]
if(m!=null&&m!==P.o)p+=" extends "+H.a6(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.a6(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.a6(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.a6(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.fd(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.A(b[h])
j=j+i+H.a6(e[d],a0)+(" "+H.d(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
dq:function(a,b,c){var u,t,s,r,q,p
H.w(c,"$ii",[P.F],"$ai")
if(a==null)return""
u=new P.ax("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.a6(p,c)}return"<"+u.h(0)+">"},
ak:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dr:function(a,b,c,d){var u,t
H.A(b)
H.d3(c)
H.A(d)
if(a==null)return!1
u=H.a7(a)
t=J.x(a)
if(t[b]==null)return!1
return H.e3(H.ak(t[d],u),null,c,null)},
w:function(a,b,c,d){H.A(b)
H.d3(c)
H.A(d)
if(a==null)return a
if(H.dr(a,b,c,d))return a
throw H.h(H.R(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.al(b.substring(2))+H.dq(c,0,null),v.mangledGlobalNames)))},
e3:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.P(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.P(a[t],b,c[t],d))return!1
return!0},
fO:function(a,b,c){return a.apply(b,H.ak(J.x(b)["$a"+H.d(c)],H.a7(b)))},
ed:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="o"||a.name==="q"||a===-1||a===-2||H.ed(u)}return!1},
ds:function(a,b){var u,t
if(a==null)return b==null||b.name==="o"||b.name==="q"||b===-1||b===-2||H.ed(b)
if(b==null||b===-1||b.name==="o"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ds(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b7(a,b)}u=J.x(a).constructor
t=H.a7(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.P(u,null,b,null)},
n:function(a,b){if(a!=null&&!H.ds(a,b))throw H.h(H.R(a,H.d5(b)))
return a},
P:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="o"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="o"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.P(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="q")return!0
if('func' in c)return H.dX(a,b,c,d)
if('func' in a)return c.name==="da"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.P("type" in a?a.type:l,b,s,d)
else if(H.P(a,b,s,d))return!0
else{if(!('$i'+"ar" in t.prototype))return!1
r=t.prototype["$a"+"ar"]
q=H.ak(r,u?a.slice(1):l)
return H.P(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.e3(H.ak(m,u),b,p,d)},
dX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.P(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.P(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.P(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.P(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.fo(h,b,g,d)},
fo:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.P(c[s],d,a[s],b))return!1}return!0},
fP:function(a,b,c){Object.defineProperty(a,H.A(b),{value:c,enumerable:false,writable:true,configurable:true})},
fm:function(a){var u,t,s,r,q=H.A($.ec.$1(a)),p=$.cU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.d2[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.A($.e2.$2(a,q))
if(q!=null){p=$.cU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.d2[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.d4(u)
$.cU[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.d2[q]=u
return u}if(s==="-"){r=H.d4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ef(a,u)
if(s==="*")throw H.h(P.dV(q))
if(v.leafTags[q]===true){r=H.d4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ef(a,u)},
ef:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.dy(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
d4:function(a){return J.dy(a,!1,null,!!a.$idf)},
fn:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.d4(u)
else return J.dy(u,c,null,null)},
fh:function(){if(!0===$.dx)return
$.dx=!0
H.fi()},
fi:function(){var u,t,s,r,q,p,o,n
$.cU=Object.create(null)
$.d2=Object.create(null)
H.fg()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.eh.$1(q)
if(p!=null){o=H.fn(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
fg:function(){var u,t,s,r,q,p,o=C.p()
o=H.ai(C.q,H.ai(C.r,H.ai(C.i,H.ai(C.i,H.ai(C.t,H.ai(C.u,H.ai(C.v(C.h),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ec=new H.d_(r)
$.e2=new H.d0(q)
$.eh=new H.d1(p)},
ai:function(a,b){return a(b)||b},
fs:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ce:function ce(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bQ:function bQ(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a){this.a=a},
d7:function d7(a){this.a=a},
b6:function b6(a){this.a=a
this.b=null},
ao:function ao(){},
c9:function c9(){},
c4:function c4(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a){this.a=a},
bj:function bj(a){this.a=a},
bT:function bT(a){this.a=a},
cl:function cl(a){this.a=a},
bK:function bK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bM:function bM(a,b){this.a=a
this.b=b
this.c=null},
d_:function d_(a){this.a=a},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
dl:function(a){return a},
aX:function aX(){},
aV:function aV(){},
aW:function aW(){},
aU:function aU(){},
aC:function aC(){},
aD:function aD(){},
fd:function(a){return J.eL(a?Object.keys(a):[],null)},
fq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
dy:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dv:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.dx==null){H.fh()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.dV("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.dz()]
if(r!=null)return r
r=H.fm(a)
if(r!=null)return r
if(typeof a=="function")return C.A
u=Object.getPrototypeOf(a)
if(u==null)return C.l
if(u===Object.prototype)return C.l
if(typeof s=="function"){Object.defineProperty(s,$.dz(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
eL:function(a,b){return J.dc(H.m(a,[b]))},
dc:function(a){H.d3(a)
a.fixed$length=Array
return a},
x:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aQ.prototype
return J.bI.prototype}if(typeof a=="string")return J.at.prototype
if(a==null)return J.bJ.prototype
if(typeof a=="boolean")return J.bH.prototype
if(a.constructor==Array)return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
return a}if(a instanceof P.o)return a
return J.dv(a)},
e8:function(a){if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(a.constructor==Array)return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
return a}if(a instanceof P.o)return a
return J.dv(a)},
e9:function(a){if(a==null)return a
if(a.constructor==Array)return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ab.prototype
return a}if(a instanceof P.o)return a
return J.dv(a)},
ea:function(a){if(typeof a=="number")return J.as.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.ay.prototype
return a},
ey:function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.ea(a).u(a,b)},
d8:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).F(a,b)},
ez:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ea(a).i(a,b)},
eA:function(a,b){return J.e9(a).I(a,b)},
b8:function(a){return J.x(a).gp(a)},
aJ:function(a){return J.e9(a).gG(a)},
b9:function(a){return J.e8(a).gl(a)},
ba:function(a){return J.x(a).h(a)},
E:function E(){},
bH:function bH(){},
bJ:function bJ(){},
aR:function aR(){},
bR:function bR(){},
ay:function ay(){},
ab:function ab(){},
a4:function a4(a){this.$ti=a},
dd:function dd(a){this.$ti=a},
bg:function bg(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
as:function as(){},
aQ:function aQ(){},
bI:function bI(){},
at:function at(){}},P={
eV:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.f8()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.aG(new P.cn(s),1)).observe(u,{childList:true})
return new P.cm(s,u,t)}else if(self.setImmediate!=null)return P.f9()
return P.fa()},
eW:function(a){self.scheduleImmediate(H.aG(new P.co(H.f(a,{func:1,ret:-1})),0))},
eX:function(a){self.setImmediate(H.aG(new P.cp(H.f(a,{func:1,ret:-1})),0))},
eY:function(a){H.f(a,{func:1,ret:-1})
P.f_(0,a)},
f_:function(a,b){var u=new P.cM()
u.aP(a,b)
return u},
eZ:function(a,b){var u,t,s
b.a=1
try{a.aC(new P.cv(b),new P.cw(b),null)}catch(s){u=H.aI(s)
t=H.aH(s)
P.ft(new P.cx(b,u,t))}},
dW:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iO")
if(u>=4){t=b.a5()
b.a=a.a
b.c=a.c
P.aA(b,t)}else{t=H.e(b.c,"$ia_")
b.a=2
b.c=a
a.ao(t)}},
aA:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iG")
g=g.b
r=s.a
q=s.b
g.toString
P.cP(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.aA(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.e(o,"$iG")
g=g.b
r=o.a
q=o.b
g.toString
P.cP(i,i,g,r,q)
return}l=$.r
if(l!=n)$.r=n
else l=i
g=b.c
if(g===8)new P.cB(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.cA(u,b,o).$0()}else if((g&2)!==0)new P.cz(h,u,b).$0()
if(l!=null)$.r=l
g=u.b
if(!!J.x(g).$iar){if(g.a>=4){k=H.e(q.c,"$ia_")
q.c=null
b=q.S(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.dW(g,q)
return}}j=b.b
k=H.e(j.c,"$ia_")
j.c=null
b=j.S(k)
g=u.a
r=u.b
if(!g){H.n(r,H.l(j,0))
j.a=4
j.c=r}else{H.e(r,"$iG")
j.a=8
j.c=r}h.a=j
g=j}},
f3:function(a,b){if(H.b7(a,{func:1,args:[P.o,P.I]}))return H.f(a,{func:1,ret:null,args:[P.o,P.I]})
if(H.b7(a,{func:1,args:[P.o]}))return H.f(a,{func:1,ret:null,args:[P.o]})
throw H.h(P.dC(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
f2:function(){var u,t
for(;u=$.ah,u!=null;){$.aF=null
t=u.b
$.ah=t
if(t==null)$.aE=null
u.a.$0()}},
f6:function(){$.dn=!0
try{P.f2()}finally{$.aF=null
$.dn=!1
if($.ah!=null)$.dA().$1(P.e4())}},
e_:function(a){var u=new P.b5(H.f(a,{func:1,ret:-1}))
if($.ah==null){$.ah=$.aE=u
if(!$.dn)$.dA().$1(P.e4())}else $.aE=$.aE.b=u},
f5:function(a){var u,t,s
H.f(a,{func:1,ret:-1})
u=$.ah
if(u==null){P.e_(a)
$.aF=$.aE
return}t=new P.b5(a)
s=$.aF
if(s==null){t.b=u
$.ah=$.aF=t}else{t.b=s.b
$.aF=s.b=t
if(t.b==null)$.aE=t}},
ft:function(a){var u,t=null,s={func:1,ret:-1}
H.f(a,s)
u=$.r
if(C.c===u){P.cR(t,t,C.c,a)
return}u.toString
P.cR(t,t,u,H.f(u.ar(a),s))},
cP:function(a,b,c,d,e){var u={}
u.a=d
P.f5(new P.cQ(u,e))},
dY:function(a,b,c,d,e){var u,t
H.f(d,{func:1,ret:e})
t=$.r
if(t===c)return d.$0()
$.r=c
u=t
try{t=d.$0()
return t}finally{$.r=u}},
dZ:function(a,b,c,d,e,f,g){var u,t
H.f(d,{func:1,ret:f,args:[g]})
H.n(e,g)
t=$.r
if(t===c)return d.$1(e)
$.r=c
u=t
try{t=d.$1(e)
return t}finally{$.r=u}},
f4:function(a,b,c,d,e,f,g,h,i){var u,t
H.f(d,{func:1,ret:g,args:[h,i]})
H.n(e,h)
H.n(f,i)
t=$.r
if(t===c)return d.$2(e,f)
$.r=c
u=t
try{t=d.$2(e,f)
return t}finally{$.r=u}},
cR:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.c!==c
if(u)d=!(!u||!1)?c.ar(d):c.b4(d,-1)
P.e_(d)},
cn:function cn(a){this.a=a},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
co:function co(a){this.a=a},
cp:function cp(a){this.a=a},
cM:function cM(){},
cN:function cN(a,b){this.a=a
this.b=b},
cq:function cq(){},
cL:function cL(a,b){this.a=a
this.$ti=b},
a_:function a_(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
O:function O(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cu:function cu(a,b){this.a=a
this.b=b},
cy:function cy(a,b){this.a=a
this.b=b},
cv:function cv(a){this.a=a},
cw:function cw(a){this.a=a},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a){this.a=a},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a){this.a=a
this.b=null},
c5:function c5(){},
c7:function c7(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=a
this.b=b},
c6:function c6(){},
G:function G(a,b){this.a=a
this.b=b},
cO:function cO(){},
cQ:function cQ(a,b){this.a=a
this.b=b},
cG:function cG(){},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function(a,b,c){H.d3(a)
return H.w(H.fe(a,new H.bK([b,c])),"$idO",[b,c],"$adO")},
eN:function(a){return new P.cE([a])},
dk:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
eI:function(a,b,c){var u,t
if(P.dp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.m([],[P.F])
C.b.t($.J,a)
try{P.f1(a,u)}finally{if(0>=$.J.length)return H.z($.J,-1)
$.J.pop()}t=P.dT(b,H.fl(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
db:function(a,b,c){var u,t
if(P.dp(a))return b+"..."+c
u=new P.ax(b)
C.b.t($.J,a)
try{t=u
t.a=P.dT(t.a,a,", ")}finally{if(0>=$.J.length)return H.z($.J,-1)
$.J.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
dp:function(a){var u,t
for(u=$.J.length,t=0;t<u;++t)if(a===$.J[t])return!0
return!1},
f1:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.w(b,"$ii",[P.F],"$ai")
u=a.gG(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.m())return
r=H.d(u.gn())
C.b.t(b,r)
t+=r.length+2;++s}if(!u.m()){if(s<=5)return
if(0>=b.length)return H.z(b,-1)
q=b.pop()
if(0>=b.length)return H.z(b,-1)
p=b.pop()}else{o=u.gn();++s
if(!u.m()){if(s<=4){C.b.t(b,H.d(o))
return}q=H.d(o)
if(0>=b.length)return H.z(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gn();++s
for(;u.m();o=n,n=m){m=u.gn();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.z(b,-1)
t-=b.pop().length+2;--s}C.b.t(b,"...")
return}}p=H.d(o)
q=H.d(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.z(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.b.t(b,l)
C.b.t(b,p)
C.b.t(b,q)},
dQ:function(a){var u,t={}
if(P.dp(a))return"{...}"
u=new P.ax("")
try{C.b.t($.J,a)
u.a+="{"
t.a=!0
a.D(0,new P.bO(t,u))
u.a+="}"}finally{if(0>=$.J.length)return H.z($.J,-1)
$.J.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
cE:function cE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
aB:function aB(a){this.a=a
this.c=this.b=null},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
a5:function a5(){},
bN:function bN(){},
bO:function bO(a,b){this.a=a
this.b=b},
bP:function bP(){},
cK:function cK(){},
eG:function(a){if(a instanceof H.ao)return a.h(0)
return"Instance of '"+H.av(a)+"'"},
dP:function(a,b,c){var u,t=[c],s=H.m([],t)
for(u=J.aJ(a);u.m();)C.b.t(s,H.n(u.gn(),c))
if(b)return s
return H.w(J.dc(s),"$ii",t,"$ai")},
dT:function(a,b,c){var u=J.aJ(b)
if(!u.m())return a
if(c.length===0){do a+=H.d(u.gn())
while(u.m())}else{a+=H.d(u.gn())
for(;u.m();)a=a+c+H.d(u.gn())}return a},
aN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ba(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eG(a)},
dB:function(a){return new P.a0(!1,null,null,a)},
dC:function(a,b,c){return new P.a0(!0,a,b,c)},
dh:function(a,b){return new P.b_(null,null,!0,a,b,"Value not in range")},
bS:function(a,b,c,d,e){return new P.b_(b,c,!0,a,d,"Invalid value")},
eP:function(a,b,c){if(a>c)throw H.h(P.bS(a,0,c,"start",null))
if(a>b||b>c)throw H.h(P.bS(b,a,c,"end",null))
return b},
dS:function(a,b){if(typeof a!=="number")return a.Y()
if(a<0)throw H.h(P.bS(a,0,null,b,null))},
dN:function(a,b,c,d,e){var u=H.K(e==null?J.b9(b):e)
return new P.bF(u,!0,a,c,"Index out of range")},
ag:function(a){return new P.cj(a)},
dV:function(a){return new P.ch(a)},
eT:function(a){return new P.aw(a)},
a8:function(a){return new P.bl(a)},
aj:function aj(){},
S:function S(){},
a9:function a9(){},
bh:function bh(){},
aY:function aY(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b_:function b_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bF:function bF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cj:function cj(a){this.a=a},
ch:function ch(a){this.a=a},
aw:function aw(a){this.a=a},
bl:function bl(a){this.a=a},
b2:function b2(){},
bm:function bm(a){this.a=a},
ct:function ct(a){this.a=a},
y:function y(){},
p:function p(){},
i:function i(){},
q:function q(){},
T:function T(){},
o:function o(){},
I:function I(){},
F:function F(){},
ax:function ax(a){this.a=a},
fc:function(a){var u={}
a.D(0,new P.cT(u))
return u},
cT:function cT(a){this.a=a},
cD:function cD(){},
D:function D(){},
aK:function aK(){},
aZ:function aZ(){},
af:function af(){},
b0:function b0(){},
b3:function b3(){},
b4:function b4(){}},W={
dj:function(a,b,c,d,e){var u=W.e1(new W.cs(c),W.a),t=u!=null
if(t&&!0){H.f(u,{func:1,args:[W.a]})
if(t)C.n.aR(a,b,u,!1)}return new W.cr(a,b,u,!1,[e])},
e1:function(a,b){var u
H.f(a,{func:1,ret:-1,args:[b]})
u=$.r
if(u===C.c)return a
return u.b5(a,b)},
ei:function(a){return document.querySelector(a)},
c:function c(){},
bb:function bb(){},
bc:function bc(){},
a1:function a1(){},
bo:function bo(){},
b:function b(){},
a:function a(){},
aq:function aq(){},
bx:function bx(){},
X:function X(){},
ae:function ae(){},
bU:function bU(){},
L:function L(){},
az:function az(){},
ck:function ck(a){this.a=a},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cr:function cr(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cs:function cs(a){this.a=a}},Q={bk:function bk(){this.a=null}},Z={bn:function bn(a){this.b=a
this.a=null}},A={C:function C(){},V:function V(a,b){var _=this
_.x=a
_.d=_.c=_.b=_.a=null
_.e=!0
_.f=null
_.r=b},by:function by(a){this.a=a},ap:function ap(){this.a=null},bq:function bq(){},bs:function bs(a,b){this.a=a
this.b=b},br:function br(a,b){this.a=a
this.b=b},
cX:function(a){var u,t=C.d.a6(H.w(a,"$ip",[P.o],"$ap"),0,new A.cY(),P.y)
if(typeof t!=="number")return H.cZ(t)
u=536870911&t+((67108863&t)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
cY:function cY(){}},R={c2:function c2(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.a=null},cc:function cc(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.a=null},
dM:function(a,b){var u,t=new R.aL(H.m([],[A.C]))
t.M()
u=new T.a2(new Float32Array(4))
u.ab(10,0,0)
t.B(new Y.b1(u))
u=new R.c2(b,b,b,T.dK(),T.dI(),T.dG(),T.dL(),T.dH(),T.dJ())
if(a!=null)u.z=u.y=u.x=u.r=u.f=u.e=a
t.B(u)
t.B(new Q.bk())
return t},
aL:function aL(a){var _=this
_.d=_.c=_.b=_.a=null
_.e=!0
_.f=null
_.r=a}},Y={b1:function b1(a){this.b=a
this.c=0
this.a=null},B:function B(){},bz:function bz(){},bA:function bA(){},bB:function bB(a,b){this.a=a
this.b=b},bC:function bC(a){this.a=a},
eR:function(a){var u,t,s,r,q=new T.k(new Float32Array(16))
q.q()
u=new T.k(new Float32Array(16))
u.q()
t=new T.k(new Float32Array(16))
t.q()
s=new T.k(new Float32Array(16))
s.q()
r=new T.k(new Float32Array(16))
r.q()
r=new Y.bW(new T.ad("uMVMatrix",q,null),new T.ad("uPMatrix",u,null),new T.H("aVertexPosition",3),new T.H("aVertexColor",4),t,s,r,a,H.m([],[T.H]),H.m([],[[T.M,,]]))
r.aN(a)
return r},
eS:function(a){var u,t,s,r,q=new T.k(new Float32Array(16))
q.q()
u=new T.k(new Float32Array(16))
u.q()
t=new T.k(new Float32Array(16))
t.q()
s=new T.k(new Float32Array(16))
s.q()
r=new T.k(new Float32Array(16))
r.q()
r=new Y.bZ(new T.ad("uMVMatrix",q,null),new T.ad("uPMatrix",u,null),new T.bG("uTextureSampler",0,null),new T.H("aVertexPosition",3),new T.H("aVertexTexCoord",2),t,s,r,a,H.m([],[T.H]),H.m([],[[T.M,,]]))
r.aO(a)
return r},
bW:function bW(a,b,c,d,e,f,g,h,i,j){var _=this
_.z=a
_.Q=b
_.ch=c
_.cx=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.y=_.x=_.r=null},
bX:function bX(a){this.a=a},
bY:function bY(a){this.a=a},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.z=a
_.Q=b
_.ch=c
_.cx=d
_.cy=e
_.a=f
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.y=_.x=_.r=null},
c_:function c_(a){this.a=a},
c0:function c0(a){this.a=a},
u:function u(){},
t:function t(a,b){this.a=a
this.b=b},
Z:function Z(a,b){this.a=a
this.b=b}},V={cd:function cd(){this.a=this.b=null}},D={
eH:function(a,b,c){var u=new D.aP(c,a,b,P.eN(P.y))
u.aM(a,b,c)
return u},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=-1},
bD:function bD(a){this.a=a},
bE:function bE(a){this.a=a},
bt:function bt(a,b,c){var _=this
_.dy=0
_.fr=a
_.x=b
_.d=_.c=_.b=_.a=null
_.e=!0
_.f=null
_.r=c}},K={ca:function ca(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=null}},T={aM:function aM(a){this.b=a},H:function H(a,b){this.a=a
this.b=null
this.c=b},M:function M(){},ad:function ad(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},bG:function bG(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},bd:function bd(a){this.a=null
this.b=a
this.c=null},be:function be(){},bf:function bf(){},cb:function cb(){this.a=null},bV:function bV(){},c1:function c1(){},
dG:function(){var u=new T.v(new Float32Array(4))
u.A(0,0,1,1)
return u},
dH:function(){var u=new T.v(new Float32Array(4))
u.A(0,1,1,1)
return u},
dI:function(){var u=new T.v(new Float32Array(4))
u.A(0,0.5019607843137255,0,1)
return u},
dJ:function(){var u=new T.v(new Float32Array(4))
u.A(1,0,1,1)
return u},
dK:function(){var u=new T.v(new Float32Array(4))
u.A(1,0,0,1)
return u},
dL:function(){var u=new T.v(new Float32Array(4))
u.A(1,1,0,1)
return u},
ej:function(a,b,c,d,e){var u=Math.tan(b*0.5),t=d-e,s=a.a
s[0]=0
s[1]=0
s[2]=0
s[3]=0
s[4]=0
s[5]=0
s[6]=0
s[7]=0
s[8]=0
s[9]=0
s[10]=0
s[11]=0
s[12]=0
s[13]=0
s[14]=0
s[15]=0
s[0]=1/(u*c)
s[5]=1/u
s[10]=(e+d)/t
s[11]=-1
s[14]=2*d*e/t},
k:function k(a){this.a=a},
a2:function a2(a){this.a=a},
N:function N(a){this.a=a},
j:function j(a){this.a=a},
v:function v(a){this.a=a}},L={c3:function c3(){}},F={
ee:function(){var u=$.ew(),t=$.ex(),s=[Y.B],r=[A.C],q=new A.V(H.m([],s),H.m([],r))
q.M()
q.B(new A.ap())
r=new A.V(H.m([],s),H.m([],r))
r.M()
r.B(new A.ap())
D.eH(u,t,new K.ca(q,r))}}
var w=[C,H,J,P,W,Q,Z,A,R,Y,V,D,K,T,L,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.de.prototype={}
J.E.prototype={
F:function(a,b){return a===b},
gp:function(a){return H.au(a)},
h:function(a){return"Instance of '"+H.av(a)+"'"}}
J.bH.prototype={
h:function(a){return String(a)},
gp:function(a){return a?519018:218159},
$iaj:1}
J.bJ.prototype={
F:function(a,b){return null==b},
h:function(a){return"null"},
gp:function(a){return 0}}
J.aR.prototype={
gp:function(a){return 0},
h:function(a){return String(a)}}
J.bR.prototype={}
J.ay.prototype={}
J.ab.prototype={
h:function(a){var u=a[$.el()]
if(u==null)return this.aL(a)
return"JavaScript function for "+H.d(J.ba(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ida:1}
J.a4.prototype={
t:function(a,b){H.n(b,H.l(a,0))
if(!!a.fixed$length)H.a3(P.ag("add"))
a.push(b)},
a8:function(a,b){var u
if(!!a.fixed$length)H.a3(P.ag("remove"))
for(u=0;u<a.length;++u)if(J.d8(a[u],b)){a.splice(u,1)
return!0}return!1},
H:function(a,b){var u
H.w(b,"$ip",[H.l(a,0)],"$ap")
if(!!a.fixed$length)H.a3(P.ag("addAll"))
for(u=J.aJ(b);u.m();)a.push(u.gn())},
D:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.l(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.a8(a))}},
a6:function(a,b,c,d){var u,t,s
H.n(b,d)
H.f(c,{func:1,ret:d,args:[d,H.l(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.h(P.a8(a))}return t},
I:function(a,b){if(b<0||b>=a.length)return H.z(a,b)
return a[b]},
ac:function(a,b,c,d){var u,t,s=H.l(a,0)
H.w(d,"$ip",[s],"$ap")
if(!!a.immutable$list)H.a3(P.ag("setRange"))
P.eP(b,c,a.length)
u=c-b
if(u===0)return
P.dS(0,"skipCount")
H.w(d,"$ii",[s],"$ai")
if(u>d.length)throw H.h(H.eK())
if(0<b)for(t=u-1;t>=0;--t){if(t>=d.length)return H.z(d,t)
a[b+t]=d[t]}else for(t=0;t<u;++t){if(t>=d.length)return H.z(d,t)
a[b+t]=d[t]}},
h:function(a){return P.db(a,"[","]")},
gG:function(a){return new J.bg(a,a.length,[H.l(a,0)])},
gp:function(a){return H.au(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.a3(P.ag("set length"))
if(b<0)throw H.h(P.bS(b,0,null,"newLength",null))
a.length=b},
$ip:1,
$ii:1}
J.dd.prototype={}
J.bg.prototype={
gn:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.d6(s))
u=t.c
if(u>=r){t.saj(null)
return!1}t.saj(s[u]);++t.c
return!0},
saj:function(a){this.d=H.n(a,H.l(this,0))},
$iaa:1}
J.as.prototype={
E:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ag(""+a+".toInt()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
i:function(a,b){if(typeof b!=="number")throw H.h(H.cS(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.h(H.cS(b))
return a/b},
b0:function(a,b){var u
if(a>0)u=this.b_(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
b_:function(a,b){return b>31?0:a>>>b},
$iS:1,
$iT:1}
J.aQ.prototype={$iy:1}
J.bI.prototype={}
J.at.prototype={
aT:function(a,b){if(b>=a.length)throw H.h(H.e6(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.h(P.dC(b,null,null))
return a+b},
h:function(a){return a},
gp:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$iF:1}
H.bp.prototype={}
H.ac.prototype={
gG:function(a){var u=this
return new H.aS(u,u.gl(u),[H.cW(u,"ac",0)])},
bb:function(a,b){var u,t,s,r=this,q=H.cW(r,"ac",0)
H.f(b,{func:1,ret:q,args:[q,q]})
u=r.gl(r)
if(u===0)throw H.h(H.eJ())
t=r.I(0,0)
for(s=1;s<u;++s){t=b.$2(t,r.I(0,s))
if(u!==r.gl(r))throw H.h(P.a8(r))}return t}}
H.aS.prototype={
gn:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=J.e8(s),q=r.gl(s)
if(t.b!==q)throw H.h(P.a8(s))
u=t.c
if(u>=q){t.sN(null)
return!1}t.sN(r.I(s,u));++t.c
return!0},
sN:function(a){this.d=H.n(a,H.l(this,0))},
$iaa:1}
H.aT.prototype={
gl:function(a){return J.b9(this.a)},
I:function(a,b){return this.b.$1(J.eA(this.a,b))},
$aac:function(a,b){return[b]},
$ap:function(a,b){return[b]}}
H.bv.prototype={
gG:function(a){return new H.bw(J.aJ(this.a),this.b,C.o,this.$ti)},
$ap:function(a,b){return[b]}}
H.bw.prototype={
gn:function(){return this.d},
m:function(){var u,t,s=this
if(s.c==null)return!1
for(u=s.a,t=s.b;!s.c.m();){s.sN(null)
if(u.m()){s.sak(null)
s.sak(J.aJ(t.$1(u.gn())))}else return!1}s.sN(s.c.gn())
return!0},
sak:function(a){this.c=H.w(a,"$iaa",[H.l(this,1)],"$aaa")},
sN:function(a){this.d=H.n(a,H.l(this,1))},
$iaa:1,
$aaa:function(a,b){return[b]}}
H.bu.prototype={
m:function(){return!1},
gn:function(){return},
$iaa:1}
H.aO.prototype={}
H.ce.prototype={
C:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.bQ.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.bL.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.ci.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.d7.prototype={
$1:function(a){if(!!J.x(a).$ia9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.b6.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iI:1}
H.ao.prototype={
h:function(a){return"Closure '"+H.av(this).trim()+"'"},
$ida:1,
gbh:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.c9.prototype={}
H.c4.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.al(u)+"'"}}
H.am.prototype={
F:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.am))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gp:function(a){var u,t=this.c
if(t==null)u=H.au(this.a)
else u=typeof t!=="object"?J.b8(t):H.au(t)
return(u^H.au(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.av(u)+"'")}}
H.cg.prototype={
h:function(a){return this.a}}
H.bj.prototype={
h:function(a){return this.a}}
H.bT.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.cl.prototype={
h:function(a){return"Assertion failed: "+P.aN(this.a)}}
H.bK.prototype={
gl:function(a){return this.a},
D:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.l(s,0),H.l(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.a8(s))
u=u.c}},
R:function(a,b){var u=this,t=new H.bM(H.n(a,H.l(u,0)),H.n(b,H.l(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
b8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.d8(a[t].a,b))return t
return-1},
h:function(a){return P.dQ(this)},
am:function(a,b){return a[b]},
aW:function(a,b){return a[b]},
T:function(a,b,c){a[b]=c},
aU:function(a,b){delete a[b]},
a3:function(){var u="<non-identifier-key>",t=Object.create(null)
this.T(t,u,t)
this.aU(t,u)
return t},
$idO:1}
H.bM.prototype={}
H.d_.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.d0.prototype={
$2:function(a,b){return this.a(a,b)},
$S:9}
H.d1.prototype={
$1:function(a){return this.a(H.A(a))},
$S:10}
H.aX.prototype={$ieU:1}
H.aV.prototype={
gl:function(a){return a.length},
$idf:1,
$adf:function(){}}
H.aW.prototype={
$aaO:function(){return[P.S]},
$aa5:function(){return[P.S]},
$ip:1,
$ap:function(){return[P.S]},
$ii:1,
$ai:function(){return[P.S]}}
H.aU.prototype={$iD:1}
H.aC.prototype={}
H.aD.prototype={}
P.cn.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.cm.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:11}
P.co.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cp.prototype={
$0:function(){this.a.$0()},
$S:0}
P.cM.prototype={
aP:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aG(new P.cN(this,b),0),a)
else throw H.h(P.ag("`setTimeout()` not found."))}}
P.cN.prototype={
$0:function(){this.b.$0()},
$S:1}
P.cq.prototype={}
P.cL.prototype={}
P.a_.prototype={
ba:function(a){if(this.c!==6)return!0
return this.b.b.a9(H.f(this.d,{func:1,ret:P.aj,args:[P.o]}),a.a,P.aj,P.o)},
b7:function(a){var u=this.e,t=P.o,s={futureOr:1,type:H.l(this,1)},r=this.b.b
if(H.b7(u,{func:1,args:[P.o,P.I]}))return H.cV(r.bc(u,a.a,a.b,null,t,P.I),s)
else return H.cV(r.a9(H.f(u,{func:1,args:[P.o]}),a.a,null,t),s)}}
P.O.prototype={
aC:function(a,b,c){var u,t,s,r=H.l(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.r
if(u!==C.c){u.toString
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.f3(b,u)}H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.O($.r,[c])
s=b==null?1:3
this.af(new P.a_(t,s,a,b,[r,c]))
return t},
aB:function(a,b){return this.aC(a,null,b)},
af:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ia_")
t.c=a}else{if(s===2){u=H.e(t.c,"$iO")
s=u.a
if(s<4){u.af(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.cR(null,null,s,H.f(new P.cu(t,a),{func:1,ret:-1}))}},
ao:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ia_")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iO")
u=q.a
if(u<4){q.ao(a)
return}p.a=u
p.c=q.c}o.a=p.S(a)
u=p.b
u.toString
P.cR(null,null,u,H.f(new P.cy(o,p),{func:1,ret:-1}))}},
a5:function(){var u=H.e(this.c,"$ia_")
this.c=null
return this.S(u)},
S:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
a0:function(a){var u,t,s=this,r=H.l(s,0)
H.cV(a,{futureOr:1,type:r})
u=s.$ti
if(H.dr(a,"$iar",u,"$aar"))if(H.dr(a,"$iO",u,null))P.dW(a,s)
else P.eZ(a,s)
else{t=s.a5()
H.n(a,r)
s.a=4
s.c=a
P.aA(s,t)}},
ai:function(a,b){var u,t=this
H.e(b,"$iI")
u=t.a5()
t.a=8
t.c=new P.G(a,b)
P.aA(t,u)},
$iar:1}
P.cu.prototype={
$0:function(){P.aA(this.a,this.b)},
$S:0}
P.cy.prototype={
$0:function(){P.aA(this.b,this.a.a)},
$S:0}
P.cv.prototype={
$1:function(a){var u=this.a
u.a=0
u.a0(a)},
$S:6}
P.cw.prototype={
$2:function(a,b){H.e(b,"$iI")
this.a.ai(a,b)},
$1:function(a){return this.$2(a,null)},
$S:12}
P.cx.prototype={
$0:function(){this.a.ai(this.b,this.c)},
$S:0}
P.cB.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.aA(H.f(s.d,{func:1}),null)}catch(r){u=H.aI(r)
t=H.aH(r)
if(o.d){s=H.e(o.a.a.c,"$iG").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iG")
else q.b=new P.G(u,t)
q.a=!0
return}if(!!J.x(n).$iar){if(n instanceof P.O&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iG")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.aB(new P.cC(p),null)
s.a=!1}},
$S:1}
P.cC.prototype={
$1:function(a){return this.a},
$S:13}
P.cA.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.l(s,0)
q=H.n(n.c,r)
p=H.l(s,1)
n.a.b=s.b.b.a9(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aI(o)
t=H.aH(o)
s=n.a
s.b=new P.G(u,t)
s.a=!0}},
$S:1}
P.cz.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iG")
r=m.c
if(H.e5(r.ba(u))&&r.e!=null){q=m.b
q.b=r.b7(u)
q.a=!1}}catch(p){t=H.aI(p)
s=H.aH(p)
r=H.e(m.a.a.c,"$iG")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.G(t,s)
n.a=!0}},
$S:1}
P.b5.prototype={}
P.c5.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.O($.r,[P.y])
r.a=0
u=H.l(s,0)
t=H.f(new P.c7(r,s),{func:1,ret:-1,args:[u]})
H.f(new P.c8(r,q),{func:1,ret:-1})
W.dj(s.a,s.b,t,!1,u)
return q}}
P.c7.prototype={
$1:function(a){H.n(a,H.l(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.q,args:[H.l(this.b,0)]}}}
P.c8.prototype={
$0:function(){this.b.a0(this.a.a)},
$S:0}
P.c6.prototype={}
P.G.prototype={
h:function(a){return H.d(this.a)},
$ia9:1}
P.cO.prototype={$ifK:1}
P.cQ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.aY():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.h(0)
throw u},
$S:0}
P.cG.prototype={
bd:function(a){var u,t,s,r=null
H.f(a,{func:1,ret:-1})
try{if(C.c===$.r){a.$0()
return}P.dY(r,r,this,a,-1)}catch(s){u=H.aI(s)
t=H.aH(s)
P.cP(r,r,this,u,H.e(t,"$iI"))}},
be:function(a,b,c){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.c===$.r){a.$1(b)
return}P.dZ(r,r,this,a,b,-1,c)}catch(s){u=H.aI(s)
t=H.aH(s)
P.cP(r,r,this,u,H.e(t,"$iI"))}},
b4:function(a,b){return new P.cI(this,H.f(a,{func:1,ret:b}),b)},
ar:function(a){return new P.cH(this,H.f(a,{func:1,ret:-1}))},
b5:function(a,b){return new P.cJ(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
aA:function(a,b){H.f(a,{func:1,ret:b})
if($.r===C.c)return a.$0()
return P.dY(null,null,this,a,b)},
a9:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.n(b,d)
if($.r===C.c)return a.$1(b)
return P.dZ(null,null,this,a,b,c,d)},
bc:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.n(b,e)
H.n(c,f)
if($.r===C.c)return a.$2(b,c)
return P.f4(null,null,this,a,b,c,d,e,f)}}
P.cI.prototype={
$0:function(){return this.a.aA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.cH.prototype={
$0:function(){return this.a.bd(this.b)},
$S:1}
P.cJ.prototype={
$1:function(a){var u=this.c
return this.a.be(this.b,H.n(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.cE.prototype={
gG:function(a){var u=this,t=new P.cF(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
t:function(a,b){var u,t,s=this
H.n(b,H.l(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ae(u==null?s.b=P.dk():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ae(t==null?s.c=P.dk():t,b)}else return s.aQ(b)},
aQ:function(a){var u,t,s,r=this
H.n(a,H.l(r,0))
u=r.d
if(u==null)u=r.d=P.dk()
t=J.b8(a)&1073741823
s=u[t]
if(s==null)u[t]=[r.a4(a)]
else{if(r.al(s,a)>=0)return!1
s.push(r.a4(a))}return!0},
a8:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.aY(this.c,b)
else return this.aX(b)},
aX:function(a){var u,t,s=this.d
if(s==null)return!1
u=s[J.b8(a)&1073741823]
t=this.al(u,a)
if(t<0)return!1
this.ap(u.splice(t,1)[0])
return!0},
ae:function(a,b){H.n(b,H.l(this,0))
if(H.e(a[b],"$iaB")!=null)return!1
a[b]=this.a4(b)
return!0},
aY:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$iaB")
if(u==null)return!1
this.ap(u)
delete a[b]
return!0},
an:function(){this.r=1073741823&this.r+1},
a4:function(a){var u,t=this,s=new P.aB(H.n(a,H.l(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.an()
return s},
ap:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.an()},
al:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.d8(a[t].a,b))return t
return-1}}
P.aB.prototype={}
P.cF.prototype={
gn:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.a8(t))
else{t=u.c
if(t==null){u.sah(null)
return!1}else{u.sah(H.n(t.a,H.l(u,0)))
u.c=u.c.b
return!0}}},
sah:function(a){this.d=H.n(a,H.l(this,0))},
$iaa:1}
P.a5.prototype={
gG:function(a){return new H.aS(a,a.length,[H.dw(this,a,"a5",0)])},
I:function(a,b){if(b<0||b>=a.length)return H.z(a,b)
return a[b]},
a6:function(a,b,c,d){var u,t,s
H.n(b,d)
H.f(c,{func:1,ret:d,args:[d,H.dw(this,a,"a5",0)]})
u=a.length
for(t=b,s=0;s<u;++s)t=c.$2(t,a[s])
return t},
v:function(a,b){var u,t=[H.dw(this,a,"a5",0)]
H.w(b,"$ii",t,"$ai")
u=H.m([],t)
t=a.length
C.b.sl(u,t+b.length)
C.b.ac(u,0,t,a)
C.b.ac(u,t,u.length,b)
return u},
h:function(a){return P.db(a,"[","]")}}
P.bN.prototype={}
P.bO.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:7}
P.bP.prototype={
gl:function(a){return this.a},
h:function(a){return P.dQ(this)},
$ifx:1}
P.cK.prototype={
h:function(a){return P.db(this,"{","}")},
$ip:1,
$ifz:1}
P.aj.prototype={}
P.S.prototype={}
P.a9.prototype={}
P.bh.prototype={
h:function(a){return"Assertion failed"}}
P.aY.prototype={
h:function(a){return"Throw of null."}}
P.a0.prototype={
ga2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
ga1:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.d(p)
t=q.ga2()+o+u
if(!q.a)return t
s=q.ga1()
r=P.aN(q.b)
return t+s+": "+r}}
P.b_.prototype={
ga2:function(){return"RangeError"},
ga1:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.bF.prototype={
ga2:function(){return"RangeError"},
ga1:function(){var u,t=H.K(this.b)
if(typeof t!=="number")return t.Y()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.cj.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ch.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aw.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bl.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aN(u)+"."}}
P.b2.prototype={
h:function(a){return"Stack Overflow"},
$ia9:1}
P.bm.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ct.prototype={
h:function(a){return"Exception: "+this.a}}
P.y.prototype={}
P.p.prototype={
gl:function(a){var u,t=this.gG(this)
for(u=0;t.m();)++u
return u},
I:function(a,b){var u,t,s
P.dS(b,"index")
for(u=this.gG(this),t=0;u.m();){s=u.gn()
if(b===t)return s;++t}throw H.h(P.dN(b,this,"index",null,t))},
h:function(a){return P.eI(this,"(",")")}}
P.i.prototype={$ip:1}
P.q.prototype={
gp:function(a){return P.o.prototype.gp.call(this,this)},
h:function(a){return"null"}}
P.T.prototype={}
P.o.prototype={constructor:P.o,$io:1,
F:function(a,b){return this===b},
gp:function(a){return H.au(this)},
h:function(a){return"Instance of '"+H.av(this)+"'"},
toString:function(){return this.h(this)}}
P.I.prototype={}
P.F.prototype={}
P.ax.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.bb.prototype={
h:function(a){return String(a)}}
W.bc.prototype={
h:function(a){return String(a)}}
W.a1.prototype={
aa:function(a,b,c){var u=a.getContext(b,P.fc(c))
return u},
$ia1:1}
W.bo.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.aq.prototype={
aR:function(a,b,c,d){return a.addEventListener(b,H.aG(H.f(c,{func:1,args:[W.a]}),1),!1)},
$iaq:1}
W.bx.prototype={
gl:function(a){return a.length}}
W.X.prototype={$iX:1}
W.ae.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.aK(a):u}}
W.bU.prototype={
gl:function(a){return a.length}}
W.L.prototype={}
W.az.prototype={
gb2:function(a){var u=P.T,t=new P.O($.r,[u]),s=H.f(new W.ck(new P.cL(t,[u])),{func:1,ret:-1,args:[P.T]})
this.aV(a)
this.aZ(a,W.e1(s,u))
return t},
aZ:function(a,b){return a.requestAnimationFrame(H.aG(H.f(b,{func:1,ret:-1,args:[P.T]}),1))},
aV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ck.prototype={
$1:function(a){var u=this.a
a=H.cV(H.fp(a),{futureOr:1,type:H.l(u,0)})
u=u.a
if(u.a!==0)H.a3(P.eT("Future already completed"))
u.a0(a)},
$S:14}
W.di.prototype={}
W.cr.prototype={}
W.cs.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ia"))},
$S:15}
P.cT.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.cD.prototype={
a7:function(){return Math.random()},
$ify:1}
P.D.prototype={$ip:1,
$ap:function(){return[P.S]},
$ii:1,
$ai:function(){return[P.S]},
$ieU:1}
P.aK.prototype={$iaK:1}
P.aZ.prototype={$iaZ:1}
P.af.prototype={
bf:function(a,b,c,d,e,f,g){var u
if(!!J.x(g).$ia1)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,g)
return}throw H.h(P.dB("Incorrect number or type of arguments"))},
bg:function(a,b,c){return a.uniform1i(b,c)},
$iaf:1}
P.b0.prototype={$ib0:1}
P.b3.prototype={$ib3:1}
P.b4.prototype={$ib4:1}
Q.bk.prototype={
O:function(a,b){var u,t=this.a,s=t.a,r=t.b
t=t.c
u=new T.k(new Float32Array(16))
u.a_(s,r)
u.Z(0,t)
a.a=H.e(b.L(0,u),"$ik")
a.aw(this.a.d,C.e)}}
Z.bn.prototype={
X:function(a){var u
this.aI(a)
u=this.b-=a
if(u<=0){u=this.a
C.b.a8(u.f.x,u)}}}
A.C.prototype={
W:function(){return H.m([],[Y.u])},
O:function(a,b){},
X:function(a){}}
R.c2.prototype={
W:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=[Y.t],g=H.m([],h),f=i.b/2,e=i.c/2,d=i.d/2,c=new T.j(new Float32Array(3))
c.j(f,e,d)
u=i.r
t=-f
s=new T.j(new Float32Array(3))
s.j(t,e,d)
r=i.r
q=-e
p=new T.j(new Float32Array(3))
p.j(t,q,d)
o=i.r
n=new T.j(new Float32Array(3))
n.j(f,e,d)
m=i.r
l=new T.j(new Float32Array(3))
l.j(t,q,d)
t=i.r
k=new T.j(new Float32Array(3))
k.j(f,q,d)
C.b.H(g,H.m([new Y.t(c,u),new Y.t(s,r),new Y.t(p,o),new Y.t(n,m),new Y.t(l,t),new Y.t(k,i.r)],h))
c=-f
u=new T.j(new Float32Array(3))
u.j(c,e,d)
t=i.f
s=-d
r=new T.j(new Float32Array(3))
r.j(c,e,s)
q=i.f
p=-e
o=new T.j(new Float32Array(3))
o.j(c,p,s)
n=i.f
m=new T.j(new Float32Array(3))
m.j(c,e,d)
l=i.f
k=new T.j(new Float32Array(3))
k.j(c,p,s)
s=i.f
j=new T.j(new Float32Array(3))
j.j(c,p,d)
C.b.H(g,H.m([new Y.t(u,t),new Y.t(r,q),new Y.t(o,n),new Y.t(m,l),new Y.t(k,s),new Y.t(j,i.f)],h))
c=-d
u=new T.j(new Float32Array(3))
u.j(f,e,c)
t=i.x
s=new T.j(new Float32Array(3))
s.j(f,e,d)
r=i.x
q=-e
p=new T.j(new Float32Array(3))
p.j(f,q,d)
o=i.x
n=new T.j(new Float32Array(3))
n.j(f,e,c)
e=i.x
m=new T.j(new Float32Array(3))
m.j(f,q,d)
d=i.x
l=new T.j(new Float32Array(3))
l.j(f,q,c)
C.b.H(g,H.m([new Y.t(u,t),new Y.t(s,r),new Y.t(p,o),new Y.t(n,e),new Y.t(m,d),new Y.t(l,i.x)],h))
return g}}
R.cc.prototype={
W:function(){var u,t,s,r,q,p,o,n,m,l,k=[Y.Z],j=H.m([],k),i=this.b/2,h=this.c/2,g=this.d/2,f=new T.j(new Float32Array(3))
f.j(i,h,g)
u=new T.N(new Float32Array(2))
u.K(1,1)
t=-i
s=new T.j(new Float32Array(3))
s.j(t,h,g)
r=new T.N(new Float32Array(2))
r.K(0,1)
q=-h
p=new T.j(new Float32Array(3))
p.j(t,q,g)
o=new T.N(new Float32Array(2))
o.K(0,0)
n=new T.j(new Float32Array(3))
n.j(i,h,g)
h=new T.N(new Float32Array(2))
h.K(1,1)
m=new T.j(new Float32Array(3))
m.j(t,q,g)
t=new T.N(new Float32Array(2))
t.K(0,0)
l=new T.j(new Float32Array(3))
l.j(i,q,g)
i=new T.N(new Float32Array(2))
i.K(1,0)
C.b.H(j,H.m([new Y.Z(f,u),new Y.Z(s,r),new Y.Z(p,o),new Y.Z(n,h),new Y.Z(m,t),new Y.Z(l,i)],k))
return j}}
Y.b1.prototype={
X:function(a){var u,t,s,r,q,p=this
p.c+=a
u=p.a
t=p.b
s=t.gb3()
t=Math.acos(t.a[3])
r=p.c
q=new T.a2(new Float32Array(4))
q.aF(s,2*t*r)
u.b=q}}
V.cd.prototype={
O:function(a,b){var u,t,s,r=this.b,q=$.W
switch(0){case 0:default:q.activeTexture(33984)
break}q.bindTexture(3553,r.a)
r=this.a
u=r.a
t=r.b
r=r.c
s=new T.k(new Float32Array(16))
s.a_(u,t)
s.Z(0,r)
a.a=H.e(b.L(0,s),"$ik")
a.aw(this.a.d,C.e)}}
D.aP.prototype={
aM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=3553,f=h.c
f.toString
u=P.eM(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.F,null)
t=(f&&C.j).aa(f,"webgl",u)
$.W=H.e(t==null?C.j.aa(f,"experimental-webgl",u):t,"$iaf")
$.Q=h.b.getContext("2d")
s=new Float32Array(4)
new T.v(s).A(0.5019607843137255,0,0.5019607843137255,1)
r=$.Q
q=C.a.E(s[0]*255)
p=C.a.E(s[1]*255)
s=C.a.E(s[2]*255)
r.toString
r.fillStyle="rgba("+q+", "+p+", "+s+", 1)"
s=$.Q
p=f.width
if(typeof p!=="number")return p.u()
q=f.height
if(typeof q!=="number")return q.u()
s.fillRect(0,0,p/2,q/2)
q=$.Q
p=f.width
if(typeof p!=="number")return p.u()
p/=2
s=f.height
if(typeof s!=="number")return s.u()
s/=2
q.fillRect(p,s,p,s)
s=new Float32Array(4)
new T.v(s).A(0,0,0,1)
r=$.Q
q=C.a.E(s[0]*255)
p=C.a.E(s[1]*255)
s=C.a.E(s[2]*255)
r.toString
r.fillStyle="rgba("+q+", "+p+", "+s+", 1)"
s=$.Q
p=f.width
if(typeof p!=="number")return p.u()
p/=2
q=f.height
if(typeof q!=="number")return q.u()
s.fillRect(p,0,p,q/2)
q=$.Q
p=f.height
if(typeof p!=="number")return p.u()
p/=2
s=f.width
if(typeof s!=="number")return s.u()
q.fillRect(0,p,s/2,p)
s=new Float32Array(4)
new T.v(s).A(1,1,1,1)
r=$.Q
q=C.a.E(s[0]*255)
p=C.a.E(s[1]*255)
s=C.a.E(s[2]*255)
r.toString
r.fillStyle="rgba("+q+", "+p+", "+s+", 1)"
$.Q.scale(10,10)
$.Q.fillText("Test text",10,10)
s=h.a
r=$.W
q=f.width
f=f.height
s.e=Y.eR(r)
s.f=Y.eS(r)
s.c=q
s.d=f
f=[A.C]
o=new R.aL(H.m([],f))
o.M()
r=new T.a2(new Float32Array(4))
r.ab(10,0,0)
o.B(new Y.b1(r))
r=T.dK()
q=T.dI()
p=T.dG()
n=T.dL()
m=T.dH()
l=T.dJ()
o.B(new R.cc(1,1,1,r,q,p,n,m,l))
r=new V.cd()
q=$.W
p=$.Q.canvas
k=q.createTexture()
q.bindTexture(g,k)
q.pixelStorei(37440,1)
C.m.bf(q,g,0,6408,6408,5121,p)
q.texParameteri(g,10240,9728)
q.texParameteri(g,10241,9728)
q.generateMipmap(g)
q.bindTexture(g,null)
q=new T.cb()
q.a=k
r.b=q
o.B(r)
r=new T.j(new Float32Array(3))
r.j(-1.5,0,-7)
o.a=r
s.b.U(o)
j=R.dM(null,1)
r=new T.j(new Float32Array(3))
r.j(1.5,0,-7)
j.a=r
s=s.a
s.U(j)
i=new D.bt(C.w,H.m([],[Y.B]),H.m([],f))
i.M()
i.B(new A.ap())
f=new T.j(new Float32Array(3))
f.j(0,0,-7)
i.a=f
s.U(i)
s=W.X
f={func:1,ret:-1,args:[s]}
W.dj(window,"keydown",H.f(new D.bD(h),f),!1,s)
W.dj(window,"keyup",H.f(new D.bE(h),f),!1,s)
h.ax(0)},
ax:function(a){var u,t,s,r,q,p,o,n,m=this
C.n.gb2(window).aB(m.gb6(),-1)
u=m.e
if(typeof u!=="number")return u.Y()
if(u<0)u=a
H.du(u)
m.e=u
t=H.du(J.ey(J.ez(a,u),1000))
m.e=H.du(a)
u=m.a
s=u.a
s.J(t)
r=u.b
r.J(t)
q=m.c
$.W.viewport(0,0,q.width,q.height)
$.W.clear(16640)
$.W.enable(2929)
$.W.disable(3042)
$.W.clearColor(0,0,0,1)
s.as()
r.as()
q=u.e
q.d.useProgram(q.r)
q=u.e
p=u.c
o=u.d
if(typeof p!=="number")return p.u()
if(typeof o!=="number")return H.cZ(o)
n=new T.k(new Float32Array(16))
T.ej(n,45,p/o,0.1,100)
q.c=n
q=u.e
p=new T.k(new Float32Array(16))
p.q()
q.b=p
p=u.e
q=new T.k(new Float32Array(16))
q.q()
p.a=q
s.av(u.e)
s=u.f
s.d.useProgram(s.r)
s=u.f
q=u.c
p=u.d
if(typeof q!=="number")return q.u()
if(typeof p!=="number")return H.cZ(p)
n=new T.k(new Float32Array(16))
T.ej(n,45,q/p,0.1,100)
s.c=n
s=u.f
q=new T.k(new Float32Array(16))
q.q()
s.b=q
q=u.f
s=new T.k(new Float32Array(16))
s.q()
q.a=s
r.av(u.f)}}
D.bD.prototype={
$1:function(a){this.a.d.t(0,H.e(a,"$iX").keyCode)},
$S:8}
D.bE.prototype={
$1:function(a){this.a.d.a8(0,H.e(a,"$iX").keyCode)},
$S:8}
R.aL.prototype={}
D.bt.prototype={
J:function(a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this
a5.aJ(a6)
u=a5.dy-=a6
if(u<0){u=a5.fr
t=new Float32Array(4)
s=u.a7()
r=Math.sqrt(1-s)
q=Math.sqrt(s)
p=6.283185307179586*u.a7()
o=6.283185307179586*u.a7()
n=Math.cos(p)
m=Math.sin(p)
l=Math.cos(o)
k=Math.sin(o)
t[0]=m*r
t[1]=n*r
t[2]=k*q
t[3]=l*q
u=new Float32Array(3)
j=new T.j(u)
j.j(3,0,0)
i=t[3]
h=t[2]
g=t[1]
f=t[0]
e=-h
d=-g
c=-f
t=u[0]
b=u[2]
a=u[1]
a0=i*t+c*0+d*b-e*a
a1=i*a+d*0+e*t-c*b
a2=i*b+e*0+c*a-d*t
a3=i*0-c*t-d*a-e*b
u[2]=a3*h+a2*i+a0*g-a1*f
u[1]=a3*g+a1*i+a2*f-a0*h
u[0]=a3*f+a0*i+a1*h-a2*g
u=new T.v(new Float32Array(4))
u.A(1,0.6470588235294118,0,1)
a4=R.dM(u,0.4)
a4.B(new Z.bn(2))
a4.a=j
a5.U(a4)
a5.dy=0.1}}}
Y.B.prototype={
saz:function(a){var u
if(a){this.e=!0
u=this.f
if(u!=null)u.e=!0}},
M:function(){this.a=new T.j(new Float32Array(3))
var u=new Float32Array(4)
u[3]=1
this.b=new T.a2(u)
u=new Float32Array(3)
u[2]=1
u[1]=1
u[0]=1
this.c=new T.j(u)},
B:function(a){a.a=this
C.b.t(this.r,a)},
at:function(a){var u=this,t=Y.u,s=H.m([],[t]),r=u.r,q=[P.i,Y.u],p=H.l(r,0)
C.b.H(s,new H.bv(new H.aT(r,H.f(new Y.bz(),{func:1,ret:q,args:[p]}),[p,q]),H.f(new Y.bA(),{func:1,ret:[P.p,t],args:[q]}),[q,t]))
t=u.d
if(t==null){t=$.W
t=u.d=new T.bd(t)}if(s.length!==0)t.aG(s)
u.saz(!1)
return s},
as:function(){return this.at(!1)},
av:function(a){var u=new T.k(new Float32Array(16))
u.q()
C.b.D(this.r,new Y.bB(a,u))},
J:function(a){C.b.D(this.r,new Y.bC(a))}}
Y.bz.prototype={
$1:function(a){return H.e(a,"$iC").W()},
$S:17}
Y.bA.prototype={
$1:function(a){return H.w(a,"$ii",[Y.u],"$ai")},
$S:18}
Y.bB.prototype={
$1:function(a){return H.e(a,"$iC").O(this.a,this.b)},
$S:3}
Y.bC.prototype={
$1:function(a){return H.e(a,"$iC").X(this.a)},
$S:3}
A.V.prototype={
U:function(a){a.f=this
C.b.t(this.x,a)
this.saz(!0)},
J:function(a){this.aH(a)
C.b.D(P.dP(this.x,!0,Y.B),new A.by(a))}}
A.by.prototype={
$1:function(a){return H.e(a,"$iB").J(this.a)},
$S:19}
A.ap.prototype={
W:function(){var u=H.m([],[Y.u]),t=this.a
if(t instanceof A.V){C.b.D(t.x,new A.bq())
return u}return},
O:function(a,b){var u,t,s,r,q=this.a
if(q instanceof A.V){u=q.a
t=q.b
q=q.c
s=new T.k(new Float32Array(16))
s.a_(u,t)
s.Z(0,q)
r=H.e(b.L(0,s),"$ik")
C.b.D(H.fj(this.a,"$iV").x,new A.bs(a,r))}}}
A.bq.prototype={
$1:function(a){return H.e(a,"$iB").at(!0)},
$S:20}
A.bs.prototype={
$1:function(a){var u=A.C,t=[u]
u=H.w(P.dP(H.e(a,"$iB").r,!1,u),"$ii",t,"$ai")
u.fixed$length=Array
u.immutable$list=Array
C.b.D(H.w(u,"$ii",t,"$ai"),new A.br(this.a,this.b))},
$S:21}
A.br.prototype={
$1:function(a){return H.e(a,"$iC").O(this.a,this.b)},
$S:3}
K.ca.prototype={}
Y.bW.prototype={
aN:function(a){var u,t=this,s=t.z
s.sV(new Y.bX(t))
u=t.Q
u.sV(new Y.bY(t))
t.ay("          attribute vec3 aVertexPosition;\n          attribute vec4 aVertexColor;\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          varying vec4 color;\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              color = aVertexColor;\n          }\n        ","          precision mediump float;\n          varying vec4 color;\n          void main(void) {\n              gl_FragColor = color;\n          }\n        ",H.m([t.ch,t.cx],[T.H]),H.m([s,u],[[T.M,,]]))}}
Y.bX.prototype={
$0:function(){var u=this.a
return H.e(u.b.L(0,u.a),"$ik")},
$S:2}
Y.bY.prototype={
$0:function(){return this.a.c},
$S:2}
Y.bZ.prototype={
aO:function(a){var u,t=this,s=t.z
s.sV(new Y.c_(t))
u=t.Q
u.sV(new Y.c0(t))
t.ay("          attribute vec3 aVertexPosition;\n          attribute vec2 aVertexTexCoord;\n          uniform mat4 uMVMatrix;\n          uniform mat4 uPMatrix;\n          varying vec2 vVertexTexCoord;\n          void main(void) {\n              gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n              vVertexTexCoord = aVertexTexCoord;\n          }\n        ","          precision mediump float;\n          uniform sampler2D uTextureSampler;\n          varying vec2 vVertexTexCoord;\n          void main(void) {\n              gl_FragColor = texture2D(uTextureSampler, vVertexTexCoord);\n          }\n        ",H.m([t.cx,t.cy],[T.H]),H.m([s,u,t.ch],[[T.M,,]]))}}
Y.c_.prototype={
$0:function(){var u=this.a
return H.e(u.b.L(0,u.a),"$ik")},
$S:2}
Y.c0.prototype={
$0:function(){return this.a.c},
$S:2}
T.aM.prototype={
h:function(a){return this.b}}
T.H.prototype={
gau:function(){switch(5126){case 5126:return 4}}}
T.M.prototype={
saD:function(a,b){this.c=H.n(b,H.cW(this,"M",0))},
sV:function(a){this.d=H.f(a,{func:1,ret:H.cW(this,"M",0)})}}
T.ad.prototype={
aq:function(a){var u=this,t=u.d
if(t!=null)u.saD(0,t.$0())
t=u.c
if(t!=null)a.uniformMatrix4fv(u.b,!1,t.a)},
$aM:function(){return[T.k]}}
T.bG.prototype={
aq:function(a){var u=this,t=u.d
if(t!=null)u.saD(0,t.$0())
t=u.c
if(t!=null)(a&&C.m).bg(a,u.b,t)},
$aM:function(){return[P.y]}}
T.bd.prototype={
gl:function(a){return this.c.length},
ag:function(){var u=this.a
if(u==null)return
this.b.bindBuffer(34962,u)},
aG:function(a){var u,t,s=this
H.w(a,"$ip",[Y.u],"$ap")
if(s.a==null)s.a=s.b.createBuffer()
s.ag()
u=P.D
t=H.l(a,0)
u=H.e(new H.aT(a,H.f(new T.be(),{func:1,ret:u,args:[t]}),[t,u]).bb(0,new T.bf()),"$iD")
s.c=u
s.b.bufferData(34962,u,35044)}}
T.be.prototype={
$1:function(a){return H.e(a,"$iu").ad()},
$S:22}
T.bf.prototype={
$2:function(a,b){H.e(a,"$iD")
return new Float32Array(H.dl((a&&C.d).v(a,H.e(b,"$iD"))))},
$S:23}
T.cb.prototype={}
T.bV.prototype={
ay:function(a,b,c,d){var u,t,s,r,q,p,o=this
H.w(c,"$ii",[T.H],"$ai")
H.w(d,"$ii",[[T.M,,]],"$ai")
C.b.H(o.e,c)
C.b.H(o.f,d)
u=o.d
t=u.createShader(35632)
o.x=t
u.shaderSource(t,b)
u.compileShader(o.x)
t=u.createShader(35633)
o.y=t
u.shaderSource(t,a)
u.compileShader(o.y)
t=u.createProgram()
o.r=t
u.attachShader(t,o.y)
u.attachShader(o.r,o.x)
u.linkProgram(o.r)
if(!H.e5(H.fb(u.getProgramParameter(o.r,35714))))H.fq("Could not initialise shaders")
for(s=0;s<2;++s){r=c[s]
t=r.a
q=u.getAttribLocation(o.r,t)
if(typeof q!=="number")return q.Y()
if(q<0)throw H.h(P.dB("Could not find attribute '"+t+"'"))
u.enableVertexAttribArray(q)
r.b=q}for(t=d.length,s=0;s<d.length;d.length===t||(0,H.d6)(d),++s){p=d[s]
p.b=u.getUniformLocation(o.r,p.a)}},
aw:function(a,b){if(a==null)return
a.ag()
this.aS()
this.b1()
switch(b){case C.e:a.b.drawArrays(4,0,a.c.length)
break
case C.x:a.b.drawArrays(5,0,a.c.length)
break
default:break}},
aS:function(){var u,t,s,r,q,p,o,n=this.e,m=C.b.a6(n,0,new T.c1(),P.y)
for(u=n.length,t=this.d,s=0,r=0;r<n.length;n.length===u||(0,H.d6)(n),++r){q=n[r]
p=q.b
o=q.c
t.vertexAttribPointer(p,o,5126,!1,m,s)
s+=o*q.gau()}},
b1:function(){var u,t,s,r
for(u=this.f,t=u.length,s=this.d,r=0;r<u.length;u.length===t||(0,H.d6)(u),++r)u[r].aq(s)}}
T.c1.prototype={
$2:function(a,b){var u,t
H.K(a)
H.e(b,"$iH")
u=b.c
t=b.gau()
if(typeof a!=="number")return a.v()
return a+u*t},
$S:24}
Y.u.prototype={}
Y.t.prototype={
ad:function(){return new Float32Array(H.dl(C.d.v(this.a.a,this.b.a)))}}
Y.Z.prototype={
ad:function(){return new Float32Array(H.dl(C.d.v(this.a.a,this.b.a)))}}
L.c3.prototype={}
A.cY.prototype={
$2:function(a,b){var u,t
H.K(a)
u=C.a.gp(b)
if(typeof a!=="number")return a.v()
t=536870911&a+u
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:25}
T.k.prototype={
w:function(a){var u=a.a,t=this.a
t[15]=u[15]
t[14]=u[14]
t[13]=u[13]
t[12]=u[12]
t[11]=u[11]
t[10]=u[10]
t[9]=u[9]
t[8]=u[8]
t[7]=u[7]
t[6]=u[6]
t[5]=u[5]
t[4]=u[4]
t[3]=u[3]
t[2]=u[2]
t[1]=u[1]
t[0]=u[0]},
a_:function(a,b){var u=b.a,t=u[0],s=u[1],r=u[2],q=u[3],p=t+t,o=s+s,n=r+r,m=t*p,l=t*o,k=t*n,j=s*o,i=s*n,h=r*n,g=q*p,f=q*o,e=q*n,d=a.a,c=this.a
c[0]=1-(j+h)
c[1]=l+e
c[2]=k-f
c[3]=0
c[4]=l-e
c[5]=1-(m+h)
c[6]=i+g
c[7]=0
c[8]=k+f
c[9]=i-g
c[10]=1-(m+j)
c[11]=0
c[12]=d[0]
c[13]=d[1]
c[14]=d[2]
c[15]=1},
h:function(a){var u=this
return"[0] "+u.P(0).h(0)+"\n[1] "+u.P(1).h(0)+"\n[2] "+u.P(2).h(0)+"\n[3] "+u.P(3).h(0)+"\n"},
F:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.k){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]&&u[2]===s[2]&&u[3]===s[3]&&u[4]===s[4]&&u[5]===s[5]&&u[6]===s[6]&&u[7]===s[7]&&u[8]===s[8]&&u[9]===s[9]&&u[10]===s[10]&&u[11]===s[11]&&u[12]===s[12]&&u[13]===s[13]&&u[14]===s[14]&&u[15]===s[15]}else u=!1
return u},
gp:function(a){return A.cX(this.a)},
P:function(a){var u,t=new Float32Array(4),s=this.a
if(a>=16)return H.z(s,a)
t[0]=s[a]
u=4+a
if(u>=16)return H.z(s,u)
t[1]=s[u]
u=8+a
if(u>=16)return H.z(s,u)
t[2]=s[u]
u=12+a
if(u>=16)return H.z(s,u)
t[3]=s[u]
return new T.v(t)},
L:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=new Float32Array(16),b3=new T.k(b2)
b3.w(this)
u=b2[0]
t=b2[4]
s=b2[8]
r=b2[12]
q=b2[1]
p=b2[5]
o=b2[9]
n=b2[13]
m=b2[2]
l=b2[6]
k=b2[10]
j=b2[14]
i=b2[3]
h=b2[7]
g=b2[11]
f=b2[15]
e=b5.a
d=e[0]
c=e[4]
b=e[8]
a=e[12]
a0=e[1]
a1=e[5]
a2=e[9]
a3=e[13]
a4=e[2]
a5=e[6]
a6=e[10]
a7=e[14]
a8=e[3]
a9=e[7]
b0=e[11]
b1=e[15]
b2[0]=u*d+t*a0+s*a4+r*a8
b2[4]=u*c+t*a1+s*a5+r*a9
b2[8]=u*b+t*a2+s*a6+r*b0
b2[12]=u*a+t*a3+s*a7+r*b1
b2[1]=q*d+p*a0+o*a4+n*a8
b2[5]=q*c+p*a1+o*a5+n*a9
b2[9]=q*b+p*a2+o*a6+n*b0
b2[13]=q*a+p*a3+o*a7+n*b1
b2[2]=m*d+l*a0+k*a4+j*a8
b2[6]=m*c+l*a1+k*a5+j*a9
b2[10]=m*b+l*a2+k*a6+j*b0
b2[14]=m*a+l*a3+k*a7+j*b1
b2[3]=i*d+h*a0+g*a4+f*a8
b2[7]=i*c+h*a1+g*a5+f*a9
b2[11]=i*b+h*a2+g*a6+f*b0
b2[15]=i*a+h*a3+g*a7+f*b1
return b3},
i:function(a,b){var u,t,s
H.e(b,"$ik")
u=new Float32Array(16)
t=new T.k(u)
t.w(this)
s=b.a
u[0]=C.a.i(u[0],s.k(0,0))
u[1]=C.a.i(u[1],s.k(0,1))
u[2]=C.a.i(u[2],s.k(0,2))
u[3]=C.a.i(u[3],s.k(0,3))
u[4]=C.a.i(u[4],s.k(0,4))
u[5]=C.a.i(u[5],s.k(0,5))
u[6]=C.a.i(u[6],s.k(0,6))
u[7]=C.a.i(u[7],s.k(0,7))
u[8]=C.a.i(u[8],s.k(0,8))
u[9]=C.a.i(u[9],s.k(0,9))
u[10]=C.a.i(u[10],s.k(0,10))
u[11]=C.a.i(u[11],s.k(0,11))
u[12]=C.a.i(u[12],s.k(0,12))
u[13]=C.a.i(u[13],s.k(0,13))
u[14]=C.a.i(u[14],s.k(0,14))
u[15]=C.a.i(u[15],s.k(0,15))
return t},
aE:function(a,b,c,d){var u=b.a,t=u[0],s=u[1],r=u[2]
u=this.a
u[0]=u[0]*t
u[1]=u[1]*t
u[2]=u[2]*t
u[3]=u[3]*t
u[4]=u[4]*s
u[5]=u[5]*s
u[6]=u[6]*s
u[7]=u[7]*s
u[8]=u[8]*r
u[9]=u[9]*r
u[10]=u[10]*r
u[11]=u[11]*r
u[12]=u[12]
u[13]=u[13]
u[14]=u[14]
u[15]=u[15]},
Z:function(a,b){return this.aE(a,b,null,null)},
q:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=0
u[4]=0
u[5]=1
u[6]=0
u[7]=0
u[8]=0
u[9]=0
u[10]=1
u[11]=0
u[12]=0
u[13]=0
u[14]=0
u[15]=1}}
T.a2.prototype={
aF:function(a,b){var u,t,s,r,q=Math.sqrt(a.gb9())
if(q===0)return
u=b*0.5
t=Math.sin(u)/q
s=a.a
r=this.a
r[0]=s[0]*t
r[1]=s[1]*t
r[2]=s[2]*t
r[3]=Math.cos(u)},
ab:function(a,b,c){var u,t,s=a*0.5,r=b*0.5,q=c*0.5,p=Math.cos(s),o=Math.sin(s),n=Math.cos(r),m=Math.sin(r),l=Math.cos(q),k=Math.sin(q),j=this.a,i=l*m,h=k*n
j[0]=i*p+h*o
u=l*n
t=k*m
j[1]=u*o-t*p
j[2]=h*p-i*o
j[3]=u*p+t*o},
gb3:function(){var u,t,s,r=this.a,q=r[3],p=1-q*q
if(p<0.0005)return new T.j(new Float32Array(3))
u=1/Math.sqrt(p)
q=r[0]
t=r[1]
r=r[2]
s=new T.j(new Float32Array(3))
s.j(q*u,t*u,r*u)
return s},
gl:function(a){var u=this.a,t=u[0],s=u[1],r=u[2],q=u[3]
return Math.sqrt(t*t+s*s+r*r+q*q)},
i:function(a,b){var u,t,s
H.e(b,"$ia2")
u=new Float32Array(4)
t=this.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
s=b.a
u[0]=C.a.i(u[0],s.k(0,0))
u[1]=C.a.i(u[1],s.k(0,1))
u[2]=C.a.i(u[2],s.k(0,2))
u[3]=C.a.i(u[3],s.k(0,3))
return new T.a2(u)},
h:function(a){var u=this.a
return H.d(u[0])+", "+H.d(u[1])+", "+H.d(u[2])+" @ "+H.d(u[3])}}
T.N.prototype={
K:function(a,b){var u=this.a
u[0]=a
u[1]=b},
w:function(a){var u=a.a,t=this.a
t[1]=u[1]
t[0]=u[0]},
h:function(a){var u=this.a
return"["+H.d(u[0])+","+H.d(u[1])+"]"},
F:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.N){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]}else u=!1
return u},
gp:function(a){return A.cX(this.a)},
i:function(a,b){var u,t,s
H.e(b,"$iN")
u=new Float32Array(2)
t=new T.N(u)
t.w(this)
s=b.a
u[0]=C.a.i(u[0],s.k(0,0))
u[1]=C.a.i(u[1],s.k(0,1))
return t},
u:function(a,b){var u,t=new Float32Array(2),s=new T.N(t)
s.w(this)
u=1/b
t[1]=t[1]*u
t[0]=t[0]*u
return s},
gl:function(a){var u=this.a,t=u[0]
u=u[1]
return Math.sqrt(t*t+u*u)}}
T.j.prototype={
j:function(a,b,c){var u=this.a
u[0]=a
u[1]=b
u[2]=c},
w:function(a){var u=a.a,t=this.a
t[0]=u[0]
t[1]=u[1]
t[2]=u[2]},
h:function(a){var u=this.a
return"["+H.d(u[0])+","+H.d(u[1])+","+H.d(u[2])+"]"},
F:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.j){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]&&u[2]===s[2]}else u=!1
return u},
gp:function(a){return A.cX(this.a)},
i:function(a,b){var u,t,s
H.e(b,"$ij")
u=new Float32Array(3)
t=new T.j(u)
t.w(this)
s=b.a
u[0]=C.a.i(u[0],s.k(0,0))
u[1]=C.a.i(u[1],s.k(0,1))
u[2]=C.a.i(u[2],s.k(0,2))
return t},
u:function(a,b){var u=1/b,t=new Float32Array(3),s=new T.j(t)
s.w(this)
t[2]=t[2]*u
t[1]=t[1]*u
t[0]=t[0]*u
return s},
gl:function(a){var u=this.a,t=u[0],s=u[1]
u=u[2]
return Math.sqrt(t*t+s*s+u*u)},
gb9:function(){var u=this.a,t=u[0],s=u[1]
u=u[2]
return t*t+s*s+u*u}}
T.v.prototype={
A:function(a,b,c,d){var u=this.a
u[3]=d
u[2]=c
u[1]=b
u[0]=a},
w:function(a){var u=a.a,t=this.a
t[3]=u[3]
t[2]=u[2]
t[1]=u[1]
t[0]=u[0]},
h:function(a){var u=this.a
return H.d(u[0])+","+H.d(u[1])+","+H.d(u[2])+","+H.d(u[3])},
F:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.v){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]&&u[2]===s[2]&&u[3]===s[3]}else u=!1
return u},
gp:function(a){return A.cX(this.a)},
i:function(a,b){var u,t,s
H.e(b,"$iv")
u=new Float32Array(4)
t=new T.v(u)
t.w(this)
s=b.a
u[0]=C.a.i(u[0],s.k(0,0))
u[1]=C.a.i(u[1],s.k(0,1))
u[2]=C.a.i(u[2],s.k(0,2))
u[3]=C.a.i(u[3],s.k(0,3))
return t},
u:function(a,b){var u,t=new Float32Array(4),s=new T.v(t)
s.w(this)
u=1/b
t[0]=t[0]*u
t[1]=t[1]*u
t[2]=t[2]*u
t[3]=t[3]*u
return s},
gl:function(a){var u=this.a,t=u[0],s=u[1],r=u[2]
u=u[3]
return Math.sqrt(t*t+s*s+r*r+u*u)}};(function aliases(){var u=J.E.prototype
u.aK=u.h
u=J.aR.prototype
u.aL=u.h
u=A.C.prototype
u.aI=u.X
u=Y.B.prototype
u.aH=u.J
u=A.V.prototype
u.aJ=u.J})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers._instance_1u
u(P,"f8","eW",4)
u(P,"f9","eX",4)
u(P,"fa","eY",4)
t(P,"e4","f6",1)
s(D.aP.prototype,"gb6","ax",16)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.o,null)
s(P.o,[H.de,J.E,J.bg,P.p,H.aS,H.bw,H.bu,H.aO,H.ce,P.a9,H.ao,H.b6,P.bP,H.bM,P.cM,P.cq,P.a_,P.O,P.b5,P.c5,P.c6,P.G,P.cO,P.cK,P.aB,P.cF,P.a5,P.aj,P.T,P.b2,P.ct,P.i,P.q,P.I,P.F,P.ax,P.cD,P.D,A.C,D.aP,Y.B,L.c3,T.bV,T.aM,T.H,T.M,T.bd,T.cb,Y.u,T.k,T.a2,T.N,T.j,T.v])
s(J.E,[J.bH,J.bJ,J.aR,J.a4,J.as,J.at,H.aX,W.aq,W.bo,W.a,P.aK,P.aZ,P.af,P.b0,P.b3,P.b4])
s(J.aR,[J.bR,J.ay,J.ab])
t(J.dd,J.a4)
s(J.as,[J.aQ,J.bI])
s(P.p,[H.bp,H.bv])
t(H.ac,H.bp)
t(H.aT,H.ac)
s(P.a9,[H.bQ,H.bL,H.ci,H.cg,H.bj,H.bT,P.bh,P.aY,P.a0,P.cj,P.ch,P.aw,P.bl,P.bm])
s(H.ao,[H.d7,H.c9,H.d_,H.d0,H.d1,P.cn,P.cm,P.co,P.cp,P.cN,P.cu,P.cy,P.cv,P.cw,P.cx,P.cB,P.cC,P.cA,P.cz,P.c7,P.c8,P.cQ,P.cI,P.cH,P.cJ,P.bO,W.ck,W.cs,P.cT,D.bD,D.bE,Y.bz,Y.bA,Y.bB,Y.bC,A.by,A.bq,A.bs,A.br,Y.bX,Y.bY,Y.c_,Y.c0,T.be,T.bf,T.c1,A.cY])
s(H.c9,[H.c4,H.am])
t(H.cl,P.bh)
t(P.bN,P.bP)
t(H.bK,P.bN)
t(H.aV,H.aX)
t(H.aC,H.aV)
t(H.aD,H.aC)
t(H.aW,H.aD)
t(H.aU,H.aW)
t(P.cL,P.cq)
t(P.cG,P.cO)
t(P.cE,P.cK)
s(P.T,[P.S,P.y])
s(P.a0,[P.b_,P.bF])
s(W.aq,[W.ae,W.az])
t(W.b,W.ae)
t(W.c,W.b)
s(W.c,[W.bb,W.bc,W.a1,W.bx,W.bU])
t(W.L,W.a)
t(W.X,W.L)
t(W.di,P.c5)
t(W.cr,P.c6)
s(A.C,[Q.bk,Z.bn,R.c2,R.cc,Y.b1,V.cd,A.ap])
s(Y.B,[R.aL,A.V])
t(D.bt,A.V)
t(K.ca,L.c3)
s(T.bV,[Y.bW,Y.bZ])
s(T.M,[T.ad,T.bG])
s(Y.u,[Y.t,Y.Z])
u(H.aC,P.a5)
u(H.aD,H.aO)})();(function constants(){C.j=W.a1.prototype
C.y=J.E.prototype
C.b=J.a4.prototype
C.z=J.aQ.prototype
C.a=J.as.prototype
C.k=J.at.prototype
C.A=J.ab.prototype
C.d=H.aU.prototype
C.l=J.bR.prototype
C.m=P.af.prototype
C.f=J.ay.prototype
C.n=W.az.prototype
C.o=new H.bu([P.q])
C.h=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.p=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.v=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.r=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.u=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.t=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.i=function(hooks) { return hooks; }

C.w=new P.cD()
C.c=new P.cG()
C.e=new T.aM("DrawMode.triangles")
C.x=new T.aM("DrawMode.triangleStrip")})()
var v={mangledGlobalNames:{y:"int",S:"double",T:"num",F:"String",aj:"bool",q:"Null",i:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.q},{func:1,ret:-1},{func:1,ret:T.k},{func:1,ret:-1,args:[A.C]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.q,args:[,]},{func:1,ret:P.q,args:[,,]},{func:1,ret:P.q,args:[W.X]},{func:1,args:[,P.F]},{func:1,args:[P.F]},{func:1,ret:P.q,args:[{func:1,ret:-1}]},{func:1,ret:P.q,args:[,],opt:[P.I]},{func:1,ret:[P.O,,],args:[,]},{func:1,ret:P.q,args:[P.T]},{func:1,args:[W.a]},{func:1,ret:-1,args:[,]},{func:1,ret:[P.i,Y.u],args:[A.C]},{func:1,ret:[P.i,Y.u],args:[[P.i,Y.u]]},{func:1,ret:-1,args:[Y.B]},{func:1,ret:[P.p,Y.u],args:[Y.B]},{func:1,ret:P.q,args:[Y.B]},{func:1,ret:P.D,args:[Y.u]},{func:1,ret:P.D,args:[P.D,P.D]},{func:1,ret:P.y,args:[P.y,T.H]},{func:1,ret:P.y,args:[P.y,P.o]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.U=0
$.an=null
$.dD=null
$.dm=!1
$.ec=null
$.e2=null
$.eh=null
$.cU=null
$.d2=null
$.dx=null
$.ah=null
$.aE=null
$.aF=null
$.dn=!1
$.r=C.c
$.J=[]
$.Q=null
$.W=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"fv","el",function(){return H.eb("_$dart_dartClosure")})
u($,"fw","dz",function(){return H.eb("_$dart_js")})
u($,"fA","em",function(){return H.Y(H.cf({
toString:function(){return"$receiver$"}}))})
u($,"fB","en",function(){return H.Y(H.cf({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"fC","eo",function(){return H.Y(H.cf(null))})
u($,"fD","ep",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"fG","es",function(){return H.Y(H.cf(void 0))})
u($,"fH","et",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"fF","er",function(){return H.Y(H.dU(null))})
u($,"fE","eq",function(){return H.Y(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"fJ","ev",function(){return H.Y(H.dU(void 0))})
u($,"fI","eu",function(){return H.Y(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"fL","dA",function(){return P.eV()})
u($,"fM","ew",function(){return H.e(W.ei("#canvas2D"),"$ia1")})
u($,"fN","ex",function(){return H.e(W.ei("#canvas3D"),"$ia1")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.E,CanvasPattern:J.E,CanvasRenderingContext2D:J.E,DOMError:J.E,MediaError:J.E,NavigatorUserMediaError:J.E,OverconstrainedError:J.E,PositionError:J.E,WebGL2RenderingContext:J.E,SQLError:J.E,ArrayBufferView:H.aX,Float32Array:H.aU,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bb,HTMLAreaElement:W.bc,HTMLCanvasElement:W.a1,DOMException:W.bo,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,EventTarget:W.aq,HTMLFormElement:W.bx,KeyboardEvent:W.X,Document:W.ae,HTMLDocument:W.ae,Node:W.ae,HTMLSelectElement:W.bU,CompositionEvent:W.L,FocusEvent:W.L,MouseEvent:W.L,DragEvent:W.L,PointerEvent:W.L,TextEvent:W.L,TouchEvent:W.L,WheelEvent:W.L,UIEvent:W.L,Window:W.az,DOMWindow:W.az,WebGLBuffer:P.aK,WebGLProgram:P.aZ,WebGLRenderingContext:P.af,WebGLShader:P.b0,WebGLTexture:P.b3,WebGLUniformLocation:P.b4})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,KeyboardEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,Window:true,DOMWindow:true,WebGLBuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.aV.$nativeSuperclassTag="ArrayBufferView"
H.aC.$nativeSuperclassTag="ArrayBufferView"
H.aD.$nativeSuperclassTag="ArrayBufferView"
H.aW.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.ee,[])
else F.ee([])})})()
//# sourceMappingURL=main.dart.js.map
