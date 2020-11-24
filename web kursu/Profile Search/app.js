var profile = new Profile();
var ui = new UI();

var searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup", (event)=>{
    ui.clear();
    var text = event.target.value;

    if(text!==""){
        profile.getProfile(text).then(res => {

            if (res.profile.length ===0){
                ui.showAlert(text);                
            }else{
              ui.showProfile(res.profile[0]);
              
            }
        })
    }

})


fetch("https://instagram-facebook-media-downloader.p.rapidapi.com/api?igurl=https%3A%2F%2Fwww.instagram.com%2Fp%2FBvJyyOhoYvJ", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "10dff6eea1msh45fa2c1d1fc4a11p120a13jsn440a9d8071bc",
		"x-rapidapi-host": "instagram-facebook-media-downloader.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});