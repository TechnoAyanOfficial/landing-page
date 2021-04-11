function is_colliding ( el1, el2, offset = 0 ) {
	// Div 1 data
	var d1_offset             = el1.getBoundingClientRect();
	var d1_width              = el1.offsetWidth;
	var d1_distance_from_left = d1_offset.left + d1_width;

	// Div 2 data
	var d2_offset             = el2.getBoundingClientRect();
	var d2_width              = el2.offsetWidth - offset;
	var d2_distance_from_left = d2_offset.left + d2_width;

	var not_colliding = ( d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left );

	// Return whether it IS colliding
	return ! not_colliding;
};

export default is_colliding