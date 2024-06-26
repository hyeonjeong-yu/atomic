import React from 'react'
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'
import { parseISO } from 'date-fns';

const Chart = ({ data }) => {

    // 날짜 - '일'만 추출
    const formatXAxis = (tick) => {
        const date = parseISO(tick);
        return date.getDate();
    }

    return (
        <BarChart width={600} height={300} data={data}>
            <CartesianGrid
                vertical={false} //세로선 제거
            />
            <XAxis
                dataKey="name"
                tickLine={false} //눈금 해제
                axisLine={false}  //축 라인 제거
                tickFormatter={formatXAxis} //축에 표시되는 text
            />
            <YAxis />
            <Tooltip
                wrapperStyle={{
                    width: '100px',
                    // height: '30px'
                }}
                contentStyle={{
                    backgroundColor: '#492f79', //배경색
                    borderRadius: '10px',
                }}
            />
            <Legend />
            <Bar
                type="monotone"
                dataKey="uv"
                stroke="#f5cc66"
                strokeWidth={3} //선 굵기
                dot={false} //점 제거
                name='지난달'
            />
            <Bar type="monotone" dataKey="pv" stroke="#6381ee" />
        </BarChart>
    )
}

export default Chart