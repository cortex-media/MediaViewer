MediaViewer
===========

Media Viewer Plugin for Cordova Android.

This plugin opens media files like videos or PDFs with the installed native apps on an Android phone via Intents.

This plugin borrows the general idea and some code from
https://github.com/dawsonloudon/VideoPlayer

Usages
===========

MediaViewer.view("file:///android_asset/www/videos/video.mp4", "video/*"); 
MediaViewer.view("file:///android_asset/www/pdf/document.pdf", "application/pdf");

The examples assume that the files sit in the asset folder, which is probably the default
for many phonegap apps. But other locations work as well.

The second argument is the mime-type used by the native Android intent.
