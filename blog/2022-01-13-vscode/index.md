---
slug: vscode-extensions
title: Visual Studio Code Settings and Extensions Sync
authors: [ygilany,reedws]
tags: [vscode, uses]
---

In my demo videos, you may notice that my Visual Studio Code IDE, provides with me with a lot of cheaters, helpers, and utilities that makes development a little easier.
In this post, I'm sharing some instructions for how you can setup you VSCode IDE with the same settings and extensions I have here.

## Settings Sync

One helpful way to avoid setting up your VSCode IDE from scratch is to use the built-in Settings Sync. Settings Sync lets you share your Visual Studio Code configurations such as settings, keybindings, and installed extensions across your machines so you are always working with your favorite setup.

You can turn on Settings Sync using the Turn On Settings Sync... entry in the Manage gear menu at the bottom of the Activity Bar.
<img alt="Turn on Sync command" src={require('./assets/1-turn-on-sync.png').default} style={{border: `1px solid black`, marginBottom:`2em`}} />

You will be asked to sign in and what preferences you would like to sync. Generally, you will want to sync everything but there is a case to turn some of these off on some devices.
<img alt="Settings Sync configure dialog" src={require('./assets/2-sync-configure.png').default} style={{border: `1px solid black`, marginBottom:`2em`}} />

Selecting the Sign in & Turn on button will ask you to choose between signing in with your Microsoft or GitHub account. I recommend using your GitHub account since you will most likely need to sign in with GitHub for other extensions.
<img alt="Settings Sync configure dialog" src={require('./assets/3-sync-accounts.png').default} style={{border: `1px solid black`, marginBottom:`2em`}} />

After making this selection, the browser will open so that you can sign in to your Microsoft or GitHub account. When a Microsoft account is chosen, you can use either personal accounts, such as Outlook accounts, or Azure accounts, and you can also link a GitHub account to a new or existing Microsoft account.

After signing in, Settings Sync will be turned on and continue to synchronize your preferences automatically in the background.

For more information on Settings Sync, see this article from Microsoft: [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync).

## Some of my Extensions

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Babel JavaScript](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
