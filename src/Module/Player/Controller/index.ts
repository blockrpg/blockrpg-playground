import Router from 'koa-router';
import { Rsp } from 'blockrpg-core/built/Koa/Rsp';
import { Session } from 'blockrpg-core/built/Session';

const router = new Router();

// 查询玩家当前信息
// 包含玩家基本信息以及Roamer信息
router.post('/api/playground/player/curinfo', async (ctx, next) => {
  const session = ctx.cookies.get('session') as string;
  const metaInfo = await Session.Get(session);
  Rsp.Success(ctx, metaInfo);
});

export default router.routes();
