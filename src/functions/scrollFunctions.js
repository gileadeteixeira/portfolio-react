export const getTopByRef = (element)=>{
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
};

export const scrollToPosition = (to)=>{    
    /*window.scroll({
        top: to,
    });*/
    smoothScrollTo(0, to);
};

export const scrollOnClick = (event)=>{
    event.preventDefault();
    const to = getTopByRef(event.target);
    scrollToPosition(to);
};

export const sectionOnScroll = (sections)=>{
    const scrollY = window.pageYOffset;
    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add("active__link");
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove("active__link");

        }
    });
}

export const filterBarFixed = ()=>{
    const scrollY = window.pageYOffset;
    const headerHeight = document.querySelector("#header").offsetHeight;
    const menuItemContact = document.querySelector(".nav__menu a[href*='contact']");
    const filterBar = document.querySelector("section#techs #filter-bar");
    const filterBarOffsetTop = filterBar.offsetTop;
    const filterBarHeight = filterBar.offsetHeight;
    const previousElementOffsetOp = filterBar.previousElementSibling.offsetTop;
    const nextElement = filterBar.nextElementSibling;
    
    //console.log(scrollY, previousElementOffsetOp + headerHeight)
    if (scrollY >= filterBarOffsetTop - headerHeight && scrollY >= previousElementOffsetOp + headerHeight) {
        filterBar.classList.add("fixed");
        //console.log(filterBarOffsetTop + headerHeight)
        nextElement.style.marginTop = `calc(${filterBarHeight}px + 1.5em)`;
    } else {
        filterBar.classList.remove("fixed");
        nextElement.style.marginTop = "0";
    }

    if (menuItemContact.classList.contains("active-link")){
        const currentModal = document.querySelector("section#techs .custom-modal__container");
        if (currentModal != null) {
            const parent = currentModal.parentElement;
            parent.removeChild(currentModal);
        }
        filterBar.classList.remove("fixed");
        nextElement.style.marginTop = "0";
    }

    //console.log(scrollY, sectionTechOffsetBottom);
}


export const scrollToTop = (scrollerTop)=>{
    if (window.pageYOffset >= 200) {
        scrollerTop.classList.add("scroller__top__open");
        scrollerTop.addEventListener("click", (event)=>{
            event.preventDefault();
            scrollToPosition(0);
        });
    }
    else {
        scrollerTop.classList.remove("scroller__top__open");
    }
}

export const scrollToFilter = (scrollerTech)=>{
    const headerHeight = document.querySelector("#header").offsetHeight;
    const filterBar = document.querySelector("section#techs #filter-bar");
    const filterBarBottom = filterBar.offsetTop + filterBar.offsetHeight;
    const item = document.querySelector("section#techs .custom-list__box");
    let itemHeight = 0;
    if (item != null) {
        itemHeight = item.offsetHeight;
    }
    const menuItemContact = document.querySelector(".nav__menu a[href*='contact']");
    const yOffset = filterBarBottom - headerHeight - itemHeight;
    if (window.pageYOffset >= yOffset-25) {
        scrollerTech.classList.add("scroll-tech-open");
        scrollerTech.addEventListener("click", (event)=>{
            event.preventDefault();
            scrollToPosition(filterBar.offsetTop - headerHeight -20);
        });
    } else {
        scrollerTech.classList.remove("scroll-tech-open");
    }

    if (menuItemContact.classList.contains("active-link")){
        scrollerTech.classList.remove("scroll-tech-open");
    }
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 export const smoothScrollTo = (endX, endY, duration)=>{
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
        clearInterval(timer);
    }
    window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
}