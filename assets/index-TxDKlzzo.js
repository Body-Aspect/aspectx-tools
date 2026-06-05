(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();const Zu="modulepreload",Qu=function(s){return"/aspectx-tools/"+s},Fl={},ed=function(e,t,i){let n=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");n=l(t.map(c=>{if(c=Qu(c),c in Fl)return;Fl[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Zu,h||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),h)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},td="/aspectx-tools/assets/Rajdhani-SemiBold-nEoOYjXG.ttf";const tl="172",nd=0,Bl=1,id=2,Oh=1,rd=2,Nn=3,Gn=0,Kt=1,nn=2,ri=0,Ki=1,kl=2,zl=3,Gl=4,sd=5,Mi=100,od=101,ad=102,ld=103,cd=104,hd=200,ud=201,dd=202,fd=203,sa=204,oa=205,pd=206,md=207,gd=208,vd=209,_d=210,xd=211,yd=212,Sd=213,Md=214,aa=0,la=1,ca=2,Qi=3,ha=4,ua=5,da=6,fa=7,Fh=0,Td=1,Ed=2,si=0,bd=1,Ad=2,wd=3,Rd=4,Cd=5,Pd=6,Ud=7,Vl="attached",Ld="detached",Bh=300,er=301,tr=302,pa=303,ma=304,to=306,nr=1e3,ni=1001,Ys=1002,Wt=1003,kh=1004,Ir=1005,Ht=1006,ks=1007,Fn=1008,Vn=1009,zh=1010,Gh=1011,Wr=1012,nl=1013,bi=1014,fn=1015,Zr=1016,il=1017,rl=1018,ir=1020,Vh=35902,Hh=1021,Wh=1022,rn=1023,Xh=1024,qh=1025,$i=1026,rr=1027,sl=1028,ol=1029,jh=1030,al=1031,ll=1033,zs=33776,Gs=33777,Vs=33778,Hs=33779,ga=35840,va=35841,_a=35842,xa=35843,ya=36196,Sa=37492,Ma=37496,Ta=37808,Ea=37809,ba=37810,Aa=37811,wa=37812,Ra=37813,Ca=37814,Pa=37815,Ua=37816,La=37817,Ia=37818,Da=37819,Na=37820,Oa=37821,Ws=36492,Fa=36494,Ba=36495,Yh=36283,ka=36284,za=36285,Ga=36286,Xr=2300,qr=2301,go=2302,Hl=2400,Wl=2401,Xl=2402,Id=2500,Dd=0,Kh=1,Va=2,Nd=3200,$h=3201,Jh=0,Od=1,ti="",Ut="srgb",Xt="srgb-linear",Ks="linear",ht="srgb",Pi=7680,ql=519,Fd=512,Bd=513,kd=514,Zh=515,zd=516,Gd=517,Vd=518,Hd=519,Ha=35044,jl="300 es",Bn=2e3,$s=2001;class hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Or=Math.PI/180,sr=180/Math.PI;function sn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function cl(s,e){return(s%e+e)%e}function Wd(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Xd(s,e,t){return s!==e?(t-s)/(e-s):0}function Fr(s,e,t){return(1-t)*s+t*e}function qd(s,e,t,i){return Fr(s,e,1-Math.exp(-t*i))}function jd(s,e=1){return e-Math.abs(cl(s,e*2)-e)}function Yd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Kd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $d(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Jd(s,e){return s+Math.random()*(e-s)}function Zd(s){return s*(.5-Math.random())}function Qd(s){s!==void 0&&(Yl=s);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ef(s){return s*Or}function tf(s){return s*sr}function nf(s){return(s&s-1)===0&&s!==0}function rf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function sf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function of(s,e,t,i,n){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const af={DEG2RAD:Or,RAD2DEG:sr,generateUUID:sn,clamp:Je,euclideanModulo:cl,mapLinear:Wd,inverseLerp:Xd,lerp:Fr,damp:qd,pingpong:jd,smoothstep:Yd,smootherstep:Kd,randInt:$d,randFloat:Jd,randFloatSpread:Zd,seededRandom:Qd,degToRad:ef,radToDeg:tf,isPowerOfTwo:nf,ceilPowerOfTwo:rf,floorPowerOfTwo:sf,setQuaternionFromProperEuler:of,normalize:lt,denormalize:un};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,n,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],y=n[1],x=n[4],_=n[7],E=n[2],P=n[5],U=n[8];return r[0]=o*v+a*y+l*E,r[3]=o*m+a*x+l*P,r[6]=o*p+a*_+l*U,r[1]=c*v+h*y+u*E,r[4]=c*m+h*x+u*P,r[7]=c*p+h*_+u*U,r[2]=d*v+f*y+g*E,r[5]=d*m+f*x+g*P,r[8]=d*p+f*_+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(a*i-n*o)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vo.makeScale(e,t)),this}rotate(e){return this.premultiply(vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new Ke;function Qh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lf(){const s=jr("canvas");return s.style.display="block",s}const Kl={};function qi(s){s in Kl||(Kl[s]=!0,console.warn(s))}function cf(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function hf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $l=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){const s={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(n.r=zn(n.r),n.g=zn(n.g),n.b=zn(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(n.r=Ji(n.r),n.g=Ji(n.g),n.b=Ji(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ti?Ks:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Xt]:{primaries:e,whitePoint:i,transfer:Ks,toXYZ:$l,fromXYZ:Jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:$l,fromXYZ:Jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),s}const it=df();function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ui;class ff{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=jr("canvas")),Ui.width=e.width,Ui.height=e.height;const i=Ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zn(t[i]/255)*255):t[i]=zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pf=0;class eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(_o(n[o].image)):r.push(_o(n[o]))}else r=_o(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function _o(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ff.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mf=0;class St extends hr{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,i=ni,n=ni,r=Ht,o=Fn,a=rn,l=Vn,c=St.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=sn(),this.name="",this.source=new eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Bh;St.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,n=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(f+1)/2,E=(p+1)/2,P=(h+d)/4,U=(u+v)/4,I=(g+m)/4;return x>_&&x>E?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=P/i,r=U/i):_>E?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=P/n,r=I/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=U/r,n=I/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gf extends hr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new St(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new eu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends gf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tu extends St{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vf extends St{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),P=Math.atan2(E,p*y);m=Math.sin(m*P)/E,a=Math.sin(a*P)/E}const _=a*y;if(l=l*m+d*_,c=c*m+f*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-r*n),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new B,Zl=new Hn;class mn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),os.copy(i.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),as.subVectors(this.max,Tr),Li.subVectors(e.a,Tr),Ii.subVectors(e.b,Tr),Di.subVectors(e.c,Tr),Yn.subVectors(Ii,Li),Kn.subVectors(Di,Ii),hi.subVectors(Li,Di);let t=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-hi.z,hi.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,hi.z,0,-hi.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-hi.y,hi.x,0];return!yo(t,Li,Ii,Di,as)||(t=[1,0,0,0,1,0,0,0,1],!yo(t,Li,Ii,Di,as))?!1:(ls.crossVectors(Yn,Kn),t=[ls.x,ls.y,ls.z],yo(t,Li,Ii,Di,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Cn=[new B,new B,new B,new B,new B,new B,new B,new B],ln=new B,os=new mn,Li=new B,Ii=new B,Di=new B,Yn=new B,Kn=new B,hi=new B,Tr=new B,as=new B,ls=new B,ui=new B;function yo(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){ui.fromArray(s,r);const a=n.x*Math.abs(ui.x)+n.y*Math.abs(ui.y)+n.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=i.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const _f=new mn,Er=new B,So=new B;class gn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_f.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Er,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(So.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(So)),this.expandByPoint(Er.copy(e.center).sub(So))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new B,Mo=new B,cs=new B,$n=new B,To=new B,hs=new B,Eo=new B;class Qr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Mo.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Mo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cs),a=$n.dot(this.direction),l=-$n.dot(cs),c=$n.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Mo).addScaledVector(cs,d),f}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),n=Pn.dot(Pn)-i*i,r=e.radius*e.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,n,r){To.subVectors(t,e),hs.subVectors(i,e),Eo.crossVectors(To,hs);let o=this.direction.dot(Eo),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const l=a*this.direction.dot(hs.crossVectors($n,hs));if(l<0)return null;const c=a*this.direction.dot(To.cross($n));if(c<0||l+c>o)return null;const h=-a*$n.dot(Eo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,t,i,n,r,o,a,l,c,h,u,d,f,g,v,m){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,h,u,d,f,g,v,m)}set(e,t,i,n,r,o,a,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Ni.setFromMatrixColumn(e,0).length(),r=1/Ni.setFromMatrixColumn(e,1).length(),o=1/Ni.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,yf)}lookAt(e,t,i){const n=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Jn.crossVectors(i,Jt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Jn.crossVectors(i,Jt)),Jn.normalize(),us.crossVectors(Jt,Jn),n[0]=Jn.x,n[4]=us.x,n[8]=Jt.x,n[1]=Jn.y,n[5]=us.y,n[9]=Jt.y,n[2]=Jn.z,n[6]=us.z,n[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],x=i[7],_=i[11],E=i[15],P=n[0],U=n[4],I=n[8],T=n[12],M=n[1],D=n[5],R=n[9],L=n[13],A=n[2],O=n[6],F=n[10],k=n[14],N=n[3],Y=n[7],H=n[11],V=n[15];return r[0]=o*P+a*M+l*A+c*N,r[4]=o*U+a*D+l*O+c*Y,r[8]=o*I+a*R+l*F+c*H,r[12]=o*T+a*L+l*k+c*V,r[1]=h*P+u*M+d*A+f*N,r[5]=h*U+u*D+d*O+f*Y,r[9]=h*I+u*R+d*F+f*H,r[13]=h*T+u*L+d*k+f*V,r[2]=g*P+v*M+m*A+p*N,r[6]=g*U+v*D+m*O+p*Y,r[10]=g*I+v*R+m*F+p*H,r[14]=g*T+v*L+m*k+p*V,r[3]=y*P+x*M+_*A+E*N,r[7]=y*U+x*D+_*O+E*Y,r[11]=y*I+x*R+_*F+E*H,r[15]=y*T+x*L+_*k+E*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*f-i*l*f)+v*(+t*l*f-t*c*d+r*o*d-n*o*f+n*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+i*o*f+r*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*c-v*d*c+v*l*f-a*m*f-u*l*p+a*d*p,x=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,_=h*v*c-g*u*c+g*a*f-o*v*f-h*a*p+o*u*p,E=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,P=t*y+i*x+n*_+r*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return e[0]=y*U,e[1]=(v*d*r-u*m*r-v*n*f+i*m*f+u*n*p-i*d*p)*U,e[2]=(a*m*r-v*l*r+v*n*c-i*m*c-a*n*p+i*l*p)*U,e[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*f-i*l*f)*U,e[4]=x*U,e[5]=(h*m*r-g*d*r+g*n*f-t*m*f-h*n*p+t*d*p)*U,e[6]=(g*l*r-o*m*r-g*n*c+t*m*c+o*n*p-t*l*p)*U,e[7]=(o*d*r-h*l*r+h*n*c-t*d*c-o*n*f+t*l*f)*U,e[8]=_*U,e[9]=(g*u*r-h*v*r-g*i*f+t*v*f+h*i*p-t*u*p)*U,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*p+t*a*p)*U,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*f-t*a*f)*U,e[12]=E*U,e[13]=(h*v*n-g*u*n+g*i*d-t*v*d-h*i*m+t*u*m)*U,e[14]=(g*a*n-o*v*n-g*i*l+t*v*l+o*i*m-t*a*m)*U,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*U,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,y=l*c,x=l*h,_=l*u,E=i.x,P=i.y,U=i.z;return n[0]=(1-(v+p))*E,n[1]=(f+_)*E,n[2]=(g-x)*E,n[3]=0,n[4]=(f-_)*P,n[5]=(1-(d+p))*P,n[6]=(m+y)*P,n[7]=0,n[8]=(g+x)*U,n[9]=(m-y)*U,n[10]=(1-(d+v))*U,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=Ni.set(n[0],n[1],n[2]).length();const o=Ni.set(n[4],n[5],n[6]).length(),a=Ni.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],cn.copy(this);const c=1/r,h=1/o,u=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,n,r,o,a=Bn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let f,g;if(a===Bn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$s)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=Bn){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(o-r),d=(t+e)*c,f=(i+n)*h;let g,v;if(a===Bn)g=(o+r)*u,v=-2*u;else if(a===$s)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ni=new B,cn=new Ye,xf=new B(0,0,0),yf=new B(1,1,1),Jn=new B,us=new B,Jt=new B,Ql=new Ye,ec=new Hn;class bn{constructor(e=0,t=0,i=0,n=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ql,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sf=0;const tc=new B,Oi=new Hn,Un=new Ye,ds=new B,br=new B,Mf=new B,Tf=new Hn,nc=new B(1,0,0),ic=new B(0,1,0),rc=new B(0,0,1),sc={type:"added"},Ef={type:"removed"},Fi={type:"childadded",child:null},bo={type:"childremoved",child:null};class dt extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new B,t=new bn,i=new Hn,n=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Ke}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(rc,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(rc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ds.copy(e):ds.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(br,ds,this.up):Un.lookAt(ds,br,this.up),this.quaternion.setFromRotationMatrix(Un),n&&(Un.extractRotation(n.matrixWorld),Oi.setFromRotationMatrix(Un),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef),bo.child=e,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}dt.DEFAULT_UP=new B(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new B,Ln=new B,Ao=new B,In=new B,Bi=new B,ki=new B,oc=new B,wo=new B,Ro=new B,Co=new B,Po=new at,Uo=new at,Lo=new at;class dn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),hn.subVectors(e,t),n.cross(hn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){hn.subVectors(n,t),Ln.subVectors(i,t),Ao.subVectors(e,t);const o=hn.dot(hn),a=hn.dot(Ln),l=hn.dot(Ao),c=Ln.dot(Ln),h=Ln.dot(Ao),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(o,In.y),l.addScaledVector(a,In.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return Po.setScalar(0),Uo.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,i),Lo.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Po,r.x),o.addScaledVector(Uo,r.y),o.addScaledVector(Lo,r.z),o}static isFrontFacing(e,t,i,n){return hn.subVectors(i,t),Ln.subVectors(e,t),hn.cross(Ln).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),hn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let o,a;Bi.subVectors(n,i),ki.subVectors(r,i),wo.subVectors(e,i);const l=Bi.dot(wo),c=ki.dot(wo);if(l<=0&&c<=0)return t.copy(i);Ro.subVectors(e,n);const h=Bi.dot(Ro),u=ki.dot(Ro);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Bi,o);Co.subVectors(e,r);const f=Bi.dot(Co),g=ki.dot(Co);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ki,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return oc.subVectors(r,n),a=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(oc,a);const p=1/(m+v+d);return o=v*p,a=d*p,t.copy(i).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Io(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=it.workingColorSpace){if(e=cl(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Io(o,r,e+1/3),this.g=Io(o,r,e),this.b=Io(o,r,e-1/3)}return it.toWorkingColorSpace(this,n),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=nu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return it.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Je(Ft.r*255,0,255))*65536+Math.round(Je(Ft.g*255,0,255))*256+Math.round(Je(Ft.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,n=Ft.g,r=Ft.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ut){it.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,n=Ft.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(fs);const i=Fr(Zn.h,fs.h,t),n=Fr(Zn.s,fs.s,t),r=Fr(Zn.l,fs.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ve;Ve.NAMES=nu;let bf=0;class En extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=sn(),this.name="",this.type="Material",this.blending=Ki,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=oa,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sa&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bt extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new B,ps=new Re;class kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ha,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}}class iu extends kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ru extends kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Af=0;const en=new Ye,Do=new dt,zi=new B,Zt=new mn,Ar=new mn,Rt=new B;class Tt extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qh(e)?ru:iu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Zt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Zt.min,Ar.min),Zt.expandByPoint(Rt),Rt.addVectors(Zt.max,Ar.max),Zt.expandByPoint(Rt)):(Zt.expandByPoint(Ar.min),Zt.expandByPoint(Ar.max))}Zt.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(e,c),Rt.add(zi)),n=Math.max(n,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new B,l[I]=new B;const c=new B,h=new B,u=new B,d=new Re,f=new Re,g=new Re,v=new B,m=new B;function p(I,T,M){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[I].add(v),a[T].add(v),a[M].add(v),l[I].add(m),l[T].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,T=y.length;I<T;++I){const M=y[I],D=M.start,R=M.count;for(let L=D,A=D+R;L<A;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new B,_=new B,E=new B,P=new B;function U(I){E.fromBufferAttribute(n,I),P.copy(E);const T=a[I];x.copy(T),x.sub(E.multiplyScalar(E.dot(T))).normalize(),_.crossVectors(P,T);const D=_.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,D)}for(let I=0,T=y.length;I<T;++I){const M=y[I],D=M.start,R=M.count;for(let L=D,A=D+R;L<A;L+=3)U(e.getX(L+0)),U(e.getX(L+1)),U(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ac=new Ye,di=new Qr,ms=new gn,lc=new B,gs=new B,vs=new B,_s=new B,No=new B,xs=new B,cc=new B,ys=new B;class mt extends dt{constructor(e=new Tt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(No.fromBufferAttribute(u,e),o?xs.addScaledVector(No,h):xs.addScaledVector(No.sub(t),h))}t.add(xs)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere),ms.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(ms.containsPoint(di.origin)===!1&&(di.intersectSphere(ms,lc)===null||di.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(ac.copy(r).invert(),di.copy(e.ray).applyMatrix4(ac),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=x;_<E;_+=3){const P=a.getX(_),U=a.getX(_+1),I=a.getX(_+2);n=Ss(this,p,e,i,c,h,u,P,U,I),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);n=Ss(this,o,e,i,c,h,u,y,x,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,E=x;_<E;_+=3){const P=_,U=_+1,I=_+2;n=Ss(this,p,e,i,c,h,u,P,U,I),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,x=m+1,_=m+2;n=Ss(this,o,e,i,c,h,u,y,x,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function wf(s,e,t,i,n,r,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===Gn,a),l===null)return null;ys.copy(a),ys.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ys);return c<t.near||c>t.far?null:{distance:c,point:ys.clone(),object:s}}function Ss(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,gs),s.getVertexPosition(l,vs),s.getVertexPosition(c,_s);const h=wf(s,e,t,i,gs,vs,_s,cc);if(h){const u=new B;dn.getBarycoord(cc,gs,vs,_s,u),n&&(h.uv=dn.getInterpolatedAttribute(n,a,l,c,u,new Re)),r&&(h.uv1=dn.getInterpolatedAttribute(r,a,l,c,u,new Re)),o&&(h.normal=dn.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};dn.getNormal(gs,vs,_s,d.normal),h.face=d,h.barycoord=u}return h}class es extends Tt{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function g(v,m,p,y,x,_,E,P,U,I,T){const M=_/U,D=E/I,R=_/2,L=E/2,A=P/2,O=U+1,F=I+1;let k=0,N=0;const Y=new B;for(let H=0;H<F;H++){const V=H*D-L;for(let j=0;j<O;j++){const me=j*M-R;Y[v]=me*y,Y[m]=V*x,Y[p]=A,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[p]=P>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(j/U),u.push(1-H/I),k+=1}}for(let H=0;H<I;H++)for(let V=0;V<U;V++){const j=d+V+O*H,me=d+V+O*(H+1),z=d+(V+1)+O*(H+1),W=d+(V+1)+O*H;l.push(j,me,W),l.push(me,z,W),N+=6}a.addGroup(f,N,T),f+=N,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Gt(s){const e={};for(let t=0;t<s.length;t++){const i=or(s[t]);for(const n in i)e[n]=i[n]}return e}function Rf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function su(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ou={clone:or,merge:Gt};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Rf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class au extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new B,hc=new Re,uc=new Re;class Vt extends au{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,hc,uc),t.subVectors(uc,hc)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Or*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class Uf extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Vt(Gi,Vi,e,t);n.layers=this.layers,this.add(n);const r=new Vt(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const o=new Vt(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const a=new Vt(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const l=new Vt(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Gi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lu extends St{constructor(e,t,i,n,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lf extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new lu(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new es(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:ri});r.uniforms.tEquirect.value=t;const o=new mt(n,r),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Ht),new Uf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}}class cu{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new cu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class If extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Df{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new B;class ul{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=un(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ul(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dc=new B,fc=new at,pc=new at,Nf=new B,mc=new Ye,Ms=new B,Oo=new gn,gc=new Ye,Fo=new Qr;class Of extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vl,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ms),this.boundingBox.expandByPoint(Ms)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ms),this.boundingSphere.expandByPoint(Ms)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(n),e.ray.intersectsSphere(Oo)!==!1&&(gc.copy(n).invert(),Fo.copy(e.ray).applyMatrix4(gc),!(this.boundingBox!==null&&Fo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ld?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;fc.fromBufferAttribute(n.attributes.skinIndex,e),pc.fromBufferAttribute(n.attributes.skinWeight,e),dc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=pc.getComponent(r);if(o!==0){const a=fc.getComponent(r);mc.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Nf.copy(dc).applyMatrix4(mc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class hu extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class uu extends St{constructor(e=null,t=1,i=1,n,r,o,a,l,c=Wt,h=Wt,u,d){super(null,o,a,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vc=new Ye,Ff=new Ye;class dl{constructor(e=[],t=[]){this.uuid=sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ff;vc.multiplyMatrices(a,t[r]),vc.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new dl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new uu(t,e,e,rn,fn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new hu),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const o=t[n];e.bones.push(o.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}class Js extends kt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hi=new Ye,_c=new Ye,Ts=[],xc=new mn,Bf=new Ye,wr=new mt,Rr=new gn;class kf extends mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Bf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hi),xc.copy(e.boundingBox).applyMatrix4(Hi),this.boundingBox.union(xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hi),Rr.copy(e.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(i),e.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Hi),_c.multiplyMatrices(i,Hi),wr.matrixWorld=_c,wr.raycast(e,Ts);for(let o=0,a=Ts.length;o<a;o++){const l=Ts[o];l.instanceId=r,l.object=this,t.push(l)}Ts.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new uu(new Float32Array(n*this.count),n,this.count,sl,fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Bo=new B,zf=new B,Gf=new Ke;class yi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Bo.subVectors(i,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gf.getNormalMatrix(e),n=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new gn,Es=new B;class fl{constructor(e=new yi,t=new yi,i=new yi,n=new yi,r=new yi,o=new yi){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn){const i=this.planes,n=e.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],v=n[10],m=n[11],p=n[12],y=n[13],x=n[14],_=n[15];if(i[0].setComponents(l-r,d-c,m-f,_-p).normalize(),i[1].setComponents(l+r,d+c,m+f,_+p).normalize(),i[2].setComponents(l+o,d+h,m+g,_+y).normalize(),i[3].setComponents(l-o,d-h,m-g,_-y).normalize(),i[4].setComponents(l-a,d-u,m-v,_-x).normalize(),t===Bn)i[5].setComponents(l+a,d+u,m+v,_+x).normalize();else if(t===$s)i[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Es.x=n.normal.x>0?e.max.x:e.min.x,Es.y=n.normal.y>0?e.max.y:e.min.y,Es.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pl extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zs=new B,Qs=new B,yc=new Ye,Cr=new Qr,bs=new gn,ko=new B,Sc=new B;class Yr extends dt{constructor(e=new Tt,t=new pl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Zs.fromBufferAttribute(t,n-1),Qs.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Zs.distanceTo(Qs);e.setAttribute("lineDistance",new _t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(n),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;yc.copy(n).invert(),Cr.copy(e.ray).applyMatrix4(yc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),y=h.getX(v+1),x=As(this,e,Cr,l,p,y);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=As(this,e,Cr,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=As(this,e,Cr,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=As(this,e,Cr,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function As(s,e,t,i,n,r){const o=s.geometry.attributes.position;if(Zs.fromBufferAttribute(o,n),Qs.fromBufferAttribute(o,r),t.distanceSqToSegment(Zs,Qs,ko,Sc)>i)return;ko.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ko);if(!(l<e.near||l>e.far))return{distance:l,point:Sc.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const Mc=new B,Tc=new B;class Vf extends Yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Mc.fromBufferAttribute(t,n),Tc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Mc.distanceTo(Tc);e.setAttribute("lineDistance",new _t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hf extends Yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class du extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ec=new Ye,Wa=new Qr,ws=new gn,Rs=new B;class Wf extends dt{constructor(e=new Tt,t=new du){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(n),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;Ec.copy(n).invert(),Wa.copy(e.ray).applyMatrix4(Ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);Rs.fromBufferAttribute(u,m),bc(Rs,m,l,n,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Rs.fromBufferAttribute(u,g),bc(Rs,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bc(s,e,t,i,n,r,o){const a=Wa.distanceSqToPoint(s);if(a<t){const l=new B;Wa.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class kn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class uy extends St{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fu extends St{constructor(e,t,i,n,r,o,a,l,c,h=$i){if(h!==$i&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$i&&(i=bi),i===void 0&&h===rr&&(i=ir),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);const h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new Re:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new B,n=[],r=[],o=[],a=new B,l=new Ye;for(let f=0;f<=e;f++){const g=f/e;n[f]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Je(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(Je(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ml extends An{constructor(e=0,t=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xf extends ml{constructor(e,t,i,n,r,o){super(e,t,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function gl(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+i*a}}}const Cs=new B,zo=new gl,Go=new gl,Vo=new gl;class qf extends An{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new B){const i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Cs.subVectors(n[0],n[1]).add(n[0]),c=Cs);const u=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Cs.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),zo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Go.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Vo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Go.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(zo.calc(l),Go.calc(l),Vo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ac(s,e,t,i,n){const r=(i-e)*.5,o=(n-t)*.5,a=s*s,l=s*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*s+t}function jf(s,e){const t=1-s;return t*t*e}function Yf(s,e){return 2*(1-s)*s*e}function Kf(s,e){return s*s*e}function Br(s,e,t,i){return jf(s,e)+Yf(s,t)+Kf(s,i)}function $f(s,e){const t=1-s;return t*t*t*e}function Jf(s,e){const t=1-s;return 3*t*t*s*e}function Zf(s,e){return 3*(1-s)*s*s*e}function Qf(s,e){return s*s*s*e}function kr(s,e,t,i,n){return $f(s,e)+Jf(s,t)+Zf(s,i)+Qf(s,n)}class pu extends An{constructor(e=new Re,t=new Re,i=new Re,n=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Re){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,n.x,r.x,o.x,a.x),kr(e,n.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ep extends An{constructor(e=new B,t=new B,i=new B,n=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new B){const i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(kr(e,n.x,r.x,o.x,a.x),kr(e,n.y,r.y,o.y,a.y),kr(e,n.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mu extends An{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tp extends An{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends An{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,n.x,r.x,o.x),Br(e,n.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vu extends An{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){const i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(Br(e,n.x,r.x,o.x),Br(e,n.y,r.y,o.y),Br(e,n.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _u extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,n=this.points,r=(n.length-1)*e,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Ac(a,l.x,c.x,h.x,u.x),Ac(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Re().fromArray(n))}return this}}var eo=Object.freeze({__proto__:null,ArcCurve:Xf,CatmullRomCurve3:qf,CubicBezierCurve:pu,CubicBezierCurve3:ep,EllipseCurve:ml,LineCurve:mu,LineCurve3:tp,QuadraticBezierCurve:gu,QuadraticBezierCurve3:vu,SplineCurve:_u});class np extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const o=r[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new eo[n.type]().fromJSON(n))}return this}}class wc extends np{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new mu(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new gu(this.currentPoint.clone(),new Re(e,t),new Re(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,o){const a=new pu(this.currentPoint.clone(),new Re(e,t),new Re(i,n),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new _u(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,n,r,o),this}absarc(e,t,i,n,r,o){return this.absellipse(e,t,i,i,n,r,o),this}ellipse(e,t,i,n,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,o,a,l),this}absellipse(e,t,i,n,r,o,a,l){const c=new ml(e,t,i,n,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xu extends Tt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new B,h=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yu extends wc{constructor(e){super(e),this.uuid=sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new wc().fromJSON(n))}return this}}const ip={triangulate:function(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=Su(s,0,n,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(i&&(r=lp(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<n;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Kr(r,o,t,a,l,f,0),o}};function Su(s,e,t,i,n){let r,o;if(n===xp(s,e,t,i)>0)for(r=e;r<t;r+=i)o=Rc(r,s[r],s[r+1],o);else for(r=t-i;r>=e;r-=i)o=Rc(r,s[r],s[r+1],o);return o&&no(o,o.next)&&(Jr(o),o=o.next),o}function wi(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(no(t,t.next)||vt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Kr(s,e,t,i,n,r,o){if(!s)return;!o&&r&&fp(s,i,n,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?sp(s,i,n,r):rp(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Jr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=op(wi(s),e,t),Kr(s,e,t,i,n,r,2)):o===2&&ap(s,e,t,i,n,r):Kr(wi(s),e,t,i,n,r,1);break}}}function rp(s){const e=s.prev,t=s,i=s.next;if(vt(e,t,i)>=0)return!1;const n=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=n<r?n<o?n:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=n>r?n>o?n:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ji(n,a,r,l,o,c,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function sp(s,e,t,i){const n=s.prev,r=s,o=s.next;if(vt(n,r,o)>=0)return!1;const a=n.x,l=r.x,c=o.x,h=n.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Xa(f,g,e,t,i),y=Xa(v,m,e,t,i);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=p&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==n&&x!==o&&ji(a,h,l,u,c,d,x.x,x.y)&&vt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==o&&ji(a,h,l,u,c,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==n&&x!==o&&ji(a,h,l,u,c,d,x.x,x.y)&&vt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==o&&ji(a,h,l,u,c,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function op(s,e,t){let i=s;do{const n=i.prev,r=i.next.next;!no(n,r)&&Mu(n,i,i.next,r)&&$r(n,r)&&$r(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Jr(i),Jr(i.next),i=s=r),i=i.next}while(i!==s);return wi(i)}function ap(s,e,t,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gp(o,a)){let l=Tu(o,a);o=wi(o,o.next),l=wi(l,l.next),Kr(o,e,t,i,n,r,0),Kr(l,e,t,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function lp(s,e,t,i){const n=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:s.length,c=Su(s,a,l,i,!1),c===c.next&&(c.steiner=!0),n.push(mp(c));for(n.sort(cp),r=0;r<n.length;r++)t=hp(n[r],t);return t}function cp(s,e){return s.x-e.x}function hp(s,e){const t=up(s,e);if(!t)return e;const i=Tu(t,s);return wi(i,i.next),wi(t,t.next)}function up(s,e){let t=e,i=-1/0,n;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,n=t.x<t.next.x?t:t.next,d===r))return n}t=t.next}while(t!==e);if(!n)return null;const a=n,l=n.x,c=n.y;let h=1/0,u;t=n;do r>=t.x&&t.x>=l&&r!==t.x&&ji(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),$r(t,s)&&(u<h||u===h&&(t.x>n.x||t.x===n.x&&dp(n,t)))&&(n=t,h=u)),t=t.next;while(t!==a);return n}function dp(s,e){return vt(s.prev,s,e.prev)<0&&vt(e.next,s,s.next)<0}function fp(s,e,t,i){let n=s;do n.z===0&&(n.z=Xa(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,pp(n)}function pp(s){let e,t,i,n,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,a--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(o>1);return s}function Xa(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function mp(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ji(s,e,t,i,n,r,o,a){return(n-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(n-o)*(i-a)}function gp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!vp(s,e)&&($r(s,e)&&$r(e,s)&&_p(s,e)&&(vt(s.prev,s,e.prev)||vt(s,e.prev,e))||no(s,e)&&vt(s.prev,s,s.next)>0&&vt(e.prev,e,e.next)>0)}function vt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function no(s,e){return s.x===e.x&&s.y===e.y}function Mu(s,e,t,i){const n=Us(vt(s,e,t)),r=Us(vt(s,e,i)),o=Us(vt(t,i,s)),a=Us(vt(t,i,e));return!!(n!==r&&o!==a||n===0&&Ps(s,t,e)||r===0&&Ps(s,i,e)||o===0&&Ps(t,s,i)||a===0&&Ps(t,e,i))}function Ps(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Us(s){return s>0?1:s<0?-1:0}function vp(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Mu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function $r(s,e){return vt(s.prev,s,s.next)<0?vt(s,e,s.next)>=0&&vt(s,s.prev,e)>=0:vt(s,e,s.prev)<0||vt(s,s.next,e)<0}function _p(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Tu(s,e){const t=new qa(s.i,s.x,s.y),i=new qa(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Rc(s,e,t,i){const n=new qa(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Jr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qa(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xp(s,e,t,i){let n=0;for(let r=e,o=t-i;r<t;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}class zr{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return zr.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];Cc(e),Pc(i,e);let o=e.length;t.forEach(Cc);for(let l=0;l<t.length;l++)n.push(o),o+=t[l].length,Pc(i,t[l]);const a=ip.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Cc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Pc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class vl extends Tt{constructor(e=new yu([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new _t(n,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:yp;let x,_=!1,E,P,U,I;p&&(x=p.getSpacedPoints(h),_=!0,d=!1,E=p.computeFrenetFrames(h,!1),P=new B,U=new B,I=new B),d||(m=0,f=0,g=0,v=0);const T=a.extractPoints(c);let M=T.shape;const D=T.holes;if(!zr.isClockWise(M)){M=M.reverse();for(let J=0,X=D.length;J<X;J++){const w=D[J];zr.isClockWise(w)&&(D[J]=w.reverse())}}const L=zr.triangulateShape(M,D),A=M;for(let J=0,X=D.length;J<X;J++){const w=D[J];M=M.concat(w)}function O(J,X,w){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(X,w)}const F=M.length,k=L.length;function N(J,X,w){let pe,Z,he;const le=J.x-X.x,Te=J.y-X.y,ue=w.x-J.x,C=w.y-J.y,S=le*le+Te*Te,K=le*C-Te*ue;if(Math.abs(K)>Number.EPSILON){const fe=Math.sqrt(S),te=Math.sqrt(ue*ue+C*C),Q=X.x-Te/fe,_e=X.y+le/fe,xe=w.x-C/te,ye=w.y+ue/te,Ge=((xe-Q)*C-(ye-_e)*ue)/(le*C-Te*ue);pe=Q+le*Ge-J.x,Z=_e+Te*Ge-J.y;const ae=pe*pe+Z*Z;if(ae<=2)return new Re(pe,Z);he=Math.sqrt(ae/2)}else{let fe=!1;le>Number.EPSILON?ue>Number.EPSILON&&(fe=!0):le<-Number.EPSILON?ue<-Number.EPSILON&&(fe=!0):Math.sign(Te)===Math.sign(C)&&(fe=!0),fe?(pe=-Te,Z=le,he=Math.sqrt(S)):(pe=le,Z=Te,he=Math.sqrt(S/2))}return new Re(pe/he,Z/he)}const Y=[];for(let J=0,X=A.length,w=X-1,pe=J+1;J<X;J++,w++,pe++)w===X&&(w=0),pe===X&&(pe=0),Y[J]=N(A[J],A[w],A[pe]);const H=[];let V,j=Y.concat();for(let J=0,X=D.length;J<X;J++){const w=D[J];V=[];for(let pe=0,Z=w.length,he=Z-1,le=pe+1;pe<Z;pe++,he++,le++)he===Z&&(he=0),le===Z&&(le=0),V[pe]=N(w[pe],w[he],w[le]);H.push(V),j=j.concat(V)}for(let J=0;J<m;J++){const X=J/m,w=f*Math.cos(X*Math.PI/2),pe=g*Math.sin(X*Math.PI/2)+v;for(let Z=0,he=A.length;Z<he;Z++){const le=O(A[Z],Y[Z],pe);ie(le.x,le.y,-w)}for(let Z=0,he=D.length;Z<he;Z++){const le=D[Z];V=H[Z];for(let Te=0,ue=le.length;Te<ue;Te++){const C=O(le[Te],V[Te],pe);ie(C.x,C.y,-w)}}}const me=g+v;for(let J=0;J<F;J++){const X=d?O(M[J],j[J],me):M[J];_?(U.copy(E.normals[0]).multiplyScalar(X.x),P.copy(E.binormals[0]).multiplyScalar(X.y),I.copy(x[0]).add(U).add(P),ie(I.x,I.y,I.z)):ie(X.x,X.y,0)}for(let J=1;J<=h;J++)for(let X=0;X<F;X++){const w=d?O(M[X],j[X],me):M[X];_?(U.copy(E.normals[J]).multiplyScalar(w.x),P.copy(E.binormals[J]).multiplyScalar(w.y),I.copy(x[J]).add(U).add(P),ie(I.x,I.y,I.z)):ie(w.x,w.y,u/h*J)}for(let J=m-1;J>=0;J--){const X=J/m,w=f*Math.cos(X*Math.PI/2),pe=g*Math.sin(X*Math.PI/2)+v;for(let Z=0,he=A.length;Z<he;Z++){const le=O(A[Z],Y[Z],pe);ie(le.x,le.y,u+w)}for(let Z=0,he=D.length;Z<he;Z++){const le=D[Z];V=H[Z];for(let Te=0,ue=le.length;Te<ue;Te++){const C=O(le[Te],V[Te],pe);_?ie(C.x,C.y+x[h-1].y,x[h-1].x+w):ie(C.x,C.y,u+w)}}}z(),W();function z(){const J=n.length/3;if(d){let X=0,w=F*X;for(let pe=0;pe<k;pe++){const Z=L[pe];ce(Z[2]+w,Z[1]+w,Z[0]+w)}X=h+m*2,w=F*X;for(let pe=0;pe<k;pe++){const Z=L[pe];ce(Z[0]+w,Z[1]+w,Z[2]+w)}}else{for(let X=0;X<k;X++){const w=L[X];ce(w[2],w[1],w[0])}for(let X=0;X<k;X++){const w=L[X];ce(w[0]+F*h,w[1]+F*h,w[2]+F*h)}}i.addGroup(J,n.length/3-J,0)}function W(){const J=n.length/3;let X=0;de(A,X),X+=A.length;for(let w=0,pe=D.length;w<pe;w++){const Z=D[w];de(Z,X),X+=Z.length}i.addGroup(J,n.length/3-J,1)}function de(J,X){let w=J.length;for(;--w>=0;){const pe=w;let Z=w-1;Z<0&&(Z=J.length-1);for(let he=0,le=h+m*2;he<le;he++){const Te=F*he,ue=F*(he+1),C=X+pe+Te,S=X+Z+Te,K=X+Z+ue,fe=X+pe+ue;ge(C,S,K,fe)}}}function ie(J,X,w){l.push(J),l.push(X),l.push(w)}function ce(J,X,w){ve(J),ve(X),ve(w);const pe=n.length/3,Z=y.generateTopUV(i,n,pe-3,pe-2,pe-1);oe(Z[0]),oe(Z[1]),oe(Z[2])}function ge(J,X,w,pe){ve(J),ve(X),ve(pe),ve(X),ve(w),ve(pe);const Z=n.length/3,he=y.generateSideWallUV(i,n,Z-6,Z-3,Z-2,Z-1);oe(he[0]),oe(he[1]),oe(he[3]),oe(he[1]),oe(he[2]),oe(he[3])}function ve(J){n.push(l[J*3+0]),n.push(l[J*3+1]),n.push(l[J*3+2])}function oe(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Sp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new eo[n.type]().fromJSON(n)),new vl(i,e.options)}}const yp={generateTopUV:function(s,e,t,i,n){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new Re(r,o),new Re(a,l),new Re(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[n*3],f=e[n*3+1],g=e[n*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Re(o,1-l),new Re(c,1-u),new Re(d,1-g),new Re(v,1-p)]:[new Re(a,1-l),new Re(h,1-u),new Re(f,1-g),new Re(m,1-p)]}};function Sp(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pn extends Tt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let x=0;x<c;x++){const _=x*u-r;g.push(_,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const x=y+c*p,_=y+c*(p+1),E=y+1+c*(p+1),P=y+1+c*p;f.push(x,_,P),f.push(_,E,P)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Eu extends Tt{constructor(e=.5,t=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/n,f=new B,g=new Re;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const y=p+m,x=y,_=y+i+1,E=y+i+2,P=y+1;a.push(x,_,P),a.push(_,E,P)}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _l extends Tt{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new B,d=new B,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],x=p/i;let _=0;p===0&&o===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const P=E/t;u.x=-e*Math.cos(n+P*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(n+P*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(P+_,1-x),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const x=h[p][y+1],_=h[p][y],E=h[p+1][y],P=h[p+1][y+1];(p!==0||o>0)&&f.push(x,_,P),(p!==i-1||l<Math.PI)&&f.push(_,E,P)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bu extends Tt{constructor(e=new vu(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new Re;let h=new B;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(f,2));function v(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),p()}function m(x){h=e.getPointAt(x/t,h);const _=o.normals[x],E=o.binormals[x];for(let P=0;P<=n;P++){const U=P/n*Math.PI*2,I=Math.sin(U),T=-Math.cos(U);l.x=T*_.x+I*E.x,l.y=T*_.y+I*E.y,l.z=T*_.z+I*E.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=n;_++){const E=(n+1)*(x-1)+(_-1),P=(n+1)*x+(_-1),U=(n+1)*x+_,I=(n+1)*(x-1)+_;g.push(E,P,I),g.push(P,U,I)}}function y(){for(let x=0;x<=t;x++)for(let _=0;_<=n;_++)c.x=x/t,c.y=_/n,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new bu(new eo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class xl extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wn extends xl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Au extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wu extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ls(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Mp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Tp(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Uc(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)n[o++]=s[a+l]}return n}function Ru(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[n++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=s[n++];while(r!==void 0)}class ts{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ep extends ts{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wl:r=e,a=2*t-i;break;case Xl:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wl:o=e,l=2*i-t;break;case Xl:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+y*o[c+E]+x*o[l+E]+_*o[u+E];return r}}class bp extends ts{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Ap extends ts{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ap(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ep(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&Mp(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===go,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=qr;class ur extends Rn{constructor(e,t,i){super(e,t,i)}}ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Xr;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Cu extends Rn{}Cu.prototype.ValueTypeName="color";class ar extends Rn{}ar.prototype.ValueTypeName="number";class wp extends ts{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Hn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class lr extends Rn{InterpolantFactoryMethodLinear(e){return new wp(this.times,this.values,this.getValueSize(),e)}}lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends Rn{constructor(e,t,i){super(e,t,i)}}dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Xr;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends Rn{}cr.prototype.ValueTypeName="vector";class Rp{constructor(e="",t=-1,i=[],n=Id){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Pp(i[o]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Rn.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Tp(l);l=Uc(l,1,h),c=Uc(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ar(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];Ru(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},n=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const x=d[g];m.push(x.time),p.push(x.morphTarget===v?1:0)}n.push(new ar(".morphTargetInfluence["+v+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";i(cr,f+".position",d,"pos",n),i(lr,f+".quaternion",d,"rot",n),i(cr,f+".scale",d,"scl",n)}}return n.length===0?null:new this(r,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ar;case"vector":case"vector2":case"vector3":case"vector4":return cr;case"color":return Cu;case"quaternion":return lr;case"bool":case"boolean":return ur;case"string":return dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Pp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cp(s.type);if(s.times===void 0){const t=[],i=[];Ru(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ii={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Up{constructor(e,t,i){const n=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Lp=new Up;class fr{constructor(e){this.manager=e!==void 0?e:Lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class Ip extends Error{constructor(e,t){super(e),this.response=t}}class Pu extends fr{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:i,onError:n});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Dn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:_})=>{if(x)p.close();else{v+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let P=0,U=h.length;P<U;P++){const I=h[P];I.onProgress&&I.onProgress(E)}p.enqueue(_),y()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Ip(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ii.add(e,c);const h=Dn[e];delete Dn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Dn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Dp extends fr{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ii.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=jr("img");function l(){h(),ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Np extends fr{constructor(e){super(e)}load(e,t,i,n){const r=new St,o=new Dp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class io extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Op extends io{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ho=new Ye,Lc=new B,Ic=new B;class yl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Ic.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ic),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fp extends yl{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=sr*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bp extends io{constructor(e,t,i=0,n=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dc=new Ye,Pr=new B,Wo=new B;class kp extends yl{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Pr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Pr),Wo.copy(i.position),Wo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wo),i.updateMatrixWorld(),n.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Dc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc)}}class zp extends io{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new kp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sl extends au{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gp extends yl{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vp extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Gp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hp extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Wp extends fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ii.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ii.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ii.add(e,l),r.manager.itemStart(e)}}let Is;class Xp{static getContext(){return Is===void 0&&(Is=new(window.AudioContext||window.webkitAudioContext)),Is}static setContext(e){Is=e}}class qp extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Nc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Nc(){return performance.now()}const pi=new B,Oc=new Hn,Yp=new B,mi=new B;class Kp extends dt{constructor(){super(),this.type="AudioListener",this.context=Xp.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new jp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(pi,Oc,Yp),mi.set(0,0,-1).applyQuaternion(Oc),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(pi.x,n),t.positionY.linearRampToValueAtTime(pi.y,n),t.positionZ.linearRampToValueAtTime(pi.z,n),t.forwardX.linearRampToValueAtTime(mi.x,n),t.forwardY.linearRampToValueAtTime(mi.y,n),t.forwardZ.linearRampToValueAtTime(mi.z,n),t.upX.linearRampToValueAtTime(i.x,n),t.upY.linearRampToValueAtTime(i.y,n),t.upZ.linearRampToValueAtTime(i.z,n)}else t.setPosition(pi.x,pi.y,pi.z),t.setOrientation(mi.x,mi.y,mi.z,i.x,i.y,i.z)}}class $p extends dt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Ml="\\[\\]\\.:\\/",Jp=new RegExp("["+Ml+"]","g"),Tl="[^"+Ml+"]",Zp="[^"+Ml.replace("\\.","")+"]",Qp=/((?:WC+[\/:])*)/.source.replace("WC",Tl),em=/(WCOD+)?/.source.replace("WCOD",Zp),tm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tl),nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tl),im=new RegExp("^"+Qp+em+tm+nm+"$"),rm=["material","materials","bones","map"];class sm{constructor(e,t,i){const n=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ct{constructor(e,t,i){this.path=t,this.parsedPath=i||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,i):new ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jp,"")}static parseTrackName(e){const t=im.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);rm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[n];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=sm;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Fc=new Ye;class Bc{constructor(e,t,i=0,n=1/0){this.ray=new Qr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(e,t=!0,i=[]){return ja(e,this,i,t),i.sort(kc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)ja(e[n],this,i,t);return i.sort(kc),i}}function kc(s,e){return s.distance-e.distance}function ja(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ja(r[o],e,t,!0)}}function zc(s,e,t,i){const n=om(i);switch(t){case Hh:return s*e;case Xh:return s*e;case qh:return s*e*2;case sl:return s*e/n.components*n.byteLength;case ol:return s*e/n.components*n.byteLength;case jh:return s*e*2/n.components*n.byteLength;case al:return s*e*2/n.components*n.byteLength;case Wh:return s*e*3/n.components*n.byteLength;case rn:return s*e*4/n.components*n.byteLength;case ll:return s*e*4/n.components*n.byteLength;case zs:case Gs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vs:case Hs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case va:case xa:return Math.max(s,16)*Math.max(e,8)/4;case ga:case _a:return Math.max(s,8)*Math.max(e,8)/2;case ya:case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Na:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ws:case Fa:case Ba:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yh:case ka:return Math.ceil(s/4)*Math.ceil(e/4)*8;case za:case Ga:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function om(s){switch(s){case Vn:case zh:return{byteLength:1,components:1};case Wr:case Gh:case Zr:return{byteLength:2,components:1};case il:case rl:return{byteLength:2,components:4};case bi:case nl:case fn:return{byteLength:4,components:1};case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);function Uu(){let s=null,e=!1,t=null,i=null;function n(r,o){t(r,o),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function am(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ym=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Im=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ym=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,og=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ag=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Av=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:lm,alphahash_pars_fragment:cm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:vm,begin_vertex:_m,beginnormal_vertex:xm,bsdfs:ym,iridescence_fragment:Sm,bumpmap_pars_fragment:Mm,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Am,color_fragment:wm,color_pars_fragment:Rm,color_pars_vertex:Cm,color_vertex:Pm,common:Um,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Im,displacementmap_pars_vertex:Dm,displacementmap_vertex:Nm,emissivemap_fragment:Om,emissivemap_pars_fragment:Fm,colorspace_fragment:Bm,colorspace_pars_fragment:km,envmap_fragment:zm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Vm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:eg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:jm,fog_pars_fragment:Ym,gradientmap_pars_fragment:Km,lightmap_pars_fragment:$m,lights_lambert_fragment:Jm,lights_lambert_pars_fragment:Zm,lights_pars_begin:Qm,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:rg,lights_physical_fragment:sg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:lg,lights_fragment_end:cg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:fg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:vg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:xg,morphinstance_vertex:yg,morphcolor_vertex:Sg,morphnormal_vertex:Mg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Eg,normal_fragment_begin:bg,normal_fragment_maps:Ag,normal_pars_fragment:wg,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Lg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Dg,opaque_fragment:Ng,packing:Og,premultiplied_alpha_fragment:Fg,project_vertex:Bg,dithering_fragment:kg,dithering_pars_fragment:zg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:jg,skinning_pars_vertex:Yg,skinning_vertex:Kg,skinnormal_vertex:$g,specularmap_fragment:Jg,specularmap_pars_fragment:Zg,tonemapping_fragment:Qg,tonemapping_pars_fragment:ev,transmission_fragment:tv,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,worldpos_vertex:ov,background_vert:av,background_frag:lv,backgroundCube_vert:cv,backgroundCube_frag:hv,cube_vert:uv,cube_frag:dv,depth_vert:fv,depth_frag:pv,distanceRGBA_vert:mv,distanceRGBA_frag:gv,equirect_vert:vv,equirect_frag:_v,linedashed_vert:xv,linedashed_frag:yv,meshbasic_vert:Sv,meshbasic_frag:Mv,meshlambert_vert:Tv,meshlambert_frag:Ev,meshmatcap_vert:bv,meshmatcap_frag:Av,meshnormal_vert:wv,meshnormal_frag:Rv,meshphong_vert:Cv,meshphong_frag:Pv,meshphysical_vert:Uv,meshphysical_frag:Lv,meshtoon_vert:Iv,meshtoon_frag:Dv,points_vert:Nv,points_frag:Ov,shadow_vert:Fv,shadow_frag:Bv,sprite_vert:kv,sprite_frag:zv},Le={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Tn={basic:{uniforms:Gt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Gt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Gt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Gt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Gt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Gt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Gt([Le.points,Le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Gt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Gt([Le.common,Le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Gt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Gt([Le.sprite,Le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Gt([Le.common,Le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Gt([Le.lights,Le.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Tn.physical={uniforms:Gt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ds={r:0,b:0,g:0},gi=new bn,Gv=new Ye;function Vv(s,e,t,i,n,r,o){const a=new Ve(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const E=g(x);E===null?p(a,l):E&&E.isColor&&(p(E,1),_=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){const E=g(_);E&&(E.isCubeTexture||E.mapping===to)?(h===void 0&&(h=new mt(new es(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:or(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),gi.copy(_.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(gi)),h.material.toneMapped=it.getTransfer(E.colorSpace)!==ht,(u!==E||d!==E.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new mt(new pn(2,2),new oi({name:"BackgroundMaterial",uniforms:or(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(Ds,su(s)),i.buffers.color.setClear(Ds.r,Ds.g,Ds.b,_,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:v,addToRenderList:m,dispose:y}}function Hv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,o=!1;function a(M,D,R,L,A){let O=!1;const F=u(L,R,D);r!==F&&(r=F,c(r.object)),O=f(M,L,R,A),O&&g(M,L,R,A),A!==null&&e.update(A,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(M,D,R,L),A!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,D,R){const L=R.wireframe===!0;let A=i[M.id];A===void 0&&(A={},i[M.id]=A);let O=A[D.id];O===void 0&&(O={},A[D.id]=O);let F=O[L];return F===void 0&&(F=d(l()),O[L]=F),F}function d(M){const D=[],R=[],L=[];for(let A=0;A<t;A++)D[A]=0,R[A]=0,L[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:R,attributeDivisors:L,object:M,attributes:{},index:null}}function f(M,D,R,L){const A=r.attributes,O=D.attributes;let F=0;const k=R.getAttributes();for(const N in k)if(k[N].location>=0){const H=A[N];let V=O[N];if(V===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),H===void 0||H.attribute!==V||V&&H.data!==V.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function g(M,D,R,L){const A={},O=D.attributes;let F=0;const k=R.getAttributes();for(const N in k)if(k[N].location>=0){let H=O[N];H===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(H=M.instanceColor));const V={};V.attribute=H,H&&H.data&&(V.data=H.data),A[N]=V,F++}r.attributes=A,r.attributesNum=F,r.index=L}function v(){const M=r.newAttributes;for(let D=0,R=M.length;D<R;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const R=r.newAttributes,L=r.enabledAttributes,A=r.attributeDivisors;R[M]=1,L[M]===0&&(s.enableVertexAttribArray(M),L[M]=1),A[M]!==D&&(s.vertexAttribDivisor(M,D),A[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let R=0,L=D.length;R<L;R++)D[R]!==M[R]&&(s.disableVertexAttribArray(R),D[R]=0)}function x(M,D,R,L,A,O,F){F===!0?s.vertexAttribIPointer(M,D,R,A,O):s.vertexAttribPointer(M,D,R,L,A,O)}function _(M,D,R,L){v();const A=L.attributes,O=R.getAttributes(),F=D.defaultAttributeValues;for(const k in O){const N=O[k];if(N.location>=0){let Y=A[k];if(Y===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const H=Y.normalized,V=Y.itemSize,j=e.get(Y);if(j===void 0)continue;const me=j.buffer,z=j.type,W=j.bytesPerElement,de=z===s.INT||z===s.UNSIGNED_INT||Y.gpuType===nl;if(Y.isInterleavedBufferAttribute){const ie=Y.data,ce=ie.stride,ge=Y.offset;if(ie.isInstancedInterleavedBuffer){for(let ve=0;ve<N.locationSize;ve++)p(N.location+ve,ie.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<N.locationSize;ve++)m(N.location+ve);s.bindBuffer(s.ARRAY_BUFFER,me);for(let ve=0;ve<N.locationSize;ve++)x(N.location+ve,V/N.locationSize,z,H,ce*W,(ge+V/N.locationSize*ve)*W,de)}else{if(Y.isInstancedBufferAttribute){for(let ie=0;ie<N.locationSize;ie++)p(N.location+ie,Y.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ie=0;ie<N.locationSize;ie++)m(N.location+ie);s.bindBuffer(s.ARRAY_BUFFER,me);for(let ie=0;ie<N.locationSize;ie++)x(N.location+ie,V/N.locationSize,z,H,V*W,V/N.locationSize*ie*W,de)}}else if(F!==void 0){const H=F[k];if(H!==void 0)switch(H.length){case 2:s.vertexAttrib2fv(N.location,H);break;case 3:s.vertexAttrib3fv(N.location,H);break;case 4:s.vertexAttrib4fv(N.location,H);break;default:s.vertexAttrib1fv(N.location,H)}}}}y()}function E(){I();for(const M in i){const D=i[M];for(const R in D){const L=D[R];for(const A in L)h(L[A].object),delete L[A];delete D[R]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const R in D){const L=D[R];for(const A in L)h(L[A].object),delete L[A];delete D[R]}delete i[M.id]}function U(M){for(const D in i){const R=i[D];if(R[M.id]===void 0)continue;const L=R[M.id];for(const A in L)h(L[A].object),delete L[A];delete R[M.id]}}function I(){T(),o=!0,r!==n&&(r=n,c(r.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Wv(s,e,t){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xv(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(U){return!(U!==rn&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const I=U===Zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Vn&&i.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==fn&&!I)}function l(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:E,maxSamples:P}}function qv(s){const e=this;let t=null,i=0,n=!1,r=!1;const o=new yi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,x=y*4;let _=p.clippingState||null;l.value=_,_=h(g,d,x,f);for(let E=0;E!==x;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function jv(s){let e=new WeakMap;function t(o,a){return a===pa?o.mapping=er:a===ma&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pa||a===ma)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Yi=4,Gc=[.125,.215,.35,.446,.526,.582],Ti=20,Xo=new Sl,Vc=new Ve;let qo=null,jo=0,Yo=0,Ko=!1;const Si=(1+Math.sqrt(5))/2,Wi=1/Si,Hc=[new B(-Si,Wi,0),new B(Si,Wi,0),new B(-Wi,0,Si),new B(Wi,0,Si),new B(0,Si,-Wi),new B(0,Si,Wi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,jo,Yo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Zr,format:rn,colorSpace:Xt,depthBuffer:!1},n=Xc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(r)),this._blurMaterial=Kv(r,e,t)}return n}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,i,n){const a=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Vc),h.toneMapping=si,h.autoClear=!1;const f=new Bt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new mt(new es,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Vc),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Ns(n,y*x,p>2?x:0,x,x),h.setRenderTarget(n),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===er||e.mapping===tr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hc[(n-r-1)%Hc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",r),this._halfBlur(o,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new mt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const p=[];let y=0;for(let U=0;U<Ti;++U){const I=U/v,T=Math.exp(-I*I/2);p.push(T),U===0?y+=T:U<m&&(y+=2*T)}for(let U=0;U<p.length;U++)p[U]=p[U]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const _=this._sizeLods[n],E=3*_*(n>x-Yi?n-x+Yi:0),P=4*(this._cubeSize-_);Ns(t,E,P,3*_,2*_),l.setRenderTarget(t),l.render(u,Xo)}}function Yv(s){const e=[],t=[],i=[];let n=s;const r=s-Yi+1+Gc.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>s-Yi?l=Gc[o-s+Yi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let P=0;P<f;P++){const U=P%3*2/3-1,I=P>2?0:-1,T=[U,I,0,U+2/3,I,0,U+2/3,I+1,0,U,I,0,U+2/3,I+1,0,U,I+1,0];y.set(T,v*g*P),x.set(d,m*g*P);const M=[P,P,P,P,P,P];_.set(M,p*g*P)}const E=new Tt;E.setAttribute("position",new kt(y,v)),E.setAttribute("uv",new kt(x,m)),E.setAttribute("faceIndex",new kt(_,p)),e.push(E),n>Yi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Xc(s,e,t){const i=new Ai(s,e,t);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function Kv(s,e,t){const i=new Float32Array(Ti),n=new B(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function qc(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function jc(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $v(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===pa||l===ma,h=l===er||l===tr;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Wc(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new Wc(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Jv(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&qi("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Zv(s,e,t,i){const n={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete n[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,_=y.length;x<_;x+=3){const E=y[x+0],P=y[x+1],U=y[x+2];d.push(E,P,P,U,U,E)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const E=x+0,P=x+1,U=x+2;d.push(E,P,P,U,U,E)}}else return;const m=new(Qh(d)?ru:iu)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Qv(s,e,t){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function e_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function t_(s,e,t){const i=new WeakMap,n=new at;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let f=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",f)};d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let E=a.attributes.position.count*_,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*P*4*u),I=new tu(U,E,P,u);I.type=fn,I.needsUpdate=!0;const T=_*4;for(let M=0;M<u;M++){const D=p[M],R=y[M],L=x[M],A=E*P*4*M;for(let O=0;O<D.count;O++){const F=O*T;g===!0&&(n.fromBufferAttribute(D,O),U[A+F+0]=n.x,U[A+F+1]=n.y,U[A+F+2]=n.z,U[A+F+3]=0),v===!0&&(n.fromBufferAttribute(R,O),U[A+F+4]=n.x,U[A+F+5]=n.y,U[A+F+6]=n.z,U[A+F+7]=0),m===!0&&(n.fromBufferAttribute(L,O),U[A+F+8]=n.x,U[A+F+9]=n.y,U[A+F+10]=n.z,U[A+F+11]=L.itemSize===4?n.w:1)}}d={count:u,texture:I,size:new Re(E,P)},i.set(a,d),a.addEventListener("dispose",f)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function n_(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Lu=new St,Yc=new fu(1,1),Iu=new tu,Du=new vf,Nu=new lu,Kc=[],$c=[],Jc=new Float32Array(16),Zc=new Float32Array(9),Qc=new Float32Array(4);function pr(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Kc[n];if(r===void 0&&(r=new Float32Array(n),Kc[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function ro(s,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function i_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function r_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function s_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function o_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function a_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Qc.set(i),s.uniformMatrix2fv(this.addr,!1,Qc),bt(t,i)}}function l_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Zc.set(i),s.uniformMatrix3fv(this.addr,!1,Zc),bt(t,i)}}function c_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Jc.set(i),s.uniformMatrix4fv(this.addr,!1,Jc),bt(t,i)}}function h_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function u_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function d_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function f_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function p_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function m_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function g_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function v_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function __(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Yc.compareFunction=Zh,r=Yc):r=Lu,t.setTexture2D(e||r,n)}function x_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Du,n)}function y_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Nu,n)}function S_(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Iu,n)}function M_(s){switch(s){case 5126:return i_;case 35664:return r_;case 35665:return s_;case 35666:return o_;case 35674:return a_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return d_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return v_;case 35678:case 36198:case 36298:case 36306:case 35682:return __;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return S_}}function T_(s,e){s.uniform1fv(this.addr,e)}function E_(s,e){const t=pr(e,this.size,2);s.uniform2fv(this.addr,t)}function b_(s,e){const t=pr(e,this.size,3);s.uniform3fv(this.addr,t)}function A_(s,e){const t=pr(e,this.size,4);s.uniform4fv(this.addr,t)}function w_(s,e){const t=pr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function R_(s,e){const t=pr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function C_(s,e){const t=pr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function P_(s,e){s.uniform1iv(this.addr,e)}function U_(s,e){s.uniform2iv(this.addr,e)}function L_(s,e){s.uniform3iv(this.addr,e)}function I_(s,e){s.uniform4iv(this.addr,e)}function D_(s,e){s.uniform1uiv(this.addr,e)}function N_(s,e){s.uniform2uiv(this.addr,e)}function O_(s,e){s.uniform3uiv(this.addr,e)}function F_(s,e){s.uniform4uiv(this.addr,e)}function B_(s,e,t){const i=this.cache,n=e.length,r=ro(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Lu,r[o])}function k_(s,e,t){const i=this.cache,n=e.length,r=ro(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Du,r[o])}function z_(s,e,t){const i=this.cache,n=e.length,r=ro(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Nu,r[o])}function G_(s,e,t){const i=this.cache,n=e.length,r=ro(t,n);Et(i,r)||(s.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Iu,r[o])}function V_(s){switch(s){case 5126:return T_;case 35664:return E_;case 35665:return b_;case 35666:return A_;case 35674:return w_;case 35675:return R_;case 35676:return C_;case 5124:case 35670:return P_;case 35667:case 35671:return U_;case 35668:case 35672:return L_;case 35669:case 35673:return I_;case 5125:return D_;case 36294:return N_;case 36295:return O_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return G_}}class H_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}}class W_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V_(t.type)}}class X_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(e,t[a.id],i)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function eh(s,e){s.seq.push(e),s.map[e.id]=e}function q_(s,e,t){const i=s.name,n=i.length;for($o.lastIndex=0;;){const r=$o.exec(i),o=$o.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){eh(t,c===void 0?new H_(a,s,e):new W_(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new X_(a),eh(t,u)),t=u}}}class Xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),o=e.getUniformLocation(t,r.name);q_(r,o,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function th(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const j_=37297;let Y_=0;function K_(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const nh=new Ke;function $_(s){it._getMatrix(nh,it.workingColorSpace,s);const e=`mat3( ${nh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case Ks:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ih(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+K_(s.getShaderSource(e),o)}else return n}function J_(s,e){const t=$_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Z_(s,e){let t;switch(e){case bd:t="Linear";break;case Ad:t="Reinhard";break;case wd:t="Cineon";break;case Rd:t="ACESFilmic";break;case Pd:t="AgX";break;case Ud:t="Neutral";break;case Cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Os=new B;function Q_(){it.getLuminanceCoefficients(Os);const s=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function t0(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function n0(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Dr(s){return s!==""}function rh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(s){return s.replace(i0,s0)}const r0=new Map;function s0(s,e){let t=$e[e];if(t===void 0){const i=r0.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ya(t)}const o0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(s){return s.replace(o0,a0)}function a0(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function ah(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===rd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function c0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function u0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case Td:e="ENVMAP_BLENDING_MIX";break;case Ed:e="ENVMAP_BLENDING_ADD";break}return e}function d0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function f0(s,e,t,i){const n=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=l0(t),c=c0(t),h=h0(t),u=u0(t),d=d0(t),f=e0(t),g=t0(r),v=n.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?$e.tonemapping_pars_fragment:"",t.toneMapping!==si?Z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,J_("linearToOutputTexel",t.outputColorSpace),Q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Ya(o),o=rh(o,t),o=sh(o,t),a=Ya(a),a=rh(a,t),a=sh(a,t),o=oh(o),a=oh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,_=y+p+a,E=th(n,n.VERTEX_SHADER,x),P=th(n,n.FRAGMENT_SHADER,_);n.attachShader(v,E),n.attachShader(v,P),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function U(D){if(s.debug.checkShaderErrors){const R=n.getProgramInfoLog(v).trim(),L=n.getShaderInfoLog(E).trim(),A=n.getShaderInfoLog(P).trim();let O=!0,F=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,E,P);else{const k=ih(n,E,"vertex"),N=ih(n,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+R+`
`+k+`
`+N)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(L===""||A==="")&&(F=!1);F&&(D.diagnostics={runnable:O,programLog:R,vertexShader:{log:L,prefix:m},fragmentShader:{log:A,prefix:p}})}n.deleteShader(E),n.deleteShader(P),I=new Xs(n,v),T=n0(n,v)}let I;this.getUniforms=function(){return I===void 0&&U(this),I};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,j_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Y_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=P,this}let p0=0;class m0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new g0(e),t.set(e,i)),i}}class g0{constructor(e){this.id=p0++,this.code=e,this.usedTimes=0}}function v0(s,e,t,i,n,r,o){const a=new hl,l=new m0,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,D,R,L){const A=R.fog,O=L.geometry,F=T.isMeshStandardMaterial?R.environment:null,k=(T.isMeshStandardMaterial?t:e).get(T.envMap||F),N=k&&k.mapping===to?k.image.height:null,Y=g[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const H=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,V=H!==void 0?H.length:0;let j=0;O.morphAttributes.position!==void 0&&(j=1),O.morphAttributes.normal!==void 0&&(j=2),O.morphAttributes.color!==void 0&&(j=3);let me,z,W,de;if(Y){const je=Tn[Y];me=je.vertexShader,z=je.fragmentShader}else me=T.vertexShader,z=T.fragmentShader,l.update(T),W=l.getVertexShaderID(T),de=l.getFragmentShaderID(T);const ie=s.getRenderTarget(),ce=s.state.buffers.depth.getReversed(),ge=L.isInstancedMesh===!0,ve=L.isBatchedMesh===!0,oe=!!T.map,J=!!T.matcap,X=!!k,w=!!T.aoMap,pe=!!T.lightMap,Z=!!T.bumpMap,he=!!T.normalMap,le=!!T.displacementMap,Te=!!T.emissiveMap,ue=!!T.metalnessMap,C=!!T.roughnessMap,S=T.anisotropy>0,K=T.clearcoat>0,fe=T.dispersion>0,te=T.iridescence>0,Q=T.sheen>0,_e=T.transmission>0,xe=S&&!!T.anisotropyMap,ye=K&&!!T.clearcoatMap,Ge=K&&!!T.clearcoatNormalMap,ae=K&&!!T.clearcoatRoughnessMap,Me=te&&!!T.iridescenceMap,Pe=te&&!!T.iridescenceThicknessMap,Fe=Q&&!!T.sheenColorMap,Ae=Q&&!!T.sheenRoughnessMap,He=!!T.specularMap,Oe=!!T.specularColorMap,Ie=!!T.specularIntensityMap,G=_e&&!!T.transmissionMap,we=_e&&!!T.thicknessMap,ee=!!T.gradientMap,se=!!T.alphaMap,be=T.alphaTest>0,Ee=!!T.alphaHash,Ce=!!T.extensions;let Xe=si;T.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const rt={shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:me,fragmentShader:z,defines:T.defines,customVertexShaderID:W,customFragmentShaderID:de,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:ve,batchingColor:ve&&L._colorsTexture!==null,instancing:ge,instancingColor:ge&&L.instanceColor!==null,instancingMorph:ge&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Xt,alphaToCoverage:!!T.alphaToCoverage,map:oe,matcap:J,envMap:X,envMapMode:X&&k.mapping,envMapCubeUVHeight:N,aoMap:w,lightMap:pe,bumpMap:Z,normalMap:he,displacementMap:d&&le,emissiveMap:Te,normalMapObjectSpace:he&&T.normalMapType===Od,normalMapTangentSpace:he&&T.normalMapType===Jh,metalnessMap:ue,roughnessMap:C,anisotropy:S,anisotropyMap:xe,clearcoat:K,clearcoatMap:ye,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ae,dispersion:fe,iridescence:te,iridescenceMap:Me,iridescenceThicknessMap:Pe,sheen:Q,sheenColorMap:Fe,sheenRoughnessMap:Ae,specularMap:He,specularColorMap:Oe,specularIntensityMap:Ie,transmission:_e,transmissionMap:G,thicknessMap:we,gradientMap:ee,opaque:T.transparent===!1&&T.blending===Ki&&T.alphaToCoverage===!1,alphaMap:se,alphaTest:be,alphaHash:Ee,combine:T.combine,mapUv:oe&&v(T.map.channel),aoMapUv:w&&v(T.aoMap.channel),lightMapUv:pe&&v(T.lightMap.channel),bumpMapUv:Z&&v(T.bumpMap.channel),normalMapUv:he&&v(T.normalMap.channel),displacementMapUv:le&&v(T.displacementMap.channel),emissiveMapUv:Te&&v(T.emissiveMap.channel),metalnessMapUv:ue&&v(T.metalnessMap.channel),roughnessMapUv:C&&v(T.roughnessMap.channel),anisotropyMapUv:xe&&v(T.anisotropyMap.channel),clearcoatMapUv:ye&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(T.sheenRoughnessMap.channel),specularMapUv:He&&v(T.specularMap.channel),specularColorMapUv:Oe&&v(T.specularColorMap.channel),specularIntensityMapUv:Ie&&v(T.specularIntensityMap.channel),transmissionMapUv:G&&v(T.transmissionMap.channel),thicknessMapUv:we&&v(T.thicknessMap.channel),alphaMapUv:se&&v(T.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(oe||se),fog:!!A,useFog:T.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ce,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:j,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:oe&&T.map.isVideoTexture===!0&&it.getTransfer(T.map.colorSpace)===ht,decodeVideoTextureEmissive:Te&&T.emissiveMap.isVideoTexture===!0&&it.getTransfer(T.emissiveMap.colorSpace)===ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===nn,flipSided:T.side===Kt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ce&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&T.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)M.push(D),M.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(y(M,T),x(M,T),M.push(s.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function y(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function x(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){const M=g[T.type];let D;if(M){const R=Tn[M];D=ou.clone(R.uniforms)}else D=T.uniforms;return D}function E(T,M){let D;for(let R=0,L=h.length;R<L;R++){const A=h[R];if(A.cacheKey===M){D=A,++D.usedTimes;break}}return D===void 0&&(D=new f0(s,M,T,r),h.push(D)),D}function P(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function U(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:I}}function _0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function x0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function lh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ch(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,f,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||x0),i.length>1&&i.sort(d||lh),n.length>1&&n.sort(d||lh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function y0(){let s=new WeakMap;function e(i,n){const r=s.get(i);let o;return r===void 0?(o=new ch,s.set(i,[o])):n>=r.length?(o=new ch,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function S0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ve};break;case"SpotLight":t={position:new B,direction:new B,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function M0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let T0=0;function E0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function b0(s){const e=new S0,t=M0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const n=new B,r=new Ye,o=new Ye;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,x=0,_=0,E=0,P=0,U=0;c.sort(E0);for(let T=0,M=c.length;T<M;T++){const D=c[T],R=D.color,L=D.intensity,A=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=R.r*L,u+=R.g*L,d+=R.b*L;else if(D.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],L);U++}else if(D.isDirectionalLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,N=t.get(D);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,i.directionalShadow[f]=N,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=D.shadow.matrix,y++}i.directional[f]=F,f++}else if(D.isSpotLight){const F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(R).multiplyScalar(L),F.distance=A,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,i.spot[v]=F;const k=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,k.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[v]=k.matrix,D.castShadow){const N=t.get(D);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=O,_++}v++}else if(D.isRectAreaLight){const F=e.get(D);F.color.copy(R).multiplyScalar(L),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=F,m++}else if(D.isPointLight){const F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){const k=D.shadow,N=t.get(D);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,N.shadowCameraNear=k.camera.near,N.shadowCameraFar=k.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=D.shadow.matrix,x++}i.point[g]=F,g++}else if(D.isHemisphereLight){const F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(L),F.groundColor.copy(D.groundColor).multiplyScalar(L),i.hemi[p]=F,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==x||I.numSpotShadows!==_||I.numSpotMaps!==E||I.numLightProbes!==U)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+E-P,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=U,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=x,I.numSpotShadows=_,I.numSpotMaps=E,I.numLightProbes=U,i.version=T0++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function hh(s){const e=new b0(s),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function A0(s){let e=new WeakMap;function t(n,r=0){const o=e.get(n);let a;return o===void 0?(a=new hh(s),e.set(n,[a])):r>=o.length?(a=new hh(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C0(s,e,t){let i=new fl;const n=new Re,r=new Re,o=new at,a=new Au({depthPacking:$h}),l=new wu,c={},h=t.maxTextureSize,u={[Gn]:Kt,[Kt]:Gn,[nn]:nn},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:w0,fragmentShader:R0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let p=this.type;this.render=function(P,U,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),R=s.state;R.setBlending(ri),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=p!==Nn&&this.type===Nn,A=p===Nn&&this.type!==Nn;for(let O=0,F=P.length;O<F;O++){const k=P[O],N=k.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;n.copy(N.mapSize);const Y=N.getFrameExtents();if(n.multiply(Y),r.copy(N.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Y.x),n.x=r.x*Y.x,N.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Y.y),n.y=r.y*Y.y,N.mapSize.y=r.y)),N.map===null||L===!0||A===!0){const V=this.type!==Nn?{minFilter:Wt,magFilter:Wt}:{};N.map!==null&&N.map.dispose(),N.map=new Ai(n.x,n.y,V),N.map.texture.name=k.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const H=N.getViewportCount();for(let V=0;V<H;V++){const j=N.getViewport(V);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),R.viewport(o),N.updateMatrices(k,V),i=N.getFrustum(),_(U,I,N.camera,k,this.type)}N.isPointLightShadow!==!0&&this.type===Nn&&y(N,I),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,M,D)};function y(P,U){const I=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ai(n.x,n.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(U,null,I,d,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(U,null,I,f,v,null)}function x(P,U,I,T){let M=null;const D=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?l:a,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const R=M.uuid,L=U.uuid;let A=c[R];A===void 0&&(A={},c[R]=A);let O=A[L];O===void 0&&(O=M.clone(),A[L]=O,U.addEventListener("dispose",E)),M=O}if(M.visible=U.visible,M.wireframe=U.wireframe,T===Nn?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:u[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const R=s.properties.get(M);R.light=I}return M}function _(P,U,I,T,M){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Nn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const L=e.update(P),A=P.material;if(Array.isArray(A)){const O=L.groups;for(let F=0,k=O.length;F<k;F++){const N=O[F],Y=A[N.materialIndex];if(Y&&Y.visible){const H=x(P,Y,T,M);P.onBeforeShadow(s,P,U,I,L,H,N),s.renderBufferDirect(I,null,L,H,P,N),P.onAfterShadow(s,P,U,I,L,H,N)}}}else if(A.visible){const O=x(P,A,T,M);P.onBeforeShadow(s,P,U,I,L,O,null),s.renderBufferDirect(I,null,L,O,P,null),P.onAfterShadow(s,P,U,I,L,O,null)}}const R=P.children;for(let L=0,A=R.length;L<A;L++)_(R[L],U,I,T,M)}function E(P){P.target.removeEventListener("dispose",E);for(const I in c){const T=c[I],M=P.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const P0={[aa]:la,[ca]:da,[ha]:fa,[Qi]:ua,[la]:aa,[da]:ca,[fa]:ha,[ua]:Qi};function U0(s,e){function t(){let G=!1;const we=new at;let ee=null;const se=new at(0,0,0,0);return{setMask:function(be){ee!==be&&!G&&(s.colorMask(be,be,be,be),ee=be)},setLocked:function(be){G=be},setClear:function(be,Ee,Ce,Xe,rt){rt===!0&&(be*=Xe,Ee*=Xe,Ce*=Xe),we.set(be,Ee,Ce,Xe),se.equals(we)===!1&&(s.clearColor(be,Ee,Ce,Xe),se.copy(we))},reset:function(){G=!1,ee=null,se.set(-1,0,0,0)}}}function i(){let G=!1,we=!1,ee=null,se=null,be=null;return{setReversed:function(Ee){if(we!==Ee){const Ce=e.get("EXT_clip_control");we?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const Xe=be;be=null,this.setClear(Xe)}we=Ee},getReversed:function(){return we},setTest:function(Ee){Ee?ie(s.DEPTH_TEST):ce(s.DEPTH_TEST)},setMask:function(Ee){ee!==Ee&&!G&&(s.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(we&&(Ee=P0[Ee]),se!==Ee){switch(Ee){case aa:s.depthFunc(s.NEVER);break;case la:s.depthFunc(s.ALWAYS);break;case ca:s.depthFunc(s.LESS);break;case Qi:s.depthFunc(s.LEQUAL);break;case ha:s.depthFunc(s.EQUAL);break;case ua:s.depthFunc(s.GEQUAL);break;case da:s.depthFunc(s.GREATER);break;case fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=Ee}},setLocked:function(Ee){G=Ee},setClear:function(Ee){be!==Ee&&(we&&(Ee=1-Ee),s.clearDepth(Ee),be=Ee)},reset:function(){G=!1,ee=null,se=null,be=null,we=!1}}}function n(){let G=!1,we=null,ee=null,se=null,be=null,Ee=null,Ce=null,Xe=null,rt=null;return{setTest:function(je){G||(je?ie(s.STENCIL_TEST):ce(s.STENCIL_TEST))},setMask:function(je){we!==je&&!G&&(s.stencilMask(je),we=je)},setFunc:function(je,et,ft){(ee!==je||se!==et||be!==ft)&&(s.stencilFunc(je,et,ft),ee=je,se=et,be=ft)},setOp:function(je,et,ft){(Ee!==je||Ce!==et||Xe!==ft)&&(s.stencilOp(je,et,ft),Ee=je,Ce=et,Xe=ft)},setLocked:function(je){G=je},setClear:function(je){rt!==je&&(s.clearStencil(je),rt=je)},reset:function(){G=!1,we=null,ee=null,se=null,be=null,Ee=null,Ce=null,Xe=null,rt=null}}}const r=new t,o=new i,a=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,E=null,P=null,U=new Ve(0,0,0),I=0,T=!1,M=null,D=null,R=null,L=null,A=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(N)[1]),F=k>=1):N.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),F=k>=2);let Y=null,H={};const V=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),me=new at().fromArray(V),z=new at().fromArray(j);function W(G,we,ee,se){const be=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(G,Ee),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<ee;Ce++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(we+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Ee}const de={};de[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(s.DEPTH_TEST),o.setFunc(Qi),Z(!1),he(Bl),ie(s.CULL_FACE),w(ri);function ie(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function ce(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function ge(G,we){return u[G]!==we?(s.bindFramebuffer(G,we),u[G]=we,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=we),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=we),!0):!1}function ve(G,we){let ee=f,se=!1;if(G){ee=d.get(we),ee===void 0&&(ee=[],d.set(we,ee));const be=G.textures;if(ee.length!==be.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Ce=be.length;Ee<Ce;Ee++)ee[Ee]=s.COLOR_ATTACHMENT0+Ee;ee.length=be.length,se=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,se=!0);se&&s.drawBuffers(ee)}function oe(G){return g!==G?(s.useProgram(G),g=G,!0):!1}const J={[Mi]:s.FUNC_ADD,[od]:s.FUNC_SUBTRACT,[ad]:s.FUNC_REVERSE_SUBTRACT};J[ld]=s.MIN,J[cd]=s.MAX;const X={[hd]:s.ZERO,[ud]:s.ONE,[dd]:s.SRC_COLOR,[sa]:s.SRC_ALPHA,[_d]:s.SRC_ALPHA_SATURATE,[gd]:s.DST_COLOR,[pd]:s.DST_ALPHA,[fd]:s.ONE_MINUS_SRC_COLOR,[oa]:s.ONE_MINUS_SRC_ALPHA,[vd]:s.ONE_MINUS_DST_COLOR,[md]:s.ONE_MINUS_DST_ALPHA,[xd]:s.CONSTANT_COLOR,[yd]:s.ONE_MINUS_CONSTANT_COLOR,[Sd]:s.CONSTANT_ALPHA,[Md]:s.ONE_MINUS_CONSTANT_ALPHA};function w(G,we,ee,se,be,Ee,Ce,Xe,rt,je){if(G===ri){v===!0&&(ce(s.BLEND),v=!1);return}if(v===!1&&(ie(s.BLEND),v=!0),G!==sd){if(G!==m||je!==T){if((p!==Mi||_!==Mi)&&(s.blendEquation(s.FUNC_ADD),p=Mi,_=Mi),je)switch(G){case Ki:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.ONE,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,x=null,E=null,P=null,U.set(0,0,0),I=0,m=G,T=je}return}be=be||we,Ee=Ee||ee,Ce=Ce||se,(we!==p||be!==_)&&(s.blendEquationSeparate(J[we],J[be]),p=we,_=be),(ee!==y||se!==x||Ee!==E||Ce!==P)&&(s.blendFuncSeparate(X[ee],X[se],X[Ee],X[Ce]),y=ee,x=se,E=Ee,P=Ce),(Xe.equals(U)===!1||rt!==I)&&(s.blendColor(Xe.r,Xe.g,Xe.b,rt),U.copy(Xe),I=rt),m=G,T=!1}function pe(G,we){G.side===nn?ce(s.CULL_FACE):ie(s.CULL_FACE);let ee=G.side===Kt;we&&(ee=!ee),Z(ee),G.blending===Ki&&G.transparent===!1?w(ri):w(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const se=G.stencilWrite;a.setTest(se),se&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Te(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function Z(G){M!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),M=G)}function he(G){G!==nd?(ie(s.CULL_FACE),G!==D&&(G===Bl?s.cullFace(s.BACK):G===id?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ce(s.CULL_FACE),D=G}function le(G){G!==R&&(F&&s.lineWidth(G),R=G)}function Te(G,we,ee){G?(ie(s.POLYGON_OFFSET_FILL),(L!==we||A!==ee)&&(s.polygonOffset(we,ee),L=we,A=ee)):ce(s.POLYGON_OFFSET_FILL)}function ue(G){G?ie(s.SCISSOR_TEST):ce(s.SCISSOR_TEST)}function C(G){G===void 0&&(G=s.TEXTURE0+O-1),Y!==G&&(s.activeTexture(G),Y=G)}function S(G,we,ee){ee===void 0&&(Y===null?ee=s.TEXTURE0+O-1:ee=Y);let se=H[ee];se===void 0&&(se={type:void 0,texture:void 0},H[ee]=se),(se.type!==G||se.texture!==we)&&(Y!==ee&&(s.activeTexture(ee),Y=ee),s.bindTexture(G,we||de[G]),se.type=G,se.texture=we)}function K(){const G=H[Y];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(G){me.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),me.copy(G))}function Ae(G){z.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),z.copy(G))}function He(G,we){let ee=c.get(we);ee===void 0&&(ee=new WeakMap,c.set(we,ee));let se=ee.get(G);se===void 0&&(se=s.getUniformBlockIndex(we,G.name),ee.set(G,se))}function Oe(G,we){const se=c.get(we).get(G);l.get(we)!==se&&(s.uniformBlockBinding(we,se,G.__bindingPointIndex),l.set(we,se))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Y=null,H={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,x=null,_=null,E=null,P=null,U=new Ve(0,0,0),I=0,T=!1,M=null,D=null,R=null,L=null,A=null,me.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:ce,bindFramebuffer:ge,drawBuffers:ve,useProgram:oe,setBlending:w,setMaterial:pe,setFlipSided:Z,setCullFace:he,setLineWidth:le,setPolygonOffset:Te,setScissorTest:ue,activeTexture:C,bindTexture:S,unbindTexture:K,compressedTexImage2D:fe,compressedTexImage3D:te,texImage2D:Me,texImage3D:Pe,updateUBOMapping:He,uniformBlockBinding:Oe,texStorage2D:Ge,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:_e,compressedTexSubImage2D:xe,compressedTexSubImage3D:ye,scissor:Fe,viewport:Ae,reset:Ie}}function L0(s,e,t,i,n,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):jr("canvas")}function v(C,S,K){let fe=1;const te=ue(C);if((te.width>K||te.height>K)&&(fe=K/Math.max(te.width,te.height)),fe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(fe*te.width),_e=Math.floor(fe*te.height);u===void 0&&(u=g(Q,_e));const xe=S?g(Q,_e):u;return xe.width=Q,xe.height=_e,xe.getContext("2d").drawImage(C,0,0,Q,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+_e+")."),xe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,S,K,fe,te=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=S;if(S===s.RED&&(K===s.FLOAT&&(Q=s.R32F),K===s.HALF_FLOAT&&(Q=s.R16F),K===s.UNSIGNED_BYTE&&(Q=s.R8)),S===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(Q=s.R8UI),K===s.UNSIGNED_SHORT&&(Q=s.R16UI),K===s.UNSIGNED_INT&&(Q=s.R32UI),K===s.BYTE&&(Q=s.R8I),K===s.SHORT&&(Q=s.R16I),K===s.INT&&(Q=s.R32I)),S===s.RG&&(K===s.FLOAT&&(Q=s.RG32F),K===s.HALF_FLOAT&&(Q=s.RG16F),K===s.UNSIGNED_BYTE&&(Q=s.RG8)),S===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(Q=s.RG8UI),K===s.UNSIGNED_SHORT&&(Q=s.RG16UI),K===s.UNSIGNED_INT&&(Q=s.RG32UI),K===s.BYTE&&(Q=s.RG8I),K===s.SHORT&&(Q=s.RG16I),K===s.INT&&(Q=s.RG32I)),S===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),K===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),K===s.UNSIGNED_INT&&(Q=s.RGB32UI),K===s.BYTE&&(Q=s.RGB8I),K===s.SHORT&&(Q=s.RGB16I),K===s.INT&&(Q=s.RGB32I)),S===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),K===s.UNSIGNED_INT&&(Q=s.RGBA32UI),K===s.BYTE&&(Q=s.RGBA8I),K===s.SHORT&&(Q=s.RGBA16I),K===s.INT&&(Q=s.RGBA32I)),S===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),S===s.RGBA){const _e=te?Ks:it.getTransfer(fe);K===s.FLOAT&&(Q=s.RGBA32F),K===s.HALF_FLOAT&&(Q=s.RGBA16F),K===s.UNSIGNED_BYTE&&(Q=_e===ht?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(C,S){let K;return C?S===null||S===bi||S===ir?K=s.DEPTH24_STENCIL8:S===fn?K=s.DEPTH32F_STENCIL8:S===Wr&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===bi||S===ir?K=s.DEPTH_COMPONENT24:S===fn?K=s.DEPTH_COMPONENT32F:S===Wr&&(K=s.DEPTH_COMPONENT16),K}function E(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function P(C){const S=C.target;S.removeEventListener("dispose",P),I(S),S.isVideoTexture&&h.delete(S)}function U(C){const S=C.target;S.removeEventListener("dispose",U),M(S)}function I(C){const S=i.get(C);if(S.__webglInit===void 0)return;const K=C.source,fe=d.get(K);if(fe){const te=fe[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(C),Object.keys(fe).length===0&&d.delete(K)}i.remove(C)}function T(C){const S=i.get(C);s.deleteTexture(S.__webglTexture);const K=C.source,fe=d.get(K);delete fe[S.__cacheKey],o.memory.textures--}function M(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(S.__webglFramebuffer[fe]))for(let te=0;te<S.__webglFramebuffer[fe].length;te++)s.deleteFramebuffer(S.__webglFramebuffer[fe][te]);else s.deleteFramebuffer(S.__webglFramebuffer[fe]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[fe])}else{if(Array.isArray(S.__webglFramebuffer))for(let fe=0;fe<S.__webglFramebuffer.length;fe++)s.deleteFramebuffer(S.__webglFramebuffer[fe]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let fe=0;fe<S.__webglColorRenderbuffer.length;fe++)S.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[fe]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const K=C.textures;for(let fe=0,te=K.length;fe<te;fe++){const Q=i.get(K[fe]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(K[fe])}i.remove(C)}let D=0;function R(){D=0}function L(){const C=D;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),D+=1,C}function A(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function O(C,S){const K=i.get(C);if(C.isVideoTexture&&le(C),C.isRenderTargetTexture===!1&&C.version>0&&K.__version!==C.version){const fe=C.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(K,C,S);return}}t.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+S)}function F(C,S){const K=i.get(C);if(C.version>0&&K.__version!==C.version){z(K,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+S)}function k(C,S){const K=i.get(C);if(C.version>0&&K.__version!==C.version){z(K,C,S);return}t.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+S)}function N(C,S){const K=i.get(C);if(C.version>0&&K.__version!==C.version){W(K,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+S)}const Y={[nr]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},H={[Wt]:s.NEAREST,[kh]:s.NEAREST_MIPMAP_NEAREST,[Ir]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[ks]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},V={[Fd]:s.NEVER,[Hd]:s.ALWAYS,[Bd]:s.LESS,[Zh]:s.LEQUAL,[kd]:s.EQUAL,[Vd]:s.GEQUAL,[zd]:s.GREATER,[Gd]:s.NOTEQUAL};function j(C,S){if(S.type===fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ht||S.magFilter===ks||S.magFilter===Ir||S.magFilter===Fn||S.minFilter===Ht||S.minFilter===ks||S.minFilter===Ir||S.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Y[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Y[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Y[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,H[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,H[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,V[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Ir&&S.minFilter!==Fn||S.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function me(C,S){let K=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",P));const fe=S.source;let te=d.get(fe);te===void 0&&(te={},d.set(fe,te));const Q=A(S);if(Q!==C.__cacheKey){te[Q]===void 0&&(te[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,K=!0),te[Q].usedTimes++;const _e=te[C.__cacheKey];_e!==void 0&&(te[C.__cacheKey].usedTimes--,_e.usedTimes===0&&T(S)),C.__cacheKey=Q,C.__webglTexture=te[Q].texture}return K}function z(C,S,K){let fe=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=s.TEXTURE_3D);const te=me(C,S),Q=S.source;t.bindTexture(fe,C.__webglTexture,s.TEXTURE0+K);const _e=i.get(Q);if(Q.version!==_e.__version||te===!0){t.activeTexture(s.TEXTURE0+K);const xe=it.getPrimaries(it.workingColorSpace),ye=S.colorSpace===ti?null:it.getPrimaries(S.colorSpace),Ge=S.colorSpace===ti||xe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ae=v(S.image,!1,n.maxTextureSize);ae=Te(S,ae);const Me=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type);let Fe=x(S.internalFormat,Me,Pe,S.colorSpace,S.isVideoTexture);j(fe,S);let Ae;const He=S.mipmaps,Oe=S.isVideoTexture!==!0,Ie=_e.__version===void 0||te===!0,G=Q.dataReady,we=E(S,ae);if(S.isDepthTexture)Fe=_(S.format===rr,S.type),Ie&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Me,Pe,null));else if(S.isDataTexture)if(He.length>0){Oe&&Ie&&t.texStorage2D(s.TEXTURE_2D,we,Fe,He[0].width,He[0].height);for(let ee=0,se=He.length;ee<se;ee++)Ae=He[ee],Oe?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Ae.width,Ae.height,Me,Pe,Ae.data):t.texImage2D(s.TEXTURE_2D,ee,Fe,Ae.width,Ae.height,0,Me,Pe,Ae.data);S.generateMipmaps=!1}else Oe?(Ie&&t.texStorage2D(s.TEXTURE_2D,we,Fe,ae.width,ae.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Pe,ae.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Me,Pe,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Fe,He[0].width,He[0].height,ae.depth);for(let ee=0,se=He.length;ee<se;ee++)if(Ae=He[ee],S.format!==rn)if(Me!==null)if(Oe){if(G)if(S.layerUpdates.size>0){const be=zc(Ae.width,Ae.height,S.format,S.type);for(const Ee of S.layerUpdates){const Ce=Ae.data.subarray(Ee*be/Ae.data.BYTES_PER_ELEMENT,(Ee+1)*be/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Ee,Ae.width,Ae.height,1,Me,Ce)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Ae.width,Ae.height,ae.depth,Me,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Fe,Ae.width,Ae.height,ae.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Ae.width,Ae.height,ae.depth,Me,Pe,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Fe,Ae.width,Ae.height,ae.depth,0,Me,Pe,Ae.data)}else{Oe&&Ie&&t.texStorage2D(s.TEXTURE_2D,we,Fe,He[0].width,He[0].height);for(let ee=0,se=He.length;ee<se;ee++)Ae=He[ee],S.format!==rn?Me!==null?Oe?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,Ae.width,Ae.height,Me,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Ae.width,Ae.height,Me,Pe,Ae.data):t.texImage2D(s.TEXTURE_2D,ee,Fe,Ae.width,Ae.height,0,Me,Pe,Ae.data)}else if(S.isDataArrayTexture)if(Oe){if(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Fe,ae.width,ae.height,ae.depth),G)if(S.layerUpdates.size>0){const ee=zc(ae.width,ae.height,S.format,S.type);for(const se of S.layerUpdates){const be=ae.data.subarray(se*ee/ae.data.BYTES_PER_ELEMENT,(se+1)*ee/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,ae.width,ae.height,1,Me,Pe,be)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Pe,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,Me,Pe,ae.data);else if(S.isData3DTexture)Oe?(Ie&&t.texStorage3D(s.TEXTURE_3D,we,Fe,ae.width,ae.height,ae.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Pe,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,Me,Pe,ae.data);else if(S.isFramebufferTexture){if(Ie)if(Oe)t.texStorage2D(s.TEXTURE_2D,we,Fe,ae.width,ae.height);else{let ee=ae.width,se=ae.height;for(let be=0;be<we;be++)t.texImage2D(s.TEXTURE_2D,be,Fe,ee,se,0,Me,Pe,null),ee>>=1,se>>=1}}else if(He.length>0){if(Oe&&Ie){const ee=ue(He[0]);t.texStorage2D(s.TEXTURE_2D,we,Fe,ee.width,ee.height)}for(let ee=0,se=He.length;ee<se;ee++)Ae=He[ee],Oe?G&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Me,Pe,Ae):t.texImage2D(s.TEXTURE_2D,ee,Fe,Me,Pe,Ae);S.generateMipmaps=!1}else if(Oe){if(Ie){const ee=ue(ae);t.texStorage2D(s.TEXTURE_2D,we,Fe,ee.width,ee.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Pe,ae)}else t.texImage2D(s.TEXTURE_2D,0,Fe,Me,Pe,ae);m(S)&&p(fe),_e.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function W(C,S,K){if(S.image.length!==6)return;const fe=me(C,S),te=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+K);const Q=i.get(te);if(te.version!==Q.__version||fe===!0){t.activeTexture(s.TEXTURE0+K);const _e=it.getPrimaries(it.workingColorSpace),xe=S.colorSpace===ti?null:it.getPrimaries(S.colorSpace),ye=S.colorSpace===ti||_e===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ge=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let se=0;se<6;se++)!Ge&&!ae?Me[se]=v(S.image[se],!0,n.maxCubemapSize):Me[se]=ae?S.image[se].image:S.image[se],Me[se]=Te(S,Me[se]);const Pe=Me[0],Fe=r.convert(S.format,S.colorSpace),Ae=r.convert(S.type),He=x(S.internalFormat,Fe,Ae,S.colorSpace),Oe=S.isVideoTexture!==!0,Ie=Q.__version===void 0||fe===!0,G=te.dataReady;let we=E(S,Pe);j(s.TEXTURE_CUBE_MAP,S);let ee;if(Ge){Oe&&Ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,He,Pe.width,Pe.height);for(let se=0;se<6;se++){ee=Me[se].mipmaps;for(let be=0;be<ee.length;be++){const Ee=ee[be];S.format!==rn?Fe!==null?Oe?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,Ee.width,Ee.height,Fe,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,He,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,Ee.width,Ee.height,Fe,Ae,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,He,Ee.width,Ee.height,0,Fe,Ae,Ee.data)}}}else{if(ee=S.mipmaps,Oe&&Ie){ee.length>0&&we++;const se=ue(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,we,He,se.width,se.height)}for(let se=0;se<6;se++)if(ae){Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Me[se].width,Me[se].height,Fe,Ae,Me[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,He,Me[se].width,Me[se].height,0,Fe,Ae,Me[se].data);for(let be=0;be<ee.length;be++){const Ce=ee[be].image[se].image;Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,Ce.width,Ce.height,Fe,Ae,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,He,Ce.width,Ce.height,0,Fe,Ae,Ce.data)}}else{Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,Ae,Me[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,He,Fe,Ae,Me[se]);for(let be=0;be<ee.length;be++){const Ee=ee[be];Oe?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,Fe,Ae,Ee.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,He,Fe,Ae,Ee.image[se])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),Q.__version=te.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function de(C,S,K,fe,te,Q){const _e=r.convert(K.format,K.colorSpace),xe=r.convert(K.type),ye=x(K.internalFormat,_e,xe,K.colorSpace),Ge=i.get(S),ae=i.get(K);if(ae.__renderTarget=S,!Ge.__hasExternalTextures){const Me=Math.max(1,S.width>>Q),Pe=Math.max(1,S.height>>Q);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,ye,Me,Pe,S.depth,0,_e,xe,null):t.texImage2D(te,Q,ye,Me,Pe,0,_e,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),he(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,te,ae.__webglTexture,0,Z(S)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,te,ae.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(C,S,K){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const fe=S.depthTexture,te=fe&&fe.isDepthTexture?fe.type:null,Q=_(S.stencilBuffer,te),_e=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=Z(S);he(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,Q,S.width,S.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,Q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,C)}else{const fe=S.textures;for(let te=0;te<fe.length;te++){const Q=fe[te],_e=r.convert(Q.format,Q.colorSpace),xe=r.convert(Q.type),ye=x(Q.internalFormat,_e,xe,Q.colorSpace),Ge=Z(S);K&&he(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,ye,S.width,S.height):he(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge,ye,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ye,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ce(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=i.get(S.depthTexture);fe.__renderTarget=S,(!fe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const te=fe.__webglTexture,Q=Z(S);if(S.depthTexture.format===$i)he(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(S.depthTexture.format===rr)he(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ge(C){const S=i.get(C),K=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const fe=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),fe){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,fe.removeEventListener("dispose",te)};fe.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=fe}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,C)}else if(K){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]===void 0)S.__webglDepthbuffer[fe]=s.createRenderbuffer(),ie(S.__webglDepthbuffer[fe],C,!1);else{const te=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ie(S.__webglDepthbuffer,C,!1);else{const fe=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(C,S,K){const fe=i.get(C);S!==void 0&&de(fe.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&ge(C)}function oe(C){const S=C.texture,K=i.get(C),fe=i.get(S);C.addEventListener("dispose",U);const te=C.textures,Q=C.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=S.version,o.memory.textures++),Q){K.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[xe]=[];for(let ye=0;ye<S.mipmaps.length;ye++)K.__webglFramebuffer[xe][ye]=s.createFramebuffer()}else K.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)K.__webglFramebuffer[xe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(_e)for(let xe=0,ye=te.length;xe<ye;xe++){const Ge=i.get(te[xe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&he(C)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let xe=0;xe<te.length;xe++){const ye=te[xe];K.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[xe]);const Ge=r.convert(ye.format,ye.colorSpace),ae=r.convert(ye.type),Me=x(ye.internalFormat,Ge,ae,ye.colorSpace,C.isXRRenderTarget===!0),Pe=Z(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Me,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,K.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(K.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),j(s.TEXTURE_CUBE_MAP,S);for(let xe=0;xe<6;xe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)de(K.__webglFramebuffer[xe][ye],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ye);else de(K.__webglFramebuffer[xe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let xe=0,ye=te.length;xe<ye;xe++){const Ge=te[xe],ae=i.get(Ge);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),j(s.TEXTURE_2D,Ge),de(K.__webglFramebuffer,C,Ge,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),m(Ge)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,fe.__webglTexture),j(xe,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)de(K.__webglFramebuffer[ye],C,S,s.COLOR_ATTACHMENT0,xe,ye);else de(K.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,xe,0);m(S)&&p(xe),t.unbindTexture()}C.depthBuffer&&ge(C)}function J(C){const S=C.textures;for(let K=0,fe=S.length;K<fe;K++){const te=S[K];if(m(te)){const Q=y(C),_e=i.get(te).__webglTexture;t.bindTexture(Q,_e),p(Q),t.unbindTexture()}}}const X=[],w=[];function pe(C){if(C.samples>0){if(he(C)===!1){const S=C.textures,K=C.width,fe=C.height;let te=s.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=i.get(C),xe=S.length>1;if(xe)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);const Ge=i.get(S[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,K,fe,0,0,K,fe,te,s.NEAREST),l===!0&&(X.length=0,w.length=0,X.push(s.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(X.push(Q),w.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,w)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);const Ge=i.get(S[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Z(C){return Math.min(n.maxSamples,C.samples)}function he(C){const S=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function le(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Te(C,S){const K=C.colorSpace,fe=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||K!==Xt&&K!==ti&&(it.getTransfer(K)===ht?(fe!==rn||te!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}function ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=N,this.rebindTextures=ve,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=de,this.useMultisampledRTT=he}function I0(s,e){function t(i,n=ti){let r;const o=it.getTransfer(n);if(i===Vn)return s.UNSIGNED_BYTE;if(i===il)return s.UNSIGNED_SHORT_4_4_4_4;if(i===rl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return s.BYTE;if(i===Gh)return s.SHORT;if(i===Wr)return s.UNSIGNED_SHORT;if(i===nl)return s.INT;if(i===bi)return s.UNSIGNED_INT;if(i===fn)return s.FLOAT;if(i===Zr)return s.HALF_FLOAT;if(i===Hh)return s.ALPHA;if(i===Wh)return s.RGB;if(i===rn)return s.RGBA;if(i===Xh)return s.LUMINANCE;if(i===qh)return s.LUMINANCE_ALPHA;if(i===$i)return s.DEPTH_COMPONENT;if(i===rr)return s.DEPTH_STENCIL;if(i===sl)return s.RED;if(i===ol)return s.RED_INTEGER;if(i===jh)return s.RG;if(i===al)return s.RG_INTEGER;if(i===ll)return s.RGBA_INTEGER;if(i===zs||i===Gs||i===Vs||i===Hs)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===va||i===_a||i===xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ya||i===Sa||i===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ya||i===Sa)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ma)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ta||i===Ea||i===ba||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===Ua||i===La||i===Ia||i===Da||i===Na||i===Oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ta)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ea)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ba)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Aa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ra)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ca)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ua)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===La)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ia)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Na)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ws||i===Fa||i===Ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ws)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yh||i===ka||i===za||i===Ga)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ws)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const D0={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new St,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new oi({vertexShader:N0,fragmentShader:O0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B0 extends hr{constructor(e,t){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new F0,m=t.getContextAttributes();let p=null,y=null;const x=[],_=[],E=new Re;let P=null;const U=new Vt;U.viewport=new at;const I=new Vt;I.viewport=new at;const T=[U,I],M=new qp;let D=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let W=x[z];return W===void 0&&(W=new Jo,x[z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(z){let W=x[z];return W===void 0&&(W=new Jo,x[z]=W),W.getGripSpace()},this.getHand=function(z){let W=x[z];return W===void 0&&(W=new Jo,x[z]=W),W.getHandSpace()};function L(z){const W=_.indexOf(z.inputSource);if(W===-1)return;const de=x[W];de!==void 0&&(de.update(z.inputSource,z.frame,c||o),de.dispatchEvent({type:z.type,data:z.inputSource}))}function A(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",A),n.removeEventListener("inputsourceschange",O);for(let z=0;z<x.length;z++){const W=_[z];W!==null&&(_[z]=null,x[z].disconnect(W))}D=null,R=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,n=null,y=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",A),n.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),n.enabledFeatures!==void 0&&n.enabledFeatures.includes("layers")){let de=null,ie=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?rr:$i,ie=m.stencil?ir:bi);const ge={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ge),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ai(d.textureWidth,d.textureHeight,{format:rn,type:Vn,depthTexture:new fu(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,de),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ai(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),me.setContext(n),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(z){for(let W=0;W<z.removed.length;W++){const de=z.removed[W],ie=_.indexOf(de);ie>=0&&(_[ie]=null,x[ie].disconnect(de))}for(let W=0;W<z.added.length;W++){const de=z.added[W];let ie=_.indexOf(de);if(ie===-1){for(let ge=0;ge<x.length;ge++)if(ge>=_.length){_.push(de),ie=ge;break}else if(_[ge]===null){_[ge]=de,ie=ge;break}if(ie===-1)break}const ce=x[ie];ce&&ce.connect(de)}}const F=new B,k=new B;function N(z,W,de){F.setFromMatrixPosition(W.matrixWorld),k.setFromMatrixPosition(de.matrixWorld);const ie=F.distanceTo(k),ce=W.projectionMatrix.elements,ge=de.projectionMatrix.elements,ve=ce[14]/(ce[10]-1),oe=ce[14]/(ce[10]+1),J=(ce[9]+1)/ce[5],X=(ce[9]-1)/ce[5],w=(ce[8]-1)/ce[0],pe=(ge[8]+1)/ge[0],Z=ve*w,he=ve*pe,le=ie/(-w+pe),Te=le*-w;if(W.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Te),z.translateZ(le),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ce[10]===-1)z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const ue=ve+le,C=oe+le,S=Z-Te,K=he+(ie-Te),fe=J*oe/C*ue,te=X*oe/C*ue;z.projectionMatrix.makePerspective(S,K,fe,te,ue,C),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Y(z,W){W===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(W.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;let W=z.near,de=z.far;v.texture!==null&&(v.depthNear>0&&(W=v.depthNear),v.depthFar>0&&(de=v.depthFar)),M.near=I.near=U.near=W,M.far=I.far=U.far=de,(D!==M.near||R!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,R=M.far),U.layers.mask=z.layers.mask|2,I.layers.mask=z.layers.mask|4,M.layers.mask=U.layers.mask|I.layers.mask;const ie=z.parent,ce=M.cameras;Y(M,ie);for(let ge=0;ge<ce.length;ge++)Y(ce[ge],ie);ce.length===2?N(M,U,I):M.projectionMatrix.copy(U.projectionMatrix),H(z,M,ie)};function H(z,W,de){de===null?z.matrix.copy(W.matrixWorld):(z.matrix.copy(de.matrixWorld),z.matrix.invert(),z.matrix.multiply(W.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(W.projectionMatrix),z.projectionMatrixInverse.copy(W.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=sr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let V=null;function j(z,W){if(h=W.getViewerPose(c||o),g=W,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ie=!1;de.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let ge=0;ge<de.length;ge++){const ve=de[ge];let oe=null;if(f!==null)oe=f.getViewport(ve);else{const X=u.getViewSubImage(d,ve);oe=X.viewport,ge===0&&(e.setRenderTargetTextures(y,X.colorTexture,d.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(y))}let J=T[ge];J===void 0&&(J=new Vt,J.layers.enable(ge),J.viewport=new at,T[ge]=J),J.matrix.fromArray(ve.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ve.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(oe.x,oe.y,oe.width,oe.height),ge===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(J)}const ce=n.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const ge=u.getDepthInformation(de[0]);ge&&ge.isValid&&ge.texture&&v.init(e,ge,n.renderState)}}for(let de=0;de<x.length;de++){const ie=_[de],ce=x[de];ie!==null&&ce!==void 0&&ce.update(ie,W,c||o)}V&&V(z,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}const me=new Uu;me.setAnimationLoop(j),this.setAnimationLoop=function(z){V=z},this.dispose=function(){}}}const vi=new bn,k0=new Ye;function z0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,su(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,vi.copy(_),vi.x*=-1,vi.y*=-1,vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(k0.makeRotationFromEuler(vi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function G0(s,e,t,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function c(y,x){let _=n[y.id];_===void 0&&(g(y),_=h(y),n[y.id]=_,y.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(y,E);const P=e.render.frame;r[y.id]!==P&&(d(y),r[y.id]=P)}function h(y){const x=u();y.__bindingPointIndex=x;const _=s.createBuffer(),E=y.__size,P=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=n[y.id],_=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let P=0,U=_.length;P<U;P++){const I=Array.isArray(_[P])?_[P]:[_[P]];for(let T=0,M=I.length;T<M;T++){const D=I[T];if(f(D,P,T,E)===!0){const R=D.__offset,L=Array.isArray(D.value)?D.value:[D.value];let A=0;for(let O=0;O<L.length;O++){const F=L[O],k=v(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,R+A,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,A),A+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,_,E){const P=y.value,U=x+"_"+_;if(E[U]===void 0)return typeof P=="number"||typeof P=="boolean"?E[U]=P:E[U]=P.clone(),!0;{const I=E[U];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return E[U]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function g(y){const x=y.uniforms;let _=0;const E=16;for(let U=0,I=x.length;U<I;U++){const T=Array.isArray(x[U])?x[U]:[x[U]];for(let M=0,D=T.length;M<D;M++){const R=T[M],L=Array.isArray(R.value)?R.value:[R.value];for(let A=0,O=L.length;A<O;A++){const F=L[A],k=v(F),N=_%E,Y=N%k.boundary,H=N+Y;_+=Y,H!==0&&E-H<k.storage&&(_+=E-H),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=_,_+=k.storage}}}const P=_%E;return P>0&&(_+=E-P),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function p(){for(const y in n)s.deleteBuffer(n[y]);o=[],n={},r={}}return{bind:l,update:c,dispose:p}}class dy{constructor(e={}){const{canvas:t=lf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=si,this.toneMappingExposure=1;const _=this;let E=!1,P=0,U=0,I=null,T=-1,M=null;const D=new at,R=new at;let L=null;const A=new Ve(0);let O=0,F=t.width,k=t.height,N=1,Y=null,H=null;const V=new at(0,0,F,k),j=new at(0,0,F,k);let me=!1;const z=new fl;let W=!1,de=!1;this.transmissionResolutionScale=1;const ie=new Ye,ce=new Ye,ge=new B,ve=new at,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function X(){return I===null?N:1}let w=i;function pe(b,q){return t.getContext(b,q)}try{const b={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),w===null){const q="webgl2";if(w=pe(q,b),w===null)throw pe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Z,he,le,Te,ue,C,S,K,fe,te,Q,_e,xe,ye,Ge,ae,Me,Pe,Fe,Ae,He,Oe,Ie,G;function we(){Z=new Jv(w),Z.init(),Oe=new I0(w,Z),he=new Xv(w,Z,e,Oe),le=new U0(w,Z),he.reverseDepthBuffer&&d&&le.buffers.depth.setReversed(!0),Te=new e_(w),ue=new _0,C=new L0(w,Z,le,ue,he,Oe,Te),S=new jv(_),K=new $v(_),fe=new am(w),Ie=new Hv(w,fe),te=new Zv(w,fe,Te,Ie),Q=new n_(w,te,fe,Te),Fe=new t_(w,he,C),ae=new qv(ue),_e=new v0(_,S,K,Z,he,Ie,ae),xe=new z0(_,ue),ye=new y0,Ge=new A0(Z),Pe=new Vv(_,S,K,le,Q,f,l),Me=new C0(_,Q,he),G=new G0(w,Te,he,le),Ae=new Wv(w,Z,Te),He=new Qv(w,Z,Te),Te.programs=_e.programs,_.capabilities=he,_.extensions=Z,_.properties=ue,_.renderLists=ye,_.shadowMap=Me,_.state=le,_.info=Te}we();const ee=new B0(_,w);this.xr=ee,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const b=Z.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Z.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(F,k,!1))},this.getSize=function(b){return b.set(F,k)},this.setSize=function(b,q,ne=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,k=q,t.width=Math.floor(b*N),t.height=Math.floor(q*N),ne===!0&&(t.style.width=b+"px",t.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(F*N,k*N).floor()},this.setDrawingBufferSize=function(b,q,ne){F=b,k=q,N=ne,t.width=Math.floor(b*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(V)},this.setViewport=function(b,q,ne,re){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,q,ne,re),le.viewport(D.copy(V).multiplyScalar(N).round())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,q,ne,re){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,q,ne,re),le.scissor(R.copy(j).multiplyScalar(N).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(b){le.setScissorTest(me=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){H=b},this.getClearColor=function(b){return b.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(b=!0,q=!0,ne=!0){let re=0;if(b){let $=!1;if(I!==null){const Se=I.texture.format;$=Se===ll||Se===al||Se===ol}if($){const Se=I.texture.type,Ue=Se===Vn||Se===bi||Se===Wr||Se===ir||Se===il||Se===rl,De=Pe.getClearColor(),Ne=Pe.getClearAlpha(),We=De.r,qe=De.g,Be=De.b;Ue?(g[0]=We,g[1]=qe,g[2]=Be,g[3]=Ne,w.clearBufferuiv(w.COLOR,0,g)):(v[0]=We,v[1]=qe,v[2]=Be,v[3]=Ne,w.clearBufferiv(w.COLOR,0,v))}else re|=w.COLOR_BUFFER_BIT}q&&(re|=w.DEPTH_BUFFER_BIT),ne&&(re|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Pe.dispose(),ye.dispose(),Ge.dispose(),ue.dispose(),S.dispose(),K.dispose(),Q.dispose(),Ie.dispose(),G.dispose(),_e.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",vn),ee.removeEventListener("sessionend",_n),Lt.stop()};function se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Te.autoReset,q=Me.enabled,ne=Me.autoUpdate,re=Me.needsUpdate,$=Me.type;we(),Te.autoReset=b,Me.enabled=q,Me.autoUpdate=ne,Me.needsUpdate=re,Me.type=$}function Ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ce(b){const q=b.target;q.removeEventListener("dispose",Ce),Xe(q)}function Xe(b){rt(b),ue.remove(b)}function rt(b){const q=ue.get(b).programs;q!==void 0&&(q.forEach(function(ne){_e.releaseProgram(ne)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,ne,re,$,Se){q===null&&(q=oe);const Ue=$.isMesh&&$.matrixWorld.determinant()<0,De=gr(b,q,ne,re,$);le.setMaterial(re,Ue);let Ne=ne.index,We=1;if(re.wireframe===!0){if(Ne=te.getWireframeAttribute(ne),Ne===void 0)return;We=2}const qe=ne.drawRange,Be=ne.attributes.position;let Qe=qe.start*We,tt=(qe.start+qe.count)*We;Se!==null&&(Qe=Math.max(Qe,Se.start*We),tt=Math.min(tt,(Se.start+Se.count)*We)),Ne!==null?(Qe=Math.max(Qe,0),tt=Math.min(tt,Ne.count)):Be!=null&&(Qe=Math.max(Qe,0),tt=Math.min(tt,Be.count));const pt=tt-Qe;if(pt<0||pt===1/0)return;Ie.setup($,re,De,ne,Ne);let st,nt=Ae;if(Ne!==null&&(st=fe.get(Ne),nt=He,nt.setIndex(st)),$.isMesh)re.wireframe===!0?(le.setLineWidth(re.wireframeLinewidth*X()),nt.setMode(w.LINES)):nt.setMode(w.TRIANGLES);else if($.isLine){let ze=re.linewidth;ze===void 0&&(ze=1),le.setLineWidth(ze*X()),$.isLineSegments?nt.setMode(w.LINES):$.isLineLoop?nt.setMode(w.LINE_LOOP):nt.setMode(w.LINE_STRIP)}else $.isPoints?nt.setMode(w.POINTS):$.isSprite&&nt.setMode(w.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)nt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ze=$._multiDrawStarts,gt=$._multiDrawCounts,ot=$._multiDrawCount,Dt=Ne?fe.get(Ne).bytesPerElement:1,on=ue.get(re).currentProgram.getUniforms();for(let Ct=0;Ct<ot;Ct++)on.setValue(w,"_gl_DrawID",Ct),nt.render(ze[Ct]/Dt,gt[Ct])}else if($.isInstancedMesh)nt.renderInstances(Qe,pt,$.count);else if(ne.isInstancedBufferGeometry){const ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,gt=Math.min(ne.instanceCount,ze);nt.renderInstances(Qe,pt,gt)}else nt.render(Qe,pt)};function je(b,q,ne){b.transparent===!0&&b.side===nn&&b.forceSinglePass===!1?(b.side=Kt,b.needsUpdate=!0,ai(b,q,ne),b.side=Gn,b.needsUpdate=!0,ai(b,q,ne),b.side=nn):ai(b,q,ne)}this.compile=function(b,q,ne=null){ne===null&&(ne=b),p=Ge.get(ne),p.init(q),x.push(p),ne.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),b!==ne&&b.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const re=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Se=$.material;if(Se)if(Array.isArray(Se))for(let Ue=0;Ue<Se.length;Ue++){const De=Se[Ue];je(De,ne,$),re.add(De)}else je(Se,ne,$),re.add(Se)}),x.pop(),p=null,re},this.compileAsync=function(b,q,ne=null){const re=this.compile(b,q,ne);return new Promise($=>{function Se(){if(re.forEach(function(Ue){ue.get(Ue).currentProgram.isReady()&&re.delete(Ue)}),re.size===0){$(b);return}setTimeout(Se,10)}Z.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let et=null;function ft(b){et&&et(b)}function vn(){Lt.stop()}function _n(){Lt.start()}const Lt=new Uu;Lt.setAnimationLoop(ft),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(b){et=b,ee.setAnimationLoop(b),b===null?Lt.stop():Lt.start()},ee.addEventListener("sessionstart",vn),ee.addEventListener("sessionend",_n),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(q),q=ee.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,q,I),p=Ge.get(b,x.length),p.init(q),x.push(p),ce.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z.setFromProjectionMatrix(ce),de=this.localClippingEnabled,W=ae.init(this.clippingPlanes,de),m=ye.get(b,y.length),m.init(),y.push(m),ee.enabled===!0&&ee.isPresenting===!0){const Se=_.xr.getDepthSensingMesh();Se!==null&&xn(Se,q,-1/0,_.sortObjects)}xn(b,q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Y,H),J=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,J&&Pe.addToRenderList(m,b),this.info.render.frame++,W===!0&&ae.beginShadows();const ne=p.state.shadowsArray;Me.render(ne,b,q),W===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=m.opaque,$=m.transmissive;if(p.setupLights(),q.isArrayCamera){const Se=q.cameras;if($.length>0)for(let Ue=0,De=Se.length;Ue<De;Ue++){const Ne=Se[Ue];It(re,$,b,Ne)}J&&Pe.render(b);for(let Ue=0,De=Se.length;Ue<De;Ue++){const Ne=Se[Ue];yn(m,b,Ne,Ne.viewport)}}else $.length>0&&It(re,$,b,q),J&&Pe.render(b),yn(m,b,q);I!==null&&U===0&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(_,b,q),Ie.resetDefaultState(),T=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],W===!0&&ae.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function xn(b,q,ne,re){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||z.intersectsSprite(b)){re&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const Ue=Q.update(b),De=b.material;De.visible&&m.push(b,Ue,De,ne,ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||z.intersectsObject(b))){const Ue=Q.update(b),De=b.material;if(re&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ve.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ve.copy(Ue.boundingSphere.center)),ve.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(De)){const Ne=Ue.groups;for(let We=0,qe=Ne.length;We<qe;We++){const Be=Ne[We],Qe=De[Be.materialIndex];Qe&&Qe.visible&&m.push(b,Ue,Qe,ne,ve.z,Be)}}else De.visible&&m.push(b,Ue,De,ne,ve.z,null)}}const Se=b.children;for(let Ue=0,De=Se.length;Ue<De;Ue++)xn(Se[Ue],q,ne,re)}function yn(b,q,ne,re){const $=b.opaque,Se=b.transmissive,Ue=b.transparent;p.setupLightsView(ne),W===!0&&ae.setGlobalState(_.clippingPlanes,ne),re&&le.viewport(D.copy(re)),$.length>0&&Qt($,q,ne),Se.length>0&&Qt(Se,q,ne),Ue.length>0&&Qt(Ue,q,ne),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function It(b,q,ne,re){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[re.id]===void 0&&(p.state.transmissionRenderTarget[re.id]=new Ai(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Zr:Vn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Se=p.state.transmissionRenderTarget[re.id],Ue=re.viewport||D;Se.setSize(Ue.z*_.transmissionResolutionScale,Ue.w*_.transmissionResolutionScale);const De=_.getRenderTarget();_.setRenderTarget(Se),_.getClearColor(A),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),J&&Pe.render(ne);const Ne=_.toneMapping;_.toneMapping=si;const We=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),p.setupLightsView(re),W===!0&&ae.setGlobalState(_.clippingPlanes,re),Qt(b,ne,re),C.updateMultisampleRenderTarget(Se),C.updateRenderTargetMipmap(Se),Z.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Be=0,Qe=q.length;Be<Qe;Be++){const tt=q[Be],pt=tt.object,st=tt.geometry,nt=tt.material,ze=tt.group;if(nt.side===nn&&pt.layers.test(re.layers)){const gt=nt.side;nt.side=Kt,nt.needsUpdate=!0,ns(pt,ne,re,st,nt,ze),nt.side=gt,nt.needsUpdate=!0,qe=!0}}qe===!0&&(C.updateMultisampleRenderTarget(Se),C.updateRenderTargetMipmap(Se))}_.setRenderTarget(De),_.setClearColor(A,O),We!==void 0&&(re.viewport=We),_.toneMapping=Ne}function Qt(b,q,ne){const re=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Se=b.length;$<Se;$++){const Ue=b[$],De=Ue.object,Ne=Ue.geometry,We=re===null?Ue.material:re,qe=Ue.group;De.layers.test(ne.layers)&&ns(De,q,ne,Ne,We,qe)}}function ns(b,q,ne,re,$,Se){b.onBeforeRender(_,q,ne,re,$,Se),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(_,q,ne,re,b,Se),$.transparent===!0&&$.side===nn&&$.forceSinglePass===!1?($.side=Kt,$.needsUpdate=!0,_.renderBufferDirect(ne,q,re,$,b,Se),$.side=Gn,$.needsUpdate=!0,_.renderBufferDirect(ne,q,re,$,b,Se),$.side=nn):_.renderBufferDirect(ne,q,re,$,b,Se),b.onAfterRender(_,q,ne,re,$,Se)}function ai(b,q,ne){q.isScene!==!0&&(q=oe);const re=ue.get(b),$=p.state.lights,Se=p.state.shadowsArray,Ue=$.state.version,De=_e.getParameters(b,$.state,Se,q,ne),Ne=_e.getProgramCacheKey(De);let We=re.programs;re.environment=b.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(b.isMeshStandardMaterial?K:S).get(b.envMap||re.environment),re.envMapRotation=re.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",Ce),We=new Map,re.programs=We);let qe=We.get(Ne);if(qe!==void 0){if(re.currentProgram===qe&&re.lightsStateVersion===Ue)return Ri(b,De),qe}else De.uniforms=_e.getUniforms(b),b.onBeforeCompile(De,_),qe=_e.acquireProgram(De,Ne),We.set(Ne,qe),re.uniforms=De.uniforms;const Be=re.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Be.clippingPlanes=ae.uniform),Ri(b,De),re.needsLights=ci(b),re.lightsStateVersion=Ue,re.needsLights&&(Be.ambientLightColor.value=$.state.ambient,Be.lightProbe.value=$.state.probe,Be.directionalLights.value=$.state.directional,Be.directionalLightShadows.value=$.state.directionalShadow,Be.spotLights.value=$.state.spot,Be.spotLightShadows.value=$.state.spotShadow,Be.rectAreaLights.value=$.state.rectArea,Be.ltc_1.value=$.state.rectAreaLTC1,Be.ltc_2.value=$.state.rectAreaLTC2,Be.pointLights.value=$.state.point,Be.pointLightShadows.value=$.state.pointShadow,Be.hemisphereLights.value=$.state.hemi,Be.directionalShadowMap.value=$.state.directionalShadowMap,Be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Be.spotShadowMap.value=$.state.spotShadowMap,Be.spotLightMatrix.value=$.state.spotLightMatrix,Be.spotLightMap.value=$.state.spotLightMap,Be.pointShadowMap.value=$.state.pointShadowMap,Be.pointShadowMatrix.value=$.state.pointShadowMatrix),re.currentProgram=qe,re.uniformsList=null,qe}function li(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Xs.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Ri(b,q){const ne=ue.get(b);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function gr(b,q,ne,re,$){q.isScene!==!0&&(q=oe),C.resetTextureUnits();const Se=q.fog,Ue=re.isMeshStandardMaterial?q.environment:null,De=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Xt,Ne=(re.isMeshStandardMaterial?K:S).get(re.envMap||Ue),We=re.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,qe=!!ne.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Be=!!ne.morphAttributes.position,Qe=!!ne.morphAttributes.normal,tt=!!ne.morphAttributes.color;let pt=si;re.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pt=_.toneMapping);const st=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,nt=st!==void 0?st.length:0,ze=ue.get(re),gt=p.state.lights;if(W===!0&&(de===!0||b!==M)){const wt=b===M&&re.id===T;ae.setState(re,b,wt)}let ot=!1;re.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==gt.state.version||ze.outputColorSpace!==De||$.isBatchedMesh&&ze.batching===!1||!$.isBatchedMesh&&ze.batching===!0||$.isBatchedMesh&&ze.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ze.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ze.instancing===!1||!$.isInstancedMesh&&ze.instancing===!0||$.isSkinnedMesh&&ze.skinning===!1||!$.isSkinnedMesh&&ze.skinning===!0||$.isInstancedMesh&&ze.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ze.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ze.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ze.instancingMorph===!1&&$.morphTexture!==null||ze.envMap!==Ne||re.fog===!0&&ze.fog!==Se||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ae.numPlanes||ze.numIntersection!==ae.numIntersection)||ze.vertexAlphas!==We||ze.vertexTangents!==qe||ze.morphTargets!==Be||ze.morphNormals!==Qe||ze.morphColors!==tt||ze.toneMapping!==pt||ze.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,ze.__version=re.version);let Dt=ze.currentProgram;ot===!0&&(Dt=ai(re,q,$));let on=!1,Ct=!1,Xn=!1;const ut=Dt.getUniforms(),Nt=ze.uniforms;if(le.useProgram(Dt.program)&&(on=!0,Ct=!0,Xn=!0),re.id!==T&&(T=re.id,Ct=!0),on||M!==b){le.buffers.depth.getReversed()?(ie.copy(b.projectionMatrix),hf(ie),uf(ie),ut.setValue(w,"projectionMatrix",ie)):ut.setValue(w,"projectionMatrix",b.projectionMatrix),ut.setValue(w,"viewMatrix",b.matrixWorldInverse);const Mt=ut.map.cameraPosition;Mt!==void 0&&Mt.setValue(w,ge.setFromMatrixPosition(b.matrixWorld)),he.logarithmicDepthBuffer&&ut.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&ut.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ct=!0,Xn=!0)}if($.isSkinnedMesh){ut.setOptional(w,$,"bindMatrix"),ut.setOptional(w,$,"bindMatrixInverse");const wt=$.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ut.setValue(w,"boneTexture",wt.boneTexture,C))}$.isBatchedMesh&&(ut.setOptional(w,$,"batchingTexture"),ut.setValue(w,"batchingTexture",$._matricesTexture,C),ut.setOptional(w,$,"batchingIdTexture"),ut.setValue(w,"batchingIdTexture",$._indirectTexture,C),ut.setOptional(w,$,"batchingColorTexture"),$._colorsTexture!==null&&ut.setValue(w,"batchingColorTexture",$._colorsTexture,C));const At=ne.morphAttributes;if((At.position!==void 0||At.normal!==void 0||At.color!==void 0)&&Fe.update($,ne,Dt),(Ct||ze.receiveShadow!==$.receiveShadow)&&(ze.receiveShadow=$.receiveShadow,ut.setValue(w,"receiveShadow",$.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Nt.envMap.value=Ne,Nt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(Nt.envMapIntensity.value=q.environmentIntensity),Ct&&(ut.setValue(w,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&ke(Nt,Xn),Se&&re.fog===!0&&xe.refreshFogUniforms(Nt,Se),xe.refreshMaterialUniforms(Nt,re,N,k,p.state.transmissionRenderTarget[b.id]),Xs.upload(w,li(ze),Nt,C)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Xs.upload(w,li(ze),Nt,C),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&ut.setValue(w,"center",$.center),ut.setValue(w,"modelViewMatrix",$.modelViewMatrix),ut.setValue(w,"normalMatrix",$.normalMatrix),ut.setValue(w,"modelMatrix",$.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const wt=re.uniformsGroups;for(let Mt=0,Sn=wt.length;Mt<Sn;Mt++){const qt=wt[Mt];G.update(qt,Dt),G.bind(qt,Dt)}}return Dt}function ke(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function ci(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,q,ne){ue.get(b.texture).__webglTexture=q,ue.get(b.depthTexture).__webglTexture=ne;const re=ue.get(b);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ne===void 0,re.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,q){const ne=ue.get(b);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};const oo=w.createFramebuffer();this.setRenderTarget=function(b,q=0,ne=0){I=b,P=q,U=ne;let re=!0,$=null,Se=!1,Ue=!1;if(b){const Ne=ue.get(b);if(Ne.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(w.FRAMEBUFFER,null),re=!1;else if(Ne.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Ne.__hasExternalTextures)C.rebindTextures(b,ue.get(b.texture).__webglTexture,ue.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Be=b.depthTexture;if(Ne.__boundDepthTexture!==Be){if(Be!==null&&ue.has(Be)&&(b.width!==Be.image.width||b.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ue=!0);const qe=ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?$=qe[q][ne]:$=qe[q],Se=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?$=ue.get(b).__webglMultisampledFramebuffer:Array.isArray(qe)?$=qe[ne]:$=qe,D.copy(b.viewport),R.copy(b.scissor),L=b.scissorTest}else D.copy(V).multiplyScalar(N).floor(),R.copy(j).multiplyScalar(N).floor(),L=me;if(ne!==0&&($=oo),le.bindFramebuffer(w.FRAMEBUFFER,$)&&re&&le.drawBuffers(b,$),le.viewport(D),le.scissor(R),le.setScissorTest(L),Se){const Ne=ue.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,ne)}else if(Ue){const Ne=ue.get(b.texture),We=q;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ne.__webglTexture,ne,We)}else if(b!==null&&ne!==0){const Ne=ue.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ne.__webglTexture,ne)}T=-1},this.readRenderTargetPixels=function(b,q,ne,re,$,Se,Ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue]),De){le.bindFramebuffer(w.FRAMEBUFFER,De);try{const Ne=b.texture,We=Ne.format,qe=Ne.type;if(!he.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-re&&ne>=0&&ne<=b.height-$&&w.readPixels(q,ne,re,$,Oe.convert(We),Oe.convert(qe),Se)}finally{const Ne=I!==null?ue.get(I).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(b,q,ne,re,$,Se,Ue){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(De=De[Ue]),De){const Ne=b.texture,We=Ne.format,qe=Ne.type;if(!he.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=b.width-re&&ne>=0&&ne<=b.height-$){le.bindFramebuffer(w.FRAMEBUFFER,De);const Be=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Be),w.bufferData(w.PIXEL_PACK_BUFFER,Se.byteLength,w.STREAM_READ),w.readPixels(q,ne,re,$,Oe.convert(We),Oe.convert(qe),0);const Qe=I!==null?ue.get(I).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,Qe);const tt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await cf(w,tt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Be),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Se),w.deleteBuffer(Be),w.deleteSync(tt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,q=null,ne=0){b.isTexture!==!0&&(qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1]);const re=Math.pow(2,-ne),$=Math.floor(b.image.width*re),Se=Math.floor(b.image.height*re),Ue=q!==null?q.x:0,De=q!==null?q.y:0;C.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,ne,0,0,Ue,De,$,Se),le.unbindTexture()};const Wn=w.createFramebuffer(),Ci=w.createFramebuffer();this.copyTextureToTexture=function(b,q,ne=null,re=null,$=0,Se=null){b.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture function signature has changed."),re=arguments[0]||null,b=arguments[1],q=arguments[2],Se=arguments[3]||0,ne=null),Se===null&&($!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=$,$=0):Se=0);let Ue,De,Ne,We,qe,Be,Qe,tt,pt;const st=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(ne!==null)Ue=ne.max.x-ne.min.x,De=ne.max.y-ne.min.y,Ne=ne.isBox3?ne.max.z-ne.min.z:1,We=ne.min.x,qe=ne.min.y,Be=ne.isBox3?ne.min.z:0;else{const At=Math.pow(2,-$);Ue=Math.floor(st.width*At),De=Math.floor(st.height*At),b.isDataArrayTexture?Ne=st.depth:b.isData3DTexture?Ne=Math.floor(st.depth*At):Ne=1,We=0,qe=0,Be=0}re!==null?(Qe=re.x,tt=re.y,pt=re.z):(Qe=0,tt=0,pt=0);const nt=Oe.convert(q.format),ze=Oe.convert(q.type);let gt;q.isData3DTexture?(C.setTexture3D(q,0),gt=w.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(C.setTexture2DArray(q,0),gt=w.TEXTURE_2D_ARRAY):(C.setTexture2D(q,0),gt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,q.unpackAlignment);const ot=w.getParameter(w.UNPACK_ROW_LENGTH),Dt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),on=w.getParameter(w.UNPACK_SKIP_PIXELS),Ct=w.getParameter(w.UNPACK_SKIP_ROWS),Xn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,st.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,st.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,We),w.pixelStorei(w.UNPACK_SKIP_ROWS,qe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Be);const ut=b.isDataArrayTexture||b.isData3DTexture,Nt=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const At=ue.get(b),wt=ue.get(q),Mt=ue.get(At.__renderTarget),Sn=ue.get(wt.__renderTarget);le.bindFramebuffer(w.READ_FRAMEBUFFER,Mt.__webglFramebuffer),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let qt=0;qt<Ne;qt++)ut&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ue.get(b).__webglTexture,$,Be+qt),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ue.get(q).__webglTexture,Se,pt+qt)),w.blitFramebuffer(We,qe,Ue,De,Qe,tt,Ue,De,w.DEPTH_BUFFER_BIT,w.NEAREST);le.bindFramebuffer(w.READ_FRAMEBUFFER,null),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||ue.has(b)){const At=ue.get(b),wt=ue.get(q);le.bindFramebuffer(w.READ_FRAMEBUFFER,Wn),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ci);for(let Mt=0;Mt<Ne;Mt++)ut?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,At.__webglTexture,$,Be+Mt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,At.__webglTexture,$),Nt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,wt.__webglTexture,Se,pt+Mt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,wt.__webglTexture,Se),$!==0?w.blitFramebuffer(We,qe,Ue,De,Qe,tt,Ue,De,w.COLOR_BUFFER_BIT,w.NEAREST):Nt?w.copyTexSubImage3D(gt,Se,Qe,tt,pt+Mt,We,qe,Ue,De):w.copyTexSubImage2D(gt,Se,Qe,tt,We,qe,Ue,De);le.bindFramebuffer(w.READ_FRAMEBUFFER,null),le.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Nt?b.isDataTexture||b.isData3DTexture?w.texSubImage3D(gt,Se,Qe,tt,pt,Ue,De,Ne,nt,ze,st.data):q.isCompressedArrayTexture?w.compressedTexSubImage3D(gt,Se,Qe,tt,pt,Ue,De,Ne,nt,st.data):w.texSubImage3D(gt,Se,Qe,tt,pt,Ue,De,Ne,nt,ze,st):b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Se,Qe,tt,Ue,De,nt,ze,st.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Se,Qe,tt,st.width,st.height,nt,st.data):w.texSubImage2D(w.TEXTURE_2D,Se,Qe,tt,Ue,De,nt,ze,st);w.pixelStorei(w.UNPACK_ROW_LENGTH,ot),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Dt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,on),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ct),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Xn),Se===0&&q.generateMipmaps&&w.generateMipmap(gt),le.unbindTexture()},this.copyTextureToTexture3D=function(b,q,ne=null,re=null,$=0){return b.isTexture!==!0&&(qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,re=arguments[1]||null,b=arguments[2],q=arguments[3],$=arguments[4]||0),qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,q,ne,re,$)},this.initRenderTarget=function(b){ue.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),le.unbindTexture()},this.resetState=function(){P=0,U=0,I=null,le.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}function uh(s,e){if(e===Dd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Va||e===Kh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,n=[];if(e===Va)for(let o=1;o<=i;o++)n.push(t.getX(0)),n.push(t.getX(o)),n.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(n.push(t.getX(o)),n.push(t.getX(o+1)),n.push(t.getX(o+2))):(n.push(t.getX(o+2)),n.push(t.getX(o+1)),n.push(t.getX(o)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class V0 extends fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new j0(t)}),this.register(function(t){return new Y0(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new $0(t)}),this.register(function(t){return new J0(t)}),this.register(function(t){return new Z0(t)}),this.register(function(t){return new Q0(t)}),this.register(function(t){return new q0(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new ax(t)})}load(e,t,i,n){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Gr.extractUrlBase(e);o=Gr.resolveURL(c,this.path)}else o=Gr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Pu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ou){try{o[Ze.KHR_BINARY_GLTF]=new lx(e)}catch(u){n&&n(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Sx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new X0;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new cx(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new hx;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new ux;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function H0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class W0{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Xt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Vp(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zp(h),c.distance=u;break;case"spot":c=new Bp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,On(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class X0{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,i){const n=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(n)}}class q0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class j0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(a,a)}return Promise.all(r)}}class Y0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class K0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class $0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=n.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ut)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class J0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Z0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],Xt),Promise.all(r)}}class Q0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ex{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ut)),Promise.all(r)}}class tx{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class nx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],o=n.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ix{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class rx{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sx{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=n.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ox{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class ax{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Ye,m=new B,p=new Hn,y=new B(1,1,1),x=new kf(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,v.compose(m,p,y));for(const _ in l)if(_==="_COLOR_0"){const E=l[_];x.instanceColor=new Js(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);dt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Ou="glTF",Ur=12,dh={JSON:1313821514,BIN:5130562};class lx{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ur),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ou)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ur,r=new DataView(e,Ur);let o=0;for(;o<n;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===dh.JSON){const c=new Uint8Array(e,Ur+o,a);this.content=i.decode(c)}else if(l===dh.BIN){const c=Ur+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Ka[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ka[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=Zi[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},a,c,Xt,d)})})}}class hx{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ux{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Fu extends ts{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let o=0;o!==n;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+u;for(let _=0;_!==a;_++){const E=o[v+_+a],P=o[v+_+l]*h,U=o[g+_+a],I=o[g+_]*h;r[_]=y*E+x*P+m*U+p*I}return r}}const dx=new Hn;class fx extends Fu{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return dx.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fh={9728:Wt,9729:Ht,9984:kh,9985:ks,9986:Ir,9987:Fn},ph={33071:ni,33648:Ys,10497:nr},Zo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ka={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},px={CUBICSPLINE:void 0,LINEAR:qr,STEP:Xr},Qo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),s.DefaultMaterial}function _i(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function On(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gx(s,e,t){let i=!1,n=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function vx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _x(s){let e;const t=s.extensions&&s.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ea(t.attributes):e=s.indices+":"+ea(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+ea(s.targets[i]);return e}function ea(s){let e="";const t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function $a(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yx=new Ye;class Sx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new H0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&o<98?this.textureLoader=new Np(this.options.manager):this.textureLoader=new Wp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][n.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:n.asset,parser:i,userData:{}};return _i(r,a,n),On(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const o=t[n].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const o=e[n];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,o){i.load(Gr.resolveURL(t.uri,n.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const o=Zo[n.type],a=Zi[n.componentType],l=n.normalized===!0,c=new a(n.count*o);return Promise.resolve(new kt(c,o,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Zo[n.type],c=Zi[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count;let x=t.cache.get(y);x||(v=new c(a,p*f,n.count*f/h),x=new Df(v,f/h),t.cache.add(y,x)),m=new ul(x,l,d%f/h,g)}else a===null?v=new c(n.count*l):v=new c(a,d,n.count*l),m=new kt(v,l,g);if(n.sparse!==void 0){const p=Zo.SCALAR,y=Zi[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,_=n.sparse.values.byteOffset||0,E=new y(o[1],x,n.sparse.count*p),P=new c(o[2],_,n.sparse.count*l);a!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let U=0,I=E.length;U<I;U++){const T=E[U];if(m.setX(T,P[U*l]),l>=2&&m.setY(T,P[U*l+1]),l>=3&&m.setZ(T,P[U*l+2]),l>=4&&m.setW(T,P[U*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const n=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=fh[d.magFilter]||Ht,h.minFilter=fh[d.minFilter]||Fn,h.wrapS=ph[d.wrapS]||nr,h.wrapT=ph[d.wrapT]||nr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==Ht,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=n.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new St(v);m.needsUpdate=!0,d(m)}),t.load(Gr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),On(u,o),u.userData.mimeType=o.mimeType||xx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return n!==void 0&&(o.colorSpace=n),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new du,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new pl,En.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(n||r||o){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return xl}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const u=n[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Xt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ut)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=nn);const h=r.alphaMode||Qo.OPAQUE;if(h===Qo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Qo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Bt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Bt){const u=r.emissiveFactor;a.emissive=new Ve().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&o!==Bt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),On(u,r),t.associations.set(u,{materials:e}),r.extensions&&_i(n,u,r),u})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return mh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=_x(c),u=n[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=mh(new Tt,c,t),n[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?mx(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=o[f];let p;const y=c[f];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Of(v,y):new mt(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?p.geometry=uh(p.geometry,Kh):m.mode===tn.TRIANGLE_FAN&&(p.geometry=uh(p.geometry,Va));else if(m.mode===tn.LINES)p=new Vf(v,y);else if(m.mode===tn.LINE_STRIP)p=new Yr(v,y);else if(m.mode===tn.LINE_LOOP)p=new Hf(v,y);else if(m.mode===tn.POINTS)p=new Wf(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&vx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),On(p,r),m.extensions&&_i(n,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&_i(n,u[0],r),u[0];const d=new kn;r.extensions&&_i(n,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Vt(af.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Sl(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),On(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),o=n,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new dl(a,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const f=n.channels[u],g=n.samplers[f.sampler],v=f.target,m=v.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,y=n.parameters!==void 0?n.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let y=0,x=d.length;y<x;y++){const _=d[y],E=f[y],P=g[y],U=v[y],I=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const T=i._createAnimationTracks(_,E,P,U,I);if(T)for(let M=0;M<T.length;M++)p.push(T[M])}return new Rp(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),o})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=n.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,yx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?n.createUniqueName(r.name):"",a=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new hu:c.length>1?h=new kn:c.length===1?h=c[0]:h=new dt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),On(h,r),r.extensions&&_i(i,h,r),r.matrix!==void 0){const u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new kn;i.name&&(r.name=n.createUniqueName(i.name)),On(r,i),i.extensions&&_i(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(n.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof En||d instanceof St)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const o=[],a=e.name?e.name:e.uuid,l=[];ei[r.path]===ei.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ei[r.path]){case ei.weights:c=ar;break;case ei.rotation:c=lr;break;case ei.position:case ei.scale:c=cr;break;default:switch(i.itemSize){case 1:c=ar;break;case 2:case 3:default:c=cr;break}break}const h=n.interpolation!==void 0?px[n.interpolation]:qr,u=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ei[r.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=$a(t.constructor),n=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof lr?fx:Fu;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Mx(s,e,t){const i=e.attributes,n=new mn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const h=$a(Zi[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=$a(Zi[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}s.boundingBox=n;const o=new gn;n.getCenter(o.center),o.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=o}function mh(s,e,t){const i=e.attributes,n=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in i){const a=Ka[o]||o.toLowerCase();a in s.attributes||n.push(r(i[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});n.push(o)}return it.workingColorSpace!==Xt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),On(s,e),Mx(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?gx(s,e.targets,t):s})}const xt={ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function Bu(s){const e=await fetch(s);if(e.ok)return e.json();throw new Error(e.statusText)}async function Tx(s){if(!s)throw new Error("No basePath supplied");return await Bu(`${s}/profilesList.json`)}async function Ex(s,e,t=null,i=!0){if(!s)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const n=await Tx(e);let r;if(s.profiles.some(l=>{const c=n[l];return c&&(r={profileId:l,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}),!!r}),!r){if(!t)throw new Error("No matching profile name found");const l=n[t];if(!l)throw new Error(`No matching profile name found and default profile "${t}" missing.`);r={profileId:t,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}}const o=await Bu(r.profilePath);let a;if(i){let l;if(s.handedness==="any"?l=o.layouts[Object.keys(o.layouts)[0]]:l=o.layouts[s.handedness],!l)throw new Error(`No matching handedness, ${s.handedness}, in profile ${r.profileId}`);l.assetPath&&(a=r.profilePath.replace("profile.json",l.assetPath))}return{profile:o,assetPath:a}}const bx={xAxis:0,yAxis:0,button:0,state:xt.ComponentState.DEFAULT};function Ax(s=0,e=0){let t=s,i=e;if(Math.sqrt(s*s+e*e)>1){const o=Math.atan2(e,s);t=Math.cos(o),i=Math.sin(o)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:i*.5+.5}}class wx{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===xt.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(bx)}updateFromComponent({xAxis:e,yAxis:t,button:i,state:n}){const{normalizedXAxis:r,normalizedYAxis:o}=Ax(e,t);switch(this.componentProperty){case xt.ComponentProperty.X_AXIS:this.value=this.states.includes(n)?r:.5;break;case xt.ComponentProperty.Y_AXIS:this.value=this.states.includes(n)?o:.5;break;case xt.ComponentProperty.BUTTON:this.value=this.states.includes(n)?i:0;break;case xt.ComponentProperty.STATE:this.valueNodeProperty===xt.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(n):this.value=this.states.includes(n)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class Rx{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(i=>{const n=new wx(t.visualResponses[i]);this.visualResponses[i]=n}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:xt.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=xt.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=xt.ComponentState.PRESSED:(t.touched||this.values.button>xt.ButtonTouchThreshold)&&(this.values.state=xt.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===xt.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>xt.AxisTouchThreshold&&(this.values.state=xt.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===xt.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>xt.AxisTouchThreshold&&(this.values.state=xt.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class Cx{constructor(e,t,i){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=i,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(n=>{const r=this.layoutDescription.components[n];this.components[n]=new Rx(n,r)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const Px="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",Ux="generic-trigger";class Lx extends dt{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(i=>{const{valueNode:n,minNode:r,maxNode:o,value:a,valueNodeProperty:l}=i;n&&(l===xt.VisualResponseProperty.VISIBILITY?n.visible=a:l===xt.VisualResponseProperty.TRANSFORM&&(n.quaternion.slerpQuaternions(r.quaternion,o.quaternion,a),n.position.lerpVectors(r.position,o.position,a)))})}))}}function Ix(s,e){Object.values(s.components).forEach(t=>{const{type:i,touchPointNodeName:n,visualResponses:r}=t;if(i===xt.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(n),t.touchPointNode){const o=new _l(.001),a=new Bt({color:255}),l=new mt(o,a);t.touchPointNode.add(l)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(r).forEach(o=>{const{valueNodeName:a,minNodeName:l,maxNodeName:c,valueNodeProperty:h}=o;if(h===xt.VisualResponseProperty.TRANSFORM){if(o.minNode=e.getObjectByName(l),o.maxNode=e.getObjectByName(c),!o.minNode){console.warn(`Could not find ${l} in the model`);return}if(!o.maxNode){console.warn(`Could not find ${c} in the model`);return}}o.valueNode=e.getObjectByName(a),o.valueNode||console.warn(`Could not find ${a} in the model`)})})}function gh(s,e){Ix(s.motionController,e),s.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=s.envMap,t.material.needsUpdate=!0)}),s.add(e)}class Dx{constructor(e=null,t=null){this.gltfLoader=e,this.path=Px,this._assetCache={},this.onLoad=t,this.gltfLoader||(this.gltfLoader=new V0)}setPath(e){return this.path=e,this}createControllerModel(e){const t=new Lx;let i=null;return e.addEventListener("connected",n=>{const r=n.data;r.targetRayMode!=="tracked-pointer"||!r.gamepad||r.hand||Ex(r,this.path,Ux).then(({profile:o,assetPath:a})=>{t.motionController=new Cx(r,o,a);const l=this._assetCache[t.motionController.assetUrl];if(l)i=l.scene.clone(),gh(t,i),this.onLoad&&this.onLoad(i);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,c=>{this._assetCache[t.motionController.assetUrl]=c,i=c.scene.clone(),gh(t,i),this.onLoad&&this.onLoad(i)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(o=>{console.warn(o)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(i),i=null}),t}}function vh(s,e,t,i=.02){const n=-s/2,r=-e/2,o=new yu;o.moveTo(n+t,r),o.lineTo(n+s-t,r),o.absarc(n+s-t,r+t,t,1.5*Math.PI,0,!1),o.lineTo(n+s,r+e-t),o.absarc(n+s-t,r+e-t,t,0,.5*Math.PI,!1),o.lineTo(n+t,r+e),o.absarc(n+t,r+e-t,t,.5*Math.PI,Math.PI,!1),o.lineTo(n,r+t),o.absarc(n+t,r+t,t,Math.PI,1.5*Math.PI,!1);const a=new vl(o,{depth:i,bevelEnabled:!1,steps:1});return a.center(),a}const _h=new pl({color:16711680}),fy=class{constructor(s){this.leftControllerState="idle",this.rightControllerState="idle",this.noneControllerState="idle";const e=new Tt().setFromPoints([new B(0,0,-.05),new B(0,0,-20)]),t=new Yr(e,_h);t.frustumCulled=!1,t.name="line",this.controller1=s.xr.getController(0),this.controller1.userData.handedness="left",this.controller1.add(t);const i=new Tt().setFromPoints([new B(0,0,-.05),new B(0,0,-20)]),n=new Yr(i,_h);n.frustumCulled=!1,n.name="line",this.controller2=s.xr.getController(1),this.controller2.userData.handedness="right",this.controller2.add(n);const r=new Dx;this.controllerGrip1=s.xr.getControllerGrip(0),this.controllerGrip1.add(r.createControllerModel(this.controllerGrip1)),this.controllerGrip2=s.xr.getControllerGrip(1),this.controllerGrip2.add(r.createControllerModel(this.controllerGrip2))}selectstart(s){s.data&&(this[`${s.data.handedness}ControllerState`]="selected")}selectend(s){s.data&&(this[`${s.data.handedness}ControllerState`]="idle")}addEventListenerWithAbort(s,e,t,i){this[`controller${s}`].addEventListener(e,t),i.addEventListener("abort",()=>{this[`controller${s}`].removeEventListener(e,t)},{once:!0})}getGrip(s){return s.handedness==="left"?this.controllerGrip1:this.controllerGrip2}};class py{constructor(e){this.raycasterObjects=new Bc,this.raycasterObjects.camera=e,this.raycasterPoints=new Bc,this.raycasterPoints.camera=e,this.raycasterPoints.params.Points.threshold=20,this.tempMatrix=new Ye}getIntersection(e,t){this.tempMatrix.identity().extractRotation(e.matrixWorld),this.raycasterPoints.ray.origin.setFromMatrixPosition(e.matrixWorld),this.raycasterPoints.ray.direction.set(0,0,-1).applyMatrix4(this.tempMatrix);const i=this.raycasterPoints.intersectObjects(t,!0);return i.length>0?i[0]:void 0}getIntersectionReturnObject(e,t){return this.tempMatrix.identity().extractRotation(e.matrixWorld),this.raycasterObjects.ray.origin.setFromMatrixPosition(e.matrixWorld),this.raycasterObjects.ray.direction.set(0,0,-1).applyMatrix4(this.tempMatrix),t.reduce((i,n)=>{const r=this.raycasterObjects.intersectObject(n,!0);return r[0]&&(!i||r[0].distance<i.distance)?(r[0].object=n,r[0]):i},void 0)}}function Nx(){var s=Object.create(null);function e(i,n){var r=i.id,o=i.name,a=i.dependencies;a===void 0&&(a=[]);var l=i.init;l===void 0&&(l=function(){});var c=i.getTransferables;if(c===void 0&&(c=null),!s[r])try{a=a.map(function(u){return u&&u.isWorkerModule&&(e(u,function(d){if(d instanceof Error)throw d}),u=s[u.id].value),u}),l=t("<"+o+">.init",l),c&&(c=t("<"+o+">.getTransferables",c));var h=null;typeof l=="function"?h=l.apply(void 0,a):console.error("worker module init function failed to rehydrate"),s[r]={id:r,value:h,getTransferables:c},n(h)}catch(u){u&&u.noLog||console.error(u),n(u)}}function t(i,n){var r=void 0;self.troikaDefine=function(a){return r=a};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+n+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(a){console.error(a)}return URL.revokeObjectURL(o),delete self.troikaDefine,r}self.addEventListener("message",function(i){var n=i.data,r=n.messageId,o=n.action,a=n.data;try{o==="registerModule"&&e(a,function(l){l instanceof Error?postMessage({messageId:r,success:!1,error:l.message}):postMessage({messageId:r,success:!0,result:{isCallable:typeof l=="function"}})}),o==="callModule"&&(function(l,c){var h,u=l.id,d=l.args;s[u]&&typeof s[u].value=="function"||c(new Error("Worker module "+u+": not found or its 'init' did not return a function"));try{var f=(h=s[u]).value.apply(h,d);f&&typeof f.then=="function"?f.then(g,function(v){return c(v instanceof Error?v:new Error(""+v))}):g(f)}catch(v){c(v)}function g(v){try{var m=s[u].getTransferables&&s[u].getTransferables(v);m&&Array.isArray(m)&&m.length||(m=void 0),c(v,m)}catch(p){console.error(p),c(p)}}})(a,function(l,c){l instanceof Error?postMessage({messageId:r,success:!1,error:l.message}):postMessage({messageId:r,success:!0,result:l},c||void 0)})}catch(l){postMessage({messageId:r,success:!1,error:l.stack})}})}var ku=function(){var s=!1;if(typeof window<"u"&&window.document!==void 0)try{new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"}))).terminate(),s=!0}catch(e){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+e.message+"]")}return ku=function(){return s},s},Ox=0,Fx=0,ta=!1,Vr=Object.create(null),Hr=Object.create(null),na=Object.create(null);function mr(s){if(!(s&&typeof s.init=="function"||ta))throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId,r=(function(h){var u=function(){for(var d=[],f=arguments.length;f--;)d[f]=arguments[f];return u._getInitResult().then(function(g){if(typeof g=="function")return g.apply(void 0,d);throw new Error("Worker module function was called but `init` did not return a callable function")})};return u._getInitResult=function(){var d=h.dependencies,f=h.init;d=Array.isArray(d)?d.map(function(v){return v&&(v=v.onMainThread||v)._getInitResult&&(v=v._getInitResult()),v}):[];var g=Promise.all(d).then(function(v){return f.apply(null,v)});return u._getInitResult=function(){return g},g},u})(s);n==null&&(n="#default");var o="workerModule"+ ++Ox,a=s.name||o,l=null;function c(){for(var h=[],u=arguments.length;u--;)h[u]=arguments[u];if(!ku())return r.apply(void 0,h);if(!l){l=xh(n,"registerModule",c.workerModuleData);var d=function(){l=null,Hr[n].delete(d)};(Hr[n]||(Hr[n]=new Set)).add(d)}return l.then(function(f){if(f.isCallable)return xh(n,"callModule",{id:o,args:h});throw new Error("Worker module function was called but `init` did not return a callable function")})}return e=e&&e.map(function(h){return typeof h!="function"||h.workerModuleData||(ta=!0,h=mr({workerId:n,name:"<"+a+"> function dependency: "+h.name,init:`function(){return (
`+qs(h)+`
)}`}),ta=!1),h&&h.workerModuleData&&(h=h.workerModuleData),h}),c.workerModuleData={isWorkerModule:!0,id:o,name:a,dependencies:e,init:qs(t),getTransferables:i&&qs(i)},c.onMainThread=r,c}function qs(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function xh(s,e,t){return new Promise(function(i,n){var r=++Fx;na[r]=function(o){o.success?i(o.result):n(new Error("Error in worker "+e+" call: "+o.error))},(function(o){var a=Vr[o];if(!a){var l=qs(Nx);(a=Vr[o]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+o.replace(/\*/g,"")+` **/

;(`+l+")()"],{type:"application/javascript"})))).onmessage=function(c){var h=c.data,u=h.messageId,d=na[u];if(!d)throw new Error("WorkerModule response with empty or unknown messageId");delete na[u],d(h)}}return a})(s).postMessage({messageId:r,action:e,data:t})})}function zu(){var s=(function(e){function t(R,L,A,O,F,k,N,Y){var H=1-N;Y.x=H*H*R+2*H*N*A+N*N*F,Y.y=H*H*L+2*H*N*O+N*N*k}function i(R,L,A,O,F,k,N,Y,H,V){var j=1-H;V.x=j*j*j*R+3*j*j*H*A+3*j*H*H*F+H*H*H*N,V.y=j*j*j*L+3*j*j*H*O+3*j*H*H*k+H*H*H*Y}function n(R,L){for(var A,O,F,k,N,Y=/([MLQCZ])([^MLQCZ]*)/g;A=Y.exec(R);){var H=A[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(V){return parseFloat(V)});switch(A[1]){case"M":k=O=H[0],N=F=H[1];break;case"L":H[0]===k&&H[1]===N||L("L",k,N,k=H[0],N=H[1]);break;case"Q":L("Q",k,N,k=H[2],N=H[3],H[0],H[1]);break;case"C":L("C",k,N,k=H[4],N=H[5],H[0],H[1],H[2],H[3]);break;case"Z":k===O&&N===F||L("L",k,N,O,F)}}}function r(R,L,A){A===void 0&&(A=16);var O={x:0,y:0};n(R,function(F,k,N,Y,H,V,j,me,z){switch(F){case"L":L(k,N,Y,H);break;case"Q":for(var W=k,de=N,ie=1;ie<A;ie++)t(k,N,V,j,Y,H,ie/(A-1),O),L(W,de,O.x,O.y),W=O.x,de=O.y;break;case"C":for(var ce=k,ge=N,ve=1;ve<A;ve++)i(k,N,V,j,me,z,Y,H,ve/(A-1),O),L(ce,ge,O.x,O.y),ce=O.x,ge=O.y}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a=new WeakMap,l={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function c(R,L){var A=R.getContext?R.getContext("webgl",l):R,O=a.get(A);if(!O){let j=function(ce){var ge=k[ce];if(!ge&&!(ge=k[ce]=A.getExtension(ce)))throw new Error(ce+" not supported");return ge},me=function(ce,ge){var ve=A.createShader(ge);return A.shaderSource(ve,ce),A.compileShader(ve),ve},z=function(ce,ge,ve,oe){if(!N[ce]){var J={},X={},w=A.createProgram();A.attachShader(w,me(ge,A.VERTEX_SHADER)),A.attachShader(w,me(ve,A.FRAGMENT_SHADER)),A.linkProgram(w),N[ce]={program:w,transaction:function(pe){A.useProgram(w),pe({setUniform:function(Z,he){for(var le=[],Te=arguments.length-2;Te-- >0;)le[Te]=arguments[Te+2];var ue=X[he]||(X[he]=A.getUniformLocation(w,he));A["uniform"+Z].apply(A,[ue].concat(le))},setAttribute:function(Z,he,le,Te,ue){var C=J[Z];C||(C=J[Z]={buf:A.createBuffer(),loc:A.getAttribLocation(w,Z),data:null}),A.bindBuffer(A.ARRAY_BUFFER,C.buf),A.vertexAttribPointer(C.loc,he,A.FLOAT,!1,0,0),A.enableVertexAttribArray(C.loc),F?A.vertexAttribDivisor(C.loc,Te):j("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(C.loc,Te),ue!==C.data&&(A.bufferData(A.ARRAY_BUFFER,ue,le),C.data=ue)}})}}}N[ce].transaction(oe)},W=function(ce,ge){H++;try{A.activeTexture(A.TEXTURE0+H);var ve=Y[ce];ve||(ve=Y[ce]=A.createTexture(),A.bindTexture(A.TEXTURE_2D,ve),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,A.NEAREST),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MAG_FILTER,A.NEAREST)),A.bindTexture(A.TEXTURE_2D,ve),ge(ve,H)}finally{H--}},de=function(ce,ge,ve){var oe=A.createFramebuffer();V.push(oe),A.bindFramebuffer(A.FRAMEBUFFER,oe),A.activeTexture(A.TEXTURE0+ge),A.bindTexture(A.TEXTURE_2D,ce),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ce,0);try{ve(oe)}finally{A.deleteFramebuffer(oe),A.bindFramebuffer(A.FRAMEBUFFER,V[--V.length-1]||null)}},ie=function(){k={},N={},Y={},H=-1,V.length=0};var F=typeof WebGL2RenderingContext<"u"&&A instanceof WebGL2RenderingContext,k={},N={},Y={},H=-1,V=[];A.canvas.addEventListener("webglcontextlost",function(ce){ie(),ce.preventDefault()},!1),a.set(A,O={gl:A,isWebGL2:F,getExtension:j,withProgram:z,withTexture:W,withTextureFramebuffer:de,handleContextLoss:ie})}L(O)}function h(R,L,A,O,F,k,N,Y){N===void 0&&(N=15),Y===void 0&&(Y=null),c(R,function(H){var V=H.gl,j=H.withProgram;(0,H.withTexture)("copy",function(me,z){V.texImage2D(V.TEXTURE_2D,0,V.RGBA,F,k,0,V.RGBA,V.UNSIGNED_BYTE,L),j("copy",o,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",function(W){var de=W.setUniform;(0,W.setAttribute)("aUV",2,V.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),de("1i","image",z),V.bindFramebuffer(V.FRAMEBUFFER,Y||null),V.disable(V.BLEND),V.colorMask(8&N,4&N,2&N,1&N),V.viewport(A,O,F,k),V.scissor(A,O,F,k),V.drawArrays(V.TRIANGLES,0,3)})})})}var u=Object.freeze({__proto__:null,withWebGLContext:c,renderImageData:h,resizeWebGLCanvasWithoutClearing:function(R,L,A){var O=R.width,F=R.height;c(R,function(k){var N=k.gl,Y=new Uint8Array(O*F*4);N.readPixels(0,0,O,F,N.RGBA,N.UNSIGNED_BYTE,Y),R.width=L,R.height=A,h(N,Y,0,0,O,F)})}});function d(R,L,A,O,F,k){k===void 0&&(k=1);var N=new Uint8Array(R*L),Y=O[2]-O[0],H=O[3]-O[1],V=[];r(A,function(ie,ce,ge,ve){V.push({x1:ie,y1:ce,x2:ge,y2:ve,minX:Math.min(ie,ge),minY:Math.min(ce,ve),maxX:Math.max(ie,ge),maxY:Math.max(ce,ve)})}),V.sort(function(ie,ce){return ie.maxX-ce.maxX});for(var j=0;j<R;j++)for(var me=0;me<L;me++){var z=de(O[0]+Y*(j+.5)/R,O[1]+H*(me+.5)/L),W=Math.pow(1-Math.abs(z)/F,k)/2;z<0&&(W=1-W),W=Math.max(0,Math.min(255,Math.round(255*W))),N[me*R+j]=W}return N;function de(ie,ce){for(var ge=1/0,ve=1/0,oe=V.length;oe--;){var J=V[oe];if(J.maxX+ve<=ie)break;if(ie+ve>J.minX&&ce-ve<J.maxY&&ce+ve>J.minY){var X=v(ie,ce,J.x1,J.y1,J.x2,J.y2);X<ge&&(ge=X,ve=Math.sqrt(ge))}}return(function(w,pe){for(var Z=0,he=V.length;he--;){var le=V[he];if(le.maxX<=w)break;le.y1>pe!=le.y2>pe&&w<(le.x2-le.x1)*(pe-le.y1)/(le.y2-le.y1)+le.x1&&(Z+=le.y1<le.y2?1:-1)}return Z!==0})(ie,ce)&&(ve=-ve),ve}}function f(R,L,A,O,F,k,N,Y,H,V){k===void 0&&(k=1),Y===void 0&&(Y=0),H===void 0&&(H=0),V===void 0&&(V=0),g(R,L,A,O,F,k,N,null,Y,H,V)}function g(R,L,A,O,F,k,N,Y,H,V,j){k===void 0&&(k=1),H===void 0&&(H=0),V===void 0&&(V=0),j===void 0&&(j=0);for(var me=d(R,L,A,O,F,k),z=new Uint8Array(4*me.length),W=0;W<me.length;W++)z[4*W+j]=me[W];h(N,z,H,V,R,L,1<<3-j,Y)}function v(R,L,A,O,F,k){var N=F-A,Y=k-O,H=N*N+Y*Y,V=H?Math.max(0,Math.min(1,((R-A)*N+(L-O)*Y)/H)):0,j=R-(A+V*N),me=L-(O+V*Y);return j*j+me*me}var m=Object.freeze({__proto__:null,generate:d,generateIntoCanvas:f,generateIntoFramebuffer:g}),p=new Float32Array([0,0,2,0,0,2]),y=null,x=!1,_={},E=new WeakMap;function P(R){if(!x&&!M(R))throw new Error("WebGL generation not supported")}function U(R,L,A,O,F,k,N){if(k===void 0&&(k=1),N===void 0&&(N=null),!N&&!(N=y)){var Y=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!Y)throw new Error("OffscreenCanvas or DOM canvas not supported");N=y=Y.getContext("webgl",{depth:!1})}P(N);var H=new Uint8Array(R*L*4);c(N,function(z){var W=z.gl,de=z.withTexture,ie=z.withTextureFramebuffer;de("readable",function(ce,ge){W.texImage2D(W.TEXTURE_2D,0,W.RGBA,R,L,0,W.RGBA,W.UNSIGNED_BYTE,null),ie(ce,ge,function(ve){T(R,L,A,O,F,k,W,ve,0,0,0),W.readPixels(0,0,R,L,W.RGBA,W.UNSIGNED_BYTE,H)})})});for(var V=new Uint8Array(R*L),j=0,me=0;j<H.length;j+=4)V[me++]=H[j];return V}function I(R,L,A,O,F,k,N,Y,H,V){k===void 0&&(k=1),Y===void 0&&(Y=0),H===void 0&&(H=0),V===void 0&&(V=0),T(R,L,A,O,F,k,N,null,Y,H,V)}function T(R,L,A,O,F,k,N,Y,H,V,j){k===void 0&&(k=1),H===void 0&&(H=0),V===void 0&&(V=0),j===void 0&&(j=0),P(N);var me=[];r(A,function(z,W,de,ie){me.push(z,W,de,ie)}),me=new Float32Array(me),c(N,function(z){var W=z.gl,de=z.isWebGL2,ie=z.getExtension,ce=z.withProgram,ge=z.withTexture,ve=z.withTextureFramebuffer,oe=z.handleContextLoss;if(ge("rawDistances",function(J,X){R===J._lastWidth&&L===J._lastHeight||W.texImage2D(W.TEXTURE_2D,0,W.RGBA,J._lastWidth=R,J._lastHeight=L,0,W.RGBA,W.UNSIGNED_BYTE,null),ce("main","precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}","precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",function(w){var pe=w.setAttribute,Z=w.setUniform,he=!de&&ie("ANGLE_instanced_arrays"),le=!de&&ie("EXT_blend_minmax");pe("aUV",2,W.STATIC_DRAW,0,p),pe("aLineSegment",4,W.DYNAMIC_DRAW,1,me),Z.apply(void 0,["4f","uGlyphBounds"].concat(O)),Z("1f","uMaxDistance",F),Z("1f","uExponent",k),ve(J,X,function(Te){W.enable(W.BLEND),W.colorMask(!0,!0,!0,!0),W.viewport(0,0,R,L),W.scissor(0,0,R,L),W.blendFunc(W.ONE,W.ONE),W.blendEquationSeparate(W.FUNC_ADD,de?W.MAX:le.MAX_EXT),W.clear(W.COLOR_BUFFER_BIT),de?W.drawArraysInstanced(W.TRIANGLES,0,3,me.length/4):he.drawArraysInstancedANGLE(W.TRIANGLES,0,3,me.length/4)})}),ce("post",o,"precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",function(w){w.setAttribute("aUV",2,W.STATIC_DRAW,0,p),w.setUniform("1i","tex",X),W.bindFramebuffer(W.FRAMEBUFFER,Y),W.disable(W.BLEND),W.colorMask(j===0,j===1,j===2,j===3),W.viewport(H,V,R,L),W.scissor(H,V,R,L),W.drawArrays(W.TRIANGLES,0,3)})}),W.isContextLost())throw oe(),new Error("webgl context lost")})}function M(R){var L=R&&R!==y?R.canvas||R:_,A=E.get(L);if(A===void 0){x=!0;var O=null;try{var F=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],k=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,R);(A=k&&F.length===k.length&&k.every(function(N,Y){return N===F[Y]}))||(O="bad trial run results",console.info(F,k))}catch(N){A=!1,O=N.message}O&&console.warn("WebGL SDF generation not supported:",O),x=!1,E.set(L,A)}return A}var D=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:I,generateIntoFramebuffer:T,isSupported:M});return e.forEachPathCommand=n,e.generate=function(R,L,A,O,F,k){F===void 0&&(F=Math.max(O[2]-O[0],O[3]-O[1])/2),k===void 0&&(k=1);try{return U.apply(D,arguments)}catch(N){return console.info("WebGL SDF generation failed, falling back to JS",N),d.apply(m,arguments)}},e.generateIntoCanvas=function(R,L,A,O,F,k,N,Y,H,V){F===void 0&&(F=Math.max(O[2]-O[0],O[3]-O[1])/2),k===void 0&&(k=1),Y===void 0&&(Y=0),H===void 0&&(H=0),V===void 0&&(V=0);try{return I.apply(D,arguments)}catch(j){return console.info("WebGL SDF generation failed, falling back to JS",j),f.apply(m,arguments)}},e.javascript=m,e.pathToLineSegments=r,e.webgl=D,e.webglUtils=u,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}const Bx=function(){return(function(s){var e={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},t={},i={};t.L=1,i[1]="L",Object.keys(e).forEach(function(oe,J){t[oe]=1<<J+1,i[t[oe]]=oe}),Object.freeze(t);var n=t.LRI|t.RLI|t.FSI,r=t.L|t.R|t.AL,o=t.B|t.S|t.WS|t.ON|t.FSI|t.LRI|t.RLI|t.PDI,a=t.BN|t.RLE|t.LRE|t.RLO|t.LRO|t.PDF,l=t.S|t.WS|t.B|n|t.PDI|a,c=null;function h(oe){return(function(){if(!c){c=new Map;var J=function(w){if(e.hasOwnProperty(w)){var pe=0;e[w].split(",").forEach(function(Z){var he=Z.split("+"),le=he[0],Te=he[1];le=parseInt(le,36),Te=Te?parseInt(Te,36):0,c.set(pe+=le,t[w]);for(var ue=0;ue<Te;ue++)c.set(++pe,t[w])})}};for(var X in e)J(X)}})(),c.get(oe.codePointAt(0))||t.L}var u,d,f,g="14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",v="6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye";function m(oe,J){var X,w=0,pe=new Map,Z=J&&new Map;return oe.split(",").forEach(function he(le){if(le.indexOf("+")!==-1)for(var Te=+le;Te--;)he(X);else{X=le;var ue=le.split(">"),C=ue[0],S=ue[1];C=String.fromCodePoint(w+=parseInt(C,36)),S=String.fromCodePoint(w+=parseInt(S,36)),pe.set(C,S),J&&Z.set(S,C)}}),{map:pe,reverseMap:Z}}function p(){if(!u){var oe=m(g,!0),J=oe.map,X=oe.reverseMap;u=J,d=X,f=m(v,!1).map}}function y(oe){return p(),u.get(oe)||null}function x(oe){return p(),d.get(oe)||null}function _(oe){return p(),f.get(oe)||null}var E=t.L,P=t.R,U=t.EN,I=t.ES,T=t.ET,M=t.AN,D=t.CS,R=t.B,L=t.S,A=t.ON,O=t.BN,F=t.NSM,k=t.AL,N=t.LRO,Y=t.RLO,H=t.LRE,V=t.RLE,j=t.PDF,me=t.LRI,z=t.RLI,W=t.FSI,de=t.PDI,ie;function ce(oe){return(function(){if(!ie){var J=m("14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",!0),X=J.map;J.reverseMap.forEach(function(w,pe){X.set(pe,w)}),ie=X}})(),ie.get(oe)||null}function ge(oe,J,X,w){var pe=oe.length;X=Math.max(0,X==null?0:+X),w=Math.min(pe-1,w==null?pe-1:+w);var Z=[];return J.paragraphs.forEach(function(he){var le=Math.max(X,he.start),Te=Math.min(w,he.end);if(le<Te){for(var ue=J.levels.slice(le,Te+1),C=Te;C>=le&&h(oe[C])&l;C--)ue[C]=he.level;for(var S=he.level,K=1/0,fe=0;fe<ue.length;fe++){var te=ue[fe];te>S&&(S=te),te<K&&(K=1|te)}for(var Q=S;Q>=K;Q--)for(var _e=0;_e<ue.length;_e++)if(ue[_e]>=Q){for(var xe=_e;_e+1<ue.length&&ue[_e+1]>=Q;)_e++;_e>xe&&Z.push([xe+le,_e+le])}}}),Z}function ve(oe,J,X,w){for(var pe=ge(oe,J,X,w),Z=[],he=0;he<oe.length;he++)Z[he]=he;return pe.forEach(function(le){for(var Te=le[0],ue=le[1],C=Z.slice(Te,ue+1),S=C.length;S--;)Z[ue-S]=C[S]}),Z}return s.closingToOpeningBracket=x,s.getBidiCharType=h,s.getBidiCharTypeName=function(oe){return i[h(oe)]},s.getCanonicalBracket=_,s.getEmbeddingLevels=function(oe,J){for(var X=new Uint32Array(oe.length),w=0;w<oe.length;w++)X[w]=h(oe[w]);var pe=new Map;function Z(jt,an){var Yt=X[jt];X[jt]=an,pe.set(Yt,pe.get(Yt)-1),Yt&o&&pe.set(o,pe.get(o)-1),pe.set(an,(pe.get(an)||0)+1),an&o&&pe.set(o,(pe.get(o)||0)+1)}for(var he=new Uint8Array(oe.length),le=new Map,Te=[],ue=null,C=0;C<oe.length;C++)ue||Te.push(ue={start:C,end:oe.length-1,level:J==="rtl"?1:J==="ltr"?0:Nl(C,!1)}),X[C]&R&&(ue.end=C,ue=null);for(var S=V|H|Y|N|n|de|j|R,K=function(jt){return jt+(1&jt?1:2)},fe=function(jt){return jt+(1&jt?2:1)},te=0;te<Te.length;te++){var Q=[{_level:(ue=Te[te]).level,_override:0,_isolate:0}],_e=void 0,xe=0,ye=0,Ge=0;pe.clear();for(var ae=ue.start;ae<=ue.end;ae++){var Me=X[ae];if(_e=Q[Q.length-1],pe.set(Me,(pe.get(Me)||0)+1),Me&o&&pe.set(o,(pe.get(o)||0)+1),Me&S)if(Me&(V|H)){he[ae]=_e._level;var Pe=(Me===V?fe:K)(_e._level);Pe<=125&&!xe&&!ye?Q.push({_level:Pe,_override:0,_isolate:0}):xe||ye++}else if(Me&(Y|N)){he[ae]=_e._level;var Fe=(Me===Y?fe:K)(_e._level);Fe<=125&&!xe&&!ye?Q.push({_level:Fe,_override:Me&Y?P:E,_isolate:0}):xe||ye++}else if(Me&n){Me&W&&(Me=Nl(ae+1,!0)===1?z:me),he[ae]=_e._level,_e._override&&Z(ae,_e._override);var Ae=(Me===z?fe:K)(_e._level);Ae<=125&&xe===0&&ye===0?(Ge++,Q.push({_level:Ae,_override:0,_isolate:1,_isolInitIndex:ae})):xe++}else if(Me&de){if(xe>0)xe--;else if(Ge>0){for(ye=0;!Q[Q.length-1]._isolate;)Q.pop();var He=Q[Q.length-1]._isolInitIndex;He!=null&&(le.set(He,ae),le.set(ae,He)),Q.pop(),Ge--}_e=Q[Q.length-1],he[ae]=_e._level,_e._override&&Z(ae,_e._override)}else Me&j?(xe===0&&(ye>0?ye--:!_e._isolate&&Q.length>1&&(Q.pop(),_e=Q[Q.length-1])),he[ae]=_e._level):Me&R&&(he[ae]=ue.level);else he[ae]=_e._level,_e._override&&Me!==O&&Z(ae,_e._override)}for(var Oe=[],Ie=null,G=ue.start;G<=ue.end;G++){var we=X[G];if(!(we&a)){var ee=he[G],se=we&n,be=we===de;Ie&&ee===Ie._level?(Ie._end=G,Ie._endsWithIsolInit=se):Oe.push(Ie={_start:G,_end:G,_level:ee,_startsWithPDI:be,_endsWithIsolInit:se})}}for(var Ee=[],Ce=0;Ce<Oe.length;Ce++){var Xe=Oe[Ce];if(!Xe._startsWithPDI||Xe._startsWithPDI&&!le.has(Xe._start)){for(var rt=[Ie=Xe],je=void 0;Ie&&Ie._endsWithIsolInit&&(je=le.get(Ie._end))!=null;)for(var et=Ce+1;et<Oe.length;et++)if(Oe[et]._start===je){rt.push(Ie=Oe[et]);break}for(var ft=[],vn=0;vn<rt.length;vn++)for(var _n=rt[vn],Lt=_n._start;Lt<=_n._end;Lt++)ft.push(Lt);for(var xn=he[ft[0]],yn=ue.level,It=ft[0]-1;It>=0;It--)if(!(X[It]&a)){yn=he[It];break}var Qt=ft[ft.length-1],ns=he[Qt],ai=ue.level;if(!(X[Qt]&n)){for(var li=Qt+1;li<=ue.end;li++)if(!(X[li]&a)){ai=he[li];break}}Ee.push({_seqIndices:ft,_sosType:Math.max(yn,xn)%2?P:E,_eosType:Math.max(ai,ns)%2?P:E})}}for(var Ri=0;Ri<Ee.length;Ri++){var gr=Ee[Ri],ke=gr._seqIndices,ci=gr._sosType,oo=gr._eosType,Wn=1&he[ke[0]]?P:E;if(pe.get(F))for(var Ci=0;Ci<ke.length;Ci++){var b=ke[Ci];if(X[b]&F){for(var q=ci,ne=Ci-1;ne>=0;ne--)if(!(X[ke[ne]]&a)){q=X[ke[ne]];break}Z(b,q&(n|de)?A:q)}}if(pe.get(U))for(var re=0;re<ke.length;re++){var $=ke[re];if(X[$]&U)for(var Se=re-1;Se>=-1;Se--){var Ue=Se===-1?ci:X[ke[Se]];if(Ue&r){Ue===k&&Z($,M);break}}}if(pe.get(k))for(var De=0;De<ke.length;De++){var Ne=ke[De];X[Ne]&k&&Z(Ne,P)}if(pe.get(I)||pe.get(D))for(var We=1;We<ke.length-1;We++){var qe=ke[We];if(X[qe]&(I|D)){for(var Be=0,Qe=0,tt=We-1;tt>=0&&(Be=X[ke[tt]])&a;tt--);for(var pt=We+1;pt<ke.length&&(Qe=X[ke[pt]])&a;pt++);Be===Qe&&(X[qe]===I?Be===U:Be&(U|M))&&Z(qe,Be)}}if(pe.get(U))for(var st=0;st<ke.length;st++){var nt=ke[st];if(X[nt]&U){for(var ze=st-1;ze>=0&&X[ke[ze]]&(T|a);ze--)Z(ke[ze],U);for(st++;st<ke.length&&X[ke[st]]&(T|a|U);st++)X[ke[st]]!==U&&Z(ke[st],U)}}if(pe.get(T)||pe.get(I)||pe.get(D))for(var gt=0;gt<ke.length;gt++){var ot=ke[gt];if(X[ot]&(T|I|D)){Z(ot,A);for(var Dt=gt-1;Dt>=0&&X[ke[Dt]]&a;Dt--)Z(ke[Dt],A);for(var on=gt+1;on<ke.length&&X[ke[on]]&a;on++)Z(ke[on],A)}}if(pe.get(U))for(var Ct=0,Xn=ci;Ct<ke.length;Ct++){var ut=ke[Ct],Nt=X[ut];Nt&U?Xn===E&&Z(ut,E):Nt&r&&(Xn=Nt)}if(pe.get(o)){for(var At=P|U|M,wt=At|E,Mt=[],Sn=[],qt=0;qt<ke.length;qt++)if(X[ke[qt]]&o){var vr=oe[ke[qt]],Al=void 0;if(y(vr)!==null){if(!(Sn.length<63))break;Sn.push({char:vr,seqIndex:qt})}else if((Al=x(vr))!==null)for(var _r=Sn.length-1;_r>=0;_r--){var ao=Sn[_r].char;if(ao===Al||ao===x(_(vr))||y(_(ao))===vr){Mt.push([Sn[_r].seqIndex,qt]),Sn.length=_r;break}}}Mt.sort(function(jt,an){return jt[0]-an[0]});for(var lo=0;lo<Mt.length;lo++){for(var wl=Mt[lo],is=wl[0],co=wl[1],Rl=!1,Mn=0,ho=is+1;ho<co;ho++){var Cl=ke[ho];if(X[Cl]&wt){Rl=!0;var Pl=X[Cl]&At?P:E;if(Pl===Wn){Mn=Pl;break}}}if(Rl&&!Mn){Mn=ci;for(var uo=is-1;uo>=0;uo--){var Ul=ke[uo];if(X[Ul]&wt){var Ll=X[Ul]&At?P:E;Mn=Ll!==Wn?Ll:Wn;break}}}if(Mn){if(X[ke[is]]=X[ke[co]]=Mn,Mn!==Wn){for(var xr=is+1;xr<ke.length;xr++)if(!(X[ke[xr]]&a)){h(oe[ke[xr]])&F&&(X[ke[xr]]=Mn);break}}if(Mn!==Wn){for(var yr=co+1;yr<ke.length;yr++)if(!(X[ke[yr]]&a)){h(oe[ke[yr]])&F&&(X[ke[yr]]=Mn);break}}}}for(var qn=0;qn<ke.length;qn++)if(X[ke[qn]]&o){for(var Il=qn,fo=qn,po=ci,Sr=qn-1;Sr>=0;Sr--){if(!(X[ke[Sr]]&a)){po=X[ke[Sr]]&At?P:E;break}Il=Sr}for(var Dl=oo,Mr=qn+1;Mr<ke.length;Mr++){if(!(X[ke[Mr]]&(o|a))){Dl=X[ke[Mr]]&At?P:E;break}fo=Mr}for(var mo=Il;mo<=fo;mo++)X[ke[mo]]=po===Dl?po:Wn;qn=fo}}}for(var $t=ue.start;$t<=ue.end;$t++){var $u=he[$t],rs=X[$t];if(1&$u?rs&(E|U|M)&&he[$t]++:rs&P?he[$t]++:rs&(M|U)&&(he[$t]+=2),rs&a&&(he[$t]=$t===0?ue.level:he[$t-1]),$t===ue.end||h(oe[$t])&(L|R))for(var ss=$t;ss>=0&&h(oe[ss])&l;ss--)he[ss]=ue.level}}return{levels:he,paragraphs:Te};function Nl(jt,an){for(var Yt=jt;Yt<oe.length;Yt++){var jn=X[Yt];if(jn&(P|k))return 1;if(jn&(R|E)||an&&jn===de)return 0;if(jn&n){var Ol=Ju(Yt);Yt=Ol===-1?oe.length:Ol}}return 0}function Ju(jt){for(var an=1,Yt=jt+1;Yt<oe.length;Yt++){var jn=X[Yt];if(jn&R)break;if(jn&de){if(--an===0)return Yt}else jn&n&&an++}return-1}},s.getMirroredCharacter=ce,s.getMirroredCharactersMap=function(oe,J,X,w){var pe=oe.length;X=Math.max(0,X==null?0:+X),w=Math.min(pe-1,w==null?pe-1:+w);for(var Z=new Map,he=X;he<=w;he++)if(1&J[he]){var le=ce(oe[he]);le!==null&&Z.set(he,le)}return Z},s.getReorderSegments=ge,s.getReorderedIndices=ve,s.getReorderedString=function(oe,J,X,w){var pe=ve(oe,J,X,w),Z=[].concat(oe);return pe.forEach(function(he,le){Z[le]=(1&J.levels[he]?ce(oe[he]):null)||oe[he]}),Z.join("")},s.openingToClosingBracket=y,Object.defineProperty(s,"__esModule",{value:!0}),s})({})},Gu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ja(s){return s.replace(/^[ \t]*#include +<([\w\d./]+)>/gm,function(e,t){let i=$e[t];return i?Ja(i):e})}const Pt=[];for(let s=0;s<256;s++)Pt[s]=(s<16?"0":"")+s.toString(16);const xi=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},kx=Date.now(),yh=new WeakMap,Sh=new Map;let zx=1e10;function Za(s,e){const t=(function(c){const h=JSON.stringify(c,Gx);let u=Th.get(h);return u==null&&Th.set(h,u=++Vx),u})(e);let i=yh.get(s);if(i||yh.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,h){s.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let d=Sh[u];if(!d){const f=(function(g,{vertexShader:v,fragmentShader:m},p,y){let{vertexDefs:x,vertexMainIntro:_,vertexMainOutro:E,vertexTransform:P,fragmentDefs:U,fragmentMainIntro:I,fragmentMainOutro:T,fragmentColorTransform:M,customRewriter:D,timeUniform:R}=p;if(x=x||"",_=_||"",E=E||"",U=U||"",I=I||"",T=T||"",(P||D)&&(v=Ja(v)),(M||D)&&(m=Ja(m=m.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`))),D){let L=D({vertexShader:v,fragmentShader:m});v=L.vertexShader,m=L.fragmentShader}if(M){let L=[];m=m.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,A=>(L.push(A),"")),T=`${M}
${L.join(`
`)}
${T}`}if(R){const L=`
uniform float ${R};
`;x=L+x,U=L+U}return P&&(x=`${x}
void troikaVertexTransform${y}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${P}
}
`,_=`
troika_position_${y} = vec3(position);
troika_normal_${y} = vec3(normal);
troika_uv_${y} = vec2(uv);
troikaVertexTransform${y}(troika_position_${y}, troika_normal_${y}, troika_uv_${y});
${_}
`,v=(v=`vec3 troika_position_${y};
vec3 troika_normal_${y};
vec2 troika_uv_${y};
${v}
`).replace(/\b(position|normal|uv)\b/g,(L,A,O,F)=>/\battribute\s+vec[23]\s+$/.test(F.substr(0,O))?A:`troika_${A}_${y}`),g.map&&g.map.channel>0||(v=v.replace(/\bMAP_UV\b/g,`troika_uv_${y}`))),v=Mh(v,y,x,_,E),m=Mh(m,y,U,I,T),{vertexShader:v,fragmentShader:m}})(this,c,e,t);d=Sh[u]=f}c.vertexShader=d.vertexShader,c.fragmentShader=d.fragmentShader,xi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-kx}}),this[n]&&this[n](c)},o=function(){return a(e.chained?s:s.clone())},a=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:s}),Object.defineProperty(h,"id",{value:zx++}),h.uuid=(function(){const u=4294967295*Math.random()|0,d=4294967295*Math.random()|0,f=4294967295*Math.random()|0,g=4294967295*Math.random()|0;return(Pt[255&u]+Pt[u>>8&255]+Pt[u>>16&255]+Pt[u>>24&255]+"-"+Pt[255&d]+Pt[d>>8&255]+"-"+Pt[d>>16&15|64]+Pt[d>>24&255]+"-"+Pt[63&f|128]+Pt[f>>8&255]+"-"+Pt[f>>16&255]+Pt[f>>24&255]+Pt[255&g]+Pt[g>>8&255]+Pt[g>>16&255]+Pt[g>>24&255]).toUpperCase()})(),h.uniforms=xi({},c.uniforms,e.uniforms),h.defines=xi({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=xi({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:o},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const h=this.baseMaterial;return c===h||h.isDerivedMaterial&&h.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get:()=>r,set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),s.isShaderMaterial||s.isDerivedMaterial||(xi(this.extensions,c.extensions),xi(this.defines,c.defines),xi(this.uniforms,ou.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return a(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Za(s.isDerivedMaterial?s.getDepthMaterial():new Au({depthPacking:$h}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Za(s.isDerivedMaterial?s.getDistanceMaterial():new wu,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),s.dispose.call(this)}}};return i[t]=o,new o}function Mh(s,e,t,i,n){return(i||n||t)&&(s=s.replace(Gu,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function Gx(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Vx=0;const Th=new Map,Hx=mr({name:"Typr Font Parser",dependencies:[function(){return typeof window>"u"&&(self.window=self),(function(s){var e={parse:function(n){var r=e._bin,o=new Uint8Array(n);if(r.readASCII(o,0,4)=="ttcf"){var a=4;r.readUshort(o,a),a+=2,r.readUshort(o,a),a+=2;var l=r.readUint(o,a);a+=4;for(var c=[],h=0;h<l;h++){var u=r.readUint(o,a);a+=4,c.push(e._readFont(o,u))}return c}return[e._readFont(o,0)]},_readFont:function(n,r){var o=e._bin,a=r;o.readFixed(n,r),r+=4;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:n,_offset:a},u={},d=0;d<l;d++){var f=o.readASCII(n,r,4);r+=4,o.readUint(n,r),r+=4;var g=o.readUint(n,r);r+=4;var v=o.readUint(n,r);r+=4,u[f]={offset:g,length:v}}for(d=0;d<c.length;d++){var m=c[d];u[m]&&(h[m.trim()]=e[m.trim()].parse(n,u[m].offset,u[m].length,h))}return h},_tabOffset:function(n,r,o){for(var a=e._bin,l=a.readUshort(n,o+4),c=o+12,h=0;h<l;h++){var u=a.readASCII(n,c,4);c+=4,a.readUint(n,c),c+=4;var d=a.readUint(n,c);if(c+=4,a.readUint(n,c),c+=4,u==r)return d}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(e._bin.readUshort(n,r+2*l));return a},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,o){for(var a="",l=0;l<o;l++)a+=String.fromCharCode(n[r+l]);return a},readUnicode:function(n,r,o){for(var a="",l=0;l<o;l++){var c=n[r++]<<8|n[r++];a+=String.fromCharCode(c)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,o){var a=e._bin._tdec;return a&&r==0&&o==n.length?a.decode(n):e._bin.readASCII(n,r,o)},readBytes:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(n[r+l]);return a},readASCIIArray:function(n,r,o){for(var a=[],l=0;l<o;l++)a.push(String.fromCharCode(n[r+l]));return a},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,o,a,l){var c=e._bin,h={},u=r;c.readFixed(n,r),r+=4;var d=c.readUshort(n,r);r+=2;var f=c.readUshort(n,r);r+=2;var g=c.readUshort(n,r);return r+=2,h.scriptList=e._lctf.readScriptList(n,u+d),h.featureList=e._lctf.readFeatureList(n,u+f),h.lookupList=e._lctf.readLookupList(n,u+g,l),h},e._lctf.readLookupList=function(n,r,o){var a=e._bin,l=r,c=[],h=a.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var d=a.readUshort(n,r);r+=2;var f=e._lctf.readLookupTable(n,l+d,o);c.push(f)}return c},e._lctf.readLookupTable=function(n,r,o){var a=e._bin,l=r,c={tabs:[]};c.ltype=a.readUshort(n,r),r+=2,c.flag=a.readUshort(n,r),r+=2;var h=a.readUshort(n,r);r+=2;for(var u=c.ltype,d=0;d<h;d++){var f=a.readUshort(n,r);r+=2;var g=o(n,u,l+f,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var r=0,o=0;o<32;o++)n>>>o&1&&r++;return r},e._lctf.readClassDef=function(n,r){var o=e._bin,a=[],l=o.readUshort(n,r);if(r+=2,l==1){var c=o.readUshort(n,r);r+=2;var h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++)a.push(c+u),a.push(c+u),a.push(o.readUshort(n,r)),r+=2}if(l==2){var d=o.readUshort(n,r);for(r+=2,u=0;u<d;u++)a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2,a.push(o.readUshort(n,r)),r+=2}return a},e._lctf.getInterval=function(n,r){for(var o=0;o<n.length;o+=3){var a=n[o],l=n[o+1];if(n[o+2],a<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(n,r){var o=e._bin,a={};a.fmt=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.fmt==1&&(a.tab=o.readUshorts(n,r,l)),a.fmt==2&&(a.tab=o.readUshorts(n,r,3*l)),a},e._lctf.coverageIndex=function(n,r){var o=n.tab;if(n.fmt==1)return o.indexOf(r);if(n.fmt==2){var a=e._lctf.getInterval(o,r);if(a!=-1)return o[a+2]+(r-o[a])}return-1},e._lctf.readFeatureList=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=o.readASCII(n,r,4);r+=4;var d=o.readUshort(n,r);r+=2;var f=e._lctf.readFeatureTable(n,a+d);f.tag=u.trim(),l.push(f)}return l},e._lctf.readFeatureTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.featureParams=a+c);var h=o.readUshort(n,r);r+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(o.readUshort(n,r+2*u));return l},e._lctf.readScriptList=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=o.readASCII(n,r,4);r+=4;var d=o.readUshort(n,r);r+=2,l[u.trim()]=e._lctf.readScriptTable(n,a+d)}return l},e._lctf.readScriptTable=function(n,r){var o=e._bin,a=r,l={},c=o.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,a+c));var h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var d=o.readASCII(n,r,4);r+=4;var f=o.readUshort(n,r);r+=2,l[d.trim()]=e._lctf.readLangSysTable(n,a+f)}return l},e._lctf.readLangSysTable=function(n,r){var o=e._bin,a={};o.readUshort(n,r),r+=2,a.reqFeature=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);return r+=2,a.features=o.readUshorts(n,r,l),a},e.CFF={},e.CFF.parse=function(n,r,o){var a=e._bin;(n=new Uint8Array(n.buffer,r,o))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],h=0;h<l.length-1;h++)c.push(a.readASCII(n,r+l[h],l[h+1]-l[h]));r+=l[l.length-1];var u=[];r=e.CFF.readIndex(n,r,u);var d=[];for(h=0;h<u.length-1;h++)d.push(e.CFF.readDict(n,r+u[h],r+u[h+1]));r+=u[u.length-1];var f=d[0],g=[];r=e.CFF.readIndex(n,r,g);var v=[];for(h=0;h<g.length-1;h++)v.push(a.readASCII(n,r+g[h],g[h+1]-g[h]));if(r+=g[g.length-1],e.CFF.readSubrs(n,r,f),f.CharStrings){r=f.CharStrings,g=[],r=e.CFF.readIndex(n,r,g);var m=[];for(h=0;h<g.length-1;h++)m.push(a.readBytes(n,r+g[h],g[h+1]-g[h]));f.CharStrings=m}if(f.ROS){r=f.FDArray;var p=[];for(r=e.CFF.readIndex(n,r,p),f.FDArray=[],h=0;h<p.length-1;h++){var y=e.CFF.readDict(n,r+p[h],r+p[h+1]);e.CFF._readFDict(n,y,v),f.FDArray.push(y)}r+=p[p.length-1],r=f.FDSelect,f.FDSelect=[];var x=n[r];if(r++,x!=3)throw x;var _=a.readUshort(n,r);for(r+=2,h=0;h<_+1;h++)f.FDSelect.push(a.readUshort(n,r),n[r+2]),r+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(n,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(n,f.charset,f.CharStrings.length)),e.CFF._readFDict(n,f,v),f},e.CFF._readFDict=function(n,r,o){var a;for(var l in r.Private&&(a=r.Private[1],r.Private=e.CFF.readDict(n,a,a+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,a+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(n,r,o){var a=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var u=0;u<l.length-1;u++)o.Subrs.push(a.readBytes(n,r+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var o=0;o<n.charset.length;o++)if(n.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,o){e._bin;var a=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var h=0;h<c;h++)a.push(n[r+h]);return a},e.CFF.readCharset=function(n,r,o){var a=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var h=0;h<o;h++){var u=a.readUshort(n,r);r+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){u=a.readUshort(n,r),r+=2;var d=0;for(c==1?(d=n[r],r++):(d=a.readUshort(n,r),r+=2),h=0;h<=d;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(n,r,o){var a=e._bin,l=a.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var h=0;h<l;h++)o.push(n[r+h]);else if(c==2)for(h=0;h<l;h++)o.push(a.readUshort(n,r+2*h));else if(c==3)for(h=0;h<l;h++)o.push(16777215&a.readUint(n,r+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,o){var a=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,u=null,d=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(d=a.readShort(n,r+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(d=l-139,h=1),247<=l&&l<=250&&(d=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(d=256*-(l-251)-c-108,h=2),l==255&&(d=a.readInt(n,r+1)/65535,h=5),o.val=d??"o"+u,o.size=h},e.CFF.readCharString=function(n,r,o){for(var a=r+o,l=e._bin,c=[];r<a;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var d=1,f=null,g=null;h<=20&&(f=h,d=1),h==12&&(f=100*h+u,d=2),h!=19&&h!=20||(f=h,d=2),21<=h&&h<=27&&(f=h,d=1),h==28&&(g=l.readShort(n,r+1),d=3),29<=h&&h<=31&&(f=h,d=1),32<=h&&h<=246&&(g=h-139,d=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,d=2),h==255&&(g=l.readInt(n,r+1)/65535,d=5),c.push(g??"o"+f),r+=d}return c},e.CFF.readDict=function(n,r,o){for(var a=e._bin,l={},c=[];r<o;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var d=1,f=null,g=null;if(h==28&&(g=a.readShort(n,r+1),d=3),h==29&&(g=a.readInt(n,r+1),d=5),32<=h&&h<=246&&(g=h-139,d=1),247<=h&&h<=250&&(g=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(g=256*-(h-251)-u-108,d=2),h==255)throw g=a.readInt(n,r+1)/65535,d=5,"unknown number";if(h==30){var v=[];for(d=1;;){var m=n[r+d];d++;var p=m>>4,y=15&m;if(p!=15&&v.push(p),y!=15&&v.push(y),y==15)break}for(var x="",_=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<v.length;E++)x+=_[v[E]];g=parseFloat(x)}h<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],d=1,h==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],d=2)),f!=null?(l[f]=c.length==1?c[0]:c,c=[]):c.push(g),r+=d}return l},e.cmap={},e.cmap.parse=function(n,r,o){n=new Uint8Array(n.buffer,r,o),r=0;var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var d=a.readUshort(n,r);r+=2;var f=a.readUshort(n,r);r+=2;var g=a.readUint(n,r);r+=4;var v="p"+d+"e"+f,m=h.indexOf(g);if(m==-1){var p;m=l.tables.length,h.push(g);var y=a.readUshort(n,g);y==0?p=e.cmap.parse0(n,g):y==4?p=e.cmap.parse4(n,g):y==6?p=e.cmap.parse6(n,g):y==12?p=e.cmap.parse12(n,g):console.debug("unknown format: "+y,d,f,g),l.tables.push(p)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,a.map=[];for(var c=0;c<l-6;c++)a.map.push(n[r+c]);return a},e.cmap.parse4=function(n,r){var o=e._bin,a=r,l={};l.format=o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2;var h=o.readUshort(n,r);r+=2;var u=h/2;l.searchRange=o.readUshort(n,r),r+=2,l.entrySelector=o.readUshort(n,r),r+=2,l.rangeShift=o.readUshort(n,r),r+=2,l.endCount=o.readUshorts(n,r,u),r+=2*u,r+=2,l.startCount=o.readUshorts(n,r,u),r+=2*u,l.idDelta=[];for(var d=0;d<u;d++)l.idDelta.push(o.readShort(n,r)),r+=2;for(l.idRangeOffset=o.readUshorts(n,r,u),r+=2*u,l.glyphIdArray=[];r<a+c;)l.glyphIdArray.push(o.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,a.firstCode=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2,a.glyphIdArray=[];for(var c=0;c<l;c++)a.glyphIdArray.push(o.readUshort(n,r)),r+=2;return a},e.cmap.parse12=function(n,r){var o=e._bin,a={};a.format=o.readUshort(n,r),r+=2,r+=2,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4;var l=o.readUint(n,r);r+=4,a.groups=[];for(var c=0;c<l;c++){var h=r+12*c,u=o.readUint(n,h+0),d=o.readUint(n,h+4),f=o.readUint(n,h+8);a.groups.push([u,d,f])}return a},e.glyf={},e.glyf.parse=function(n,r,o,a){for(var l=[],c=0;c<a.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var o=e._bin,a=n._data,l=e._tabOffset(a,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=o.readShort(a,l),l+=2,c.xMin=o.readShort(a,l),l+=2,c.yMin=o.readShort(a,l),l+=2,c.xMax=o.readShort(a,l),l+=2,c.yMax=o.readShort(a,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(o.readUshort(a,l)),l+=2;var u=o.readUshort(a,l);if(l+=2,a.length-l<u)return null;c.instructions=o.readBytes(a,l,u),l+=u;var d=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<d;h++){var f=a[l];if(l++,c.flags.push(f),8&f){var g=a[l];l++;for(var v=0;v<g;v++)c.flags.push(f),h++}}for(c.xs=[],h=0;h<d;h++){var m=!!(2&c.flags[h]),p=!!(16&c.flags[h]);m?(c.xs.push(p?a[l]:-a[l]),l++):p?c.xs.push(0):(c.xs.push(o.readShort(a,l)),l+=2)}for(c.ys=[],h=0;h<d;h++)m=!!(4&c.flags[h]),p=!!(32&c.flags[h]),m?(c.ys.push(p?a[l]:-a[l]),l++):p?c.ys.push(0):(c.ys.push(o.readShort(a,l)),l+=2);var y=0,x=0;for(h=0;h<d;h++)y+=c.xs[h],x+=c.ys[h],c.xs[h]=y,c.ys[h]=x}else{var _;c.parts=[];do{_=o.readUshort(a,l),l+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(E),E.glyphIndex=o.readUshort(a,l),l+=2,1&_){var P=o.readShort(a,l);l+=2;var U=o.readShort(a,l);l+=2}else P=o.readInt8(a,l),l++,U=o.readInt8(a,l),l++;2&_?(E.m.tx=P,E.m.ty=U):(E.p1=P,E.p2=U),8&_?(E.m.a=E.m.d=o.readF2dot14(a,l),l+=2):64&_?(E.m.a=o.readF2dot14(a,l),l+=2,E.m.d=o.readF2dot14(a,l),l+=2):128&_&&(E.m.a=o.readF2dot14(a,l),l+=2,E.m.b=o.readF2dot14(a,l),l+=2,E.m.c=o.readF2dot14(a,l),l+=2,E.m.d=o.readF2dot14(a,l),l+=2)}while(32&_);if(256&_){var I=o.readUshort(a,l);for(l+=2,c.instr=[],h=0;h<I;h++)c.instr.push(a[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,o,a){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GPOS.subt)},e.GPOS.subt=function(n,r,o,a){var l=e._bin,c=o,h={};if(h.fmt=l.readUshort(n,o),o+=2,r==1||r==2||r==3||r==7||r==8&&h.fmt<=2){var u=l.readUshort(n,o);o+=2,h.coverage=e._lctf.readCoverage(n,u+c)}if(r==1&&h.fmt==1){var d=l.readUshort(n,o);o+=2,d!=0&&(h.pos=e.GPOS.readValueRecord(n,o,d))}else if(r==2&&h.fmt>=1&&h.fmt<=2){d=l.readUshort(n,o),o+=2;var f=l.readUshort(n,o);o+=2;var g=e._lctf.numOfOnes(d),v=e._lctf.numOfOnes(f);if(h.fmt==1){h.pairsets=[];var m=l.readUshort(n,o);o+=2;for(var p=0;p<m;p++){var y=c+l.readUshort(n,o);o+=2;var x=l.readUshort(n,y);y+=2;for(var _=[],E=0;E<x;E++){var P=l.readUshort(n,y);y+=2,d!=0&&(R=e.GPOS.readValueRecord(n,y,d),y+=2*g),f!=0&&(L=e.GPOS.readValueRecord(n,y,f),y+=2*v),_.push({gid2:P,val1:R,val2:L})}h.pairsets.push(_)}}if(h.fmt==2){var U=l.readUshort(n,o);o+=2;var I=l.readUshort(n,o);o+=2;var T=l.readUshort(n,o);o+=2;var M=l.readUshort(n,o);for(o+=2,h.classDef1=e._lctf.readClassDef(n,c+U),h.classDef2=e._lctf.readClassDef(n,c+I),h.matrix=[],p=0;p<T;p++){var D=[];for(E=0;E<M;E++){var R=null,L=null;d!=0&&(R=e.GPOS.readValueRecord(n,o,d),o+=2*g),f!=0&&(L=e.GPOS.readValueRecord(n,o,f),o+=2*v),D.push({val1:R,val2:L})}h.matrix.push(D)}}}else if(r==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),h.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),h.markClassCount=l.readUshort(n,o+4),h.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),h.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,h.markClassCount);else if(r==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,o)+c),h.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,o+2)+c),h.markClassCount=l.readUshort(n,o+4),h.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,o+6)+c),h.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,o+8)+c,h.markClassCount);else{if(r==9&&h.fmt==1){var A=l.readUshort(n,o);o+=2;var O=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=A;else if(a.ltype!=A)throw"invalid extension substitution";return e.GPOS.subt(n,a.ltype,c+O)}console.debug("unsupported GPOS table LookupType",r,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(n,r,o){var a=e._bin,l=[];return l.push(1&o?a.readShort(n,r):0),r+=1&o?2:0,l.push(2&o?a.readShort(n,r):0),r+=2&o?2:0,l.push(4&o?a.readShort(n,r):0),r+=4&o?2:0,l.push(8&o?a.readShort(n,r):0),r+=8&o?2:0,l},e.GPOS.readBaseArray=function(n,r,o){var a=e._bin,l=[],c=r,h=a.readUshort(n,r);r+=2;for(var u=0;u<h;u++){for(var d=[],f=0;f<o;f++)d.push(e.GPOS.readAnchorRecord(n,c+a.readUshort(n,r))),r+=2;l.push(d)}return l},e.GPOS.readMarkArray=function(n,r){var o=e._bin,a=[],l=r,c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=e.GPOS.readAnchorRecord(n,o.readUshort(n,r+2)+l);u.markClass=o.readUshort(n,r),a.push(u),r+=4}return a},e.GPOS.readAnchorRecord=function(n,r){var o=e._bin,a={};return a.fmt=o.readUshort(n,r),a.x=o.readShort(n,r+2),a.y=o.readShort(n,r+4),a},e.GSUB={},e.GSUB.parse=function(n,r,o,a){return e._lctf.parse(n,r,o,a,e.GSUB.subt)},e.GSUB.subt=function(n,r,o,a){var l=e._bin,c=o,h={};if(h.fmt=l.readUshort(n,o),o+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&h.fmt<=2||r==6&&h.fmt<=2){var u=l.readUshort(n,o);o+=2,h.coverage=e._lctf.readCoverage(n,c+u)}if(r==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(n,o),o+=2;else if(h.fmt==2){var d=l.readUshort(n,o);o+=2,h.newg=l.readUshorts(n,o,d),o+=2*h.newg.length}}else if(r==2&&h.fmt==1){d=l.readUshort(n,o),o+=2,h.seqs=[];for(var f=0;f<d;f++){var g=l.readUshort(n,o)+c;o+=2;var v=l.readUshort(n,g);h.seqs.push(l.readUshorts(n,g+2,v))}}else if(r==4)for(h.vals=[],d=l.readUshort(n,o),o+=2,f=0;f<d;f++){var m=l.readUshort(n,o);o+=2,h.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(r==5&&h.fmt==2){if(h.fmt==2){var p=l.readUshort(n,o);o+=2,h.cDef=e._lctf.readClassDef(n,c+p),h.scset=[];var y=l.readUshort(n,o);for(o+=2,f=0;f<y;f++){var x=l.readUshort(n,o);o+=2,h.scset.push(x==0?null:e.GSUB.readSubClassSet(n,c+x))}}}else if(r==6&&h.fmt==3){if(h.fmt==3){for(f=0;f<3;f++){d=l.readUshort(n,o),o+=2;for(var _=[],E=0;E<d;E++)_.push(e._lctf.readCoverage(n,c+l.readUshort(n,o+2*E)));o+=2*d,f==0&&(h.backCvg=_),f==1&&(h.inptCvg=_),f==2&&(h.ahedCvg=_)}d=l.readUshort(n,o),o+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(n,o,d)}}else{if(r==7&&h.fmt==1){var P=l.readUshort(n,o);o+=2;var U=l.readUint(n,o);if(o+=4,a.ltype==9)a.ltype=P;else if(a.ltype!=P)throw"invalid extension substitution";return e.GSUB.subt(n,a.ltype,c+U)}console.debug("unsupported GSUB table LookupType",r,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(n,r){var o=e._bin.readUshort,a=r,l=[],c=o(n,r);r+=2;for(var h=0;h<c;h++){var u=o(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,a+u))}return l},e.GSUB.readSubClassRule=function(n,r){var o=e._bin.readUshort,a={},l=o(n,r),c=o(n,r+=2);r+=2,a.input=[];for(var h=0;h<l-1;h++)a.input.push(o(n,r)),r+=2;return a.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),a},e.GSUB.readSubstLookupRecords=function(n,r,o){for(var a=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(a(n,r),a(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=o.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,a+u))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var o=e._bin,a={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=o.readUshort(n,r);r+=2,c==1&&h--,a[l[c]]=o.readUshorts(n,r,h),r+=2*a[l[c]].length}return h=o.readUshort(n,r),r+=2,a.subst=o.readUshorts(n,r,2*h),r+=2*a.subst.length,a},e.GSUB.readLigatureSet=function(n,r){var o=e._bin,a=r,l=[],c=o.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=o.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,a+u))}return l},e.GSUB.readLigature=function(n,r){var o=e._bin,a={chain:[]};a.nglyph=o.readUshort(n,r),r+=2;var l=o.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)a.chain.push(o.readUshort(n,r)),r+=2;return a},e.head={},e.head.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.fontRevision=a.readFixed(n,r),r+=4,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4,l.flags=a.readUshort(n,r),r+=2,l.unitsPerEm=a.readUshort(n,r),r+=2,l.created=a.readUint64(n,r),r+=8,l.modified=a.readUint64(n,r),r+=8,l.xMin=a.readShort(n,r),r+=2,l.yMin=a.readShort(n,r),r+=2,l.xMax=a.readShort(n,r),r+=2,l.yMax=a.readShort(n,r),r+=2,l.macStyle=a.readUshort(n,r),r+=2,l.lowestRecPPEM=a.readUshort(n,r),r+=2,l.fontDirectionHint=a.readShort(n,r),r+=2,l.indexToLocFormat=a.readShort(n,r),r+=2,l.glyphDataFormat=a.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,o){var a=e._bin,l={};return a.readFixed(n,r),r+=4,l.ascender=a.readShort(n,r),r+=2,l.descender=a.readShort(n,r),r+=2,l.lineGap=a.readShort(n,r),r+=2,l.advanceWidthMax=a.readUshort(n,r),r+=2,l.minLeftSideBearing=a.readShort(n,r),r+=2,l.minRightSideBearing=a.readShort(n,r),r+=2,l.xMaxExtent=a.readShort(n,r),r+=2,l.caretSlopeRise=a.readShort(n,r),r+=2,l.caretSlopeRun=a.readShort(n,r),r+=2,l.caretOffset=a.readShort(n,r),r+=2,r+=8,l.metricDataFormat=a.readShort(n,r),r+=2,l.numberOfHMetrics=a.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,o,a){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,d=0;d<a.maxp.numGlyphs;d++)d<a.hhea.numberOfHMetrics&&(h=l.readUshort(n,r),r+=2,u=l.readShort(n,r),r+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(n,r,o,a){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,o,a);var h=l.readUshort(n,r);r+=2;for(var u={glyph1:[],rval:[]},d=0;d<h;d++){r+=2,o=l.readUshort(n,r),r+=2;var f=l.readUshort(n,r);r+=2;var g=f>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;r=e.kern.readFormat0(n,r,u)}return u},e.kern.parseV1=function(n,r,o,a){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(n,r),r+=4;var d=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var f=d>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;r=e.kern.readFormat0(n,r,h)}return h},e.kern.readFormat0=function(n,r,o){var a=e._bin,l=-1,c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var h=0;h<c;h++){var u=a.readUshort(n,r);r+=2;var d=a.readUshort(n,r);r+=2;var f=a.readShort(n,r);r+=2,u!=l&&(o.glyph1.push(u),o.rval.push({glyph2:[],vals:[]}));var g=o.rval[o.rval.length-1];g.glyph2.push(d),g.vals.push(f),l=u}return r},e.loca={},e.loca.parse=function(n,r,o,a){var l=e._bin,c=[],h=a.head.indexToLocFormat,u=a.maxp.numGlyphs+1;if(h==0)for(var d=0;d<u;d++)c.push(l.readUshort(n,r+(d<<1))<<1);if(h==1)for(d=0;d<u;d++)c.push(l.readUint(n,r+(d<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,o){var a=e._bin,l={},c=a.readUint(n,r);return r+=4,l.numGlyphs=a.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=a.readUshort(n,r),r+=2,l.maxContours=a.readUshort(n,r),r+=2,l.maxCompositePoints=a.readUshort(n,r),r+=2,l.maxCompositeContours=a.readUshort(n,r),r+=2,l.maxZones=a.readUshort(n,r),r+=2,l.maxTwilightPoints=a.readUshort(n,r),r+=2,l.maxStorage=a.readUshort(n,r),r+=2,l.maxFunctionDefs=a.readUshort(n,r),r+=2,l.maxInstructionDefs=a.readUshort(n,r),r+=2,l.maxStackElements=a.readUshort(n,r),r+=2,l.maxSizeOfInstructions=a.readUshort(n,r),r+=2,l.maxComponentElements=a.readUshort(n,r),r+=2,l.maxComponentDepth=a.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,o){var a=e._bin,l={};a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,f=0;f<c;f++){var g=a.readUshort(n,r);r+=2;var v=a.readUshort(n,r);r+=2;var m=a.readUshort(n,r);r+=2;var p=a.readUshort(n,r);r+=2;var y=a.readUshort(n,r);r+=2;var x=a.readUshort(n,r);r+=2;var _,E=u[p],P=d+12*c+x;if(g==0)_=a.readUnicode(n,P,y/2);else if(g==3&&v==0)_=a.readUnicode(n,P,y/2);else if(v==0)_=a.readASCII(n,P,y);else if(v==1)_=a.readUnicode(n,P,y/2);else if(v==3)_=a.readUnicode(n,P,y/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;_=a.readASCII(n,P,y),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var U="p"+g+","+m.toString(16);l[U]==null&&(l[U]={}),l[U][E!==void 0?E:p]=_,l[U]._lang=m}for(var I in l)if(l[I].postScriptName!=null&&l[I]._lang==1033)return l[I];for(var I in l)if(l[I].postScriptName!=null&&l[I]._lang==0)return l[I];for(var I in l)if(l[I].postScriptName!=null&&l[I]._lang==3084)return l[I];for(var I in l)if(l[I].postScriptName!=null)return l[I];for(var I in l){h=I;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(n,r,o){var a=e._bin.readUshort(n,r);r+=2;var l={};if(a==0)e["OS/2"].version0(n,r,l);else if(a==1)e["OS/2"].version1(n,r,l);else if(a==2||a==3||a==4)e["OS/2"].version2(n,r,l);else{if(a!=5)throw"unknown OS/2 table version: "+a;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,o){var a=e._bin;return o.xAvgCharWidth=a.readShort(n,r),r+=2,o.usWeightClass=a.readUshort(n,r),r+=2,o.usWidthClass=a.readUshort(n,r),r+=2,o.fsType=a.readUshort(n,r),r+=2,o.ySubscriptXSize=a.readShort(n,r),r+=2,o.ySubscriptYSize=a.readShort(n,r),r+=2,o.ySubscriptXOffset=a.readShort(n,r),r+=2,o.ySubscriptYOffset=a.readShort(n,r),r+=2,o.ySuperscriptXSize=a.readShort(n,r),r+=2,o.ySuperscriptYSize=a.readShort(n,r),r+=2,o.ySuperscriptXOffset=a.readShort(n,r),r+=2,o.ySuperscriptYOffset=a.readShort(n,r),r+=2,o.yStrikeoutSize=a.readShort(n,r),r+=2,o.yStrikeoutPosition=a.readShort(n,r),r+=2,o.sFamilyClass=a.readShort(n,r),r+=2,o.panose=a.readBytes(n,r,10),r+=10,o.ulUnicodeRange1=a.readUint(n,r),r+=4,o.ulUnicodeRange2=a.readUint(n,r),r+=4,o.ulUnicodeRange3=a.readUint(n,r),r+=4,o.ulUnicodeRange4=a.readUint(n,r),r+=4,o.achVendID=[a.readInt8(n,r),a.readInt8(n,r+1),a.readInt8(n,r+2),a.readInt8(n,r+3)],r+=4,o.fsSelection=a.readUshort(n,r),r+=2,o.usFirstCharIndex=a.readUshort(n,r),r+=2,o.usLastCharIndex=a.readUshort(n,r),r+=2,o.sTypoAscender=a.readShort(n,r),r+=2,o.sTypoDescender=a.readShort(n,r),r+=2,o.sTypoLineGap=a.readShort(n,r),r+=2,o.usWinAscent=a.readUshort(n,r),r+=2,o.usWinDescent=a.readUshort(n,r),r+2},e["OS/2"].version1=function(n,r,o){var a=e._bin;return r=e["OS/2"].version0(n,r,o),o.ulCodePageRange1=a.readUint(n,r),r+=4,o.ulCodePageRange2=a.readUint(n,r),r+4},e["OS/2"].version2=function(n,r,o){var a=e._bin;return r=e["OS/2"].version1(n,r,o),o.sxHeight=a.readShort(n,r),r+=2,o.sCapHeight=a.readShort(n,r),r+=2,o.usDefault=a.readUshort(n,r),r+=2,o.usBreak=a.readUshort(n,r),r+=2,o.usMaxContext=a.readUshort(n,r),r+2},e["OS/2"].version5=function(n,r,o){var a=e._bin;return r=e["OS/2"].version2(n,r,o),o.usLowerOpticalPointSize=a.readUshort(n,r),r+=2,o.usUpperOpticalPointSize=a.readUshort(n,r),r+2},e.post={},e.post.parse=function(n,r,o){var a=e._bin,l={};return l.version=a.readFixed(n,r),r+=4,l.italicAngle=a.readFixed(n,r),r+=4,l.underlinePosition=a.readShort(n,r),r+=2,l.underlineThickness=a.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var o=n.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var l=o.tables[a];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(r<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=r&&r<=u[1])return u[2]+(r-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var o={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var a=n.SVG.entries[r];return a==null?o:(typeof a=="string"&&(a=e.SVG.toPath(a),n.SVG.entries[r]=a),a)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,h=n.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=r;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,h,o)}else n.glyf&&e.U._drawGlyf(r,n,o);return o},e.U._drawGlyf=function(n,r,o){var a=r.glyf[n];a==null&&(a=r.glyf[n]=e.glyf._parseGlyf(r,n)),a!=null&&(a.noc>-1?e.U._simpleGlyph(a,o):e.U._compoGlyph(a,r,o))},e.U._simpleGlyph=function(n,r){for(var o=0;o<n.noc;o++){for(var a=o==0?0:n.endPts[o-1]+1,l=n.endPts[o],c=a;c<=l;c++){var h=c==a?l:c-1,u=c==l?a:c+1,d=1&n.flags[c],f=1&n.flags[h],g=1&n.flags[u],v=n.xs[c],m=n.ys[c];if(c==a)if(d){if(!f){e.U.P.moveTo(r,v,m);continue}e.U.P.moveTo(r,n.xs[h],n.ys[h])}else f?e.U.P.moveTo(r,n.xs[h],n.ys[h]):e.U.P.moveTo(r,(n.xs[h]+v)/2,(n.ys[h]+m)/2);d?f&&e.U.P.lineTo(r,v,m):g?e.U.P.qcurveTo(r,v,m,n.xs[u],n.ys[u]):e.U.P.qcurveTo(r,v,m,(v+n.xs[u])/2,(m+n.ys[u])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,o){for(var a=0;a<n.parts.length;a++){var l={cmds:[],crds:[]},c=n.parts[a];e.U._drawGlyf(c.glyphIndex,r,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var d=l.crds[u],f=l.crds[u+1];o.crds.push(d*h.a+f*h.b+h.tx),o.crds.push(d*h.c+f*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)o.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(n,r){var o=e._lctf.getInterval(r,n);return o==-1?0:r[o+2]},e.U._applySubs=function(n,r,o,a){for(var l=n.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var h,u=o.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,n[r]))!=-1){if(o.ltype==1)n[r],u.fmt==1?n[r]=n[r]+u.delta:n[r]=u.newg[h];else if(o.ltype==4)for(var d=u.vals[h],f=0;f<d.length;f++){var g=d[f],v=g.chain.length;if(!(v>l)){for(var m=!0,p=0,y=0;y<v;y++){for(;n[r+p+(1+y)]==-1;)p++;g.chain[y]!=n[r+p+(1+y)]&&(m=!1)}if(m){for(n[r]=g.nglyph,y=0;y<v+p;y++)n[r+y+1]=-1;break}}}else if(o.ltype==5&&u.fmt==2)for(var x=e._lctf.getInterval(u.cDef,n[r]),_=u.cDef[x+2],E=u.scset[_],P=0;P<E.length;P++){var U=E[P],I=U.input;if(!(I.length>l)){for(m=!0,y=0;y<I.length;y++){var T=e._lctf.getInterval(u.cDef,n[r+1+y]);if(x==-1&&u.cDef[T+2]!=I[y]){m=!1;break}}if(m){var M=U.substLookupRecords;for(f=0;f<M.length;f+=2)M[f],M[f+1]}}}else if(o.ltype==6&&u.fmt==3){if(!e.U._glsCovered(n,u.backCvg,r-u.backCvg.length)||!e.U._glsCovered(n,u.inptCvg,r)||!e.U._glsCovered(n,u.ahedCvg,r+u.inptCvg.length))continue;var D=u.lookupRec;for(P=0;P<D.length;P+=2){x=D[P];var R=a[D[P+1]];e.U._applySubs(n,r+x,R,a)}}}}},e.U._glsCovered=function(n,r,o){for(var a=0;a<r.length;a++)if(e._lctf.coverageIndex(r[a],n[o+a])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,o){for(var a={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var h=r[c];if(h!=-1){for(var u=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,d=e.U.glyphToPath(n,h),f=0;f<d.crds.length;f+=2)a.crds.push(d.crds[f]+l),a.crds.push(d.crds[f+1]);for(o&&a.cmds.push(o),f=0;f<d.cmds.length;f++)a.cmds.push(d.cmds[f]);o&&a.cmds.push("X"),l+=n.hmtx.aWidth[h],c<r.length-1&&(l+=e.U.getPairAdjustment(n,h,u))}}return a},e.U.P={},e.U.P.moveTo=function(n,r,o){n.cmds.push("M"),n.crds.push(r,o)},e.U.P.lineTo=function(n,r,o){n.cmds.push("L"),n.crds.push(r,o)},e.U.P.curveTo=function(n,r,o,a,l,c,h){n.cmds.push("C"),n.crds.push(r,o,a,l,c,h)},e.U.P.qcurveTo=function(n,r,o,a,l){n.cmds.push("Q"),n.crds.push(r,o,a,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,o,a,l){for(var c=r.stack,h=r.nStems,u=r.haveWidth,d=r.width,f=r.open,g=0,v=r.x,m=r.y,p=0,y=0,x=0,_=0,E=0,P=0,U=0,I=0,T=0,M=0,D={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,D);var R=D.val;if(g+=D.size,R=="o1"||R=="o18")c.length%2!=0&&!u&&(d=c.shift()+a.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(R=="o3"||R=="o23")c.length%2!=0&&!u&&(d=c.shift()+a.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(R=="o4")c.length>1&&!u&&(d=c.shift()+a.nominalWidthX,u=!0),f&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),f=!0;else if(R=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(R=="o6"||R=="o7")for(var L=c.length,A=R=="o6",O=0;O<L;O++){var F=c.shift();A?v+=F:m+=F,A=!A,e.U.P.lineTo(l,v,m)}else if(R=="o8"||R=="o24"){L=c.length;for(var k=0;k+6<=L;)p=v+c.shift(),y=m+c.shift(),x=p+c.shift(),_=y+c.shift(),v=x+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,p,y,x,_,v,m),k+=6;R=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(R=="o11")break;if(R=="o1234"||R=="o1235"||R=="o1236"||R=="o1237")R=="o1234"&&(y=m,x=(p=v+c.shift())+c.shift(),M=_=y+c.shift(),P=_,I=m,v=(U=(E=(T=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,p,y,x,_,T,M),e.U.P.curveTo(l,E,P,U,I,v,m)),R=="o1235"&&(p=v+c.shift(),y=m+c.shift(),x=p+c.shift(),_=y+c.shift(),T=x+c.shift(),M=_+c.shift(),E=T+c.shift(),P=M+c.shift(),U=E+c.shift(),I=P+c.shift(),v=U+c.shift(),m=I+c.shift(),c.shift(),e.U.P.curveTo(l,p,y,x,_,T,M),e.U.P.curveTo(l,E,P,U,I,v,m)),R=="o1236"&&(p=v+c.shift(),y=m+c.shift(),x=p+c.shift(),M=_=y+c.shift(),P=_,U=(E=(T=x+c.shift())+c.shift())+c.shift(),I=P+c.shift(),v=U+c.shift(),e.U.P.curveTo(l,p,y,x,_,T,M),e.U.P.curveTo(l,E,P,U,I,v,m)),R=="o1237"&&(p=v+c.shift(),y=m+c.shift(),x=p+c.shift(),_=y+c.shift(),T=x+c.shift(),M=_+c.shift(),E=T+c.shift(),P=M+c.shift(),U=E+c.shift(),I=P+c.shift(),Math.abs(U-v)>Math.abs(I-m)?v=U+c.shift():m=I+c.shift(),e.U.P.curveTo(l,p,y,x,_,T,M),e.U.P.curveTo(l,E,P,U,I,v,m));else if(R=="o14"){if(c.length>0&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),c.length==4){var N=c.shift(),Y=c.shift(),H=c.shift(),V=c.shift(),j=e.CFF.glyphBySE(o,H),me=e.CFF.glyphBySE(o,V);e.U._drawCFF(o.CharStrings[j],r,o,a,l),r.x=N,r.y=Y,e.U._drawCFF(o.CharStrings[me],r,o,a,l)}f&&(e.U.P.closePath(l),f=!1)}else if(R=="o19"||R=="o20")c.length%2!=0&&!u&&(d=c.shift()+a.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,g+=h+7>>3;else if(R=="o21")c.length>2&&!u&&(d=c.shift()+a.nominalWidthX,u=!0),m+=c.pop(),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),f=!0;else if(R=="o22")c.length>1&&!u&&(d=c.shift()+a.nominalWidthX,u=!0),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),f=!0;else if(R=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);p=v+c.shift(),y=m+c.shift(),x=p+c.shift(),_=y+c.shift(),v=x+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,p,y,x,_,v,m)}else if(R=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)p=v,y=m+c.shift(),v=x=p+c.shift(),m=(_=y+c.shift())+c.shift(),e.U.P.curveTo(l,p,y,x,_,v,m);else if(R=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)y=m,x=(p=v+c.shift())+c.shift(),_=y+c.shift(),v=x+c.shift(),m=_,e.U.P.curveTo(l,p,y,x,_,v,m);else if(R=="o10"||R=="o29"){var z=R=="o10"?a:o;if(c.length==0)console.debug("error: empty stack");else{var W=c.pop(),de=z.Subrs[W+z.Bias];r.x=v,r.y=m,r.nStems=h,r.haveWidth=u,r.width=d,r.open=f,e.U._drawCFF(de,r,o,a,l),v=r.x,m=r.y,h=r.nStems,u=r.haveWidth,d=r.width,f=r.open}}else if(R=="o30"||R=="o31"){var ie=c.length,ce=(k=0,R=="o31");for(k+=ie-(L=-3&ie);k<L;)ce?(y=m,x=(p=v+c.shift())+c.shift(),m=(_=y+c.shift())+c.shift(),L-k==5?(v=x+c.shift(),k++):v=x,ce=!1):(p=v,y=m+c.shift(),x=p+c.shift(),_=y+c.shift(),v=x+c.shift(),L-k==5?(m=_+c.shift(),k++):m=_,ce=!0),e.U.P.curveTo(l,p,y,x,_,v,m),k+=4}else{if((R+"").charAt(0)=="o")throw console.debug("Unknown operation: "+R,n),R;c.push(R)}}}r.x=v,r.y=m,r.nStems=h,r.haveWidth=u,r.width=d,r.open=f};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr},function(){return(function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(R,L){for(var A=new t(31),O=0;O<31;++O)A[O]=L+=1<<R[O-1];var F=new i(A[30]);for(O=1;O<30;++O)for(var k=A[O];k<A[O+1];++k)F[k]=k-A[O]<<5|O;return[A,F]},l=a(n,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=a(r,0)[0],d=new t(32768),f=0;f<32768;++f){var g=(43690&f)>>>1|(21845&f)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,d[f]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(R,L,A){for(var O=R.length,F=0,k=new t(L);F<O;++F)++k[R[F]-1];var N,Y=new t(L);for(F=0;F<L;++F)Y[F]=Y[F-1]+k[F-1]<<1;{N=new t(1<<L);var H=15-L;for(F=0;F<O;++F)if(R[F])for(var V=F<<4|R[F],j=L-R[F],me=Y[R[F]-1]++<<j,z=me|(1<<j)-1;me<=z;++me)N[d[me]>>>H]=V}return N},m=new e(288);for(f=0;f<144;++f)m[f]=8;for(f=144;f<256;++f)m[f]=9;for(f=256;f<280;++f)m[f]=7;for(f=280;f<288;++f)m[f]=8;var p=new e(32);for(f=0;f<32;++f)p[f]=5;var y=v(m,9),x=v(p,5),_=function(R){for(var L=R[0],A=1;A<R.length;++A)R[A]>L&&(L=R[A]);return L},E=function(R,L,A){var O=L/8|0;return(R[O]|R[O+1]<<8)>>(7&L)&A},P=function(R,L){var A=L/8|0;return(R[A]|R[A+1]<<8|R[A+2]<<16)>>(7&L)},U=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],I=function(R,L,A){var O=new Error(L||U[R]);if(O.code=R,Error.captureStackTrace&&Error.captureStackTrace(O,I),!A)throw O;return O},T=function(R,L,A){var O=R.length;if(!O||A&&!A.l&&O<5)return L||new e(0);var F=!L||A,k=!A||A.i;A||(A={}),L||(L=new e(3*O));var N,Y=function(Ae){var He=L.length;if(Ae>He){var Oe=new e(Math.max(2*He,Ae));Oe.set(L),L=Oe}},H=A.f||0,V=A.p||0,j=A.b||0,me=A.l,z=A.d,W=A.m,de=A.n,ie=8*O;do{if(!me){A.f=H=E(R,V,1);var ce=E(R,V+1,3);if(V+=3,!ce){var ge=R[(ue=((N=V)/8|0)+(7&N&&1)+4)-4]|R[ue-3]<<8,ve=ue+ge;if(ve>O){k&&I(0);break}F&&Y(j+ge),L.set(R.subarray(ue,ve),j),A.b=j+=ge,A.p=V=8*ve;continue}if(ce==1)me=y,z=x,W=9,de=5;else if(ce==2){var oe=E(R,V,31)+257,J=E(R,V+10,15)+4,X=oe+E(R,V+5,31)+1;V+=14;for(var w=new e(X),pe=new e(19),Z=0;Z<J;++Z)pe[o[Z]]=E(R,V+3*Z,7);V+=3*J;var he=_(pe),le=(1<<he)-1,Te=v(pe,he);for(Z=0;Z<X;){var ue,C=Te[E(R,V,le)];if(V+=15&C,(ue=C>>>4)<16)w[Z++]=ue;else{var S=0,K=0;for(ue==16?(K=3+E(R,V,3),V+=2,S=w[Z-1]):ue==17?(K=3+E(R,V,7),V+=3):ue==18&&(K=11+E(R,V,127),V+=7);K--;)w[Z++]=S}}var fe=w.subarray(0,oe),te=w.subarray(oe);W=_(fe),de=_(te),me=v(fe,W),z=v(te,de)}else I(1);if(V>ie){k&&I(0);break}}F&&Y(j+131072);for(var Q=(1<<W)-1,_e=(1<<de)-1,xe=V;;xe=V){var ye=(S=me[P(R,V)&Q])>>>4;if((V+=15&S)>ie){k&&I(0);break}if(S||I(2),ye<256)L[j++]=ye;else{if(ye==256){xe=V,me=null;break}var Ge=ye-254;if(ye>264){var ae=n[Z=ye-257];Ge=E(R,V,(1<<ae)-1)+c[Z],V+=ae}var Me=z[P(R,V)&_e],Pe=Me>>>4;if(Me||I(3),V+=15&Me,te=u[Pe],Pe>3&&(ae=r[Pe],te+=P(R,V)&(1<<ae)-1,V+=ae),V>ie){k&&I(0);break}F&&Y(j+131072);for(var Fe=j+Ge;j<Fe;j+=4)L[j]=L[j-te],L[j+1]=L[j+1-te],L[j+2]=L[j+2-te],L[j+3]=L[j+3-te];j=Fe}}A.l=me,A.p=xe,A.b=j,me&&(H=1,A.m=W,A.d=z,A.n=de)}while(!H);return j==L.length?L:(function(Ae,He,Oe){(Oe==null||Oe>Ae.length)&&(Oe=Ae.length);var Ie=new(Ae instanceof t?t:Ae instanceof i?i:e)(Oe-He);return Ie.set(Ae.subarray(He,Oe)),Ie})(L,0,j)},M=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(M,{stream:!0})}catch{}return s.convert_streams=function(R){var L=new DataView(R),A=0;function O(){var oe=L.getUint16(A);return A+=2,oe}function F(){var oe=L.getUint32(A);return A+=4,oe}function k(oe){ge.setUint16(ve,oe),ve+=2}function N(oe){ge.setUint32(ve,oe),ve+=4}for(var Y={signature:F(),flavor:F(),length:F(),numTables:O(),reserved:O(),totalSfntSize:F(),majorVersion:O(),minorVersion:O(),metaOffset:F(),metaLength:F(),metaOrigLength:F(),privOffset:F(),privLength:F()},H=0;Math.pow(2,H)<=Y.numTables;)H++;H--;for(var V=16*Math.pow(2,H),j=16*Y.numTables-V,me=12,z=[],W=0;W<Y.numTables;W++)z.push({tag:F(),offset:F(),compLength:F(),origLength:F(),origChecksum:F()}),me+=16;var de,ie=new Uint8Array(12+16*z.length+z.reduce(function(oe,J){return oe+J.origLength+4},0)),ce=ie.buffer,ge=new DataView(ce),ve=0;return N(Y.flavor),k(Y.numTables),k(V),k(H),k(j),z.forEach(function(oe){N(oe.tag),N(oe.origChecksum),N(me),N(oe.origLength),oe.outOffset=me,(me+=oe.origLength)%4!=0&&(me+=4-me%4)}),z.forEach(function(oe){var J,X=R.slice(oe.offset,oe.offset+oe.compLength);if(oe.compLength!=oe.origLength){var w=new Uint8Array(oe.origLength);J=new Uint8Array(X,2),T(J,w)}else w=new Uint8Array(X);ie.set(w,oe.outOffset);var pe=0;(me=oe.outOffset+oe.origLength)%4!=0&&(pe=4-me%4),ie.set(new Uint8Array(pe).buffer,oe.outOffset+oe.origLength),de=me+pe}),ce.slice(0,de)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams},function(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"};let n;function r(u){if(!n){const d={R:2,L:1,D:4,C:16,U:32,T:8};n=new Map;for(let f in i){let g=0;i[f].split(",").forEach(v=>{let[m,p]=v.split("+");m=parseInt(m,36),p=p?parseInt(p,36):0,n.set(g+=m,d[f]);for(let y=p;y--;)n.set(++g,d[f])})}}return n.get(u)||32}const o=[null,"isol","init","fina","medi"];function a(u){const d=new Uint8Array(u.length);let f=32,g=1,v=-1;for(let m=0;m<u.length;m++){const p=u.codePointAt(m);let y=0|r(p),x=1;8&y||(21&f?22&y?(x=3,g!==1&&g!==3||d[v]++):33&y&&(g!==2&&g!==4||d[v]--):34&f&&(g!==2&&g!==4||d[v]--),g=d[m]=x,f=y,v=m,p>65535&&m++)}return d}function l(u,d){const f=u.GDEF&&u.GDEF.glyphClassDef;return f?s.U._getGlyphClass(d,f):0}function c(...u){for(let d=0;d<u.length;d++)if(typeof u[d]=="number")return u[d]}function h(u){const d=Object.create(null),f=u["OS/2"],g=u.hhea,v=u.head.unitsPerEm,m=c(f&&f.sTypoAscender,g&&g.ascender,v),p={unitsPerEm:v,ascender:m,descender:c(f&&f.sTypoDescender,g&&g.descender,0),capHeight:c(f&&f.sCapHeight,m),xHeight:c(f&&f.sxHeight,m),lineGap:c(f&&f.sTypoLineGap,g&&g.lineGap),supportsCodePoint:y=>s.U.codeToGlyph(u,y)>0,forEachGlyph(y,x,_,E){let P=0;const U=1/p.unitsPerEm*x,I=(function(D,R){const L=[];for(let O=0;O<R.length;O++){const F=R.codePointAt(O);F>65535&&O++,L.push(s.U.codeToGlyph(D,F))}const A=D.GSUB;if(A){const{lookupList:O,featureList:F}=A;let k;const N=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,Y=[];F.forEach(H=>{if(N.test(H.tag))for(let V=0;V<H.tab.length;V++){if(Y[H.tab[V]])continue;Y[H.tab[V]]=!0;const j=O[H.tab[V]],me=/^(isol|init|fina|medi)$/.test(H.tag);me&&!k&&(k=a(R));for(let z=0;z<L.length;z++)k&&me&&o[k[z]]!==H.tag||s.U._applySubs(L,z,j,O)}})}return L})(u,y);let T=0;const M=(function(D,R){const L=new Int16Array(3*R.length);let A=0;for(;A<R.length;A++){const N=R[A];if(N===-1)continue;L[3*A+2]=D.hmtx.aWidth[N];const Y=D.GPOS;if(Y){const H=Y.lookupList;for(let V=0;V<H.length;V++){const j=H[V];for(let me=0;me<j.tabs.length;me++){const z=j.tabs[me];if(j.ltype===1){if(s._lctf.coverageIndex(z.coverage,N)!==-1&&z.pos){k(z.pos,A);break}}else if(j.ltype===2){let W=null,de=O();if(de!==-1){const ie=s._lctf.coverageIndex(z.coverage,R[de]);if(ie!==-1){if(z.fmt===1){const ce=z.pairsets[ie];for(let ge=0;ge<ce.length;ge++)ce[ge].gid2===N&&(W=ce[ge])}else if(z.fmt===2){const ce=s.U._getGlyphClass(R[de],z.classDef1),ge=s.U._getGlyphClass(N,z.classDef2);W=z.matrix[ce][ge]}if(W){W.val1&&k(W.val1,de),W.val2&&k(W.val2,A);break}}}}else if(j.ltype===4){const W=s._lctf.coverageIndex(z.markCoverage,N);if(W!==-1){const de=O(F),ie=de===-1?-1:s._lctf.coverageIndex(z.baseCoverage,R[de]);if(ie!==-1){const ce=z.markArray[W],ge=z.baseArray[ie][ce.markClass];L[3*A]=ge.x-ce.x+L[3*de]-L[3*de+2],L[3*A+1]=ge.y-ce.y+L[3*de+1];break}}}else if(j.ltype===6){const W=s._lctf.coverageIndex(z.mark1Coverage,N);if(W!==-1){const de=O();if(de!==-1){const ie=R[de];if(l(D,ie)===3){const ce=s._lctf.coverageIndex(z.mark2Coverage,ie);if(ce!==-1){const ge=z.mark1Array[W],ve=z.mark2Array[ce][ge.markClass];L[3*A]=ve.x-ge.x+L[3*de]-L[3*de+2],L[3*A+1]=ve.y-ge.y+L[3*de+1];break}}}}}}}}else if(D.kern&&!D.cff){const H=O();if(H!==-1){const V=D.kern.glyph1.indexOf(R[H]);if(V!==-1){const j=D.kern.rval[V].glyph2.indexOf(N);j!==-1&&(L[3*H+2]+=D.kern.rval[V].vals[j])}}}}return L;function O(N){for(let Y=A-1;Y>=0;Y--)if(R[Y]!==-1&&(!N||N(R[Y])))return Y;return-1}function F(N){return l(D,N)===1}function k(N,Y){for(let H=0;H<3;H++)L[3*Y+H]+=N[H]||0}})(u,I);return I.forEach((D,R)=>{if(D!==-1){let L=d[D];if(!L){const{cmds:A,crds:O}=s.U.glyphToPath(u,D);let F,k,N,Y,H="",V=0;for(let j=0,me=A.length;j<me;j++){const z=t[A[j]];H+=A[j];for(let W=1;W<=z;W++)H+=(W>1?",":"")+O[V++]}if(O.length){F=k=1/0,N=Y=-1/0;for(let j=0,me=O.length;j<me;j+=2){let z=O[j],W=O[j+1];z<F&&(F=z),W<k&&(k=W),z>N&&(N=z),W>Y&&(Y=W)}}else F=N=k=Y=0;L=d[D]={index:D,advanceWidth:u.hmtx.aWidth[D],xMin:F,yMin:k,xMax:N,yMax:Y,path:H}}E.call(null,L,P+M[3*R]*U,M[3*R+1]*U,T),P+=M[3*R+2]*U,_&&(P+=_*x)}T+=y.codePointAt(T)>65535?2:1}),P}};return p}return function(u){const d=new Uint8Array(u,0,4),f=s._bin.readASCII(d,0,4);if(f==="wOFF")u=e(u);else if(f==="wOF2")throw new Error("woff2 fonts not supported");return h(s.parse(u)[0])}}],init:(s,e,t)=>t(s(),e())}),Wx=mr({name:"FontResolver",dependencies:[function(s,e){const t=Object.create(null),i=Object.create(null);function n(r,o){let a=t[r];a?o(a):i[r]?i[r].push(o):(i[r]=[o],(function(l,c){const h=u=>{console.error(`Failure loading font ${l}`,u)};try{const u=new XMLHttpRequest;u.open("get",l,!0),u.responseType="arraybuffer",u.onload=function(){if(u.status>=400)h(new Error(u.statusText));else if(u.status>0)try{const d=s(u.response);d.src=l,c(d)}catch(d){h(d)}},u.onerror=h,u.send()}catch(u){h(u)}})(r,l=>{l.src=r,t[r]=l,i[r].forEach(c=>c(l)),delete i[r]}))}return function(r,o,{lang:a,fonts:l=[],style:c="normal",weight:h="normal",unicodeFontsURL:u}={}){const d=new Uint8Array(r.length),f=[];r.length||p();const g=new Map,v=[];if(c!=="italic"&&(c="normal"),typeof h!="number"&&(h=h==="bold"?700:400),l&&!Array.isArray(l)&&(l=[l]),(l=l.slice().filter(x=>!x.lang||x.lang.test(a)).reverse()).length){let E=0;(function P(U=0){for(let I=U,T=r.length;I<T;I++){const M=r.codePointAt(I);if(E===1&&f[d[I-1]].supportsCodePoint(M)||I>0&&/\s/.test(r[I]))d[I]=d[I-1],E===2&&(v[v.length-1][1]=I);else for(let D=d[I],R=l.length;D<=R;D++)if(D===R)(E===2?v[v.length-1]:v[v.length]=[I,I])[1]=I,E=2;else{d[I]=D;const{src:L,unicodeRange:A}=l[D];if(!A||y(M,A)){const O=t[L];if(!O)return void n(L,()=>{P(I)});if(O.supportsCodePoint(M)){let F=g.get(O);typeof F!="number"&&(F=f.length,f.push(O),g.set(O,F)),d[I]=F,E=1;break}}}M>65535&&I+1<T&&(d[I+1]=d[I],I++,E===2&&(v[v.length-1][1]=I))}m()})()}else v.push([0,r.length-1]),m();function m(){if(v.length){const x=v.map(_=>r.substring(_[0],_[1]+1)).join(`
`);e.getFontsForString(x,{lang:a||void 0,style:c,weight:h,dataUrl:u}).then(({fontUrls:_,chars:E})=>{const P=f.length;let U=0;v.forEach(T=>{for(let M=0,D=T[1]-T[0];M<=D;M++)d[T[0]+M]=E[U++]+P;U++});let I=0;_.forEach((T,M)=>{n(T,D=>{f[M+P]=D,++I===_.length&&p()})})})}else p()}function p(){o({chars:d,fonts:f})}function y(x,_){for(let E=0;E<_.length;E++){const[P,U=P]=_[E];if(P<=x&&x<=U)return!0}return!1}}},Hx,function(){return(function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(y){var x=y>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&y))},e.prototype.has=function(y){var x=this.buckets.get(y>>5);return x!==void 0&&!!(x&1<<(31&y))},e.prototype.serialize=function(){var y=[];return this.buckets.forEach(function(x,_){y.push((+_).toString(36)+":"+x.toString(36))}),y.join(",")},e.prototype.deserialize=function(y){var x=this;this.buckets.clear(),y.split(",").forEach(function(_){var E=_.split(":");x.buckets.set(parseInt(E[0],36),parseInt(E[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(y){var x=(function(E){return E&n})(y).toString(16),_=(function(E){return(E&n)+t-1})(y).toString(16);return"codepoint-index/plane"+(y>>16)+"/"+x+"-"+_+".json"}function o(y,x){var _=y&i,E=x.codePointAt(_/6|0);return!!((E=(E||48)-48)&1<<_%6)}function a(y,x){(function(_,E){var P;(P=_,P.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(U){return U.split("-").map(function(I){return parseInt(I.trim(),16)})})).forEach(function(U){var I=U[0],T=U[1];T===void 0&&(T=I),E(I,T)})})(y,function(_,E){for(var P=_;P<=E;P++)x(P)})}var l={},c={},h=new WeakMap,u="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(y){var x=h.get(y);return x||(x=new e,a(y.ranges,function(_){return x.add(_)}),h.set(y,x)),x}var f,g=new Map;function v(y,x,_){return y[x]?x:y[_]?_:(function(E){for(var P in E)return P})(y)}function m(y,x){var _=x;if(!y.includes(_)){_=1/0;for(var E=0;E<y.length;E++)Math.abs(y[E]-x)<Math.abs(_-x)&&(_=y[E])}return _}function p(y){return f||(f=new Set,a("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(x){f.add(x)})),f.has(y)}return s.CodePointSet=e,s.clearCache=function(){l={},c={}},s.getFontsForString=function(y,x){x===void 0&&(x={});var _,E=x.lang;E===void 0&&(E=new RegExp("\\p{Script=Hangul}","u").test(_=y)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(_)?"ja":"en");var P=x.category;P===void 0&&(P="sans-serif");var U=x.style;U===void 0&&(U="normal");var I=x.weight;I===void 0&&(I=400);var T=(x.dataUrl||u).replace(/\/$/g,""),M=new Map,D=new Uint8Array(y.length),R={},L={},A=new Array(y.length),O=new Map,F=!1;function k(H){var V=g.get(H);return V||(V=fetch(T+"/"+H).then(function(j){if(!j.ok)throw new Error(j.statusText);return j.json().then(function(me){if(!Array.isArray(me)||me[0]!==1)throw new Error("Incorrect schema version; need 1, got "+me[0]);return me[1]})}).catch(function(j){if(T!==u)return F||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+T+'", trying default CDN. '+j.message),F=!0),T=u,g.delete(H),k(H);throw j}),g.set(H,V)),V}for(var N=function(H){var V=y.codePointAt(H),j=r(V);A[H]=j,l[j]||O.has(j)||O.set(j,k(j).then(function(me){l[j]=me})),V>65535&&(H++,Y=H)},Y=0;Y<y.length;Y++)N(Y);return Promise.all(O.values()).then(function(){O.clear();for(var H=function(j){var me=y.codePointAt(j),z=null,W=l[A[j]],de=void 0;for(var ie in W){var ce=L[ie];if(ce===void 0&&(ce=L[ie]=new RegExp(ie).test(E||"en")),ce){for(var ge in de=ie,W[ie])if(o(me,W[ie][ge])){z=ge;break}break}}if(!z){e:for(var ve in W)if(ve!==de){for(var oe in W[ve])if(o(me,W[ve][oe])){z=oe;break e}}}z||(console.debug("No font coverage for U+"+me.toString(16)),z="latin"),A[j]=z,c[z]||O.has(z)||O.set(z,k("font-meta/"+z+".json").then(function(J){c[z]=J})),me>65535&&(j++,V=j)},V=0;V<y.length;V++)H(V);return Promise.all(O.values())}).then(function(){for(var H,V=null,j=0;j<y.length;j++){var me=y.codePointAt(j);if(V&&(p(me)||d(V).has(me)))D[j]=D[j-1];else{V=c[A[j]];var z=R[V.id];if(!z){var W=V.typeforms,de=v(W,P,"sans-serif"),ie=v(W[de],U,"normal"),ce=m((H=W[de])===null||H===void 0?void 0:H[ie],I);z=R[V.id]=T+"/font-files/"+V.id+"/"+de+"."+ie+"."+ce+".woff"}var ge=M.get(z);ge==null&&(ge=M.size,M.set(z,ge)),D[j]=ge}me>65535&&(j++,D[j]=D[j-1])}return{fontUrls:Array.from(M.keys()),chars:D}})},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}],init:(s,e,t)=>s(e,t())}),Ei=()=>(self.performance||Date).now(),so=zu();let Eh;const js=[];let Qa=0;function Vu(){const s=Ei();for(;js.length&&Ei()-s<5;)js.shift()();Qa=js.length?setTimeout(Vu,0):0}const Xx=(...s)=>new Promise((e,t)=>{js.push(()=>{const i=Ei();try{so.webgl.generateIntoCanvas(...s),e({timing:Ei()-i})}catch(n){t(n)}}),Qa||(Qa=setTimeout(Vu,0))}),qx=4,jx=2e3,bh={};let Yx=0;function Ah(s,e,t,i,n,r,o,a,l,c){const h="TroikaTextSDFGenerator_JS_"+Yx++%qx;let u=bh[h];return u||(u=bh[h]={workerModule:mr({name:h,workerId:h,dependencies:[zu,Ei],init(d,f){const g=d().javascript.generate;return function(...v){const m=f();return{textureData:g(...v),timing:f()-m}}},getTransferables:d=>[d.textureData.buffer]}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(s,e,t,i,n,r).then(({textureData:d,timing:f})=>{const g=Ei(),v=new Uint8Array(4*d.length);for(let m=0;m<d.length;m++)v[4*m+c]=d[m];return so.webglUtils.renderImageData(o,v,a,l,s,e,1<<3-c),f+=Ei()-g,--u.requests===0&&(u.idleTimer=setTimeout(()=>{(function(m){Hr[m]&&Hr[m].forEach(function(p){p()}),Vr[m]&&(Vr[m].terminate(),delete Vr[m])})(h)},jx)),{timing:f}})}const Kx=so.webglUtils.resizeWebGLCanvasWithoutClearing,Nr={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},$x=new Ve;function Xi(){return(self.performance||Date).now()}const wh=Object.create(null);function Jx(s,e){s=Zx({},s);const t=Xi(),i=[];if(s.font&&i.push({label:"user",src:Qx(s.font)}),s.font=i,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||Nr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||Nr.unicodeFontsURL,s.colorRanges!=null){let u={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let f=s.colorRanges[d];typeof f!="number"&&(f=$x.set(f).getHex()),u[d]=f}s.colorRanges=u}Object.freeze(s);const{textureWidth:n,sdfExponent:r}=Nr,{sdfGlyphSize:o}=s,a=n/o*4;let l=wh[o];if(!l){const u=document.createElement("canvas");u.width=n,u.height=256*o/a,l=wh[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:u,sdfTexture:new St(u,void 0,void 0,void 0,Ht,Ht),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,(function(d){const f=d.sdfCanvas;f.addEventListener("webglcontextlost",g=>{console.log("Context Lost",g),g.preventDefault(),d.contextLost=!0}),f.addEventListener("webglcontextrestored",g=>{console.log("Context Restored",g),d.contextLost=!1;const v=[];d.glyphsByFont.forEach(m=>{m.forEach(p=>{v.push(Rh(p,d,!0))})}),Promise.all(v).then(()=>{Ch(d),d.sdfTexture.needsUpdate=!0})})})(l)}const{sdfTexture:c,sdfCanvas:h}=l;Hu(s).then(u=>{const{glyphIds:d,glyphFontIndices:f,fontData:g,glyphPositions:v,fontSize:m,timings:p}=u,y=[],x=new Float32Array(4*d.length);let _=0,E=0;const P=Xi(),U=g.map(R=>{let L=l.glyphsByFont.get(R.src);return L||l.glyphsByFont.set(R.src,L=new Map),L});d.forEach((R,L)=>{const A=f[L],{src:O,unitsPerEm:F}=g[A];let k=U[A].get(R);if(!k){const{path:j,pathBounds:me}=u.glyphData[O][R],z=Math.max(me[2]-me[0],me[3]-me[1])/o*(Nr.sdfMargin*o+.5),W=l.glyphCount++,de=[me[0]-z,me[1]-z,me[2]+z,me[3]+z];U[A].set(R,k={path:j,atlasIndex:W,sdfViewBox:de}),y.push(k)}const{sdfViewBox:N}=k,Y=v[E++],H=v[E++],V=m/F;x[_++]=Y+N[0]*V,x[_++]=H+N[1]*V,x[_++]=Y+N[2]*V,x[_++]=H+N[3]*V,d[L]=k.atlasIndex}),p.quads=(p.quads||0)+(Xi()-P);const I=Xi();p.sdf={};const T=h.height,M=Math.ceil(l.glyphCount/a),D=Math.pow(2,Math.ceil(Math.log2(M*o)));D>T&&(console.info(`Increasing SDF texture size ${T}->${D}`),Kx(h,n,D),c.dispose()),Promise.all(y.map(R=>Rh(R,l,s.gpuAccelerateSDF).then(({timing:L})=>{p.sdf[R.atlasIndex]=L}))).then(()=>{y.length&&!l.contextLost&&(Ch(l),c.needsUpdate=!0),p.sdfTotal=Xi()-I,p.total=Xi()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:o,sdfExponent:r,glyphBounds:x,glyphAtlasIndices:d,glyphColors:u.glyphColors,caretPositions:u.caretPositions,chunkedBounds:u.chunkedBounds,ascender:u.ascender,descender:u.descender,lineHeight:u.lineHeight,capHeight:u.capHeight,xHeight:u.xHeight,topBaseline:u.topBaseline,blockBounds:u.blockBounds,visibleBounds:u.visibleBounds,timings:u.timings}))})}),Promise.resolve().then(()=>{var u;l.contextLost||(u=h)._warm||(so.webgl.isSupported(u),u._warm=!0)})}function Rh({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:l}=Nr,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4);return(function(u,d,f,g,v,m,p,y,x,_,E=!0){return E?Xx(u,d,f,g,v,m,p,y,x,_).then(null,P=>(Eh||(console.warn("WebGL SDF generation failed, falling back to JS",P),Eh=!0),Ah(u,d,f,g,v,m,p,y,x,_))):Ah(u,d,f,g,v,m,p,y,x,_)})(i,i,s,t,c,l,n,h%(a/i)*i,Math.floor(h/(a/i))*i,e%4,o)}function Zx(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Fs;function Qx(s){return Fs||(Fs=typeof document>"u"?{}:document.createElement("a")),Fs.href=s,Fs.href}function Ch(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let o=t.image.data;o&&o.length===i*n*4||(o=new Uint8Array(i*n*4),t.image={width:i,height:n,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,o)}}const ey=mr({name:"Typesetter",dependencies:[function(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:d="",font:f,lang:g,sdfGlyphSize:v=64,fontSize:m=400,fontWeight:p=1,fontStyle:y="normal",letterSpacing:x=0,lineHeight:_="normal",maxWidth:E=1/0,direction:P,textAlign:U="left",textIndent:I=0,whiteSpace:T="normal",overflowWrap:M="normal",anchorX:D=0,anchorY:R=0,metricsOnly:L=!1,unicodeFontsURL:A,preResolvedFonts:O=null,includeCaretPositions:F=!1,chunkedBoundsSize:k=8192,colorRanges:N=null},Y){const H=c(),V={fontLoad:0,typesetting:0};d.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),d=d.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),m=+m,x=+x,E=+E,_=_||"normal",I=+I,(function({text:j,lang:me,fonts:z,style:W,weight:de,preResolvedFonts:ie,unicodeFontsURL:ce},ge){const ve=({chars:oe,fonts:J})=>{let X,w;const pe=[];for(let Z=0;Z<oe.length;Z++)oe[Z]!==w?(w=oe[Z],pe.push(X={start:Z,end:Z,fontObj:J[oe[Z]]})):X.end=Z;ge(pe)};ie?ve(ie):s(j,ve,{lang:me,fonts:z,style:W,weight:de,unicodeFontsURL:ce})})({text:d,lang:g,style:y,weight:p,fonts:typeof f=="string"?[{src:f}]:f,unicodeFontsURL:A,preResolvedFonts:O},j=>{V.fontLoad=c()-H;const me=isFinite(E);let z=null,W=null,de=null,ie=null,ce=null,ge=null,ve=null,oe=null,J=0,X=0,w=T!=="nowrap";const pe=new Map,Z=c();let he=I,le=0,Te=new h;const ue=[Te];j.forEach(te=>{const{fontObj:Q}=te,{ascender:_e,descender:xe,unitsPerEm:ye,lineGap:Ge,capHeight:ae,xHeight:Me}=Q;let Pe=pe.get(Q);if(!Pe){const Ie=m/ye,G=_==="normal"?(_e-xe+Ge)*Ie:_*m,we=(G-(_e-xe)*Ie)/2,ee=Math.min(G,(_e-xe)*Ie),se=(_e+xe)/2*Ie+ee/2;Pe={index:pe.size,src:Q.src,fontObj:Q,fontSizeMult:Ie,unitsPerEm:ye,ascender:_e*Ie,descender:xe*Ie,capHeight:ae*Ie,xHeight:Me*Ie,lineHeight:G,baseline:-we-_e*Ie,caretTop:se,caretBottom:se-ee},pe.set(Q,Pe)}const{fontSizeMult:Fe}=Pe,Ae=d.slice(te.start,te.end+1);let He,Oe;Q.forEachGlyph(Ae,m,x,(Ie,G,we,ee)=>{G+=le,ee+=te.start,He=G,Oe=Ie;const se=d.charAt(ee),be=Ie.advanceWidth*Fe,Ee=Te.count;let Ce;if("isEmpty"in Ie||(Ie.isWhitespace=!!se&&new RegExp(n).test(se),Ie.canBreakAfter=!!se&&r.test(se),Ie.isEmpty=Ie.xMin===Ie.xMax||Ie.yMin===Ie.yMax||i.test(se)),Ie.isWhitespace||Ie.isEmpty||X++,w&&me&&!Ie.isWhitespace&&G+be+he>E&&Ee){if(Te.glyphAt(Ee-1).glyphObj.canBreakAfter)Ce=new h,he=-G;else for(let rt=Ee;rt--;){if(rt===0&&M==="break-word"){Ce=new h,he=-G;break}if(Te.glyphAt(rt).glyphObj.canBreakAfter){Ce=Te.splitAt(rt+1);const je=Ce.glyphAt(0).x;he-=je;for(let et=Ce.count;et--;)Ce.glyphAt(et).x-=je;break}}Ce&&(Te.isSoftWrapped=!0,Te=Ce,ue.push(Te),J=E)}let Xe=Te.glyphAt(Te.count);Xe.glyphObj=Ie,Xe.x=G+he,Xe.y=we,Xe.width=be,Xe.charIndex=ee,Xe.fontData=Pe,se===`
`&&(Te=new h,ue.push(Te),he=-(G+be+x*m)+I)}),le=He+Oe.advanceWidth*Fe+x*m});let C=0;ue.forEach(te=>{let Q=!0;for(let _e=te.count;_e--;){const xe=te.glyphAt(_e);Q&&!xe.glyphObj.isWhitespace&&(te.width=xe.x+xe.width,te.width>J&&(J=te.width),Q=!1);let{lineHeight:ye,capHeight:Ge,xHeight:ae,baseline:Me}=xe.fontData;ye>te.lineHeight&&(te.lineHeight=ye);const Pe=Me-te.baseline;Pe<0&&(te.baseline+=Pe,te.cap+=Pe,te.ex+=Pe),te.cap=Math.max(te.cap,te.baseline+Ge),te.ex=Math.max(te.ex,te.baseline+ae)}te.baseline-=C,te.cap-=C,te.ex-=C,C+=te.lineHeight});let S=0,K=0;if(D&&(typeof D=="number"?S=-D:typeof D=="string"&&(S=-J*(D==="left"?0:D==="center"?.5:D==="right"?1:a(D)))),R&&(typeof R=="number"?K=-R:typeof R=="string"&&(K=R==="top"?0:R==="top-baseline"?-ue[0].baseline:R==="top-cap"?-ue[0].cap:R==="top-ex"?-ue[0].ex:R==="middle"?C/2:R==="bottom"?C:R==="bottom-baseline"?-ue[ue.length-1].baseline:a(R)*C)),!L){const te=e.getEmbeddingLevels(d,P);z=new Uint16Array(X),W=new Uint8Array(X),de=new Float32Array(2*X),ie={},ve=[1/0,1/0,-1/0,-1/0],oe=[],F&&(ge=new Float32Array(4*d.length)),N&&(ce=new Uint8Array(3*X));let Q,_e,xe=0,ye=-1,Ge=-1;if(ue.forEach((ae,Me)=>{let{count:Pe,width:Fe}=ae;if(Pe>0){let Ae=0;for(let ee=Pe;ee--&&ae.glyphAt(ee).glyphObj.isWhitespace;)Ae++;let He=0,Oe=0;if(U==="center")He=(J-Fe)/2;else if(U==="right")He=J-Fe;else if(U==="justify"&&ae.isSoftWrapped){let ee=0;for(let se=Pe-Ae;se--;)ae.glyphAt(se).glyphObj.isWhitespace&&ee++;Oe=(J-Fe)/ee}if(Oe||He){let ee=0;for(let se=0;se<Pe;se++){let be=ae.glyphAt(se);const Ee=be.glyphObj;be.x+=He+ee,Oe!==0&&Ee.isWhitespace&&se<Pe-Ae&&(ee+=Oe,be.width+=Oe)}}const Ie=e.getReorderSegments(d,te,ae.glyphAt(0).charIndex,ae.glyphAt(ae.count-1).charIndex);for(let ee=0;ee<Ie.length;ee++){const[se,be]=Ie[ee];let Ee=1/0,Ce=-1/0;for(let Xe=0;Xe<Pe;Xe++)if(ae.glyphAt(Xe).charIndex>=se){let rt=Xe,je=Xe;for(;je<Pe;je++){let et=ae.glyphAt(je);if(et.charIndex>be)break;je<Pe-Ae&&(Ee=Math.min(Ee,et.x),Ce=Math.max(Ce,et.x+et.width))}for(let et=rt;et<je;et++){const ft=ae.glyphAt(et);ft.x=Ce-(ft.x+ft.width-Ee)}break}}let G;const we=ee=>G=ee;for(let ee=0;ee<Pe;ee++){const se=ae.glyphAt(ee);G=se.glyphObj;const be=G.index,Ee=1&te.levels[se.charIndex];if(Ee){const Ce=e.getMirroredCharacter(d[se.charIndex]);Ce&&se.fontData.fontObj.forEachGlyph(Ce,0,0,we)}if(F){const{charIndex:Ce,fontData:Xe}=se,rt=se.x+S,je=se.x+se.width+S;ge[4*Ce]=Ee?je:rt,ge[4*Ce+1]=Ee?rt:je,ge[4*Ce+2]=ae.baseline+Xe.caretBottom+K,ge[4*Ce+3]=ae.baseline+Xe.caretTop+K;const et=Ce-ye;et>1&&l(ge,ye,et),ye=Ce}if(N){const{charIndex:Ce}=se;for(;Ce>Ge;)Ge++,N.hasOwnProperty(Ge)&&(_e=N[Ge])}if(!G.isWhitespace&&!G.isEmpty){const Ce=xe++,{fontSizeMult:Xe,src:rt,index:je}=se.fontData,et=ie[rt]||(ie[rt]={});et[be]||(et[be]={path:G.path,pathBounds:[G.xMin,G.yMin,G.xMax,G.yMax]});const ft=se.x+S,vn=se.y+ae.baseline+K;de[2*Ce]=ft,de[2*Ce+1]=vn;const _n=ft+G.xMin*Xe,Lt=vn+G.yMin*Xe,xn=ft+G.xMax*Xe,yn=vn+G.yMax*Xe;_n<ve[0]&&(ve[0]=_n),Lt<ve[1]&&(ve[1]=Lt),xn>ve[2]&&(ve[2]=xn),yn>ve[3]&&(ve[3]=yn),Ce%k===0&&(Q={start:Ce,end:Ce,rect:[1/0,1/0,-1/0,-1/0]},oe.push(Q)),Q.end++;const It=Q.rect;if(_n<It[0]&&(It[0]=_n),Lt<It[1]&&(It[1]=Lt),xn>It[2]&&(It[2]=xn),yn>It[3]&&(It[3]=yn),z[Ce]=be,W[Ce]=je,N){const Qt=3*Ce;ce[Qt]=_e>>16&255,ce[Qt+1]=_e>>8&255,ce[Qt+2]=255&_e}}}}}),ge){const ae=d.length-ye;ae>1&&l(ge,ye,ae)}}const fe=[];pe.forEach(({index:te,src:Q,unitsPerEm:_e,ascender:xe,descender:ye,lineHeight:Ge,capHeight:ae,xHeight:Me})=>{fe[te]={src:Q,unitsPerEm:_e,ascender:xe,descender:ye,lineHeight:Ge,capHeight:ae,xHeight:Me}}),V.typesetting=c()-Z,Y({glyphIds:z,glyphFontIndices:W,glyphPositions:de,glyphData:ie,fontData:fe,caretPositions:ge,glyphColors:ce,chunkedBounds:oe,fontSize:m,topBaseline:K+ue[0].baseline,blockBounds:[S,K-C,S+J,K],visibleBounds:ve,timings:V})})}function a(d){let f=d.match(/^([\d.]+)%$/),g=f?parseFloat(f[1]):NaN;return isNaN(g)?0:g/100}function l(d,f,g){const v=d[4*f],m=d[4*f+1],p=d[4*f+2],y=d[4*f+3],x=(m-v)/g;for(let _=0;_<g;_++){const E=4*(f+_);d[E]=v+x*_,d[E+1]=v+x*(_+1),d[E+2]=p,d[E+3]=y}}function c(){return(self.performance||Date).now()}function h(){this.data=[]}const u=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/u.length)},glyphAt(d){let f=h.flyweight;return f.data=this.data,f.index=d,f},splitAt(d){let f=new h;return f.data=this.data.splice(d*u.length),f}},h.flyweight=u.reduce((d,f,g,v)=>(Object.defineProperty(d,f,{get(){return this.data[this.index*u.length+g]},set(m){this.data[this.index*u.length+g]=m}}),d),{data:null,index:0}),{typeset:o,measure:function(d,f){o({...d,metricsOnly:!0},g=>{const[v,m,p,y]=g.blockBounds;f({width:p-v,height:y-m})})}}},Wx,Bx],init:(s,e,t)=>s(e,t())}),Hu=mr({name:"Typesetter",dependencies:[ey],init:s=>function(e){return new Promise(t=>{s.typeset(e,t)})},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});Hu.onMainThread;const Ph={},ty="aTroikaGlyphBounds",Uh="aTroikaGlyphIndex";class ny extends Hp{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new gn,this.boundingBox=new mn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=(function(i){let n=Ph[i];return n||(n=Ph[i]=new pn(1,1,i,i).translate(.5,.5,0)),n})(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(ty,e,4),this.updateAttributeData(Uh,t,1),this.updateAttributeData("aTroikaGlyphColor",r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:o,max:a,sin:l,cos:c}=Math,h=n/2,u=2*n,d=Math.abs(t),f=e[0]/d,g=e[2]/d,v=r((f+h)/u)!==r((g+h)/u)?-d:o(l(f)*d,l(g)*d),m=r((f-h)/u)!==r((g-h)/u)?d:a(l(f)*d,l(g)*d),p=r((f+n)/u)!==r((g+n)/u)?2*d:a(d-c(f)*d,d-c(g)*d);i.min.set(v,e[1],t<0?-p:0),i.max.set(m,e[3],t<0?0:p)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Uh).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Js(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}function iy(s){const e=Za(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Re},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new at(0,0,0,0)},uTroikaClipRect:{value:new at(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Re},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ve},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ke},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,vertexTransform:`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,fragmentDefs:`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,fragmentColorTransform:`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Gu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const bl=new Bt({color:16777215,side:nn,transparent:!0}),Lh=8421504,Ih=new Ye,Bs=new B,ia=new B,Lr=[],ry=new B,ra="+x+y";function Dh(s){return Array.isArray(s)?s[0]:s}let Wu=()=>{const s=new mt(new pn(1,1),bl);return Wu=()=>s,s},Xu=()=>{const s=new mt(new pn(1,1,32,1),bl);return Xu=()=>s,s};const sy={type:"syncstart"},oy={type:"synccomplete"},qu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],ay=qu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class ju extends mt{constructor(){super(new ny,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Lh,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ra,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(sy),Jx({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(oy),e&&e()})))}onBeforeRender(e,t,i,n,r,o){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return iy(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=bl.clone());if(e&&e.isDerivedFrom(t)||(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Dh(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return Dh(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:a,blockBounds:l}=n;i.uTroikaSDFTexture.value=a,i.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c,h,u,d=0,f=0,g=0,v=0,m=0;if(t){let{outlineWidth:y,outlineOffsetX:x,outlineOffsetY:_,outlineBlur:E,outlineOpacity:P}=this;d=this._parsePercent(y)||0,f=Math.max(0,this._parsePercent(E)||0),c=P,v=this._parsePercent(x)||0,m=this._parsePercent(_)||0}else g=Math.max(0,this._parsePercent(this.strokeWidth)||0),g&&(u=this.strokeColor,i.uTroikaStrokeColor.value.set(u??Lh),h=this.strokeOpacity,h==null&&(h=1)),c=this.fillOpacity;i.uTroikaEdgeOffset.value=d,i.uTroikaPositionOffset.value.set(v,m),i.uTroikaBlurRadius.value=f,i.uTroikaStrokeWidth.value=g,i.uTroikaStrokeOpacity.value=h,i.uTroikaFillOpacity.value=c??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let p=this.clipRect;if(p&&Array.isArray(p)&&p.length===4)i.uTroikaClipRect.value.fromArray(p);else{const y=100*(this.fontSize||.1);i.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const a=e.hasOwnProperty("color")?e.color:e.color=new Ve;r===a._input&&typeof r!="object"||a.set(a._input=r)}let o=this.orientation||ra;if(o!==e._orientation){let a=i.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let l=o!==ra&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,d]=l;Bs.set(0,0,0)[h]=c==="-"?1:-1,ia.set(0,0,0)[d]=u==="-"?-1:1,Ih.lookAt(ry,Bs.cross(ia),ia),a.setFromMatrix4(Ih)}else a.identity();e._orientation=o}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Re){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Re){return Bs.copy(e),this.localPositionToTextCoords(this.worldToLocal(Bs),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,o=n?Xu():Wu(),a=o.geometry,{position:l,uv:c}=a.attributes;for(let h=0;h<c.count;h++){let u=r[0]+c.getX(h)*(r[2]-r[0]);const d=r[1]+c.getY(h)*(r[3]-r[1]);let f=0;n&&(f=n-Math.cos(u/n)*n,u=Math.sin(u/n)*n),l.setXYZ(h,u,d,f)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,Lr.length=0,o.raycast(e,Lr);for(let h=0;h<Lr.length;h++)Lr[h].object=this,t.push(Lr[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,ay.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}qu.forEach(s=>{const e="_private_"+s;Object.defineProperty(ju.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new mn,new Ve;const Yu={fonts:[]};function ly(s){s.fonts&&Object.assign(Yu.fonts,s.fonts)}const el=function(s){const{text:e,fontSize:t,position:i,color:n,maxWidth:r,fontName:o,anchorX:a,anchorY:l,textAlign:c,lineHeight:h}=s,u=Yu.fonts.find(f=>f.name===o);if(!u)throw new Error("Font not setup.  Run setupLibrary when intialising app.");const d=new ju;return d.text=e,d.fontSize=t,d.font=u.url,i&&d.position.set(i.x,i.y,i.z),n&&(d.color=new Ve(n)),r&&(d.maxWidth=r),a&&(d.anchorX=a),l&&(d.anchorY=l),c&&(d.textAlign=c),h&&(d.lineHeight=h),d.sync(),d};new B(0,1.3,-4);new B;const cy=new B;class my{constructor(e){var t,i,n,r,o,a,l,c,h;this.config=e,this.group=new kn,this.state="idle";const u=(t=e.radius)!==null&&t!==void 0?t:.02,d=(i=e.depth)!==null&&i!==void 0?i:.01,f=e.idleAttributes;this.outer=new mt(vh(e.width,e.height,u,d),new Bt({color:new Ve((n=f.borderColor)!==null&&n!==void 0?n:f.backgroundColor),transparent:!0,opacity:(r=f.borderOpacity)!==null&&r!==void 0?r:1,depthWrite:!1})),this.inner=new mt(vh(e.width-.02,e.height-.02,u,d),new Bt({color:new Ve(f.backgroundColor),transparent:!0,opacity:(o=f.backgroundOpacity)!==null&&o!==void 0?o:1,depthWrite:!1})),this.inner.position.z=.002,this.label=el({text:e.label,fontName:(a=e.fontName)!==null&&a!==void 0?a:"main",fontSize:(l=e.fontSize)!==null&&l!==void 0?l:.05,color:f.textColor,maxWidth:(c=e.maxWidth)!==null&&c!==void 0?c:e.width-.12,anchorX:"center",anchorY:"middle",textAlign:"center"}),this.label.position.set(0,0,.01),this.group.add(this.outer),this.outer.add(this.inner),this.inner.add(this.label),this.group.position.copy((h=e.position)!==null&&h!==void 0?h:cy)}setState(e){var t,i,n,r;this.state=e;const o=this.config[`${e}Attributes`];this.outer.material.color.set((t=o.borderColor)!==null&&t!==void 0?t:o.backgroundColor),this.outer.material.opacity=(i=o.borderOpacity)!==null&&i!==void 0?i:1,this.inner.material.color.set(o.backgroundColor),this.inner.material.opacity=(n=o.backgroundOpacity)!==null&&n!==void 0?n:1,this.label.color=new Ve(o.textColor),this.outer.position.z=(r=o.offset)!==null&&r!==void 0?r:0}render(e){this.group.lookAt(e.position)}dispose(){var e,t,i;(t=(e=this.label).dispose)===null||t===void 0||t.call(e),this.outer.geometry.dispose(),this.inner.geometry.dispose(),this.outer.material.dispose(),this.inner.material.dispose(),(i=this.group.parent)===null||i===void 0||i.remove(this.group)}}const Nh={backgroundColor:2769747,backgroundOpacity:1,borderColor:2769747,borderOpacity:.5,fontName:"main",headerTitleColor:16777215,headerTitleFontSize:.1,height:1.24,itemColor:4449278,itemFontSize:.06,itemGap:.015,itemHeight:.12,itemInsetX:.2,listWidth:1.2,logoHeight:.15,logoWidth:.45,position:new B(-2,1.5,-4),selectedBackgroundColor:14004345,selectedBackgroundOpacity:1,selectedIndicatorColor:2769747,selectedTextColor:3829647,title:"Guided Tour",width:1.54};class gy{constructor(e,t){var i;this.scene=e,this.dynamicChildren=[],this.innerGroup=new kn,this.lastKey="",this.config=Object.assign(Object.assign(Object.assign({},Nh),t),{position:(i=t.position)!==null&&i!==void 0?i:Nh.position.clone()});const n=new Bt({color:this.config.borderColor,opacity:this.config.borderOpacity,transparent:!0,depthWrite:!1}),r=new pn(this.config.width,this.config.height);this.meshOuter=new mt(r,n),this.meshOuter.position.copy(this.config.position);const o=new Bt({color:this.config.backgroundColor,opacity:this.config.backgroundOpacity,transparent:this.config.backgroundOpacity<1,depthWrite:!1}),a=new pn(this.config.width-.04,this.config.height-.04),l=new mt(a,o);l.position.set(0,0,.001),l.renderOrder=1,l.add(this.innerGroup),this.meshOuter.add(l),this.scene.add(this.meshOuter)}update(e,t){const i=`${t}|${e.map(n=>`${n.id}:${n.label}`).join("|")}`;i!==this.lastKey&&(this.lastKey=i,this.clearDynamic(),this.addHeader(),this.addItems(e,t))}render(e){this.meshOuter.lookAt(e.position)}dispose(){this.clearDynamic(),this.meshOuter.traverse(e=>{var t;const i=e;i.geometry&&i.geometry.dispose();const n=i.material;Array.isArray(n)?n.forEach(r=>r.dispose()):(t=n?.dispose)===null||t===void 0||t.call(n)}),this.scene.remove(this.meshOuter)}addHeader(){if(this.config.logoTexture){const t=new Bt({map:this.config.logoTexture,transparent:!0}),i=new mt(new pn(this.config.logoWidth,this.config.logoHeight),t);i.position.set(-.37,.45,.01),this.innerGroup.add(i),this.dynamicChildren.push({object:i})}const e=el({text:this.config.title,fontName:this.config.fontName,fontSize:this.config.headerTitleFontSize,color:this.config.headerTitleColor,maxWidth:.75,anchorX:"left",anchorY:"middle",textAlign:"left"});e.position.set(.04,.45,.01),this.innerGroup.add(e),this.dynamicChildren.push({object:e,dispose:()=>{var t;return(t=e.dispose)===null||t===void 0?void 0:t.call(e)}})}addItems(e,t){e.forEach((i,n)=>{const r=.22-n*(this.config.itemHeight+this.config.itemGap),o=i.id===t;if(o){const l=new Bt({color:this.config.selectedBackgroundColor,opacity:this.config.selectedBackgroundOpacity,transparent:this.config.selectedBackgroundOpacity<1,depthTest:!1,depthWrite:!1}),c=new mt(new pn(this.config.listWidth,this.config.itemHeight),l);c.position.set(0,r,.01),c.renderOrder=2,this.innerGroup.add(c),this.dynamicChildren.push({object:c});const h=new Tt;h.setAttribute("position",new kt(new Float32Array([0,0,0,1,0,0,.5,.5,0]),3)),h.setIndex([0,1,2]),h.computeVertexNormals();const u=new Bt({color:this.config.selectedIndicatorColor,side:nn,depthTest:!1,depthWrite:!1}),d=new mt(h,u);d.scale.set(.08,.08,.08),d.position.set(-this.config.listWidth/2-.005,r+.035,.012),d.rotation.z=-Math.PI/2,d.renderOrder=3,this.innerGroup.add(d),this.dynamicChildren.push({object:d})}const a=el({text:i.label,fontName:this.config.fontName,fontSize:this.config.itemFontSize,color:o?this.config.selectedTextColor:this.config.itemColor,maxWidth:this.config.listWidth-this.config.itemInsetX,anchorX:"left",anchorY:"middle",textAlign:"left"});a.position.set(-.48,r,.012),a.renderOrder=4,this.innerGroup.add(a),this.dynamicChildren.push({object:a,dispose:()=>{var l;return(l=a.dispose)===null||l===void 0?void 0:l.call(a)}})})}clearDynamic(){this.dynamicChildren.forEach(e=>{var t;this.innerGroup.remove(e.object),(t=e.dispose)===null||t===void 0||t.call(e)}),this.dynamicChildren=[]}}class vy{constructor(e={}){var t,i,n;this.services=e,this.audioListener=new Kp,this._active=!0;const r=new If;r.background=new Ve((t=e.backgroundColor)!==null&&t!==void 0?t:3829647),this.camera=new Vt(50,window.innerWidth/window.innerHeight,.1,10),this.camera.position.z=2,this.camera.add(this.audioListener);const o=new Op((i=e.hemiLightSky)!==null&&i!==void 0?i:16777215,(n=e.hemiLightGround)!==null&&n!==void 0?n:4473924);o.position.set(0,20,0),r.add(o),e.backgroundAudio&&e.loadAudio&&e.loadAudio(e.backgroundAudio).then(a=>{var l;const c=new $p(this.audioListener);c.setBuffer(a),c.setLoop(!0),c.setVolume((l=e.backgroundAudioVolume)!==null&&l!==void 0?l:.3),this.sound=c,this.syncSound()}),this.scene=r}get active(){return this._active}set active(e){this._active=e,this.syncSound()}update(e){var t,i,n,r;(i=(t=this.content)===null||t===void 0?void 0:t.dispose)===null||i===void 0||i.call(t),this.content=(r=(n=this.services).createContent)===null||r===void 0?void 0:r.call(n,{camera:this.camera,scene:this.scene,state:e})}render(e,t){var i;e.render(this.scene,this.camera),(i=this.content)===null||i===void 0||i.render(this.camera,t)}dispose(){var e,t,i;(e=this.sound)===null||e===void 0||e.stop(),(i=(t=this.content)===null||t===void 0?void 0:t.dispose)===null||i===void 0||i.call(t),this.scene.clear()}syncSound(){this.sound&&(this._active?this.sound.play():this.sound.stop())}}var Ku=(s=>(s.CHESTWALL="chestwall",s.PARTITIONING="partitioning",s.LANDMARKING="landmarking",s.PROCESSING="processing",s))(Ku||{});hy();async function hy(){ly({fonts:[{name:"main",url:td}]}),await new Promise(e=>{window.requestAnimationFrame(()=>e())});const{default:s}=await ed(async()=>{const{default:e}=await import("./sceneLoader-DEmiw0bS.js");return{default:e}},[]);s.initialise(Ku.PARTITIONING)}export{fy as A,Kt as B,Ve as C,nn as D,_t as F,kn as G,Op as H,Yr as L,mt as M,vy as N,Wf as P,gy as R,oi as S,Np as T,ou as U,B as V,dy as W,es as a,xl as b,du as c,Tt as d,kt as e,Ku as f,cu as g,Vp as h,If as i,Vt as j,af as k,xu as l,Bt as m,Eu as n,my as o,pl as p,bu as q,qf as r,_l as s,py as t,uy as u,pn as v,Ye as w,Qr as x,yi as y,jp as z};
