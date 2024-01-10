import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    // ここでゲームの一覧を取得するロジックを実装します。
    // 実際のAPI呼び出しはまだ実装されていないため、ここではダミーデータを使用します。
    setGames([]);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.container}>{/* ここにじゃんけんゲームのUIを実装します。 */}</div>
    </>
  );
};

export default Home;
