<template>
    <div>
        <HeaderTop/>
        <div style="background: #fff;border-bottom:2px solid #2da2ff;">
            <div class="header-middle width-container" style="justify-content: space-between">
                <div>
                    <img src="../../images/logo.png">
                </div>
                <div class="header-middle-form">
                    <form>
                        <input type="search" placeholder="请输入要搜索的关键字">
                        <button type="submit">搜索</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "./HeaderTop"
    export default {
        name: "Header3",
        components:{
            HeaderTop
        }
    }
</script>

<style lang="scss" scoped>
    .el-menu--popup {
        padding: 0px;
    }
    .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
        background-color: #712933;
        color: #fff;
        opacity: .9;
    }
    .nav-list {
        padding: 20px;
        width: 900px;
        height: 500px;
        top:0px;
        position: absolute;
        background: #fff;
        ul {
            li {
                list-style: none;
            }
        }
    }
    .shopcar {
        small {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            background: #2da2ff;
            color: #fff;
            font-size: 10px;
            display: inline-block;
            text-align: center;
            line-height: 20px;
            transform: scale(.8);
            top: -6px;
            position: relative;
            left: -2px;
        }
    }
</style>