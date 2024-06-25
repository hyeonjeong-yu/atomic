import Checkbox from "./components/Atoms/Checkbox/Checkbox";
import Typography from "./components/Atoms/Typography/Typography";
import CheckboxGroup from "./components/Molecules/CheckboxGroup/CheckboxGroup";
import Tab from "./components/Molecules/Tab/Tab";
import DropdownMenu from "./components/Organism/DropdownMenu/DropdownMenu";
import ButtonGroup from "./components/Molecules/ButtonGroup/ButtonGroup";
import { buttons } from "./components/Molecules/ButtonGroup/data";
import React, { useMemo } from 'react';
import Table from "./components/Molecules/Table/Table";

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
            <Typography variant='headline2'/>

            <h3>Tab</h3>
            <Tab tabs={tabs} />

            <h3>ButtonGroup</h3>
            <ButtonGroup buttons={buttons} />

            <h3>Table</h3>
            <Table columns={columns} data={data} />

        </div>
    );
}

export default App;
