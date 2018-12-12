<template>
<div class="navBar">
  <div class="rightNav">
    <p>{{time}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      time: ''
    }
  },
  props: [
    "getUrl"
  ],
  mounted() {
    setInterval(() => {
      this.time = this.getTimeNow()
    }, 50);
  },
  computed: {

  },
  methods: {
    toWorkspace() {
      this.$router.push('/workspace');
    },
    getTimeNow() {
      var date = new Date();
      var sign1 = "-";
      var sign2 = ":";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hh = date.getHours();
      var mm = date.getMinutes();
      var ss = date.getSeconds();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (day >= 0 && day <= 9) {
        day = "0" + day;
      }
      if (hh >= 0 && hh <= 9) {
        hh = "0" + hh;
      }
      if (mm >= 0 && mm <= 9) {
        mm = "0" + mm;
      }
      if (ss >= 0 && ss <= 9) {
        ss = "0" + ss;
      }

      var currenttime = year + sign1 + month + sign1 + day + " " + hh + sign2 + mm + sign2 + ss;
      return currenttime;
    },
    // 退出登录
    handleCommand(command) {
      if (command === 'a') {
        // this.$router.push('/personal')
      } else if (command === 'c') {
        this.$confirm('是否确定退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          confirmButtonClass: 'fr mr10',
          cancelButtonClass: 'fr',
          type: 'warning'
        }).then(() => {
          if (localStorage.getItem('remember_sta_www_message') === 'true') {
            sessionStorage.clear();
            this.$router.push({
              path: '/'
            })
          } else {
            localStorage.clear();
            sessionStorage.clear();
            this.$router.push({
              path: '/'
            })
          }
          this.$message.success('已退出');
        }).catch(() => {

        });
      }
    },
    goMsgCenter() {
      this.$store.commit('changePage', {
        pageCount: 10,
        page: 1,
        total: 0
      });
      this.$router.push('/messages');
    },
    goFeedbackCenter() {

    }
  }
}
</script>

<style  scoped>
.navBar {
  background: antiquewhite;
  width: 100%;
  height: 100%;
}
.rightNav {
  height: 100%;
  float: right;
}
.rightNav p {
  line-height: 60px;
  padding-right: 20px;
}
</style>
