import React from "react";
import PropTypes from "prop-types";
import ClampLines from "react-clamp-lines";

import "./Note.sass";

const Note = ({ note, onClickLike, onClickDelete, dataNoteId }) => {
  const { id, title, dataNote, content, liked } = note;
  let classNamesLike = "note";
  if (liked) {
    classNamesLike += " like";
  }
  return (
    <div className={classNamesLike}>
      <div className="note_topline">
        <span>{dataNote}</span>
        <button
          type="button"
          className="btn_like"
          onClick={() => {
            onClickLike(dataNoteId, id);
          }}
        >
          <span className="ico" />
        </button>
      </div>
      <div className="note_content">
        <div className="note_title">
          <label htmlFor={id} className="note-ready">
            <input type="checkbox" id={id} name="noteReady" />
            <span>{title}</span>
          </label>
        </div>
        <ClampLines
          className="note_text"
          text={content}
          lines={4}
          ellipsis="..."
          moreText=""
          lessText=""
        />
      </div>
      <div className="note_panel">
        <button
          type="button"
          className="btn_edit"
          contentEditable
          suppressContentEditableWarning
        >
          <span />
        </button>
        <button
          type="button"
          className="btn_delete"
          onClick={() => {
            onClickDelete(dataNoteId, id);
          }}
        >
          <span />
        </button>
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    dataNote: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string,
    liked: PropTypes.bool,
  }),
  onClickLike: PropTypes.func,
  onClickDelete: PropTypes.func,
  dataNoteId: PropTypes.number,
};

Note.defaultProps = {
  note: null,
  onClickLike: () => {},
  onClickDelete: () => {},
  dataNoteId: 0,
};

export default Note;
