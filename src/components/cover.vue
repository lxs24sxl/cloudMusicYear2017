<template>
  <div ref="cover" :class="{'m-cover f-page':true,'z-enter': coverClass.enter, 'z-leave': coverClass.leave}">
    <div class="bgback"></div>
    <div class="light f-page f-animOpac"></div>
    <div class="titlebox">
      <h1 v-for="item in boxMsg" :class="{ 'title':true, 'title-1': item.is1, 'title-2': item.is2 }"></h1>
    </div>
    <div class="nickname">
      <div class="line">
        <i v-for="item in nicknameMsgs" :class="{ 'r': item.isR }">{{ item.text }}</i>
      </div>
    </div>
    <div class="card">
      <div class="front"></div>
      <div class="back"></div>
    </div>
    <div class="man"></div>
    <a class="primary" @click="doLeave">
     <span class="f-pr">
        {{ primaryText.text1 }}
        <br>
        {{ primaryText.text2 }}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  data () {
    return {
      boxMsg: [ 
        {title:"陪你温暖同行", is1: true, is2:false },
        {title: "这一年,网易云音乐", is1:false, is2:true}
      ],
      "primaryText" : {
        text1: "立即",
        text2: "查看"
      },
      coverClass: {
        enter: false,
        leave: false
      }
    }
  },
  computed: {
    // 封装nickname数组
    nicknameMsgs () {
      var nickname = this.$store.state.data.nickname.split(''),       // 字符串转数组
          nicknameMsg = [],                                           // 创建临时数组
          that = this;                                                // 
      // 遍历姓名数组
      nickname.forEach(function ( value, index ) {
        let object = new Object();
        // 添加text属性,并赋值字符串
        object.text = value;
        // 添加isR属性,并赋值布尔值
        object.isR = that.checknum( value );
        // 添加对象到数组
        nicknameMsg.push( object );
      });
      return nicknameMsg;
    }
  },
  methods: {
    // 离开页面
    doLeave: function () {
      this.coverClass.leave = true;
      var that = this;
      setTimeout(function() {
        that.$store.commit( "_update_curRouter", 1 );
      }, 1000 );
    },
    // 检查是否为字母
    checknum: function (value) {
      var Regx = /^[A-Za-z0-9]*$/;
      if (Regx.test(value)) {               // 当字符串为字母,返回true
        return true;
      }else {                               // 当字符串为非字母,返回false
        return false;
      }
    }
  },
  mounted () {
    var that = this;
    // 修改当前路由
    this.$store.commit( "_update_curRouter", 0 );
    // 添加进入动画
    setTimeout(function () {
      that.coverClass.enter = true;
    }, 200 );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(../../static/css/common.scss);
.m-cover {
    background-color: #332c2e;
    visibility: hidden;
    opacity: 0;
    .bgback {
      position: absolute;
      bottom: -40px;
      left: 0;
      width: 500px;
      height: 850px;
      background: url(../../static/images/cover/cover_bg.jpg?91115a3…) no-repeat;
      background-size: 100%;
    }
    .light {
      background: url(../../static/images/cover/light.png) no-repeat;
      background-size: cover;
    }
    .f-animOpac {
        opacity: 0;
    }
    .titlebox {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      -webkit-transform-origin: right top;
      transform-origin: right top;
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
    .title-1 {
        right: 80px;
        width: 84px;
        height: 293px;
        background-image: url(../../static/images/cover/title_1.png);
        -webkit-transform: translateX(-30px);
        transform: translateX(-30px);
    }
    .title-2 {
        right: 30px;
        width: 36px;
        height: 341px;
        background-image: url(../../static/images/cover/title_2.png);
        -webkit-transform: translateX(30px);
        transform: translateX(30px);
    }
    .title {
        position: absolute;
        top: 28px;
        background-size: 100%;
        background-repeat: no-repeat;
        opacity: 0;
        -webkit-transition: opacity .6s .1s, -webkit-transform 2s;
        transition: opacity .6s .1s, -webkit-transform 2s;
        transition: transform 2s, opacity .6s .1s;
        transition: transform 2s, opacity .6s .1s, -webkit-transform 2s;
    }
    .nickname {
        position: absolute;
        bottom: 45px;
        left: 67px;
        width: 44px;
        height: 130px;
        color: #f4efe9;
        font-size: 17px;
        -webkit-transform: rotateZ(-58deg) skewY(35deg);
        transform: rotateZ(-58deg) skewY(35deg);
        .line {
            float: right;
            width: 50%;
            text-align: center;
            i {
                display: block;
                text-shadow: -3px 4px rgba(0, 0, 0, 0.2);
                line-height: 18px;
            }
            i.r {
                text-shadow: 4px 3px rgba(0, 0, 0, 0.2);
                -webkit-transform: rotateZ(90deg);
                transform: rotateZ(90deg);
            }
        }
    }
    .card {
        position: absolute;
        left: 100px;
        bottom: 115px;
        width: 61px;
        height: 122px;
        -webkit-transform: rotateZ(-60deg) skewY(35deg);
        transform: rotateZ(-60deg) skewY(35deg);
        box-shadow: -15px 10px 10px rgba(0, 0, 0, 0.3);
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        .front {
            position: absolute;
            top: 0;
            left: 0;
            background: url(../../static/images/cover/card_front.jpg) no-repeat;
            width: 100%;
            height: 100%;
            background-size: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }
        .back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            background-image: url(../../static/images/common/background_white.png);
            background-size: cover;
        }
    }
    .man {
        position: absolute;
        width: 89px;
        bottom: 85px;
        left: 125px;
        height: 121px;
        background-image: url(../../static/images/cover/sprite_man_repeat.png);
        -webkit-animation: guitaSittingAnimation 2s steps(1) infinite;
        animation: guitaSittingAnimation 2s steps(1) infinite;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
    }
    .primary {
        position: absolute;
        display: block;
        bottom: 50px;
        right: 29px;
        width: 72px;
        height: 72px;
        padding-top: 14px;
        text-align: center;
        border-radius: 9999px;
        background-color: #fff;
        color: #333;
        font-size: 18px;
        line-height: 22px;
        box-sizing: border-box;
        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: -8px;
          left: -8px;
          width: 88px;
          height: 88px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.23);
          -webkit-animation: 0.8s ease-in infinite alternate halo;
          animation: 0.8s ease-in infinite alternate halo;
        }
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: -130px;
          left: 35px;
          width: 2px;
          height: 130px;
          background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.2), #ffffff);
          background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), #ffffff);
        }
        .f-pr {
          position: relative;
        }
    }
}
// 进入时动画
.m-cover.z-enter {
    visibility: visible;
    opacity: 1;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    .light {
        -webkit-transition-delay: .1s;
        transition-delay: .1s;
        -webkit-transition-duration: 2s;
        transition-duration: 2s;
    }
    .title {
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
// 离开时动画
.m-cover.z-leave {
  .card {
    bottom: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transition: all 1s .3s;
    transition: all 1s .3s;
  }
  .man {
      opacity: 0;
      -webkit-transition: opacity .5s;
      transition: opacity .5s;
  }
  .primary {
    opacity: 0;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
  }
}

.z-enter .f-animOpac {
    opacity: 1;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
}
@media (min-width: 360px) {
  .m-cover {
    .bgback {
      bottom: 0;
      left: 0;
    }
    .titlebox {
      -webkit-transform: none;
      transform: none;
    }
    .nickname {
      bottom: 85px;
      left: 66px;
    }
    .card {
        bottom: 155px;
    }
    .man {
        bottom: 125px;
    }
    .primary {
        right: 45px;
        bottom: 70px;
        -webkit-transform: none;
        transform: none;
    }
  }
}

@media (min-width: 414px) {
  .m-cover  {
    .titlebox {
      right: 10px;
    }
    .title {
      top: 56px;
    }
    .primary {
      right: 55px;
    }
  }
}
@media (min-height: 603px) {
  .m-cover {
    .primary {
        bottom: 90px;
    }
  }
}

/* 人物动画 */
@-webkit-keyframes guitaSittingAnimation {
  0% {
    background-position: 0px 0px;
  }
  1.69% {
    background-position: -89px 0px;
  }
  3.39% {
    background-position: -178px 0px;
  }
  5.08% {
    background-position: -267px 0px;
  }
  6.78% {
    background-position: -356px 0px;
  }
  8.47% {
    background-position: -445px 0px;
  }
  10.17% {
    background-position: -534px 0px;
  }
  11.86% {
    background-position: -623px 0px;
  }
  13.56% {
    background-position: -712px 0px;
  }
  15.25% {
    background-position: -801px 0px;
  }
  16.95% {
    background-position: -890px 0px;
  }
  18.64% {
    background-position: -979px 0px;
  }
  20.34% {
    background-position: -1068px 0px;
  }
  22.03% {
    background-position: -1157px 0px;
  }
  23.73% {
    background-position: -1246px 0px;
  }
  25.42% {
    background-position: -1335px 0px;
  }
  27.12% {
    background-position: -1424px 0px;
  }
  28.81% {
    background-position: -1513px 0px;
  }
  30.51% {
    background-position: -1602px 0px;
  }
  32.20% {
    background-position: -1691px 0px;
  }
  33.90% {
    background-position: -1780px 0px;
  }
  35.59% {
    background-position: -1869px 0px;
  }
  37.29% {
    background-position: 0px -121px;
  }
  38.98% {
    background-position: -89px -121px;
  }
  40.68% {
    background-position: -178px -121px;
  }
  42.37% {
    background-position: -267px -121px;
  }
  44.07% {
    background-position: -356px -121px;
  }
  45.76% {
    background-position: -445px -121px;
  }
  47.46% {
    background-position: -534px -121px;
  }
  49.15% {
    background-position: -623px -121px;
  }
  50.85% {
    background-position: -712px -121px;
  }
  52.54% {
    background-position: -801px -121px;
  }
  54.24% {
    background-position: -890px -121px;
  }
  55.93% {
    background-position: -979px -121px;
  }
  57.63% {
    background-position: -1068px -121px;
  }
  59.32% {
    background-position: -1157px -121px;
  }
  61.02% {
    background-position: -1246px -121px;
  }
  62.71% {
    background-position: -1335px -121px;
  }
  64.41% {
    background-position: -1424px -121px;
  }
  66.10% {
    background-position: -1513px -121px;
  }
  67.80% {
    background-position: -1602px -121px;
  }
  69.49% {
    background-position: -1691px -121px;
  }
  71.19% {
    background-position: -1780px -121px;
  }
  72.88% {
    background-position: -1869px -121px;
  }
  74.58% {
    background-position: 0px -242px;
  }
  76.27% {
    background-position: -89px -242px;
  }
  77.97% {
    background-position: -178px -242px;
  }
  79.66% {
    background-position: -267px -242px;
  }
  81.36% {
    background-position: -356px -242px;
  }
  83.05% {
    background-position: -445px -242px;
  }
  84.75% {
    background-position: -534px -242px;
  }
  86.44% {
    background-position: -623px -242px;
  }
  88.14% {
    background-position: -712px -242px;
  }
  89.83% {
    background-position: -801px -242px;
  }
  91.53% {
    background-position: -890px -242px;
  }
  93.22% {
    background-position: -979px -242px;
  }
  94.92% {
    background-position: -1068px -242px;
  }
  96.61% {
    background-position: -1157px -242px;
  }
  98.31% {
    background-position: -1246px -242px;
  }
  100.00% {
    background-position: -1335px -242px;
  }
}
@keyframes guitaSittingAnimation {
  0% {
    background-position: 0px 0px;
  }
  1.69% {
    background-position: -89px 0px;
  }
  3.39% {
    background-position: -178px 0px;
  }
  5.08% {
    background-position: -267px 0px;
  }
  6.78% {
    background-position: -356px 0px;
  }
  8.47% {
    background-position: -445px 0px;
  }
  10.17% {
    background-position: -534px 0px;
  }
  11.86% {
    background-position: -623px 0px;
  }
  13.56% {
    background-position: -712px 0px;
  }
  15.25% {
    background-position: -801px 0px;
  }
  16.95% {
    background-position: -890px 0px;
  }
  18.64% {
    background-position: -979px 0px;
  }
  20.34% {
    background-position: -1068px 0px;
  }
  22.03% {
    background-position: -1157px 0px;
  }
  23.73% {
    background-position: -1246px 0px;
  }
  25.42% {
    background-position: -1335px 0px;
  }
  27.12% {
    background-position: -1424px 0px;
  }
  28.81% {
    background-position: -1513px 0px;
  }
  30.51% {
    background-position: -1602px 0px;
  }
  32.20% {
    background-position: -1691px 0px;
  }
  33.90% {
    background-position: -1780px 0px;
  }
  35.59% {
    background-position: -1869px 0px;
  }
  37.29% {
    background-position: 0px -121px;
  }
  38.98% {
    background-position: -89px -121px;
  }
  40.68% {
    background-position: -178px -121px;
  }
  42.37% {
    background-position: -267px -121px;
  }
  44.07% {
    background-position: -356px -121px;
  }
  45.76% {
    background-position: -445px -121px;
  }
  47.46% {
    background-position: -534px -121px;
  }
  49.15% {
    background-position: -623px -121px;
  }
  50.85% {
    background-position: -712px -121px;
  }
  52.54% {
    background-position: -801px -121px;
  }
  54.24% {
    background-position: -890px -121px;
  }
  55.93% {
    background-position: -979px -121px;
  }
  57.63% {
    background-position: -1068px -121px;
  }
  59.32% {
    background-position: -1157px -121px;
  }
  61.02% {
    background-position: -1246px -121px;
  }
  62.71% {
    background-position: -1335px -121px;
  }
  64.41% {
    background-position: -1424px -121px;
  }
  66.10% {
    background-position: -1513px -121px;
  }
  67.80% {
    background-position: -1602px -121px;
  }
  69.49% {
    background-position: -1691px -121px;
  }
  71.19% {
    background-position: -1780px -121px;
  }
  72.88% {
    background-position: -1869px -121px;
  }
  74.58% {
    background-position: 0px -242px;
  }
  76.27% {
    background-position: -89px -242px;
  }
  77.97% {
    background-position: -178px -242px;
  }
  79.66% {
    background-position: -267px -242px;
  }
  81.36% {
    background-position: -356px -242px;
  }
  83.05% {
    background-position: -445px -242px;
  }
  84.75% {
    background-position: -534px -242px;
  }
  86.44% {
    background-position: -623px -242px;
  }
  88.14% {
    background-position: -712px -242px;
  }
  89.83% {
    background-position: -801px -242px;
  }
  91.53% {
    background-position: -890px -242px;
  }
  93.22% {
    background-position: -979px -242px;
  }
  94.92% {
    background-position: -1068px -242px;
  }
  96.61% {
    background-position: -1157px -242px;
  }
  98.31% {
    background-position: -1246px -242px;
  }
  100.00% {
    background-position: -1335px -242px;
  }
}
/* 按钮光圈呼吸 */
@-webkit-keyframes halo {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.818181);
            transform: scale(0.818181);
  }
}
@keyframes halo {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.818181);
            transform: scale(0.818181);
  }
}
/* 卡片翻转 */
@-webkit-keyframes flip {
  0% {
    top: 310px;
    left: 95px;
    width: 61px;
    height: 122px;
    -webkit-transform: rotateZ(-60deg) skewY(35deg);
            transform: rotateZ(-60deg) skewY(35deg);
  }
  30% {
    top: 310px;
    left: 95px;
    width: 61px;
    height: 122px;
    -webkit-transform: rotateZ(-60deg) rotateY(-90deg);
            transform: rotateZ(-60deg) rotateY(-90deg);
  }
  60% {
    top: 310px;
    left: 95px;
    width: 61px;
    height: 122px;
    -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
  }
  100% {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
  }
}
@keyframes flip {
  0% {
    top: 310px;
    left: 95px;
    width: 61px;
    height: 122px;
    -webkit-transform: rotateZ(-60deg) skewY(35deg);
            transform: rotateZ(-60deg) skewY(35deg);
  }
  30% {
    top: 310px;
    left: 95px;
    width: 61px;
    height: 122px;
    -webkit-transform: rotateZ(-60deg) rotateY(-90deg);
            transform: rotateZ(-60deg) rotateY(-90deg);
  }
  60% {
    top: 310px;
    left: 95px;
    width: 61px;
    height: 122px;
    -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
  }
  100% {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
  }
}
</style>
