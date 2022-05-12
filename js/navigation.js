// Navigation
	
$(document).ready(function() {
    
    // Hides other submenus when a main menu point with a submenu is clicked.
    
    $(".navigation-item").click(function() {
        $(this).siblings(".navigation-item").removeClass("folder-open");
	});

});