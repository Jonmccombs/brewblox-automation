import CORS from '@koa/cors';
import Koa from 'koa';
import koaBody from 'koa-body';
import koaLogger from 'koa-logger';
import Router from 'koa-router';

import previewApi from './api/preview';
import processApi from './api/process';
import taskApi from './api/task';
import args from './args';

const app = new Koa();
const router = new Router({ prefix: `/${args.name}` });

router.use('/task', taskApi.routes(), taskApi.allowedMethods());
router.use('/process', processApi.routes(), processApi.allowedMethods());
router.use('/preview', previewApi.routes(), previewApi.allowedMethods());

app.use(CORS());
app.use(koaLogger());
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
