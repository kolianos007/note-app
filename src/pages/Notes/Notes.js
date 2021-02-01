import React, { Component } from "react";
import PropTypes from "prop-types";

import BlockDateNotes from "../../components/BlockDateNotes/index";
import "./Notes.sass";
import Button from "../../components/UI/Button";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleBlockDateNotes: 2,
    };
    this.onClickShowMore = this.onClickShowMore.bind(this);
  }

  onClickShowMore() {
    this.setState((state) => {
      return {
        visibleBlockDateNotes: state.visibleBlockDateNotes + 2,
      };
    });
  }

  render() {
    const { notesList, onClickLike, onClickDelete } = this.props;
    const { visibleBlockDateNotes } = this.state;

    let counter = 0;
    // console.log(notesList);
    return (
      <div className="notes">
        {notesList.map((item) => {
          if (item.noteList.length > 0) {
            counter += 1;
            if (counter <= visibleBlockDateNotes) {
              return (
                <BlockDateNotes
                  onClickLike={onClickLike}
                  onClickDelete={onClickDelete}
                  sameDateNotes={item}
                  dataNoteId={item.id}
                  key={item.id}
                />
              );
            }
          }
          return true;
        })}
        {counter > visibleBlockDateNotes ? (
          <Button
            classNames="btn btn_more"
            btnText="Показать еще"
            onClickHandler={this.onClickShowMore}
          />
        ) : (
          true
        )}
      </div>
    );
  }
}

Notes.propTypes = {
  notesList: PropTypes.arrayOf(PropTypes.object),
  onClickLike: PropTypes.func,
  onClickDelete: PropTypes.func,
};

Notes.defaultProps = {
  notesList: [],
  onClickLike: null,
  onClickDelete: null,
};

export default Notes;
