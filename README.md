# Agildate

[![NPM](https://img.shields.io/npm/l/ionic)](https://github.com/LukasAlves2711/Agildate/blob/main/LICENSE)

## About

Agildate project for appointments

This project is a prototype of a future scheduling application for barber shops and establishments that need agility and practicality at the touch of their hands.


## Install the Ionic CLI

Before proceeding, make sure your computer has Node.js installed. See these instructions to set up an environment for Ionic.

Install the Ionic CLI with npm:

``` bash 
npm install -g @ionic/cli
``` 

If there was a previous installation of the Ionic CLI, it will need to be uninstalled due to a change in package name.

``` bash 
npm uninstall -g ionic
``` 
``` bash 
npm install -g @ionic/cli
``` 

The -g option means install globally. When packages are installed globally, EACCES permission errors can occur. Consider setting up npm to operate globally without elevated permissions. See Resolving Permission Errors for more information.

Start an App
Create an Ionic app using one of the pre-made app templates, or a blank one to start fresh. The three most common starters are the blank starter, tabs starter, and sidemenu starter. Get started with the ionic start command:
``` bash 
ionic start
``` 

start app thumbnails

To learn more about starting Ionic apps, see the Starting Guide.

Run the App

The majority of Ionic app development can be spent right in the browser using the ionic serve command:

``` bash 
cd myApp
``` 
ionic serve
There are a number of other ways to run an app, it's recommended to start with this workflow. To develop and test apps on devices and emulators, see the Running an App Guide.


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
