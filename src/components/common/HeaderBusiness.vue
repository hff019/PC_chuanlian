<template>
    <div>
        <HeaderTop/>
        <div style="background: #fff;">
            <div class="header-middle">
                <div>
                    <router-link to="/home"><img src="../../images/logo.png"></router-link>
                </div>
                <div class="business-logo">
                    <img src="../../images/index/logo.png" width="64" height="64">
                    <p>湖北祥林药业</p>
                </div>
                <div>
                    <form class="form">
                        <svg class="icon">
                            <use xlink:href="#icon-global-home-myMessage"></use>
                        </svg>
                        <input type="text">
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "./HeaderTop"
    export default {
        name: "HeaderBusiness",
        components: {
            HeaderTop
        },
    }
</script>

<style lang="scss" scoped>
    .business-logo {
        width: 40%;
        display: flex;
        font-size: 24px;
        height: 64px;
        p {
            padding-left: 15px;
            line-height: 64px;
        }
    }
    .form {
        width: 330px;
        height: 36px;
        border: 1px solid #e6e6e6;
        border-radius: 36px;
        position: relative;
        display: flex;
        justify-items: center;
        svg {
            width: 24px;
            height: 24px;
            margin: 5px;
        }
        input {
            width: 280px;
            border: 0px;
            &:focus {
                outline: 0;
            }
        }
    }
</style>