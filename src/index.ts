export const GlobalObject: Window = (() => {
	/* tslint:disable */
	let root: any;
	/* tslint:enable */
	try {
		root = self;
	} catch (e) {
		try {
			root = global;
		} catch (e) {
			root = window;
		}
	}
	return root;
})();