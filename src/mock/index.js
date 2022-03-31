import {sign,verfiy} from "jsonwebtoken"
const secret='secret'
export default[
    {
        url: '/api/get',
        method:'get',
        response:req=>{
            const token=req.headers['authorization'].split(' ')[1]
            try{
                let decoded=verfiy(token,secret)
                if(decoded.user==='lyl'){
                    return{
                        code:20000,
                        data:decoded.user
                    }
                }
                throw new Error('Invalid token')
            }
            catch(err){
                return {
                    code:401,
                    data:"Invalid token"
                }
            }
        }
    },
    {
    url: '/api/login',
    type: 'post',
    timeout:2000,
    response: config => {
        const body = config.body
        const {userName,password}=body
        // mock error
        if (userName!=='lyl'||password!=='123456') {
            return {
                code: 60204,
                message: '账户或密码输入不正确'
            }
        }
        const token=sign({userName:body.userName},secret,{
            expiresIn:60
        })
        return {
            code: 20000,
            data: token
        }
    }
},{
    url:"/api/text",
    method:'post',
    rawResponse:async(req,res)=>{
        let reqBody=''
        await new Promise(resolve => {
            req.on('data',chunk=>{
                reqBody+=chunk
            })
            req.on('end',()=>resolve(undefined))
        })
        res.setHeader('Content-Type','text/plain')
        res.statusCode=200
        res.end(`hello,${reqBody}`)
    }
    }]