# Wellspring

WordPress progressive web app theme based on React.js

## MVP Features - WIP

### Front-end

- App shell: navigation bar and simple footer
- Posts index
- Single post
- Single page
- Simplicity (no sidebar, no meta data)

### Code

- App shell loads via PHP and includes the main navigation bar and the footer
- The content loads via WP REST API v2

## Features for Later Releases

### Front-end

- Page transitions
- Sidebar
- Footer widgets
- Post formats support
- Post types support (portfolio...)

### Back-end

- Admin area clean up
- Customizer (logo, favicon)

### Code

- Performance: split app code based on components and load order
- CSS Modules
- Hot loading for development

## Getting Started

1. Go to the `theme` folder of your WordPress installation `cd path-to-your-website/wp-content/themes`
2. Clone this repository `git clone https://github.com/radekstangel/wellspring.git`
3. Go to the Wellspring root `cd wellspring`
4. Install NPM dependencies `npm install`
5. Run `npm run dist` to build the app or `npm start` for development

## Contributing

Contributions, ideas, questions and other comments are all welcomed and sincerely encouraged.

## Browser Support

3 latest versions of modern browsers (Chrome, Firefox, Edge, Opera); Safari 8+; IE 11; Opera Mini (latest)

## License

[GPL v2 license](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
Copyright 2016 Radek Stangel
