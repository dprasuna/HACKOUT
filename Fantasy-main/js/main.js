$(document).ready(function () {
    document.body.classList.add("stopScrolling");
    $(this).scrollTop(0);
    /* -----------------
        Loader
    --------------*/
    window.addEventListener("load", function () {
        /* -------------------- Page Loader--------------------- */
        document.querySelector(".pageLoader").classList.add("fade-out");
        setTimeout(function () {
            document.querySelector(".pageLoader").style.display = "none";
            document.body.classList.remove("stopScrolling");
        }, 600);
    });
});


/* -----------------
Prevent "Other links" link item behaviour
--------------*/
$(".disabled").click(function (ev) {
    ev.preventDefault();
});


/* -----------------
Trigger To Top Button
--------------*/

$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({
        scrollTop: 0
    }, 40);
});


/* -----------------
Applying LighBox For Gallery Section
--------------*/
lightGallery(document.querySelector('.gallery .container'), {
    getCaptionFromTitleOrAlt: true,
    preload: 1,
});
lightGallery(document.getElementById('captions'));


/* -----------------
Trigger count down for events section
--------------*/
var countDate = new Date('Jan 1, 2022 00:00:00').getTime();

function newYear() {
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function () {
    newYear();
}, 1000);

/* -----------------
Changing Video on Click
--------------*/
let listVideo = document.querySelectorAll('.videoList .vid');
let mainVideo = document.querySelector('.mainVideo video');
let title = document.querySelector('.mainVideo .title');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});

/* -----------------
Create Counter Up For Stats
--------------*/
"use strict"

document.addEventListener("DOMContentLoaded", function () {
    // You can change this class to specify which elements are going to behave as counters.
    var elements = document.querySelectorAll(".scroll-counter")

    elements.forEach(function (item) {
        // Add new attributes to the elements with the '.scroll-counter' HTML class
        item.counterAlreadyFired = false
        item.counterSpeed = item.getAttribute("data-counter-time") / 45
        item.counterTarget = +item.innerText
        item.counterCount = 0
        item.counterStep = item.counterTarget / item.counterSpeed

        item.updateCounter = function () {
            item.counterCount = item.counterCount + item.counterStep
            item.innerText = Math.ceil(item.counterCount)

            if (item.counterCount < item.counterTarget) {
                setTimeout(item.updateCounter, item.counterSpeed)
            } else {
                item.innerText = item.counterTarget
            }
        }
    })

    // Function to determine if an element is visible in the web page
    var isElementVisible = function isElementVisible(el) {
        var scroll = window.scrollY || window.pageYOffset
        var boundsTop = el.getBoundingClientRect().top + scroll
        var viewport = {
            top: scroll,
            bottom: scroll + window.innerHeight,
        }
        var bounds = {
            top: boundsTop,
            bottom: boundsTop + el.clientHeight,
        }
        return (
            (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
            (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
        )
    }

    // Funciton that will get fired uppon scrolling
    var handleScroll = function handleScroll() {
        elements.forEach(function (item, id) {
            if (true === item.counterAlreadyFired) return
            if (!isElementVisible(item)) return
            item.updateCounter()
            item.counterAlreadyFired = true
        })
    }

    // Fire the function on scroll
    window.addEventListener("scroll", handleScroll)
});

/* -----------------
Start Page Scroll Indicator
--------------*/
window.onscroll = function () {
    scrollProgress()
};

function scrollProgress() {
    var currentState = document.body.scrollTop || document.documentElement.scrollTop;
    var pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollStatePercentage = (currentState / pageHeight) * 100;
    document.querySelector(".page-scroll-indicator > .topProgress").style.width = scrollStatePercentage + "%";
}

/* -----------------
Start Skill bar Animation
--------------*/
const skillSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.skills .container .skillsItems .skill .progress .progressBar');

function showProgress() {
    progressBars.forEach(progressBar => {

        const value = progressBar.dataset.progress;

        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const sectionPosition = skillSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (sectionPosition < screenPosition) {
        showProgress();
    } else {
        hideProgress();
    }
});
