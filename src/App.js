import Button from "./components/Atoms/Button/Button";
import Icon from "./components/Atoms/Icon/Icon";

function App() {
    return (
        <div className="App">
            <Button size='medium' color='primary' label='버튼'>
                <Icon iconType="Pencil"/>
            </Button>
        </div>
    );
}

export default App;
