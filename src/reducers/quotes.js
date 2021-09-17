import uuid from 'uuid';

export default (state = [{id: 1, content: "Ctest", author: "ATest"}, {id: 2, content: "CTEST2", author: "ATEST2"}], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      console.log("adding quote: ", action)
      return [...state, {
        id: uuid(),
        content: action,
        author: action
      }]

    case "REMOVE_QUOTE":
      console.log("removing quote: ", action)

    case "UPVOTE_QUOTE":
      console.log("up voting quote: ", action)

    case "DOWNVOTE_QUOTE":
      console.log("down voting quote: ", action)

    default:
      return state
  }
}
