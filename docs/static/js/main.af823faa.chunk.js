(this["webpackJsonpimage-flipper"]=this["webpackJsonpimage-flipper"]||[]).push([[0],{13:function(e,t,a){e.exports=a(28)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(11),l=a.n(s),o=(a(18),a(19),a(3)),r=a(4),c=a(2),u=a(5),m=a(6),h=(a(20),a(21),a(22),a(12)),f=a(7),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var i;Object(o.a)(this,a),i=t.call(this,e);var n={top:f.d,right:f.c,bottom:f.a,left:f.b};return i.state={onClick:e.onClick,icon:n[e.icon]},i}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("button",{className:"button ".concat(this.props.className),onClick:this.state.onClick},n.a.createElement(h.a,{icon:this.state.icon}))}}]),a}(n.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(o.a)(this,a),i=t.call(this,e),console.log(e.image),i.state={image:e.image,x:0,y:0,z:0,style:{}},i.flipUp=i.flipUp.bind(Object(c.a)(i)),i.flipRight=i.flipRight.bind(Object(c.a)(i)),i.flipDown=i.flipDown.bind(Object(c.a)(i)),i.flipLeft=i.flipLeft.bind(Object(c.a)(i)),i}return Object(r.a)(a,[{key:"buildStyle",value:function(e,t,a){return{transform:"rotateX("+e+"deg) rotateY("+t+"deg) rotateZ("+a+"deg)"}}},{key:"flipUp",value:function(){var e=this.state.x-180;this.setState({x:e,style:this.buildStyle(e,this.state.y,this.state.z)})}},{key:"flipRight",value:function(){var e=this.state.y+180;this.setState({y:e,style:this.buildStyle(this.state.x,e,this.state.z)})}},{key:"flipDown",value:function(){var e=this.state.x+180;this.setState({x:e,style:this.buildStyle(e,this.state.y,this.state.z)})}},{key:"flipLeft",value:function(){var e=this.state.y-180;this.setState({y:e,style:this.buildStyle(this.state.x,e,this.state.z)})}},{key:"renderButtons",value:function(){var e=null;return this.state.image&&(e=n.a.createElement("div",null,n.a.createElement(p,{className:"image-viewer__button image-viewer__button--top",icon:"top",onClick:this.flipUp}),n.a.createElement(p,{className:"image-viewer__button image-viewer__button--right",icon:"right",onClick:this.flipRight}),n.a.createElement(p,{className:"image-viewer__button image-viewer__button--bottom",icon:"bottom",onClick:this.flipDown}),n.a.createElement(p,{className:"image-viewer__button image-viewer__button--left",icon:"left",onClick:this.flipLeft}))),e}},{key:"render",value:function(){var e=this.renderButtons();return n.a.createElement("div",{class:"image-viewer"},n.a.createElement("img",{style:this.state.style,class:"image-viewer__image",src:this.state.image}),e||"")}}]),a}(n.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={image:[]},e.onChange=e.onChange.bind(Object(c.a)(e)),e}return Object(r.a)(a,[{key:"onChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,i=e.target.files[0];a.onloadend=function(){t.setState({image:a.result})},a.readAsDataURL(i)}},{key:"render",value:function(){return n.a.createElement("div",{class:"image-flipper"},n.a.createElement("input",{class:"image-flipper__uploader",type:"file",value:this.state.value,onChange:this.onChange}),n.a.createElement(g,{image:this.state.image,key:this.state.image}))}}]),a}(n.a.Component);var b=function(){return n.a.createElement("div",{className:"app"},n.a.createElement("h1",{class:"title"},"Image Flipper"),n.a.createElement("p",{class:"description"},"Please upload an image and use the arrow keys to flip the image"),n.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.af823faa.chunk.js.map