export const getCurrentVersionTag = async ()=> {
    const req = await fetch('https://api.github.com/repos/gileadeteixeira/portfolio-react/tags', {
        method: 'GET'
    });
    const json = await req.json();
    const tags = json.map(tag => {
        return tag.name.replace("v", "");
    });
    return tags[0];
};
