(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),i=a(4),o=a.n(i),s=(a(13),a(14),a(3)),l=a.n(s),d=a(5),r=a(6),u=a(8),b=a(7),h=a(0),j=function(t){var e=t.handleGoodClick,a=t.handleNeutralClick,n=t.handleBadClick;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Please leave feedback"}),Object(h.jsx)("button",{type:"button",onClick:e,children:"Good"}),Object(h.jsx)("button",{type:"button",onClick:a,children:"Neutral"}),Object(h.jsx)("button",{type:"button",onClick:n,children:"Bad"}),Object(h.jsx)("h3",{children:"Statistics"})]})},k=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.totalVoutes,i=t.positiveFeedback;return Object(h.jsxs)("ul",{className:l.a.FeedbackItem,children:[Object(h.jsxs)("li",{children:["Good: ",e]}),Object(h.jsxs)("li",{children:["Neutral: ",a]}),Object(h.jsxs)("li",{children:["Bad: ",n]}),Object(h.jsxs)("li",{children:["Total: ",c]}),Object(h.jsxs)("li",{children:["Positive Feedback: ",i,"%"]})]})},O=function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleGoodClick=function(){t.setState((function(t){return{good:t.good+1}}))},t.handleNeutralClick=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.handleBadClick=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.totalVoutes=function(){return t.state.good+t.state.neutral+t.state.bad},t.positiveFeedback=function(){var e=t.state.good+t.state.neutral+t.state.bad;return Math.ceil(100*t.state.good/e)},t}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(j,{handleGoodClick:this.handleGoodClick,handleNeutralClick:this.handleNeutralClick,handleBadClick:this.handleBadClick}),0!==this.totalVoutes()?Object(h.jsx)(k,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,totalVoutes:this.totalVoutes(this.state),positiveFeedback:this.positiveFeedback(this.state)}):Object(h.jsx)("h3",{children:" No Feedback given"})]})}}]),a}(c.a.Component),f=O;var x=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(f,{})})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))},3:function(t,e,a){t.exports={FeedbackItem:"syle_FeedbackItem__3ymTG"}}},[[16,1,2]]]);
//# sourceMappingURL=main.20981093.chunk.js.map