declare module '*.svg' {
  import type { ReactElement, SVGProps } from 'react';

  const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
  export { ReactComponent };
}
