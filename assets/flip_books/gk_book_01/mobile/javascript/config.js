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
	
	
	;bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#000000";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Hide";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Yes";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="No";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Yes";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.InstructionsButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=81;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1298;;bookConfig.securityType="1";bookConfig.bookTitle="GK_03";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "English",btnFirstPage:"First",btnNextPage:"Next",btnLastPage:"Last",btnPrePage:"Previous",btnGoToHome:"Home",btnDownload:"Download",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnPrint:"Print",btnThumb:"Thumbnails",btnBookMark:"Bookmark",frmBookMark:"Bookmark",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnSocialShare:"Share",btnHelp:"Help",btnAbout:"About",btnSearch:"Search",btnFullscreen:"Fullscreen",btnExitFullscreen:"Exit Fullscreen",btnMore:"More",frmPrintCaption:"Print",frmPrintall:"Print All Pages",frmPrintcurrent:"Print Current Page",frmPrintRange:"Print Range",frmPrintexample:"Example: 2,3,5-10",frmPrintbtn:"Print",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just click the appropriate button below",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website.",frmaboutcaption:"Contact",frmaboutcontactinformation:"Contact Information",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",frmaboutAUTHOR:"Author",frmaboutDESCRIPTION:"Description",frmSearch:"Search",frmToc:"Table Of Contents",btnTableOfContent:"Table Of Contents",btnNote:"Annotation",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slideshow",pnlSearchInputInvalid:"The search text is too short.",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"Add To Page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"Cursor",tltAddHighlight:"Add highlight",tltAddTexts:"Add texts",tltAddShapes:"Add shapes",tltAddNotes:"Add notes",tltAddImageFile:"Add image file",tltAddSignature:"Add signature",tltAddLine:"Add line",tltAddArrow:"Add arrow",tltAddRect:"Add rect",tltAddEllipse:"Add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",lblPages:"Pages",infCopyToClipboard:"Your browser dose not support clipboard, please do it yourself.",lblDescription:"Title",frmLinkLabel:"Link",infNotSupportHtml5:"Your browser does not support HTML5.",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click to view the table of content, bookmarks and share your books via social networks.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Open the thumbnails to overview all book pages.",frmQrcodeCaption:"Scan the bottom two-dimensional code to view with mobile phone."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.080191","y":"0.225795","width":"0.745157","height":"0.011679"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"5"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.072276","y":"0.237900","width":"0.751416","height":"0.016712"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"6"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.071029","y":"0.259527","width":"0.755155","height":"0.015730"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"8"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.078506","y":"0.278205","width":"0.738955","height":"0.016712"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"9"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.074768","y":"0.302781","width":"0.743940","height":"0.011798"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"10"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.074768","y":"0.320477","width":"0.753908","height":"0.013763"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"12"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.071029","y":"0.338172","width":"0.757647","height":"0.015730"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"13"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.071029","y":"0.360783","width":"0.758894","height":"0.016711"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"14"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.071029","y":"0.407969","width":"0.751417","height":"0.018678"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"15"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.073522","y":"0.428614","width":"0.755154","height":"0.016712"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"16"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.078506","y":"0.448274","width":"0.745185","height":"0.015730"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"17"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.078506","y":"0.469902","width":"0.745185","height":"0.015728"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"18"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076014","y":"0.488580","width":"0.742693","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"19"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.068537","y":"0.525936","width":"0.746432","height":"0.018679"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"21"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076014","y":"0.506275","width":"0.740202","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"20"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.074768","y":"0.544615","width":"0.741448","height":"0.018678"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"22"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.078506","y":"0.602615","width":"0.750170","height":"0.012780"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"23"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.073522","y":"0.613428","width":"0.747679","height":"0.019660"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"24"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.069783","y":"0.637022","width":"0.753908","height":"0.018678"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"27"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.080998","y":"0.655700","width":"0.741448","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"29"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.079752","y":"0.677327","width":"0.741448","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"30"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.080998","y":"0.725498","width":"0.736463","height":"0.015728"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"31"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.073522","y":"0.742209","width":"0.751416","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"32"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076014","y":"0.762853","width":"0.750171","height":"0.018678"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"33"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.073522","y":"0.812006","width":"0.753909","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"35"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.072276","y":"0.830684","width":"0.751416","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"36"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.067291","y":"0.854278","width":"0.753909","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"37"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.068537","y":"0.872956","width":"0.755155","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"39"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.066045","y":"0.894583","width":"0.758892","height":"0.011797"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"40"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.062307","y":"0.910312","width":"0.765124","height":"0.018678"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"41"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.080394","y":"0.895566","width":"0.738948","height":"0.027526"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"80"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.082887","y":"0.867057","width":"0.742700","height":"0.019662"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"77"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.075410","y":"0.122883","width":"0.748925","height":"0.025559"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"42"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076656","y":"0.151391","width":"0.743939","height":"0.015728"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"43"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.074164","y":"0.172036","width":"0.755147","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"44"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076656","y":"0.221188","width":"0.745191","height":"0.016712"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"45"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.075410","y":"0.241832","width":"0.748925","height":"0.016712"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"46"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.079149","y":"0.264443","width":"0.742698","height":"0.012779"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"47"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.072919","y":"0.281154","width":"0.746424","height":"0.015730"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"48"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.071671","y":"0.300816","width":"0.753915","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"49"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.071671","y":"0.321460","width":"0.748923","height":"0.016711"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"50"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.072919","y":"0.341121","width":"0.748928","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"51"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076656","y":"0.390274","width":"0.746427","height":"0.016712"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"52"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.075410","y":"0.409936","width":"0.747673","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"53"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.074164","y":"0.428614","width":"0.753911","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"54"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.077903","y":"0.447291","width":"0.743944","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"55"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.079149","y":"0.469902","width":"0.740194","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"57"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.071671","y":"0.488580","width":"0.752664","height":"0.015728"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"58"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.070426","y":"0.507258","width":"0.748917","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"59"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.080394","y":"0.560343","width":"0.738948","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"60"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.074164","y":"0.580988","width":"0.748919","height":"0.013763"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"61"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076656","y":"0.599665","width":"0.748931","height":"0.013763"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"63"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.081642","y":"0.614411","width":"0.743945","height":"0.021627"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"64"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076656","y":"0.638005","width":"0.743939","height":"0.016712"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"65"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.080394","y":"0.660615","width":"0.737712","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"67"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.081642","y":"0.681259","width":"0.737701","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"69"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.077903","y":"0.698954","width":"0.746432","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"70"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.075410","y":"0.745158","width":"0.741444","height":"0.013763"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"71"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076656","y":"0.763836","width":"0.742687","height":"0.017695"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"72"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.076656","y":"0.785463","width":"0.753908","height":"0.015730"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"73"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.079149","y":"0.804142","width":"0.751415","height":"0.014746"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"74"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.077903","y":"0.824786","width":"0.748920","height":"0.015728"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"75"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","location":{"x":"0.074164","y":"0.845430","width":"0.748919","height":"0.016712"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage","pageIndex":"76"}}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false;
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
