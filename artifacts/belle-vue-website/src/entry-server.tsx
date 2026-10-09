import { renderToString } from 'react-dom/server';
import App from './App';
export { PUBLIC_ROUTES, renderSeoHead, renderRobots, renderSitemap } from './lib/seo';

export function render(path: string) {
  return renderToString(<App ssrPath={path} />);
}
