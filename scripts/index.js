let userAgent = navigator.userAgent;
if((userAgent .match(/safari/i))&&!(userAgent .match(/chrome|chromium|crios/i))){
    alert("safari");
} else {
    location.replace("/404/404.html");
}