const redux=require('redux');
const createStore=redux.createStore;

const Buy_Book="Buy_Book";

const initialState={
    numberOfBooks:10
}

function buyBook(){
    return {
        type:Buy_Book,
        info:"My First edux Code"
    }
}

const Reducer = (state=initialState,action) =>{
    
    switch(action.type){
        case "Buy_Book":return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
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
store.dispatch(buyBook());
unsubscribe();