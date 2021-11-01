import { text, color, select, number } from '@storybook/addon-knobs';
// color
<GlobalHeader navbarBg= {color('Navbar background color',  '#E5EEF7')}/>

// boolean
enableBoolean={boolean("EnableBoolena", false)}

// text
 modalText=text("Video Image","https://via.placeholder.com/755x598")

// select
const button_bg_lbl = 'Button Background';
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
const button_bg_defaultValue = 'primary';



storiesOf('Molecules | Global Header', module)
    .add('Global header default', () => {
    	const button_bg = select(button_bg_lbl, button_bg_options, button_bg_defaultValue)

        return (
                <GlobalHeader
                button_bg={button_bg}
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