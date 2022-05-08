import { join } from 'path';
import fastify from 'fastify';
import autoload from '@fastify/autoload';
import helmet from '@fastify/helmet';
import sensible from '@fastify/sensible';
import loggerConfig from './config/logger';
import { PORT } from './config/app';

const app = fastify({
	logger: loggerConfig,
});

function onStart(error: Error | null) {
	if (error) {
		app.log.error(`🚨 Server error: ${error.message}`);
		process.exit(1);
	}
}

function onClose(signal: string) {
	app.log.warn(`⚠️ Received Signal: ${signal}`);
	app.close().catch(app.log.error);
	process.exit(1);
}

app
	.register(helmet)
	.register(sensible)
	.register(autoload, { dir: join(__dirname, 'plugins') })
	.register(autoload, { dir: join(__dirname, 'routes') })
	.listen(PORT, '0.0.0.0', onStart);

process.on('SIGINT', () => onClose('SIGINT'));
process.on('SIGTERM', () => onClose('SIGTERM'));
process.on('uncaughtException', app.log.error);
process.on('unhandledRejection', app.log.error);
