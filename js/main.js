console.log('here');

let linksArr = [];

function getInputText(){
	return input = document.getElementById("input-text").value;
}


function shortedLink(link) {
	fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
    .then(response => response.json())
    .then(json => {
    	console.log(json);

    	console.log(json.result.full_short_link, json.result.original_link);
    	let link_obj = {
		    shorted_link: json.result.full_short_link,
		    original_link: json.result.original_link
		};

    	linksArr.push(link_obj);
    	console.log(linksArr);

    	for (var i = 0; i < linksArr.length; i++) {
	        let class_Name = document.getElementsByClassName(`shorted-links`);
	    	class_Name[0].innerHTML = `

	    		<div class="card shorted-card">
					<div class="card-body">
						<div class="d-flex bd-highlight shortedlink">
							<div class="p-2 flex-grow-1 bd-highlight">
								<p class="card-text original-link">https://getbootstrap.com/docs/5.0/utilities/flex/</p>
							</div>
							<div class="p-2 bd-highlight">
								<p class="card-text shorted-link">https://shrtco.de/yqIg8m</p>
							</div>
							<div class="p-2 bd-highlight">
								<button class="btn copy-btn btn-primary" onclick="" type="button">Copy</button>
							</div>
						</div>
					</div>
				</div>
	    	`;
	    }

    })
    .catch(err => console.error(err));
}

function getShortenLink(){
	console.log('Loading...', this.getInputText());
	if(this.getInputText() === ""){
		console.log('vacio');
	} else {
		this.shortedLink(this.getInputText());
	}
}

// Starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        // if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        // }

        form.classList.add('was-validated')
      }, false)
    })
})()