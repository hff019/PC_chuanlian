<template>
    <div style="padding-top: 20px" v-loading="loading">
        <div v-if="suppliers.length>0">
            <div class="width-container">
                <div>
                    <FactoryClxd v-for="(item,index) in suppliers" :data="item"
                                 :key="`factory_${index}`" style="display: inline-block"></FactoryClxd>
                </div>
            </div>
            <div class="width-container" style="text-align: center;padding: 40px 0 20px ">
                <el-pagination
                        layout="prev, pager, next"
                        :page-size="pagesize"
                        @current-change="current_change"
                        :current-page.sync="currentPage"
                        :pager-count="5"
                        :total="20">
                </el-pagination>
            </div>
        </div>
        <Empty v-else/>
    </div>
</template>

<script>
    import FactoryClxd from "@/components/modules/FactoryCart"
    import {adList} from "@/api/ad";
    import {mapState} from "vuex";
    import {findNearBySuppliers} from '@/api/supplier.js';
    import Empty from '@/components/Empty'

    export default {
        name: "Factory",
        components: {
            FactoryClxd,
            Empty
        },
        data() {
            return {
                suppliers: {},
                loading: true,
                currentPage: 1,
                pagesize:20
            }
        },
        created() {
            var params = {
                page: this.currentPage,
                type: 'factory',
                limit: this.pagesize
            }
            this.initData(params)
        },
        methods: {
            async initData(params) {
                const {data} = await adList({channel: 'app', space: 'home-business'})
                this.swipers = data
                findNearBySuppliers(params)
                .then(({data = []}) => {
                    this.loading = false
                    this.suppliers = data.items
                })
            },
            current_change(currentPage){  //改变当前页
                this.currentPage = currentPage
                var params = {
                    page: this.currentPage,
                    type: 'factory',
                    limit: this.pagesize
                }
                this.initData(params)
            }
        }
    }
</script>

<style scoped>

</style>