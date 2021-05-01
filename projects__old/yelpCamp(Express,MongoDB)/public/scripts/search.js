$('#campground-search').on('change', function() {
  
  setTimeout(() => {
    var search = $(this).serialize();
    if(search === "search=") {
      search = "all"
    }
  
    $.ajax({
      url: '/campgrounds?' + search,
      method: 'GET',
      beforeSend: function () { // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
        $('#campground-grid').css('display', 'none');
        $('.sk-cube-grid').css('display', 'block');
        $('.pages').css('display', 'none');
      },
      complete: function() {
        setTimeout(() => {
          $('.sk-cube-grid').css('display', 'none');
        }, 3000);
      }
    })
      .done(function(data) {
        setTimeout(() => {
          $('#campground-grid').css('display', 'flex');
          $('#campground-grid').html('');
        if (data.length <= 0) {
          $('#campground-grid').append(`
          <div class="container">
            <div class="alert alert-dark" role="alert">
            <h3 class="alert-heading">Sorry, nothing was found!</h3>
            <a href="/campgrounds" class="btn btn-dark"><b>GO BACK TO THE FRONT PAGE</b></a>
            <hr>
            <p class="mb-0">Or try searching again.</p>
            </div>
          </div>
          `).hide().fadeIn(500);
        }
        if (data.length >= 8) {
          setTimeout(() => {
            $('.pages').css('display', 'block').hide().fadeIn(500);
          }, 300)
        } else {
          $('.pages').css('display', 'none');
        }
        data.forEach(function(campground) {
          if (campground.likes.length <= 0) {
            $('#campground-grid').append(`
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div class="card">
                <img src="${ campground.image }" class="card-img-top" alt="${campground.name}">
                <div class="card-body">
                  <h5 class="card-title">${ campground.name }</h5>
                  <a href="/campgrounds/${ campground._id }" class="btn btn-primary">More Info</a>
                  <span  class="btn btn-dark">
                    <i class="far fa-heart"></i> <span class="badge badge-light">${campground.likes.length}</span>
                    <span class="sr-only">Likes count</span>
                  </span>
                  ${reviews()}
                  </div>
              </div>
            </div>
          `).hide().fadeIn(500);
          } else {
            $('#campground-grid').append(`
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div class="card">
                <img src="${ campground.image }" class="card-img-top" alt="${campground.name}">
                <div class="card-body">
                  <h5 class="card-title">${ campground.name }</h5>
                  <a href="/campgrounds/${ campground._id }" class="btn btn-primary">More Info</a>
                  <span  class="btn btn-dark">
                    <i class="fas fa-heart"></i> <span class="badge badge-light">${campground.likes.length}</span>
                    <span class="sr-only">Likes count</span>
                  </span>
                  ${reviews()}
              </div>
            </div>
          `).hide().fadeIn(500);
          }

          function reviews() {
            switch(true) {
              case (campground.rating > 0 && campground.rating <= 1.5):
                return `
                <div class="mt-2">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                `;
              case (campground.rating > 1.5 && campground.rating <= 2.5):
                return `
                <div class="mt-2">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                `;
              case (campground.rating > 2.5 && campground.rating <= 3.5):
                return `
                <div class="mt-2">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                `;
              case (campground.rating > 3.5 && campground.rating <= 4.5):
                return `
                <div class="mt-2">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                `;
              case (campground.rating > 4.5 && campground.rating <= 5):
                return `
                <div class="mt-2">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
                `;
              default:
                return `
                <div class="mt-2">
                  <em>No reviews yet.</em>
                </div>
                `
            }
          };

        });
        }, 3000);
    })
  }, 1000);

});

$('#campground-search').submit(function(event) {
  event.preventDefault();
});
