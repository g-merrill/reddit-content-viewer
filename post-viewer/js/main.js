const myRedditJson = {
  data: {
    children: [
    ]
  }
};
const jsonChildren = myRedditJson.data.children
for (let j = 0; j < 25; j++) {
  jsonChildren.push({data:{}});
}

for (let k = 0; k < jsonChildren.length; k++) {
  jsonChildren[k].data.score = Math.floor(Math.random() * 60) + "." + Math.floor(Math.random() * 10) + "k";
  jsonChildren[k].data.title = Math.random().toString(36).substring(2, 9) + " " + Math.random().toString(36).substring(2, 8);
  jsonChildren[k].data.post_hint = Math.floor(Math.random() * 10);
  jsonChildren[k].data.url = Math.random().toString(36).substring(2, 13) + ".com";
  jsonChildren[k].data.subreddit_name_prefixed = "r/" + Math.random().toString(36).substring(2, 10);
  jsonChildren[k].data.author = "Posted by u/" + Math.random().toString(36).substring(2, 7);
  jsonChildren[k].data.created_utc = Math.floor(Math.random() * 24 + 1) + " hours ago";
  jsonChildren[k].data.num_comments = Math.floor(Math.random() * 2000);
}
console.log(jsonChildren);

const userAction3 = function() {
  document.body.setAttribute("style", "font-family:sans-serif");
  // replace i < 1 with: i < jsonChildren.length
  for (let i = 0; i < jsonChildren.length; i++) {
    let postContent = jsonChildren[i].data;
    
    let postWrapper = document.createElement('div');
    postWrapper.style = "height: 90px; border: solid";
    postWrapper.id = "postContainer" + i;
    document.body.appendChild(postWrapper);

    let div0 = document.createElement('div');
    div0.innerHTML = postContent.score;
    div0.style = "display: inline-block; height: 100%; width: 35px; font-size: 12px; position: relative; top: -60px; padding: 0 10px 0; border: solid";
    document.getElementById('postContainer' + i).appendChild(div0);
    
    let postType;
    if (postContent.post_hint > 6) {
      postType = "img";
    } else if (postContent.post_hint > 3) {
      postType = "gif";
    } else {
      postType = "txt";
    }
    let div1 = document.createElement('div');
    div1.innerHTML = postType;
    div1.style = "display: inline-block; height: 90px; width: 35px; font-size: 12px; position: relative; top: -60px; border: solid";
    document.getElementById('postContainer' + i).appendChild(div1);
    
    let div2 = document.createElement('div');
    div2.id = "div2_" + i
    div2.style = "display: inline-block; height: 90px; width: 350px; border: solid";
    document.getElementById('postContainer' + i).appendChild(div2);
    
    let div2a = document.createElement('div');
    div2a.id = "div2a_" + i;
    div2a.style = "padding: 10px; border: solid";
    document.getElementById("div2_" + i).appendChild(div2a);

    
    let div2a1 = document.createElement('div');
    div2a1.innerHTML = postContent.title;
    div2a1.style = "display: inline-block;";
    document.getElementById('div2a_' + i).appendChild(div2a1);
    
    let div2a2 = document.createElement('div');
    div2a2.innerHTML = postContent.url;
    div2a2.style = "display: inline-block; padding: color: blue; font-size: 12px";
    document.getElementById('div2a_' + i).appendChild(div2a2);
    
    let div2b = document.createElement('div');
    div2b.id = "div2b_" + i;
    div2b.style = "padding: 10px; border: solid";
    document.getElementById("div2_" + i).appendChild(div2b);
    
    let div2b1 = document.createElement('div');
    div2b1.innerHTML = postContent.subreddit_name_prefixed;
    div2b1.style = "display: inline-block; font-weight: 900; font-size: 12px";
    document.getElementById('div2b_' + i).appendChild(div2b1);
    
    let div2b2 = document.createElement('div');
    div2b2.innerHTML = postContent.author + " " + postContent.created_utc;
    div2b2.style = "display: inline-block; font-size: 12px; color: gray";
    document.getElementById('div2b_' + i).appendChild(div2b2);
    
    let div3 = document.createElement('div');
    div3.innerHTML = postContent.num_comments;
    div3.style = "display: inline-block; height: 90px; width: 35px; font-size: 12px; position: relative; top: -60px; font-weight: bold; color: gray; border: solid";
    document.getElementById('postContainer' + i).appendChild(div3);
  }
};
userAction3();