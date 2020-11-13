const {redux, applyMiddleware, createStore} = require('redux');
const {combineReducers} = require('redux');

const initialStateBooks={
    numberOfBooks:10
}

const initialStatePens={
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

const booksReducer = (state=initialStateBooks,action) =>{
    
    switch(action.type){
        case "Buy_Book":return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        
        default: return state;
    }
    
}

const pensReducer = (state=initialStatePens,action) =>{
    
    switch(action.type){
        case "Buy_Pen":return{
            ...state,
            numberOfPens:state.numberOfPens-2
        }
           
        default: return state;
    }
    
}

const reducer=combineReducers({
    Book:booksReducer,
    Pen:pensReducer
});

const logger=store=>{
    return next=>{
        return action=>{
            const result=next(action);
            console.log("middleware log",result);
            return result; 
        }
    }
}

const store=createStore(reducer,applyMiddleware(logger));

console.log("Initial State",store.getState());
const unsubscribe=store.subscribe(()=>{console.log('Updated State Value', store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();