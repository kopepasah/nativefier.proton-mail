/**
 * ProtonMail Build File
 *
 * @package ProtonMail
 */

// Node Dependencies
const fs   = require( 'fs' );
const path = require( 'path' );

// External Dependencies
const nativefier = require( 'nativefier' ).default;

// Set the icon, if one exists.
let icon = false;

if ( process.argv.includes( '--icon' ) ) {
	icon = process.argv[ process.argv.indexOf( '--icon' ) + 1 ];

	if ( ! fs.existsSync( icon ) ) {
		icon = false;
	}
}

/**
 * Nativefier Method
 *
 * @param object options Nativefier options.
 * @param function Callback.
 *
 * @return void
 */
nativefier( {
	name           : 'ProtonMail',
	targetUrl      : 'https://mail.protonmail.com',
	out            : './app',
    overwrite      : true,
    icon           : icon || '',
    counter        : true,
	bounce         : true,
	showMenuBar    : true,
	fastQuit       : false,
	userAgent      : 'Mozilla ...',
	insecure       : false,
	fullScreen     : true,
	maximize       : true,
	singleInstance : true,
}, ( err, path ) => {
	if ( err ) {
		console.error( err );
		return;
	}

	console.log( 'App has been built to', path );
});
