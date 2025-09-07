"use client";
import { useState, useCallback, useEffect } from 'react';
import { FauxEvent } from '../../Event/FauxEvent';
const _gridMax = 6;
/**
 * 
 * @param {*} param0 
 * @returns 
 */
function GridSizeControl({ onChange, className, defaultSize }) {

    const [size, setSize] = useState(defaultSize);
    const maxGrid = (() => {
        let grid = [];
        for (var i = 1; i <= _gridMax; i++) {
            grid.push(i);
        }
        return grid;
    })();

    const onChangeMemo = useCallback((e) => onChange(e), [onChange]);

    /**
     * onLocalChange
     * 
     * @param {string} name 
     * @param {React.SyntheticEvent} e 
     */
    function onLocalChange(e) {
        let value = Number(e.target.value);
        if (e.target.name === 'yLength') {
            setSize((s) => { return { ...s, y: Math.abs(value) % (_gridMax + 1) } });
        } else if (e.target.name === 'xLength') {
            setSize((s) => { return { ...s, x: Math.abs(value) % (_gridMax + 1) } })
        }
        return onChangeMemo(e);
    }

    useEffect(() => {
        const changer = (e) => {
            const value = Number(e.target.value);
            if (e.target.name === 'yLength') {
                setSize((s) => { return { ...s, y: Math.abs(value) % (_gridMax + 1) } });
            } else if (e.target.name === 'xLength') {
                setSize((s) => { return { ...s, x: Math.abs(value) % (_gridMax + 1) } })
            }
            return onChangeMemo(e);
        }
        changer(FauxEvent('yLength', defaultSize.y));
        changer(FauxEvent('xLength', defaultSize.x));
    }, [defaultSize, onChangeMemo]);

    return [
        <label key={"gridSizer"} className={`gridSize ${className}`}>
            <p>Grid Size:</p>
            <span className="sliderVertical" >
                <input name={"yLength"} key={"yLength"} type="range" min={1} max={_gridMax} step={1} value={size.y} onChange={onLocalChange} list="tickmarks"
                    style={{ width: (4 + _gridMax) + 'vh' }} />
            </span>
            <span className="sliderHorizontal" >
                <section className={"t123"} style={{ width: (_gridMax + 0.5).toString() + 'vh', height: _gridMax.toString() + 'vh' }}>
                    {maxGrid.map(n => maxGrid.map(m =>
                        <div
                            key={(_gridMax * (n - 1) + (m - 1)).toString()}
                            className={"gridOptSignifier " + (size.x >= m && size.y >= n ? '' : 'oob')} >
                        </div>
                    ))}
                </section>
                <input name={"xLength"} key={"xLength"} type="range" min={1} max={_gridMax} step={1} value={size.x} onChange={onLocalChange} list="tickmarks"
                    style={{ width: (2 + _gridMax) + 'vh' }} />
            </span>
            <datalist id="tickmarks">
                {(maxGrid.map(n => (<option key={n.toString()} value={n} />)))}
            </datalist>
        </label>,
    ]
}//GridSizeControl

export { GridSizeControl }