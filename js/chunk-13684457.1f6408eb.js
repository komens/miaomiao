(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13684457"],{"27db":function(t,i,e){"use strict";var a=e("3f61"),s=e.n(a);s.a},"3cc9":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"slide-enter-active",attrs:{id:"detailContainer"}},[e("Header",{attrs:{title:"影片详情"}},[e("i",{staticClass:"iconfont",on:{touchstart:t.handleToBack}},[t._v("")])]),t.isLoading?e("loading"):e("div",{staticClass:"contentDetail",attrs:{id:"content"}},[e("div",{staticClass:"detail_list"},[e("div",{staticClass:"detail_list_bg",style:{"background-image":"url("+t.detailMovie.img.replace(/w\.h/i,"148.208")+")"}}),e("div",{staticClass:"detail_list_filter"}),e("div",{staticClass:"detail_list_content"},[e("div",{staticClass:"detail_list_img"},[e("img",{attrs:{src:t._f("setWH")(t.detailMovie.img,"148.208"),alt:""}})]),e("div",{staticClass:"detail_list_info"},[e("h2",[t._v(t._s(t.detailMovie.nm))]),e("p",[t._v(t._s(t.detailMovie.enm))]),e("p",[t._v(t._s(t.detailMovie.sc))]),e("p",[t._v(t._s(t.detailMovie.cat))]),e("p",[t._v(t._s(t.detailMovie.src)+" / "+t._s(t.detailMovie.dur)+"分钟")]),e("p",[t._v(t._s(t.detailMovie.pubDesc))])])])]),e("div",{staticClass:"detail_intro"},[e("p",[t._v(t._s(t.detailMovie.dra))])]),e("div",{ref:"detail_player",staticClass:"detail_player swiper-container"},[e("ul",{staticClass:"swiper-wrapper"},t._l(t.detailMovie.photos,function(i,a){return e("li",{key:a,staticClass:"swiper-slide"},[e("div",[e("img",{attrs:{src:t._f("setWH")(i,"148.240"),alt:""}})])])}),0)])])],1)},s=[],l=e("981c"),n={name:"detail",components:{Header:l["a"]},props:["id"],data:function(){return{isLoading:!0,detailMovie:{}}},methods:{handleToBack:function(){this.$router.back()}},mounted:function(){var t=this;this.axios.get("/api/detailmovie?movieId="+this.id).then(function(i){var e=i.data.msg;"ok"===e&&(t.isLoading=!1,t.detailMovie=i.data.data.detailMovie,t.$nextTick(function(){new Swiper(t.$refs.detail_player,{slidesPerView:"auto",freeMode:!0,freeModeSticky:!0})}))})}},d=n,r=(e("424b"),e("2877")),o=Object(r["a"])(d,a,s,!1,null,"1e4bffec",null);i["default"]=o.exports},"3f61":function(t,i,e){},"424b":function(t,i,e){"use strict";var a=e("e12d"),s=e.n(a);s.a},"981c":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("header",{attrs:{id:"header"}},[t._t("default"),e("h1",[t._v(t._s(t.title))])],2)},s=[],l={name:"Header",props:{title:{type:String,default:"喵喵电影"}}},n=l,d=(e("27db"),e("2877")),r=Object(d["a"])(n,a,s,!1,null,"58e9f6a6",null);i["a"]=r.exports},e12d:function(t,i,e){}}]);
//# sourceMappingURL=chunk-13684457.1f6408eb.js.map