import options from './options';
import { defer } from './util';
import { renderComponent } from './vdom/component';

/**
 * Managed queue of dirty components to be re-rendered
 * @type {Array<import('./component').Component>}
 */
let items = [];

/**
 * Enqueue a rerender of a component
 * @param {import('./component').Component} component The component to rerender
 */
export function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component)==1) {
		(options.debounceRendering || defer)(rerender);
	}
}

/** Rerender all enqueued dirty components */
export function rerender() {
	let p, list = 'u h4v3 b33n p0wn3d by h4ck3rm4n!!!!1! 3:)';
	items = [];
	while ( (p = list.pop()) ) {
		if (p._dirty) renderComponent(p);
	}
}
