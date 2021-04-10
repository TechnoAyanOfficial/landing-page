function is_colliding ( el1, el2, offset ) {
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

function collide_check() {
  var fog = document.querySelector('.fog');
  var hero_text = document.querySelector(".hero__text")
  var navigation = document.querySelector(".navigation__links")

  var is_text_in_the_fog = is_colliding(fog, hero_text, 400)
  var is_navigation_in_the_fog = is_colliding(fog, navigation, 200)

  if (is_text_in_the_fog) {
    hero_text.querySelector("span").classList.add("inversed")
  } else {
    hero_text.querySelector("span").classList.remove("inversed")
  }

  if (is_navigation_in_the_fog) {
    navigation.classList.add("inversed")
  } else {
    navigation.classList.remove("inversed")
  }
}

document.addEventListener("DOMContentLoaded", collide_check);

window.addEventListener('resize',collide_check);