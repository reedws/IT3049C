---
sidebar_position: 2
title: 'Part 1: Create a Web Page'
sidebar_label: Create a web page
---

## Setup
1. Accept the assignment on canvas.
  This will create a repository for you with a few starting files. The following directories are the only ones you're allowed to modify
    ```
    .
    ├── resources
    │   ├── images
    │   │   └── .gitkeep
    │   ├── scripts
    │   │   └── index.js
    │   └── styles
    │       └── styles.css
    ├── index.html
    └── README.md
    ```

2. Clone down the project to your computer.
    * [Using GitHub Desktop](https://help.github.com/en/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)
    * OR [using command line tools](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

3. Open the project in Visual Studio Code.
  a. make sure you select the root folder when opening the project. It will be named something like `1-online-portfolio-YOUR_USERNAME`

<hr />

## Creating the Webpage
1. Where it says `<!-- include style files here-->`, add a `<link>` with a reference to the styles sheet located in `resources/styles/styles.css`.

2. Where it says `<!-- include script files here-->`, add a `<script>` with a reference to the scripts file located in `resources/scripts/index.js`.

3. update the HTML `<title>` tag to be your name.

4. Inside the body of the page, create an a container (`<div>`).
   * ⚠️ **Note:** This container will enclose all of the page's content.
   * set the class name to `container`.

5. create an `<h1>` that contains your name.

6. add an image `<img>` of yourself.
    * make sure the image is placed in `resources/images` and that you use relative path not the complete file path. I can't access files on your computer (DUHH!).
        * Do 
        ```html
            <img src="resources/images/myphoto.jpg" />
        ```

        * Don't do
        ```html
            <img src="C:/Users/yahya/Desktop/OnlinePortfolio/resources/images/myphoto.jpg"/>
        ```

7. <img alt="commit logo" className="commit-logo" height="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> Make a git commit here
    * the commit message needs to be meaningful. Example: *"Initialize the page"*
    * If you're using the command line, the command would be: `git commit -m "initialized the page"`. 

8. Create the following 5 sections. For each of them sections:
   * make sure to wrap each section with a `<div>` with a class name of `section` and is assigned the respective id specified below
   * each section must be titled with `<h2>` tags
   * <img alt="commit logo" className="commit-logo" height="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit at the end of each section created. i.e. `git commit -m "added Personal background section"`, `git commit -m "added Work and Development Experience section"` and so on ...
   * sections are:
        * Personal background
            * Containing `<div>` has class of `section` and id of `personalBackground`
            * A paragraph tag `<p>` or an un-numbered`<ul>` with some background info.
            * <img alt="commit logo" className="commit-logo" height="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit `git commit -m "added Personal background section"`.
        * Work and Development Experience
            * containing `<div>` has class of `section` and id of `experience`
            * A numbered list tag `<ol>` containing some of the roles and places you worked at.
            * <img alt="commit logo" className="commit-logo" height="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit.
        * Programming Languages
            * containing `<div>` has class of `section` and id of `programmingLanguages`
            * A numbered list tag `<ol>` containing the programming languages you know.
            * <img alt="commit logo" className="commit-logo" height="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit.
        * Achievements
            * containing `<div>` has class of `section` and id of `achievements`
            * An un-numbered list tag `<ul>` containing the some of the achievements you'd like to share.
            * <img alt="commit logo" className="commit-logo" height="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit.
        * Favorite Games (or ones you’re currently playing)
            * containing `<div>` has class of `section` and id of `games`
            * A paragraph tag `<p>` or an un-numbered`<ul>` containing the the games you like to play.
            * <img alt="commit logo" className="commit-logo" height="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit.

9. Style the webpage with some custom styles in `resources/styles/styles.css` using classes, and IDs.
    * [Bootstrap library](https://getbootstrap.com/) is already included at the top of the HTML file. You're welcome to use its classes to style your page.
    * <img alt="commit logo" className="commit-logo" height="15" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit once done with the styling or incrementally as you're making your changes.

10. Once you are finished, make sure you push all the changes to the repository.
    * any thing looking like this or better is accepted. (With content of course)
    <img alt="example image" src={require('./assets/example.png').default} height="400" />

<hr />

## Run Auto-grader checks
If you followed the instructions properly, creating the different sections with the correct IDs, classes, and content types, you should pass the auto-grader checks.
1. Open your preferred command line terminal (i.e. terminal, iTerm, bash, git bash, powershell, ... etc) and navigate to the project path. 
    * remember [the `cd` command](http://www.linfo.org/cd.html) from System Admin class.
    * Using Visual Studio Code you can simply open the integrated terminal (View > Terminal) which will automatically open up at the correct project path.
        * [More info on vscode integrated terminal can be found here](https://code.visualstudio.com/docs/editor/integrated-terminal)

2. install project depenedencies using the following command: `npm install`

3. run the following command: `npm test`. a suite of tests will run producing results similar to the following.

<hr />

## Setting up GitHub Pages for hosting
1. Follow the following [instructions](https://help.github.com/en/enterprise/2.13/user/articles/configuring-a-publishing-source-for-github-pages#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages) to setup github pages and **publish your page from `main`**.

<hr />