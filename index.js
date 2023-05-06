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
    let scripsFromRepo = data.split("\n").map(elm => {return {name: elm.split(":")[0], author: elm.split(":")[1], url: elm.split(":")[2]}})
    console.log(scripsFromRepo);
})()