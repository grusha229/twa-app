import '@twa-dev/sdk';
import { useCallback } from 'react';
import styles from './Welcome.module.scss';
import laptopGif from './../../assets/laptop--image.gif';
import WebApp from '@twa-dev/sdk';

export default function Welcome() {

  // const { initDataRaw } = retrieveLaunchParams();

  // const storedInitDataRaw = useSelector((state: RootState) => state.authentication.initDataRaw)

  // useEffect(() => {
  //   dispatch(setInitDataRaw(initDataRaw));
  // }, [initDataRaw]);

  // if (storedInitDataRaw) {
  //   return <h2>Loading...</h2>
  // }

  const onClick = useCallback(() => {

    WebApp.showPopup({
      title: 'Оп',
      message: 'hey!',
    })

  },[])

  return (
    <div className={styles['container']}>
      <div className={styles['image-container']}>
        <img src={laptopGif} alt=""/>
      </div>
      <h1>Test</h1>
      <div className={styles['subtitle']}>Blah blah blah</div>
      <button onClick={onClick}>
        Click to show tg info
      </button>
    </div>
  );
}