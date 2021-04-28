
import React, { Component } from 'react'
import GridLayout from 'react-grid-layout'
import { map } from 'lodash'
import { Line, Bar, Pie, DualAxes } from '@ant-design/charts'
import styles from './index.module.less'

export default class DashboardView extends Component {
  private layout = [
    { i: 'a', x: 0, y: 0, w: 4, h: 3 },
    { i: 'b', x: 4, y: 0, w: 8, h: 3 },
    { i: 'c', x: 8, y: 4, w: 4, h: 3 },
    { i: 'd', x: 0, y: 4, w: 8, h: 3 },
  ]

  constructor(props) {
    super(props)
    localStorage.getItem('dashboard') && (this.layout = JSON.parse(localStorage.getItem('dashboard')))
  }

  getLine() {
    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ]
    const config = {
      data,
      height: 400,
      xField: 'year',
      yField: 'value',
      point: {
        size: 5,
        shape: 'diamond',
      },
    }
    return <Line {...config} />
  }

  getBar() {
    const data_bar = [
      {
        type: '分类一',
        values: [76, 100],
      },
      {
        type: '分类二',
        values: [56, 108],
      },
      {
        type: '分类三',
        values: [38, 129],
      },
      {
        type: '分类四',
        values: [58, 155],
      },
      {
        type: '分类五',
        values: [45, 120],
      },
      {
        type: '分类六',
        values: [23, 99],
      },
      {
        type: '分类七',
        values: [18, 56],
      },
      {
        type: '分类八',
        values: [18, 34],
      },
    ]
    const config_bar = {
      data: data_bar.reverse(),
      xField: 'values',
      yField: 'type',
      isRange: true,
      // label: {
      //   position: 'midddle',
      //   layout: [{ type: 'adjust-color' }],
      // },
    }
    return <Bar {...config_bar} />
  }

  getPie() {
    const data_pie = [
      {
        type: '分类一',
        value: 27,
      },
      {
        type: '分类二',
        value: 25,
      },
      {
        type: '分类三',
        value: 18,
      },
      {
        type: '分类四',
        value: 15,
      },
      {
        type: '分类五',
        value: 10,
      },
      {
        type: '其他',
        value: 5,
      },
    ]
    const config_pie = {
      appendPadding: 10,
      data: data_pie,
      angleField: 'value',
      colorField: 'type',
      radius: 0.9,
      label: {
        type: 'inner',
        offset: '-30%',
        content: function content(_ref: { percent: string }) {
          const percent = parseFloat(_ref.percent)
          return `${percent * 100  }%`
        },
        style: {
          fontSize: 12,
          textAlign: 'center',
        },
      },
      interactions: [{ type: 'element-active' }],
    }
    return <Pie {...config_pie} />
  }

  getAxes() {
    const data_dual = [
      {
        time: '2019-03',
        value: 350,
        count: 800,
      },
      {
        time: '2019-04',
        value: 900,
        count: 600,
      },
      {
        time: '2019-05',
        value: 300,
        count: 400,
      },
      {
        time: '2019-06',
        value: 450,
        count: 380,
      },
      {
        time: '2019-07',
        value: 470,
        count: 220,
      },
    ]
    const config_dual = {
      data: [data_dual, data_dual],
      xField: 'time',
      yField: ['value', 'count'],
      geometryOptions: [
        { geometry: 'column' },
        {
          geometry: 'line',
          lineStyle: { lineWidth: 2 },
        },
      ],
    }
    return <DualAxes {...config_dual} />
  }

  getWidth() {
    return document.documentElement.clientWidth - 140
  }

  onLayoutChange(layouts) {
    const layout = []
    map(layouts, n => {
      layout.push({
        i: n.i,
        x: n.x,
        y: n.y,
        w: n.w,
        h: n.h,
      })
    })
    localStorage.setItem('dashboard', JSON.stringify(layout))
  }

  render() {
    return (
      <GridLayout
        className="layout"
        onLayoutChange={this.onLayoutChange.bind(this)}
        layout={this.layout}
        cols={24}
        autoSize={true}
        rowHeight={100}
        width={this.getWidth()}>
        <div key="a" className={styles['card-wrap']}>
          {this.getLine()}
        </div>
        <div key="b" className={styles['card-wrap']}>
          {this.getBar()}
        </div>
        <div key="c" className={styles['card-wrap']}>
          {this.getPie()}
        </div>
        <div key="d" className={styles['card-wrap']}>
          {this.getAxes()}
        </div>
      </GridLayout>
    )
  }
}
