var customers = {};
var main = function() {    
    $("#save").hide();
	checkingjson();
}; 

$(document).ready(main);

function checkingjson() {
	if (localStorage.getItem("local_customers") === null ||localStorage.getItem("local_customers")==[]) {  
		$.getJSON("address_book_files/js/customers.json", function(json) {
			customers = json;
			list_customers();
			console.log("in if");
		});
	} else {
      		customers = JSON.parse(localStorage.getItem('local_customers'));
			list_customers();
		    
    }
};

function add() {
	var new_customer = {};
	new_customer.address = {};
	new_customer.name = $("#name").val(); 
    new_customer.email = $("#email").val(); 
	new_customer.telephone = $("#telephone").val(); 
	new_customer.address.street = $("#street").val(); 
	new_customer.address.city = $("#city").val(); 
	new_customer.address.state = $("#state").val(); 
	new_customer.address.zip = $("#zip").val(); 
    customers.push(new_customer);
	clear();
	list_customers();
	
	localStorage.setItem('local_customers', JSON.stringify(customers));
};

function clear() {
    $("#name").val("Name"); 
    $("#email").val("Email"); 
	$("#telephone").val("Telephone"); 
	$("#street").val("Street"); 
	$("#city").val("City"); 
	$("#state").val("State"); 
	$("#zip").val("Zip"); 
};

function list_customers() {
    var length_customers = customers.length;
	$("#customers").html("");
	for (var i=0; i<length_customers;i++) {
	    $("#customers").append("Name: ", customers[i].name, "<br>", "Email: ", customers[i].email, "<br>", "Telephone: ", customers[i].telephone, "<br>", "Address: ", customers[i].address.street, ", ", customers[i].address.city, ", " , customers[i].address.state, ", ", customers[i].address.zip, "<br>","<br>","<a href='#input'><button class='edit' id='"+i+"' onclick=edit(this)>Edit</button></a> <button class='delete' id='delete"+i+"' onclick=delete_item(this)>Delete</button>","<br>","<br>");
	}
	$("#clear").prop('disabled', false);
}

function edit(el) {
    //on editbutton click
	$("#delete").prop('disabled', true);
	var ind_num = $(el).attr('id');
	$(".edit").prop('disabled', true);
	$(".delete").prop('disabled', true);
	var current_edit = "#"+ind_num;
	$(current_edit).html("<-- Please, edit on left");
	$(current_edit).css("color","yellow");
	
	var customer_info=customers[ind_num];
	$("#name").val(customers[ind_num].name);
	$("#email").val(customers[ind_num].email); 
	$("#telephone").val(customers[ind_num].telephone); 
	$("#street").val(customers[ind_num].address.street); 
	$("#city").val(customers[ind_num].address.city);
	$("#state").val(customers[ind_num].address.state); 
	$("#zip").val(customers[ind_num].address.zip); 
	
	$("#clear").hide();
	$("#add").hide();
	$("#save").show();
	$("#save").css("background-color","green");
	$("#save").css("color","yellow");
	

	$("#save").unbind().click(function(){
		customers[ind_num].address = {};
		customers[ind_num].name = $("#name").val(); 
		customers[ind_num].email = $("#email").val(); 
		customers[ind_num].telephone = $("#telephone").val(); 
		customers[ind_num].address.street = $("#street").val(); 
		customers[ind_num].address.city = $("#city").val(); 
		customers[ind_num].address.state = $("#state").val(); 
		customers[ind_num].address.zip = $("#zip").val(); 
		
		list_customers();
		$("#clear").show();
		$("#add").show();
		$("#save").hide();
		clear();
		
		localStorage.setItem('local_customers', JSON.stringify(customers));
	});	
}

function delete_item(el) {
	var del_num = $(el).attr('id').slice(6);//getting the id number after "delete"
	var customer_info=customers[del_num];
	customers.splice($.inArray(customers[del_num],customers),1);
	list_customers();
	
	localStorage.setItem('local_customers', JSON.stringify(customers));	
}

