---
layout: default
title: Working in Teams
parent: General
nav_order: 4
nav_exclude: false
published: true
---

# Working in Teams

## Working on the Same Branch
If you and your teammates are planning to use the same branch when working together, remember that no one would see your updates until you push to the remote repository (GitHub), and they pull those changes from GitHub. 

Tools such as GitHub Desktop and the the integrated Source Version Control in VSCode, constantly checks the status of your local copy compared to the remote copy. 
<img alt="git pull on github desktop" src="../assets/work-in-teams/github-desktop-pull.png" style="border: 1px solid black; margin-bottom:2em;"/>

Here's [GitHub Docs and Guides for pulling changes from a branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch#pulling-to-your-local-branch-from-the-remote)

Also you can click on the *sync* button at the bottom of VSCode.
<img alt="git pull on VSCode" src="../assets/work-in-teams/vscode-git-pull.png" style="border: 1px solid black; margin-bottom:2em;"/>

You will want to make sure that you both push and pull frequently to stay in sync with each other.

A merge conflict is an event that takes place when Git is unable to automatically resolve differences in code between two commits. 

Git takes care of merging files and lines of code and resolving their differences. However, you may *occasionally* run into a merge conflict. A merge conflict happens when multiple commits affect the same line of code, in a way where git can't automatically resolve the difference and will need manual intervention to determine which change needs to be kept in the source code. 

You will need to delete the markers, and fix that file to only contain what you want to keep.

<img alt="image 1" src="../assets/work-in-teams/merge-conflict-markers.png" style="border: 1px solid black; margin-bottom:2em;"/>


## Working on Multiple Branches using Git Branches
Another approach for working together, is by using git branches. 

So far, when working on our git repositories, we've been working on a single branch named (`master` OR `main`). Branches allow you to start working from a specific base as a base, make your commits on a branch, then once you're ready, you merge that branch back into master. This will allow multiple people to work on separate branches

> **Remember**: Git isn't like Google Drive or Microsoft OneDrive, where your files automatically sync. This would introduce a lot of issues when working on a team, where the code would constantly change and no one would be able to finish their work properly.

The following diagram illustrates the concept of branches. 
<img alt="image 1" src="../assets/work-in-teams/git-branches.png" style="border: 1px solid black; margin-bottom:2em;"/>

Here's [GitHub Docs and Guides for merging a branch into master](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/keeping-your-local-repository-in-sync-with-github/syncing-your-branch#merging-another-branch-into-your-project-branch)
