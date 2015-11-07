//'use strict';
window.onload = function() {
	
	//JSON
	var items = '{"items" :	[' +
    '{"id": 1,"name": "Kind of Apple" , "subtitle":"Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac" , "description": "Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac" , "stars": 2 , "price": "1$" },' +
    '{"id": 2,"name": "Kind of Apple" , "subtitle": "Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac" ,  "description": "Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac" , "stars": 1 , "price": "1$" },' +
	'{"id": 3,"name": "Kind of Apple" , "subtitle": "Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac" ,  "description": "Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac" , "stars": 3 , "price": "1$" },' +
	'{"id": 4,"name": "Kind of Apple" , "subtitle": "Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac" , "description": "Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac", "stars": 3 , "price": "1$" },' +
	'{"id": 5,"name": "Kind of Apple" , "subtitle": "Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac", "description": "Lorem ipsum dolor sit amet, maiores ornareac, maiores ornareac" , "stars": 2 , "price": "1$" } ]}';


	var json = JSON.parse(items);
	
	//build the list of shop items
	var item_list="";
	for (var i=0; i<json.items.length;i++) {
		var item_number=json.items[i].id; 
	    item_list+='<li class="col-3 "><div class="product"><img src="blog_test_files/img/img.PNG"><h1 id="header'+ item_number +' " >'+json.items[i].name + " " + json.items[i].id +'</h1><h3 id="subtitle' + item_number + ' ">'+json.items[i].subtitle+'</h3><p id="description' + item_number+ ' ">'+json.items[i].description+'</p><div class="stars bottom_info" id="stars' + item_number+ '"><span>☆</span><span>☆</span><span>☆</span></div><div class="price bottom_info" id="price' +item_number +'">'+json.items[i].price+'</div><button class="buy bottom_info" id="'+item_number+'">buy</button></div></li>'
	}
	
	//add the list of the shop-items to the page
	document.getElementById("item_list").innerHTML = item_list;
	
	//show the popup window
	function popup_show () {
		document.getElementById("popup").style.visibility = "visible";
	};
	
	//close the popup window
	function popup_hide() {
		document.getElementById("popup").style.visibility = "hidden";
	};	
	
	//build the popup window data
	function build_popup(in_id) {
		var idid=in_id-1;
	    document.getElementById("popup_header").innerHTML = json.items[idid].name + " " +json.items[idid].id;
	    document.getElementById("popup_subtitle").innerHTML = json.items[idid].subtitle;
	    document.getElementById("popup_info").innerHTML = json.items[idid].description;
		document.getElementById("popup_price").innerHTML = json.items[idid].price;
	}

	function popup_fnc(the_id) {
		build_popup(the_id); 
		popup_show();
	}
    
	//buy button events
	document.getElementById("1").onclick = function() {popup_fnc(this.id)};
	document.getElementById("2").onclick = function() {popup_fnc(this.id)};
	document.getElementById("3").onclick = function() {popup_fnc(this.id)};
	document.getElementById("4").onclick = function() {popup_fnc(this.id)};
	document.getElementById("5").onclick = function() {popup_fnc(this.id)};
	
	//close button events
	document.getElementById("close").onclick = popup_hide;
	
};



//by Olena Ignatovych