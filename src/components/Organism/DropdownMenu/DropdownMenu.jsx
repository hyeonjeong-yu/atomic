import React from 'react';
import { useState } from 'react';
import Dropdown from '../../Molecules/Dropdown/Dropdown';

const DropdownMenu = () => {
    const dropdowns = [
        {
            id: 1,
            title: 'Dropdown 1',
            items: [
                'Dropdown 1 - Item 1',
                'Dropdown 1 - Item 2',
                'Dropdown 1 - Item 3'
            ]
        },
        {
            id: 2,
            title: 'Dropdown 2',
            items: [
                'Dropdown 2 - Item 1',
                'Dropdown 2 - Item 2',
                'Dropdown 2 - Item 3'
            ]
        },
        {
            id: 3,
            title: 'Dropdown 3',
            items: [
                'Dropdown 3 - Item 1',
                'Dropdown 3 - Item 2',
                'Dropdown 3 - Item 3'
            ]
        }
    ]

    // 현재 열린 dropdown id를 저장
    const [openDropdownId, setOpenDropdownId] = useState(null);

    // 클릭된 dropdown의 id와 opendropdownId를 비교
    // 클릭된 dropdown open, 다른 dropdown close
    const toggleDropdown = (dropdownId) => {
        setOpenDropdownId(id => (id === dropdownId ? null : dropdownId));
    }

    return (
        dropdowns.map(dropdown => (
            <Dropdown
                key={dropdown.id}
                title={dropdown.title}
                isOpen={dropdown.id === openDropdownId}
                toggleDropdown={() => toggleDropdown(dropdown.id)}
            >
                {
                    dropdown.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </Dropdown>
        ))
    )
}

export default DropdownMenu