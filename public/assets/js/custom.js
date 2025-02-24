(function ($) {
    "use strict";

    let device_width = window.innerWidth;

    if ($(window).width() > 1024) {
        gsap.config({
            nullTargetWarn: false,
            trialWarn: false,
        });
    }

    // Tooltip handling for title
    $(document).on('mouseenter mouseleave mousemove', '[data-tooltip-tit]', function (e) {
        if (e.type === 'mouseenter') {
            createTooltip($(this));
        } else if (e.type === 'mouseleave') {
            removeTooltip();
        } else if (e.type === 'mousemove') {
            updateTooltipPosition(e);
        }
    });

    function createTooltip(element) {
        $('<div class="div-tooltip-tit"></div>')
            .text(element.attr('data-tooltip-tit'))
            .appendTo('.portfolio-info-flow-section')
            .fadeIn();
    }

    function removeTooltip() {
        $('.div-tooltip-tit').remove();
    }

    function updateTooltipPosition(e) {
        $('.div-tooltip-tit').css({
            top: e.pageY + 13,
            left: e.pageX + 10
        });
    }

    // Tooltip handling for subtitle
    $(document).on({
        mouseenter: function () {
            $('<div class="div-tooltip-sub"></div>')
                .text($(this).attr('data-tooltip-sub'))
                .appendTo('.portfolio-info-flow-section')
                .fadeIn();
        },
        mouseleave: function () {
            $('.div-tooltip-sub').remove();
        },
        mousemove: function (e) {
            $('.div-tooltip-sub').css({
                top: e.pageY - 20,
                left: e.pageX + 10
            });
        }
    }, '[data-tooltip-sub]');

    // Horizontal scrolling animation
    if (device_width > 1200) {
        var workflow_section_3 = document.querySelector('.horizontal-scrolling-wrapper');

        if (workflow_section_3) {
            let duration = 1,
                sections = gsap.utils.toArray(".single-scroll"),
                sectionIncrement = duration / (sections.length - 1),
                tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".horizontal-scrolling-wrapper",
                        pin: true,
                        scrub: 1,
                        start: "-80px top",
                        end: "+=5000"
                    }
                });

            tl.to(sections, {
                xPercent: -100 * (sections.length - 1),
                duration: duration,
                ease: "none"
            });

            sections.forEach((section, index) => {
                let tween = gsap.from(section, {
                    opacity: 0,
                    scale: 1,
                    duration: 0.5,
                    force3D: true,
                    paused: true
                });

                addSectionCallbacks(tl, {
                    start: sectionIncrement * (index - 0.99),
                    end: sectionIncrement * (index + 0.99),
                    onEnter: () => tween.play(),
                    onLeave: () => tween.reverse(),
                    onEnterBack: () => tween.play(),
                    onLeaveBack: () => tween.reverse()
                });

                index || tween.progress(1);
            });

            function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
                let trackDirection = animation => {
                    let onUpdate = animation.eventCallback("onUpdate"),
                        prevTime = animation.time();

                    animation.direction = animation.reversed() ? -1 : 1;
                    animation.eventCallback("onUpdate", () => {
                        let time = animation.time();
                        if (prevTime !== time) {
                            animation.direction = time < prevTime ? -1 : 1;
                            prevTime = time;
                        }
                        onUpdate && onUpdate.call(animation);
                    });
                };

                let empty = v => v;
                timeline.direction || trackDirection(timeline);

                start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
                end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
            }
        }
    }

    // Star rating system
    $('.star-icon').each(function () {
        let self = $(this);

        $(this).on('mouseenter', function () {
            $(this).prevAll().addBack().css("color", "#FBB03B");
        });

        $(this).on('mouseout', function () {
            if (!$(this).parent().attr("data-rating")) {
                $(this).prevAll().addBack().css("color", "#787878");
            } else {
                $(this).siblings().addBack().each(function (index) {
                    index + 1 <= $(this).parent().attr("data-rating") ? $(this).css("color", "#FBB03B") : $(this).css("color", "#787878");
                });
            }
        });

        $(this).on('click', function () {
            $(this).parent().attr("data-rating", $(this).prevAll().length + 1);
        });
    });

    // Dropdown menu toggling
    jQuery('.dropdown-icon2').on('click', function () {
        jQuery(this).toggleClass('active').next('.submenu-list').slideToggle();
        jQuery(this).parent().siblings().children('.submenu-list').slideUp();
        jQuery(this).parent().siblings().children('.active').removeClass('active');
    });

    // Animated menu text
    document.querySelectorAll('.main-menu > li > a').forEach(button => {
        button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>';
    });

    setTimeout(() => {
        var menu_text = document.querySelectorAll(".menu-text span");

        menu_text.forEach((item) => {
            var font_sizes = window.getComputedStyle(item, null);
            let font_size = font_sizes.getPropertyValue("font-size");
            let size_in_number = parseInt(font_size.replace("px", ""));
            let new_size = parseInt(size_in_number / 3) + "px";

            if (item.innerHTML == " ") {
                item.style.width = new_size;
            }
        });
    }, 1000);

   // Scroll to top button functionality
   document.addEventListener("DOMContentLoaded", function () {
    let circleContainer = document.querySelector(".circle-container");
    let circlePath = document.querySelector(".circle-container path");

    // Keep checking if elements exist before running the script
    let checkElements = setInterval(() => {
        circleContainer = document.querySelector(".circle-container");
        circlePath = document.querySelector(".circle-container path");

        if (circleContainer && circlePath) {
            clearInterval(checkElements);
            initScrollToTop(circleContainer, circlePath);
        }
    }, 100);
});

function initScrollToTop(circleContainer, circlePath) {
    let offset = 50;
    let pathLength = circlePath.getTotalLength();

    circlePath.style.strokeDasharray = pathLength;
    circlePath.style.strokeDashoffset = pathLength;

    let updateLoader = () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let height = docHeight - winHeight;
        let progress = pathLength - (scrollTop * pathLength / height);
        circlePath.style.strokeDashoffset = progress;

        if (scrollTop > offset) {
            circleContainer.classList.add("active");
        } else {
            circleContainer.classList.remove("active");
        }
    };

    circleContainer.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.onscroll = () => {
        updateLoader();
    };

    updateLoader();
}



})(jQuery);
