<template>
   <div class="background">
       <div class="messageBox">
            <h2>{{title}}</h2>
            <p>{{content}}</p>
            <div>
                <div @touchstart="handleCancel">{{cancel}}</div>
                <div @touchstart="handleOk">{{ok}}</div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name: 'MessageBox'
}
</script>

<style scoped>
.background {
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    left: 0;
}
.messageBox {
    width: 200px;
    height: 120px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 3px 3px 3px #ccc;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.messageBox h2 {
    text-align: center;
    line-height: 40px;
    font-size: 18px;
}
.messageBox p {
    text-align: center;
    line-height: 40px;
}
.messageBox>div{
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px #ccc solid;
}
.messageBox>div div {
    flex: 1;
    text-align: center;
    line-height: 30px;
    border-right: 1px solid #ccc;
}
.messageBox>div div:last-child {
    border: none;
}
</style>
