var ABH,actionBarHelper;

function doopen(e){
	// we set the library only when the activity is available
	ABH=require('actionbarhelper').actionBarHelper;
	actionBarHelper=new ABH($.index);

	actionBarHelper.setTitle('Alco Testing 123');
}

function changeTitle(){
	actionBarHelper.setTitle('This is the new title');
}

function setUpButtonUp(){
	actionBarHelper.setUpAction(function(){
		alert('Hey, stop clicking!');
	})
}

function setUpButtonDn(){
	actionBarHelper.setUpAction();
}

function setIcon(){
	actionBarHelper.setIcon('/appicon2.png');
}

function setBackground(){
	actionBarHelper.setBackgroundImage('/appicon2.png');
}

function show(){
	actionBarHelper.show();
}

function hide(){
	actionBarHelper.hide();
}

$.index.open();
