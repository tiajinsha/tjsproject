<template>
    <div>
        <router-link to="/">
        <div class="nav">
            <div>
	            <img class="myimg" src="../assets/img/download.jpg" />
            </div>
            <div>
                <p>啊我到家啊u我的啊我到家啊u我的啊我到家啊u我的啊我到家啊u我的啊我到家啊u我的</p>
                <p>wadadayshdauwd</p>
            </div>
        </div>
        </router-link>
      
    </div>
</template>
<style scoped lang="scss">
    .nav{
        height: 120px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-content: center;
        justify-content: center;
      	align-items: center;
        div:nth-child(1){
            width:180px;

        }
        div:nth-child(2){
            width: 48%;
            height: 100px;
                p:nth-child(1){
        width:100%;
        height:70px;
        padding-left:10px;
       /*  text-indent:20px; */
       overflow: hidden;
       color: black;
       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
       font-size: 15px;
                }
                p:nth-child(2){
                    text-align: center;
                }
        }
    }
    img{
        width:180px;
    }

</style>
