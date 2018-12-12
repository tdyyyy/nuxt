<template>
    <div id="home_page">
      <el-container class="">
        <el-header>
          <nav-bar></nav-bar>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <nav-menu></nav-menu>
          </el-aside>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
  import navBar from  '../components/navBar'
  import navMenu from  '../components/navMenu'
  export default {
    name: 'home',
    components: {
      navBar,
      navMenu
    },
    data() {
      return {}
    },
    methods: {

    }
  }
</script>

<style scoped>
#home_page{
  height: 100%;
}
  .el-header {
    padding: 0;
  }
</style>
