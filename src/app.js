import { mapState , mapActions} from 'vuex';

export default {
    name: 'App',
    data:() => ({
        title:'创联云工厂',
    }),
    computed: {
        keepAlive () {
            return this.$route.meta.keepAlive || false
        },
        ...mapState({
            UID: state => state.CURRENTUSER.id,

            status: state => state.EASEMOB.status,
        })
    },
    watch: {
        $route (newRoute){
            let { title } = newRoute.meta || {}

            if(title){
                this.title = title
            }
        },

        title (newTitle){
            if(newTitle){
                document.title = newTitle
            }
        }
    },
    methods: mapActions({
        bootstrapHandle: "BOOTSTRAPPERS"
    }),
    created (){
       
        this.bootstrapHandle();
    },
}