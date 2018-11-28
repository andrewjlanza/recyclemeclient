(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(75)},34:function(e,a,t){},36:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(13),s=t.n(l),r=(t(34),t(6)),o=t(7),i=t(9),m=t(8),h=t(10),u=(t(36),t(77)),d=t(78),p=t(79),b=t(26),E=t(11),g=t.n(E),k=t(76),y=t(27),C={development:{API_URL:"https://localhost:5001/api"},production:{API_URL:"https://recyclemepinellas.herokuapp.com/api"}}.production,v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={locations:[],searchTerm:"",plastics:!1,paper:!1,glass:!1,cardboard:!1,metal:!1,electronics:!1,aluminum_cans:!1,chemicals:!1,yard_waste:!1},t.handleMaterialChoice=function(e){t.setState(Object(b.a)({},e.target.value.toLowerCase(),e.target.checked),function(){"nearby"===t.state.lastButtonClicked?t.getNearby():"searchTerm"===t.state.lastButtonClicked&&t.search()}),console.log("Setting ".concat(e.target.value.toLowerCase()," to ").concat(e.target.checked))},t.handleSearchTermUpdate=function(e){t.setState({searchTerm:e.target.value})},t.search=function(e){e&&e.preventDefault(),g.a.get("".concat(C.API_URL,"/search"),{params:{searchTerm:t.state.searchTerm,plastics:t.state.plastics,paper:t.state.paper,metal:t.state.metal,electronics:t.state.electronics,glass:t.state.glass,chemicals:t.state.chemicals,yard_waste:t.state.yard_waste,cardboard:t.state.cardboard,aluminum_cans:t.state.aluminum_cans}}).then(function(e){console.log(e.data),t.setState({locations:e.data,lastButtonClicked:"searchTerm"})})},t.getNearby=function(){console.log("getting nearby"),g.a.get("".concat(C.API_URL,"/search/nearby"),{params:{lat:t.props.coords.latitude,lng:t.props.coords.longitude,plastics:t.state.plastics,paper:t.state.paper,metal:t.state.metal,electronics:t.state.electronics,glass:t.state.glass,chemicals:t.state.chemicals,yard_waste:t.state.yard_waste,cardboard:t.state.cardboard,aluminum_cans:t.state.aluminum_cans}}).then(function(e){console.log(e.data),t.setState({locations:e.data,lastButtonClicked:"nearby"})})},t.popupFunction=function(){document.getElementById("myPopup").classList.toggle("show")},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="".concat(C.API_URL);console.log({props:this.props}),this.props.match.params.searchTerm?a+="/search":a+="/locations",console.log("GETTING"),g.a.get(a,{searchTerm:this.props.match.params.searchTerm,plastics:this.state.plastics,paper:this.state.paper,metal:this.state.metal,electronics:this.state.electronics,glass:this.state.glass,chemicals:this.state.chemicals,yard_waste:this.state.yard_waste,cardboard:this.state.cardboard,aluminum_cans:this.state.aluminum_cans}).then(function(a){console.log({json:a}),e.setState({locations:a.data})})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.search},c.a.createElement("div",{className:"more-info"},"For more information about Pinellas County Recycling, ","  ",c.a.createElement("a",{target:"_blank",href:"https://www.stpete.org/recycle"},"  ",c.a.createElement("u",null,"click here"))),c.a.createElement("div",{className:"field has-addons"},c.a.createElement("div",{className:"control"},c.a.createElement("strong",null,c.a.createElement("input",{className:"searchBar",type:"search",onChange:this.handleSearchTermUpdate,placeholder:"Find a recycling center..."})," ")))," ",c.a.createElement("div",{className:"looking-to-recycle"},c.a.createElement("strong",null,c.a.createElement("u",null,"I'm looking to recycle:"))),c.a.createElement("br",null),c.a.createElement("div",{className:"checkbox-filter"},c.a.createElement("div",{className:"checkbox"},c.a.createElement("input",{type:"checkbox",value:"plastics",id:"plasticsCheckbox",onChange:this.handleMaterialChoice})," ",c.a.createElement("label",{htmlFor:"plasticsCheckbox"},"Plastics"),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",value:"paper",id:"paperCheckbox",onChange:this.handleMaterialChoice})," ",c.a.createElement("label",{htmlFor:"paperCheckbox"},"Paper"),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",value:"glass",id:"glassCheckbox",onChange:this.handleMaterialChoice})," ",c.a.createElement("label",{htmlFor:"glassCheckbox"}," Glass"),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",value:"cardboard",id:"cardboardCheckbox",onChange:this.handleMaterialChoice})," ",c.a.createElement("label",{htmlFor:"cardboardCheckbox"},"Cardboard"),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",value:"aluminum_cans",id:"aluminumCansCheckbox",onChange:this.handleMaterialChoice})," ",c.a.createElement("label",{htmlFor:"aluminumCansCheckbox"},"Aluminum Cans"),c.a.createElement("br",null)),c.a.createElement("div",{className:"checkbox"},c.a.createElement("input",{type:"checkbox",value:"electronics",id:"electronicsCheckbox",onChange:this.handleMaterialChoice})," ",c.a.createElement("label",{htmlFor:"electronicsCheckbox"},"Electronics"),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",value:"metal",id:"metalCheckbox",onChange:this.handleMaterialChoice})," ",c.a.createElement("label",{htmlFor:"metalCheckbox"},"Metal"),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",value:"chemicals",id:"chemicalsCheckbox",onChange:this.handleMaterialChoice})," ",c.a.createElement("label",{htmlFor:"chemicalsCheckbox"},"Chemicals"),c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",value:"yard_waste",id:"yardWasteCheckbox",onChange:this.handleMaterialChoice})," ",c.a.createElement("label",{htmlFor:"yardWasteCheckbox"},"Yard Waste"))),c.a.createElement("div",{className:"button-div"},c.a.createElement("button",{className:"search-button button is-info"},"Get Recycling!"),c.a.createElement("img",{className:"compass-img",onClick:this.getNearby,src:"./compass.png",alt:"Recycling centers near me"}))),c.a.createElement("section",{className:"recycle-me-list"},c.a.createElement("header",{className:"results"},"Found ",c.a.createElement("u",null,this.state.locations.length)," recycling centers"),c.a.createElement("div",{className:"card"},this.state.locations.map(function(a){return c.a.createElement("div",{className:"card-content",key:a.id},c.a.createElement("div",{className:"media"},c.a.createElement("div",{className:"media-left"},c.a.createElement("figure",{className:"image is-48x48"},c.a.createElement("img",{src:"./pinellas.png",alt:"Placeholder"}))),c.a.createElement("div",{className:"media-content"},c.a.createElement("p",{className:"title is-4"},a.centerName),c.a.createElement("p",{className:"subtitle is-6"},c.a.createElement("a",{onClick:e._hideMenu,className:"linkContact",href:"tel://17276199736"},c.a.createElement("li",{className:"menu-contact"},a.phoneNumber))))),c.a.createElement("div",{className:"content"},c.a.createElement("ul",null,c.a.createElement("li",{className:"addresses"},c.a.createElement("a",{onClick:e._hideMenu,className:"linkContact",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/search/?api=1&query=".concat(a.address,"+").concat(a.city,"+").concat(a.state,"+").concat(a.zip)},c.a.createElement("p",null,a.address),c.a.createElement("p",null,a.city,", ",a.state," ",a.zip))),c.a.createElement("li",null,a.weekdayHours),c.a.createElement("li",null,a.weekendHours),c.a.createElement("li",null,"",c.a.createElement("strong",null,"This center recycles:"),a.locationMaterials.map(function(e){return c.a.createElement("div",{key:e.id},e.material.materialType)}))),c.a.createElement("br",null),c.a.createElement(k.a,{to:"/location/".concat(a.id)},"More Details")))}))))}}]),a}(n.Component),f=Object(y.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(v),N=t(14),w={width:"100%",height:"100%"},x=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},t.onMarkerClick=function(e,a,n){return t.setState({selectedPlace:e,activeMarker:a,showingInfoWindow:!0})},t.onClose=function(e){t.state.showingInfoWindow&&t.setState({showingInfoWindow:!1,activeMarker:null})},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(N.Map,{google:this.props.google,zoom:10,style:w,initialCenter:{lat:this.props.location.latitude,lng:this.props.location.longitude}},c.a.createElement(N.Marker,{latitude:this.props.location.latitude,longitude:this.props.location.longitude,onClick:this.onMarkerClick,name:this.props.location.centerName}),c.a.createElement(N.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},c.a.createElement("div",null,c.a.createElement("h4",null,this.state.selectedPlace.name))))}}]),a}(n.Component),M=Object(N.GoogleApiWrapper)({apiKey:"AIzaSyDzj5aeK1GPyqjHJu5qaE1UNFH7Nr9pY0s"})(x),_=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={location:{locationMaterials:[]}},t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(C.API_URL,"/locations/").concat(this.props.match.params.id)).then(function(a){e.setState({location:a.data})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"details-page"},c.a.createElement("div",{className:"mapWindow"},c.a.createElement(M,{location:this.state.location})),c.a.createElement("section",{className:"top-section"},c.a.createElement("img",{src:"",alt:""}),c.a.createElement("section",{className:"information"},c.a.createElement("h1",null,c.a.createElement("strong",null,"Name: "),this.state.location.centerName),c.a.createElement("a",{onClick:this._hideMenu,className:"linkContact",target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/search/?api=1&query=".concat(this.state.location.address,"+").concat(this.state.location.city,"+").concat(this.state.location.state,"+").concat(this.state.location.zip)},c.a.createElement("h3",null,this.state.location.address),c.a.createElement("h3",null,this.state.location.city,", ",this.state.location.state," ",this.state.location.zip)),c.a.createElement("a",{onClick:this._hideMenu,className:"linkContact",href:"tel://{this.state.location.phoneNumber}"},c.a.createElement("li",{className:"menu-contact"},this.state.location.phoneNumber),c.a.createElement("li",null," ",this.state.location.itemsAccepted))),c.a.createElement("li",{className:"more-details"},c.a.createElement("strong",null," Recycleables accepted:"),this.state.location.locationMaterials.map(function(e){return c.a.createElement("div",{key:e.id},e.material.materialType)}),c.a.createElement("ul",{className:""},c.a.createElement("strong",null,"Hours of Operation:"),c.a.createElement("li",null,"M-F: ",this.state.location.weekdayHours||"N/a"),c.a.createElement("li",null,"Sat, Sun: ",this.state.location.weekendHours||"N/a")))),c.a.createElement("div",null))}}]),a}(n.Component),j=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"background-img"},c.a.createElement("nav",{className:"navbar is-success",role:"navigation","aria-label":"main navigation",href:"/"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement("a",{className:"navbar-item",href:"/"},"RecycleMePinellas"," ",c.a.createElement("span",{role:"img","aria-label":"recycle"},"\u267b\ufe0f\ufe0f")))),c.a.createElement(d.a,null,c.a.createElement(p.a,{path:"/",exact:!0,component:f}),c.a.createElement(p.a,{path:"/location/:id",exact:!0,component:_}),c.a.createElement(p.a,{path:"/search/:searchTerm",exact:!0,component:f}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.1172a188.chunk.js.map