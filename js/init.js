$(document).ready(function(){
 function htmSliderHorisont(){
    /*подсветка слайда*/
    var slideLight = $('.slide_item');        
    /* Клик на слайд */     
    slideLight.click(function(){
        if(!slideLight.is(':animated')){
            slideLight.css('backgroundColor','#c5ccdd')
            $('.slide-title').css('color','#575e70')
            $(this).css('backgroundColor','#828999')
            .find('.slide-title')
            .css('color','#fff')
        };
    });    
 };
 function htmSliderVertical1(){
    var listM1 = $('#listMusic1');
    var listItem1 = $('.list_music__item1');
    var listHeight1 = $('.list_music__item1').outerHeight();
    var scrollList1 = listM1.position().top - listHeight1;
    var nextArrow1 = $('#nextAr1');
    /* Клик по ссылке */
    listItem1.click(function(){
        listItem1.css('backgroundColor','#9ba8c7');
        $(this).css('backgroundColor','#79849f');    
    });
    /* Клик по ссылке на следующий слайд */
    nextArrow1.click(function(){
        if(!listM1.is(':animated')) {
            listM1.animate({top: scrollList1}, 50, function(){
                listM1
                .find('.list_music__item1:first')
                .appendTo(listM1)
                .parent()
                .css({'top': 0});
            });
        };
    });
 }
  function htmSliderVertical2(){
    var listM2 = $('#listMusic2');
    var listItem2 = $('.list_music__item2');
    var listHeight2 = $('.list_music__item2').outerHeight();
    var scrollList2 = listM2.position().top - listHeight2;
    var nextArrow2 = $('#nextAr2');
    /* Клик по ссылке */
    listItem2.click(function(){
        listItem2.css('backgroundColor','#9ba8c7');
        $(this).css('backgroundColor','#79849f');    
    });
    /* Клик по ссылке на следующий слайд */
    nextArrow2.click(function(){
        if(!listM2.is(':animated')) {
            listM2.animate({top: scrollList2}, 50, function(){
                listM2
                .find('.list_music__item2:first')
                .appendTo(listM2)
                .parent()
                .css({'top': 0});
            });
        };
    });
 } 
 function htmSliderVertical3(){
    var listM3 = $('#listMusic3');
    var listItem3 = $('.list_music__item3');
    var listHeight3 = $('.list_music__item3').outerHeight();
    var scrollList3 = listM3.position().top - listHeight3;
    var nextArrow3 = $('#nextAr3');
    /* Клик по ссылке */
    listItem3.click(function(){
        listItem3.css('backgroundColor','#9ba8c7');
        $(this).css('backgroundColor','#79849f');    
    });
    /* Клик по ссылке на следующий слайд */
    nextArrow3.click(function(){
        if(!listM3.is(':animated')) {
            listM3.animate({top: scrollList3}, 50, function(){
                listM3
                .find('.list_music__item3:first')
                .appendTo(listM3)
                .parent()
                .css({'top': 0});
            });
        };
    });
 };
 function funcClickMy(){
    $('#title1').css('color','#050506').css('backgroundColor','#cbd1e2'); 
    $('#title2').css('color','#fff').css('backgroundColor','#909dbc');
    $('#title3').css('color','#fff').css('backgroundColor','#909dbc');  
 };
 function funcClickNew(){
    $('#title2').css('color','#050506').css('backgroundColor','#cbd1e2');
    $('#title1').css('color','#fff').css('backgroundColor','#909dbc');
    $('#title3').css('color','#fff').css('backgroundColor','#909dbc');  
 };
 function funcClickBest(){
    $('#title3').css('color','#050506').css('backgroundColor','#cbd1e2');
    $('#title2').css('color','#fff').css('backgroundColor','#909dbc');
    $('#title1').css('color','#fff').css('backgroundColor','#909dbc');   
 };
 
 /*функции слайдеров*/
 htmSliderHorisont();
 htmSliderVertical1();
 htmSliderVertical2();
 htmSliderVertical3();
 /*функции переключателя*/
document.getElementById('title1').addEventListener("click", funcClickMy);
document.getElementById('title2').addEventListener("click", funcClickNew);
document.getElementById('title3').addEventListener("click", funcClickBest);
});
