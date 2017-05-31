let GlobalObjectIdentifier: string;

export function shimGlobalObject () {
	/* tslint:disable */
	let root: any;
	/* tslint:enable */
	try {
		root = self;
		GlobalObjectIdentifier = "self";
		if (!("window" in root)) Object.defineProperty(root, "window", {value: self});
		if (!("global" in root)) Object.defineProperty(root, "global", {value: self});
		if (!("root" in root)) Object.defineProperty(root, "root", {value: self});
	} catch (e) {
		try {
			root = global;
			GlobalObjectIdentifier = "global";
			if (!("window" in root)) Object.defineProperty(root, "window", {value: global});
			if (!("self" in root)) Object.defineProperty(root, "self", {value: global});
			if (!("root" in root)) Object.defineProperty(root, "root", {value: global});
		} catch (e) {
			root = window;
			GlobalObjectIdentifier = "window";
			if (!("global" in root)) Object.defineProperty(root, "global", {value: window});
			if (!("self" in root)) Object.defineProperty(root, "self", {value: window});
			if (!("root" in root)) Object.defineProperty(root, "root", {value: window});
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
		if (!("root" in root)) Object.defineProperty(root, "root", {value: self});
	} catch (e) {
		try {
			root = global;
			if (!("window" in root)) Object.defineProperty(root, "window", {value: global});
			if (!("self" in root)) Object.defineProperty(root, "self", {value: global});
			if (!("root" in root)) Object.defineProperty(root, "root", {value: global});
		} catch (e) {
			root = window;
			if (!("global" in root)) Object.defineProperty(root, "global", {value: window});
			if (!("self" in root)) Object.defineProperty(root, "self", {value: window});
			if (!("root" in root)) Object.defineProperty(root, "root", {value: window});
		}
	}
	return root;
})();
`;

export const GlobalObject: Window = shimGlobalObject();
export {GlobalObjectIdentifier};