// HTML Entities are much easier to troubleshoot in console.
he.encode.options.useNamedReferences = true;

function runTest(test) {
	var origAttr = test.srcset;
	var attrDecoded = he.decode(origAttr);
	var parsed = parseSrcset(attrDecoded);
	
	var firstCandidate = parsed[0];
	
	var url = "";
	var encodedUrl = "";

	if (firstCandidate) {
		url = firstCandidate.url;
	}
	
	// Must re-encode url prior to comparison with expected string.
	if (url) {
		encodedUrl = he.encode(url);
	}

	console.groupCollapsed(test.desc);
	console.log("origAttr: '" + origAttr + "'");
	console.log("attrDecoded: '" + attrDecoded + "'");
	console.log("parsed: ", parsed);
	console.log("url: '" + url + "'");
	console.log("encodedUrl: '" + encodedUrl + "'");
	console.groupEnd();

	QUnit.test( test.desc , function( assert ) {
		assert.equal(encodedUrl, test.expect, "passed" );
	});
}

function runTestGroup(testGroup) {
	var testArray = testGroup.testArray;
	
	// Group Tests
	QUnit.module( testGroup.groupName );

	for (var j=0; j < testArray.length; j++) {
		runTest(testArray[j]);
	}
}

for (var i=0; i< tests.length; i++) {
		runTestGroup(tests[i]);
}

