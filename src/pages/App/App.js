import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ChosenNote from "../ChosenNote";
import CreateNote from "../CreateNote";
import Notes from "../Notes";
import Header from "../../components/Header";
import "./App.sass";
import Nav from "../../components/Nav";
import SearchPanel from "../../components/SearchPanel";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notesList: [
        {
          id: 0,
          dataNotes: "23 Ноября",
          noteList: [
            {
              id: uuidv4(),
              liked: false,
              title: "Купить туалетку",
              dataNote: "23 Ноября",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
            {
              id: uuidv4(),
              liked: false,
              title: "Купить парашку",
              dataNote: "23 Ноября",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие sdfsdf. Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие.  ",
            },
            {
              id: uuidv4(),
              liked: false,
              title: "Купить туалетку",
              dataNote: "23 Ноября",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
            {
              id: uuidv4(),
              liked: false,
              title: "Купить парашку",
              dataNote: "23 Ноября",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
          ],
        },
        {
          id: 1,
          dataNotes: "03 декабря 2002",
          noteList: [
            {
              id: uuidv4(),
              liked: false,
              title: "Купить туалетку",
              dataNote: "03 декабря 2002",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
            {
              id: uuidv4(),
              liked: false,
              title: "Купить туалетку",
              dataNote: "03 декабря 2002",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
          ],
        },
        {
          id: 2,
          dataNotes: "12 Февраля",
          noteList: [
            {
              id: uuidv4(),
              liked: false,
              title: "Купить туалетку",
              dataNote: "12 Февраля",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
            {
              id: uuidv4(),
              liked: false,
              title: "Купить туалетку",
              dataNote: "12 Февраля",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие sdfsdf. Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие.  ",
            },
            {
              id: uuidv4(),
              liked: false,
              title: "Купить туалетку",
              dataNote: "12 Февраля",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
            {
              id: uuidv4(),
              liked: false,
              title: "Купить туалетку",
              dataNote: "12 Февраля",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
          ],
        },
        {
          id: 3,
          dataNotes: "15 декабря 2014",
          noteList: [
            {
              id: uuidv4(),
              liked: false,
              title: "Купить парашку",
              dataNote: "15 декабря 2014",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
            {
              id: uuidv4(),
              liked: false,
              title: "Купить туалетку",
              dataNote: "15 декабря 2014",
              content:
                "Пойти в Сильпо и купить туалеточку для наших прекрасных попочек, чтобы они  были чистенькие. ",
            },
          ],
        },
      ],
      term: "",
      selectFilterValue: "",
    };
    this.onClickLike = this.onClickLike.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.searchPost = this.searchPost.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.filterArrForParam = this.filterArrForParam.bind(this);
  }

  onClickLike(dataNoteId, id) {
    this.setState(({ notesList }) => {
      const arrNote = notesList[dataNoteId].noteList;
      const index = arrNote.findIndex((el) => {
        return el.id === id;
      });
      const old = arrNote[index];
      const newItem = { ...old, liked: !old.liked };
      const newArr = [
        ...arrNote.slice(0, index),
        newItem,
        ...arrNote.slice(index + 1),
      ];
      const update = notesList;
      update[dataNoteId].noteList = newArr;
      return {
        notesList: update,
      };
    });
  }

  onClickDelete(dataNoteId, id) {
    this.setState(({ notesList }) => {
      const arrNote = notesList[dataNoteId].noteList;
      const index = arrNote.findIndex((el) => el.id === id);
      const newItem = [...arrNote.slice(0, index), ...arrNote.slice(index + 1)];
      const update = notesList;
      update[dataNoteId].noteList = newItem;
      return {
        notesList: update,
      };
    });
  }

  onUpdateSearch(term) {
    this.setState({ term });
  }

  onChangeHandler(val) {
    this.setState({ selectFilterValue: val });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }
    const clone = JSON.parse(JSON.stringify(items));

    clone.map((item, i) => {
      const filter = item.noteList.filter((el) => {
        return el.title.indexOf(term) > -1 || el.content.indexOf(term) > -1;
      });
      if (filter.length > 0) {
        clone[i].noteList = filter;
      } else {
        clone[i].noteList = [];
      }
      return true;
    });

    return clone;
  }

  filterArrForParam(items, param) {
    const clone = JSON.parse(JSON.stringify(items));
    console.log(clone);

    clone.map((item, i) => {
      const filter = item.noteList.filter((el) => {
        return el[param] === true;
      });
      clone[i].noteList = filter;
      return true;
    });

    return clone;
  }

  render() {
    const { notesList, term, selectFilterValue } = this.state;
    let visiblePosts = notesList;
    if (selectFilterValue !== "" || term !== "") {
      const filterArr = notesList.filter((item) => {
        return item.dataNotes.indexOf(selectFilterValue) > -1;
      });
      visiblePosts = this.searchPost(filterArr, term);
    }
    const choosenPost = this.filterArrForParam(notesList, "liked");
    console.log(choosenPost);

    return (
      <>
        <Header />
        <div className="main">
          <div className="container">
            <Nav />
            <SearchPanel
              notesList={notesList}
              onUpdateSearch={this.onUpdateSearch}
              onChangeHandler={this.onChangeHandler}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Notes
                    notesList={visiblePosts}
                    onClickLike={this.onClickLike}
                    onClickDelete={this.onClickDelete}
                  />
                )}
              />
              <Route
                exact
                path="/chosen-note"
                render={() => (
                  <ChosenNote
                    notesList={notesList}
                    onClickLike={this.onClickLike}
                    onClickDelete={this.onClickDelete}
                  />
                )}
              />
              <Route exact path="/create-note" component={CreateNote} />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default App;
