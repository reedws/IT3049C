"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8420],{3203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var o=a(7462),n=(a(7294),a(3905)),l=a(7814),i=a(5488),r=a(5162);const s={title:"Git - Hello World",sidebar_position:1},c=void 0,u={unversionedId:"labs/hello-world/index",id:"labs/hello-world/index",title:"Git - Hello World",description:"This lab is compiled from multiple GitHub guides and tutorials to suit the needs of our class.",source:"@site/content/coursework/labs/1.hello-world/index.mdx",sourceDirName:"labs/1.hello-world",slug:"/labs/hello-world/",permalink:"/IT3049C/coursework/labs/hello-world/",draft:!1,editUrl:"https://github.com/IT4063C/IT4063C.github.io/tree/main/content/coursework/labs/1.hello-world/index.mdx",tags:[],version:"current",lastUpdatedBy:"Wes Reed",lastUpdatedAt:1687113708,formattedLastUpdatedAt:"Jun 18, 2023",sidebarPosition:1,frontMatter:{title:"Git - Hello World",sidebar_position:1},sidebar:"coursework",previous:{title:"\ud83e\uddea Labs",permalink:"/IT3049C/coursework/labs"},next:{title:"Overview",permalink:"/IT3049C/coursework/labs/js-and-dom-exercises/"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a repository",id:"creating-a-repository",level:2},{value:"Clone down the repository",id:"clone-down-the-repository",level:2},{value:"Branching",id:"branching",level:2},{value:"Create a branch",id:"create-a-branch",level:3},{value:"Making and committing changes",id:"making-and-committing-changes",level:2},{value:"Opening a pull request",id:"opening-a-pull-request",level:2},{value:"Merging your pull request",id:"merging-your-pull-request",level:2},{value:"Wrap up",id:"wrap-up",level:2},{value:"Checklist",id:"checklist",level:3},{value:"What to submit on Canvas",id:"what-to-submit-on-canvas",level:3},{value:"Feedback form",id:"feedback-form",level:3}],m={toc:p};function k(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This lab is compiled from multiple GitHub guides and tutorials to suit the needs of our class.")),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere."),(0,n.kt)("p",null,"This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests. You'll create your own Hello World repository and learn GitHub's pull request workflow, a popular way to create and review code."),(0,n.kt)("p",null,"In this tutorial, you will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create and use a repository",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note: For most assignment, we'll be using GitHub classroom which will create the repository for you."))),(0,n.kt)("li",{parentName:"ul"},"Start and manage a new branch"),(0,n.kt)("li",{parentName:"ul"},"Make changes to a file and push them to GitHub as commits"),(0,n.kt)("li",{parentName:"ul"},"Open and merge a pull request")),(0,n.kt)("p",null,"In this tutorial we will be editing text/markdown files. You may use GitHub Desktop, Command Line Interface (CLI), or Visual Studio Code."),(0,n.kt)("h2",{id:"creating-a-repository"},"Creating a repository"),(0,n.kt)("p",null,"A repository is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets -- anything your project needs. Often, repositories include a ",(0,n.kt)("inlineCode",{parentName:"p"},"README")," file, a file with information about your project. GitHub makes it easy to add one at the same time you create your new repository. It also offers other common options such as a license file (we don't need to worry about those for now)."),(0,n.kt)("p",null,"Your ",(0,n.kt)("inlineCode",{parentName:"p"},"hello-world")," repository can be a place where you store ideas, resources, or even share and discuss things with others."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper-right corner of any page, use the ",(0,n.kt)(l.Z,{mdxType:"Icon"},"add")," drop-down menu, and select ",(0,n.kt)("strong",{parentName:"p"},"New repository"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Drop-down with option to create a new repository",src:a(1893).Z,width:"192",height:"201"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Repository name")," box, enter ",(0,n.kt)("inlineCode",{parentName:"p"},"hello-world"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Description")," box, write a short description.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Add a README file"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create repository"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Create a hello world repository",src:a(6186).Z,width:"1494",height:"1286"})))),(0,n.kt)("h2",{id:"clone-down-the-repository"},"Clone down the repository"),(0,n.kt)("p",null,"Now that you have a ",(0,n.kt)("em",{parentName:"p"},"remote")," repository, we need to clone the repository to create a local repository/instance on your computer.\nYou can either use GitHub Desktop, Command Line, or Visual Studio Code directly."),(0,n.kt)(i.Z,{groupId:"method",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"git-desktop",label:"GitHub Desktop",default:!0,mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"In the File menu, click Clone Repository. ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"clone using GitHub Desktop on Mac",src:a(61).Z})),(0,n.kt)("li",null,"Click the tab that corresponds to the location of the repository you want to clone. You can also click URL to manually enter the repository location. ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"choose-repository-location",src:a(7754).Z})),(0,n.kt)("li",null,"Choose the repository you want to clone from the list. ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"clone-a-repository-list",src:a(2016).Z})),(0,n.kt)("li",null,"Click ",(0,n.kt)("strong",null,"Choose...")," and navigate to a local path where you want to clone the repository. ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"clone-choose-button-mac",src:a(7251).Z})),(0,n.kt)("li",null,"Click ",(0,n.kt)("strong",null,"Clone"),"."))),(0,n.kt)(r.Z,{value:"cli",label:"Command Line",mdxType:"TabItem"},"This is covered in this video - until I type up the instructions. (The video will start at the correct time.)",(0,n.kt)("br",null),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/tCYSYvLHiLE?start=124",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)(r.Z,{value:"vscode",label:"VS Code",mdxType:"TabItem"},"This is covered in this video - until I type up the instructions. (The video will start at the correct time.)",(0,n.kt)("br",null),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/tCYSYvLHiLE?start=303",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,n.kt)("h2",{id:"branching"},"Branching"),(0,n.kt)("p",null,"Branching lets you have different versions of a repository at one time."),(0,n.kt)("p",null,"By default, your repository has one branch named ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," that is considered to be the definitive branch. You can use branches to experiment and make edits before committing them to ",(0,n.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,n.kt)("p",null,"When you create a branch off the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch, you're making a copy, or snapshot, of ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," as it was at that point in time. If someone else made changes to the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch while you were working on your branch, you could pull in those updates."),(0,n.kt)("p",null,"This diagram shows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"main")," branch"),(0,n.kt)("li",{parentName:"ul"},"A new branch called ",(0,n.kt)("inlineCode",{parentName:"li"},"feature")),(0,n.kt)("li",{parentName:"ul"},"The journey that ",(0,n.kt)("inlineCode",{parentName:"li"},"feature")," takes before it's merged into ",(0,n.kt)("inlineCode",{parentName:"li"},"main"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"branching diagram",src:a(3089).Z,width:"2098",height:"528"})),(0,n.kt)("p",null,"Have you ever saved different versions of a file? Something like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"story.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"story-joe-edit.txt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"story-joe-edit-reviewed.txt"))),(0,n.kt)("p",null,"Branches accomplish similar goals in GitHub repositories."),(0,n.kt)("p",null,"Developers use branches for keeping bug fixes and feature work separate from our ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," (production) branch. When a change is ready, they merge their branch into ",(0,n.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,n.kt)("h3",{id:"create-a-branch"},"Create a branch"),(0,n.kt)(i.Z,{groupId:"method",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"git-desktop",label:"GitHub Desktop",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"At the top of the app, click  Current Branch and then in the list of branches, click the branch that you want to base your new branch on. ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"Drop-down menu to switch your current branch",src:a(1780).Z})),(0,n.kt)("li",null,"Click ",(0,n.kt)("strong",null,"New Branch.")," ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"New Branch option in the Branch menu",src:a(6158).Z})),(0,n.kt)("li",null,"Under ",(0,n.kt)("strong",null,"Name"),", type the name of the new branch. ",(0,n.kt)("strong",null,"Name the branch ",(0,n.kt)("code",null,"readme-edits"))," ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"Field for creating a name for the new branch",src:a(2634).Z})),(0,n.kt)("li",null,"Use the drop-down to choose a base branch for your new branch. ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"Base branch options",src:a(5243).Z})),(0,n.kt)("li",null,"Click ",(0,n.kt)("strong",null,"Create Branch.")," ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"Create Branch button",src:a(5246).Z})))),(0,n.kt)(r.Z,{value:"cli",label:"Command Line",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"in the command line terminal, navigate to the repository directory. For example, if the my directory is ",(0,n.kt)("code",null,"/Users/joe/hello-world"),", then type to ",(0,n.kt)("code",null,"cd /Users/joe/hello-world"),"."),(0,n.kt)("li",null,"type ",(0,n.kt)("code",null,"git branch")," to see a list of branches."),(0,n.kt)("li",null,"type ",(0,n.kt)("code",null,"git branch readme-edits")," to create a new branch called ",(0,n.kt)("code",null,"readme-edits"),"."),(0,n.kt)("li",null,"type ",(0,n.kt)("code",null,"git checkout readme-edits")," to switch to the new branch.",(0,n.kt)("ul",null,(0,n.kt)("li",null,"You could combine the last 2 commands into a single one by typing ",(0,n.kt)("code",null,"git checkout -b readme-edits"),"."))),(0,n.kt)("li",null,"type ",(0,n.kt)("code",null,"git checkout main")," to switch back to the main branch."))),(0,n.kt)(r.Z,{value:"vscode",label:"Visual Studio Code",mdxType:"TabItem"},(0,n.kt)("p",null,"You can create and checkout branches directly within VS code through the ",(0,n.kt)("strong",null,"Git: Create Branch")," command in the Command Palette (\u21e7\u2318P)."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",null,"Git: Create Branch")," command lets you quickly create a new branch. Just provide the name of your new branch and VS Code will create the branch and switch to it."),(0,n.kt)("img",{alt:"vscode-branch",src:a(7446).Z})),(0,n.kt)(r.Z,{value:"browser",label:"GitHub on Browser",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Click the ",(0,n.kt)("strong",null,"code")," tab of your ",(0,n.kt)("code",null,"hello-world")," repository."),(0,n.kt)("li",null,"Click the drop down at the top of the file list that says **main**.",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"Branch menu",src:a(4213).Z})),(0,n.kt)("li",null,"Type a branch name, ",(0,n.kt)("code",null,"readme-edits"),", into the text box."),(0,n.kt)("li",null,"Click ",(0,n.kt)("strong",null,"Create branch: readme-edits from main"),".",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"Branch menu",src:a(4700).Z}))))),(0,n.kt)("p",null,"Now you have two branches, ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"readme-edits"),". Right now, they look exactly the same. Next you'll add changes to the new branch."),(0,n.kt)("h2",{id:"making-and-committing-changes"},"Making and committing changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure you've navigated to the correct branch (readme edits).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can make and save changes to the files in your repository. In Git, saved changes are called commits. Each commit has an associated commit message, which is a description explaining why a particular change was made. Commit messages capture the history of your changes so that other contributors can understand what you've done and why."))),(0,n.kt)(i.Z,{groupId:"method",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"",label:"GitHub Desktop",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"After you make your edits to the readme.md file locally in your favorite text editor, go to your command line terminal"),(0,n.kt)("li",null,"At the bottom of the list of changes, in the Summary field, type a short, meaningful commit message. Optionally, you can add more information about the change in the Description field. ",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"Commit menu",src:a(2722).Z})),(0,n.kt)("li",null,"Under the Description field, click ",(0,n.kt)("strong",null,"Commit to ",(0,n.kt)("i",null,"readme-edits")),".",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"Commit message field",src:a(2491).Z})),(0,n.kt)("li",null,"Click Push origin to push your local changes to the remote repository.",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"Add all changes",src:a(1749).Z})))),(0,n.kt)(r.Z,{value:"cli",label:"Command Line",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"type ",(0,n.kt)("code",null,"git add .")," to add all of the files in your repository to the commit."),(0,n.kt)("li",null,"type ",(0,n.kt)("code",null,'git commit -m "edited readme file"')," to save your changes."),(0,n.kt)("li",null,"type ",(0,n.kt)("code",null,"git push origin main")," to push your changes to the remote main branch."))),(0,n.kt)(r.Z,{value:"vscode",label:"Visual Studio Code",mdxType:"TabItem"},(0,n.kt)("a",{href:"https://code.visualstudio.com/docs/editor/versioncontrol#_commit"},"Find Instructions on VSCode Documentation page")),(0,n.kt)(r.Z,{value:"browser",label:"GitHub on Browser",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",null,"Click the `README.md` file."),(0,n.kt)("li",null,"Click ",(0,n.kt)(l.Z,{mdxType:"Icon"},"edit")," to edit the file."),(0,n.kt)("li",null,"In the editor, write a bit about yourself."),(0,n.kt)("li",null,"Copy and Paste the ",(0,n.kt)("a",{href:"#checklist"},"assignment checklist")),(0,n.kt)("li",null,"In the ",(0,n.kt)("strong",null,"Commit changes")," box, write a commit message that describes your changes."),(0,n.kt)("li",null,"Click ",(0,n.kt)("strong",null,"Commit changes"),".")),(0,n.kt)("img",{ali:"commit example",src:a(8368).Z}))),(0,n.kt)("p",null,"These changes will be made only to the README file on your ",(0,n.kt)("inlineCode",{parentName:"p"},"readme-edits")," branch, so now this branch contains content that's different from ",(0,n.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,n.kt)("h2",{id:"opening-a-pull-request"},"Opening a pull request"),(0,n.kt)("p",null,"Now that you have changes in a branch off of ",(0,n.kt)("inlineCode",{parentName:"p"},"main"),", you can open a pull request."),(0,n.kt)("p",null,"Pull requests are the heart of collaboration on GitHub. When you open a pull request, you're proposing your changes and requesting that someone review and pull in your contribution and merge them into their branch. Pull requests show diffs, or differences, of the content from both branches. The changes, additions, and subtractions are shown in different colors."),(0,n.kt)("p",null,"As soon as you make a commit, you can open a pull request and start a discussion, even before the code is finished."),(0,n.kt)("p",null,"By using GitHub's ",(0,n.kt)("inlineCode",{parentName:"p"},"@mention")," feature in your pull request message, you can ask for feedback from specific people or teams, whether they're down the hall or 10 time zones away."),(0,n.kt)("p",null,"You can even open pull requests in your own repository and merge them yourself. It's a great way to learn the GitHub flow before working on larger projects."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Pull requests")," tab of your ",(0,n.kt)("inlineCode",{parentName:"p"},"hello-world")," repository.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"New pull request"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Example Comparisons")," box, select the branch you made, ",(0,n.kt)("inlineCode",{parentName:"p"},"readme-edits"),", to compare with ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," (the original).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Look over your changes in the diffs on the Compare page, make sure they're what you want to submit."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"diff example",src:a(1548).Z,width:"1434",height:"516"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create pull request"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Give your pull request a title and write a brief description of your changes. You can include emojis and drag and drop images and gifs.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create pull request"),"."))),(0,n.kt)("p",null,"Your collaborators can now review your edits and make suggestions."),(0,n.kt)("h2",{id:"merging-your-pull-request"},"Merging your pull request"),(0,n.kt)("p",null,"In this final step, you will merge your ",(0,n.kt)("inlineCode",{parentName:"p"},"readme-edits")," branch into the ",(0,n.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Merge pull request")," to merge the changes into ",(0,n.kt)("inlineCode",{parentName:"li"},"main"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Confirm merge"),"."),(0,n.kt)("li",{parentName:"ol"},"Go ahead and delete the branch, since its changes have been incorporated, by clicking ",(0,n.kt)("strong",{parentName:"li"},"Delete branch"),".")),(0,n.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,n.kt)("p",null,"By completing this tutorial, you've learned to create a repository and make a pull request on GitHub."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can start adding collaborators to your repository. who would follow a similar approach, of creating branches, making changes, and merging them into the main branch.")),(0,n.kt)("p",null,"Take a look at your GitHub profile and you'll see your work reflected on your contribution graph."),(0,n.kt)("h3",{id:"checklist"},"Checklist"),(0,n.kt)("p",null,"Make sure you completed the following items before you submit the assignment on Canvas:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a repository on GitHub"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a branch on GitHub"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make changes to the branch"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Open a pull request on GitHub"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Merge your pull request"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Filled out the feedback form (optional)")),(0,n.kt)("h3",{id:"what-to-submit-on-canvas"},"What to submit on Canvas"),(0,n.kt)("p",null,"just a link to your remote repository should suffice for this lab."),(0,n.kt)("h3",{id:"feedback-form"},"Feedback form"),(0,n.kt)("iframe",{width:"640",height:"480",src:"https://forms.office.com/Pages/ResponsePage.aspx?id=bC4i9cZf60iPA3PbGCA7Y33H7NKgRR5CkMtRYawNvXtUNjkyNjJDVktDT1QwTTRYVUpKVTZSVktVNS4u&embed=true",frameborder:"0",marginwidth:"0",marginheight:"0",style:{border:"none",maxWidth:"100%",maxHeight:"100vh"},allowfullscreen:!0,webkitallowfullscreen:!0,mozallowfullscreen:!0,msallowfullscreen:!0}," "))}k.isMDXComponent=!0},4213:(e,t,a)=>{a.d(t,{Z:()=>o});const o="data:image/png;base64,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"},7754:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/choose-repository-location-51a9aa1fab96c64257c5224d2a1ad9d7.png"},2016:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/clone-a-repository-list-1a2193d8bfc76080a2d60c4d516677a0.png"},7251:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/clone-choose-button-mac-61847d40040c1f0c61ddc4013264560d.png"},61:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/clone-file-menu-mac-686a7087c0191a2ea35cca7c255fa54b.png"},2491:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/commit-button-c74b81664ec942e4328c58912cee55db.png"},2722:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/commit-message-dababca3e0d89ed8d25e79032ea9dcc3.png"},5246:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/create-branch-button-mac-1ba9963267cddba75775dd155a8f78bf.png"},5243:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/create-branch-choose-branch-mac-bff22a4b2c255e572b9e686ce7639749.png"},2634:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/create-branch-name-mac-82b0b657059c6d8f849bf3052bbce71a.png"},8368:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/first-commit-ed484137c5a8e51bf74d14745083855f.png"},6158:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-branch-button-mac-d598d5c437e3d7be8f5a0ad0be2617e4.png"},4700:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/new-branch-e6a38bd0423166492f231309e9c76ee2.png"},1749:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/push-origin-button-488d9844581e07b7f218e62cf9c144ef.png"},1780:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/select-branch-from-dropdown-e54b695448085798348e02e5c7d8a482.png"},7446:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/vscode-branching-9ad3621f115e3b751ada5669c18411cb.png"},3089:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/branching-9678b744c7f5106dfca195b7d888cc26.png"},1548:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/diffs-3c9426c430a4180f630129565409bb1d.png"},6186:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hello-world-repo-c25433ccc3cf6283ed374d46f7437f3c.png"},1893:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/repo-create-ba4bc7a2ad541270d85b12a1b30d61da.png"}}]);