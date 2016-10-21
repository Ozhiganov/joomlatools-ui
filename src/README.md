# Joomlatools UI

Joomlatools UI is an intuitive User Interface development kit for the Joomla administrator.
It is not a Joomla template and therefore does not work with the Joomla markup out-of-the-box.

<p class="sg-alert">This software is not released yet. Things might change!</p>

![DOCman using Joomlatools UI](/joomlatools/images/docman.png)

## Concept

This is not a framework like Bootstrap. You can't just copy-paste anything anywhere. Most elements have a predefined spot. 

Get started quickly by copy-pasting the [list examples](/#/section/4) and [form examples](/#/section/5).

### Why not just use [Bootstrap](http://getbootstrap.com/) or [Foundation](http://foundation.zurb.com/)?

The reason we created a new framework is because:

- We want an "App" feeling by leveraging [CSS's Flexible Box Layout](https://www.w3.org/TR/css-flexbox-1/)
- We need a non-flexible grid layout where everything has it's own spot. This might sound counter-productive but read on to understand why we chose this approach
- We want to leverage modern methodologies like [BEM](https://en.bem.info/methodology/) and [Atomic Design](http://atomicdesign.bradfrost.com/)
- We didn't want to pollute the markup with classes like `span12` which don't say anything

#### But I still see Bootstrap markup and classes?

That's right. We are using a couple of Bootstrap 3 modules since we don't like to reinvent the wheel.

## How is it built-up

The UI consists of a few different elements:

- Menubar / Titlebar
- Sidebar
- Content area
  - List
    - Toolbar
    - Breadcrumbs
    - Scopebar
    - Table / Grid
  - Form
  
The menubar, titlebar and sidebar are optional.
The content area is required and can contain a list of items or an item form.

All modals are using the same views to keep the interface recognizable.

### The menubar / titlebar (optional)

The menubar holds the main navigation of the application.
It can contain the application logo, login / logout links and links to the main pages of the application.

For modals or other pages that do not have a menubar you could use a titlebar to display what the view is about.

### The sidebar (optional)

The sidebar holds sub-navigation for the content area like links (using the [navigation](/#/section/2.16) molecule), a category or folder tree (using the [tree](/#/section/2.26) molecule), or quick links to pre-defined filters (using the [list](/#/section/2.13) molecule)
All of these elements are navigational elements to change the content of the content area.

### The list view

The list view can consist out of the following elements

- Toolbar
- Breadcrumbs
- Scopebar
- Table / Grid

#### Toolbar

The toolbar should always be placed on top of the list and next to the sidebar.
Never place the toolbar on top of the sidebar since the actions in the toolbar are only applying to the list, and not to the elements in the left sidebar.

The reason that the toolbar is the first element of the list view is because the actions you take (like creating a new item) could ignore the filters that are active on the list below it.
For example you could have a filtered list that only shows items with a certain category. When creating a new item you could choose to add another category ignoring the category filter.

#### Breadcrumbs (optional)

The breadcrumbs display which folder or category we are currently viewing narrowing the results down.

#### Scopebar (optional)

The scopebar is where you can filter items or search within the displayed results.

#### Table / Grid

The table or grid contains the list of items. Ending with the limit and pagination elements on the bottom showing there is more than the items displayed above.

### The form view

The form view can be split up in two columns by using a container element. There are three widths available:

- Full
- Main
- Sub

#### Full

The full container spans the entire width of it's parent.

#### Main

The main container spans 2/3 of it's parent.

All mandatory fields should be in this container.

#### Sub

The sub container spans 1/3 of it's parent.

No mandatory fields should be in this container since the container will be below the main container on small screens.
If you add mandatory fields to this container they could be overseen by users on smaller screens which will cause a lot of irritation.

## How to start?

Since the UI is built using CSS Flexbox the used containers and their order is very important. 

1. Load `modernizr.js`, `jquery.js`, `admin.js` and `admin.css` in the `<head>` element
2. Copy the `fonts/k-icons` folder including files to the same parent as the `css` parent folder. (e.g. `/media/css/` and `/media/fonts/k-icons/`)
3. Add `<div class="koowa-container koowa"></div>` inside the `<body>` element.
4. Make sure that all parents of the `.koowa-container` have the `.k-flex-wrapper` class.
5. Inside the `.koowa-container` you can start building your pages.

The [list examples](/#/section/4) and [form examples](/#/section/5) can be used to quickly build pages.

## Tools and Methodologies

- [Atomic Design](http://atomicdesign.bradfrost.com/)
- [BEM](http://getbem.com/)
- [Bootstrap 3](http://getbootstrap.com/)
- [Grunt](http://gruntjs.com/)
- [jQuery](https://jquery.com/)
- [JqTree](https://mbraak.github.io/jqTree/)
- [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)
- Mobile-First Responsive design and coding philosophy
- [Modernizr](https://modernizr.com/)
- [Normalize](https://necolas.github.io/normalize.css/)
- [Open Iconic](https://useiconic.com/open)
- [SASS](http://sass-lang.com/)
- [Select2](https://select2.github.io/)

## FAQ

### The styling I'm using inside modals is not looking like I expect it to

Always make sure you have at least one `<div>` with a `koowa` class surrounding the elements you want to style.