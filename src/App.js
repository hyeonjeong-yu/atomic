import Checkbox from "./components/Atoms/Checkbox/Checkbox";
import Text from "./components/Atoms/Text/Text";
import CheckboxGroup from "./components/Molecules/CheckboxGroup/CheckboxGroup";
import Tab from "./components/Molecules/Tab/Tab";
import DropdownMenu from "./components/Organism/DropdownMenu/DropdownMenu";
import ButtonGroup from "./components/Molecules/ButtonGroup/ButtonGroup";
import { buttons } from "./components/Molecules/ButtonGroup/data";
import React, { useMemo } from 'react';
import Table from "./components/Molecules/Table/Table";
import Icon from "./components/Atoms/Icon/Icon";
import CardList from "./components/Organism/CardList/CardList";
import Chart from "./components/Molecules/Charts/Chart";
import BarChart from "./components/Molecules/Charts/BarChart";

function App() {

    const options = [
        { label: '옵션 1', value: 'option1' },
        { label: '옵션 2', value: 'option2' },
        { label: '옵션 3', value: 'option3' },
        { label: '옵션 4', value: 'option4' },
    ]

    // callback func
    const statusChange = (checkedItems) => {
        console.log('checkbox status change: ', checkedItems);
    }

    const tabs = [
        { label: 'Tab 1', content: <div>Tab 1 Content</div> },
        { label: 'Tab 2', content: <div>Tab 2 Content</div> },
        { label: 'Tab 3', content: <div>Tab 3 Content</div> },
    ]

    const columns = useMemo( () => [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Age',
            accessor: 'age',
        },
        {
            Header: 'Country',
            accessor: 'country',
        }],[]
    );
    
    const data = useMemo( () => [
        {
            name: 'John Doe',
            age: 28,
            country: 'USA',
        },
        {
            name: 'Jane Smith',
            age: 22,
            country: 'Canada',
        },
        {
            name: 'George Brown',
            age: 35,
            country: 'UK',
        }],[]
    );

    const notices = [
        {title: '공지사항 1', date: '2024-06-01'},
        {title: '공지사항 2', date: '2024-06-02'},
    ]

    const chartData = [
        // name: X축의 dataKey가 됨
        { name: '2024-06-01', uv: 4000, pv: 2400, amt: 2400 },
        { name: '2024-06-02', uv: 3000, pv: 1398, amt: 2210 },
        { name: '2024-06-03', uv: 2000, pv: 9800, amt: 2290 },
        { name: '2024-06-04', uv: 2780, pv: 3908, amt: 2000 },
        { name: '2024-06-05', uv: 1890, pv: 4800, amt: 2181 },
        { name: '2024-06-06', uv: 2390, pv: 3800, amt: 2500 },
        { name: '2024-06-07', uv: 3490, pv: 4300, amt: 2100 },
        { name: '2024-06-08', uv: 3490, pv: 4300, amt: 2100 },
        { name: '2024-06-09', uv: 3490, pv: 4300, amt: 2100 },
        { name: '2024-06-10', uv: 3490, pv: 4300, amt: 2100 },
      ];

    return (
        <div className="App">
            <h3>Checkbox</h3>
            <Checkbox label='option1' checked={true}/>

            <h3>Checkbox Group</h3>
            <CheckboxGroup
                options={options}
                onChange={statusChange}
            />

            <h3>DropdownMenu</h3>
            <DropdownMenu />

            <h3>Heading</h3>
            <Text variant='headline2' children='Notice' />

            <h3>Tab</h3>
            <Tab tabs={tabs} />

            <h3>ButtonGroup</h3>
            <ButtonGroup buttons={buttons} />

            <h3>Table</h3>
            <Table columns={columns} data={data} />

            <Icon name='notice' />

            <CardList title='공지사항' showRightIcon={true} items={notices}/>

            <h3>Charts</h3>
            <Chart data={chartData} />
            <BarChart data={chartData} />
        </div>
    );
}

export default App;
