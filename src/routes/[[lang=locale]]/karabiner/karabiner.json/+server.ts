import { karabinerConfigText } from '../karabiner';

export const GET = () => {
	return new Response(karabinerConfigText, {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Content-Disposition': 'attachment; filename="karabiner.json"'
		}
	});
};
