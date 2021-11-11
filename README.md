# Agildate

[![NPM](https://img.shields.io/npm/l/ionic)](https://github.com/LukasAlves2711/Agildate/blob/main/LICENSE)

## About

Agildate project for appointments

This project is a prototype of a future scheduling application for barber shops and establishments that need agility and practicality at the touch of their hands.


## What is Ionic Framework?
Ionic framework is an open-source UI toolkit for building performant, high-quality mobile apps, desktop apps, and progressive web apps using web technologies such as HTML, CSS, and JavaScript. It allows developers to build once and run everywhere. It was created by Max Lynch, Ben Sperry, and Adam Bradley of Drifty Co. in 2013. The first beta version of the Ionic framework was released in March 2014.

The Ionic framework mainly focuses on front-end user experience or UI interaction, which handles all the look and feel of your app. It is easy to learn and can integrate with other libraries or framework such as Angular, Cordova, etc. It can also be used as a standalone without a front-end framework using a simple script include.

### Using NVM

Improve this doc

nvm is a Node Version Manager that allows you to manage multiple active node.js installations with different versions.

General Usage

With nvm you can install several node versions at the same time and switch between them as you wish. Global packages are installed per node, so you can e.g. have different Ionic CLI versions installed for different node versions.

macOS and Linux

Installation

To install or update nvm, you can use the install script using cURL:
``` bash 

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

```
or Wget:
``` bash 
 wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

The script clones the nvm repository to ~/.nvm and adds the source line to your profile 
``` bash 
(~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
``` 

You can customize the install source, directory, profile, and version using the NVM_SOURCE, NVM_DIR, PROFILE, and NODE_VERSION variables. Eg: curl ... | NVM_DIR=/usr/local/nvm bash for a global install.

NB. The installer can use git, curl, or wget to download nvm, whatever is available.

Note: On OS X, if you get nvm: command not found after running the install script, one of the following might be the reason:-

your system may not have a ``` bash  [.bash_profile file] ``` where the command is set up. Simply create one with touch ``` bash ~/.bash_profile ``` and run the install script again you might need to restart your terminal instance. Try opening a new tab/window in your terminal and retry.
If the above doesn’t fix the problem, open your .bash_profile and add the following line of code:

``` bash 
 source ~/.bashrc
```

For more information about this issue and possible workarounds, please refer here

Verify installation

To verify that nvm has been installed, do:

``` bash 
command -v nvm
```

which should output ‘nvm’ if the installation was successful.

Usage

To download, compile, and install the latest release of node, do this:
``` bash 
nvm install node
```
And then in any new shell just use the installed version:

``` bash 
 nvm use node
```

Or you can just run it:

``` bash 
nvm run node --version
```

Or, you can run any arbitrary command in a subshell with the desired version of node:

``` bash 
nvm exec 4.2 node --version
```

You can also get the path to the executable to where it was installed:

``` bash 
nvm which 14.01.0
``` 

In place of a version pointer like “0.10” or “5.0” or “4.2.1”, you can use the following special default aliases with nvm install, nvm use, nvm run, nvm exec, nvm which, etc:

node: this installs the latest version of node

iojs: this installs the latest version of io.js

stable: this alias is deprecated, and only truly applies to node v0.12 and earlier. Currently, this is an alias for node.
unstable: this alias points to node v0.11 - the last “unstable” node release, since post-1.0, all node versions are stable. (in semver, versions communicate breakage, not stability).

# Windows

Installation

To install NVM on windows, visit the nvm-windows repo and download the latest installer

Usage

To list the available and installable node versions:

``` bash 
 nvm list available
```

To install the selected node version call:

``` bash
nvm install <version>
```

See how it installed and which node versions can be used:

``` bash
nvm list
```

To activate a node installation, do:

``` bash
nvm use <version>
```  
And if a node version is not required any more, execute:

``` bash
nvm uninstall <version>
```
