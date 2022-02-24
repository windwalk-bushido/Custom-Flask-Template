# Custom Flask Template

Requirements:

- Python 3
- Pip

Optional: Sass Watcher (since main CSS file is written in Sass, otherwise develop with what you like)

It's designed to serve all files from one place: JS, CSS, Google fonts, FontAwesome icons, etc. Your project won't be tied to CDNs.
Note #1: Check ocassionally to see if FontAwesome has updated their fonts. Current version in the project is 6.

Main motto: No CDNs, Minify, 100% Lighthouse.

Starts with:

- 3 different types of fonts, two of them are cursive and one is sans-serif;
- Minifed CSS + JS starter files to enable dark/light mode changing;
- Already designed 404 page for both modes;
- Serving of 'robots.txt' and 'humans.txt';

```sh
git clone https://github.com/windwalk-bushido/Custom-Flask-Template.git ; cd Custom-Flask-Template ; bash init_project.sh
```

## Deployment on Heroku:
