'use strict';

const Service = require('egg').Service;

class UserService extends Service {

    /**
     * Mysql 增删改查
     */

    //查 --单条
    async find(id) {
        const user = await this.app.mysql.get( 'el_user' , { uid: id } )
        return {user}
    }

    //查整表
    async findall(){
        const result = await this.app.mysql.select('el_user' )
        return {result}
    }

    //条件查询
    async findselect(){
        const result = await this.app.mysql.select('el_user',{
            where: { phone: '17770859713' }, // WHERE 条件
            columns: ['phone'], // 要查询的表字段
            limit: 100, // 返回数据量
            offset: 0, // 数据偏移量
        })
        return {result}
    }









}

module.exports = UserService;
