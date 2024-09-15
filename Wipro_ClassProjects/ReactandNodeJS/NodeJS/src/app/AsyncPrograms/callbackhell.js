//function to get user details

function getUserDetails(userid,callback){
    setTimeout(()=>{
        console.log("User details fetched:");
        callback({userid:userid,name:'John',email:'john@test.com'});
    },1000)
}

//function to get user posts
function getPosts(userid,callback){
    setTimeout(()=>{
        console.log("Posts fetched for user: ",userid);
        callback([{postid:1,content:'Post Content 1'},{postid:2,content:'Post Content 2'},{postid:3,content:'Post Content 3'}]);
    },1000);
}

//function to get user comments
function getComments(postid,callback){
    setTimeout(()=>{
        console.log("Comments fetched for post: ",postid);
        callback([{commentid:1,content:'Nice Post'},{commentid:2,content:'Good'},{commentid:3,content:'Great'}]);
    })
}

getUserDetails(1,(user)=>{
    getPosts(user.userid,(posts)=>{
        getComments(posts[0].postid,(comments)=>{
            console.log('User: ',user);
            console.log('Posts: ',posts);
            console.log('Comments: ',comments);
        })
    })
})