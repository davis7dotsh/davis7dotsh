export type RichNode = string | { index: number; children: RichNode[] };
export type RichElement = {
	tag: 'a' | 'strong' | 'em' | 'code';
	attributes: Record<string, string>;
	localize?: boolean;
};

// Translation controls only text and numbered slots, never tags, URLs, or attributes.
export function parseRich(message: string, elementCount: number) {
	const nodes: RichNode[] = [];
	const stack = [{ index: -1, children: nodes }];
	for (const token of message.split(/(<\/?s\d+>)/g)) {
		const match = /^<(\/?)s(\d+)>$/.exec(token);
		if (!match) {
			stack.at(-1)!.children.push(token);
			continue;
		}
		const index = Number(match[2]);
		if (index >= elementCount) return null;
		if (match[1]) {
			if (stack.length === 1 || stack.at(-1)!.index !== index) return null;
			stack.pop();
		} else {
			const node = { index, children: [] as RichNode[] };
			stack.at(-1)!.children.push(node);
			stack.push(node);
		}
	}
	return stack.length === 1 ? nodes : null;
}
