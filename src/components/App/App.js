import React, { Component } from "react";
import imagesApi from "../../services/imagesApi";
import SearchBar from "../Searchbar";
import ImageGallery from "../ImageGallery";
import Button from "../Button";
import Modal from "../Modal";
import Loader from "react-loader-spinner";
import styles from "./App.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchformSubmit = (query) => {
    this.setState({ searchQuery: query, images: [], page: 1 });
  };
  handleOpenModal = (url) => {
    this.setState({ largeImageURL: url });
  };
  handleCloseModal = () => {
    this.setState({ largeImageURL: "" });
  };

  render() {
    const { images, loading, error, largeImageURL } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSearchformSubmit} />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            onShowLargeImage={this.handleOpenModal}
          />
        )}
        {loading && (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {images.length > 0 && !loading && <Button onClick={this.fetchImages} />}
        {error && <h2>Oops! Something went wrong!</h2>}
        {largeImageURL && (
          <Modal url={largeImageURL} onCloseModal={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
