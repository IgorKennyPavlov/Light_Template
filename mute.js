function mute() {
	var sound = document.getElementById("music");
	var icon = document.getElementById("mute-icon");
	sound.muted = !sound.muted;
	if (icon.getAttribute("class") === "fa fa-volume-off") {
		icon.setAttribute("class", "fa fa-volume-up");
	} else {
		icon.setAttribute("class", "fa fa-volume-off");
	};
};