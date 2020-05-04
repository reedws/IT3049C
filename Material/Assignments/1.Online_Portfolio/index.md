---
layout: default
title: 1. Online Portfolio
parent: Assignments and Labs
nav_order: 1
---
# 1. Online Portfolio
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
This assignment is of 2 parts: 
1. **Part 1:** Creating a Web Page and hosting it. (15 pts)
2. **Part 2:** Creating a Pull Request (5 pts)


## Tips and Guidelines
* Don't just a copy a template. If you do, make sure it still satisfies the requirement below to pass the automated grading.
* Make Frequent git commits. 
  * This assignments will suggest a few checkpoints where it might be appropriate to commit the code. This won't be in all assignments.
  * the rule of thumb here is that, you should make a commit at the end of every complete thought.
  * proper planning will help you identify those checkpoints before you even start coding.
  * Use useful commit messages to make it easy reviewing the commit history.


## Lab Goals
1. Practice the usage of Git and GitHub in submitting the assignments.
2. Review creating simple web pages using HTML
3. Review styling web pages using CSS to make the page look aestatically pleasing.
4. Deploy your site and hosting in on GitHub Pages.
5. I need to learn about you :)
6. Introduce yourself to the class as you'll need to team up for the final project.

<hr>

## Instructions
This is a 2-parts lab; in the first, you'll practice creating HTML page, with CSS and checking-in your work to a GitHub Repository where you're the only collaborator. and in the second, you'll practice creating a branch on a repository with multiple collaborators and submitting a pull request.

The starter project will include a few files that I ask you not to mess with. This will aid in providing you early feedback on your code before submitting the assignment.

### Part 1: Create a Web Page

#### Setup
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
  a. using GitHub Desktop
  b. using command line tools

3. Open the project in Visual Studio Code.
  a. make sure you select the root folder when opening the project. It will be named something like `1-online-portfolio-YOUR_USERNAME`


#### Creating the Webpage
1. Where it says `<!-- include style files here-->`, add a `<link>` with a reference to the styles sheet located in `resources/styles/styles.css`
2. Where it says `<!-- include script files here-->`, add a `<script>` with a reference to the scripts file located in `resources/scripts/index.js`
3. inside the container `<div>`. make an `<h1>` that contains your name
4. Modify the HTML `<title>` to match what you wrote in the `h1` tag
4. add an image `<img>` of yourself.
  a. make sure the image is placed in `resources/images/...`. I can't access files on your computer (DUHH!)
5. Make a git commit here.
6. For Each of the following 5 sections:
    * make a git commit once done with it.
    * make sure to wrap the section with a `<div>` with a class name of `section`
    * each section must be titled with `<h2>` tags
    * sections are:
        * Personal background
        * Work and Development Experience
        * Programming Languages
        * Achievements
        * Favourite Games (or ones you’re currently playing)
7. Pretty-ify the page with some custom styles in `resources/styles/styles.css`
    * [Bootstrap library](https://getbootstrap.com/) is already included at the top of the HTML file. You're welcome to use it.
    * make a git commit once done with the styling or incrementally as you're making your changes.
7. Once you are finished, make sure you push all the changes to the repository.
8. **(optional)** run the `npm test` command to check if you missed anything on this part.
    * You'll need to have node.js installed at this point.
    * from the command line tools (i.e. terminal, iTerm, bash, ...etc.), navigate to the project directory, and run `npm test`
    * if using Visual Studio Code, the class's IDE, you can simply open up the integrated terminal (View > Terminal) which will automatically open up at the correct project path.

#### Output
any thing looking like this or better is accepted.
<img alt="example image" src="assets/example.png" style="height:400px; border:1px #ddd solid;"/>


#### Setting up GitHub Pages for hosting
1. Follow the following [instructions](https://help.github.com/en/enterprise/2.13/user/articles/configuring-a-publishing-source-for-github-pages#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages) to setup github pages and **publish your page from `master`**.

<hr>

### Part 2: Create Pull Request
In this part, we will practice making changes directly on GitHub using the in-browser editors. (You're welcome to clone down the repository and make your changes locally)

1. [Branch out of master](https://help.github.com/en/desktop/contributing-to-projects/creating-a-branch-for-your-work).
  a. for more info and explaination of the branching. You could also checkout the [official documentation here](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
2. Navigate to the `_data/CURRENT_SEMESTER` folder: where `CURRENT_SEMESTER` is just a placeholder for what the semester would be.
3. Create a new file named `YOUR_GITHUB_USERNAME.json`. *NOTICE:* github username isn't necessarily your 6+2.
4. Introduce yourself by modifying the file.
    * use this [Emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) to select an `emoji`.
    * type in a short message in the introduction line
    * The `achievements` is an array of strings.
        * list 2-4 achievements or highlights you’ve accomplished recently that you’d like to share with the class.
        * Don't forget the trailing commas.
    * The links should at least constain the `site` key with the link set to your hosted github page.
        a. you may share your linkedin profiles here as well.
        c. You can remove the lines for the social media options you're not sharing.
    * The file MUST follow with the following Schema.
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
5. commit the changes
6. Check the status of the commit in GitHub Actions. If it passess, submit a pull request from your branch to the `master` branch.
    * [On GitHub Desktop](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
    * **OR** [On GitHub.com directly](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

### Grading
1. The WebPage has all the required sections.
2. The Web Page is aesthetically pleasing.
3. Every Paragraph is pushed in a separate commit.
4. The Web page is hosted on GitHub Pages.
