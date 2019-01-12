<template>
  <div id="bgtp">
    <section class="form_container">
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px"
               class="demo-ruleForm login-container">
        <h3 class="title">用户登录</h3>
        <p class="status">请输入用户名与密码</p>
        <el-form-item prop="account">
          <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号">
          </el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button type="primary" style="width:100%;background: #119988" @click="login('ruleForm2')">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </section>

  </div>
</template>

<script>
    export default {
        name: "Login",
      data() {
        return {
          logining: false,
          ruleForm2: {
            account: '',
            checkPass: ''
          },
          rules2: {
            account: [
              {required: true, message: '请输入账号', trigger: 'blur'},
            ],
            checkPass: [
              {required: true, message: '请输入密码', trigger: 'blur'},
            ]
          },
          checked: true
        };
      },
      methods: {
        login(ev) {
          var that = this;
          that.$refs.ruleForm2.validate((valid) => {
            if (valid) {
              this.$message({
                message: '恭喜你，登陆成功！',
                type: 'success'
              });
              that.$router.push({
                path: '/infoshow',
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          })
        },
      },
      created() {
      },
    }
</script>

<style scoped>
  .form_container {
    width: 370px;
    height: 210px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto auto;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
  }

</style>
