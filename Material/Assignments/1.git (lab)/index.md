---
layout: default
title: 1. Submitting Pull Requests
parent: Assignments and Labs
has_children: true
published: false
nav_order: 1
---

# Submitting your assignment (Lab)
- Go to your GitHub profile, Edit your profile, to add your name and upload an image of yourself.
- Go to the [students: IT3049C students over the years](https://github.com/IT3049C/students) Repository in the Class organization.
- Copy the Git URL to the repository
![](assets/009E8A57-A207-4050-871B-56D343F1D15A.png)

- Clone down the repository to your local computer.
	- **Method 1: Using GitHub Desktop**
		- We want to clone an existing repository. So you can either:
			1.  select the first option on the left `Clone a Repository from the Internet…`
			2. OR, you can go to the menu bar and select `File` -> `Clone Repository...`  ![](assets/B457AC18-E59E-43E7-B7D1-D889588EE003.png)
		- Go to the URL tab and in the first text field, paste in the git URL to the repository.
			* ![](assets/54B3ACD6-4DF2-4074-AF9F-376D09C2D235.png)
		* The Second field is where the project will be downloaded to. Once you’re done, click clone.
	* **Method 2: Using the Command line**
		1. using the command line, navigate to where you want to clone the project. Using the `cd` command. i.e.: `cd path/to/where/you/want/to/save/the/project`
		2. Clone the project: `git clone https://github.com/it2045c/students.git`
			* you may be prompted to login with your username and password
* Create a branch off of master.
	- **Method 1: Using GitHub Desktop**
		- Create a `New Branch`
		* ![](assets/16663508-E8D5-4B99-A5A3-D018933FB5AE.png)
		* to ensure uniqueness, name the branch with your 6+2
		* ![](assets/1DBDC2BB-A189-44FC-AFB7-6D046B18D490.png)
	* **Method 2: Using the Command line**
		* run the following command `git checkout -b gilanyym`
			* instead of `gilanyym` type in your 6+2.
* Create a file under `_data/Spring22` . The file should be named as `GITHUB_USERNAME.json` for example: `Ygilany.json`
* Introduce yourself by modifying the file using any Text Editor of your choice
	* use this [ Emoji cheat sheet ](https://www.webfx.com/tools/emoji-cheat-sheet/) to select an emoji. (First line of the example file below)
	* type in an introduction message in the introduction line
	* list 2-4 achievements you’ve accomplished recently that you’d like to share with the class.
	* Share at least your LinkedIn profile page in the links section.
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

* on GitHub Desktop, you should something like this
![](assets/36D13659-CFAF-4462-B2D3-31587BF2C01B.png)
* You can then click the `commit` button then the `publish branch`
* Go back to the file and make one change to the file
* Make another commit and push
* Create a pull Request to project
	- **Method 1: Using GitHub Desktop**
		- You can click the `Create Pull Request` button
![](assets/2EBE1A5E-93B4-4E93-96C3-DF4F804F45C9.png)

Or through the website
![](assets/DDFE8A04-67C2-4EB8-A995-DCADE5ED1107.png)
![](assets/19ED574B-55B4-4F42-908E-9DC444297681.png)

* make sure you select your branch from this list
![](assets/4989F0B0-DFB3-43B7-944D-C4B06211658E.png)

![](assets/259BA281-2F9B-49E8-9F9B-95D5D629CF06.png)
* modify the pull request title, then select `create pull request`
![](assets/60D1B51B-C5D4-45C6-B5E8-49A2AF1B3F27.png)

Let me know once you’re done


### Resources
- [Setting up GitHub Desktop](../extras/setting_up_github_desktop.md)
