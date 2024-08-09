import '@twa-dev/sdk';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Welcome.module.scss';
import laptopGif from './../../assets/laptop--image.gif';
import { retrieveLaunchParams } from '@tma.js/sdk-react';
import WebApp from '@twa-dev/sdk';
import { RootState } from '../../store';
import { setInitDataRaw } from '../../store/features/authSlice';

export default function Welcome() {
  const dispatch = useDispatch();

  const { initDataRaw } = retrieveLaunchParams();

  const storedInitDataRaw = useSelector((state: RootState) => state.authentication.initDataRaw)

  useEffect(() => {
    dispatch(setInitDataRaw(initDataRaw));
  }, [initDataRaw]);

  if (storedInitDataRaw) {
    return <h2>Loading...</h2>
  }

  const onClick = useCallback(() => {

    WebApp.showPopup({
      title: 'Оп',
      message: storedInitDataRaw,
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