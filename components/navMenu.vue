<template>
<div class="navMenu">
  <el-aside width="200" style="height: 100%;">
    <el-row class="tac">
      <el-col :span="24">
        <!--  -->
        <el-menu class="el-menu-vertical-demo" router background-color="#05173b" text-color="#fff" active-text-color="#008bfe">
          <el-menu-item index="/home/UserList">
            <span slot="title">用户中心</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</div>
</template>

<script>
export default {
  name: "navMenu",
  data() {
    return {
      menuShow: []
    };
  },
  created() {

  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
.navMenu {
  height: 100%;
}
</style>
