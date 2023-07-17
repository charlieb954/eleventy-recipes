# ELEVENTY RECIPES

This project is a recipe book created using Eleventy and basic CSS to generate a static site for personal cooking from Markdown files. It was also an opportunity to work with GitHub actions to manage the deployment.

It's intentionally simplistic design allows me to quickly upload recipes as markdown files which are generated into HTML files. The recipes are variations of recipes from advert-riddled websites and/or social media videos.

[View a demo here](https://charlieb954.github.io/eleventy-recipes)

Below is the folder structure explained for future reference.

## src
This folder includes the layouts such as the base.html file for all webpages to inherit. At the moment, 2 other layouts exist one for home.html, which bullet points all the available receipes, and a second for recipe.html which all the recipes use as a template.

The CSS folder is stored here and is added as a passthrough/watchtarget in the .eleventy.js file.

The folder recipes contains the markdown files for all the recipes which are then transformed into html files by Eleventy.

Finally, this folder includes the index.md file which is the home page of the static website.

## .nojekyll
GitHub pages attempts to use Jekyll to build a static website, this empty file tells GitHub not to use Jekyll.

## branches
GitHub actions are triggered to rebuild the website on pushes to the main branch. These will call the eleventy_build.yml workflow. Once the build is complete it's stored in a separate branch gh-pages for deployment.