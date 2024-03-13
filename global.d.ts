declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  const content: string;
  export default content;
}

declare module '*.module.css' {
  const styles: Record<string, string>;
  export default styles;
}
