//function for user details
function getUser(userid){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('User data fetched:');
            resolve({userid:userid,name:'John',email:'john@test.com'});
        },1000);
    });
}

//function for user posts
function getPosts(userid){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Posts fetched for user: ",userid);
            resolve([{postid:1,content:'Post Content 1'},{postid:2,content:'Post Content 2'},{postid:3,content:'Post Content 3'}]);
        },1000);
    });
}

//function for comments
function getComments(postid){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Comments fetched for post: ",postid);
            resolve([{commentid:1,content:'Nice Post'},{commentid:2,content:'Good'},{commentid:3,content:'Great'}]);
        },1000);
    });
}

async function fetchData(){
    const user=await getUser(1);
    const posts=await getPosts(user.userid);
    const comments=await getComments(posts[0].postid);

    console.log("User: ",user);
    console.log("Posts: ",posts);
    console.log("Comments: ",comments);
}
fetchData();