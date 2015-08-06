# Custom Tealium Tool to check SiteCat plugins

This is a custom Tealium Tool to check for some known plugins to Adobe Analytics
(a.k.a. SiteCatalyst).

## What plugins are supported?

The list is growing. Currently I am checking for:

 * Channel Manager plugin
 * Form Analysis plugin
 * and various utilities

## Installation

If you are an existing Tealium customer and you have access to the Tealium Learning
Community, then you can follow the [instructions in the knowledge base](tlc). The 
relevant parts are duplicated here. 

  [tlc]: https://community.tealiumiq.com/posts/860742

Install the Tealium Tools from the [Chrome Web Store][chrome] if you don't have it already.

  [chrome]: chrome.google.com/webstore/detail/tealium-tools/gidnphnamcemailggkemcgclnjeeokaa

Click on the Tealium logo in the browser to open Tealium tools.

![Tealium tools](https://content0.bloomfire.com/thumbnails/contents/000/426/957/_1000x1000.png?AWSAccessKeyId=AKIAIKMPP7FRDWCQ22UA&Expires=2147385600&Signature=JPZ5iY7sHNpcJDhEnyqJ2iMpVvo%3D&f=1435257038)

Click on the Custom Tools button, then on the big Plus button, then on "Add Custom Tools".

![Add Custom Tool](https://content3.bloomfire.com/thumbnails/contents/000/426/963/_1000x1000.png?AWSAccessKeyId=AKIAIKMPP7FRDWCQ22UA&Expires=2147385600&Signature=L8w2XRjJrBF6V%2F%2B0aViSHGDxRdU%3D&f=1435257568)

Add this configuration data to the text box:

```json
{
  "id": "check_sitecat_plugins",
  "icon_url": "https://tealium-tools.s3.amazonaws.com/tools/logo.png",
  "title": "Check SiteCatalyst Plugins",
  "description": "This tool checks for the existence of various SiteCatalyst plugins.",
  "scripts": {
    "check_plugins": {
      "title": "SiteCatalyst plugins",
      "description": "Check the version of the plugins installed in SiteCatalyst.",
      "button_label": "Scan plugins",
      "template": "https://rawgit.com/fiann/tealium-tools-sitecat-plugins/master/check_plugins-template.html",
      "js": "https://rawgit.com/fiann/tealium-tools-sitecat-plugins/master/check_plugins-script.js",
      "remote_js": true,
      "remote_template": true
    }
  }
}
```

Click the Add Custom Tool button and you should be all set.