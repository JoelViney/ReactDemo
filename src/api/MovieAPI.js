import axios from "axios";
import React from "react";

const baseURL = "http://www.omdbapi.com/?apikey=320f6ab2";

export default function MovieAPI() {
    const [post, setPost] = React.useState(null);

    function search(searchTezt) {
        let url = `${baseUrl}&type=movie&s=${searchText}`;

        axios.get(url).then((response) => {
            setPost(response.data);
        });
    };
}