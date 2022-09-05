function monkeyPatch(command) {
    if (command === "upvote") return this.upvotes++;
    if (command === "downvote") return this.downvotes--;

    let upvote = this.upvotes;
    let downvote = this.downvotes;
    let totalVotes = upvote + downvote;
    let balance = upvote - downvote;

    function ratingState() {
        if (totalVotes < 10) return "new";
        if (upvote > totalVotes * 0.66) return "hot";
        if (balance >= 0 && totalVotes > 100) return "controversial";
        if (balance < 0) return "unpopular";
        return "new";
    }

    if (totalVotes > 50) {
        let inflateVote = Math.ceil(Math.max(upvote, downvote) * 0.25);
        return [
            upvote + inflateVote,
            downvote + inflateVote,
            balance,
            ratingState(),
        ];
    }

    return [upvote, downvote, balance, ratingState.call(this)];
}
let post = {
    id: "3",
    author: "emil",
    content: "wazaaaaa",
    upvotes: 100,
    downvotes: 100,
};
monkeyPatch.call(post, "upvote");
monkeyPatch.call(post, "downvote");
let score = monkeyPatch.call(post, "score"); // [127, 127, 0, 'controversial']
for (let i = 0; i < 50; i++) {
    monkeyPatch.call(post, "downvote");
} // (executed 50 times)

score = monkeyPatch.call(post, "score");
console.log(score);
// Program to extend a forum post record  with voting functionality.
// 3 functions
// -- upvote, downvote and total score (up - down)
// -- if total > 50 votes
// --- the one with more votes * 0.25 rounded up (Math.ceil)

// every post has a rating, depends on its score
// if positive votes are the overwhelming majority (>66%) the rating is hot
// else if no majority and the balance is non-negative and the sum of both votes is more then 100, rating = controversial
// if balanse is negative, the rating becomes unpopular
// if the post has less than 10 total votes, or no other rating is met, its rating is new regardless of balance.
// (this clcs are performed on the actual numbers)

// function will be invoked with the call(object, arguments)

// forum post will be attached, has following structure:
// {
//     id: <id>,
//     author: <author name>,
//     content: <text>,
//     upvotes: <number>,
//     downvotes: <number>
//   }