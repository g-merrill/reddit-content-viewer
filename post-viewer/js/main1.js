// creates random Reddit-style data
// initialize data object structure
const myRedditJson = {
  data: {
    children: [
    ]
  }
};
// assign variable representing individual post
const jsonChildren = myRedditJson.data.children;

// fill each post object key with randomized data
for (let i = 0; i < 25; i++) {
  jsonChildren.push({data:{}});
  let postData = jsonChildren[i].data;
  postData.score = Math.floor(Math.random() * 60000);
  postData.title = Math.random().toString(36).substring(2, 9) + " " + Math.random().toString(36).substring(2, 8);
  postData.post_hint = Math.floor(Math.random() * 10);
  postData.url = Math.random().toString(36).substring(2, 13) + ".com";
  postData.subreddit_name_prefixed = "r/" + Math.random().toString(36).substring(2, 10);
  postData.author = "u/" + Math.random().toString(36).substring(2, 7);
  postData.created_utc = Math.floor(Math.random() * 23 + 2);
  postData.num_comments = Math.floor(Math.random() * 2000);
}
// print data to console
console.log("DATA:", jsonChildren);

// attempt to build page dynamically using js
const buildStructure = () => {
  document.body.setAttribute("style", "font-family:sans-serif");
  for (let j = 1; j <= jsonChildren.length; j++) {
    let postContainer = document.createElement('div');
    postContainer.id = "postContainer_" + j;
    document.body.appendChild(postContainer);

    for (let k = 1; k <= 4; k++) {
      let postSection = document.createElement('div');
      postSection.id = "postSection_" + j + "_" + k;
      document.getElementById("postContainer_" + j).appendChild(postSection);

      if (k===3) {
        for (let l = 1; l <= 2; l++) {
          let subSection = document.createElement('div');
          subSection.id = "subDiv_" + j + "_" + k + "_" + l;
          document.getElementById("postSection_" + j + "_" + k).appendChild(subSection);
        }
      }
    }
  }
};
buildStructure();

// const buildContent = () => {
// };
// buildContent();

const buildStyle = () => {
};
buildStyle();


