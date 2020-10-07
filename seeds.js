var mongoose = require('mongoose');
var Campground = require('./models/campgrounds');
var Comment = require('./models/comment');

function seedDB(){
    //dummy data
    var data = [
        {
            name: "Aurangabad",
            image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Lovely night life"
        },
        {
            name: "Mumbai",
            image: "https://images.unsplash.com/photo-1519981337-7295e387c157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Lovely day life"
        },
        {
            name: "Kolkata",
            image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "Lovely and sweet food" 
        },
        {
            name: "Nashik",
            image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            description: "My favorite place" 
        }
    ]

    //Remove All Campgrounds
    Campground.deleteMany({}, function(err){
        if(err)
            console.log(err);
        else{
            Comment.deleteMany({}, (err) =>{
                if(err)
                    console.log(err);
                else{
                    data.forEach((seed) => {
                        Campground.create(seed, (err, campground) => {
                            if(err)
                                console.log(err);
                            else{
                                Comment.create({
                                    text: "This place is great, but I wish there was internet",
                                    author: "Homer"
                                }, (err, comment) => {
                                    if(err)
                                        console.log(err);
                                    else{
                                        campground.comments.push(comment);
                                        campground.save();
                                    }
                                })
                            }
                        })
                    })
                }
            })
        }
    })
}

module.exports = seedDB;