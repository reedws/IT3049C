---
sidebar_position: 2.2
title: 'Part 2: Collaborate on a Project'
sidebar_label: Collaborate on a Project
---

Creating Pull Request will come very handy when working with a team. For this part, you may use GitHub in-browser editor, or clone down the repo and make your changes locally.

1. On [this Repository (https://github.com/IT3049C/students)](https://github.com/IT3049C/students), Fork the repository using button on the top right.
    * <img alt="fork button" src={require('./assets/forkbtn.png').default} height="60" />
    * This will create a repository on your account, with the content of this repository.
2. On the forked repo, navigate to the `_data/CURRENT_SEMESTER` folder: where `CURRENT_SEMESTER` is just a placeholder for what the semester would be, create a new file named `YOUR_GITHUB_USERNAME.json`. 
    * *NOTICE:* github username isn't necessarily your 6+2.
    * For example, my 6+2 is `gilanyym` but my GitHub username is `Ygilany` and so my file name would be `Ygilany.json`
    * <img alt="create a file" src={require('./assets/createFile.png').default}/>
3. Copy the snippet below, and make changes as instructed.
    ```json
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
    * <img alt="commit file" src={require('./assets/commitFile.png').default}/>
6. Submit a Pull Request from this fork back to the original repository.
    * <img alt="New Pull Request" src={require('./assets/newPR.png').default}/>
    * Confirm the head repository is your fork and create a PR.
        * <img alt="New Pull Request" src={require('./assets/createPR.png').default}/>
7. Copy the URL to the pull request and submit that on Canvas.