'use strict';

const { Controller } = require('egg');
const mongo = require('../utlis/mongo');
class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const data = await mongo().query('project');
    // console.log(data);
    ctx.body = data;
  }
}

module.exports = ProjectController;
