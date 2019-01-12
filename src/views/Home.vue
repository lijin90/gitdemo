<template>
  <div class="Home">
    <el-container>
      <el-header>
        <HeaderNva></HeaderNva>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <leftMenu></leftMenu>
        </el-aside>
        <el-main>
          <div class="rightContainer">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import HeaderNva from "../components/HeaderNva";
  import leftMenu from "../components/leftMenu";

  export default {
    name: "Home",
    data() {
      return {}
    },
    components: {
      HeaderNva,
      leftMenu
    }
  }
</script>

<style scoped>
  .Home {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .el-header{
    padding: 0px 0px;
  }
  .rightContainer {
    /*position: relative;*/
    /*top: 0;*/
    /*left: 180px;*/
    /*width: calc(100% - 180px);*/
    /*height: calc(100% - 71px);*/
    overflow: auto;
  }

</style>
