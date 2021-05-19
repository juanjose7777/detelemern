import React, { Component } from 'react'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
} from 'react-vis'

export default class Graficas extends Component {
    render() {
        return (
            
                <XYPlot
                    xType="ordinal"
                    width={window.innerWidth * 0.8}
                    height={500}
                >
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries
                        color="red"
                        data={[
                            {
                                x: 'michel',
                                y: 4,
                            },
                            {
                                x: 'fredy',
                                y: 5,
                            },
                            {
                                x: 'marcus',
                                y: 2,
                            },
                        ]}
                    />
                    <VerticalBarSeries
                        color="blue"
                        data={[
                            {
                                x: 'frank',
                                y: 11,
                            },
                            {
                                x: 'joe',
                                y: 6,
                            },
                            {
                                x: 'juan',
                                y: 7,
                            },
                        ]}
                    />
                    <VerticalBarSeries
                        color="yellow"
                        data={[
                            {
                                x: 'leo',
                                y: 1,
                            },
                            {
                                x: 'santi',
                                y: 2,
                            },
                            {
                                x: 'yoana',
                                y: 6,
                            },
                        ]}
                    />

                </XYPlot>
            
        )
    }
}







