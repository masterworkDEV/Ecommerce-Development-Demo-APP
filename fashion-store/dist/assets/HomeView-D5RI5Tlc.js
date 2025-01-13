import{_ as k,o as e,c as s,a as p,p as v,r as C,b as w,u as d,d as t,F as f,e as _,f as S,g as m,h as c,w as h,i as L,n as R,t as g,j as b,T as y,L as j}from"./index-Bol1dAEX.js";import{_ as G}from"./SearchItem-mwQXXIUs.js";const M={},N={class:"card w-full"};function E(x,l){return e(),s("article",N,l[0]||(l[0]=[p('<div class="movie--isloading"><div class="loading-image"></div><div class="loading-content"><div class="loading-text-container"><div class="loading-main-text"></div><div class="loading-sub-text"></div></div></div></div>',1)]))}const $=k(M,[["render",E]]),B={class:"new-collection mt-24"},I={key:0,class:"w-full"},T={class:"row grid grid-cols-3 gap-10 w-full"},A={key:1},O={key:0,class:"row flex justify-center gap-5 w-full max-lg:gap-3 max-md:flex-col-reverse max-md:gap-1"},H={class:"col relative"},D={class:"absolute right-0 left-0 bottom-0 flex items-center gap-2 max-md:translate-y-[50px]"},Z={class:"col"},F={class:"flex items-center justify-center gap-10 max-lg:gap-5"},z=["src","alt"],P={key:1,class:"row flex justify-center gap-5 w-full"},W={__name:"NewCollection",props:{products:{type:Array,required:!0},searchValue:String},setup(x){const l=v(),a=x;return C(a.searchValue),(o,n)=>{const i=w("router-link");return e(),s("section",B,[d(l).isLoading?(e(),s("div",I,[t("div",T,[(e(!0),s(f,null,_(Array(3),r=>(e(),S($,{key:r,class:"max-md:hidden"}))),128))])])):(e(),s("div",A,[d(l).isReady?(e(),s("div",O,[t("div",H,[n[2]||(n[2]=t("h1",{class:"text-6xl max-xl:text-h1 max-md:hidden font-text"},[t("b",null,[m(" NEW "),t("br"),m(" COLLECTION ")])],-1)),n[3]||(n[3]=t("p",{class:"max-md:hidden"},[m("Summer "),t("br"),m("2024")],-1)),t("div",D,[c(i,{to:{name:"collections"},class:"shop flex items-center w-full bg-inputBg text-start gap-5 p-2"},{default:h(()=>n[0]||(n[0]=[t("span",{class:"font-text text-sm w-full"},[t("b",null,"Go To Shop")],-1),t("svg",{class:"w-full h-6 translate-x-10 transition-all",fill:"#000000",height:"300",width:"250",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512.036 512.036","xml:space":"preserve"},[t("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),t("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),t("g",{id:"SVGRepo_iconCarrier"},[t("g",null,[t("g",null,[t("path",{d:"M508.916,248.351L295.583,35.018c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l195.093,195.2 H10.996c-5.333,0-10.133,3.84-10.88,9.067c-0.96,6.613,4.16,12.267,10.56,12.267h464.96L280.543,461.685 c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213l213.333-213.333 C513.076,259.338,513.076,252.511,508.916,248.351z"})])])])],-1)])),_:1}),n[1]||(n[1]=p('<div class="btns flex justify-center items-center gap-2 max-md:hidden"><button class="border border-gray-400 p-2 max-lg:p-1 cursor-default"><svg viewBox="0 0 24 24" fill="none" height="none" width="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15 7L10 12L15 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></button><button class="border border-gray-400 p-2 max-lg:p-1 cursor-default"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg></button></div>',1))])]),t("div",Z,[t("div",F,[(e(!0),s(f,null,_(a.products,r=>(e(),s("article",{class:"w-full max-sm:h-60 max-md:h-[300px] max-lg:h-[375px] max-xl:h-[395px]",key:r.id},[t("img",{src:r.images,alt:r.title,class:"w-full max-lg:h-full shadow"},null,8,z)]))),128))])])])):(e(),s("div",P,n[4]||(n[4]=[t("h1",null,"error cannot display data",-1)])))]))])}}},q={__name:"Hero",setup(x){const l=v(),a=C(""),o=L(()=>l.products.slice(3,5).filter(i=>i.title.toLowerCase().includes(a.value.toLowerCase()))),n=i=>{a.value=i};return(i,r)=>(e(),s(f,null,[r[0]||(r[0]=t("ul",null,[t("li",{class:"max-xl:text-sm text-textPrimary font-text max-sm:text-small"},"MEN"),t("li",{class:"max-xl:text-sm text-textPrimary font-text max-sm:text-small"},"WOMEN"),t("li",{class:"max-xl:text-sm text-textPrimary font-text max-sm:text-small"},"KIDS")],-1)),c(G,{"search-value":a.value,onSetChange:n},null,8,["search-value"]),c(W,{products:o.value,"search-value":a.value},null,8,["products","search-value"])],64))}},K=["onClick"],U={key:0,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X={key:1,viewBox:"0 0 24 24",fill:"#000",xmlns:"http://www.w3.org/2000/svg"},Q=["onDblclick","src","alt"],Y=["onClick"],J={class:"card-bottom"},tt={class:"row flex justify-between items-end"},et={class:"spec"},st={class:"category-spread flex text-center items-centert mb-1 mt-3 gap-2"},lt={class:"text-sm capitalize text-[#5e5e5e] max-sm:text-small font-text"},ot={class:"title"},rt={class:"font-text max-sm:text-sm"},it={class:"price"},at={class:"font-text max-sm:text-sm"},nt={key:0,class:"fixed w-full h-full bg-transparentBLK right-0 left-0 top-0 bottom-0 z-30"},dt={key:0,class:"fixed w-2/4 top-20 right-0 left-[50%] translate-x-[-50%] rounded-2xl cart-notification bg-black p-4 z-40"},ct={class:"text-white text-center"},mt={key:0,class:"fixed w-2/4 top-20 right-0 left-[50%] translate-x-[-50%] rounded-2xl cart-notification bg-black p-4 z-40"},xt={class:"text-red-600 text-center"},pt={class:"text-white"},ut={__name:"Carousel",props:{slideIndex:Number},setup(x){const l=v();return(a,o)=>{const n=w("router-link");return e(),s(f,null,[(e(!0),s(f,null,_(d(l).products.slice(2,14),(i,r)=>(e(),s("article",{key:r,class:"card"},[t("div",{style:R({transform:`translateX(-${x.slideIndex*100}%)`}),class:"card-preview relative"},[c(n,{to:{name:"product-details",params:{productID:i.id}},class:"eyes-view absolute top-3 right-3"},{default:h(()=>o[0]||(o[0]=[t("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--emojione-monotone",preserveAspectRatio:"xMidYMid meet",fill:"#000000"},[t("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),t("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),t("g",{id:"SVGRepo_iconCarrier"},[t("path",{d:"M2 31.428C2 40.23 5.74 53 17.002 53s15-12.77 15-21.572C32.002 4.191 2 4.191 2 31.428m12.768 20.006c-9.586 0-11.969-11.785-11.969-19.346c0-26.029 23.936-26.029 23.935 0c-.001 7.56-2.38 19.346-11.966 19.346",fill:"#000000"}),t("path",{d:"M32.002 31.428C32.002 40.23 35.739 53 47.003 53C58.264 53 62 40.23 62 31.428c0-27.237-29.998-27.237-29.998 0m12.767 20.006c-9.588 0-11.968-11.785-11.968-19.346c0-26.029 23.934-26.029 23.934 0c-.001 7.56-2.381 19.346-11.966 19.346",fill:"#000000"}),t("path",{d:"M2.799 32.246c0 6.211 4.354 10.965 9.727 10.965c5.372 0 9.724-4.754 9.724-10.965c-.001-15.275-19.451-15.275-19.451 0",fill:"#000000"}),t("path",{d:"M32.801 32.246c0 6.211 4.353 10.965 9.726 10.965c5.371 0 9.723-4.754 9.723-10.965c-.001-15.275-19.449-15.275-19.449 0",fill:"#000000"})])],-1)])),_:2},1032,["to"]),t("div",{onClick:u=>d(l).useAddToFavourite(i.id),class:"favourite p-3"},[i.liked?(e(),s("svg",U,o[1]||(o[1]=[p('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#c91818" stroke-width="0.768"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#c91818"></path></g><g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#c91818"></path></g>',3)]))):(e(),s("svg",X,o[2]||(o[2]=[t("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),t("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),t("g",{id:"SVGRepo_iconCarrier"},[t("path",{d:"M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"})],-1)])))],8,K),t("img",{onDblclick:u=>d(l).useAddToFavourite(i.id),src:i.images,alt:i.category.name,class:"w-[325px] h-[325px] border-2 border-primary"},null,40,Q),t("button",{onClick:u=>d(l).useAddToCart(i),class:"add-to-cart p-[.6rem] flex bg-[#d9d9d9] justify-center items-center absolute bottom-0 left-[50%] translate-x-[-50%] opacity-70"},o[3]||(o[3]=[p('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 12H18M12 6V18" stroke="#9e9e9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1)]),8,Y)],4),t("div",J,[t("div",tt,[t("div",et,[t("div",st,[t("p",lt,g(i.category.name),1),o[4]||(o[4]=t("form",{class:"flex items-center"},[t("input",{type:"checkbox",class:"w-3 h-3"}),t("small",null,"+2")],-1))]),t("div",ot,[t("h3",rt,[t("b",null,g(i.title.substring(0,22)),1)])])]),t("div",it,[t("h3",at,[t("b",null,"$"+g(i.price),1)])])])])]))),128)),d(l).cartNotification||d(l).existedInCart?(e(),s("div",nt)):b("",!0),c(y,{name:"cart-notification"},{default:h(()=>[d(l).cartNotification?(e(),s("div",dt,[t("p",ct,[t("b",null,g(d(l).productTitle),1),o[5]||(o[5]=m(" has been added to cart! "))])])):b("",!0)]),_:1}),c(y,{name:"cart-notification"},{default:h(()=>[d(l).existedInCart?(e(),s("div",mt,[t("p",xt,[t("b",pt,g(d(l).productTitle),1),o[6]||(o[6]=m(" is already in cart! "))])])):b("",!0)]),_:1})],64)}}},gt={class:"flex justify-between items-center text-start"},ft={class:"carousel-container mt-7 mb-5"},ht={key:0,class:"carousel"},_t={key:1},vt={key:0,class:"carousel"},wt={key:1,class:"carousel"},bt={__name:"ThisWeek",setup(x){const l=v(),a=C(0),o=()=>{const i=document.querySelector(".carousel"),u=(a.value+1)*i.clientWidth;i.scrollBy({left:u,behavior:"smooth"})},n=()=>{const i=document.querySelector(".carousel"),u=(a.value-1)*i.clientWidth;i.scrollBy({left:u,behavior:"smooth"})};return(i,r)=>{const u=w("router-link");return e(),s("section",null,[t("span",gt,[r[1]||(r[1]=t("h1",{class:"text-h1 max-md:text-h3 font-text"},[t("b",null,[m(" NEW "),t("br"),m(" THIS WEEK ")])],-1)),c(u,{to:{name:"collections"},class:"font-text text-sm max-sm:text-small mt-14"},{default:h(()=>r[0]||(r[0]=[m("See All")])),_:1})]),t("div",ft,[d(l).isLoading?(e(),s("div",ht,[(e(!0),s(f,null,_(Array(12),V=>(e(),S($,{key:V,class:"h-20 w-20"}))),128))])):(e(),s("div",_t,[d(l).isReady?(e(),s("div",vt,[c(ut,{"slide-index":a.value},null,8,["slide-index"])])):(e(),s("div",wt,r[2]||(r[2]=[t("p",null,"Error cannot display data",-1)])))])),t("div",{class:"btns flex justify-center items-center gap-5 mt-10 max-md:hidden"},[t("button",{class:"btn border border-gray-400 p-2",onClick:n},r[3]||(r[3]=[p('<svg viewBox="0 0 24 24" height="none" width="none" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15 7L10 12L15 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1)])),t("button",{class:"btn border border-gray-400 p-2",onClick:o},r[4]||(r[4]=[p('<svg viewBox="0 0 24 24" height="none" width="none" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1)]))])])])}}},kt={class:"collections w-full"},Ct={class:"collections-container"},yt={class:"row flex justify-center items-center gap-10"},St={key:0},$t={key:1},Vt={key:0,class:"w-full grid grid-cols-3 items-center gap-10 max-lg:gap-5 max-md:gap-3"},Lt={class:"card-preview relative hover:shadow-2xl transition-all"},Rt=["src","alt"],jt=["onClick"],Gt={class:"card-bottom"},Mt={class:"row flex justify-between items-end"},Nt={class:"spec"},Et={class:"category-spread flex text-center items-centert mb-1 mt-3 gap-2"},Bt={class:"text-sm capitalize text-[#5e5e5e] max-sm:text-[.6rem]"},It={class:"flex items-center"},Tt={class:"max-md:hidden"},At={class:"title"},Ot={class:"max-sm:text-[.7rem]"},Ht={class:"price max-md:hidden"},Dt={key:1,class:"row flex justify-center items-center gap-10"},Zt={class:"action flex flex-col justify-center items-center mt-10 mb-3"},Ft={__name:"Collections",setup(x){const l=v();return(a,o)=>{var i;const n=w("router-link");return e(),s("section",kt,[o[6]||(o[6]=p('<h1 class="text-h1 max-md:text-h3 font-text"><b> XIV <br> COLLECTIONS <br> 23-24 </b></h1><div class="flex justify-between items-end mb-3 border-b border-[#ccc] p-2 max-md:mb-7 max-md:p-0"><div class="categories flex gap-10 max-sm:gap-5"><button class="font-text text-sm max-md:text-smaller">(ALL)</button><button class="font-text text-sm max-md:text-smaller">MEN</button><button class="font-text text-sm max-md:text-smaller">WOMEN</button><button class="font-text text-sm max-md:text-smaller">KIDS</button></div><div class="filters-sorts flex items-center gap-20 max-md:hidden"><button class="font-text text-sm max-md:text-smaller">Filters(+)</button><div><span class="font-text text-sm max-md:text-smaller">Sorts(-)</span><p class="font-text text-sm max-md:text-smaller">Less to More</p><p class="font-text text-sm max-md:text-smaller">More to Less</p></div></div></div>',2)),t("div",Ct,[t("div",yt,[d(l).isLoading?(e(),s("div",St,o[0]||(o[0]=[t("div",{class:"row flex justify-center gap-10"},[t("p",null,"Loading please wait....")],-1)]))):(e(),s("div",$t,[d(l).isReady?(e(),s("div",Vt,[(e(!0),s(f,null,_((i=d(l).products)==null?void 0:i.slice(30,33),r=>(e(),s("article",{key:r.id,class:"w-full"},[t("div",Lt,[t("img",{src:r.images,alt:r.title,class:"w-[400px] h-[400px] border border-[#d9d9d9] max-lg:w-[220px] max-lg:h-[300px] max-md:w-[200px] max-md:h-[300px] max-sm:w-[110px] ma-smx:h-[200px]"},null,8,Rt),t("button",{onClick:u=>d(l).useAddToCart(r),class:"add-to-cart w-10 h-10 flex bg-[#d9d9d9] justify-center items-center absolute top-[89.5%] left-[50%] translate-x-[-50%] opacity-70 max-md:top-[87%] max-sm:top-[91%] max-sm:w-6 max-sm:h-6"},o[1]||(o[1]=[p('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 12H18M12 6V18" stroke="#9e9e9e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1)]),8,jt)]),t("div",Gt,[t("div",Mt,[t("div",Nt,[t("div",Et,[t("p",Bt,g(r.category.name),1),t("form",It,[o[2]||(o[2]=t("input",{type:"checkbox",class:"w-3 h-3 max-sm:hidden"},null,-1)),t("small",Tt,g(r.id),1)])]),t("div",At,[t("h3",Ot,[t("b",null,g(r.title.substring(7,35)),1)])])]),t("div",Ht,[t("h3",null,[t("b",null," $"+g(r.price.toFixed(2)),1)])])])])]))),128))])):(e(),s("div",Dt,o[3]||(o[3]=[t("h3",null,"Error cannot display datas",-1)])))]))]),t("div",Zt,[c(n,{to:{name:"collections"},class:"text-gray-600 max-md:text-small"},{default:h(()=>o[4]||(o[4]=[m("More")])),_:1}),o[5]||(o[5]=p('<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"></path></g></svg>',1))])])])}}},zt={};function Pt(x,l){return e(),s("section",null,l[0]||(l[0]=[p(`<div class="grid-view mt-24"><div class="row grid grid-cols-4 gap-5"><article class="grid-card w-full"><img src="https://img.freepik.com/free-photo/portrait-male-wearing-cap-sitting_23-2148854463.jpg?t=st=1730341412~exp=1730345012~hmac=131fffda28fbfbeddcffb28d9032d8a3b85dc5ab12c58becd14f2df11ae06e6e&amp;w=740" alt=""></article><article class="grid-card mt-10 w-full"><img src="https://img.freepik.com/free-photo/portrait-man-posing-traditional-african-attire-outdoors_23-2150572628.jpg?t=st=1730341291~exp=1730344891~hmac=2c37ed6088fc846b6fd90bf7b3e249084404181f80404f712e1410da13e78fbc&amp;w=740" alt=""></article><article class="grid-card w-full"><img src="https://img.freepik.com/free-photo/school-scene-with-queer-teens_23-2150379345.jpg?t=st=1730341190~exp=1730344790~hmac=aefbada7ba5ea95af77f3866109a9f62eaceccd8ced76fe9ce8abed90f1d99cf&amp;w=740" alt="School scene 
"></article><article class="grid-card mt-10 w-full"><img src="https://img.freepik.com/premium-photo/man-trendy-fashion-clothes-collage-white_1199132-207849.jpg?w=996" alt=""></article></div></div>`,1)]))}const Wt=k(zt,[["render",Pt]]),qt={},Kt={class:"our-mission"};function Ut(x,l){return e(),s("section",Kt,l[0]||(l[0]=[t("h1",{class:"text-h1 text-center max-md:text-h3 font-text"},[t("b",null," OUR APPROACH TO FASHION DESIGN ")],-1),t("p",{class:"text-center font-text pt-2 tracking-wider leading-6 text-normal max-md:text-sm max-md:tracking-normal max-sm:leading-6"},[m(" At Elegant Vogue, we blend creativity with craftmanship to create fashion that transcends trends and stands the test of time. "),t("br"),m("Each design is meticulously crafted, ensuring the "),t("br"),m("higest quality and exquisite finish ")],-1)]))}const Xt=k(qt,[["render",Ut]]),Qt={class:"footer w-full mt-56"},Yt={class:"grid grid-cols-2 pt-20 px-24 max-md:px-10 max-sm:px-14 place-content-center place-items-start"},Jt={class:"col"},te={class:"mt-5 flex justify-start"},ee={__name:"Footer",setup(x){return(l,a)=>(e(),s("div",Qt,[t("div",Yt,[a[2]||(a[2]=p('<div class="col"><p class="text-small font-primary max-sm:text-small max-smaller:text-xSmall">INFO</p><ul class="mt-5"><li><a href="#" class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall">PRICING</a></li><li><a href="#" class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall">ABOUT</a></li><li><a href="#" class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall">CONTACT</a></li></ul><p class="mt-16 text-small font-primary max-smaller:text-xSmall">LAGUAGES</p><ul class="mt-5"><li><a href="#" class="text-small max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall">ENG</a></li><li><a href="#" class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall">ESP</a></li><li><a href="#" class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall">SVE</a></li></ul></div>',1)),t("div",Jt,[a[0]||(a[0]=t("p",{class:"text-small max-md:text-small font-primary"},"TECHNOLOGIES",-1)),t("div",te,[c(j)]),a[1]||(a[1]=t("div",{class:"flex items-start justify-center gap-2 mt-2"},[t("h1",{class:"text-8xl max-lg:text-6xl max-sm:text-h3 font-text"},[t("span",null,"VR"),t("b",null,[m("XIV "),t("br"),m("QR")])]),t("p",{class:"mt-3 font-secondary text-small max-md:text-smaller max-sm:text-xSmall max-sm:hidden"}," Near-field communication ")],-1))])])]))}},se={class:"home"},le={class:"pages px-14 max-md:px-5"},ie={__name:"HomeView",setup(x){return(l,a)=>(e(),s("div",se,[t("main",le,[c(q),c(bt),c(Ft),c(Xt),c(Wt)]),c(ee)]))}};export{ie as default};
