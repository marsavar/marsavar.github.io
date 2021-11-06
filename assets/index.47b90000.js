import{c as o,j as e,a as c,b as a,d as h,R as f,e as m}from"./vendor.7257a06f.js";const p=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}};p();const u=()=>{const i=o`
    margin-top: 20px;
    font-size: 1.1rem;
    display: inline-block;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    li {
      float: left;
      margin-right: 24px;
    }
  `;return e("div",{css:i,children:c("ul",{children:[e("li",{children:e("a",{href:"mailto:remove plus signs and square brackets from [m+a]r.[sav+ar+ese]@[g+m]a[i]l[.co]m",children:"Email"})}),e("li",{children:e("a",{href:"https://twitter.com/mar_savar",target:"_blank",children:"Twitter"})}),e("li",{children:e("a",{href:"https://github.com/MarSavar",target:"_blank",children:"GitHub"})}),e("li",{children:e("a",{href:"https://www.linkedin.com/in/mario-savarese-68817b91/",target:"_blank",children:"LinkedIn"})}),e("li",{children:e("a",{href:"https://www.goodreads.com/user/show/12596225-mario",target:"_blank",children:"Goodreads"})})]})})},g=i=>{const n="0.2s",s=o`
    margin-left: 0px;
    height: 100%;
    a {
      font-family: "Inter", sans-serif;
      border-bottom: 1px solid #fcd303;
      color: black;
      text-decoration: none;
      padding: 2px;
      -webkit-transition: ${n} linear;
      -moz-transition: ${n} linear;
      -o-transition: ${n} linear;
      transition: ${n} linear;
    }
    a:hover {
      background-color: #fcd303;
      border-radius: 4px;
    }
  `;return e("div",{css:s,children:i.children})},b=()=>{const n=o`
    font-family: "Inter", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    letter-spacing: -2pt;
    text-transform: lowercase;
    margin: 0;
    border-bottom: 6px solid #fcd303;
    display: inline-block;
    opacity: 1;
    animation: fade ${1.5}s linear;
    @keyframes fade {
      0% {
        opacity: 0.2;
      }
      100% {
        opacity: 1;
      }
    } ;
  `;return e("div",{children:e("h1",{css:n,children:"Mario Savarese"})})},y=()=>{const i=o`
    margin-top: 30px;
    font-size: 1.2rem;
    line-height: 1.6rem;
    max-width: 800ox;
  `;return c("div",{css:i,children:[c("p",{children:["I'm a software engineer at"," ",e("a",{href:"https://www.theguardian.com/",target:"_blank",children:"The Guardian"}),", currently working in the Investigations and Reporting team as part of the"," ",e("a",{href:"https://www.theguardian.com/info/series/digital-fellowship-scheme",target:"_blank",children:"Digital Fellowship Scheme"}),".",e("br",{}),"Prior to this, I worked in book publishing for four and a half years.",e("br",{})," I speak Italian, English and Japanese, and I can get by in French and Spanish."]}),e("p",{})]})};function w(){return a("div",{children:h(g,{children:[a(b,{}),a(y,{}),a(u,{})]})})}f.render(a(m.StrictMode,{children:a(w,{})}),document.getElementById("root"));
