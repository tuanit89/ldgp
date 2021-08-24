$(".nav .nav_item").on("click", function(){
    let el = $(this),
        hash = el.get(0).hash;
    if(el.hasClass('active'))
        return false;

    $(".nav .nav_item.active").removeClass('active');
    el.addClass('active');

    $(".tab-content .tab-pane.show").removeClass('show');
    $(hash).addClass('show');
});

if(location.hash != "" && location.hash != null){
    $(".nav .nav_item.active").removeClass('active');
    $(".tab-content .tab-pane.show").removeClass('show');
    $(location.hash).addClass('show');
    $(".nav .nav_item[href='"+location.hash+"']").addClass('active');
}