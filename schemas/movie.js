var MovieModel = require('../models/movie');
var selector = require('../databaise/Movies');

var movies = [];

function fetchAll(cb) {


	selector.selectAll(function (movieDatas) {
		movies = [];
		if(movieDatas){
			for(var i = 0; i < movieDatas.length; i++){
				movies.push({
					_id: movieDatas[i]._id,
					doctor: movieDatas[i].doctor || null,
					title: movieDatas[i].title || null,
					language: movieDatas[i].language || null,
					country: movieDatas[i].country || null,
					summary: movieDatas[i].summary || null,
					video: movieDatas[i].video || null,
					poster: movieDatas[i].poster || null,
					year: movieDatas[i].year || null,
					createAt: movieDatas[i].createAt || null,
					updateAt: movieDatas[i].updateAt || null
				});
			}
		}
		cb(movies);
	});
}

function fetchById(id, cb) {
	var movie = null;
	console.log("id:" + id)

	selector.selectOne(id, function (movieData) {
		movie = {
			id: id,
			doctor: movieData.doctor || null,
			title: movieData.title || null,
			language: movieData.language || null,
			country: movieData.country || null,
			city: movieData.city || null,
			summary: movieData.summary || null,
			video: movieData.video || null,
			poster: movieData.poster || null,
			year: movieData.year || null,
			createAt: movieData.createAt || null,
			updateAt: movieData.updateAt || null
		};

		console.log("movie: "+movie.id)
		cb(movie);
	})
}

/*
var MovieSchema = new MovieModel({
	doctor: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	video: String,
	poster: String,
	year: Number,
	createAt: Date.now(),
	updateAt: Date.now()
});
*/

function addMovie(movie, cb) {
	selector.addMovie([
		movie.title,
		movie.doctor,
		movie.city,
		movie.year,
		movie.language,
		movie.summary,
		movie.poster,
		movie.video
	], cb);
}

function upadteMovie(movie, cb) {
	selector.updateMovie(movie.id, [
		movie.title,
		movie.doctor,
		movie.city,
		movie.year,
		movie.language,
		movie.summary,
		movie.poster,
		movie.video
	], cb)
}

function deletMovie(id, cb) {
	selector.deletMovie(id, cb);
}


module.exports = {
	fetchAll: fetchAll,
	fetchById: fetchById,
	addMovie: addMovie,
	upadteMovie: upadteMovie,
	deletMovie: deletMovie
}