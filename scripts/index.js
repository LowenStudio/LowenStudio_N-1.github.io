let userAgent = navigator.userAgent;
if((userAgent .match(/safari/i))&&!(userAgent .match(/chrome|chromium|crios/i))){
    console.log(userAgent);
} else {
    location.replace("/404/404.html");
}