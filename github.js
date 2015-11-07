#!/usr/bin/env node

/**
 * Module dependencies.
 */

 var Github  = require("github-api");
 var credentials = require("./credentials");
 console.log(credentials);

var github = new Github({
  username: credentials.username,
  password: credentials.password,
  auth: "basic"
});
var user = github.getUser();

user.userRepos('ianrtracey', function(err, repos) { 

	var languages = collectLanguages(repos);
	console.log(languages);
});


function collectLanguages(repos) {
	var languages = [];
	repos.forEach(function(repo) {
		languages.push(repo.language);
	});
	languages = languages.filter(function(n){ return n != null });
	return collectLanguageCounts(languages);
}

function collectLanguageCounts(languages) {
	var l = {};
	l["repos"] = languages.length;
	languages.map( function(language) { 
		if (language in l) l[language]++; else l[language] = 1; 
	});
	return l;
}


