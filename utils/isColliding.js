function is_colliding ( el1, el2, offsetX = 0, offsetY = 0 ) {
	// Div 1 data
	var d1_offset             = el1.getBoundingClientRect();
	var d1_width              = el1.offsetWidth;
	var d1_height             = el1.offsetHeight - offsetY;
	var d1_distance_from_left = d1_offset.left + d1_width;
	var d1_distance_from_top  = d1_offset.top + d1_height;

	// Div 2 data
	var d2_offset             = el2.getBoundingClientRect();
	var d2_width              = el2.offsetWidth - offsetX;
	var d2_height             = el2.offsetHeight;
	var d2_distance_from_left = d2_offset.left + d2_width;
	var d2_distance_from_top  = d2_offset.top + d2_height;

	var not_colliding = ( d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );		
	// Return whether it IS colliding
	return ! not_colliding;
};

export default is_colliding