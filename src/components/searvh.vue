<template>
<div>   <h1 v-show="this.$store.state.login==1">wellcome {{this.unames}}</h1>
        <div class="login_container" v-show="this.$store.state.login==0">
            <mt-field label="用户名" :placeholder="unameholder" v-model="uname"></mt-field>
            <mt-field label="密码" type="password" :placeholder="upwdholder" v-model="upwd"></mt-field>
            <mt-button size="large" type="primary" @click="login">登录</mt-button>
        </div>   
</div>
</template>
<script>
export default {
    data(){
        return {
                uname:"tom",
                upwd:"123",
                unameholder:"请输入用户名",
                upwdholder:"请输入密码",
                unames:""
        }   
    },methods:{
        dx(){
            console.log(this.unames)
        },
        login(){
            /* 获得用户名密码 */
           var uname=this.uname;
           var upwd=this.upwd;
            /* 创建一个震泽表达式 */
            var reg=/^\w{3,11}$/i
            var i=reg.test(uname);
            var u=reg.test(upwd);
            if(i!=true||u!=true){  
                this.$toast("用户名或者密码不正确"); 
                return; 
            }
            else{

            }    
                /* 字母数字下划线3到12位 */

                /* 验证用户密码 */
                /* 发送ajax请求 */
                var url="login";
                var obj={uname,upwd};
                this.axios.get(url,{params:obj}).then(result=>{
                if(result.data.code==1){
                    this.unames=result.config.params.uname
                    console.log(this.unames)
                    console.log(result.config.params.uname)
                   /*  location.href="http://127.0.0.1:8080/#/cart" */
                   this.$messagebox("提示","成功")
                 /*   this.$router.push("/") */
                    this.$store.commit("increment")
                     console.log(this.$store.state.login)

                }else{
                   this.$messagebox("提示","用户名或者密码有误")
                }
            })
        }
    },
    created(){
        
    }
}
</script>
<style>
.login_container{
    padding-top:40px;
    background-color:white;

}
.my_button{
    border:1px solid red !important;
}
</style>
