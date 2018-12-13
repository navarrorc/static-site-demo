// Import the browser-sync module and create an "instance"
var browserSync = require("browser-sync").create();

/**
 * This example will serve files from the '_site/' directory
 * and will automatically watch for html/css/js changes
 */
browserSync.init({
  watch: true,
  open: false,
  server: "_site/" // relative to the root level
});
