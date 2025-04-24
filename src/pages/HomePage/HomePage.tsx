import { FC } from 'react';
import { styles } from './styles';

export const HomePage: FC = () => {
  return (
    <main className={styles.Container}>
      <p className={styles.Text}>
        Olá, gatinhos!
      </p>
    </main>
  );
};
