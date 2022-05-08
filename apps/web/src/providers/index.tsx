import type { PropsWithChildren } from 'solid-js';
import { HopeProvider } from '@hope-ui/solid';

export function AppProviders(props: PropsWithChildren) {
	return <HopeProvider>{props.children}</HopeProvider>;
}
