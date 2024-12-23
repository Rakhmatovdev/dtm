import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import Chart from 'react-apexcharts';

type UChartProps = {
    type: "line" | "area" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined
    className?: string;
    options?: any;
    series?: any;
    height?: string | number;
    width?: string | number;
};

const UChart = ({ type, className, options, series, height,width }: UChartProps) => {
    const [state, __] = useState({
        options: {
            chart: {
                id: 'apexchart-example',
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 126],
            },
        ],
    });

    return (
        <Chart
            options={options || state.options}
            series={series || state.series}
            type={type}
            className={className || 'mt-4 sm:mt-10 '}
            height={height || (useIsMobile() ? '226' : '350')}
            width={width || (useIsMobile() ? "226": '350')}
        />
    );
};

export default UChart;