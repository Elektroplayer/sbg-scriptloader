(async function() {
    function collectionContains(collection, url) {
        for (var i = 0; i < collection.length; i++) {
            if( collection[i].src == url ) return true;
        }
        return false;
    }

    let data = await $.get('https://raw.githubusercontent.com/Elektroplayer/sbg-scriptloader/main/repo.txt');
    let repo = data.split("\n").map(elm => {
        let nelm = elm.split(":");
        return {
            name: nelm[0], 
            author: nelm[1], 
            url: `https://${nelm[1]}.github.io/${nelm[2]}`,
            active: !!localStorage.installedScripts?.find(elm => elm == `https://${nelm[1]}.github.io/${nelm[2]}`)
        };
    });

    if(data.endsWith("\n")) repo.pop();

    if(!localStorage.c) localStorage.installedScripts = [];

    var parent = document.getElementsByTagName('head').item(0);
    let scriptElements = parent.getElementsByTagName('script');
    let script;

    for(let i = 0;i<localStorage.installedScripts.length;i++) {
        if(collectionContains(scriptElements, localStorage.installedScripts[i])) return;

        script = document.createElement('script');
        script.type = 'text/javascript';
        script.setAttribute('src', localStorage.installedScripts[i]);
        script.setAttribute('async', '');
        parent.appendChild(script);
    };
})()