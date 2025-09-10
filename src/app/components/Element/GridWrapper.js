"use client";
import "../../App.css";
import { useState } from "react";
import { Grid } from "../Util/Grid/Grid";
import { OptionPipe } from "../Util/Filter/PipeFilter";

import { ElementView } from "../Element/ElementView";

import { filterSet } from "../Util/filter";

import { inputElement, submitElement } from "../UX/input";
import { MixedInputForm } from "../UX/Input/MixedInputForm";
import { useGridRef } from "../Context/GridContext";

function InputArchitecture({ onSubmit }) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = (e) => { e.preventDefault(); setIsOpen(prev => !prev); }

    return (
        <details open className={`details ${isOpen ? "openManually" : ""}`} >
            <summary onClick={e => { toggleOpen(e); }}>Submit/Options</summary>
            <OptionPipe
                input={(onSubmitToPipe) => (
                    <MixedInputForm
                        inputElement={inputElement}
                        submitElement={submitElement}
                        onSubmit={onSubmitToPipe}
                    />
                )}
                filterSet={filterSet}
                onOutput={onSubmit}
            />
        </details>
    );
}

//------static functions-------------------------------------------------------//
function GridWrapper() {
    const gridElement = useGridRef();
    /**
     *
     * @param {import('./Element/ElementView').BurningItem[]} gridData
     * @returns
     */
    const burningElement = (gridData) => {
        if (!gridElement) {
            return null;
        }
        return (
            <ElementView data={gridData} parent={gridElement} />
        );
    }
    /**
     * inputForm
    *
    * @param {*} onSubmitToGrid
    * @returns
    */
    const inputForm = (onSubmitToGrid) => {
        return <InputArchitecture onSubmit={onSubmitToGrid} />;
    } //inputForm

    return (
        <div className="Grid-reducer-holder">
            <Grid form={inputForm}>
                {burningElement}
            </Grid>
        </div>
    );
}
export { GridWrapper }