import axios from "axios";

const fetchImages = async (page = 1, query = "technology") => {
  const { data } = await axios.get("https://api.unsplash.com//search/photos", {
    params: {
      client_id: "b7kOk3jd4hK8v5qDQ3tcVvG8p5iUGthGSbQNJehp8Q8",
      query: query,
      page: page,
      per_page: 10,
    },
  });

  return data.results;
};

export default fetchImages;
