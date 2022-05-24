import { text, color, select, number } from '@storybook/addon-knobs';
// color
<GlobalHeader navbarBg= {color('Navbar background color',  '#E5EEF7')}/>

// boolean
enableBoolean={boolean("EnableBoolena", false)}

// text
 modalText=text("Video Image","https://via.placeholder.com/755x598")

// select
const button_bg_options = {    
    primary: 'primary',
    secondary: 'secondary',
    Link: 'link',
    danger: 'danger',
    warning: 'warning',
    info: 'info',
    light: 'light',
    dark: 'dark',
    gray:'alice-blue',
    lightGray:'lightGray'
};



storiesOf('Molecules | Global Header', module)
    .add('Global header default', () => {

        return (
                <GlobalHeader
                heroHeight= {number('Desktop Height:', '336')}
                button_bg={select('label', button_bg_options, 'primary')}
                navbarBg= {color('Navbar background color',  '#144D43')}
                enableBoolean={boolean("EnableBoolena", false)}
                modalText=text("Video Image","https://via.placeholder.com/755x598")
                />
        )
    })



    // uses
    
    // dynamic style added
    style={{color: `${textColor}`}}
    
    // dynamic class add
    className={`carousel slide ${autoWidth?"auto-width":""}`}