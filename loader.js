
loadTagsFile(function(response) {
	console.log(response);
});

loadPosts();

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

		var post = document.createElement('div')

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