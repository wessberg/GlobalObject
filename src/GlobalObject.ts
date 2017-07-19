let globalObjectIdentifier: string;

/**
 * Detects the global object and returns it
 * @returns {Window}
 */
export function shimGlobalObject () {
	/* tslint:disable */
	let root: any;
	/* tslint:enable */
	try {
		root = self;
		globalObjectIdentifier = "self";
		if (!("window" in root)) Object.defineProperty(root, "window", {value: self});
		if (!("global" in root)) Object.defineProperty(root, "global", {value: self});
	} catch (e) {
		try {
			root = global;
			globalObjectIdentifier = "global";
			if (!("window" in root)) Object.defineProperty(root, "window", {value: global});
			if (!("self" in root)) Object.defineProperty(root, "self", {value: global});
		} catch (e) {
			root = window;
			globalObjectIdentifier = "window";
			if (!("global" in root)) Object.defineProperty(root, "global", {value: window});
			if (!("self" in root)) Object.defineProperty(root, "self", {value: window});
		}
	}
	return root;
}

export const shimGlobalObjectStringified = `
	(() => {
	let root;
	try {
		root = self;
		if (!("window" in root)) Object.defineProperty(root, "window", {value: self});
		if (!("global" in root)) Object.defineProperty(root, "global", {value: self});
	} catch (e) {
		try {
			root = global;
			if (!("window" in root)) Object.defineProperty(root, "window", {value: global});
			if (!("self" in root)) Object.defineProperty(root, "self", {value: global});
		} catch (e) {
			root = window;
			if (!("global" in root)) Object.defineProperty(root, "global", {value: window});
			if (!("self" in root)) Object.defineProperty(root, "self", {value: window});
		}
	}
	return root;
})();
`;

export const globalObject: Window = shimGlobalObject();
export {globalObjectIdentifier};