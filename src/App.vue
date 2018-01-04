<template>
    <div class="m-app f-page">
      <router-view ref="nav" id="nav" v-touch:up.stop="prevPage()" v-touch:down.stop="nextPage()"/>
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
      btnTitle: "查看我的年度总结"
    }
  },
  mounted: function () {
  },
  created: function () {
    console.log("dsad");
  },
  methods: {
    prevPage: function () {
      var that = this;
      return function ( event, start, end ) {
        that.$refs.nav.$el.classList.add("z-leave");
        // console.log( that.$refs.nav.$el.classList );
        setTimeout(function() {
          that.$router.push({ path: "/m-p01"})
        }, 300);
     
      }
    },
    nextPage: function () {
      var that = this;
      return function ( event, start, end ) {
      that.$refs.nav.$el.classList.add("z-leave");
        setTimeout(function() {
          that.$router.push({ path: "/"})
        }, 300);
      }
    }
  },
  beforeDestroy: function () {
  }
}
</script>

<style lang="scss" scoped>
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
      background: url(//s3.music.126.net/nact/s/client/images/year2017/common/background_white.png?e162bde…) no-repeat;
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
