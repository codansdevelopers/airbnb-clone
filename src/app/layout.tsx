import '@/globals.css'
import { Metadata } from 'next'
import Script from 'next/script'
import { montserrat } from '@/fonts/google'

export const metadata: Metadata = {
  title: 'Airbnb | Locações por temporada, chalés, casas de praia e muito mais.',
  description: 'Reserve um Airbnb para cada tipo de viagem → 7 milhões de locações por temporada → 2 milhões de Preferidos dos Hóspedes → Mais de 220 países e regiões em todo o mundo.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        {children}

        {/* Head */}
        <Script
          dangerouslySetInnerHTML={{
            __html: '"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(a){for(var t,n=1,o=arguments.length;n<o;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(a[s]=t[s]);return a},__assign.apply(this,arguments)};!function(){var a;window.codans||(window.codans={data:{}}),addEventListener("GTMEventAction",(function(a){var t=a.detail.eventName;console.log("EventName: ".concat(t))})),a=function(a){try{var t=window[a].getItem("toolbox");return t?JSON.parse(t):{data:{}}}catch(a){return{data:{}}}},codans.createToolbox=function(){codans.getItem=function(a){return codans.syncData(),codans.data[a]},codans.setItem=function(t,n,o){void 0===o&&(o="localStorage"),function(t,n,o){var s=a(o);s.data[t]=n,window[o].setItem("toolbox",JSON.stringify(s))}(t,n,o),codans.syncData()},codans.syncData=function(){var t,n;codans.data=(t=a("localStorage").data||{},n=a("sessionStorage").data||{},__assign(__assign({},t),n))}},codans.createToolbox(),codans.setItem("_init",!0,"sessionStorage"),codans.setItem("_init",!0,"localStorage"),codans.syncData()}();',
          }}
          strategy='beforeInteractive'
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: '!function(e,t,n,c,r,a,i){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},(a=t.createElement(c)).async=1,a.src="https://www.clarity.ms/tag/revi623wqy",(i=t.getElementsByTagName(c)[0]).parentNode.insertBefore(a,i)}(window,document,"clarity","script");',
          }}
          strategy='beforeInteractive'
        />

        {/* Body */}
        <Script
          dangerouslySetInnerHTML={{
            __html: '!function(){"use strict";function l(e){for(var t=e,r=0,n=document.cookie.split(";");r<n.length;r++){var o=n[r].split("=");if(o[0].trim()===t)return o[1]}}function s(e){return localStorage.getItem(e)}function u(e){return window[e]}function A(e,t){e=document.querySelector(e);return t?null==e?void 0:e.getAttribute(t):null==e?void 0:e.textContent}var e=window,t=document,r="script",n="dataLayer",o="https://load.analytics.codans.com.br",a="",i="miSuwtrfabz",c="FQ6cZ=aWQ9R1RNLU5CU1RGMlY%3D&amp;sort=desc",g="cookie",v="_sbp",E="",d=!1;try{var d=!!g&&(m=navigator.userAgent,!!(m=new RegExp("Version/([0-9._]+)(.*Mobile)?.*Safari.*").exec(m)))&&16.4<=parseFloat(m[1]),f="stapeUserId"===g,I=d&&!f?function(e,t,r){void 0===t&&(t="");var n={cookie:l,localStorage:s,jsVariable:u,cssSelector:A},t=Array.isArray(t)?t:[t];if(e&&n[e])for(var o=n[e],a=0,i=t;a<i.length;a++){var c=i[a],c=r?o(c,r):o(c);if(c)return c}else console.warn("invalid uid source",e)}(g,v,E):void 0;d=d&&(!!I||f)}catch(e){console.error(e)}var m=e,g=(m[n]=m[n]||[],m[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),t.getElementsByTagName(r)[0]),v=I?"&bi="+encodeURIComponent(I):"",E=t.createElement(r),f=(d&&(i=8<i.length?i.replace(/([a-z]{8}$)/,"kp$1"):"kp"+i),!d&&a?a:o);E.async=!0,E.src=f+"/"+i+".js?"+c+v,null!=(e=g.parentNode)&&e.insertBefore(E,g)}();',
          }}
        />
      </body>
    </html>
  )
}
