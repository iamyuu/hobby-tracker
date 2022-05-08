import { Box } from '@hope-ui/solid';
import { appName } from '~/config/app';

export default function IndexPage() {
	return (
		<Box as='h1' color='$neutral9' m='$2'>
			{appName}
		</Box>
	);
}
