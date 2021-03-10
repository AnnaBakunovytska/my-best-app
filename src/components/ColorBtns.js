import React from "react";
import { connect } from "react-redux";

import { paintingGreen, paintingBlue, paintingRed } from "../actions/color";

const ColorBtns = ({ paintingGreen, paintingRed, paintingBlue, backgroundColor }) => {

    return (
        <div>
            <button onClick={paintingGreen} style={{backgroundColor: (backgroundColor || 'green')}}>Green</button>
            <button onClick={paintingRed} style={{backgroundColor: (backgroundColor || 'red')}}>Red</button>
            <button onClick={paintingBlue} style={{backgroundColor: (backgroundColor || 'blue')}}>Blue</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
  backgroundColor: state.colorState.color
});

const mapDispatchToProps = {
  paintingGreen,
  paintingBlue,
  paintingRed
};

export const ColorContainer = connect(mapStateToProps, mapDispatchToProps)(ColorBtns);
