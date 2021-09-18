import { text, color, select,number } from '@storybook/addon-knobs';
// color
<GlobalHeader navbarBg= {color('Navbar background color',  '#E5EEF7')}/>
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
    	const button_bg = select(button_bg_lbl, button_bg_options, button_bg_defaultValue, Default_Setup)

        return (
                <GlobalHeader
                button_bg={button_bg}
                navbarBg= {color('Navbar background color',  '#144D43')}
                navLinkColor= {color('Nav link color',  '#ffffff')}
                />
        )
    })