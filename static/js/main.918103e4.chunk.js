(this["webpackJsonpreact-workshop"]=this["webpackJsonpreact-workshop"]||[]).push([[0],{118:function(e,t,a){e.exports=a(236)},124:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=(a(123),a(97)),s=a(98),u=a(108),m=a(107),i=(a(124),a(248)),b=a(18),h=a(246),p=a(237),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={number:0,message:"",color:""},e.onButtonRandom=function(){var t=Math.floor(1e6*Math.random());console.log(t),e.setState({number:t})},e.onInputChange=function(t){e.setState({number:t.target.value}),console.log(t.target.value)},e.getResult=function(){var t=Number(e.state.number),a="Is prime number...";e.setState({color:"green"}),(t<=1||t>2&&t%2===0)&&(a="Is not prime number...",e.setState({color:"red"}));for(var n=Math.floor(Math.sqrt(t)),r=3;r<n+1;r++)if(t%r===0){a="Is not prime number...",e.setState({color:"red"});break}console.log(t,a),e.setState({message:a})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{as:"h2"},r.a.createElement(b.a,{name:"calculator"}),r.a.createElement(i.a.Content,null,"Prime Number Detector",r.a.createElement(i.a.Subheader,null,"Just give me a number and I'll tell you if is a prime number or not"))),r.a.createElement(h.a,{onChange:this.onInputChange,placeholder:this.state.number}),r.a.createElement(p.a,{color:"black",onClick:this.onButtonRandom},"Random"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{onClick:this.getResult},"Go..."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{color:this.state.color},this.state.message))}}]),a}(r.a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.918103e4.chunk.js.map