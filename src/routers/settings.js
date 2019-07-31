import LayoutSettings from "@/pages/LayoutSettings"
import MyInfo from "@/pages/Settings/MyInfo";
import AptitudesEdit from "@/pages/Aptitude/AptitudesEdit";
import AptitudesInfo from "@/pages/Aptitude/Aptitudes";
import Address from "@/pages/Address/Address";
import EditAddress from "@/pages/Address/EditAddress";
import PayPassword from "@/pages/Settings/ChangePayPassword";
import ForgetP from "@/pages/Settings/ForgetP";
import RemoberP from "@/pages/Settings/RemoberP";
import ChangeLoginPass from "@/pages/Settings/ChangeLoginPass";


export default [
    {
        path: "/setting",
        component: LayoutSettings,
        meta: {
            title: "设置",
        },
        children:[
            {
                path:'/my-info',
                component: MyInfo,
            },
            {
                path:'/company-info-edit',
                component: AptitudesEdit,
            },
            {
                path:'/company-info-detail',
                component: AptitudesInfo,
            },
            {
                path:'/address',
                component: Address,
            },
            {
                path:'/address-edit/:addressId',
                component: EditAddress,
            },
            {
                path:'/change-pay-password',
                component: PayPassword,
            },
            {
                path:'/forget-pass',
                component: ForgetP,
            },
            {
                path:'/remeber-pass',
                component: RemoberP,
            },
            {
                path:'/change-login-pass',
                component: ChangeLoginPass,
            },
        ]
    },
]