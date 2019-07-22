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
  postData.post_hint = Math.floor(Math.random() * 10);
  postData.title = Math.random().toString(36).substring(2, 9) + " " + Math.random().toString(36).substring(2, 8);
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
  for (let i = 1; i <= jsonChildren.length; i++) {
    let postContainer = document.createElement('div');
    postContainer.id = "postContainer_" + i;
    document.body.appendChild(postContainer);

    for (let j = 1; j <= 4; j++) {
      let postSection = document.createElement('div');
      postSection.id = "postSection_" + i + "_" + j;
      document.getElementById("postContainer_" + i).appendChild(postSection);

      if (j===3) {
        for (let k = 1; k <= 2; k++) {
          let subSection = document.createElement('div');
          subSection.id = "subDiv_" + i + "_" + j + "_" + k;
          document.getElementById("postSection_" + i + "_" + j).appendChild(subSection);
        }
      }
    }
  }
};
buildStructure();

const buildContent = () => {
  for (let i = 1; i <= jsonChildren.length; i++) {
    let data = jsonChildren[i - 1].data;

    let scoreDiv = document.getElementById("postSection_" + i + "_" + 1);
    let scoreSpan = document.createElement('span');
    scoreSpan.innerHTML = data.score;
    scoreSpan.id = "upvotes_" + i;
    scoreDiv.appendChild(scoreSpan);

    let typeDiv = document.getElementById("postSection_" + i + "_" + 2);
    let typeSpan = document.createElement('span');
    typeSpan.innerHTML = data.post_hint;
    typeSpan.id = "type_" + i;
    typeDiv.appendChild(typeSpan);

    let topSubDiv = document.getElementById("subDiv_" + i + "_" + 3 + "_" + 1);
    let topSpan = document.createElement('span');
    topSubDiv.appendChild(topSpan);

    let titleSpan = document.createElement('span');
    titleSpan.innerHTML = data.title;
    titleSpan.id = "title_" + i;
    topSpan.appendChild(titleSpan);

    let linkSpan = document.createElement('span');
    linkSpan.innerHTML = data.url;
    linkSpan.id = "link_" + i;
    topSpan.appendChild(linkSpan);

    let bottomSubDiv = document.getElementById("subDiv_" + i + "_" + 3 + "_" + 2);
    let bottomSpan = document.createElement('span');
    bottomSubDiv.appendChild(bottomSpan);

    let subredditSpan = document.createElement('span');
    subredditSpan.innerHTML = data.subreddit_name_prefixed;
    subredditSpan.id = "subreddit_" + i;
    bottomSpan.appendChild(subredditSpan);

    let authorSpan = document.createElement('span');
    authorSpan.innerHTML = data.author;
    authorSpan.id = "author_" + i;
    bottomSpan.appendChild(authorSpan);

    let createdSpan = document.createElement('span');
    createdSpan.innerHTML = data.created_utc;
    createdSpan.id = "created_" + i;
    bottomSpan.appendChild(createdSpan);

    let commentsDiv = document.getElementById("postSection_" + i + "_" + 4);
    let commentsSpan = document.createElement('span');
    commentsSpan.innerHTML = data.num_comments;
    commentsSpan.id = "comments_" + i;
    commentsDiv.appendChild(commentsSpan);
  }
};
buildContent();

const buildStyle = () => {
  for (let i = 1; i <= jsonChildren.length; i++) {
    let container = document.getElementById("postContainer_" + i).style;
    container.display = "flex";
    // container["justify-content"] = "space-evenly";
    container["align-items"] = "flex-start";
    // comment these out for actual build out
    container.border = "solid";

    for (let j = 1; j <= 4; j++) {
      let upvotesDiv = document.getElementById("postSection_" + i + "_" + 1).style;
      upvotesDiv.width = "90px";
      upvotesDiv.height = "24px";
      upvotesDiv.display = "flex";
      upvotesDiv["justify-content"] = "center";
      upvotesDiv["align-items"] = "center";

      let typeDiv = document.getElementById("postSection_" + i + "_" + 2).style;
      typeDiv.width = "40px";
      typeDiv.height = "24px";
      typeDiv.display = "flex";
      typeDiv["justify-content"] = "center";
      typeDiv["align-items"] = "center";

      let mainContentDiv = document.getElementById("postSection_" + i + "_" + 3).style;
      mainContentDiv.display = "flex";
      mainContentDiv["flex-flow"] = "column";

      let commentsDiv = document.getElementById("postSection_" + i + "_" + 4).style;
      commentsDiv.width = "70px";
      commentsDiv.height = "24px";
      commentsDiv.display = "flex";
      commentsDiv["justify-content"] = "center";
      commentsDiv["align-items"] = "center";
      commentsDiv["margin-left"] = "auto";
    }
  };
};
buildStyle();

const styleContent = () => {
  let body = document.getElementsByTagName("body")[0].style;
  body["font-family"] = "sans-serif";
  body["font-size"] = "14px";

  for (let i = 1; i <= jsonChildren.length; i++) {
    let upvotes = document.getElementById("upvotes_" + i).style;
    upvotes["font-weight"] = 600;

    let type = document.getElementById("type_" + i).style;
    type.color = "rgb(135, 138, 140)";

    let title = document.getElementById("title_" + i).style;
    title["font-size"] = "14px";
    title.padding = "5px";

    let link = document.getElementById("link_" + i).style;
    link.color = "#0079d3";

    let subreddit = document.getElementById("subreddit_" + i).style;    
    subreddit["font-weight"] = 800;
    subreddit.padding = "5px";

    let author = document.getElementById("author_" + i).style;
    author.color = "#787c7e";

    let created = document.getElementById("created_" + i).style;
    created.color = "#787c7e";
    created.padding = "5px";

    let comments = document.getElementById("comments_" + i).style;
    comments["font-weight"] = 600;
    comments.color = "#878a8c";
  }
};
styleContent();

