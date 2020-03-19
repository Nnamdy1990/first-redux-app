const happyFace = document.getElementById("happy");
const sadFace = document.getElementById("sad");
const angryFace = document.getElementById("angry");
const confusedFace = document.getElementById("confused");
const bodyPage = document.getElementById("face");

const initialState = { emojistatus: "" };

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HAPPY":
      return { ...state, emojistatus: action.payload };
    case "SAD":
      return { ...state, emojistatus: action.payload };
    case "ANGRY":
      return { ...state, emojistatus: action.payload };
    case "CONFUSED":
      return { ...state, emojistatus: action.payload };
    default:
      return state;
  }
};

const store = Redux.createStore(myReducer);
console.log(store);

updateBody = () => (bodyPage.innerText = store.getState().emojistatus);

store.subscribe(updateBody);

function addHappy(emoji) {
  console.log(emoji);
  return {
    type: "HAPPY",
    payload: emoji
  };
}
function addSad(emoji) {
  return {
    type: "SAD",
    payload: emoji
  };
}
function addAngry(emoji) {
  return {
    type: "ANGRY",
    payload: emoji
  };
}
function addConfused(emoji) {
  return {
    type: "CONFUSED",
    payload: emoji
  };
}

happyFace.addEventListener("click", () => store.dispatch(addHappy("ʕ•ᴥ•ʔ")));
sadFace.addEventListener("click", () => store.dispatch(addHappy("(ง ͠° ͟ل͜ ͡°)ง")));
angryFace.addEventListener("click", () => store.dispatch(addHappy(" (•◡•) /")));
confusedFace.addEventListener("click", () => store.dispatch(addHappy("(ᵔᴥᵔ)")));
