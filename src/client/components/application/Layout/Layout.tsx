import { FC, ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from '../../../pages/Fallback';

import { Footer } from '../../navigators/Footer/Footer';
import { Header } from '../../navigators/Header/Header';

import * as styles from './Layout.styles';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main className={styles.container()}>{children}</main>
    <Footer />
  </>
);
