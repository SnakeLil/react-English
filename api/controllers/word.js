import axios from 'axios'

import {wordArr} from '../data.js'
// export const getWord = (req, res) =>{
//     //todo
// console.log(req.query.sign)

//     axios.get('https://fanyi-api.baidu.com/api/trans/vip/translate',{
//         params:{
//           ...req.query
//         }
//       }).then(resp=>{
//         console.log(resp.data)
//         return res.end(JSON.stringify(resp.data))
//     }).catch(err=>{
//         console.log(err)
//         return res.json(err)
//     })
// }
export const getRandomWord = (req, res) =>{
    //todo
        let random = wordArr[Math.ceil(Math.random()*5495)]
        return res.status(200).json(random)
}
