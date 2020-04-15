import service from "@/utils/request"
/**
 * 用户的个人账号登录
 * @param data 用户名与登陆密码
 */
export function UserLogin(data){
    service.request({
        method: "post",
        url: "/user",
        data:data
 
    }).then(function(res){
        console.log(res)
    })
}
