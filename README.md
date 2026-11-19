# rollovercollection3 – OHE

TYPO3 "Original Hover Effects" (ten styles, from tympanus.net) for the content elements
**textmedia, media, textpic and image**.
Requires [bootstrap_package](https://github.com/benjaminkott/bootstrap_package) (Bootstrap 5).

| | |
|---|---|
| TYPO3 | 13.4 LTS, 14.3 LTS |
| bootstrap_package | 16.x |
| PHP | 8.2+ |

The extension contains no PHP code and no database tables: it only adds Fluid partials,
TypoScript, page TSconfig and an SCSS theme on top of bootstrap_package.

## Layouts

Choose the layout in the content element, tab *Appearance > Layout*:
**OHE - style#1** (2750) … **OHE - style#10** (2759).

Fields used per image: title, description, link (target of the "more" button; with style #9
the whole box is linked).
The number of columns is the field *Number of columns* of the content element.
Content elements with any other layout are rendered by bootstrap_package as usual.

## Installation

Composer:

    composer require specialistaweb/rollovercollection3

Classic mode: upload the zip in *Admin Tools > Extensions*.

Then activate it for the site, in one of these two ways:

* **Site set (recommended):** *Site Management > Sites > edit site > Sets*, add
  **Rollovercollection 3 - OHE**. It depends on the set "Bootstrap Package: Full Package".
* **TypoScript record:** add the static template **Rollovercollection 3 - OHE** after the
  bootstrap_package TypoScript.

Finally flush all caches.

## Configuration

With the site set, every option is in *Site Management > Settings*, category
**Rollovercollection 3 - OHE**. With a TypoScript record, the same options are constants
(Constant Editor, category *bootstrap package: rollovercollection3-ohe*).

General options (`plugin.tx_rollovercollection3_rollovereffect3.*`):

| Option | Default | Meaning |
|---|---|---|
| `settings.titleRawdataOutput` | 1 | 1 = HTML typed in the image title is kept (cleaned by the TYPO3 HTML sanitizer), 0 = plain text |
| `settings.captionRawdataOutput` | 0 | 1 = HTML of the description is kept (sanitized), 0 = formatted with `lib.parseFunc_RTE` |
| `settings.useButtonMore` | 1 | shows the "more" button when the image has a link |
| `settings.imageMaxWidth` | 1140 | images wider than this are scaled down before delivery, 0 = original file |
| `view.scssPath` | `EXT:rollovercollection3/Resources/Public/Scss/Theme/` | folder containing `theme.scss` |

Style options: 19 SCSS variables `plugin.bootstrap_package.settings.scss.rollover3-*`.
They are handed to the SCSS parser of bootstrap_package, so
`plugin.bootstrap_package.settings.overrideParserVariables` must be enabled (default).

The label of the "more" button is `lib.rollovercollection3.label.readMore`.

## Upgrading from 8.x

Version 9 needs TYPO3 13.4+ and bootstrap_package 16. Sites on TYPO3 12 or on
bootstrap_package 15 or older stay on 8.0.x.

Changes that can be visible on an existing site:

* **The title was always printed as raw HTML**, whatever the configuration (security issue).
  The new option `titleRawdataOutput` (default 1) keeps the HTML but cleans it with the TYPO3
  HTML sanitizer; set it to 0 for plain text.
* **One image file per box instead of five.** Version 8 generated four extra size variants of every
  image (and a `<noscript>` copy) for a lazyload script that bootstrap_package no longer ships.
  The visible image is the same 1140 px version as before (`imageMaxWidth`); the browser now
  loads it lazily (`loading="lazy"`).
* **No more inline `style="opacity: 1.0"` on the image.** It is replaced by an equivalent CSS rule
  in `style_common.scss` (`.rollover3 .view img { opacity: 1 !important; }`), so nothing changes
  on screen and the page works with a Content Security Policy without `unsafe-inline` for styles.
  The inline style was blocking the fade-out of the image on hover in styles #4, #7 and #10:
  delete that rule if you want the original effect.
* **The image `title` attribute is plain text** (HTML tags of the title are removed there).
* The theme CSS shrank from about 35 KB to 12 KB.
* New partials `Media/Rendering/Title` and `Media/Rendering/Description`; the other partial
  names did not change. Adjust your own overrides if you have any.
* With the content element "textmedia", version 8 passed the title option under a wrong name
  (`R2titleRawdataOutput`); all four content elements now get the same settings.
* **"Raw" title and caption are sanitized.** Formatting tags and links are kept; script tags,
  event handler attributes and `javascript:` links are removed.
* Obsolete vendor prefixes (`-webkit-`, `-moz-`, `-o-`, `-ms-` duplicates of standard properties,
  Internet Explorer filters) were removed from the SCSS. The compiled CSS was compared rule by rule:
  every standard declaration is unchanged.
* The static template is now called "Rollovercollection 3 - …" (it was "OHE effects style1-10") and the
  unused plugin "rollovereffect3" is no longer registered.
* Unused files removed: partials for TYPO3 7–11 and their `.OLD`/`.ORI` copies, copies of the
  bootstrap_package audio/video partials (the installed bootstrap_package version is used now),
  `ext_icon.gif`, `Configuration/ExtensionBuilder`.
* The unused constants `view.templateRootPath`, `view.partialRootPath`, `view.layoutRootPath`
  and `persistence.storagePid` were removed.

### Inactive CSS rules

These rules of version 8 had a selector that could never match (a dot is missing before
`gallery-item`), so browsers never applied them. They are commented out in `style_common.scss`
(nothing changes on screen) and can be enabled by fixing the selector:

| Selector in 8.x | Meant for |
|---|---|
| `.gallery-row.rollover3 gallery-item.rollover3` in `@media (max-width: 1024px)` | 3 columns on tablets |
| `.gallery-row.rollover3 gallery-item.rollover3` in `@media (max-width: 720px)` | 2 columns on small tablets |

## License

GPL-2.0-or-later
