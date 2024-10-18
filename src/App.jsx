import { useState } from "react";
import "./App.css";

import fetchImages from "./services/api";
import { useEffect } from "react";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Modal from "react-modal";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

Modal.setAppElement("#root");
const customStyles = {
  overlay: { backgroundColor: "rgb(7 7 7 / 80%)" },
  content: {
    padding: "0",
    backgroundColor: "#3d3d3d",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setImages((prev) => [...prev, ...data]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      getData();
    }
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSearch = (searchValue) => {
    setImages([]);
    setQuery(searchValue);
    setPage(0);
    setTotalPages(0);
  };

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    // setSelectedImage(null);
  }

  return (
    <>
      <div>
        <Toaster position="top-left" reverseOrder={false} />{" "}
      </div>
      <SearchBar handleSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && <LoadMoreBtn handleChangePage={handleChangePage} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        images={images}
        selectedImage={selectedImage}
        style={customStyles}
      >
        <ImageModal
          closeModal={closeModal}
          images={images}
          selectedImage={selectedImage}
        />
      </Modal>
    </>
  );
}

export default App;
