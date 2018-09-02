
import cssText from "./css/common.css";
import "./css/less.less";

import A from './a';

console.log(A, 'A');

import cs from './classes';
import polyfill from './polyfill';

console.log(polyfill, 'polyfill');

import cjst from "./cjst";

cjst();

console.log(cjst);

import('./test.vue');

import('./app');

import('./esx');



// const jsx = <div t1="asdf" {...a}>asf</div>


// export default function (templateParams) {
//     if (process.env.NODE_ENV === 'development') console.log(window, history);

//     return (function (data) {
//         let __t;
//         let __p = '';
//         __p += '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <title>' +
//             '</title>\n  </head>\n  <body>\n  </body>\n</html>';
//         return __p;
//     })();

// }