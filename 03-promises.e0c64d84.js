var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=i);var n=i("iQIUW");function r(e,t){return new Promise(((o,i)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let{elements:{delay:t,step:o,amount:i}}=e.currentTarget;t=Number(t.value),o=Number(o.value),i=Number(i.value);for(let e=0;e<i;e+=1)r(e+1,t+e*o).then((({position:e,delay:t})=>n.Notify.success(`Fulfilled promise ${e} in ${t}ms`,{timeout:6e3}))).catch((({position:e,delay:t})=>n.Notify.failure(`Rejected promise ${e} in ${t}ms`,{timeout:6e3})))}));
//# sourceMappingURL=03-promises.e0c64d84.js.map