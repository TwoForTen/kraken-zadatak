import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './modal.module.scss';

import { closeModal } from '../../store/Modal/actions';

const Modal = () => {
  const dispatch = useDispatch();

  const { content } = useSelector((state) => state.modal);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.backdrop} onClick={() => dispatch(closeModal())}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.img_container}>
          <img
            onLoad={() => setImgLoaded(true)}
            style={{ display: imgLoaded ? 'block' : 'none' }}
            src={content.picture}
            alt="profile_img"
          />
          {!imgLoaded && <div className={styles.img_placeholder} />}
        </div>
        <div className={styles.spacer}>
          <h2>{`${content.firstName} ${content.lastName}`}</h2>
        </div>
        <div className={styles.spacer}>
          <small>Email</small>
          <span>{content.email}</span>
        </div>
        <div className={styles.spacer}>
          <small>Country</small>
          <span>{content.country}</span>
        </div>
        <div className={styles.spacer}>
          <small>City</small>
          <span>{content.city}</span>
        </div>
        <div className={styles.spacer}>
          <small>Street</small>
          <span>{content.street}</span>
        </div>
        <div className={styles.button_container}>
          <button onClick={() => dispatch(closeModal())}>CLOSE</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
