# ActionBar Helper Class and Example

## Summary

This CommonJS class for Appcelerator Titanium wraps the Android ActionBar functionalities so it is super easy to implement.

## Installation
Grab the file from the /dist folder.  Decompress this file onto **/modules/commonjs** on your app's root folder, the folder with tiapp.xml.  If **/modules/commonjs** doesn't exists, create it.

Then open your **tiapp.xml**, scroll down to the modules section and add a reference to this module:

	<module platform="commonjs">com.alcoapps.actionbarhelper</module>

## Example usage

To use the ActionBarHelper class, simply require and call it, passing your window as argument.

Note: To work with the ActionBar your Android activity needs to exist.  This means that initial settings for the ActionBar need to be performed on the "Open" event of your Window.

```javascript
var actionBarHelper = require('com.alcoapps.actionbarhelper')($.index);	

actionBarHelper.setTitle('This is my window title');
```

## License

MIT - [http://alco.mit-license.org/]()
