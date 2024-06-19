import Button from "./components/Atoms/Button/Button";
import Icon from "./components/Atoms/Icon/Icon";
import Checkbox from "./components/Atoms/Checkbox/Checkbox";
import CheckboxGroup from "./components/Molecules/CheckboxGroup/CheckboxGroup";

function App() {

    const options = [
        { label: '옵션 1', value: 'option1' },
        { label: '옵션 2', value: 'option2' },
        { label: '옵션 3', value: 'option3' },
        { label: '옵션 4', value: 'option4' },
    ]

    // callback func
    const aa = (checkedItems) => {
        console.log('checkbox status change: ', checkedItems);
    }
    return (
        <div className="App">
            <h3>Checkbox</h3>
            <Checkbox label='option1' checked={true}/>

            <h3>Checkbox Group</h3>
            <CheckboxGroup
                options={options}
                onChange={aa}
            />
        </div>
    );
}

export default App;
