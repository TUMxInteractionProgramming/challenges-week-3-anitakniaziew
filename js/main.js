/* switching channels, changing the name and location in right app bar */
function switchChannel(channelName) {
    console.log('Tuning into channel',channelName);
    document.getElementById('main-channel').innerHTML=channelName;
    document.getElementById('main-location').innerHTML="upgrading.never.helps";
    document.getElementById('main-location').href="http://w3w.co/upgrading.never.helps";
    document.getElementById('main-location').target="_blank";
    $('li').removeClass('selected');
    $("li:contains('"+channelName+"')").addClass('selected');
} 

/* changes the app bar's star to unstarred when clicking on a channel */
function unfillStar() {
    $('#bar-star').attr("src","http://ip.lfe.mw.tum.de/sections/star-o.png");
    $('#bar-star').attr("alt","not starred");
}

/* changes the app bar's star to starred when clicking on it */
function fillStar() {
    $('#bar-star').attr("src","http://ip.lfe.mw.tum.de/sections/star.png");
    $('#bar-star').attr("alt","starred");
}

/* changing selected tab */
function selectTab(tabId) {
    console.log("Changing to tab",tabId);
    $('#tab-bar button').removeClass('selected');
    $('#'+tabId).addClass('selected');
}

/* shows/hides emoji box when clicking */
function showEmoji() {
    $('#emojis').toggle();
}