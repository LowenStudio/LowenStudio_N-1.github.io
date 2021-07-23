let userAgent = navigator.userAgent;
if((userAgent .match(/safari/i))&&!(userAgent .match(/chrome|chromium|crios/i))){
    alert("safari");
} else {
    alert("other");
}