function loading()
{
    document.getElementById("loader").style.display="none"
}
$(document).ready(function()
{
    $(this).scrollTop(0);
    var stickyNavTop=$(".box").offset().top;
    $(window).scroll(function()
    {
        if($(this).scrollTop()>stickyNavTop)
        {
            $(".box").addClass("stickyy");
            $('.goTop').css("opacity","1")
        }
        else
        {
            $(".box").removeClass("stickyy");
            $('.goTop').css("opacity","0")
        }
    })
    // preloader

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        nav:false,
        responsive:{
            0:{
                items:1,
                
            },
            768:{
                items:2,
                
            },
            992:{
                items:3,
            
            }
        }
    })
    // slidingnavbar
    const a=document.getElementById("slidingnavbar");
    const b=document.getElementById("btn");
    const cancel=document.getElementById("cancel");
    b.addEventListener("click",function()
    {
        a.classList.add('add');
    })
    cancel.addEventListener('click',function()
    {
        a.classList.remove('add');
    })
    //circular counter 
    let options={
        startAngle:-1.55,
        value: 0,
        size: 100,
        lineCap: "round",
        thickness:15,
        fill: {
            gradient: [ "red"]
        },
        animation:{
            duration:1000
        }
    }
    $('.common .bar').circleProgress(options).on('circle-animation-progress',function(event,progress,stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2))+"%");
    });

var waypoint2 = new Waypoint({
    element: document.querySelector('.circle1'),
    handler: function(direction) {
        $(".circle1 .bar").circleProgress({
            value:0.65
        })
        $(".progressbar1").attr('style',  'animation: linearbar1 1s ease  forwards');
        this.destroy()
} ,offset: '70%'
})
var waypoint2 = new Waypoint({
    element: document.querySelector('.circle2'),
    handler: function(direction) {
        $(".circle2 .bar").circleProgress({
            value:0.75
        })
        $(".progressbar2").attr('style',  'animation: linearbar2 1s ease  forwards');
        this.destroy()
} ,offset: '70%'
})
var waypoint3 = new Waypoint({
    element: document.querySelector('.circle3'),
    handler: function(direction) {
        $(".circle3 .bar").circleProgress({
            value:0.80
        })
        $(".progressbar3").attr('style',  'animation: linearbar3 1s ease  forwards');
        this.destroy()
} ,offset: '70%'
})
var waypoint4 = new Waypoint({
    element: document.querySelector('.progressbar'),
    handler: function(direction) {
        $(".progressbar").attr('style',  'animation: linearbar 1s ease  forwards');
    this.destroy()
} ,offset: '90%'
})
    // counter-up
    $('.count').counterUp({
        delay: 10,
        time: 1000,
        
    });
    
})






