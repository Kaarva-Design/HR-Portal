$( "#create_user--item" ).click(function() {
	$("#create_user").addClass("active");
	$("#list_employers").removeClass("active");
	$("#dashboard").removeClass("active");
	$("#viewheading").html("Create User");
	$("#viewheading--supportingtext").html("Enter email and password to create a new user");
	$("#create_user--item").addClass("list--active");
	$("#dashboard--item").removeClass("list--active");
	$("#list_employers--item").removeClass("list--active");
});

$( "#dashboard--item" ).click(function() {
	$("#create_user").removeClass("active");
	$("#list_employers").removeClass("active");
	$("#dashboard").addClass("active");
	$("#viewheading").html("Dashboard");
	$("#viewheading--supportingtext").html("Development In Progress");
	$("#create_user--item").removeClass("list--active");
	$("#dashboard--item").addClass("list--active");
	$("#list_employers--item").removeClass("list--active");
});

$( "#list_employers--item" ).click(function() {
	$("#create_user").removeClass("active");
	$("#list_employers").addClass("active");
	$("#dashboard").removeClass("active");
	$("#viewheading").html("Employers");
	$("#viewheading--supportingtext").html("View the list of employers");
	$("#create_user--item").removeClass("list--active");
	$("#dashboard--item").removeClass("list--active");
	$("#list_employers--item").addClass("list--active");
});

$( ".logout" ).click(function() {
	window.open("index.html" , "_self"); 
});

$( "button" ).click(function() {
	event.preventDefault();
});

