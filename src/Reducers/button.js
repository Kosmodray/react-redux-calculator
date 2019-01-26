const initialState=[
    {
        text:'C',
        name:'clear'
    },
    {
        text:'+/-',
        name:'plus-minus'
    },
    {
        text:'%',
        name:'percent'
    },
    {
        text:'←',
        name:'del'
    },
    {
        text:'7',
        name:'number'
    },
    {
        text:'8',
        name:'number'
    },
    {
        text:'9',
        name:'number'
    },
    {
        text:'÷',
        operator:true,
        name:'operator'
    },
    {
        text:'4',
        name:'number'
    },
    {
        text:'5',
        name:'number'
    },
    {
        text:'6',
        name:'number'
    },
    {
        text:'X',
        name:'operator',
        operator:true
    },
    {
        text:'1',
        name:'number'
    },
    {
        text:'2',
        name:'number'
    },
    {
        text:'3',
        name:'number'
    },
    {
        text:'-',
        name:'operator',
        operator:true
    },
    {
        text:'0',
        name:'number',
        zero: true
    },
    {
        text:'.',
        name:'dot'
    },
    {
        text:'=',
        name:'equal',
        equalOperator: true
    },
    {
        text:'+',
        name:'operator',
        operator: true
    },
]

const buttons = (state=initialState) => {
    return state;
}
export default buttons;