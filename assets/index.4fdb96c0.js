import{m as v,u as h,r as p,a as f,j as e,F as S,b as N,c,d as A,e as I,R as x,P as R,f as b}from"./vendor.fad1696b.js";const k=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))d(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function u(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(l){if(l.ep)return;l.ep=!0;const o=u(l);fetch(l.href,o)}};k();function D(){v.accessToken="pk.eyJ1Ijoicm9oaXRzYWNoNTAiLCJhIjoiY2t6enB3NnJ2MGMzNzNibmFwa3cwMHBzcSJ9.WGPktzbJ7B1eZSkMR2djKw";const t=h(l=>l.custom.latlong),a=h(l=>l.custom.zoom),u=p.exports.useRef(null),d=p.exports.useRef(null);return p.exports.useEffect(()=>(d.current=new v.Map({container:u.current,style:"mapbox://styles/rohitsach50/ckwkg30zm8rdv14oc4tmffjv0",center:t,zoom:a}),f.get("https://52.66.131.15:5000/test").then(l=>{l.data.map.station_list.forEach(function(r){var i=document.createElement("section");let g=r.Ambient.AAQMS.parameter_map;var n=0;g.forEach(function(s){(s.parameter_name==="PM10"||s.parameter_name==="PM10")&&(n=parseInt(s.value),parseInt(s.value)<=50?i.className="marker-green":parseInt(s.value)>=51&&parseInt(s.value)<=100?i.className="marker-yellow":parseInt(s.value)>=101&&parseInt(s.value)<=150?i.className="marker-orange":parseInt(s.value)>=151&&parseInt(s.value)<=200?i.className="marker-red":parseInt(s.value)>=201&&parseInt(s.value)<=300?i.className="marker-purple":parseInt(s.value)>=301?i.className="marker-brown":i.className="marker-white")}),new v.Marker(i).setLngLat([r.longitude,r.latitude]).addTo(d.current).setPopup(new v.Popup({offset:5}).setHTML("<h6>"+r.station_name+'</h6><p classname="value">'+n+"</p>"))})}).catch(l=>{console.log(l)}),()=>{d.current.remove()})),e(S,{children:e("div",{ref:u,className:"map"})})}const M=t=>e("option",{value:[t.long,t.lat],children:t.station_name}),z=[{State:"Select State",Longitude:78.9629,Latitude:20.5937},{State:"Andaman & Nicobar Island",Longitude:92.88957895607236,Latitude:11.942373315646945},{State:"Andhra Pradesh",Longitude:79.74,Latitude:15.9129},{State:"Arunanchal Pradesh",Longitude:94.54532681056138,Latitude:27.725765415186213},{State:"Assam",Longitude:92.65731035572504,Latitude:26.321340891915742},{State:"Bihar",Longitude:85.6367740131486,Latitude:25.771393543753963},{State:"Chandigarh",Longitude:76.75872466,Latitude:30.7426},{State:"Chhattisgarh",Longitude:82.12509333594427,Latitude:21.555738582984045},{State:"Dadasra & Nagar Havelli",Longitude:73.09454961,Latitude:20.21513217},{State:"Daman & Diu",Longitude:72.41121190648654,Latitude:20.494569789560284},{State:"Delhi",Longitude:77.12804518,Latitude:28.645944300000004},{State:"Goa",Longitude:73.8660162584672,Latitude:15.393504042993381},{State:"Gujarat",Longitude:72.19574738883901,Latitude:22.37440584958047},{State:"Haryana",Longitude:76.52123742961845,Latitude:29.195616276383877},{State:"Himachal Pradesh",Longitude:76.85561813540754,Latitude:31.649468875492705},{State:"Jammu and Kashmir",Longitude:75.3412,Latitude:33.2778},{State:"Jharkhand",Longitude:85.85996246441698,Latitude:23.767505546745678},{State:"Karnataka",Longitude:76.29962467945006,Latitude:14.369817089467844},{State:"Kerala",Longitude:76.2177062100637,Latitude:10.326706356099079},{State:"Lakshadweep",Longitude:72.82992744,Latitude:10.43639053},{State:"Madhya Pradesh",Longitude:78.0824921329296,Latitude:23.635605202612826},{State:"Maharashtra",Longitude:75.270554473907,Latitude:19.392515612925344},{State:"Manipur",Longitude:93.86449349532845,Latitude:24.738974893665528},{State:"Meghalaya",Longitude:91.2375106953515,Latitude:25.480367364765502},{State:"Mizoram",Longitude:92.81661900620362,Latitude:23.45835659105703},{State:"Nagaland",Longitude:94.32575260288996,Latitude:26.06185707619746},{State:"Odisha",Longitude:84.98396583642707,Latitude:20.52959735874132},{State:"Puducherry",Longitude:79.7599736336565,Latitude:11.944312931975507},{State:"Punjab",Longitude:75.452952256905,Latitude:30.91206149181651},{State:"Rajasthan",Longitude:75.22539475422067,Latitude:26.493281966067006},{State:"Sikkim",Longitude:88.51230521984732,Latitude:27.337679796350727},{State:"Tamil Nadu",Longitude:78.76274652265822,Latitude:11.159711328934925},{State:"Telangana",Longitude:79.0193,Latitude:18.1124},{State:"Tripura",Longitude:91.65871313943327,Latitude:23.709304849812497},{State:"Uttar Pradesh",Longitude:80.65919244361825,Latitude:27.06916343191562},{State:"Uttarakhand",Longitude:78.84563219146264,Latitude:29.910255940855848},{State:"West Bengal",Longitude:88.14959609251514,Latitude:23.421343178895288}],F=()=>{const t=N(),a=h(n=>n.custom.stateAvgFinalList),u=h(n=>n.custom.countryAvgFinal),d=h(n=>n.custom.statelist),l=n=>{let s=n.target.value;return s=s.split(","),s},o=n=>{t({type:"latlongReducer",payload:n})},r=n=>{n.target.options[window.event.target.selectedIndex].text==="Select State"?i(4):i(7)},i=n=>{t({type:"zoomReducer",payload:n})},g=n=>{if(d.includes(n.target.options[window.event.target.selectedIndex].text))for(let s=0;s<a.length;s++)n.target.options[window.event.target.selectedIndex].text==Object.keys(a[s])&&(t({type:"avgReducer",payload:parseInt(Object.values(a[s]))}),console.log(a[s]));else n.target.options[window.event.target.selectedIndex].text=="Select State"?(t({type:"avgReducer",payload:parseInt(u)}),console.log(u)):(t({type:"avgReducer",payload:"No Data"}),console.log("no data"))};return e("div",{className:"select-el",children:e("select",{name:"State",id:"city",onChange:n=>{o(l(n)),r(n),g(n)},children:z.map(n=>e(M,{station_name:n.State,lat:n.Latitude,long:n.Longitude},n.State))})})},P=()=>{const t="en",[a,u]=p.exports.useState(new Date);p.exports.useEffect(()=>{const g=setInterval(()=>{u(new Date)},1e4);return()=>{clearInterval(g)}},[]);const l=`${a.toLocaleDateString(t,{weekday:"long",year:"numeric"})},${a.getDate()} ${a.toLocaleDateString(t,{month:"short"})}

`,o=a.getHours(),r=`Good ${o<12&&"Morning"||o<17&&"Afternoon"||"Evening"} `,i=a.toLocaleTimeString("en",{timeStyle:"short"});return c("div",{className:"row1",children:[e("h1",{className:"time",children:i}),e("p",{children:c("span",{className:"date  grey-text",children:[l," "]})}),e("p",{className:"wish grey-text",children:r})]})},j=()=>{const t=h(a=>a.custom.avg);return c("div",{className:"nav",children:[c("div",{className:"nav-main",children:[e(P,{}),e("hr",{}),e("div",{className:"row2",children:c("div",{children:[e("h2",{className:"h2",children:"State Average"}),e(F,{}),e("h1",{children:t})]})}),e("hr",{})]}),c("div",{className:"row3",children:[c("h1",{className:"color-code",children:[e("span",{className:"c",children:"C"}),e("span",{className:"lower-letters o",children:"o"}),e("span",{className:"lower-letters l",children:"l"}),e("span",{className:"lower-letters o",children:"o"}),e("span",{className:"lower-letters r",children:"r"}),e("span",{children:"-"}),e("span",{className:"c",children:"c"}),e("span",{className:"lower-letters o",children:"o"}),e("span",{className:"lower-letters d",children:"d"}),e("span",{className:"lower-letters e",children:"e"})]}),c("ul",{className:"color-unordered-list",children:[c("li",{className:"color-li-el green-li-el grey-text",children:[e("span",{className:"range range-green",children:"0 to 50"})," |",e("span",{className:"color-msg",children:" Good"})]}),c("li",{className:"color-li-el yellow-li-el grey-text",children:[e("span",{className:"range range-yellow",children:"51 to 100"})," |",e("span",{className:"color-msg",children:" Moderate"})]}),c("li",{className:"color-li-el orange-li-el grey-text",children:[e("span",{className:"range range-orange",children:"101 to 150"})," |",e("span",{className:"color-msg",children:" Unhealthy for Sensitive Group"})]}),c("li",{className:"color-li-el red-li-el grey-text",children:[e("span",{className:"range range-red",children:"151 to 200"})," |",e("span",{className:"color-msg",children:" Unhealthy"})]}),c("li",{className:"color-li-el purple-li-el grey-text",children:[e("span",{className:"range range-purple",children:"201 to 300"})," |",e("span",{className:"color-msg",children:" Very Unhealthy"})]}),c("li",{className:"color-li-el brown-li-el grey-text",children:[e("span",{className:"range range-brown",children:"Above 300"})," |",e("span",{className:"color-msg",children:" Hazardous"})]})]})]})]})},E=()=>{let t=[],a=0,u=0,d=0,l=[],o={},r=null,i=0,g=0,n=0;const s=N(),y=h(m=>m.custom.data),w=h(m=>m.custom.stateAvgFinalList);return p.exports.useEffect(()=>{f.get("https://
:5000/data/stations").then(m=>{s({type:"dataReducer",payload:m.data})})},[]),y!==null&&(y.forEach(m=>{r!==m.stateID&&(n=i/g,r!==null&&(o[String(r)]=n,l.push(o)),i=0,g=0,n=0,o={}),t.includes(m.stateID)||t.push(m.stateID),m.stationsInCity.forEach(L=>{t.includes(L.stateID)&&(L.live&&(i+=L.avg,g+=1,a+=L.avg,u+=1),r=L.stateID)})}),d=a/u,n=i/g,o[String(r)]=n,l.push(o),w===null&&(s({type:"avgReducer",payload:parseInt(d)}),s({type:"stateAvgReducer",payload:l}),s({type:"statelistReducer",payload:t}),s({type:"countryAvgReducer",payload:parseInt(d)}))),e(S,{})},O={latlong:[78.9629,20.5937],zoom:4,data:null,countryAvgFinal:0,stateAvgFinalList:null,avg:!1,statelist:null},C=A(O,{latlongReducer:(t,a)=>{t.latlong=a.payload},zoomReducer:(t,a)=>{t.zoom=a.payload},dataReducer:(t,a)=>{t.data=a.payload},countryAvgReducer:(t,a)=>{t.countryAvgFinal=a.payload},stateAvgReducer:(t,a)=>{t.stateAvgFinalList=a.payload},avgReducer:(t,a)=>{t.avg=a.payload},statelistReducer:(t,a)=>{t.statelist=a.payload}}),T=I({middleware:t=>t({immutableCheck:!1,serializableCheck:!1}),reducer:{custom:C}}),B=()=>e(x.StrictMode,{children:e(R,{store:T,children:c("div",{className:"wrapper",children:[e(E,{}),e(j,{}),e(D,{})]})})});b.render(e(B,{}),document.getElementById("root"));
