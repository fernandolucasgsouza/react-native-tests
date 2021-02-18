

const likeValidate = (liked) => {

    return liked
        ? require('../../assets/images/s2-checked.png')
        : require('../../assets/images/s2.png');
        
}

const likePhoto = (liked, likes) => {
    let total = likes;
    
    if(liked) total--;
    else total++;

    return [!liked, total]
};

export { likeValidate, likePhoto }
