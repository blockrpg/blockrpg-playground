import Router from 'koa-router';
import { Rsp } from 'blockrpg-core/built/Koa/Rsp';
import { Session } from 'blockrpg-core/built/Session';
import { PlayerMeta } from 'blockrpg-core/built/Model/PlayerMeta/Entity';
import * as RoamerBLL from 'blockrpg-core/built/Model/Roamer/BLL';

const router = new Router();

// 查询玩家在数据库中持久化的Roamer信息
router.post('/api/playground/player/curinfo', async (ctx, next) => {
  const session = ctx.cookies.get('session') as string;
  const meta = await Session.Get(session) as PlayerMeta;
  const roamer = await RoamerBLL.upgradeRoamerBLL(meta.Account);
  if (roamer) {
    Rsp.Success(ctx, roamer);
  } else {
    Rsp.Error(ctx, 500, '无法获取玩家Roam信息');
  }
});

export default router.routes();
