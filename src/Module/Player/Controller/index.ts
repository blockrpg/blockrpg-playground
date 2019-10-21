import Router from 'koa-router';
import { Rsp } from 'blockrpg-core/built/Koa/Rsp';
import { Session } from 'blockrpg-core/built/Session';
import * as RoamerBLL from 'blockrpg-core/built/Model/Roamer/BLL';

const router = new Router();

// 查询玩家当前信息
// 包含玩家基本信息以及Roamer信息
router.post('/api/playground/player/curinfo', async (ctx, next) => {
  const session = ctx.cookies.get('session') as string;
  const metaInfo = await Session.Get(session);
  const roamerInfo = await RoamerBLL.getRoamerBLL(metaInfo.account);
  if (!roamerInfo) {
    Rsp.Error(ctx, 500, '无法获取玩家位置信息');
    return;
  }
  Rsp.Success(ctx, {
    ...metaInfo,
    ...roamerInfo,
  });
});

export default router.routes();
