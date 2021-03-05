import React from 'react'
import {
    Container,
    makeStyles,
} from "@material-ui/core"
import { purple } from "@material-ui/core/colors"
import ReactECharts from 'echarts-for-react';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.secondary.main,
        flexGrow: 1,
        width: "100%",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(12)
    }
}))

const SmoothedLineChart: React.FC = () => {
    const classes = useStyles()
    const options = {
        grid: {
            top: 8, right: 8, bottom: 24, left: 36,
            borderColor: "#fff"
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            },
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '30%'],
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.1)",
                }
            }
        },
        visualMap: {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [{
                gt: 0,
                lt: 10,
                color: 'rgba(255, 255, 255, 0.3)'
            }]
        },
        series: [
            {
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#fff',
                    width: 2
                },
                areaStyle: {},
                data: [
                    ['Jan', 200],
                    ['Feb', 560],
                    ['Mar', 750],
                    ['Apr', 580],
                    ['May', 250],
                    ['Jun', 300],
                    ['Jul', 450],
                    ['Aug', 300],
                    ['Oct', 100],
                    ['Nov', 400],
                    ['Dec', 800],
                ]
            }
        ],
        tooltip: {
            trigger: 'axis',
        },
    };
    return (
        <Container
            maxWidth={false}
            classes={{
                root: classes.container
            }}
        >
            <ReactECharts option={options} />
        </Container>);
};

export default SmoothedLineChart