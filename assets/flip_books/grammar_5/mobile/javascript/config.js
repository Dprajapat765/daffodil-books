	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#000000";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Hide";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Yes";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="No";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.InstructionsButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=120;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1298;;bookConfig.securityType="1";bookConfig.bookTitle="Grammar05";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "English",btnFirstPage:"First",btnNextPage:"Next",btnLastPage:"Last",btnPrePage:"Previous",btnGoToHome:"Home",btnDownload:"Download",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnPrint:"Print",btnThumb:"Thumbnails",btnBookMark:"Bookmark",frmBookMark:"Bookmark",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnSocialShare:"Share",btnHelp:"Help",btnAbout:"About",btnSearch:"Search",btnFullscreen:"Fullscreen",btnExitFullscreen:"Exit Fullscreen",btnMore:"More",frmPrintCaption:"Print",frmPrintall:"Print All Pages",frmPrintcurrent:"Print Current Page",frmPrintRange:"Print Range",frmPrintexample:"Example: 2,3,5-10",frmPrintbtn:"Print",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just click the appropriate button below",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",frmaboutcaption:"Contact",frmaboutcontactinformation:"Contact Information",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",frmaboutAUTHOR:"Author",frmaboutDESCRIPTION:"Description",frmSearch:"Search",frmToc:"Table Of Contents",btnTableOfContent:"Table Of Contents",btnNote:"Annotation",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slideshow",pnlSearchInputInvalid:"The search text is too short.",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"Add To Page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"Cursor",tltAddHighlight:"Add highlight",tltAddTexts:"Add texts",tltAddShapes:"Add shapes",tltAddNotes:"Add notes",tltAddImageFile:"Add image file",tltAddSignature:"Add signature",tltAddLine:"Add line",tltAddArrow:"Add arrow",tltAddRect:"Add rect",tltAddEllipse:"Add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",lblPages:"Pages",infCopyToClipboard:"Your browser dose not support clipboard, please do it yourself.",lblDescription:"Title",frmLinkLabel:"Link",infNotSupportHtml5:"Your browser does not support HTML5.",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click to view the table of content, bookmarks and share your books via social networks.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Open the thumbnails to overview all book pages.",frmQrcodeCaption:"Scan the bottom two-dimensional code to view with mobile phone."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.205461","y":"0.225115","width":"0.635850","height":"0.020310"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"5"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.207625","y":"0.249657","width":"0.636931","height":"0.019465"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"7"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.205461","y":"0.275046","width":"0.635850","height":"0.016080"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"12"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.206543","y":"0.293664","width":"0.635849","height":"0.020312"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"15"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.206543","y":"0.317361","width":"0.638012","height":"0.018618"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"20"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.206543","y":"0.365599","width":"0.642338","height":"0.015234"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"27"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.201136","y":"0.341057","width":"0.643420","height":"0.019465"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"24"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.203299","y":"0.383372","width":"0.644500","height":"0.016925"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"30"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.200054","y":"0.408761","width":"0.644502","height":"0.015233"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"35"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.204380","y":"0.429918","width":"0.636932","height":"0.020312"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"39"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.200054","y":"0.451075","width":"0.644502","height":"0.015234"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"43"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.201136","y":"0.475618","width":"0.648827","height":"0.014386"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"50"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.202218","y":"0.493390","width":"0.642338","height":"0.016926"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"54"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.202218","y":"0.516240","width":"0.646664","height":"0.016925"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"57"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.203299","y":"0.538244","width":"0.648826","height":"0.018618"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"65"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.203299","y":"0.564479","width":"0.646664","height":"0.016079"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"70"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.203299","y":"0.584790","width":"0.652069","height":"0.015233"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"73"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.204380","y":"0.608487","width":"0.648827","height":"0.015233"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"76"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.200054","y":"0.627105","width":"0.653153","height":"0.016080"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"80"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.201136","y":"0.644030","width":"0.654233","height":"0.022850"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"84"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.202218","y":"0.672804","width":"0.649907","height":"0.013541"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"87"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.202218","y":"0.692269","width":"0.654233","height":"0.016080"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"90"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.206543","y":"0.715120","width":"0.638012","height":"0.016926"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"94"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.204380","y":"0.737123","width":"0.642338","height":"0.019465"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"98"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.205461","y":"0.757435","width":"0.644502","height":"0.016925"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"100"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.203299","y":"0.780284","width":"0.644500","height":"0.016080"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"101"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.202218","y":"0.804827","width":"0.655315","height":"0.012694"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"103"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.198974","y":"0.827676","width":"0.662884","height":"0.011849"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"105"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.197892","y":"0.847141","width":"0.659640","height":"0.018618"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"107"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.201136","y":"0.870838","width":"0.647745","height":"0.016079"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"111"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.206543","y":"0.892841","width":"0.653151","height":"0.018618"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"116"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
