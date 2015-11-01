$(document).ready(function() {
    generateContent();
    sidebarShow();
    smoothScroll();
    cateDisplay();
    scrollToTop();
})


/*生成目录*/
function generateContent() {
    var h = $("h1,h2,h3,h4,h5,h6",".primary .post-content");
    for(var i=0;i<h.length;i++){
        $(h[i]).before("<a name='link" + i +"'></a>");
        $("<li><a href='#link" + i + "'></a></li>").appendTo("#content .content-text");
        $(h[i]).clone().appendTo("#content .content-text li:last a");
    }
}

/*锚链接平滑滚动*/
function smoothScroll(){   
    $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 56;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                500);
                return false;
            }
        }
    });
}

/*点击categories时展开post分类列表*/
function cateDisplay(){
    var cate=$(".cat-item");
    cate.click(function(){
        /*这是什么鬼？
        for(var kk in this){
            console.log(kk);
            console.log(this[kk]);
        }
        */
        var catePostList=$(this.nextElementSibling);
        catePostList.css("display") == "block" ? catePostList.slideUp(200) : catePostList.slideDown(200);
        return false;
    });
}


//点击回到顶部
function scrollToTop() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#scroll-to-top").fadeIn(200);
        } else {
            $("#scroll-to-top").fadeOut(200);
        }
    });
    $("#scroll-to-top").click(function() {
        $('html,body').animate({
            scrollTop: 0
        },
        500);
        return false;
    });
}


/*滑动侧栏*/
function sidebarShow(){
    var sec=$(".secondary");
    var secRight=$(".secondary").css("right");
    var secWidth=$(".secondary").css("width");
    $("#menu-icon").click(function(){
        secRight=$(".secondary").css("right");
        secWidth=$(".secondary").css("width");
        if(secRight == "0px"){
            $(".secondary").css("right","-"+secWidth);
        }else{
                $(".secondary").css("right","0");            
        }
    });

    /*点击侧栏内链接时隐藏侧栏,单击cat-item时不隐藏*/
    $("a:not(.cat-item)",sec).click(function(){
        if( $("#menu-icon").css("display") == "block" ){
            $(".secondary").css("right","-"+secWidth);
        }
    });
    /*点击外部隐藏侧栏*/
    $("*",".primary").click(function(){
        if( $("#menu-icon").css("display") == "block" ){
            $(".secondary").css("right","-"+secWidth);
        }
    });

}

/*站内搜索功能*/