import type { ComponentPropsWithoutRef, FC } from 'react';
import { Link } from 'react-router-dom';

import * as styles from './Anchor.styles';

type Props = Omit<ComponentPropsWithoutRef<'a'>, 'className'>;

export const Anchor: FC<Props> = ({ children, href, ...rest }) => {
  return (
    <Link className={styles.container()} to={href || ''} {...rest}>
      {children}
    </Link>
  );
};
