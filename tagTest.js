//Alfresco auto-tagger
//compliments of Zach Bennett, Eagle Productivity Solutions
//two lines of code
//free for anyone to use
//no license, no strings attached

//get tags from parent (folder) node
var tagArray = document.parent.getTags();

//add the tags to the document node
document.addTags(tagArray);