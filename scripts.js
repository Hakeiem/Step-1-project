window.onscroll = function onScroll(){
    let bar = window.scrollY;
    let pageHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let diff = pageHeight - windowHeight
    let percentage = (bar *100) / diff;
    document.querySelector('.progress_bar').style.width = `${percentage}%`;
}