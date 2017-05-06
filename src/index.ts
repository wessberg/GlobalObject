let GlobalObjectIdentifier: string;
export const GlobalObject: Window = (() => {
	/* tslint:disable */
	let root: any;
	/* tslint:enable */
	try {
		root = self;
		GlobalObjectIdentifier = "self";
	} catch (e) {
		try {
			root = global;
			GlobalObjectIdentifier = "global";
		} catch (e) {
			root = window;
			GlobalObjectIdentifier = "window";
		}
	}
	return root;
})();
export {GlobalObjectIdentifier};