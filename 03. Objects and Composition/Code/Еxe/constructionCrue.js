function constructionCrue(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    return worker;
}
console.log(constructionCrue({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true,
}));
constructionCrue({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
});
constructionCrue({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false,
});