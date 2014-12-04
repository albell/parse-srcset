QUnit.module( "Multiple sources" );

QUnit.test( "Multiple densities" , function( assert ) {
	var parsed = parseSrcset("image-2x.jpg 2x, image-3x.jpg 3x");
	assert.equal(parsed[0].url, "image-2x.jpg", "first url passed" );
	assert.equal(parsed[1].url, "image-3x.jpg", "second url passed" );
	assert.equal(parsed[0].d, 2, "first density passed" );
	assert.equal(parsed[1].d, 3, "second density passed" );
});

QUnit.test( "Multiple widths" , function( assert ) {
	var parsed = parseSrcset("image-400.jpg 400w, image-800.jpg 800w");
	assert.equal(parsed[0].url, "image-400.jpg", "first url passed" );
	assert.equal(parsed[1].url, "image-800.jpg", "second url passed" );
	assert.equal(parsed[0].w, 400, "first width passed" );
	assert.equal(parsed[1].w, 800, "second width passed" );
});

QUnit.test( "Multiple heights" , function( assert ) {
	var parsed = parseSrcset("image-400.jpg 400h, image-800.jpg 800h");
	assert.equal(parsed[0].url, "image-400.jpg", "first url passed" );
	assert.equal(parsed[1].url, "image-800.jpg", "second url passed" );
	assert.equal(parsed[0].h, 400, "first width passed" );
	assert.equal(parsed[1].h, 800, "second width passed" );
});