<template>
  <div class="HeaderNva">
    <el-row>
      <el-col :span="6" class='logo-container'>
        <span>后台管理系统</span>
      </el-col>
      <el-col :span="6" class="user">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
             <!--<img src="../assets/logoTX.png" class='logo' alt="">-->
            {{userName}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="tuichu">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "HeaderNva",
    data() {
      return {
        userName:'李金'
      }
    },
    methods: {
      tuichu () {
        this.$router.push({
            path: '/'
          }
        )
      }
    }
  }
</script>

<style scoped>
  .HeaderNva {
    width: 100%;
    height: 60px;
    min-width: 600px;
    padding: 0px 0px;
    background: #324057;
    color: #fff;
    border-bottom: 1px solid #1f2d3d;
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }

  .logo-container {
    line-height: 60px;
    min-width: 400px;
    text-indent: 10px;
  }

  .user {
    line-height: 60px;
    text-align: right;
    float: right;
    padding-right: 10px;
  }
  .el-dropdown{
    cursor: pointer;
  }
</style>
