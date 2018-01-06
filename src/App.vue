<template>
    <div class="m-app f-page">
      <router-view ref="nav" id="nav" v-touch:up.stop="nextPage()" v-touch:down.stop="prevPage()" v-touch:tap.stop="nextPage()" />
      <div class="m-btmbar">
        <a href="javascript:;" class="btn">{{btnTitle}}</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      index: 0,
      timer: null,
      isTimeOut: true,
      btnTitle: "查看我的年度总结",
      routerList: [
        { index: 1, path: '/', name: 'Cover' },
        { index: 2, path: '/night', name: "Night" },
        { index: 3, path: '/m-p01', name: "mP01"},
        { index: 4, path: '/m-p03', name: "mP03"},
        { index: 5, path: '/m-p04', name: "mP04"},
        { index: 6, path: '/m-p05', name: "mP05"},
        { index: 7, path: '/m-p06', name: "mP06"},
        { index: 8, path: '/m-p07', name: "mP07"},
        { index: 9, path: '/m-p08', name: "mP08"},
        { index: 10, path: '/m-p09', name: "mP09"},
        { index: 11, path: '/m-p10', name: "mP10"},
        { index: 12, path: '/m-p12', name: "mP12"},
        { index: 13, path: '/m-p13', name: "mP13"},
        { index: 14, path: '/m-p14', name: "mP14"},
        { index: 15, path: '/video', name: "video"}
      ]
    }
  },
  computed: {
    // 当前路由的下标
    curIndex() {
        return this.$store.state.curRouter;
    },
    // 记录当前routerList的长度
    routerLen() {
      return this.routerList.length;
    }
  },
  mounted: function () {
  },
  created: function () {
  },
  methods: {
    nextPage: function () {
      var that = this;
      return function ( event, start, end ) {
        // 记录当前路由
        let index = that.curIndex ;
        // 当页面不处于最后一个页面、不处于第一个页面时且处于暂停状态
        if ( index < that.routerLen - 1 && index != 0 && that.isTimeOut ) {
          // 下一个路由
          index = that.curIndex + 1;
          // 为本页面路由添加离开动画
          that.$refs.nav.$el.classList.add( "z-leave" );
            // 修改当前路由
          that.$store.commit( "_update_curRouter", index );
        } 
      }
    },
    prevPage: function () {
      var that = this;
      return function ( event, start, end ) {
        // 记录当前路由
        let index = that.curIndex;
        // 当页面不属于第一个页面时且处于暂停状态
        if ( index >= 1 && that.isTimeOut ) {
          // 上一个路由
          index = that.curIndex - 1;
          // 为本页面路由添加离开动画
          that.$refs.nav.$el.classList.add( "z-leave" );
          // 修改当前路由
          that.$store.commit( "_update_curRouter", index );
        } 
      }
    }
  },
  watch:{
    curIndex: {
      handler ( curVal, oldVal ) {
        clearTimeout( this.timer );
        var that = this;
        console.log( "当前路由的下标:" + curVal );
        if ( oldVal != curVal ) {
          // 记录非暂停状态
          that.isTimeOut = false;
          // 跳转路由
          that.timer = setTimeout(function() {
            // 添加路由
            that.$router.push({ path: that.routerList[ curVal ].path })
            // 记录暂停状态
            that.isTimeOut = true;
          }, 300);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url(../static/css/common.css);
  .m-app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      touch-action: none;
      .m-btmbar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          text-align: center;
          z-index: 200;
          .btn {
            display: block;
            width: 100%;
            height: 45px;
            background: #d33a31;
            color: #fff;
            font-size: 17px;
            text-align: center;
            line-height: 45px;
          }
      }
  }
  .m-app {
      height: auto;
      bottom: 45px;
      background: url(../static/images/common/background_white.png) no-repeat;
      background-size: cover;
  }

@media (min-height: 724px) {
  .f-page {
    bottom: 79px;
    .m-btmbar {
      .btn {
          padding-bottom: 34px;
      }
    }
  }
}
 

</style>
