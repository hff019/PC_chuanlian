<template>
    <div class="ForgetP">
        <p class="title">修改支付密码</p>
        <form autocomplete="off">
            <div class="inp-box">
                <label>手 机 号</label>
                <input type="tel" placeholder="请输入手机号"  autocomplete="off">
            </div>
            <div class="inp-box">
                <label>验 证 码</label>
                <input type="text" placeholder="请输入验证码"  autocomplete="off">
                <span>发送验证码</span>
            </div>
            <div class="inp-box">
                <label>新 密 码</label>
                <input type="password" placeholder="请输入新密码" autocomplete="off">
            </div>
            <div class="inp-box">
                <label>确认密码</label>
                <input type="password" placeholder="请输入确认密码" autocomplete="off">
            </div>
            <el-button type="primary">确认修改</el-button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "ForgetP"
    }
</script>

<style lang="scss" scoped>
    .ForgetP {
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
            background: #fff;
        }
        span {
            width: 100px;
            height: 54px;
            border-left: 1px solid #e6e6e6;
            text-align: center;
            position: absolute;
            right: 0px;
            top:0px;
            cursor: pointer;
        }
    }
    input:focus { outline: none;background: none }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
        -webkit-text-fill-color: #333;
    }
</style>