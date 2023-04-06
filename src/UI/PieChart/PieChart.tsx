import React, {useMemo} from 'react';
import cls from './PieChart.module.css';

type ChardDataType = { label: string; value: number; }
type PieChartArrayType = { dashArray: number; dashOffset: number; }
type PieChartSize = 'small' | 'middle' | 'big';

interface IPieChart {
    items: ChardDataType[],
    size?: PieChartSize,
}

const PieChart = ({items, size}: IPieChart) => {
    const pieColors = [
        '#FFD1DC',
        '#EFA94A',
        '#7FB5B5',
        '#A18594',
        '#77DD77',
        '#FF7514',
        '#FF8C69',
    ]
    const getViewbox = useMemo(() => {
        switch(size) {
            case 'small':
                return '0 0 90 90';
                break;
            case 'big':
                return '0 0 55 55';
                break;
            case 'middle':
            default:
                return '0 0 70 70'
        }
    }, [size])
    const pieChartArray = (): PieChartArrayType[] => {
        let pieArray: PieChartArrayType[] = [];
        let offset = 0;
        const sumValues = items.reduce((sum, item) => sum + item.value, 0);
        items.forEach(item => {
            let sectionLength = (item.value * 100) / sumValues;
            pieArray.push({
                dashArray: sectionLength,
                dashOffset: offset,
            })
            offset += sectionLength;
        })
        return pieArray;
    }
    return (
        <div className={cls.canvas}>
            <svg width="500" height="500" viewBox={getViewbox}>
                {
                    items.map((item, index) => (
                        <circle style={{
                            stroke: pieColors[index],
                            strokeDasharray: `${pieChartArray()[index].dashArray} 100`,
                            strokeDashoffset: '-' + pieChartArray()[index].dashOffset
                        }} className={cls.unit} r="15.9" cx="50%" cy="50%" key={item.label}></circle>
                    ))
                }
            </svg>
        </div>
    );
};

export default PieChart;