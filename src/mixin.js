import reload from "@/util/wechatShareForIOS";

export default {
    data() {
        return {
            scrollable: true,
            windowScrollTop: 0,
            isCurrentView: false
        }
    },
    computed: {
        isIosWechat() {
            const ua = navigator.userAgent;
            const wechatUA = ua.toLowerCase().match(/MicroMessenger/i);
            const isIos = ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            const isWechat =
                wechatUA !== null && wechatUA.toString() === "micromessenger";
            return isIos && isWechat && this.$route.query.jxytime === undefined;
        }
    },
    watch: {
        scrollable(val) {
            const el = document.scrollingElement;
            if (val) {
                document.body.style.top = "";
                document.body.classList.remove("m-pop-open");
                el && (el.scrollTop = this.windowScrollTop);
            } else {
                document.body.classList.add("m-pop-open");
                this.windowScrollTop = el ? el.scrollTop : 0;
                document.body.style.top = -this.windowScrollTop + "px";
            }
        }
    },
    methods: {
        goBack(num = -1) {
            const fallIndex = this.isIosWechat ? 2 : 1;
            window.history.length <= fallIndex
                ? this.$router.replace("/")
                : this.$router.back(num);
        },
        reload: reload,
        toRouter(options){
            this.$router.push(options);
        },
        authToRouter(router){
            console.log(11)
            const userInfo = this.$store.state.CURRENTUSER;
            if(userInfo.shop_supplier){
                this.$router.push(router);
            }else{
                this.$message({
                    message: '当前用户未认证',
                    type: 'warning'
                });
            }
        }
    }

}
