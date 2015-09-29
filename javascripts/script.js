var main = function () {

    var recipes = [
    {name: "Quiche", 
     secondname: "with spinach",
     text: "1 9-inch deep dish frozen pie crust 1 tablespoon butter 1/2 cup thinly sliced shallots 4 large eggs 1-1/4 cups heavy cream Pinch ground nutmeg 3/4 teaspoon salt 1/8 teaspoon cayenne pepper 1 cup grated Gruyère 1 10-ounce package frozen chopped spinach, defrosted and wrung free of water",
    img: "./gov_site_files/img/6a0115721bb963970b013487b5927c970c-450wi.jpg"},
    
    {name: "Mix",
    secondname: "of fruits",
    text: "blablalalale jflkjfklejflk jklj kejfkjkefjkfejfkej felkjfkejkj",
    img: "./gov_site_files/img/vegetarian-diet.jpg"},
    
    {name: "Pasta",
    secondname: "with green stuff",
    text: "fdfsjfkjflksjlkdj kdjfjkljklfjsklfj ksldjflkjkfjkdsljf e jflkjfklejflk jklj kejfkjkefjkfejfkej felkjfkejkj",
    img: "./gov_site_files/img/Teresa-Carles-Restaurant-Barcelona.jpg"},
    
    {name: "Salad",
    secondname: "fruit",
    text: "fkdjsklfdjfljsdlkf lkjfdlkjfkldsjlkf  kljflkdjflksj lksjdfkjdsklfs lsdkfjdjklfjdkslf klfjlsdkjfd",
    img: "./gov_site_files/img/veggie-food-537x365.jpg"}

]
    
    $("#next_recipe_1").click(function () {
        /*$("#next_recipe_2").addClass('hidden');*/
        $(".recipeName").text('Mix');
        $(".recipeSecondName").text('of fruits');
        $(".recipeText").text('blablalalale jflkjfklejflk jklj kejfkjkefjkfejfkej felkjfkejkj');
        $(".recipeImg").attr("src", "./gov_site_files/img/vegetarian-diet.jpg");
        $("#next_recipe_1").attr("src", "./gov_site_files/img/6a0115721bb963970b013487b5927c970c-450wi.jpg");
    });
    
    $("#next_recipe_2").click(function () {
        /*$("#next_recipe_2").addClass('hidden');*/
        $(".recipeName").text('Pasta');
        $(".recipeSecondName").text('with green stuff');
        $(".recipeText").text('fdfsjfkjflksjlkdj kdjfjkljklfjsklfj ksldjflkjkfjkdsljf e jflkjfklejflk jklj kejfkjkefjkfejfkej felkjfkejkj');
        $(".recipeImg").attr("src", "./gov_site_files/img/Teresa-Carles-Restaurant-Barcelona.jpg");
        $("#next_recipe_2").attr("src", "./gov_site_files/img/vegetarian-diet.jpg");
    });
    
     $("#next_recipe_3").click(function () {
        /*$("#next_recipe_2").addClass('hidden');*/
        $(".recipeName").text(recipes[3].name);
        $(".recipeSecondName").text(recipes[3].secondname);
        $(".recipeText").text(recipes[3].text);
        $(".recipeImg").attr("src", recipes[3].img);
        $("#next_recipe_3").attr("src", recipes[0].img);
    });

}




 $(document).ready(main);





/*{name: "Mix",
    secondname: "",
    text: "",
    img: ""}*/



/*$("#gallery img:nth-child(0)")*/
/*var main = function(){
    $("#settings_tab").hide();
	$('#about').addClass('active-menu');
	$('#settings').addClass('inactive-menu');
}

 $(document).ready(main);*/
