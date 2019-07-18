<template>
    <div class="RemeberP">
        <p class="title">修改支付密码</p>
        <form>
            <div class="inp-box">
                <label>旧 密 码</label>
                <input type="password" placeholder="请输入旧密码">
            </div>
            <div class="inp-box">
                <label>新 密 码</label>
                <input type="password" placeholder="请输入新密码">
            </div>
            <div class="inp-box">
                <label>确认密码</label>
                <input type="password" placeholder="请输入确认密码">
            </div>
            <el-button type="primary">确认修改</el-button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "RemeberP"
    }
</script>

<style lang="scss" scoped>
    .RemeberP {
        background: #fff;
        border-radius: 5px;
    }
    .el-button {
        display: block;
        margin: 20px auto;
        width: 405px;
        height: 50px;
    }
    .title {
        padding: 20px 0;
        font-size: 14px;
        border-bottom: 1px solid #e6e6e6;
    }
    .inp-box {
        width: 400px;
        height: 54px;
        margin: 20px auto;
        border: 1px solid #e6e6e6;
        display: flex;
        line-height: 54px;
        padding: 0 10px;
        font-size: 14px;
        position: relative;
        label {
            letter-spacing: 2px;
            width: 80px;
        }
        input {
            border: 0px;
            width: 300px;
        }
    }
    input:focus { outline: none; }
</style>