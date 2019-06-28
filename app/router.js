'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.index);
	router.get('/s', controller.home.indexTo);

	router.get('/user',app.controller.home.userlist)


};
