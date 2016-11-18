/**
 * Created by Administrator on 2016/11/16.
 */

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var _ = require('underscore');
var Movie = require('./models/movie');
//var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

mongoose.connect('mongodb://localhost/imooc')

app.set('views', './views/pages');
app.set('view engine', 'jade');
//app.use(serveStatic('bower_components'))
//app.use(express.bodyParser());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.listen(port);

console.log('imooc started on port ' + port);

//index page
app.get('/', function (req, res) {
    Movie.fetch(function(err, movie){
        if(err){
            console.log(err)
        }

        res.render('index', {
            title: 'imooc 首页',
            movie: movie
        })
    })

    /*
    res.render('index', {
        title: 'imooc 首页',
        movies: [{
            title: '奇异博士',
            _id: 1
        },{
            title: '奇异博士',
            _id: 2
        },{
            title: '奇异博士',
            _id: 3
        },{
            title: '奇异博士',
            _id: 4
        }]
    })
    */
})

//index page
app.get('/movie/:id', function (req, res) {
    var id = req.params.id;

    Movie.findById(id, function (err, movie) {
        if(err){
            console.log(err);
        }
        res.render('index', {
            title: 'imooc ' + movies.title,
            movie: movie
        })
    })
    /*
    res.render('detail', {
        title: 'imooc 详情页',
        movie: {
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
        }
    })
    */
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
})

// admin update movie
app.get('/admin/update/:id', function(req, res){
    var id = req.params.id;

    if(id){
        Movie.findById(id, function(err, movie){
            res.render('admin', {
                title: 'imooc 后台更新页',
                movie: movie
            })
        })
    }
})

// admin post movie
app.post('/admin/movie/new', function (req, res) {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;

    if(id !== 'undefined') {
        Movie.findById(id, function (err, movie) {
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
        })
    }
    else {
        _movie = new Movie({
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
        })
    }
})

//list page
app.get('/admin/list', function (req, res) {
    
    Movie.fetch(function(err, movie){
        if(err){
            console.log(err)
        }

        res.render('list', {
            title: 'imooc 列表页',
            movie: movie
        })
    })

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
