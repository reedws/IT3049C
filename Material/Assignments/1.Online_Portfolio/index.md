---
layout: default
title: 1. Online Portfolio (Lab)
parent: Assignments and Labs
has_children: true
nav_order: 1
---
# 1. Online Portfolio (Lab)
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Lab Goals
1. Review creating simple web pages using *HTML* and the different ways to present content.
2. Review styling web pages using *CSS* to make the page look aesthetically pleasing.
3. Practice the **usage of Git and GitHub** in submitting the assignments.
    * Make Frequent git commits. 
        * 💬 As a rule of thumb, you should commit your code at the end of every complete thought.
        * 🚩 Planning your code will help you identify checkpoints <img alt="commit logo" style="height: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> where you can commit your code.
        * Use meaningful commit messages.
        * The instructions will suggest a few checkpoints where you can commit the code.
            * This won't be in all assignments.
4. Deploy your site and hosting in on *GitHub Pages*.
5. I need to learn about you :)
6. Introduce yourself to the class as you'll need to team up for the final project.

<hr>

This is a **2-parts** lab; 
1. **Part 1:** Creating a Web Page and hosting it. ~(17 pts)~
    
    practice creating HTML page, with CSS and checking-in your work to a GitHub Repository where you're the only collaborator.
2. **Part 2:** Creating a Pull Request ~(3 pts)~
    
    you'll practice creating a branch on a repository with multiple collaborators and submitting a pull request.

Accept the GitHub Classroom assignment on Canvas to create a repository for you with some starter files.

#### Guidelines
* Don't just use a online template. If you do, make sure it still satisfies the requirement below to pass the automated grading.
* This assignment is in a lab-style. Follow the instructions step-by-step.
* To run the automated grading checks, make sure you have installed Node.js, per the instructions posted on Canvas.


## Instructions

## Part 1: Create a Web Page

### Setup
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

### Creating the Webpage
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

7. <img alt="commit logo" style="height: 20px;margin-bottom: -4px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> Make a git commit here
    * the commit message needs to be meaningful. Example: *"Initialize the page"*
    * If you're using the command line, the command would be: `git commit -m "initialized the page"`. 

8. Create the following 4 sections. For each of them sections:
   * make sure to wrap each section with a `<div>` with a class name of `section` and is assigned the respective id specified below
   * each section must be titled with `<h2>` tags
   * <img alt="commit logo" style="height: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit at the end of each section created. i.e. `git commit -m "added Personal background section"`, `git commit -m "added Work and Development Experience section"` and so on ...
   * sections are:
        * Personal background
            * Containing `<div>` has class of `section` and id of `personalBackground`
            * A paragraph tag `<p>` or an un-numbered`<ul>` with your experience.
            * <img alt="commit logo" style="height: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit `git commit -m "added Personal background section"`.
        * Work and Development Experience
            * containing `<div>` has class of `section` and id of `experience`
            * A numbered list tag `<ol>` containing the programming languages you know.
            * <img alt="commit logo" style="height: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit.
        * Programming Languages
            * containing `<div>` has class of `section` and id of `programmingLanguages`
            * A numbered list tag `<ol>` containing the programming languages you know.
            * <img alt="commit logo" style="height: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit.
        * Achievements
            * containing `<div>` has class of `section` and id of `achievements`
            * An un-numbered list tag `<ul>` containing the some of the achievements you'd like to share.
            * <img alt="commit logo" style="height: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit.
        * Favorite Games (or ones you’re currently playing) - with an id of `games`
            * containing `<div>` has class of `section` and id of `achievements`
            * A paragraph tag `<p>` or an un-numbered`<ul>` containing the the games you like to play.
            * <img alt="commit logo" style="height: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit.

9. Style the webpage with some custom styles in `resources/styles/styles.css` using classes, and IDs.
    * [Bootstrap library](https://getbootstrap.com/) is already included at the top of the HTML file. You're welcome to use its classes to style your page.
    * <img alt="commit logo" style="height: 15px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Octicons-git-commit.svg/1200px-Octicons-git-commit.svg.png"/> make a git commit once done with the styling or incrementally as you're making your changes.

10. Once you are finished, make sure you push all the changes to the repository.
    * any thing looking like this or better is accepted. (With content of course)
    <img alt="example image" src="assets/example.png" style="height:400px; border:1px #ddd solid;"/>

<hr />

### Run Auto-grader checks
If you followed the instructions properly, creating the different sections with the correct IDs, classes, and content types, you should pass the auto-grader checks.
1. Open your preferred command line terminal (i.e. terminal, iTerm, bash, git bash, powershell, ... etc) and navigate to the project path. 
    * remember [the `cd` command](http://www.linfo.org/cd.html) from System Admin class.
    * Using Visual Studio Code you can simply open the integrated terminal (View > Terminal) which will automatically open up at the correct project path.
        * [More info on vscode integrated terminal can be found here](https://code.visualstudio.com/docs/editor/integrated-terminal)

2. install project depenedencies using the following command: `npm install`

3. run the following command: `npm test`. a suite of tests will run producing results similar to the following.

<hr />

### Setting up GitHub Pages for hosting
1. Follow the following [instructions](https://help.github.com/en/enterprise/2.13/user/articles/configuring-a-publishing-source-for-github-pages#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages) to setup github pages and **publish your page from `master`**.

<hr>

## Part 2: Create Pull Request
Creating Pull Request will come very handy when working with a team. For this part, you may use GitHub in-browser editor, or clone down the repo and make your changes locally.

1. On [this Repository (https://github.com/IT3049C/students)](https://github.com/IT3049C/students), Fork the repository using button on the top right.
    * <img alt="fork button" style="height: 60px;" src="assets/forkbtn.png"/>
    * This will create a repository on your account, with the content of this repository.
2. On the forked repo, navigate to the `_data/CURRENT_SEMESTER` folder: where `CURRENT_SEMESTER` is just a placeholder for what the semester would be, create a new file named `YOUR_GITHUB_USERNAME.json`. 
    * *NOTICE:* github username isn't necessarily your 6+2.
    * For example, my 6+2 is `gilanyym` but my GitHub username is `Ygilany` and so my file name would be `Ygilany.json`
    * <img alt="create a file" src="assets/createFile.png"/>
3. Copy the snippet below, and make changes as instructed.
    ```
      {
          "emoji": ":smirk_cat:",
          "role": "Student",
          "introduction": "I'm excited to learn about you all!",
          "achievements": [
              "achievement1",
              "achievement2"
          ],
          "links": {
              "site": "LINK_TO_YOUR_WEBSITE",
              "linkedin": "LINK_TO_YOUR_LINKEDIN_PROFILE",
              "facebook": "LINK_TO_YOUR_FACEBOOK_PROFILE",
              "twitter": "LINK_TO_YOUR_TWITTER_PROFILE",
          }
      }
    ```
4. Introduce yourself by modifying the file.
    * use this [Emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) to select an `emoji`.
    * type in a short message in the introduction line
    * The `achievements` is an array of strings.
        * list 2-4 achievements or highlights you’ve accomplished recently that you’d like to share with the class.
        * Don't forget the trailing commas.
    * The links should at least contain the `site` key with the link set to your hosted github page.
        a. you may share your LinkedIn profiles here as well.
        c. You can remove the lines for the social media options you're not sharing.
    * The file MUST follow with the following Schema.

5. commit the changes
    * <img alt="commit file" src="assets/commitFile.png"/>
6. Submit a Pull Request from this fork back to the original repository.
    * <img alt="New Pull Request" src="assets/newPR.png"/>
    * Confirm the head repository is your fork and create a PR.
        * <img alt="New Pull Request" src="assets/createPR.png"/>
7. Copy the URL to the pull request and submit that on Canvas.

## Grading
On canvas, you need to submit:
1. Link to your GitHub Repository from part 1
2. Link to your hosted GitHub Page from part 1.
3. Link to the Pull Request you opened against `IT3049C/students` from part 2.

You will be graded using the following criteria.
1. The WebPage has all the required sections. (10 Points - 2 points each)
   1. Including styles and script files using relative paths.
   2. familiarity with nesting *HTML* tags. i.e.: a `<div>` containing other elements.
        * Following the instructions will lead to passing the auto-graded tests.
   1. presenting content using different *HTML* tags. i.e. `<ol>`, `<ul>`, `<p>`, `<img>`
   2. assigning classes and IDs properly.
   3. Styling the page using classes and IDs in the css file.
2. The Web page is hosted on GitHub Pages. (3 Points)
3. Proper usage of git and GitHub and making frequent commits (3 points).
4. Pull request is submitted. (3 points)

### You may lost points if
* You don't fill out the self-evaluation and self-grading section on the `README.md` file.
* You upload your assignment into GitHub instead of properly using GitHub commits and pushes.