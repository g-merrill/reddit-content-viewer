// insert the following code into your browser console

const userAction = async () => {
  const response = await fetch('https://www.reddit.com/.json');
  myRedditJson = await response.json();
  console.log('DATA:', myRedditJson)
}
userAction();