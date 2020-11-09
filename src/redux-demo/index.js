const redux = require('redux');
const createStore=redux.createStore;

const initialState={
    numberOfBooks:10,
    numberOfPens:20
}

function buyBook(){
    return {
        type:"Buy_Book",
        payload:"My First Redux Code"
    }
}

function buyPen(){
    return {
        type:"Buy_Pen",
        payload:"My Sec. Redux Code"
    }
}

const Reducer = (state=initialState,action) =>{
    
    switch(action.type){
        case "Buy_Book":return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        
        case "Buy_Pen":return{
            ...state,
            numberOfPens:state.numberOfPens-2
        }
        default: return state;
    }
    
}

const store=createStore(Reducer);
console.log("Initial State",store.getState());
const unsubscribe=store.subscribe(()=>{console.log('Updated State Value', store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();