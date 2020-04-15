import service from "@/utils/request"
/**
 * 判断用户已经存在
 * @param username 用户名
 */
export function UserIsExist(username){
    console.log(username)
    service.request({
        method: "get",
        url: "/user?username="+username
    }).then(function(res){
        console.log(res)
    })
}

/**
 * 存入用户的数据
 * @param username 用户名
 */
export function Userregister(data,_that){
    service.request({
        method: "post",
        url: "/register",
        data:data
    }).then(function(res){
        if(res.data.isOK){
            alert("注册成功")
            _that.$router.push("/index");
        } else {
            return Promise.reject("注册失败")
        }
    }).catch((err)=>{
        alert(err)
    })
}

