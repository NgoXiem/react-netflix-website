import React, { useState, useEffect, useRef } from "react";
import BrowseContainer from "../containers/browse";
import { collection, getDocs } from "firebase/firestore";
import db from "../lib/firebase";

export default function Browse() {
  let series = [];
  let films = [];
  const [data, setData] = useState();
  const componentIsMounted = useRef(true);

  useEffect(() => {
    componentIsMounted.current = true;
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

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

      if (componentIsMounted.current) {
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
      }
    };
    getDocument(db);
  }, [db]);

  return <BrowseContainer data={data}></BrowseContainer>;
}
