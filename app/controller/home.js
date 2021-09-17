'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'GitHub actions auto deploy! dev-branch';
  }
}

module.exports = HomeController;
