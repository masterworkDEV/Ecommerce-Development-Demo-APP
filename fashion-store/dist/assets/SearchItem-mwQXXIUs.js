import{r as s,m as n,v as p,o as u,c as m}from"./index-Bol1dAEX.js";const x={__name:"SearchItem",props:{searchValue:String},emits:["setChange","setSubmit"],setup(o,{emit:r}){const l=r,t=s(o.searchValue);return(i,e)=>n((u(),m("input",{type:"text",name:"search",autocorrect:"on",role:"search",autofocus:"on",placeholder:"Search","onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),onInput:e[1]||(e[1]=a=>l("setChange",t.value)),class:"input-field bg-inputBg px-3 placeholder:pl-1 max-md:placeholder:pl-1 text-[1rem] w-[30%] max-xl:w-[40%] h-[50px] rounded max-md:w-full"},null,544)),[[p,t.value]])}};export{x as _};
