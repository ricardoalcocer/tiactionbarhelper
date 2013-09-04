var ABH,actionBarHelper;

function doopen(e){
	// we set the library only when the activity is available
	ABH=require('actionbarhelper').actionBarHelper;
	actionBarHelper=new ABH($.win2);
	actionBarHelper.reloadMenu(); // this forces the actionbar to show menu options from XML
	actionBarHelper.setUpAction(function(){
		$.win2.close();
	})
	actionBarHelper.setTitle('New Window');
}