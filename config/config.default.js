/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = {};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1550826600829_893';

	// add your middleware config here
	config.middleware = [];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};

	//配置mysql
	config.mysql = {
		// 单数据库信息配置
		client: {
			host: '127.0.0.1',		// host
			port: '3306',			// 端口号
			user: 'root',			// 用户名
			password: '123456',		// 密码
			database: 'eduline',	// 数据库名
		},
		// 是否加载到 app 上，默认开启
		app: true,
		// 是否加载到 agent 上，默认关闭
		agent: false,
	}

	//配置sequelize
	config.sequelize = {
		dialect:'mysql',
		host:'127.0.0.1',
		port: 3306 ,
		database: 'eggtest' , //数据库名
		// 数据库连接的用户和密码
		username: 'root',
		password: '123456',
		
		underscored: true,
		timezone: '+08:00',

	}


	
	return {
		...config,
		...userConfig,
	};
};
