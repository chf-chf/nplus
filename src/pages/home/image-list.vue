<template>
    <div class="image-list">
        <div :key="item.id" v-for="item in list" class="image-wrapper">
            <img :src="item.url" style="width: 100px;height:100px;border-radius: 5px;" />
            <!-- <i @click="handleAdd(item.url)" class="pt-iconfont icon-plus-circle"></i> -->
            <a-icon @click="handleAdd(item.url)" class="pt-iconfont" type="plus-circle" />
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
  import axios from 'axios'
  export default {
    props: {
      handleAdd: Function
    },
    data () {
      return {
        list: [
          {
            id: 1,
            url: '/static/images/sticker1.png'
          },
          {
            id: 2,
            url: '/static/images/sticker2.png'
          },
          {
            id: 3,
            url: '/static/images/sticker3.png'
          },
          {
            id: 4,
            url: '/static/images/sticker4.png'
          },
          {
            id: 5,
            url: '/static/images/sticker5.png'
          }, {
            id: 6,
            url: '/static/images/sticker6.png'
          }, {
            id: 7,
            url: '/static/images/sticker7.jpg'
          }
        ],
        info: []
      };
    },
    created () {
    },
    mounted () {
      // http://keyawstest.gf.com.cn/external/baike/api/search/baike/hotwords
      // nfts.diangezantech.com/v1/get_nfts_v1?address=0x29cCf6547BA65Bfc3E114d607D7dDb596edaeB44&chains=eth,polygon
      axios
      .get('nfts.diangezantech.com/v1/get_nfts_v1?address=0x29cCf6547BA65Bfc3E114d607D7dDb596edaeB44&chains=eth,polygon')
      .then(response => {
        console.log(response, 'res')
      })
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
    },
    methods: {

    }
  };
</script>

<style lang='scss' scoped>
    .image-list{
        position: absolute;
        // bottom: 0;
        top: 0;
        left: 0;
        // width: 100%;

        overflow-y: auto;

        overflow: scroll;

        // display: flex;
        -webkit-overflow-scrolling: touch;
        flex-wrap:nowrap;
        border-top: 1px solid #e4e4e4;
        // margin-left: 4vw;

        &::-webkit-scrollbar {
            display: none;
        }

        .image-wrapper{
            // padding: 4vw;
            padding: 1.5vw;
            border-right: 1px solid #EBEEF5;
            min-width: 20vw;
            
            display: -webkit-flex;
            display: -ms-flexbox;
            display: -moz-box;
            display:-webkit-box;
            display: flex;

            box-pack:center;
            -webkit--moz-box-pack:center;
            -moz-box-pack:center;
            -webkit-justify-content:center;
            justify-content:center;

            box-align:center;
            -moz-box-align:center;
            -webkit-box-align:center;
            -webkit-align-items:center;
            align-items:center;

            -moz-flex-wrap:nowrap;
            -webkit-flex-wrap:nowrap;
            flex-wrap:nowrap;


            position: relative;
            img{
                width: 20vw;
                object-fit: cover;
            }
            .pt-iconfont{
                position:absolute;
                right: 0vw;
                top: 0vw;
                color: #999;
                font-size: 2.6vw;
                padding: 1vw;
            }
        }
    }
</style>