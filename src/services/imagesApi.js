import axios from "axios";

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=17731769-f1a805891ae81f5c258c77c7a&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default { fetchImagesWithQuery };
