var handler = require('../util/handle_error');

function Movie (movieData) {
	var id = movieData.id || null,
		doctor = movieData.doctor || null,
		title = movieData.title || null,
		language = movieData.language || null,
		country = movieData.country || null,
		summary = movieData.summary || null,
		video = movieData.year || null,
		poster = movieData.poster || null,
		year = movieData.year || null,
		meta = movieData.meta || null;
}

Movie.prototype.setId = function(id) {
	if(id = Number){
		this.id = id;
	}else{
		handler.console('id must be a instand of Number');
	}
};

Movie.prototype.setDoctor = function(doctor) {
	if(doctor = String){
		this.doctor = doctor;
	}else{
		handler.console('doctor must be a instand of String');
	}
};

Movie.prototype.setTitle = function(title) {
	if(title = String){
		this.title = title;
	}else{
		handler.console('title must be a instand of String');
	}
};

Movie.prototype.setLanguage = function(language) {
	if(language = String){
		this.language = language;
	}else{
		handler.console('language must be a instand of String');
	}
};

Movie.prototype.setCountry = function(country) {
	if(country = String){
		this.country = country;
	}else{
		handler.console('country must be a instand of String');
	}
};

Movie.prototype.setSummary = function(summary) {
	if(summary = String){
		this.summary = summary;
	}else{
		handler.console('summary must be a instand of String');
	}
};

Movie.prototype.setVideo= function(video) {
	if(video = String){
		this.video = video;
	}else{
		handler.console('video must be a instand of Stringvideo');
	}
};

Movie.prototype.setPoster = function(poster) {
	if(poster = String){
		this.poster = poster;
	}else{
		handler.console('poster must be a instand of String');
	}
};

Movie.prototype.setYear = function(year) {
	if (year = Number) {
		this.year = year;
	}else{
		handler.console('year must be a instand of Number');
	}
};


Movie.prototype.setId = function(id) {
	if(id = Number){
		this.id = id;
	}else{
		handler.console('id must be a instand of Number');
	}
};



Movie.prototype.getDoctor = function(or) {
	if(this.doctor = String){
		this.doctor = doctor;
	}else{
		handler.console('doctor must be a instand of String');
	}
};
/*
Movie.prototype.getTitle = function(e) {
	if(this.title = String){
		this.title = title;
	}else{
		handler.console('title must be a instand of String');
	}
};

Movie.prototype.getLanguage = function(uage) {
	if(this.language = String){
		this.language = language;
	}else{
		handler.console('language must be a instand of String');
	}
};

Movie.prototype.getCountry = function(try) {
	if(this.country = String){
		this.country = country;
	}else{
		handler.console('country must be a instand of String');
	}
};

Movie.prototype.getSummary = function() {
	if(this.summary = String){
		this.summary = summary;
	}else{
		handler.console('summary must be a instand of String');
	}
};

Movie.prototype.getVideo= function() {
	if(this.video = String){
		this.video = video;
	}else{
		handler.console('video must be a instand of Stringvideo');
	}
};

Movie.prototype.getPoster = function() {
	if(this.poster = String){
		this.poster = poster;
	}else{
		handler.console('poster must be a instand of String');
	}
};

Movie.prototype.getYear = function() {
	if(this.year = Number) {
		this.year = year;
	}else{
		handler.console('year must be a instand of Number');
	}
};

Movie.prototype.getCreateAt = function() {
	if(this.createAt) {
		this.createAt = createAt;
	}else{
		handler.console('createAt must be a instand of Date');
	}
};

Movie.prototype.getUpdateAt = function() {
	if(this.updateAt = Date) {
		this.updateAt = updateAt;
	}else{
		handler.console('updateAt must be a instand of Date');
	}
};


meta = {
			createAt: {
				type: Date,
				default: Date.now()
			},
			updateAt: {
				type: Date,
				default: Date.now()
			}
		}*/


module.exports = Movie;