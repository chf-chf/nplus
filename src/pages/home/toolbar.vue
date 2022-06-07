<template>
    <div class="tool-bar">
        <i @click="handleDelete" class="pt-iconfont icon-delete"></i>
        <i @click="rotate" class="pt-iconfont icon-shuaxin"></i>
        <!-- <i class="pt-iconfont icon-crop"></i> -->
        <i @click="createImg" class="pt-iconfont icon-plus-circle"></i>
    </div>
</template>

<script type='text/ecmascript-6'>
  // import {DeleteOutlined} from '@ant-design/icons-vue'
  export default {
    props: {
      handleDelete: Function,
      rotate: Function,
      createImg: Function
    },
    components: {
    },
    data () {
      return {
      };
    },
    created () {
    },
    mounted () {

    },
    methods: {

    }
  };
</script>

<style lang='scss' scoped>
    .tool-bar{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #efefef2a;

        
        padding: 3vw 1vw;
        z-index: 666;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: -moz-box;
        display:-webkit-box;
        display: flex;

        box-sizing: border-box;

        box-align:center;
        -moz-box-align:center;
        -webkit-box-align:center;
        -webkit-align-items:center;
        align-items:center;

        justify-content:space-around;


        flex-direction:column;

        .pt-iconfont{
            padding: 2.5vw 2vw;
            font-size: 2.3vw;
            color: #666;
            cursor: pointer;
        }
    }
</style>