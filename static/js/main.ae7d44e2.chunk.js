(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,n){e.exports=n(360)},355:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),c=n(18),s=n(19),l=n(21),u=n(20),m=n(22),p=n(42),d=n(13),h=n(55),g=n.n(h),f=n(56),b=n.n(f),E=n(32),v=n.n(E),y=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},appBar:{background:"#000"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{position:"static",className:t.appBar},r.a.createElement(b.a,null,r.a.createElement(v.a,{variant:"title",color:"inherit",className:t.grow},"Ensembl Genome Browser"))))}),w=n(14),j=n.n(w),O=n(31),k=n.n(O),x=n(57),S=n.n(x),C=n(40),T=n.n(C),N=function(e){var t=e.selectedTask,n=e.selectTask;return r.a.createElement(j.a,{item:!0,md:12},r.a.createElement(k.a,null,r.a.createElement(S.a,{value:t,onChange:n,indicatorColor:"primary",textColor:"primary",fullWidth:!0},r.a.createElement(T.a,{label:"Transcripts by Gene"}),r.a.createElement(T.a,{label:"Transcripts by HGVS"}))))},L=Object(d.withStyles)(function(e){return{heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(4*e.spacing.unit,"px 0 ").concat(5*e.spacing.unit,"px")}}})(function(e){var t=e.classes;return r.a.createElement(j.a,{className:t.heroContent},r.a.createElement(v.a,{variant:"display3",align:"center",color:"textPrimary",gutterBottom:!0},"Transcripts"))}),A=n(25),P=n.n(A),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateGeneForm=function(){n.props.onChange(n.state)},n.geneFormChanged=function(e){n.setState(Object(p.a)({},e.target.name,e.target.value),function(){n.updateGeneForm()})},n.state={geneSymbol:"",sequencePosition:"",aminoAcid:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(j.a,{item:!0,xs:12,md:12},r.a.createElement(j.a,{container:!0,spacing:16},r.a.createElement(j.a,{item:!0,md:4,xs:12},r.a.createElement(P.a,{id:"geneSymbol",label:"Gene Symbol",onChange:this.geneFormChanged,className:e.textField,margin:"normal",name:"geneSymbol",variant:"outlined"})),r.a.createElement(j.a,{item:!0,md:4,xs:12},r.a.createElement(P.a,{id:"sequencePosition",label:"Sequence Position",type:"number",onChange:this.geneFormChanged,className:e.textField,margin:"normal",name:"sequencePosition",variant:"outlined"})),r.a.createElement(j.a,{item:!0,md:4,xs:12},r.a.createElement(P.a,{id:"aminoAcid",label:"Amino Acid",onChange:this.geneFormChanged,className:e.textFieldLast,margin:"normal",name:"aminoAcid",variant:"outlined"}))))}}]),t}(a.Component),F=Object(d.withStyles)(function(){return{textField:{width:"100%"},textFieldLast:{width:"100%"}}})(_),G=n(58),q=n.n(G),R=Object(d.withStyles)(function(e){return{progress:{margin:2*e.spacing.unit}}})(function(e){var t=e.classes,n=e.loadingText;return r.a.createElement(j.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(q.a,{className:t.progress,size:50}),r.a.createElement(j.a,null,n))}),U=n(59),I=n.n(U),z=n(61),H=n.n(z),W=n(26),D=n.n(W),B=n(60),V=n.n(B),M=n(41),Q=n.n(M),J=n(33),Y=Object(d.withStyles)(function(e){return{head:{backgroundColor:"#555",color:e.palette.common.white},body:{fontSize:16}}})(D.a),K=Object(d.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white}}})(function(e){var t=e.transcripts;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{style:{display:t.length?"":"none"}},r.a.createElement(V.a,null,r.a.createElement(Q.a,null,r.a.createElement(Y,null,"ID"),r.a.createElement(Y,null,"Molecule"),r.a.createElement(Y,null,"Version"))),r.a.createElement(H.a,null,t.map(function(e){return r.a.createElement(Q.a,{key:e.id},r.a.createElement(D.a,{component:"th",scope:"row"},r.a.createElement("a",{href:"http://www.ensembl.org/id/"+e.id,target:"_blank",rel:"noopener noreferrer"},e.id)),r.a.createElement(D.a,null,e.molecule),r.a.createElement(D.a,null,e.version))}))),r.a.createElement(J.a,{container:!0,style:{display:t.length?"none":""}},"No results found."))}),Z=function(e){var t=e.geneSymbol,n=e.sequencePosition,a=e.aminoAcid;return!!(t&&n&&a)},$=n(27),X=n.n($),ee=n(63),te=n(92),ne=n.n(te),ae=n(126),re=n.n(ae),oe=function(){var e;return function(t){return e&&e.cancel(),e=ne.a.CancelToken.source(),ne.a.get(t,{cancelToken:e.token})}}(),ie=re()(oe,500),ce=function(){var e=Object(ee.a)(X.a.mark(function e(t,n){var a,r;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="https://rest.ensembl.org/sequence/id/:id.json?type=:type&multiple_sequences=1".replace(":id",t).replace(":type",n),e.next=4,ie(a,500);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}(),se=function(){var e=Object(ee.a)(X.a.mark(function e(t){var n,a;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.stableID,a=t.sequenceType,e.abrupt("return",ce(n,a));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(ee.a)(X.a.mark(function e(t){var n,a,r,o;return X.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.geneSymbol,a="https://rest.ensembl.org/lookup/symbol/homo_sapiens/:symbol.json?;expand=1;".replace(":symbol",n),e.next=4,ie(a,500);case 4:return r=e.sent,o=r.data,e.abrupt("return",ce(o.id,"protein"));case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),ue=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).processGene=function(e){Z(e)?(n.setState({isLoading:!0}),le(e).then(function(t){var a=e.aminoAcid.toUpperCase(),r=e.sequencePosition,o=t.filter(function(e){return e.seq[r-1]===a});n.setState({transcripts:o,isLoading:!1})})):n.setState({transcripts:[]})},n.state={isLoading:!1,transcripts:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{onChange:this.processGene}),this.state.isLoading&&r.a.createElement(R,{loadingText:"Loading Transcripts..."}),r.a.createElement(J.a,{item:!0,xs:12,md:12},!this.state.isLoading&&r.a.createElement(K,{transcripts:this.state.transcripts})))}}]),t}(a.Component),me=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).hgvsNotationChanged=function(e){e.persist();var t=e.target.value;n.props.onUpdate(t)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(j.a,{container:!0},r.a.createElement(j.a,{item:!0,xs:12,md:12},r.a.createElement(P.a,{id:"hgvsNotation",label:"HGVS Notation",onChange:this.hgvsNotationChanged,className:e.textFieldLast,margin:"normal",name:"hgvsNotation",variant:"outlined"})))}}]),t}(a.Component),pe=Object(d.withStyles)(function(){return{textField:{width:"100%"},textFieldLast:{width:"100%"}}})(me),de={Ala:"A",Cys:"C",Asp:"D",Glu:"E",Phe:"F",Gly:"G",His:"H",Ile:"I",Lys:"K",Leu:"L",Met:"M",Asn:"N",Pro:"P",Gln:"Q",Arg:"R",Ser:"S",Thr:"T",Val:"V",Trp:"W",Tyr:"Y"},he=function(e){return new RegExp("".concat("((?:[a-z][a-z]*[0-9]+[a-z0-9]*))").concat("(\\.\\d)?").concat("(:)").concat("([gcp])").concat("(\\.)").concat("((?:[a-z][a-z]+))").concat("(\\d+)").concat("((?:[a-z][a-z]+))"),["i"]).test(e)},ge=function(e){var t=(e=e.split(":"))[0].split(".")[0],n=e[1].split(".")[0],a=e[1].split(".")[1],r=a.match(/\d+/g),o=a.match(/[a-zA-Z]+/g)[0];return{stableID:t,position:r,sequenceType:{p:"protein",g:"genomic",c:"coding"}[n],aminoAcid:o=de[o]}},fe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).processHgvs=function(e){if(he(e)){var t=ge(e);n.setState({isLoading:!0}),se(t).then(function(e){var a=t.position,r=t.aminoAcid,o=e.filter(function(e){return e.seq[a-1]===r});n.setState({transcripts:o,isLoading:!1})})}else n.setState({transcripts:[]})},n.state={isLoading:!1,transcripts:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{onUpdate:this.processHgvs}),this.state.isLoading&&r.a.createElement(R,{loadingText:"Loading HGVS..."}),r.a.createElement(J.a,{item:!0,xs:12,md:12},!this.state.isLoading&&r.a.createElement(K,{transcripts:this.state.transcripts})))}}]),t}(a.Component),be=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).changeTask=function(e,t){n.setState({selectedTask:t})},n.state={selectedTask:0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(L,null),Object({NODE_ENV:"production",PUBLIC_URL:"/ebi-task",REACT_APP_SEQUENCE_ENDPOINT_URL:"https://rest.ensembl.org/sequence/id/:id.json?type=:type&multiple_sequences=1",REACT_APP_SYMBOL_TRANSCRIPTS_ENDPOINT_URL:"https://rest.ensembl.org/lookup/symbol/homo_sapiens/:symbol.json?;expand=1;",REACT_APP_TEST:"1"}).PROTEIN_SEQUENCE_ENDPOINT_URL,r.a.createElement(j.a,{container:!0,className:e.formHolder},r.a.createElement(N,{selectTask:this.changeTask,selectedTask:this.state.selectedTask}),r.a.createElement(j.a,{item:!0,xs:12,md:12,style:{display:0===this.state.selectedTask?"":"none"}},r.a.createElement(ue,null)),r.a.createElement(j.a,{item:!0,xs:12,md:12,style:{display:1===this.state.selectedTask?"":"none"}},r.a.createElement(fe,null))))}}]),t}(a.Component),Ee=Object(d.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper,padding:"20px;",marginTop:"20px",minHeight:"600px",boxShadow:"0px 1px 4px #ccc"},container:{display:"flex",flexWrap:"wrap"}}})(be),ve=(n(355),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("main",{className:e.layout},r.a.createElement(Ee,null)))}}]),t}(a.Component)),ye=Object(d.withStyles)(function(e){var t;return{layout:(t={width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},Object(p.a)(t,e.breakpoints.up(900+3*e.spacing.unit*2),{width:900,marginLeft:"auto",marginRight:"auto"}),Object(p.a)(t,"backgroundColor","#ccc"),t)}})(ve),we=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Oe=n(62),ke=n.n(Oe),xe=n(127);n.n(xe).a.config(),i.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,null),r.a.createElement(ye,null)),document.querySelector("#root")),function(e){if("serviceWorker"in navigator){if(new URL("/ebi-task",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/ebi-task","/service-worker.js");we?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):je(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):je(t,e)})}}()}},[[198,2,1]]]);
//# sourceMappingURL=main.ae7d44e2.chunk.js.map