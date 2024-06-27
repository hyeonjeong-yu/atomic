import Checkbox from "./components/Atoms/Checkbox/Checkbox";
import Text from "./components/Atoms/Text/Text";
import CheckboxGroup from "./components/Molecules/CheckboxGroup/CheckboxGroup";
import Tab from "./components/Molecules/Tab/Tab";
import DropdownMenu from "./components/Organism/DropdownMenu/DropdownMenu";
import ButtonGroup from "./components/Molecules/ButtonGroup/ButtonGroup";
import { buttons } from "./components/Molecules/ButtonGroup/data";
import React, { useMemo, useState } from 'react';
import Table from "./components/Molecules/Table/Table";
import Icon from "./components/Atoms/Icon/Icon";
import CardList from "./components/Organism/CardList/CardList";
import Chart from "./components/Molecules/Charts/Chart";
import BarChart from "./components/Molecules/Charts/BarChart";
import CardSection from "./components/Templates/CardSection/CardSection";
import Modal from "./components/Templates/Modal/Modal";

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
        {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-01'},
        {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-02'}
    ]
    const sections = [
        {
            icon: 'car',
            title: 'section 1',
            description: 'section의 description',
            size: 'small',
            contents: [
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-03', details: '안녕1'},
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-04', details: '안녕2'}
            ],
        },
        {
            icon: '',
            title: 'section 2',
            description: 'section의 description',
            size: 'small',
            contents: [
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-05'},
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-06'}
            ],
        },
        {
            icon: '',
            title: 'section 3',
            description: 'section의 description',
            size: 'small',
            showRightIcon: true,
            contents: [
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-07'},
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-08'}
            ],
        },
        {
            icon: '',
            title: 'section 4',
            description: 'section의 description',
            size: 'small',
            showRightIcon: true,
            contents: [
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-07'},
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-08'}
            ],
        },
        {
            icon: '',
            title: 'section 5',
            description: 'section의 description',
            size: 'medium',
            contents: [
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-07'},
                {title: '(WEB) 관제 시스템 업데이트 완료 안내', date: '2024-06-08'}
            ],
        },
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

      // modal open status
      const [isModalOpen, setIsModalOpen] = useState(false);
      // modal content
      const [activeModalContent, setActiveModalContent] = useState(null);

      // modal open & modal content update
      const handleCardItemClick = (item) => {
        // item: headerTitle, title, date, details
        // console.log(item)
        setActiveModalContent(item)
        setIsModalOpen(true);
      }
      // modal close
      const handleCloseModal = () => {
        setIsModalOpen(false);
      }

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

            <h3>List 하나만 렌더링</h3>
            <CardList
                title='공지사항'
                size='medium'
                showRightIcon={true}
                items={notices}
                onItemClick={handleCardItemClick}
            />
            
            {/* <h3>Charts</h3>
            <Chart data={chartData} />
            <BarChart data={chartData} /> */}

            <h3>Section</h3>
            <CardSection sections={sections} onCardItemClick={handleCardItemClick}/>

            {
                isModalOpen && activeModalContent && (
                    <Modal
                        modalType='default'
                        title={activeModalContent.headerTitle}
                        description='modalheader description'
                        contents={activeModalContent}
                        onClose={handleCloseModal}
                    />
                )
            }
        </div>
    );
}

export default App;
