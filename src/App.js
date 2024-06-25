import Button from "./components/Atoms/Button/Button";
import Checkbox from "./components/Atoms/Checkbox/Checkbox";
import Typography from "./components/Atoms/Typography/Typography";
import CheckboxGroup from "./components/Molecules/CheckboxGroup/CheckboxGroup";
import Tab from "./components/Molecules/Tab/Tab";
import DropdownMenu from "./components/Organism/DropdownMenu/DropdownMenu";

//icon
import { RiCarFill } from "react-icons/ri";
import { RiEBike2Fill } from "react-icons/ri";
import { RiWalkFill } from "react-icons/ri";
import { MdPedalBike } from "react-icons/md";
import { RiTruckFill } from "react-icons/ri";
import { RiRecycleFill } from "react-icons/ri";
import { MdAirportShuttle } from "react-icons/md";
import { RiBusFill } from "react-icons/ri";
import { RiPlaneFill } from "react-icons/ri";
import { RiShipFill } from "react-icons/ri";
import { MdLocalTaxi } from "react-icons/md";
import { MdElectricScooter } from "react-icons/md";
import excavatorIcon from '../src/assets/svg/mdi-Excavator.svg';
import petIcon from '../src/assets/svg/material-Pet.svg';


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

    return (
        <div className="App">
            <h3>Button</h3>
            <Button type='button' label='Button' icon={RiCarFill}></Button>
            <Button icon={RiEBike2Fill}></Button>
            <Button icon={RiWalkFill}></Button>
            <Button icon={MdPedalBike}></Button>
            <Button icon={RiTruckFill}></Button>
            <Button icon={RiRecycleFill}></Button>
            <Button icon={MdAirportShuttle}></Button>
            <Button icon={RiBusFill}></Button>
            <Button icon={RiPlaneFill}></Button>
            <Button icon={RiShipFill}></Button>
            <Button icon={MdLocalTaxi}></Button>
            <Button icon={MdElectricScooter}></Button>
            <Button iconSrc={excavatorIcon}></Button>
            <Button iconSrc={petIcon}></Button>

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
        </div>
    );
}

export default App;
