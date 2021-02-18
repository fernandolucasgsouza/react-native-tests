
  const addCommentary = (commentary, userName,commentsState, setCommentsState) => {

    const commentaryCurrent = {
        date: Date.now(),
        text: commentary,
        userName
    }

    setCommentsState([...commentsState, commentaryCurrent]);
    return commentaryCurrent;
};
export default addCommentary;
