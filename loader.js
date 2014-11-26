
loadTagsFile(function(files) {

	for (var file in files) {

		//For Tags		
		var tagContainer = document.getElementsByClassName('post-tags '+file)[0];

		for (var tag in files[file].tags) {			
			var tagElement = document.createElement('div')
			tagElement.className = 'label';
			tagElement.innerHTML = files[file].tags[tag];			
			tagContainer.appendChild(tagElement);
		}

		var dateContainer = document.getElementsByClassName('post-datetime '+file)[0];
		var date = new Date(files[file].created);
		var dateString = date.getDay()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
		var timeString = date.getHours()+':'+date.getMinutes();
		var dateElement = document.createElement('span');
		dateElement.innerHTML = dateString;
		dateContainer.appendChild(dateElement);
		dateContainer.appendChild(document.createElement('br'));
		var timeElement = document.createElement('span');
		timeElement.innerHTML = timeString;
		dateContainer.appendChild(timeElement);

	}
});

loadPosts();
loadLatestPosts();
//homes.sort(function(a,b) { return parseFloat(a.price) - parseFloat(b.price) } );
function loadLatestPosts() {
	console.log("latest tags");
	loadTagsFile(function(files){
		var filesHolder = [];
		for (var file in files) {
			filesHolder.push(file);
		}
		console.log(filesHolder);
		var sortedFiles = filesHolder.sort(dateSort(a,b));
		var iterations = 5;
		if(sortedFiles.length < 5) { iterations = sortedFiles.length}
		for (var i=0; i<iterations; i++){
			loadRawFile(sortedFiles[i]);
		}
	});
}

function dateSort(a, b){
	return new Date(b.created).getTime() - new Date(a.created).getTime();
}
function loadPosts() {
	var posts = document.getElementsByClassName('embed-blog-post');

	for (var i=0;i<posts.length;i++) {
		loadRawFile(posts[i]);
	}	

}

function loadGists(element) {
	var gists = element.getElementsByClassName('gist-loader');

	for (var i=0;i<gists.length;i++) {
		loadGist(gists[i]);
	}	

}
function get(url, callback) {
    var xhr;

    if (typeof XMLHttpRequest !== 'undefined') {
        xhr = new XMLHttpRequest();
    } else {
        var versions = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"];
        for (var i = 0, len = versions.length; i < len; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {}
        }
    }

    xhr.onreadystatechange = ready;

    function ready() {
        if (xhr.readyState < 4) return;
        if (xhr.status !== 200) return;

        if (xhr.readyState === 4) {
            callback(xhr);
        }
    }

    xhr.open('GET', url, true);
    xhr.send('');
}

function loadTagsFile(callback) {
	get("/blog-posts/master/tags.json", function(xhr){
		try {
			var response = JSON.parse(xhr.responseText);
			callback(response);
		}catch (e) {

		}
	});
}

function loadRawFile(element) {
	get(element.id, function(xhr){

		var post = document.createElement('div');

		post.innerHTML = xhr.responseText;

		element.appendChild(post);

		loadGists(element);
	});
}

function loadGist(element) {
    get("/gists/" + element.id + ".json", function(xhr) {
        try {
            var response = JSON.parse(xhr.responseText);
	    	var stylesheet = response.stylesheet.split('https://gist-assets.github.com/assets/')[1];
            var html = '<link rel="stylesheet " href="http://blog.nodeside.com/github/assets/' + stylesheet + '"></link>';
            html += response.div;
            element.innerHTML = html;
        } catch (e) {

        }
    });
}