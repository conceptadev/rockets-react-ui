import { ReactNode, isValidElement } from 'react';

export const isRenderable = (node: ReactNode): Boolean => {
  let renderable;
  switch (typeof node) {
    case 'string':
    case 'number':
      renderable = true;
      break;
    default:
      if (Array.isArray(node) && node.length) {
        renderable = node.reduce((acc, e) => acc && isRenderable(e), true);
        break;
      }
      renderable = isValidElement(node);
      break;
  }
  return renderable;
};

interface FallbackComponentProps {
  component: React.ReactNode;
  children: React.ReactNode;
}

export const HOCWrapper = (
  value: React.ReactNode | string,
  wrapper: React.ReactNode,
): React.ReactNode => {
  if (typeof value == 'string') {
    return wrapper;
  }

  return value;
};

export const FallbackComponent = ({
  component,
  children,
}: FallbackComponentProps): JSX.Element => {
  if (!isRenderable(children)) {
    return <>{component}</>;
  }

  return <>{children}</>;
};
