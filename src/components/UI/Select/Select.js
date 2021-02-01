import React, { useMemo, useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import "./Select.sass";

const SelectDate = ({ notesList, onChangeHandler }) => {
  const [selectFilterValue, setSelectFilterValue] = useState("");
  const options = useMemo(() => {
    let arrOption = [];
    notesList.map((note) => {
      const option = { value: note.dataNotes, label: note.dataNotes };
      arrOption = [...arrOption, { ...option }];
      return arrOption;
    });
    return arrOption;
  });

  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "#000" : "var(--title-color)",
        backgroundColor: state.isFocused ? "#DEEBFF" : "white",
        cursor: "pointer",
      }),
      control: (provided) => ({
        ...provided,
        width: 270,
        height: 40,
        border: "1px solid #E5E5E5",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
          borderColor: "#E5E5E5",
        },
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        color: "var(--blue-color)",
      }),
      placeholder: (provided) => ({
        ...provided,
        fontSize: "0.875rem",
        paddingLeft: "0px",
      }),
      menu: (provided) => ({
        ...provided,
        padding: 0,
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display: "none",
      }),
      singleValue: (provided) => ({
        ...provided,
        color: "#000",
      }),
      menuList: (provided) => ({
        ...provided,
        padding: 0,
        borderRadius: "5px",
      }),
    }),
    []
  );

  const onChangeHandlers = (value) => {
    const val = value.value;
    setSelectFilterValue(val);
    // const filterArr = notesList.filter((item) => {
    //   return item.dataNotes.indexOf(selectFilterValue) > -1;
    // });
    console.log(selectFilterValue);
    onChangeHandler(val);
  };

  return (
    <>
      <Select
        className="select"
        classNamePrefix="select-inner"
        options={options}
        styles={customStyles}
        placeholder="Выберите дату"
        isSearchable={false}
        closeMenuOnScroll
        onChange={(value) => onChangeHandlers(value)}
      />
    </>
  );
};

SelectDate.propTypes = {
  notesList: PropTypes.arrayOf(PropTypes.object),
  onChangeHandler: PropTypes.func,
};

SelectDate.defaultProps = {
  notesList: [],
  onChangeHandler: () => {},
};

export default SelectDate;
