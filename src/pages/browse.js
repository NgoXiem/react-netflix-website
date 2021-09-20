import React, { useState } from "react";
import BrowseContainer from "../containers/browse";
// import DataGathering from "../utils/data";
import { collection, getDocs } from "firebase/firestore";
import db from "../lib/firebase";
import { useEffect } from "react/cjs/react.development";

export default function Browse() {
  let series = [];
  let films = [];
  const [data, setData] = useState();

  useEffect(() => {
    // get the moviedata from firebase
    const getDocument = async (db) => {
      const seriesSnapshot = await getDocs(collection(db, "series"));
      seriesSnapshot.forEach((doc) => {
        series = [...series, { id: doc.id, ...doc.data() }];
      });
      const filmsSnapshot = await getDocs(collection(db, "films"));
      filmsSnapshot.forEach((doc) => {
        films = [...films, { id: doc.id, ...doc.data() }];
      });
      return { series, films };
    };
    // filter based on categories
    getDocument(db)
      .then(({ series, films }) => {
        setData({
          series: [
            {
              title: "Crime",
              data: series.filter((item) => item.genre === "crime"),
            },
            {
              title: "Children",
              data: series.filter((item) => item.genre === "children"),
            },
            {
              title: "Comedies",
              data: series.filter((item) => item.genre === "comedies"),
            },
            {
              title: "Documentaries",
              data: series.filter((item) => item.genre === "documentaries"),
            },
            {
              title: "Feel Good",
              data: series.filter((item) => item.genre === "feel-good"),
            },
          ],
          films: [
            {
              title: "Drama",
              data: films.filter((item) => item.genre === "drama"),
            },
            {
              title: "Children",
              data: films.filter((item) => item.genre === "children"),
            },
            {
              title: "Thriller",
              data: films.filter((item) => item.genre === "thriller"),
            },
            {
              title: "Suspense",
              data: films.filter((item) => item.genre === "suspense"),
            },
            {
              title: "Romance",
              data: films.filter((item) => item.genre === "romance"),
            },
          ],
        });
      })
      .catch((err) => console.log(err));
    console.log(data);
  }, []);

  return <BrowseContainer data={data}></BrowseContainer>;
}
