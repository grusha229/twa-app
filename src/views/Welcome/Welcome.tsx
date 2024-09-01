import WebApp from '@twa-dev/sdk'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Welcome.module.scss'
import laptopGif from './../../assets/laptop--image.gif'
import { retrieveLaunchParams } from '@telegram-apps/sdk-react'
import { type RootState } from '../../store'
import { setInitDataRaw } from '../../store/features/authSlice'

export default function Welcome (): JSX.Element {
  const dispatch = useDispatch()

  const { initDataRaw } = retrieveLaunchParams()

  const storedInitDataRaw = useSelector((state: RootState) => state.authentication.initDataRaw)

  useEffect(() => {
    dispatch(setInitDataRaw(initDataRaw))
  }, [setInitDataRaw])

  if (storedInitDataRaw) {
    return <h2>Loading...</h2>
  }

  const onClick = useCallback(() => {
    WebApp.showPopup({
      title: 'Оп',
      message: storedInitDataRaw
    })
  }, [storedInitDataRaw])

  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <img src={laptopGif} alt=""/>
      </div>
      <h1>Test</h1>
      <div className={styles.subtitle}>Blah blah blah</div>
      <button onClick={onClick}>
        Click to show tg info
      </button>
    </div>
  )
}
