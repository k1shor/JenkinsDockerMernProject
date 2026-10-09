// jsx - JavaScript + XML (js executable)
// javascript and html code together
// all the tags must have closing tag
// <img></img> or <img/>, <br></br> or <br />

import './mystyle.css'

const Firstpage = () => {

    let name = 'RAM'
    // let styleObj = {backgroundColor: 'red', fontSize: '48px'}

    return (
        <>
            <h1 className='myHeading'
                // style={styleObj}
                style={{ backgroundColor: 'red', fontSize: '48px' }}
            >This is my First Component.
                Welcome, {name}
            </h1>
        </>
    )
}

export default Firstpage