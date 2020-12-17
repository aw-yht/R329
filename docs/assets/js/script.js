$(function() {

  $('main div.md-content img').each(function() {
    $this = $(this);
    if ($this.parent('a').length > 0) {
      return;
    }
  
    $this.wrap('<a class="simpleLightbox" href="'+ $this.attr('src') +'"></a>');
  });

  $('a.simpleLightbox').simpleLightbox();

});