/*-
 * cordova MediaViewer Plugin for Android
 *
 * Created by Cortex Media MIT Licensed
 * Revised for Cordova 3.3+ by Dawson Loudon (2013) MIT Licensed
 *
 * Usages:
 *
 * VideoPlayer.play("http://path.to.my/video.mp4");
 * VideoPlayer.play("file:///path/to/my/video.mp4");
 * VideoPlayer.play("file:///android_asset/www/path/to/my/video.mp4");
 * VideoPlayer.play("https://www.youtube.com/watch?v=en_sVVjWFKk");
 */
var exec = require("cordova/exec");

var MediaViewer = {
    view: function(url, type) {
        exec(null, null, "MediaViewer", "viewMedia", [url,type]);
    }
};

module.exports = MediaViewer;

