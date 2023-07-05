import axios from "axios"
import jwt from 'jsonwebtoken';

export async function fetchHomePosts(/*stateP*/) {
    const posts = await fetch('http://localhost:8000/api/post',{
        method:'GET',
    })
    const data = await posts.json()
    return data
}


export async function hasUserLiked(postId,userToken){
    let returnLike = undefined 
    const response = await axios.post('http://localhost:8000/api/hasUserLiked',{
        userToken: userToken,
        postId: postId
    }).then(res =>{
        if(res.data.status == "OK"){
            // console.log(`hasUserLiked(${postId}) = `,res.data.hasLiked)
            returnLike = res.data.hasLiked
        }else{
            console.log("ERROR Fetching data")
            return false
        }
    }).catch(err=>{
        console.log(err)
    })
    return returnLike
}

export async function getUserInfo(){
    const userToken = localStorage.getItem('token')
    const userInfo = jwt.decode(userToken)
    return userInfo
}