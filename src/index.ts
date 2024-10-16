import { DurableObject } from 'cloudflare:workers';
import { Registry } from 'prom-client';

export default class PromClient<E> extends DurableObject {
	registry: Registry;

	constructor(state: DurableObjectState, env: E) {
		super(state, env);
		this.registry = new Registry();
	}
}
