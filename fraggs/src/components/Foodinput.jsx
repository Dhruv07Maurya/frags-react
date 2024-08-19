
function Foodinput({update}) {
    return <>
        <input type="text" placeholder="Enter an Item!"
        onKeyDown={update}
        ></input>
    </>
}
export default Foodinput;
