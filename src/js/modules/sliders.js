import $ from "jquery";
import "slick-carousel-latest";

export default () => {
    $(".students__slider").slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.6465 5.64648L15.3536 6.35359L9.70712 12L15.3536 17.6465L14.6465 18.3536L8.29291 12L14.6465 5.64648Z" fill="#121212"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.35354 5.64648L8.64643 6.35359L14.2929 12L8.64643 17.6465L9.35354 18.3536L15.7071 12L9.35354 5.64648Z" fill="#121212"/>\n' +
            '</svg></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
};
