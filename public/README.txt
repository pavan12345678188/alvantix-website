ALVANTIX FAVICON FILES

All supplied raster icons have transparent pixels outside the circular logo.
The SVG file embeds the same PNG artwork, so it is a valid SVG favicon but the
logo artwork itself remains raster-based (not path-based vector artwork).

Copy these files into your website's public/ directory:
favicon.svg
favicon.ico
favicon-16x16.png
favicon-32x32.png
favicon-96x96.png
apple-touch-icon.png
web-app-manifest-192x192.png
web-app-manifest-512x512.png

Then ensure index.html references /favicon.svg, /favicon-96x96.png,
/favicon.ico, and /apple-touch-icon.png. Update site.webmanifest to use
/web-app-manifest-192x192.png and /web-app-manifest-512x512.png if desired.
