export async function fetchHomePosts(stateP) {
    const posts = await fetch('http://localhost:8000/api/post',{
        method:'GET',

    })
    // console.log(response)
    const data = await posts.json()
    stateP(data)
}
