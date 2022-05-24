//------------- Content Area Min Heihgt -----------
let calculateAndApplyMinHeight = function () {
    let topbarHeight = $('.top-ribbon-blue').outerHeight();
    let navbarHeight = $('.navbar-wrapper').outerHeight();
    let headerHeight = $('.navbar-wrapper').length > 0 ? topbarHeight+navbarHeight: 0;
    let footerHeight = $('footer').outerHeight();
    let windowHeight = $(window).outerHeight();
    let contentAreaHeight = windowHeight - (footerHeight + headerHeight);
    $('main').css('min-height', contentAreaHeight > 0 ? contentAreaHeight : 0);
  };
  
  $(document).ready(function () {
    if(self === top){
      setTimeout(function () {
        calculateAndApplyMinHeight();
      }, 0);
    }
  });