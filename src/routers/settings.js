import LayoutSettings from "@/pages/LayoutSettings"
import MyInfo from "@/pages/Settings/MyInfo";
import Company from "@/pages/Company";
import NotAptitudes from "@/pages/Aptitude/NotAptitudes";
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
                path:'/company-info',
                component: Company,
            },
            {
                path:'/not-company',
                component: NotAptitudes,
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