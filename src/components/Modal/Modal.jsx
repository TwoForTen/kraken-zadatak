import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './modal.module.scss';

import { closeModal } from '../../store/Modal/actions';

const Modal = () => {
  const dispatch = useDispatch();

  const { content } = useSelector((state) => state.modal);

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
          <img src="https://picsum.photos/1920/1080" alt="profile_img" />
        </div>
        <div className={styles.spacer}>
          <h2>{`${content.firstName} ${content.lastName}`}</h2>
        </div>
        <div className={styles.spacer}>
          <small>Title</small>
          <span>The Main Content</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
