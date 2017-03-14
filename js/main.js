/**
 * Created by lwy on 2017/3/7.
 */
;$(function () {
    'use strict';
    var sidebar = $('#sidebar'), /*选择侧栏*/
        mask = $('.mask'),/*选择mask*/
        backButton=$('.back_to_top'),/*选择返回菜单*/
        sidebar_trigger = $('#sidebar_trigger');/*选择侧栏触发器*/

    function showSideBar() {//显示侧栏
        mask.fadeIn();//显示mask
        sidebar.css('transform','translate(0,0)');//调整侧栏相关的css
    }
    function hideSideBar() {//隐藏侧栏
        mask.fadeOut();//隐藏mask
        sidebar.css('transform', 'translate('+sidebar.width()+'px'+',0)');//调整侧栏相关的css
    }

    sidebar_trigger.on('click',showSideBar);//监听侧栏触发器
    mask.on('click', hideSideBar);//监听mask

    /*回到顶部*/
    function backToTop() {
        $('html,body').animate({/*让滚动跳转到相对应的高度*/
            scrollTop: 0
        }, 800);
    }
    backButton.on('click', backToTop);//监听返回按钮点击事件

    $(window).on('scroll', function () {//监听window的scroll事件
        //如果已滚动的部分高于窗口高度
        if ($(window).scrollTop() > $(window).height())
            //显示返回按钮
            backButton.fadeIn();
            //否则隐藏返回按钮
        else
            backButton.fadeOut();
    });
    //触发scroll事件，避免刷新的时候显示回到顶部按钮
    $(window).trigger('scroll');
})