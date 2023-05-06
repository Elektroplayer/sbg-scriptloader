(async function() {
    /*
        {
            name: string,
            author: string
            url: string
        }
    */
    // let scripsFromRepo;
    let data = await $.get('https://raw.githubusercontent.com/Elektroplayer/sbg-scriptloader/main/repo.txt');
    let scripsFromRepo = data.split("\n").map(elm => {return {name: elm[0], author: elm[1], url: elm[2]}})
    console.log(scripsFromRepo);
})()