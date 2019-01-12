<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu
        :default-active="$route.path"
        mode="vertical"
        background-color="#324057"
        text-color="#fff"
        active-text-color="#409eff"
        class="el-menu-vertical-demo">
        <template v-for="(item,index) in items" >
          <el-submenu v-if="item.children" :index="item.path" :key="item.path" style="text-align: left">
            <template slot="title">
              <i :class="'fa fa-margin '+item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <router-link v-for="(citem,cindex) in item.children"
                         :to="citem.path" :key="cindex">
              <el-menu-item
                :index="citem.path">
                <span slot="title">{{citem.name}}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    name: "leftMenu",
    data() {
      return {
        items: [
          {
            icon: "el-icon-message",
            name: "资金管理",
            path: "fund",
            children: [{ path: "foundlist", name: "资金流水",Index:0 }]
          },
          {
            icon: "el-icon-date",
            name: "信息管理",
            path: "info",
            children: [{ path: "infoshow", name: "个人信息",Index:1 }]
          }
        ]
      };
    },
    created(){
      console.log(this.$route.path)
    },
  };
</script>
<style scoped>
  .menu_page {
    position: fixed;
    /*top: 71px;*/
    /*left: 0;*/
    min-height: 100%;
    background-color: #324057;
    z-index: 99;
  }
  .el-menu {
    border: none;
    height: 100%;
  }
  .fa-margin {
    margin-right: 5px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /*height: 100%;*/
    min-height: 100%;
  }
  .el-menu-vertical-demo {
    width: 35px;
  }
  .el-submenu .el-menu-item {
    min-width: 180px;
  }
  .hiddenDropdown,
  .hiddenDropname {
    display: none;
  }
  a {
    text-decoration: none;
  }
</style>
