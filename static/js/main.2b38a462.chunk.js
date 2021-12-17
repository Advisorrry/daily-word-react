(this["webpackJsonpdaily-word"]=this["webpackJsonpdaily-word"]||[]).push([[0],{16:function(e,t,a){e.exports={logo:"Header_logo__2wi4E"}},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(13),n=a.n(s),l=a(3),i=a(1),d=function(e){var t=e.imgName;return Object(i.jsx)("img",{src:"/daily-word-react"+t,className:"mx-auto container",alt:"bg"})},o=a(11),j=a(16),u=a.n(j),b=function(){return Object(i.jsxs)("header",{className:"flex justify-between items-center p-2",children:[Object(i.jsx)(o.b,{to:"/",className:u.a.logo,children:Object(i.jsx)("img",{src:"/daily-word-react/logo.png",alt:"logo"})}),Object(i.jsx)("div",{className:"font-bold font-sans antialiased",children:"Daily Word"}),Object(i.jsx)(o.c,{to:"/about",className:u.a.logo,children:Object(i.jsx)("img",{src:"/daily-word-react/about.png",alt:"logo"})})]})},x=a(5),m=x.e,g=a(2),h=Object(g.d)({name:"randomNumber",initialState:{value:0},reducers:{randomNumberByRange:function(e,t){var a=t.payload;e.value=a}}}),O=h.actions.randomNumberByRange,f=h.reducer,p=function(e,t){var a=Object(x.d)(),r=Math.floor(Math.random()*(t-e+1))+e;a(O(r))},v=function(e){var t=e.children;return Object(i.jsx)("div",{className:"text-white font-mono container mx-auto h-full bg-gradient-to-t from-yellow-150 to-indigo-200 text-lg",children:Object(i.jsx)("div",{children:t})})},N=function(){return Object(i.jsx)(i.Fragment,{children:"\u043c\u044f\u0443"})},y=a(18),w=function(){return Object(i.jsxs)("div",{className:"flex flex-col flex-1 gap-5 sm:p-2",children:[Object(i.jsxs)("div",{className:"mt-auto flex gap-3 justify-around",children:[Object(i.jsx)("div",{className:"bg-indigo-400 w-40 h-10 animate-pulse rounded-full"}),Object(i.jsx)("div",{className:"bg-indigo-400 w-40 h-10 animate-pulse rounded-full"})]}),Object(i.jsxs)("div",{className:"flex flex-1 flex-col gap-3",children:[Object(i.jsx)("div",{className:"bg-indigo-400 w-full animate-pulse h-14 rounded-2xl"}),Object(i.jsx)("div",{className:"bg-indigo-400 w-full animate-pulse h-5 rounded-2xl"})]})]})},S=c.a.memo((function(e){var t=e.words,a=e.isLoading,r=e.randomNumber;return a?Object(i.jsx)("div",{className:Object(y.a)("max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ","layout-height"),children:Object(i.jsx)(w,{})}):Object(i.jsx)("div",{className:Object(y.a)("max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ","layout-height"),children:Object(i.jsxs)("h2",{className:"font-extrabold w-full tracking-widest text-purple-600 text-4xl ",children:[Object(i.jsxs)("div",{className:"mb-5 px-1 flex justify-around items-center divide-y divide-fuchsia-300",children:[Object(i.jsx)("span",{className:"text-indigo-700 ",children:t[r].en_word}),Object(i.jsxs)("span",{className:"text-indigo-400 text-lg",children:["lvl: ",t[r].level," "]})]}),Object(i.jsx)("div",{className:"flex justify-end px-3",children:Object(i.jsx)("span",{className:"bg-green-200 rounded-full p-4 text-2xl ",children:t[r].ru_word})}),Object(i.jsxs)("span",{className:"block text-indigo-300 text-xs mt-5",children:["\u0447\u0430\u0441\u0442\u044c \u0440\u0435\u0447\u0438: ",t[r].part_speech]})]})})})),_=function(e){return e.randomNumberState},k=a(20),F=a(6),A=Object(k.a)({reducerPath:"wordsApi",baseQuery:Object(F.d)({baseUrl:"https://advisorrry.github.io/daily-word-react/"}),endpoints:function(e){return{getWords:e.query({query:function(){return{url:"db.json"}}})}}}),B=A.useGetWordsQuery,I=function(){var e=B(""),t=e.data,a=e.isLoading,r=m(_).value;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(S,{words:t,isLoading:a,randomNumber:r})})},L=(a(34),function(){var e=("1"!==localStorage.getItem("mobileAlert")&&alert("\u0421\u0430\u0439\u0442 \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0434 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435.\n            \u0427\u0442\u043e\u0431\u044b \u0435\u0433\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430\u0436\u043c\u0438\u0442\u0435: F12 -> Shift + Ctrl + m "),void localStorage.setItem("mobileAlert","1"));return p(0,2999),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(v,{children:[Object(i.jsx)(b,{}),Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/",element:Object(i.jsx)(I,{})}),Object(i.jsx)(l.a,{path:"about",element:Object(i.jsx)(N,{})})]})]}),Object(i.jsx)(d,{imgName:"/bg1.jpg"}),e]})}),M=a(21),W=a(8),q=Object(W.b)(Object(M.a)({randomNumberState:f},A.reducerPath,A.reducer)),E=Object(g.a)({reducer:q,middleware:function(e){return e().concat(A.middleware)}});Object(F.e)(E.dispatch),n.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)(x.a,{store:E,children:Object(i.jsx)(L,{})})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2b38a462.chunk.js.map