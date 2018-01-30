import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
    constructor() {
        this.header = $(".site-header");
        this.headerTrigger = document.querySelector(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.smoothScroll();
    }

    smoothScroll() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        const that = this;
        new Waypoint({
            element: this.headerTrigger,
            handler: function(direction) {
                if (direction == "down") {
                    that.header.addClass("site-header--dark");
                } else {
                    that.header.removeClass("site-header--dark");
                }
            }
        }); 
    }

    createPageSectionWaypoints() {
        const that = this;
        this.pageSections.each(function() {
            const currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "down") {
                        const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "35%"
            });
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "up") {
                        const matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }

}

export default StickyHeader;