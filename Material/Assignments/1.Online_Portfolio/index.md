---
layout: default
title: 1. Online Portfolio
parent: Assignments
nav_order: 1
---
# 1. Online Portfolio
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Lab Goals
1. Practice the usage of Git and GitHub in submitting the assignments.
2. Review creating simple web pages using HTML
3. Review styling web pages using CSS to make the page look aestatically pleasing.
4. Deploy your site and hosting in on GitHub Pages.
5. I need to learn about you :)
6. Introduce yourself to the class as you'll need to team up for the final project.

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
1. Add a `<link>` with a reference to the styles sheet located in `resources/styles/styles.css`
2. Add a `<script>` with a reference to the scripts file located in `resources/scripts/index.js`
3. Start the body with an `<h1>` that contains your name
4. add an image `<img>` of yourself.
  a. make sure the image is placed in `resources/images/...`. I can't access files on your computer (DUHH!)
5. Make a git commit here.
6. For Each of the following 5 sections:
  a. make a git commit once done with it.
  b. make sure to wrap the section with a `<div>` with a class name of `section`
  c. sections are:
    * Personal background
    * Work and Development Experience
    * Programming Languages
    * Achievements
    * Favourite Games (or ones you’re currently playing)
7. Make the page a bit more pretty by creating your custom styles in `resources/styles/styles.css`
  a. Bootstrap is already included at the top of the HTML file. You're welcome to use it.
  b. make a git commit once done with the styling or incrementally as you're making your changes.
7. Once you are finished, make sure you push all the changes to the repository.
8. **(optional)** run the `npm test` command to check if you missed anything on this part.
  a. You'll need to have node.js installed at this point.
  b. from the command line tools (i.e. terminal, iTerm, bash, ...etc.), navigate to the project directory, and run `npm test`
  c. if using Visual Studio Code, the class's IDE, you can simply open up the integrated terminal (View > Terminal) which will automatically open up at the correct project path.

#### Setting up GitHub Pages for hosting
1. Follow the following [instructions](https://help.github.com/en/enterprise/2.13/user/articles/configuring-a-publishing-source-for-github-pages#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages) to setup github pages and publish your page from `master`.

### Part 2: Create Pull Request

## Tips and Guidelines
* Do not push everything in one commit.
* Use useful commit messages

### Grading
1. The WebPage has all the required sections.
2. The Web Page is aesthetically pleasing.
3. Every Paragraph is pushed in a separate commit.
4. The Web page is hosted on GitHub Pages.
