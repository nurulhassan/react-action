const redux=require('redux');
const store=redux.createStore;

const Buy_Book="Buy Book";

const initialState={
    numberOfBooks:10
}

function buyBook(){
    return {
        type:Buy_Book,
        info:"My First edux Code"
    }
}