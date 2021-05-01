var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");
var User = require("../models/user");
var Notification = require("../models/notification");
var Comment = require("../models/comment");
var Review = require("../models/review");
var middleware = require("../middleware");
var { isLoggedIn, checkUserCampground, checkUserComment, isAdmin, isSafe} = middleware; // destructuring assignment

// Define escapeRegex function for search feature
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

//INDEX - show all campgrounds
router.get("/", function(req, res){
    var perPage = 8;
    var pageQuery = parseInt(req.query.page);
    var pageNumber = pageQuery ? pageQuery : 1;
    if(req.query.search && req.xhr) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Campground.find({name: regex}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(function (err, allCampgrounds) {
            Campground.count({name: regex}).exec(function (err, count) {
                if (err) {
                    console.log(err);
                    res.redirect("back");
                } else {
                    if (req.xhr){
                      res.status(200).json(allCampgrounds);
                    } else {
                      res.render("campgrounds/index", {
                          campgrounds: allCampgrounds,
                          current: pageNumber,
                          pages: Math.ceil(count / perPage),
                          search: req.query.search
                      });
                    }
                }
            });
        });
    } else {
        // get all campgrounds from DB
        Campground.find({}).skip((perPage * pageNumber) - perPage).limit(perPage).exec(function (err, allCampgrounds) {
            Campground.count().exec(function (err, count) {
                if (err) {
                    console.log(err);
                } else {
                  if(req.xhr){
                      res.status(200).json(allCampgrounds);
                  } else {
                      res.render("campgrounds/index", {
                          campgrounds: allCampgrounds,
                          page: 'campgrounds',
                          current: pageNumber,
                          pages: Math.ceil(count / perPage),
                          search: false
                      });
                  }  
                }
            });
        });
    }
  });

//CREATE - add new campground to DB
router.post("/", isLoggedIn, isSafe, async function(req, res){
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
      id: req.user._id,
      username: req.user.username
  }
  
  var cost = req.body.cost;

  var newCampground = {name: name, image: image, description: desc, cost: cost, author:author};

  try {
    let campground = await Campground.create(newCampground);
    let user = await User.findById(req.user._id).populate('followers').exec();
    let newNotification = {
      username: req.user.username,
      campgroundId: campground.id
    }
    for(const follower of user.followers) {
      let notification = await Notification.create(newNotification);
      follower.notifications.push(notification);
      follower.save();
    }

    //redirect back to campgrounds page
    res.redirect(`/campgrounds/${campground.id}`);
  } catch(err) {
    req.flash('error', err.message);
    res.redirect('back');
  }
});

//NEW - show form to create new campground
router.get("/new", isLoggedIn, function(req, res){
   res.render("campgrounds/new"); 
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments likes reviews").exec(function(err, foundCampground){ // likes
        if(err || !foundCampground){
            console.log(err);
            req.flash('error', 'Sorry, that campground does not exist!');
            return res.redirect('/campgrounds');
        }
        console.log(foundCampground)
        //render show template with that campground
        res.render("campgrounds/show", {campground: foundCampground});
    });
});

// Campground Like Route
router.post("/:id/like", middleware.isLoggedIn, function (req, res) {
  Campground.findById(req.params.id, function (err, foundCampground) {
      if (err) {
          console.log(err);
          return res.redirect("/campgrounds");
      }

      // check if req.user._id exists in foundCampground.likes
      var foundUserLike = foundCampground.likes.some(function (like) {
          return like.equals(req.user._id);
      });

      if (foundUserLike) {
          // user already liked, removing like
          foundCampground.likes.pull(req.user._id);
      } else {
          // adding the new user like
          foundCampground.likes.push(req.user);
      }

      foundCampground.save(function (err) {
          if (err) {
              console.log(err);
              return res.redirect("/campgrounds");
          }
          return res.redirect("/campgrounds/" + foundCampground._id);
      });
  });
});

// EDIT - shows edit form for a campground
router.get("/:id/edit", isLoggedIn, checkUserCampground, function(req, res){
  //render edit template with that campground
  res.render("campgrounds/edit", {campground: req.campground});
});

// PUT - updates campground in the database
router.put("/:id", isSafe, function(req, res){
    var newData = {name: req.body.name, image: req.body.image, description: req.body.description, cost: req.body.cost};
    Campground.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, campground){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("success","Successfully Updated!");
            res.redirect("/campgrounds/" + campground._id);
        }
    });
});

// DELETE - removes campground and its comments from the database
router.delete("/:id", isLoggedIn, checkUserCampground, function(req, res) {
    Comment.remove({
      _id: {
        $in: req.campground.comments
      }
    }, function(err) {
      if(err) {
          req.flash('error', err.message);
          res.redirect('/');
      } else {
          req.campground.remove(function(err) {
            if(err) {
                req.flash('error', err.message);
                return res.redirect('/');
            }
            req.flash('error', 'Campground deleted!');
            res.redirect('/campgrounds');
          });
      }
    }),
    Review.remove({
        _id: {
          $in: req.campground.reviews
        }
      }, function(err) {
        if(err) {
            req.flash('error', err.message);
            res.redirect('/');
        }
      })
});

module.exports = router;

