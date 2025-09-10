"use client";
import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { FauxEvent } from '../../Event/FauxEvent';
const _gridMax = 6;
/**
 * 
 * @param {*} param0 
 * @returns 
 */
function GridSizeControl({ onChange, className, defaultSize }) {

    const [size, setSize] = useState(defaultSize);

    const maxGrid = useMemo(() => Array.from(
        { length: _gridMax }
        , (_, i) => i + 1),
        [_gridMax]
    );

    const onChangeMemo = useCallback((e) => onChange(e), [onChange]);

    const xInputRef = useRef(null);
    const yInputRef = useRef(null);

    function updateSize(name, rawValue) {
        const value = Math.abs(Number(rawValue)) % (_gridMax + 1);
        setSize((prev) => ({
            ...prev,
            [name === 'yLength' ? 'y' : 'x']: value
        }));
        // Update the corresponding input's value directly using refs
        if (name === 'xLength' && xInputRef.current) {
            xInputRef.current.value = value.toString();
        }
        if (name === 'yLength' && yInputRef.current) {
            yInputRef.current.value = value.toString();
        }
    }
    /**
     * onLocalChange
     * 
     * @param {string} name 
     * @param {React.SyntheticEvent} e 
     */
    function onLocalChange(e) {
        updateSize(e.target.name, e.target.value);
        onChangeMemo(e);
    }

    useEffect(() => {
        if (xInputRef.current) {
            xInputRef.current.value = defaultSize.x.toString();
        }
        if (yInputRef.current) {
            yInputRef.current.value = defaultSize.y.toString();
        }

        const yValue = defaultSize.y;
        const xValue = defaultSize.x;

        updateSize('yLength', yValue.toString());
        updateSize('xLength', xValue.toString());

        onChangeMemo(FauxEvent('yLength', yValue));
        onChangeMemo(FauxEvent('xLength', xValue));
    }, [defaultSize, onChangeMemo]);

    return (
        <label key={"gridSizer"} className={`gridSize ${className}`}>
            <p>Grid Size:</p>
            <span className="sliderVertical" >
                <input
                    name={"yLength"}
                    key={"yLength"} type="range"
                    min={1}
                    max={_gridMax}
                    step={1}
                    value={size.y}
                    onChange={onLocalChange} list="tickmarks"
                    style={{ width: (4 + _gridMax) + 'vh' }}
                />
            </span>
            <span className="sliderHorizontal" >
                <section
                    className={"t123"}
                    style={{
                        width: (_gridMax + 0.5).toString() + 'vh',
                        height: _gridMax.toString() + 'vh'
                    }}>
                    {maxGrid.map(n => maxGrid.map(m =>
                        <div
                            key={(_gridMax * (n - 1) + (m - 1)).toString()}
                            className={"gridOptSignifier " + (size.x >= m && size.y >= n ? '' : 'oob')} >
                        </div>
                    ))}
                </section>
                <input
                    name={"xLength"}
                    key={"xLength"}
                    type="range"
                    min={1}
                    max={_gridMax}
                    step={1}
                    value={size.x}
                    onChange={onLocalChange}
                    list="tickmarks"
                    style={{ width: (2 + _gridMax) + 'vh' }}
                />
            </span>
            <datalist id="tickmarks">
                {(maxGrid.map(n => (<option key={n.toString()} value={n} />)))}
            </datalist>
        </label>);

}//GridSizeControl

export { GridSizeControl }