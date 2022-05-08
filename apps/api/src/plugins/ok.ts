import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

interface OkPlugin {
	statusCode: number;
	message: string;
	data?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

type OkPluginArguments = Omit<Partial<OkPlugin>, 'statusCode'>;

declare module 'fastify' {
	export interface FastifyReply {
		ok: (args?: OkPluginArguments) => OkPlugin;
	}
}

const okPlugin: FastifyPluginAsync = fp(async fastify => {
	fastify.decorateReply('ok', ({ data, message }: OkPluginArguments = {}) => {
		const response = {
			statusCode: 200,
			message: message ?? 'Success',
		};

		return data
			? { ...response, data } // eslint-disable-line @typescript-eslint/no-unsafe-assignment
			: response;
	});
});

export default okPlugin;
