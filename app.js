/**
 * Created by Administrator on 2016/11/16.
 */

var express = require('express');
var path = require('path');
//var mongoose = require('mongoose');
//var _ = require('underscore');
var Movie = require('./schemas/movie');

//var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views/pages');
app.set('view engine', 'jade');
//app.use(serveStatic('bower_components'))
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/videos', express.static(path.join(__dirname, 'videos')));
app.listen(port);

console.log('imooc started on port ' + port);

// admin addMovie
app.post('/v1/addMovie', function (req, res) {
    var movie = req.body;
    Movie.addMovie(movie, function (id) {
        res.redirect('/movie/' + id);
    });
});

// admin update movie
app.post('/v1/updateMovie', function (req, res) {
    var movie = req.body;

    Movie.upadteMovie(movie, function (id) {
        res.redirect('/movie/' + id);
    })

});

// admin delete movie
app.get('/v1/deletMovie/:id', function (req, res) {
    var id = req.params.id;

    Movie.deletMovie(id, function () {
        res.redirect('/admin/list');
    });
})

//index page
app.get('/', function (req, res) {
    Movie.fetchAll(function (movies) {
        res.render('index', {
            title: 'xingkong 首页',
            movies: movies
        })
    });
});

//index page
app.get('/movie/:id', function (req, res) {
    var id = req.params.id;
    console.log(id)
    Movie.fetchById(id, function (movie) {
        res.render('detail', {
            title: 'xingkong 详情页',
            movie: movie
        })
    })
})

//index page
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页',
        movie: {
            title: '',
            doctor: '',
            city: '',
            country: '',
            year: '',
            poster: '',
            video: '',
            summary: '',
            language: ''
        }
    })
});

// admin update movie page
app.get('/update/:id', function (req, res) {
    var id = req.params.id;

    if (id) {
        Movie.fetchById(id, function (movie) {
            res.render('update', {
                title: 'xingkong 后台更新页',
                movie: movie
            })
        })
    }
});


// admin post movie
app.post('/admin/movie/new', function (req, res) {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;

    if (id !== 'undefined') {
        /*Movie.findById(id, function (err, movie) {
         if(err) {
         console.log(err);
         }

         _movie = _.extend(movie, movieObj);
         _movie.save(function (err, movie) {
         if(err ){
         console.log(err);
         }
         res.redirect('/movie/' + movie._id);
         })
         })*/
    }
    else {
        /* _movie = new Movie({
         doctor: movieObj.doctor,
         title: movieObj.title,
         country: movieObj.country,
         language: movieObj.language,
         year: movieObj.year,
         poster: movieObj.poster,
         summary: movieObj.summary,
         video: movieObj.video
         })

         _movie.save(function (err, movie) {
         if(err){
         console.log(err)
         }

         res.redirect('/movie/' + movie._id)
         })*/
    }
})

//list page
app.get('/admin/list', function (req, res) {

    Movie.fetchAll(function (movies) {
        res.render('list', {
            title: 'xingkong 列表页',
            movies: movies
        })
    });
    /* Movie.fetch(function(err, movie){
     if(err){
     console.log(err)
     }

     res.render('list', {
     title: 'imooc 列表页',
     movie: movie
     })
     })*/

    /*
     res.render('list', {
     title: 'imooc 列表页',
     movie: [{
     title: '奇异博士',
     _id: 1,
     country: '美国',
     doctor: '斯科特·德瑞克森',
     language: '英语',
     year: '2016-11-04',
     summary: '出色的神经外科医生斯蒂芬·斯特兰奇（本尼迪克特·康伯巴奇 Benedict Cumberbatch 饰）在遭遇了一次车祸悲剧之后，必须将自负抛在一边，学习一个不为人知的玄学、多维空间世界的秘密。在纽约的格林威治村，奇异博士将充当起现实世界和世外的中间人，利用浩瀚的超自然的能力和神器来保护漫威电影宇宙。',
     poster: 'https://img1.doubanio.com/view/photo/photo/public/p2394282297.jpg',
     video: 'ftp://10.3.5.110/myvideo.mp4',
     name: 'myvideo.mp4'
     }]
     })
     */
})

app.get('/download/', function (req, res) {
    res.download('./videos/' + req.query.movieName);
})
