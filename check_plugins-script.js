if (window.s) {
  var plugins = {
    "A plugin" : "v1.0"
  };
  tealiumTools.send(plugins);
} else {
  tealiumTools.sendError('Error', 'SiteCatalyst does not seem to be installed on the current webpage.');
}