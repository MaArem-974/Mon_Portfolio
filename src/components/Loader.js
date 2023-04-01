

export const Loader = () => {



$(function(props) {

    "use strict";

      // page loading
  $(document).ready(function() {
    anime({
      targets: '.art-preloader .art-preloader-content',
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: 'linear',
      complete: function(anim) {

      }
    });
    anime({
      targets: '.art-preloader',
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: 'linear',
      complete: function(anim) {
        $('.art-preloader').css('display', 'none');
      }
    });
  });



}

return (

    <div class="art-preloader">

      <div class="art-preloader-content">

        <h4 class="art-name">Portfolios</h4>

        <div id="preloader" class="art-preloader-load"></div>
      </div>

    </div>



)


}