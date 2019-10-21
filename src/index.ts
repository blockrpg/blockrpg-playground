import Koa from 'koa';
import Router from 'koa-router';
import * as BRCore from 'blockrpg-core';
import PlayerController from './Module/Player/Controller';

const app = new BRCore.Koa.App('Playground', (app) => {
  return app.use(PlayerController);
}, true);

app.Listen();
