(this.webpackJsonpmy_resume=this.webpackJsonpmy_resume||[]).push([[5],{56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var o=n(11),c=n(12),r=n(14),a=n(13),l=n(0),d=n.n(l);var s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var o=63&n[e];t+=o<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o<63?"_":"-"}return t},i=n(21),u=(n(56),n(1)),p=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleKeyUp=function(t){var n=t.keyCode,o=t.target;if(13===n){if(""===o.value.trim())alert("Todo can not be empty");else{var c={id:s(),name:o.value,done:!1};e.props.addTodo(c)}o.value=""}},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"todo_header",children:[Object(u.jsx)("h2",{children:"Todo List"}),Object(u.jsx)("input",{onKeyUp:this.handleKeyUp,type:"text",id:"newTodo",placeholder:"Please write a new todo and push ENTER"})]})}}]),n}(d.a.Component),h=Object(i.b)((function(e){return{todos:e.todos}}),{addTodo:function(e){return{type:"addTodo",todo:e}}})(p),j=(n(57),function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleUpdate=function(t){return function(n){e.props.updateTodo(t,n.target.checked)}},e.handleDelete=function(t){return e.props.deleteTodo(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)("ul",{className:"todo_list",children:this.props.todos.map((function(t){return Object(u.jsxs)("li",{className:"todo_item",children:[Object(u.jsxs)("label",{className:"todo_label",children:[Object(u.jsx)("input",{type:"checkbox",checked:t.done,onChange:e.handleUpdate(t.id)}),Object(u.jsx)("span",{className:"todo_name",children:t.name})]}),Object(u.jsx)("button",{onClick:function(){return e.handleDelete(t.id)},className:"todo_btn",style:{display:"block"},children:"Delete"})]},t.id)}))})}}]),n}(d.a.Component)),b=Object(i.b)((function(e){return{todos:e.todos}}),{updateTodo:function(e,t){return{type:"updateTodo",id:e,done:t}},deleteTodo:function(e){return{type:"deleteTodo",id:e}}})(j),f=(n(58),function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleCheckAll=function(t){e.props.checkAllTodo(t.target.checked)},e.deleteAllDone=function(){e.props.clearAllDoneTodo()},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.todos,t=e.length,n=e.reduce((function(e,t){return!0===t.done?e+1:e+0}),0);return Object(u.jsxs)("div",{className:"todo_footer",children:[Object(u.jsx)("label",{children:Object(u.jsx)("input",{type:"checkbox",onChange:this.handleCheckAll,checked:n===t&&0!==t})}),Object(u.jsx)("span",{children:Object(u.jsxs)("span",{className:"footer_info",children:["Done ",n," / All ",t," "]})}),Object(u.jsx)("button",{onClick:this.deleteAllDone,className:"todo_btn",children:"Clear All Done"})]})}}]),n}(d.a.Component)),O=Object(i.b)((function(e){return{todos:e.todos}}),{clearAllDoneTodo:function(){return{type:"clearAllDoneTodo"}},checkAllTodo:function(e){return{type:"checkAllTodo",done:e}}})(f),v=(n(59),function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"todo_page",children:Object(u.jsxs)("div",{className:"todo_wrap",children:[Object(u.jsx)(h,{}),Object(u.jsx)(O,{}),Object(u.jsx)(b,{})]})})}}]),n}(d.a.Component))}}]);
//# sourceMappingURL=5.a07a0b87.chunk.js.map