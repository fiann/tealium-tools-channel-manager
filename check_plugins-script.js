/**
 * A Tealium Tool to identify the Adobe SiteCatalyst plugins that are installed on
 * on a web page.
 */

/* global tealiumTools */
(function(tealiumTools) {
  "use strict";

  // 1. Try to find the "real" s object that contains the plugins
  var namespaces = ["tealium_s", "s"];
  var s = null;
  for (var i = 0; i < namespaces.length; i++) {
    var namespace = namespaces[i];
    if (typeof window[namespace] === "object") {
      s = window[namespace];
      break;
    }
  }

  if (s === null) {
    tealiumTools.sendError("Error",
      "SiteCatalyst is not found on the current webpage.");
    return;
  }

  // 2. Check for plugins
  function isFunction(func) {
    return (typeof func === "function");
  }

  var plugins = {
    "Channel Manager": isFunction(s.channelManager),
    "Form Analysis plugin": isFunction(s.setupFormAnalysis)
  };

  var plugins_found = [],
    plugins_not_found = [];
  for (var name in plugins) {
    if (plugins.hasOwnProperty(name)) {
      if (plugins[name] === true) {
        plugins_found.push(name);
      } else {
        plugins_not_found.push(name);
      }
    }
  }

  var data = {
    "plugins": plugins,
    "plugins_found" : plugins_found,
    "plugins_not_found" : plugins_not_found
  };

  tealiumTools.send(data);






})(tealiumTools);