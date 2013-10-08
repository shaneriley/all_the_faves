# All the Faves
## Renders varying sized favicons based on a large source image

The plugin, by default, renders four icons that correspond to the four icon
sizes that various iOS devices use. You can pass a different set of widths
at the time you call render.

The plugin looks for an element with a rel attribute of base_icon and expects
it to have an href attribute pointing to the base image to work from. Ideally
you would create a link tag in your head like this:

```html
<link rel="base_icon" href="/path/to/large_icon.png" />
```

Note that the tried and true 16x16 version is not generated, and should not be.
This should be handled manually, as the reduction in size most often leads to
a blurry mess rather than a recognizable favicon.

## Usage

```javascript
AllTheFaves.render();
```

## Options

You probably won't have to override these, but in the event you want to change
the sizes output, the rel attributes, or the selector used to find the base
image, you can override them like so:

```javascript
AllTheFaves.render({
  sizes: [{
    side: 256,
    rel: "shortcut icon"
  }, 144, 114, 72, 57],
  default_rel: "android-icon",
  selector: "[rel=my_icon]"
});
```
