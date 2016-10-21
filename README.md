# Joomlatools UI

**This software is not released yet. Things might change!**

Joomlatools UI is an intuitive User Interface that can be used on top of the Joomla administrator.
It is not a Joomla template and therefore does not work with the joomla markup out-of-the-box.
All markup should be copy-pasted from this styleguide.

![DOCman using Joomlatools UI](docs/joomlatools/images/docman.png)

## Installation

```
$ bundle install
$ npm install
```

## Development

```
$ grunt
````

## Styleguide deployment

The styleguide is being hosted on GitHub Pages. The `docs` folder is being pushed to the `gh-pages` branch when executing:

```
$ rake deploy
```

### The idea behind the UI

This is not a framework like Bootstrap is. You can't just copy paste anything anywhere. Most elements have a predefined spot. 
There are of course exceptions. If you are unsure how to use this just copy paste complete templates from the [list examples](http://ui.joomlatools.com/#/section/4) or the [form examples](http://ui.joomlatools.com/#/section/5) page.

### Why not just use Bootstrap or Foundation?

The reason we created a new framework is because:

- We wanted to add flexbox to get an "app" feeling
- We needed a non-flexible grid layout where everything has it's own spot. This might sound counter-productive but read on to understand why we chose this approach
- We wanted a system to rely on, using BEM and Atomic design
- We didn't want to pollute the markup with classes like span12 which don't say anything
 
#### But I see Bootstrap markup and classes in here!

That's right. We are using a couple of Bootstrap 3 modules.
We are doing this because they are good modules that don't need to be re-discovered.

### How the UI is built-up

The UI consists of a few different elements.

- Menubar / Titlebar
- Sidebar
- Content area
  - List
  - Form
  
The menubar and sidebar are both optional.
The content area should always be there and can consist out of either a list of items or a an item form.
All modals are using the same views to keep the interface recognizable.

#### The menubar / titlebar [optional]

The menubar holds the main navigation of the application.
It can contain the application logo, login / logout links and links to the main pages of the application.

For modals or other pages that do not have a menubar you could use a titlebar to display what the view is about.

#### The sidebar [optional]

The sidebar holds sub-navigation for the content area.
This navigation could be links (using the [navigation](http://ui.joomlatools.com/#/section/2.16) molecule), A category or folder tree (using the [tree](http://ui.joomlatools.com/#/section/2.26) molecule), or quick links to pre-defined filters (using the [list](http://ui.joomlatools.com/#/section/2.13) molecule)
All of these elements are navigational elements to display something in teh content area.

#### The list view

The list view can consist out of the following elements

- Toolbar
- Breadcrumbs
- Scopebar
- Table / Grid

##### Toolbar

The toolbar should always be placed on top of the list and next to the sidebar.
Never place the toolbar on top of the sidebar since the actions in the toolbar are only applying to the list below it, and not to the elements in the left sidebar.
The reason that the toolbar is the first element of the list view is because the actions you take (for example creating a new item) could ignore the filters that are active on the list below it.
For example you could have a filtered list that only shows items with a certain category. When creating a new item you could choose to add another category ignoring the category filter.

##### Breadcrumbs [optional]

After the toolbar the breadcrumbs may follow to display which folder or category we are currently viewing narrowing the results down.

##### Scopebar [optional]

The final layer is the scopebar where you can filter items or search within the displayed results

##### Table / Grid

This is where the list of (filtered) items are shown. Ending with the limit and pagination elements on the bottom showing there is more than the items displayed above.

#### The form view

Important: It is important to know that you should always only use a sidebar in a form view when there's autosaving enabled on the form. Otherwise people could lose their work.

The form view can be split up in two columns by using a container element. There are three widths available

- Full
- Main
- Sub

##### Full

The full container spans the entire width of it's parent.

##### Main

The main container spans 2/3 of it's parent.
All mandatory fields should be in this container.

##### Sub

The sub container spans 1/3 of it's parent.
No mandatory fields should be in this container since the container will be below the main container on mobiel views.
If you add mandatory fields to this container they could be overseen by users on smaller screens which will cause a lot of irritation.

### How to start?

Since the UI is built using CSS flexbox the used containers and their order is very important. Again, if you're not sure just copy-paste entire pages from the [list examples](http://ui.joomlatools.com/#/section/4) or the [form examples](http://ui.joomlatools.com/#/section/5) page.

1. Load `modernizr.js`, `jquery.js`, `admin.js` and `admin.css` in the `<head>` element
2. Copy the `fonts/k-icons` folder including files to the same parent as the `css` parent folder. (e.g. `/media/css/` and `/media/fonts/k-icons/`)
3. Add `<div class="koowa-container koowa"></div>` inside the `<body>` element.
4. Make sure that all parents of the `.koowa-container` have the `.k-flex-wrapper` class.
5. Inside the `.koowa-container` you can start building your pages.

## Tools and techniques

We are using the following tools, techniques and philosophies to build the UI:

- [SASS](http://sass-lang.com/)
- [BEM naming convention](http://getbem.com/naming/)
- [Atomic design](http://bradfrost.com/blog/post/atomic-web-design/)
- [Modernizr](https://modernizr.com/)
- [Normalize](https://necolas.github.io/normalize.css/)
- Mobile first design and coding philosophy
- [Bootstrap 3](http://getbootstrap.com/)

### FAQ

#### The styling I'm using inside modals is not looking like I expect it to

Always make sure you have at least one `<div>` with a `koowa` class surrounding the elemnts you want to styling using the UI.