
var favRecipe = {
	title: "omg",
	servings: "5",
	ingredients: ["a", "b", "c"]
};

	console.log(favRecipe.title);
	console.log("serves:" + " " + favRecipe.servings);
	console.log("Ingredients");
	console.log(favRecipe.ingredients[0]);
	console.log(favRecipe.ingredients[1]);
	console.log(favRecipe.ingredients[2]);


// --------------------	

var books = [
	{title: "kite Runner",
	 authur: "khaled hussaini",
	 read: "yes"},

	{title: "A", 
	 authur: "B", 
	 read: "no"},

	{title: "C", 
	 authur: "D", 
	 read: "yes"},

	{title: "E", 
	 authur: "F", 
	 read: "no"}
];

console.log(books[0].title + " " + books[0].authur + " " + books[0].read);
console.log(books[1].title + " " + books[1].authur + " " + books[1].read);
console.log(books[2].title + " " + books[2].authur + " " + books[2].read);
console.log(books[3].title + " " + books[3].authur + " " + books[3].read);

// -------------


var movie = [
	{title: "kite Runner",
	 duration: "3 hours",
	 stars: ["a", "b", "c"]},

	{title: "kite Runner",
	 duration: "3 hours",
	 stars: "5"},

	{title: "kite Runner",
	 duration: "3 hours",
	 stars: ["a", "b", "c"]},

	{title: "kite Runner",
	 duration: "3 hours",
	 stars: ["a", "b", "c"]}
];



function printMovie() {
	console.log(movie[0].title + " " + movie[0].duration + " and the stars are " + movie[0].stars);
}

printMovie();







