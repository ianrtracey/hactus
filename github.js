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

user.userRepos('twoodrow', function(err, repos){ 

	var languages = [];
	languages.push(repos.forEach(getLanguages));
});

function printLanguages(element, index, array) {
	return element.language;
}