# Engine Framework 4.0 - LAMP Stack

My startup for using EngineAPI to rapidly dev app.

## Templates
  - Application
  -- This folder will be linked directly to the EngineAPI so that all files in this will be able to be used in the application making for easy skinning and adjustments on the fly.
  - FormBuilder
  -- This folder will be linked into the EngineAPI Modules FormBuilder Templates so that you can create new templates and modify templates directly that will affect the formBuilder layout and look.

## Backend Adjustments / Per Application
 - Modify Vagrant File Name
 - Modify httpd.conf file for Document Root
 - Modify the Variables in the bootstrap.sh file
 - Modify SQL Tables to fit your application
 - Adjust and Modify ReadMe for Documentation Purposes.
 - You may also have to modify the defaultPrivate secion when launching the application

## FrontEnd Stack
 - In the includes file there is a folder of templateIncludes specifically for your templates in the application.  For this my frontend stack is going to consist of bower, grunt, scss, and depending upon project Jquery or another JS framework.

- Bower
   * For getting and managing dependencies

- Grunt
   * For Preprocessing, Cancatenation, Minification, and Uglification of JS and SCSS.

- The SCSS stack uses
   * bourbon
   * neat
   * normalize
   * and custom modules easy to adjust
   * the utilities folder  is comprised of different items you may need as breakpoints or extensions, but remember that you may need to change varaibles and it may not work right off the bat.

## Bower Setup
  - Needs NPM / Node
    * ```sudo npm install -g bower``` _installs bower_
    * ```bower install {package} --save``` _example of installing dependencies from bower_

## Grunt Setup
- Needs NPM / Node
    - ```sudo npm install -g grunt-cli``` _installs grunt_
    - ```sudo npm install grunt --save-dev``` _example of installing grunt dependencies_
    - Modify Grunt file, if need arises otherwise to begin watching js/css cd into project and type ```grunt``` before closing or changing branches use ```control + c```.

