import React from "react";
import PropTypes from "prop-types";

import Note from "../Note/index";
import "./BlockDateNotes.sass";

const BlockDateNotes = ({
  dataNoteId,
  sameDateNotes,
  onClickLike,
  onClickDelete,
}) => {
  if (sameDateNotes.noteList.length < 1) {
    return true;
  }
  return (
    <div className="block-date-notes">
      <div className="date">{sameDateNotes.dataNotes}</div>
      <div className="notes-list">
        {sameDateNotes.noteList.map((note) => {
          // console.log(`length: ${sameDateNotes.noteList.length}`);
          return (
            <Note
              onClickLike={onClickLike}
              onClickDelete={onClickDelete}
              dataNoteId={dataNoteId}
              note={note}
              key={note.id}
            />
          );
        })}
      </div>
    </div>
  );
};

BlockDateNotes.propTypes = {
  sameDateNotes: PropTypes.shape({
    id: PropTypes.number,
    dataNotes: PropTypes.string,
    noteList: PropTypes.arrayOf(PropTypes.object),
  }),
  onClickLike: PropTypes.func,
  onClickDelete: PropTypes.func,
  dataNoteId: PropTypes.number,
};

BlockDateNotes.defaultProps = {
  sameDateNotes: {},
  onClickLike: () => {},
  onClickDelete: () => {},
  dataNoteId: 0,
};

export default BlockDateNotes;
