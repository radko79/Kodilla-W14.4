var movies = [
	{
		id: 1,
		title: '12 Monkeys',
		director: 'Terry Gilliam',
		genre: 'Sci-Fi',
		year: '1995',
		pic: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sci-fimovieposters.co.uk%2Fimages%2Fposters-1-9%2FNo-0012_12_Monkeys_one_sheet_movie_poster_s.jpg&f=1'
	},
	{
		id: 2,
		title: 'Basic',
		director: 'John McTiernan',
		genre: 'Action, Crime, Drama',
		year: '2003',
		img: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fecx.images-amazon.com%2Fimages%2FI%2F518c2p87NNL._SL160_.jpg&f=1'
	},
	{
		id: 3,
		title: 'Blade Runner 2049',
		director: 'Denis Villeneuve',
		genre: 'Drama, Mystery, Sci-Fi',
		year: '2017',
		img: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oElUdUMagRXix6ceUXrDkAAAAA%26amp%3Bpid%3D15.1&f=1'
	},
	{
		id: 4,
		title: 'The Butler',
		genre: 'Drama, Facts',
		year: '2012',
		director: 'xxx',
		pic: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fthebutlerdiditservice.yolasite.com%2Fresources%2Fbutler_clipart.jpg&f=1'
	},
	{
		id: 5,
		title: 'Interstellar',
		genre: 'Sci-Fi',
		year: '2015',
		director: 'werwer',
		pic: 'http://www.puffgames.com/images/interstellar-the-flash-game.png'
	}
];

var MovieList = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('li', {},
				React.createElement(MovieTitle, {movie: this.props.movie}),
				React.createElement(MovieGenre, {movie: this.props.movie}),
				React.createElement(MovieYear, {movie: this.props.movie}),
				React.createElement(MovieDirector, {movie: this.props.movie}),
				React.createElement(MoviePoster, {movie: this.props.movie})
			)
		)
	}
});

var MovieTitle = React.createClass({
	propTypes: {    movie: React.PropTypes.object.isRequired,  },
	render: function() {
		return (          React.createElement("h1", {}, this.props.movie.title)      )
	}
});

var MovieGenre = React.createClass({
	propTypes: {    movie: React.PropTypes.object.isRequired,  },
	render: function() {
		return (          React.createElement("p", {}, this.props.movie.genre)      )
	}
});

var MovieYear = React.createClass({
	propTypes: {    movie: React.PropTypes.object.isRequired,  },
	render: function() {
		return (          React.createElement("p", {}, this.props.movie.year)      )
	}
});

var MovieDirector = React.createClass({
	propTypes: {    movie: React.PropTypes.object.isRequired,  },
	render: function() {
		return (          React.createElement("p", {}, this.props.movie.director)      )
	}
});

var MoviePoster = React.createClass({
	propTypes: {    movie: React.PropTypes.object.isRequired,  },
	render: function() {
		return (          React.createElement("img", {src: this.props.movie.pic})      )
	}
});

var Movie = React.createClass({
	render: function() {
		var moviesElements = movies.map(function (movie) {
			return React.createElement(MovieList, {key: movie.id, movie: movie})
		});
		return (			React.createElement("ul", {}, moviesElements			)
		)
	}
});

var element = React.createElement(Movie, {movies:movies });
ReactDOM.render(element, document.getElementById("app"));
