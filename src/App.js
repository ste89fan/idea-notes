import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import IdeaWorkshop from "./components/IdeaWorkshop";
import Nav from "./components/Nav";
import CreateIdea from "./components/CreateIdea";
// import firebaseConfig from "./firebase";

// firebaseConfig.firestore().collections("ideas");

const App = () => {
  const ideas = [];

  const [newIdeas, setNewIdeas] = useState(ideas);

  const [category, setCategory] = useState("");

  const [shortTitle, setShortTitle] = useState("");

  const [detailDescribe, setDetailDescribe] = useState("");

  const [expectationDescribe, setExpectationDescribe] = useState("");

  const [orderNumber, setOrderNumber] = useState(0);

  const [ratingStar, setRatingStar] = useState("");

  const [id, setId] = useState(0);

  const [edit, setEdit] = useState(false);

  const handleSelect = (e) => {
    setCategory(e.target.value);
    setOrderNumber(orderNumber + 1);
  };

  const handleShortTitle = (e) => {
    setShortTitle(e.target.value);
  };

  const handleDescribe = (e) => {
    setDetailDescribe(e.target.value);
  };

  const handleExpect = (e) => {
    setExpectationDescribe(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      category !== "" &&
      shortTitle !== "" &&
      detailDescribe !== "" &&
      expectationDescribe !== ""
    ) {
      if (edit) {
        let ideas = newIdeas.map((item) => {
          return item.id === id
            ? {
                ...item,
                category,
                shortTitle,
                detailDescribe,
                expectationDescribe,
                ratingStar,
              }
            : item;
        });
        setNewIdeas(ideas);
        setEdit(false);
      } else {
        const tempIdea = {
          id: uuidv4(),
          orderNumber: orderNumber,
          currentDate: new Date().toLocaleString(),
          shortTitle: shortTitle,
          detailDescribe: detailDescribe,
          expectationDescribe: expectationDescribe,
          category: category,
          rating: ratingStar,
        };
        setNewIdeas([...newIdeas, tempIdea]);
      }

      setCategory("");
      setShortTitle("");
      setDetailDescribe("");
      setExpectationDescribe("");
    } else {
      console.log("NIJE UPISANO SVE");
    }
  };

  const handleDelete = (id) => {
    const tempDel = newIdeas.filter((item) => item.id !== id);
    setNewIdeas(tempDel);
  };

  const handleClearAll = () => {
    setNewIdeas([]);
  };

  const handleEdit = (id) => {
    let idea = newIdeas.find((item) => item.id === id);
    let {
      category,
      shortTitle,
      detailDescribe,
      expectationDescribe,
      ratingStar,
    } = idea;
    setCategory(category);
    setShortTitle(shortTitle);
    setDetailDescribe(detailDescribe);
    setExpectationDescribe(expectationDescribe);
    setRatingStar(ratingStar);
    setEdit(true);
    setId(id);
  };

  return (
    <div>
      <Nav />
      <CreateIdea
        handleSubmit={handleSubmit}
        edit={edit}
        handleSelect={handleSelect}
        handleShortTitle={handleShortTitle}
        handleDescribe={handleDescribe}
        handleExpect={handleExpect}
        category={category}
        shortTitle={shortTitle}
        detailDescribe={detailDescribe}
        expectationDescribe={expectationDescribe}
      />
      <IdeaWorkshop
        newIdeas={newIdeas}
        handleEdit={handleEdit}
        setRatingStar={setRatingStar}
        handleDelete={handleDelete}
        handleClearAll={handleClearAll}
      />
    </div>
  );
};

export default App;
