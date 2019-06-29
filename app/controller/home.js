'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

	async index() {
		// console.log('============')
		// console.log(this)
		const { ctx } = this;
		const isquery = this.ctx.query;
		const isquery2 = this.ctx.queries;
		const ip = this.ctx.ip;
		// const ips = this.ctx.ips;

		ctx.body = ip;
	}

	async indexTo() {
		const { ctx } = this;
		ctx.body = 'hi, egg222222';
	}

	//Mysql 学习
	async userlist(){
		const { ctx } = this;
		const id = '1' ;

		//单条查询
		// const result = await ctx.service.user.find( id );

		//全表查询
		// const result = await ctx.service.user.findall();

		//条件查询
		const result = await this.service.user.findselect();
		console.log( result)

		ctx.body = result ;
	}











}

module.exports = HomeController;
