<template>
  <div class="city_body">
      <div class="city_list">
         <loading v-if="isLoading" />
         <scroller v-else ref="city_List">
            <div>
               <div class="city_hot">
                  <h2>热门城市</h2>
                  <ul class="clearfix">
                     <li v-for="item in hotList" :key="item.id" @tap="handleToCity(item.nm,item.id)">{{item.nm}}</li>
                  </ul>
               </div>
               <div class="city_sort" ref="city_sort">
                  <div v-for="item in cityList" :key="item.index">
                     <h2>{{item.index}}</h2>
                     <ul>
                        <li v-for="list in item.list" :key="list.id" @tap="handleToCity(list.nm,list.id)">{{list.nm}}</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="city_index">
               <ul>
                  <li v-for="(item, index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{item.index}}</li>
               </ul>
            </div>
         </scroller>
      </div>
  </div>
</template>

<script>
export default {
   name: 'City',
   data() {
      return {
         cityList: [],
         hotList: [],
         isLoading: true
      }
   },
   methods: {
      formatCityList: function(cities) {
         var cityList = [];
         var hotList = [];

         for(var i = 0;i<cities.length;i++) {
            if(cities[i].isHot === 1) {
               hotList.push(cities[i]);
            }
         }
         for(var i = 0; i < cities.length; i++) {
            var firstLeter = cities[i].py.substring(0,1).toUpperCase();
            if(toCom(firstLeter)) {//新添加index
               cityList.push({index: firstLeter, list: [{nm: cities[i].nm, id: cities[i].id}]});
            } else {
               //累加索引
               for(var j = 0; j < cityList.length; j++) {
                  if(cityList[j].index === firstLeter) {
                     cityList[j].list.push({nm:cities[i].nm,id:cities[i].id});
                  }
               }
            }
         }
         cityList.sort((a,b) => {
            if(a.index > b.index) {
               return 1;
            } else if(a.index < b.index) {
               return -1;
            } else {
               return 0;
            }
         });
         
         function toCom(firstLeter) {
            for(var i = 0; i < cityList.length; i++) {
               if(cityList[i].index === firstLeter) {
                  return false;
               }
            }
            return true;
         }
         
         return {
            cityList,
            hotList
         }
      },
      handleToIndex: function(index) {
         var h2 = this.$refs.city_sort.getElementsByTagName('h2');
         //  this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
         this.$refs.city_List.toScrollTop(-h2[index].offsetTop);
      },
      handleToCity(nm,id) {
         this.$store.commit('city/CITY_INFO', {nm, id});
         window.localStorage.setItem('nowNm',nm);
         window.localStorage.setItem('nowId',id);
         this.$router.push('/movie/nowplaying');
      }
   },
   mounted() {
      var cityList = window.localStorage.getItem('cityList');
      var hotList = window.localStorage.getItem('hotList');
      if(cityList && hotList) {
         this.cityList = JSON.parse(cityList);
         this.hotList = JSON.parse(hotList);
         this.isLoading = false;
      } else {
         this.axios.get('/api/cityList').then((res)=>{
            let msg = res.data.msg;
            if(msg === 'ok') {
               let data = res.data.data.cities;
               var {cityList, hotList} = this.formatCityList(data);
               this.cityList = cityList;
               this.hotList = hotList;
               this.isLoading = false;
               window.localStorage.setItem('cityList',JSON.stringify(cityList));
               window.localStorage.setItem('hotList',JSON.stringify(hotList));
            }
         })
      }
   }
}
</script>

<style scoped>
#content .city_body{ display: flex; width:100%; position: relative; top: 0;}
.city_body .city_list{ flex:1;  background: #FFF5F0;height: 100vh;overflow: auto}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;position: fixed;top: 50%;right:0;transform: translateY(-50%)}
</style>
