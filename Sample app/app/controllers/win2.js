var actionBarHelper;

function doopen(e){
	// we set the library only when the activity is available
	actionBarHelper=require('com.alcoapps.actionbarhelper')($.win2);
	actionBarHelper.reloadMenu(); // this forces the actionbar to show menu options from XML
	actionBarHelper.setUpAction(function(){
		$.win2.close();
	})
	actionBarHelper.setTitle('New Window');
}