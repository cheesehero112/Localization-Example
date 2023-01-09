# Localization Example

## Introduction

Localization Example web application is created by using Vite & React.

This is a simple example of how to localize a single website into multiple languages.
A user can select between English, Spanish, and Japanese by clicking a corresponding button.

It is designed and structured in a way it's easy to scale up as needed. Please read the how to use section to add more languages and/or texts.

This example was created to accompany my Tech Talk sponsored by JEENEY and Bractlet on Software Localization as an example project.

Please visit this URL to view the website:
https://localization-example.netlify.app

## Features

This web application lets a user click a button to change all the texts and flag image into English, Spanish, or Japanese.
The file structure is setup with scalability in mind. It is simple to add more texts and more languages to expand the page.

![Localization-Eng](https://github.com/cheesehero112/Localization-Example/raw/main/media/Localization-Eng.png)

![Localization-SP](https://github.com/cheesehero112/Localization-Example/raw/main/media/Localization-SP.png)

![Localization-Jp](https://github.com/cheesehero112/Localization-Example/raw/main/media/Localization-Jp.png)

## Files

- media
  - Localization-End.png
  - Localization-Jp.png
  - Localization-SP.png
- src
  - assets
    - earth-lg.png
  - languages
    - Eng.jsx
    - Es.jsx
    - Jp.jsx
  - App.css
  - App.jsx
  - index.css
  - main.jsx
  - Translation.jsx
- .gitignore
- index.html
- pacakge-lock.json
- pacakge.json
- vite.congig.js
- README.md

## How to use

- Clone or download this repo
- `npm install` to download all the node modules
- `npm run dev` to start the application

To add more languages, follow these steps:

1. Create a new jsx file in languages folder and create an object with matching key/value pairs with existing languages.
2. The new language file needs to be imported into Translation.jsx file.
3. Inside of getTranslations function, add a conditional statement as seen for other languages
4. In App.jsx, create another button for the added language

## References

- Lionbridge blog: https://www.lionbridge.com/blog/content-transformation/what-is-software-localization-and-who-needs-it/#:~:text=Software%20localization%20is%20the%20process,natural%20to%20the%20target%20user.
- Transifex post: https://www.transifex.com/blog/2015/software-localization-guide/
