<template>
    <div class="MyInfo">
        <p class="title">基本信息</p>
        <div class="info">
            <div class="left">
                <ul>
                    <li>
                        <span>实名认证：</span>
                        <small>张无忌</small>
                    </li>
                    <li>
                        <span>身份证号：</span>
                        <small>410882********8521</small>
                    </li>
                    <li>
                        <span>手机号：</span>
                        <small>15525896587</small>
                        <router-link to=""> 修改 </router-link>
                        <small> 手机号每月只能修改一次</small>
                    </li>
                    <li>
                        <span>邮箱号：</span>
                        <small>空</small>
                        <router-link to=""> 添加 </router-link>
                        <small>还没有绑定邮箱号，点击添加绑定邮箱</small>
                    </li>
                </ul>
            </div>
            <div class="right">
                <img src="../../images/default.png">
            </div>
        </div>
        <p class="title">修改头像</p>
        <div class="change-logo">
            <div class="left">
                <img src="../../images/default.png" width="150" height="150">
                <input type="file">
                <p>点击头像更换照片</p>
            </div>
            <div class="right">
                <button type="submit">提交修改</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyInfo"
    }
</script>

<style lang="scss" scoped>
    .MyInfo {
        background: #fff;
        border-radius: 4px;
        margin-left: 20px;
    }
    .title {
        padding: 20px 0;
        font-size: 14px;
        border-bottom: 1px solid #e6e6e6;
    }
    .info {
        display: flex;
        padding: 20px 40px;
        justify-content: space-between;
        .left {
            width: 70%;
            ul {
                li {
                    color: #666;
                    list-style: none;
                    margin-bottom: 35px;
                    font-size: 12px;
                    span {
                        display: inline-block;
                        width: 70px;
                        text-align: right;
                    }
                    a {
                        color: #2da2ff;
                        padding: 0 10px;
                    }
                }
            }
        }
        .right {
            width: 180px;
            height: 180px;
            background: #2da2ff;
            border-radius: 5px;
            text-align: center;
            img {
                width: 140px;
                height: 140px;
                border:5px solid #96d1ff;
                border-radius: 4px;
                margin-top: 15px;
            }
        }
    }
    .change-logo {
        display: flex;
        padding-top: 20px;
        .left {
            background: #f1f1f1;
            width: 470px;
            height: 235px;
            border:1px solid #e6e6e6;
            text-align: center;
            position: relative;
            img {
                margin-top: 30px;
            }
            input {
                position: absolute;
                width: 150px;
                height: 150px;
                opacity: 0;
                top: 30px;
                left: 50%;
                margin-left: -75px;
                z-index: 9;
                cursor: pointer;
            }
            p {
                line-height: 2;
                color: #666;
            }
        }
       .right {
            button {
                width: 100px;
                height: 32px;
                background: #2da2ff;
                color: #fff;
                font-size: 14px;
                border: 0px;
                margin-left: 20px;
                margin-top: 200px;
            }
       }
    }
</style>