(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[948],{1011:function(){throw Error("Module build failed: Error: Final loader (./node_modules/next/dist/build/webpack/loaders/error-loader.js) didn't return a Buffer or String\n    at processResult (C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\webpack\\bundle5.js:28:398849)\n    at C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\webpack\\bundle5.js:28:400319\n    at C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\loader-runner\\LoaderRunner.js:1:8727\n    at iterateNormalLoaders (C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\loader-runner\\LoaderRunner.js:1:5565)\n    at iterateNormalLoaders (C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\loader-runner\\LoaderRunner.js:1:5650)\n    at C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\loader-runner\\LoaderRunner.js:1:5879\n    at runSyncOrAsync (C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\loader-runner\\LoaderRunner.js:1:4185)\n    at iterateNormalLoaders (C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\loader-runner\\LoaderRunner.js:1:5782)\n    at C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\loader-runner\\LoaderRunner.js:1:5426\n    at C:\\Program Files\\Vscode\\Calc_Next\\calculadora-react\\node_modules\\next\\dist\\compiled\\webpack\\bundle5.js:28:399794")},9653:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show",function(){return r(5273)}])},5273:function(e,n,r){"use strict";r.r(n),r.d(n,{Show:function(){return l}});var t=r(1010),o=r(1309),a=r(7582),c=r(5893),u=r(7294);function l(e){var n=function(){_(x/b)},r=function(){_(x*b)},l=function(){_(x-b)},d=function(){_(x+b)},i={data:"Hello, API!"};function s(){return(s=(0,t._)(function(){return(0,a.Jh)(this,function(e){return fetch("/pages/api/teste",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){console.log("TESTE")}),[2]})})).apply(this,arguments)}function p(){return(p=(0,t._)(function(){return(0,a.Jh)(this,function(e){return fetch("api/teste",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}),[2]})})).apply(this,arguments)}var m=(0,o._)((0,u.useState)(),2),f=m[0],_=m[1],h=(0,o._)((0,u.useState)(0),2),x=h[0],C=h[1],j=(0,o._)((0,u.useState)(0),2),b=j[0],N=j[1];return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"resultado",children:(0,c.jsx)("p",{children:f})}),(0,c.jsxs)("label",{children:[(0,c.jsx)("input",{type:"number",onChange:function(e){return C(Number(e.target.value))}}),(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"number",onChange:function(e){return N(Number(e.target.value))}}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:function(){return d()},children:"Somar"}),(0,c.jsx)("button",{onClick:function(){return l()},children:"Subtrair"}),(0,c.jsx)("button",{onClick:function(){return r()},children:"Multiplicar"}),(0,c.jsx)("button",{onClick:function(){return n()},children:"Dividir"}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:function(){return function(){return p.apply(this,arguments)}()},children:"get"}),(0,c.jsx)("button",{onClick:function(){return function(){return s.apply(this,arguments)}()},children:"post"})]})]})}r(1011)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9653)}),_N_E=e.O()}]);