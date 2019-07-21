// insert the following code into your browser console
let myRedditJson;
const userAction1 = async () => {
  const response = await fetch('https://www.reddit.com/.json');
  myRedditJson = await response.json();
  console.log('DATA:', myRedditJson);
  userAction2();
}
userAction1();

// insert the following code into your browser console
const userAction2 = () => {
  const posts = myRedditJson.data.children;
  const currentTime = Math.floor(Date.now() / 1000);
  for (let i = 0; i < posts.length; i++) {
  	let postContent = posts[i].data;
  	console.log("");
  	console.log("Subreddit: " + postContent.subreddit_name_prefixed);
  	console.log("Type: " + postContent.post_hint);
  	console.log("Title: " + postContent.title);
  	console.log("Posted by: " + postContent.author);
  	console.log("Upvote score: " + postContent.score);
  	let postTime = postContent.created_utc;
  	let calculation = (currentTime - postTime) / 3600;
  	let timeSincePost = Math.floor(calculation);
  	console.log("Created: " + timeSincePost + " hours ago");
  	console.log("# of comments: " + postContent.num_comments);
  	console.log("url: " + postContent.url);  	
  }
}