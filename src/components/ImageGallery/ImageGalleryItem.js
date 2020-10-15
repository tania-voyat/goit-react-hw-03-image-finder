import React from "react";
import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  onShowLagreImage,
}) {
  return (
    <li key={id} className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
        onClick={() => onShowLagreImage(largeImageURL)}
      />
    </li>
  );
}

export default ImageGalleryItem;

// export default class ImageGalleryItem extends Component {
//   render() {
//     return (
//       <li key={id} className={styles.ImageGalleryItem}>
//         <img
//           src={webformatURL}
//           alt=""
//           className={styles.ImageGalleryItemImage}
//         />
//       </li>
//     );
//   }
// }
