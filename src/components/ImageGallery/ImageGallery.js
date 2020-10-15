import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from "./ImageGallery.module.css";

function ImageGallery({ images, onShowLargeImage }) {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onShowLagreImage={onShowLargeImage}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
