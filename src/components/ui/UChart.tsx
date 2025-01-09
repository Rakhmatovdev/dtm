import { useIsMobile } from '@/hooks/use-mobile';
import Chart from 'react-apexcharts';

type UChartProps = {
    type:
        | "line"
        | "area"
        | "bar"
        | "pie"
        | "donut"
        | "radialBar"
        | "scatter"
        | "bubble"
        | "heatmap"
        | "candlestick"
        | "boxPlot"
        | "radar"
        | "polarArea"
        | "rangeBar"
        | "rangeArea"
        | "treemap"
        | undefined;
    className?: string;
    options?: any;
    series?: any;
    height?: string | number;
    width?: string | number;
};

const UChart = ({ type, className, options, series, height, width }: UChartProps) => {
    const isMobile = useIsMobile();

    const defaultState = {
        options: {
            chart: {
                id: 'apexchart-example',
                toolbar: {
                    show: true,
                },
                responsive: [
                    {
                        breakpoint: 1920, // 1920px or smaller (screens larger than xl)
                        options: {
                            chart: {
                                height: 500,
                                width: "100%",
                            },
                            xaxis: {
                                labels: {
                                    show: true,
                                },
                            },
                        },
                    },
                    {
                        breakpoint: 1280, // xl and smaller
                        options: {
                            chart: {
                                height: 450,
                                width: "100%",
                            },
                        },
                    },
                    {
                        breakpoint: 768, // tablet
                        options: {
                            chart: {
                                height: 300,
                                width: "100%",
                            },
                        },
                    },
                    {
                        breakpoint: 480, // mobile
                        options: {
                            chart: {
                                height: 250,
                                width: "100%",
                            },
                        },
                    },
                ],
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
    };

    return (
        <div className={`chart-container ${className || ''}`}>
            <Chart
                options={options || defaultState.options}
                series={series || defaultState.series}
                type={type}
                height={height || (isMobile ? '250' : '100%')}
                width={width || '100%'}
            />
        </div>
    );
};

export default UChart;
