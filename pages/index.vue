<template>
  <section class="container">
    <div class="login">
      <!--<logo/>-->
      <!--<h2 class="title">-->
        <!--登录页-->
      <!--</h2>-->
        <el-form  :model="form" label-width="80px">
          <el-form-item label="用户名：" prop="name" >
            <el-input v-model="form.name" placeholder="NAME"></el-input>
          </el-form-item>
          <el-form-item label="密 码：" prop="password" >
            <el-input type="password" v-model="form.password" placeholder="PASSWORD"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="toHome">登录</el-button>
      <div class="links">
        <!--<a-->
          <!--href="https://nuxtjs.org/"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;green">Documentation</a>-->
        <!--<a-->
          <!--href="https://github.com/nuxt/nuxt.js"-->
          <!--target="_blank"-->
          <!--class="button&#45;&#45;grey">GitHub</a>-->
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from  'axios'
export default {
  transition: 'test',
  //Nuxt.js 允许你扩展默认的布局，或在 layout 目录下创建自定义的布局
  layout: 'login-layout',
  // 组件
  components: {
    Logo
  },
  // Nuxt.js 允许你在 nuxt.config.js 里定义应用所需的所有默认 meta 标签，在 head 字段里配置就可以了
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  // Nuxt.js 扩展了 Vue.js，增加了一个叫 asyncData 的方法，使得我们可以在设置组件的数据之前能异步获取或处理数据。
  // asyncData方法会在组件（限于页面组件）每次加载之前被调用（路由更新之前）
  // 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData方法来获取数据，
  // Nuxt.js 会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件。
  // async asyncData ({ params }) {
  //   let { data } = await axios.get(`https://my-api/posts/${params.id}`)
  //   return { title: data.title }
  // },
  // asyncData ({ params, error }) {
  //   return axios.get(`https://my-api/posts/${params.id}`)
  //     .then((res) => {
  //       return { title: res.data.title }
  //     })
  //     .catch((e) => {
  //       error({ statusCode: 404, message: 'Post not found' })
  //     })
  // },
  asyncData(context){
    console.log(context)
    // context.app.myInjectedFunction('works with context')
  },
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  created () {
  },
  methods: {
    toHome() {
      axios({
        url: 'http://140.143.191.47:3000/login',
        // url: 'http://127.0.0.1:3000/login',
        headers: { 'Content-Type':'application/json '},
        method: 'post',
        data: this.form
      }).then(res => {
        if (res.data.success) {
          this.$message({
            showClose: true,
            message: '登录成功',
            type: 'success'
          });
          this.$router.push('/home/UserList')
        } else {
          console.log(res.data)
          this.$message({
            showClose: true,
            message: res.data.message,
            type: 'error'
          });
        }
      })
    }
  }

}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1c1c1c;
}
.login{
  padding: 20px;
  background: #cccccc;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 2px;
  padding: 20px;
}

</style>
