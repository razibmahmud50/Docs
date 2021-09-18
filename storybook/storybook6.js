import React from 'react';
// import CmpControls from './cmpControls';


// component creation start 
const CmpControls = ( props )=> {
    const {
        orientation, hexBg, borderWidth
    } = props
    return (
        <div className={orientation || ''}>

            <div className='demo-wrap' style={{
                backgroundColor: hexBg || '',
                borderWidth: borderWidth ||''
            }}>
                <h3>All storybook controls and arg type</h3>
                <p>controls description Do aute fugiat proident magna eiusmod et nisi consectetur proident id dolor ad. Voluptate nostrud anim esse aliquip ut dolor in esse esse magna ex aliquip aute. Veniam amet sunt adipisicing labore. Esse nostrud sunt deserunt eiusmod non quis minim exercitation amet cupidatat. Nulla anim esse ullamco eiusmod. Et ipsum laboris esse labore eu eu ad aute consequat velit commodo in. Adipisicing minim adipisicing proident sit cupidatat sunt eu.</p>
            </div>
        </div>
    )
}
// component creation end



var data = [
    {
        id: 1,
        flagSource: 'images/country/argentina.png',
        countryName: 'Argentina',
        languageName: 'Spnish'
    },
    {
        id: 2,
        flagSource: 'images/country/australia.png',
        countryName: 'Australia',
        languageName: 'English'
    }
    , {
        id: 3,
        flagSource: 'images/country/brazil.png',
        countryName: 'Brazil',
        languageName: 'English'
    }
    , {
        id: 4,
        flagSource: 'images/country/canada.png',
        countryName: 'Canada',
        languageName: 'English'
    }
    , {
        id: 5,
        flagSource: 'images/country/France.png',
        countryName: 'France',
        languageName: 'English'
    }
    , {
        id: 5,
        flagSource: 'images/country/Italy.png',
        countryName: 'Italy',
        languageName: 'English'
    }
    , {
        id: 5,
        flagSource: 'images/country/Japan.png',
        countryName: 'Japan',
        languageName: 'English'
    }
    , {
        id: 5,
        flagSource: 'images/country/Netherland.png',
        countryName: 'Netherland',
        languageName: 'English'
    }
    , {
        id: 5,
        flagSource: 'images/country/Spain.png',
        countryName: 'Spain',
        languageName: 'spanish'
    }
    , {
        id: 5,
        flagSource: 'images/country/uk.png',
        countryName: 'United Kingdom',
        languageName: 'English'
    }
];


// story start form now!
export default {
    title: 'Others/all controls',
    component: CmpControls,

    argTypes: {
        inputText: {
            control:'text'
        },
        inputDate: {
            control:{
                type:'date'
            }
        },
        hexBg: { control: 'color' },
      textColor: {
            control:{type: 'color'}
      },
      orientation: {
        control: {
            type: 'check',
            options: ['orientation-right'],
        }
      },
      multiCheck:{
        control: {
            type: 'check',
            options: ['check1', 'check2', 'checkn'],
        }
      },
      multiCheckInline:{
        control: {
            type: 'inline-check',
            options: ['check1', 'check2', 'checkn'],
        }
      },
      radioGroup:{
        control: {
            type: 'radio',
            options: ['radio1', 'radio2', 'radion'],
        }
      },
      radioGroupInline:{
        control: {
            type: 'inline-radio',
            options: ['radio inline 1', 'radio inline 2', 'radio inline n'],
        }
      },
      
        labelBoolean: {
          control: { type: 'boolean' },
        },

        borderWidth: {
            control: {
                type: 'range',
                min: 0, 
                max: 15, 
                step: 1
            }
        },
        selectitems: {
            control: {
                type:'select',
                options: [
                    'select1',
                    'select2',
                    'select3'
                ]
            }
        },
        multiSelect: {
            control: {
                type:'multi-select',
                options: [
                    'select1',
                    'select2',
                    'select3'
                ]
            }
        },
        objectType: {
            control: "object",
            table: [data]
        },

        withDescription: {
            name: 'Props with description',
            type: { name: 'string', required: false },
            defaultValue: 'default value label',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            table: {
              type: { summary: 'string' },
              defaultValue: { summary: 'Hello' },
            },
            control: {
              type: 'inline-radio',
              options: ['simple option', 'another-option'],
            }
        },
        descriptionWithdropdown: {
            name: 'dropdown label',
            type: { name: 'string', required: false },
            defaultValue: '',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            table: {
                type: { 
                  summary: 'open dropdown label', 
                  detail: "Lorem Ipsum is simply dummy text of the" 
                },
              },
            control: {
              type: 'text'
            }
        }
    }
}


const Template = (args) => <CmpControls {...args} />;
export const Default = Template.bind({});
Default.args =  {
    number:0,
    width: 350,
    borderWidth: 2,
    objectType: [
        { "id":5,
            "flagSource":"images/country/France.png",
            "countryName":"France",
            "languageName":"English"
        },
        {
            "id":5,
            "flagSource":"images/country/Italy.png",
            "countryName":"Italy",
            "languageName":"English"
        },
        {
            "id":5,
            "flagSource":"images/country/Japan.png",
            "countryName":"Japan",
            "languageName":"English"
        },
        {
            "id":5,
            "flagSource":"images/country/Netherland.png",
            "countryName":"Netherland",
            "languageName":"English"
        },
        {
            "id":5,
            "flagSource":"images/country/Spain.png",
            "countryName":"Spain",
            "languageName":"spanish"
        },
        {
            "id":5,
            "flagSource":"images/country/uk.png",
            "countryName":"United Kingdom",
            "languageName":"English"
        }
    ]
};