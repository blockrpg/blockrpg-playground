import Koa from 'koa';
import Router from 'koa-router';
import * as BRCore from 'blockrpg-core';
import PlayerController from './Module/Player/Controller';

const app = new BRCore.Koa.App('Map', (app) => {
  return app.use(PlayerController);
}, true);

app.Listen();
