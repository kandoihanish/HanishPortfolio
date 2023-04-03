var about_links= document.getElementsByClassName("aboutlinks");
var abouttitle_parts= document.getElementsByClassName("abouttitleparts");
function openabouttitle(tabname){
    for (  aboutlink of about_links){
        console.log(aboutlink);
        aboutlink.classList.remove("activelink");
    }
    for(abouttitlepart of abouttitle_parts){
        abouttitlepart.classList.remove("activetitlepart");
    }
    window.event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetitlepart")
}