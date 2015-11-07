//"use strict";
window.onload = function() {

    var set_year = document.getElementById("curr_year");
    var set_month = document.getElementById("curr_month");
	
	var months_arr = ["January","February","March", "April","May","June","July","August","September","October","November","December"];
	var table_html;
    
//====Initial date====//
	var d = new Date();
	var d_year = d.getFullYear();
	var d_month = d.getMonth();
    set_year.innerHTML = d_year;
    set_month.innerHTML = months_arr[d_month];
	var today_day = d.getDate();	
		
	write_html(d);
	add_html();
	create_mark_event();
	document.getElementById("prev").onclick = prevmonth;
	document.getElementById("next").onclick = nextmonth;
	
	var show_month = new Date; // we will load it later;
	var show_month_month;
	
	var get_marked_day =document.getElementsByClassName("active_day");
	var day_cells_counter;	
	
//==== functions for viewing previous and next month ====//
	
    function prevmonth() {		
		show_month_month = show_month.getMonth();
		show_month=new Date(show_month.getFullYear(), show_month_month-1, 1);
        changemonth(show_month);
	}
	function nextmonth() {		
		show_month_month = show_month.getMonth();
	    show_month=new Date(show_month.getFullYear(), show_month_month+1, 1);
        changemonth(show_month);
	}
	
	function changemonth(newmonth) {
		document.getElementById("curr_month").innerHTML = months_arr[newmonth.getMonth()];
		set_year.innerHTML = newmonth.getFullYear();
		write_html(newmonth); //add (showdate) to the function;
		add_html();
		create_mark_event();	
	}
		
//====Creating the html constructor ====//
	
	function write_html(in_the_scope) {	//(view_scope (loading new date))	
		var start_month_at = new Date(in_the_scope.getFullYear(),in_the_scope.getMonth(),1).getDay(); // day of the week of the 1st of the month	
		//====switching from Sun-Sat sys to Mon-Sun====//
		if (start_month_at>0) { 
			start_month_at=start_month_at-1;
		} else {
			start_month_at=6;
		}

		var days_in_month = new Date(in_the_scope.getFullYear(),in_the_scope.getMonth()+1,0).getDate(); //days in a month (month's length)
		
		//====html itself====//
		table_html = "<table>";
		table_html+="<tr>";
		//====drawing blanc cells====//
		for(var day_of_the_week = 0; day_of_the_week < start_month_at; day_of_the_week++) {
			table_html += '<td style="cursor: auto;"> </td>'; //non-clickable cells
		}
		for(day_cells_counter = 1; day_cells_counter <= days_in_month; day_cells_counter++) {
			day_of_the_week %= 7;
			//====adding row elements for weeks====//
			if(day_of_the_week == 0) {
				table_html += '</tr><tr>';
			}
			//====setting cells, marking today as an "active day"====//
			if(today_day == day_cells_counter) {
				table_html += '<td class="active_day">' + day_cells_counter + '</td>';
			} else {
				//====marking each cell with the id====//
				table_html += '<td ' + "id='day" +day_cells_counter+ "' "+'>'+ day_cells_counter + ' </td>';
			}		
			day_of_the_week++;
		};
		//====closing the row and table====//
		table_html+="</tr><table>";

		} //write_html();
	
//====Insert the table to the document====//	
	function add_html() {
		document.getElementById("whole_month").innerHTML=table_html;
	}
	
//====mark the clicked date with "active_day" class(lightblue color)====//
	function create_mark_event() { 
		var ids_arr = [];
		
		for (var i=1;i<day_cells_counter;i++) {
			var local_i=i;
			ids_arr[i-1] = "day"+i; // creating cell ids array
	    }		
		for (var k=0;k<ids_arr.length;k++) {
			if (ids_arr[k]!="day"+today_day) {
				//====Creating onclick event for each cell====//
				document.getElementById(ids_arr[k]).onclick = function(arg) {
					return function() {	
						get_marked_day =document.getElementsByClassName("active_day");
						for (var j=0;j<get_marked_day.length;j++) {
							//====Cleaning up other marked cells====//
							get_marked_day[j].className="";
						}
						//====Marking an active cell====//
						document.getElementById(ids_arr[arg]).className = "active_day";
					}
				}(k);
			};	
		};
    };

};
//by Olena Ignatovych