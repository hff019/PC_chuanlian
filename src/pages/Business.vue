<template>
    <div style="padding-top: 20px;min-height: 600px">
        <div class="width-container">
            <div>
                <BusinessClxd></BusinessClxd>
            </div>
        </div>
        <ul class="area-list">
            <li v-for="(item,index) in area">
                <router-link to="">{{item.name}}</router-link>
            </li>
            <el-popover
                    placement="right-start"
                    width="452"
                    trigger="hover"
            >
                <div>
                    <span v-for="(item,index) in areaMore" class="more-area">{{item.name}}</span>
                </div>
                <el-button slot="reference" class="more-btn">
                    <span>更多</span>
                </el-button>
            </el-popover>
        </ul>
    </div>
</template>

<script>
    import BusinessClxd from "@/components/modules/BusinessCart"
    import regionAddress from "@/plugins/json/pca-code.json"


    export default {
        name: "Business",
        components: {
            BusinessClxd,
        },
        data() {
            return {
                areaAddress: regionAddress,
                area: [],
                areaMore: [],
                loading: true,
                currentPage: 1,
                pagesize:20
            }
        },
        methods:{
            async initData(params) {

            }
        },
        created() {
            this.area = this.areaAddress.splice(0, 11)
            this.areaMore = this.areaAddress.splice(11, this.areaAddress.length)
            var params = {
                page: this.currentPage,
                type: 'business',
                limit: this.pagesize
            }
            this.initData(params)
        },

    }
</script>

<style lang="scss" scoped>
    .more-btn {
        border: 0px;
        background: none;
        color: #fff;
        padding-top: 5px;
        padding: 10px 0px;
        width: 110px;
        text-align: center;
        span {
            color: #333;
            font-size: 16px;
        }
    }

    .area-list {
        background: #fff;
        position: fixed;
        width: 110px;
        height: 490px;
        border-radius: 4px;
        top: 23.5%;
        left: 40px;
        overflow: hidden;
        z-index: 99;

        a {
            color: #333;
            display: block;
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;

            &:hover {
                background: #26a2ff;
                color: #fff;
            }
        }

    }

    .more-area {
        font-size: 16px;
        color: #333;
        display: inline-block;
        width: 80px;
        padding-left: 20px;
        float: left;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>