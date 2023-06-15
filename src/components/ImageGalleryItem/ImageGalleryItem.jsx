import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { id, imgSrc, openModal, largeImgSrc } = this.props;

    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={imgSrc}
          alt={id}
          className={css.ImageGalleryItem}
          onClick={() => openModal(largeImgSrc)}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
