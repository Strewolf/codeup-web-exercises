

async function getLastCommit(username) {
    const url = `https://api.github.com/users/${username}/events`;

    const response = await fetch(url, {
        headers: {
            'Authorization': `GithubT`
        }

    });

    const data = await response.json();

    const lastCommit = data.filter(event => event.type === 'PushEvent')[0];

    const date = new Date(lastCommit.created_at);
    const options = { timeZone: 'America/Chicago' };
    return date.toLocaleString('default', options);

}


async function testGetLastCommit() {
    const username = 'Strewolf';
    const lastCommitDate = await getLastCommit(username);
    console.log(lastCommitDate);
}

testGetLastCommit();

