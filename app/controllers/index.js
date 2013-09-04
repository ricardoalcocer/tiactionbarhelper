function doopen(e){
	var ABH=require('actionbarhelper').actionBarHelper;
	var actionBarHelper=new ABH($.index);

	actionBarHelper.setTitle('Alco Testing 123');
}

function changeTitle(){
	var ABH=require('actionbarhelper').actionBarHelper;
	var actionBarHelper=new ABH($.index);

	actionBarHelper.setTitle('This is the new title');
}

function setUpButtonUp(){
	var ABH=require('actionbarhelper').actionBarHelper;
	var actionBarHelper=new ABH($.index);	

	actionBarHelper.setUpAction(function(){
		alert('Hey, stop clicking!');
	})
}

function setUpButtonDn(){
	var ABH=require('actionbarhelper').actionBarHelper;
	var actionBarHelper=new ABH($.index);	

	actionBarHelper.setUpAction();
}

function setIcon(){
	var ABH=require('actionbarhelper').actionBarHelper;
	var actionBarHelper=new ABH($.index);	

	actionBarHelper.setIcon('/appicon2.png');
}

function setBackground(){
	var ABH=require('actionbarhelper').actionBarHelper;
	var actionBarHelper=new ABH($.index);	

	actionBarHelper.setBackgroundImage('/appicon2.png');
}

function show(){
	var ABH=require('actionbarhelper').actionBarHelper;
	var actionBarHelper=new ABH($.index);	

	actionBarHelper.show();
}

function hide(){
	var ABH=require('actionbarhelper').actionBarHelper;
	var actionBarHelper=new ABH($.index);	

	actionBarHelper.hide();
}

$.index.open();
